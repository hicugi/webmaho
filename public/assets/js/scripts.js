(() => {
  const redirect = decodeURIComponent(location.search);
  const redirectKey = "?redirect=";

  if (redirect.substring(0, redirectKey.length) === redirectKey) {
    location.href = redirect.substring(redirectKey.length);
  }
})();

var api = {
  url: "https://api.webmaho.com/",

  send(url, params) {
    var self = this;
    return new Promise(function(resolve, reject) {
      var xml = new XMLHttpRequest();

      // set header
      // xml.setRequestHeader();

      xml.open((params || {}).method || "GET", [self.url, url].join(""));

      // check state
      xml.addEventListener("readystatechange", function(response) {
        if (xml.readyState !== xml.DONE) return;

        try {
          resolve(JSON.parse(xml.responseText));
        } catch (error) {
          reject(error);
        }
      });

      xml.send();
    });
  },

  get(url, body) {
    var newUrl = [url];

    if (body) {
      var data = [];
      for (var k in body) {
        data.push(`${k}=${body[k]}`);
      }
      newUrl.push(data.join("&"));
    }

    return this.send(newUrl.join("?"), { method: "GET" });
  },
  post(url) {
    return this.send(url, { method: "POST" });
  }
};

function setAttributes(dom, params) {
  for (var key in params) {
    var val = params[key];

    dom.setAttribute(key, val);
  }
}
function createElement(tag, params) {
  var elm = document.createElement(tag);
  if (params !== undefined) {
    setAttributes(elm, params);
  }

  return elm;
}

// catalog
(function(id) {
  var container = document.querySelector(id);
  var catalogContainer = document.querySelector("#catalogItems");

  var loading = {
    elm: null,
    show() {
      var elm = createElement("DIV", { class: "loading" });
      container.appendChild(elm);

      this.elm = elm;
    },
    hide() {
      if (this.elm === null) return;
      container.removeChild(this.elm);

      this.elm = null;
    }
  };

  var catalog = {
    limit: 6,
    total: 0,

    pageValue: 1,
    moreBtn: null,
    get page() {
      return this.pageValue;
    },
    set page(newValue) {
      var self = this;

      this.pageValue = newValue;

      var isMoreItems = (newValue - 1) * this.limit < this.total;
      var btn = this.moreBtn;

      if (isMoreItems && btn === null) {
        btn = createElement("DIV", { class: "catalog-btn" });

        var btnInner = createElement("BUTTON", { class: "btn btn_info" });
        btnInner.innerText = "More";

        btnInner.addEventListener("click", function() {
          self.fetchItems();
        });

        btn.appendChild(btnInner);

        this.moreBtn = btn;

        container.appendChild(btn);
      }
      if (!isMoreItems && btn !== null) {
        container.removeChild(btn);
        this.moreBtn = null;
      }
    },

    // loading
    isLoadingValue: false,
    get isLoading() {
      return this.isLoadingValue;
    },
    set isLoading(newValue) {
      this.isLoadingValue = newValue;

      if (newValue) loading.show();
      else loading.hide();

      var btn = this.moreBtn;
      if (btn === null) return;

      btn.style.display = newValue ? "none" : "block";
    },

    getItems() {
      var self = this;

      this.isLoading = true;

      return api
        .get("catalog", { page: this.page, limit: this.limit })
        .then(function(data) {
          self.isLoading = false;

          if (data.pagination !== undefined) {
            self.total = data.pagination.total;
          }

          return data.items;
        })
        .catch(function() {
          self.isLoading = false;
        });
    },

    fetchItems() {
      var self = this;

      this.getItems().then(function(items) {
        self.page += 1;

        items.forEach(function(item) {
          var li = createElement("LI");
          var article = createElement("ARTICLE", { class: "catalog__item" });

          // image
          (function() {
            var a = createElement("A", {
              "aria-label": item.title,
              href: item.link,
              class: "catalog__item__image",
              target: "_blank",
              rel: "noopener"
            });

            var picture = createElement("PICTURE");

            if (item.image_webp) {
              var imageSource = createElement("SOURCE", {
                srcset: item.image_webp,
                type: "image/webp"
              });

              picture.appendChild(imageSource);
            }

            var img = createElement("IMG", {
              src: item.image,
              alt: item.title,
              class: "image_cover",
              type: "image/jpg"
            });

            picture.appendChild(img);
            a.appendChild(picture);
            li.appendChild(a);
          })();

          // info
          (function() {
            var parent = createElement("DIV", {
              class: "catalog__item__info"
            });

            // header
            var header = createElement("HEADER", {
              class: "catalog__item__header"
            });

            // title
            var a = createElement("A", {
              href: item.link,
              target: "_blank",
              rel: "noopener"
            });

            var h3 = createElement("H3");
            h3.innerText = item.title;

            a.appendChild(h3);
            header.appendChild(a);
            // title end

            // subtitle
            var subtitle = createElement("DIV", {
              class: "catalog__item__subtitle"
            });

            var time = createElement("TIME", { datetime: item.created_at });
            var d = new Date(item.created_at).toString().split(" ");
            time.innerText = [d[2], d[1], d[3]].join(" ");
            subtitle.appendChild(time);

            if (item.company) {
              var company = createElement("span");
              company.innerHTML = [
                " by <strong>",
                item.company,
                "</strong>"
              ].join("");

              subtitle.appendChild(company);
            }

            header.appendChild(subtitle);
            // subtitle end

            parent.appendChild(header);
            // header end

            // body
            var body = createElement("DIV", { class: "catalog__item__body" });

            var desc = createElement("DIV", {
              class: "catalog__item__description"
            });
            desc.innerText = item.description;

            body.appendChild(desc);
            parent.appendChild(body);
            // body end

            article.appendChild(parent);
          })();

          li.appendChild(article);
          catalogContainer.appendChild(li);
        });
      });
    }
  };
  catalog.fetchItems();
})("#catalog");
