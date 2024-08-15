(() => {
  const redirect = decodeURIComponent(location.search);
  const redirectKey = "?redirect=";

  if (redirect.substring(0, redirectKey.length) === redirectKey) {
    location.href = redirect.substring(redirectKey.length);
  }
})();

var api = {
  send(url, params) {
    return new Promise(function (resolve, reject) {
      var xml = new XMLHttpRequest();

      xml.open(params.method, url);

      xml.addEventListener("readystatechange", function () {
        if (xml.readyState !== xml.DONE) return;

        try {
          resolve(xml.responseText);
        } catch (error) {
          reject(error);
        }
      });

      xml.send();
    });
  },

  get(url) {
    return this.send(url, { method: "GET" });
  },
};

(function () {
  var moreBtn = document.querySelector("#catalogMore");
  if (!moreBtn) return;

  var container = document.querySelector("#catalogMoreItems");
  var loadingElm = document.querySelector("#catalogLoading");

  var isLoading = false;

  moreBtn.addEventListener("click", function () {
    if (isLoading) return;

    isLoading = true;
    loadingElm.style.display = "block";

    api
      .get("catalog.html")
      .then((htmlData) => {
        container.innerHTML = htmlData;
        container.style.display = "grid";
      })
      .finally(() => {
        loadingElm.style.display = "none";
        isLoading = false;

        moreBtn.style.display = "none";
      });
  });
})();
