const CALLBACK_URL = "/callback";
const REQUEST_SUCCESS_TEXT =
  "Спасибо. С вами обязательно свяжутся в течении 2-7 минут!";
const REQUEST_ERROR_TEXT = `Что то пошло не так... <br />
  Попробуйте позже или свяжитесь с нами по телефону:
  <a href="tel" href="tel:+77020079887">+7 (702) 007 98 87</a>`;

// field
(() => {
  const CLASSNAME = "form";
  const CLASSNAME_GROUP = `${CLASSNAME}-group`;
  const CLASSNAME_ERROR = `${CLASSNAME_GROUP}__error`;

  const CLASSNAME_ICON_SUCCESS = `${CLASSNAME}-icon-success`;
  const CLASSNAME_ICON_ERROR = `${CLASSNAME}-icon-error`;

  window.field = {
    setError(el, message) {
      const group = el.parentNode;
      const elError = document.createElement("SPAN");

      elError.className = CLASSNAME_ERROR;
      elError.innerHTML = message;

      group.classList.add(`${CLASSNAME_GROUP}--has-error`);

      group.append(elError);
    },

    reset(el) {
      const group = el.parentNode;

      const error = group.querySelector(`.${CLASSNAME_ERROR}`);
      if (error) group.removeChild(error);

      group.classList.remove(`${CLASSNAME_GROUP}--has-error`);
    },

    callbackRequest(el) {
      const formData = new FormData(el);
      return api.post(CALLBACK_URL, formData);
    },

    animateError(el) {
      const filter = document.querySelector("#requestErrorFilter feTurbulence");
      const filterVal = { val: 0.000001 };
      const timeline = new TimelineLite({
        paused: true,
        onUpdate: function () {
          filter.setAttribute("baseFrequency", "0.00001 " + filterVal.val);
        },
        onStart: function () {
          el.style.filter = "url(#requestErrorFilter)";
        },
        onComplete: function () {
          el.style.filter = "none";
        },
      });

      timeline.to(filterVal, 0.4, { val: 0.4 });
      timeline.to(filterVal, 0.2, { val: 0.000001 });

      setTimeout(() => {
        timeline.restart();
      }, 100);
    },
    getErrorIcon() {
      const icon = document.createElement("DIV");
      icon.className = CLASSNAME_ICON_ERROR;

      return Promise.resolve()
        .then(() => icon)
        .finally(() => {
          this.animateError(icon);
        });
    },

    animateSuccess(icon) {
      const filter = document.querySelector(
        "#requestSuccessFilter feGaussianBlur"
      );
      const iconBg = document.querySelector("span");

      const particleCount = 20;
      const particles = [];
      const tl = new TimelineLite({
        onUpdate: function () {
          filter.setAttribute("x", 0);
        },
      });

      const getRandom = (min, max) => Math.random() * (max - min) + min;

      tl.to(iconBg, 0.6, { scaleX: 1.05 });
      tl.to(
        iconBg,
        0.9,
        { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) },
        0.6
      );

      for (let i = 0; i < particleCount; i++) {
        particles.push(document.createElement("span"));
        icon.appendChild(particles[i]);

        particles[i].classList.add(i % 2 ? "left" : "right");

        const dir = i % 2 ? "-" : "+";
        const r = i % 2 ? (getRandom(-1, 1) * i) / 2 : getRandom(-1, 1) * i;
        const size = i < 2 ? 2 : getRandom(0.8, 1.6);
        const tl = new TimelineLite({
          onComplete: function (i) {
            particles[i].parentNode.removeChild(particles[i]);
            this.kill();
          },
          onCompleteParams: [i],
        });

        tl.set(particles[i], { scale: size });
        tl.to(particles[i], 0.6, {
          x: dir + 20,
          scaleX: 3,
          ease: SlowMo.ease.config(0.1, 0.7, false),
        });
        tl.to(particles[i], 0.1, { scale: size, x: dir + "=25" }, "-=0.1");
        if (i >= 2)
          tl.set(particles[i], {
            backgroundColor: "#62E8A9",
          });
        tl.to(particles[i], 0.6, {
          x: dir + getRandom(60, 100),
          y: r * 10,
          scale: 0.1,
          ease: Power3.easeOut,
        });
        tl.to(particles[i], 0.2, { opacity: 0, ease: Power3.easeOut }, "-=0.2");
      }
    },
    getSuccessIcon() {
      const icon = document.createElement("DIV");
      icon.className = CLASSNAME_ICON_SUCCESS;

      const bg = document.createElement("SPAN");
      bg.className = `${CLASSNAME_ICON_SUCCESS}__bg`;

      icon.append(bg);

      return Promise.resolve()
        .then(() => icon)
        .finally(() => {
          this.animateSuccess(icon);
        });
    },
  };
})();

// modal
(() => {
  const CLASSNAME = "modal";
  const CLASSNAME_SHOW = `${CLASSNAME}_show`;
  const CLASSNAME_ACTIVE = `${CLASSNAME}_active`;
  const CLASSNAME_HTML = `html_${CLASSNAME}`;

  const html = document.querySelector("html");
  let currentElm;
  let isOpen = false;

  window.modal = {
    open(el) {
      isOpen = true;
      currentElm = el;

      html.classList.add(CLASSNAME_HTML);

      el.classList.add(CLASSNAME_SHOW);
      setTimeout(() => {
        el.classList.add(CLASSNAME_ACTIVE);
      });
    },
    close(el) {
      isOpen = false;

      const openedElm = el || currentElm;

      html.classList.remove(CLASSNAME_HTML);

      openedElm.classList.remove(CLASSNAME_ACTIVE);

      return new Promise((ok) => {
        setTimeout(() => {
          openedElm.classList.remove(CLASSNAME_SHOW);
          ok();
        }, 300);
      });
    },
  };

  document.body.addEventListener("keydown", ({ code }) => {
    if (code !== "Escape") return;
    if (!isOpen) return;

    modal.close();
  });
})();

// nav
(() => {
  const elNav = document.querySelector("#nav");
  const btn = document.querySelector("#navToggleBtn");
  const html = document.querySelector("html");
  const items = [...elNav.querySelectorAll("a, button")];

  const CLASSNAME_HTML = "html--nav-active";
  const CLASSNAME_ACTIVE = "nav--active";
  const CLASSNAME_BTN_ACTIVE = "nav-toggle-btn--active";

  window.nav = {
    toggle() {
      const isActive = elNav.classList.contains(CLASSNAME_ACTIVE);

      if (isActive) {
        nav.close();
      } else {
        elNav.classList.add(CLASSNAME_ACTIVE);
        btn.classList.add(CLASSNAME_BTN_ACTIVE);

        window.scrollTo(0, 0);
        html.classList.add(CLASSNAME_HTML);
      }
    },

    close() {
      elNav.classList.remove(CLASSNAME_ACTIVE);
      btn.classList.remove(CLASSNAME_BTN_ACTIVE);
      html.classList.remove(CLASSNAME_HTML);
    },
  };

  items.forEach((el) => {
    el.addEventListener("click", () => {
      nav.close();
    });
  });
})();

// socials
(() => {
  const { socials } = window;
  if (!socials || !Object.keys(socials).length) return;

  const places = [...document.querySelectorAll("[data-socials]")];

  const CLASSNAME_ITEM = "socials__item";
  const CLASSNAME_LINK = "socials__link";

  places.forEach((parent) => {
    Object.entries(socials).forEach(([key, link]) => {
      const item = document.createElement("LI");
      const elLink = document.createElement("A");

      item.className = CLASSNAME_ITEM;
      Object.assign(elLink, {
        className: [CLASSNAME_LINK, "icon", `icon_${key}`].join(" "),
        href: link,
      });

      item.append(elLink);
      parent.append(item);
    });
  });
})();

// prices
(() => {
  const tab = document.querySelector("#pricesTab");
  const tabBg = document.querySelector("#pricesTabBg");
  const tabBtns = [...tab.querySelectorAll("button")];

  const content = document.querySelector("#pricesContent");

  const CLASSNAME = "prices";
  const CLASSNAME_TAB_ACTIVE = `${CLASSNAME}-tab-item--active`;

  let currentIndex = 0;

  window.handlePriceTabClick = ({ target }, index) => {
    currentIndex = index;

    const item = target.parentNode;
    const width = item.clientWidth;

    // tab modifcations
    (() => {
      tabBtns.forEach((el) => {
        el.parentNode.classList.remove(CLASSNAME_TAB_ACTIVE);
      });
      item.classList.add(CLASSNAME_TAB_ACTIVE);

      tabBg.style.transform = `translateX(${index * width}px)`;
    })();

    // content modifications
    content.style.transform = `translateX(${-index * 100}%)`;
  };

  let timer;
  window.onresize = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      tabBtns[currentIndex].click();
    }, 70);
  };

  tabBtns[currentIndex].click();
})();

// gallery
(() => {
  const currentModal = document.querySelector("#galleryModal");
  const content = document.querySelector("#galleryModalContent");
  const prevBtn = document.querySelector("#galleryPrev");
  const nextBtn = document.querySelector("#galleryNext");

  const CLASSNAME_LIST = "gallery-list";
  const CLASSNAME_ITEM = `${CLASSNAME_LIST}__item`;
  const CLASSNAME_IMG = `${CLASSNAME_LIST}__img`;

  window.gallery = {
    index: 0,
    items: [],
    getMax: () => gallery.items.length - 1,

    open(list, index) {
      gallery.items = list;
      modal.open(currentModal);

      list.forEach((path, i) => {
        const li = document.createElement("LI");
        const img = document.createElement("IMG");

        li.className = CLASSNAME_ITEM;
        li.style.backgroundImage = `url('${path}')`;

        Object.assign(img, {
          className: CLASSNAME_IMG,
          src: path,
          alt: `Изображение ${i + 1}`,
        });

        li.append(img);
        content.append(li);
      });

      gallery.scroll(index);
    },
    close() {
      modal.close(currentModal).then(() => {
        gallery.index = 0;
        gallery.items = [];
        content.innerHTML = "";
      });
    },

    scroll(index) {
      gallery.index = index;
      const x = index * content.parentNode.clientWidth;
      content.style.transform = `translateX(${-x}px)`;
    },
  };

  prevBtn.addEventListener("click", () => {
    let index = gallery.index - 1;
    const max = gallery.getMax();

    if (index < 0) index = max;

    gallery.scroll(index);
  });
  nextBtn.addEventListener("click", () => {
    let index = gallery.index + 1;
    const max = gallery.getMax();

    if (index >= max) index = 0;

    gallery.scroll(index);
  });
})();

// certs
(() => {
  const items = [...document.querySelectorAll("#certs button")];

  const handleClick = (_, index) => {
    const images = items.map((el) => el.getAttribute("data-image"));
    gallery.open(images, index);
  };

  items.forEach((el, index) => {
    el.addEventListener("click", (e) => handleClick(e, index));
  });
})();

// contacts map
(() => {
  const currentModal = document.querySelector("#mapModal");

  window.map = {
    open() {
      modal.open(currentModal);
    },
    close() {
      modal.close(currentModal);
    },
  };
})();
// contacts form
(() => {
  const form = document.querySelector("#contactsForm");
  const elResults = document.querySelector("#contactsFormResults");
  const CLASSNAME_DESCRIPTION = "contacts-form-results__text";

  const showResults = (icon, msg) => {
    const elText = document.createElement("p");
    Object.assign(elText, {
      className: CLASSNAME_DESCRIPTION,
      innerHTML: msg,
    });

    elResults.append(elText);
    elResults.append(icon);

    form.style.display = "none";
    elResults.style.display = "block";
  };
  const hideResults = () => {
    form.style.display = "block";
    elResults.style.display = "none";
    elResults.innerHTML = "";
  };

  const showSuccess = () => {
    field.getSuccessIcon().then((icon) => {
      showResults(icon, REQUEST_SUCCESS_TEXT);
    });
  };
  const showError = (msg) => {
    field.getErrorIcon().then((icon) => {
      showResults(icon, msg);
    });
  };

  form.onsubmit = (elm) => {
    elm.preventDefault();

    field
      .callbackRequest(form)
      .then(showSuccess)

      .catch((response) => {
        return Promise.resolve()
          .then(response.json)
          .then(({ message }) => showError(message));
      })
      .catch(() => {
        showError(REQUEST_ERROR_TEXT);
      });
  };
})();

// callback
(() => {
  const callbackModal = document.querySelector("#callbackModal");
  const form = document.querySelector("#callbackForm");

  const formContainer = document.querySelector("#callbackFormContainer");
  const elResult = document.querySelector("#callbackResult");

  const CLASSNAME_DESCRIPTION = "callback__description";

  const showResults = (icon, msg) => {
    const elText = document.createElement("P");

    Object.assign(elText, {
      className: CLASSNAME_DESCRIPTION,
      innerHTML: msg,
    });

    elResult.append(elText);
    elResult.append(icon);

    formContainer.style.display = "none";
    elResult.style.display = "block";
  };
  const hideResults = () => {
    formContainer.style.display = "block";
    elResult.style.display = "none";
    elResult.innerHTML = "";
  };
  hideResults();

  const succesMethods = {
    show() {
      field.getSuccessIcon().then((icon) => {
        showResults(icon, REQUEST_SUCCESS_TEXT);
      });
    },
    hide() {
      hideResults();
    },
  };
  const errorMethods = {
    show(message) {
      formContainer.style.display = "none";

      field.getErrorIcon().then((icon) => {
        showResults(icon, message);
      });
    },
    hide() {
      hideResults();
    },
  };

  window.handleCallback = (label) => {
    modal.open(callbackModal);

    if (label === undefined) return;

    const input = document.createElement("input");
    Object.assign(input, {
      type: "hidden",
      name: "label",
      value: label,
    });

    form.append(input);
    setTimeout(() => {
      form.querySelector("input").focus();
    }, 100);
  };
  window.handleCallbackClose = () => {
    [...form.querySelectorAll("input[type=hidden]")].forEach((el) => {
      form.removeChild(el);
    });

    modal.close(callbackModal).then(() => {
      succesMethods.hide();
      errorMethods.hide();

      // remove values
      [...form.querySelectorAll("input, textarea")].forEach((el) => {
        el.value = "";
        field.reset(el);
      });
    });
  };

  form.onsubmit = (elm) => {
    elm.preventDefault();
    field
      .callbackRequest(form)
      .then(succesMethods.show)

      .catch((response) => {
        return Promise.resolve()
          .then(response.json)
          .then(({ message }) => errorMethods.show(message));
      })
      .catch(() => {
        errorMethods.show(REQUEST_ERROR_TEXT);
      });
  };
})();

// fixed
(() => {
  const btn = document.querySelector("#fixedMainBtn");
  const list = document.querySelector("#fixedList");
  const listInner = list.querySelector("*");

  const CLASSNAME = "fixed-list";
  const CLASSNAME_ACTIVE = `${CLASSNAME}_active`;

  let timeout;

  btn.addEventListener("click", function () {
    const isActive = list.classList.contains(CLASSNAME_ACTIVE);
    const width = listInner.clientWidth;

    clearTimeout(timeout);

    if (isActive) {
      list.classList.remove(CLASSNAME_ACTIVE);
      timeout = setTimeout(() => {
        list.style.width = "0px";
      }, 300);
    } else {
      list.classList.add(CLASSNAME_ACTIVE);
      list.style.width = [width, "px"].join("");
    }
  });

  const bt = document.querySelector("#fixedMainBtn");
  const filter = document.querySelector("#fixedMainBtnFilter");
  const feImage = filter.querySelector("feImage");
  const feDisplacementMap = filter.querySelector("feDisplacementMap");

  const animate = () => {
    TweenLite.set(feImage, {
      attr: {
        x: bt.clientWidth / 2 + 2,
        y: bt.clientHeight / 2 + 2,
        width: 0,
        height: 0,
      },
    });
    TweenLite.to(feImage, 5, {
      attr: {
        x: "-=300",
        y: "-=300",
        width: 600,
        height: 600,
      },
    });
    TweenLite.fromTo(
      feDisplacementMap,
      3,
      {
        attr: {
          scale: 30,
        },
      },
      {
        attr: {
          scale: 0,
        },
      }
    );
  };
  setInterval(animate, 8000);
  animate();
})();
