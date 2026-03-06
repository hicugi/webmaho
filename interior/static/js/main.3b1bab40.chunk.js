(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    101: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(0),
        l = a.n(s),
        n = a(2),
        c = a.n(n),
        r = (a(45), a(39)),
        i = a(10),
        o = a(4),
        m = a(5),
        d = a(7),
        h = a(6),
        p = a(8),
        u = a(37),
        _ = a.n(u),
        g = a(17),
        E = a.n(g),
        b = a(11),
        N = a.n(b),
        v = a(25),
        f = a.n(v),
        k = a(38),
        w = a.n(k),
        y = {
          url: BASE_PATH + "/",
        },
        j = (function (e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(d.a)(this, Object(h.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(t, e),
            Object(m.a)(t, [
              {
                key: "render",
                value: function () {
                  return this.props.info
                    ? l.a.createElement(
                        "section",
                        { id: this.props.id, className: this.props.className },
                        this.props.children,
                      )
                    : "";
                },
              },
            ]),
            t
          );
        })(s.Component),
        S = (function (e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(d.a)(this, Object(h.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(t, e),
            Object(m.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.data;
                  return t
                    ? l.a.createElement(
                        "section",
                        { className: "section-prices img_bg__parent" },
                        l.a.createElement("div", {
                          className: "img_bg",
                          style: {
                            backgroundImage: "url('".concat(t.image, "')"),
                          },
                        }),
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "h2",
                            { className: "section-title", align: "center" },
                            t.pagetitle,
                          ),
                          l.a.createElement(
                            "ul",
                            { className: "prices" },
                            t.childs &&
                              t.childs.map(function (t, a) {
                                return l.a.createElement(
                                  "li",
                                  { key: a },
                                  l.a.createElement(
                                    "article",
                                    {
                                      className: "prices__item",
                                      align: "center",
                                    },
                                    l.a.createElement(
                                      "div",
                                      { className: "prices__item__body" },
                                      l.a.createElement(
                                        "header",
                                        {
                                          className: "prices__item__header",
                                          style: {
                                            backgroundColor: t.menutitle,
                                          },
                                        },
                                        l.a.createElement(
                                          "h3",
                                          { className: "prices__item__title" },
                                          t.pagetitle,
                                        ),
                                        l.a.createElement(
                                          "p",
                                          {
                                            className: "prices__item__subtitle",
                                          },
                                          t.longtitle,
                                        ),
                                      ),
                                      l.a.createElement("section", {
                                        className: "prices__item__content",
                                        dangerouslySetInnerHTML: {
                                          __html: t.content,
                                        },
                                      }),
                                      l.a.createElement(
                                        "button",
                                        {
                                          className: "btn btn_round",
                                          style: {
                                            backgroundColor: t.menutitle,
                                          },
                                          onClick: function () {
                                            return e.handleFormModalShow(
                                              t.pagetitle,
                                            );
                                          },
                                        },
                                        t.link_attributes,
                                      ),
                                    ),
                                    l.a.createElement(
                                      "footer",
                                      { className: "prices__item__footer" },
                                      l.a.createElement(
                                        "p",
                                        {
                                          className:
                                            "prices__item__footer__title",
                                        },
                                        t.description,
                                      ),
                                      l.a.createElement(
                                        "p",
                                        {
                                          className:
                                            "prices__item__footer__subtitle",
                                        },
                                        t.introtext,
                                      ),
                                    ),
                                  ),
                                );
                              }),
                          ),
                        ),
                      )
                    : "";
                },
              },
            ]),
            t
          );
        })(s.Component),
        O = (function (e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(d.a)(this, Object(h.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(t, e),
            Object(m.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return l.a.createElement(
                    "ul",
                    { className: "projects" },
                    this.props.items &&
                      this.props.items.map(function (t, a) {
                        return l.a.createElement(
                          "li",
                          { key: a },
                          l.a.createElement(
                            "div",
                            { className: "projects__item" },
                            l.a.createElement(
                              "div",
                              {
                                className: "projects__item__image",
                                style: {
                                  backgroundImage: "url('".concat(
                                    t.image,
                                    "')",
                                  ),
                                },
                              },
                              l.a.createElement("button", {
                                className:
                                  "projects__item__imagesbtn" +
                                  (t.images ? "" : " hide"),
                                onClick: function () {
                                  return e.props.handleSliderModalShow(
                                    t.images,
                                  );
                                },
                              }),
                            ),
                            l.a.createElement(
                              "h3",
                              { className: "projects__item__title" },
                              t.pagetitle,
                            ),
                            l.a.createElement(
                              "p",
                              {
                                className: "projects__item__subtitle".concat(
                                  t.longtitle ? "" : " hide",
                                ),
                              },
                              l.a.createElement("i", null, t.longtitle),
                            ),
                            l.a.createElement(
                              "p",
                              {
                                className:
                                  "projects__item__description text-wrap",
                              },
                              t.description,
                            ),
                          ),
                        );
                      }),
                  );
                },
              },
            ]),
            t
          );
        })(s.Component),
        M = (function (e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var s = arguments.length, l = new Array(s), n = 0; n < s; n++)
              l[n] = arguments[n];
            return (
              ((a = Object(d.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(l)),
              )).state = { loading: !1 }),
              (a.onSubmit = function (e) {
                e.preventDefault();
                for (
                  var t = new FormData(),
                    s = e.target.getElementsByTagName("input"),
                    l = 0;
                  l < s.length;
                  l++
                ) {
                  var n = s[l];
                  t.append(n.getAttribute("name"), n.value);
                }
                _.a
                  .post("/request", t)
                  .then(function (e) {
                    var t = e.data;
                    (a.setState({
                      loading: !1,
                      formResponded: !(!t || !t.response) && t.response,
                    }),
                      g.notify.show(a.props.form_message_success));
                  })
                  .catch(function () {
                    (a.setState({ loading: !1, formResponded: !1 }),
                      a.props.form_message_error &&
                        g.notify.show(
                          a.props.form_message_error.replace(
                            "[phone]",
                            a.props.phone,
                          ),
                        ));
                  });
              }),
              a
            );
          }
          return (
            Object(p.a)(t, e),
            Object(m.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = ["form"];
                  (this.props.className && e.push(this.props.className),
                    this.state.loading && e.push("loading"));
                  var t = { className: e.join(" "), onSubmit: this.onSubmit };
                  return l.a.createElement("form", t, this.props.children);
                },
              },
            ]),
            t
          );
        })(s.Component),
        C = (function (e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var s = arguments.length, l = new Array(s), n = 0; n < s; n++)
              l[n] = arguments[n];
            return (
              ((a = Object(d.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(l)),
              )).ref = !1),
              (a.maskPhone = function () {
                var e = a.ref;
                if (!e || e.isMaskPhoneInited) return 0;
                ((e.isMaskPhoneInited = !0),
                  e.addEventListener("focus", function (e) {
                    "" === e.target.value &&
                      (e.target.value = "+7 (___) __-__-__");
                  }),
                  e.addEventListener("blur", function (e) {
                    "+7 (___) __-__-__" === e.target.value &&
                      (e.target.value = "");
                  }),
                  e.addEventListener("input", function (e) {
                    var t = e.target.value
                        .replace(/\+7\s/, "")
                        .replace(/\D/g, "")
                        .replace(/^7{,1}/, "")
                        .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/),
                      a = t[1] ? "+7 " : "+7 (___) __-__-__";
                    ((a += t[1] ? "(" + t[1] : ""),
                      (a += t[2] ? ") " + t[2] : ""),
                      (a += t[3] ? "-" + t[3] : ""),
                      (a += t[4] ? "-" + t[4] : ""),
                      (e.target.value = a));
                  }));
              }),
              a
            );
          }
          return (
            Object(p.a)(t, e),
            Object(m.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  "phone" === this.props.name && this.maskPhone();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = ["form-group"];
                  (this.props.className && t.push(this.props.className),
                    this.props.light && t.push("form-group_light"),
                    this.props.error && t.push("form-group--error"));
                  var a,
                    s = !1;
                  switch (this.props.name) {
                    case "phone":
                      ((a = "tel"), (s = !0));
                      break;
                    case "email":
                      a = "email";
                      break;
                    default:
                      a = "text";
                  }
                  this.props.type && (a = this.props.type);
                  var n = { className: t.join(" ") },
                    c = {
                      type: a,
                      name: this.props.name,
                      value: this.props.value,
                      placeholder: this.props.placeholder,
                      rows: this.props.rows,
                      required: this.props.required,
                      onChange: this.props.handleChange,
                    };
                  return (
                    s &&
                      (c.ref = function (t) {
                        e.ref = t;
                      }),
                    "textarea" === a
                      ? l.a.createElement(
                          "div",
                          n,
                          l.a.createElement("textarea", c),
                          l.a.createElement("div", {
                            className: "form-group__error",
                          }),
                        )
                      : l.a.createElement(
                          "div",
                          n,
                          l.a.createElement("input", c),
                          l.a.createElement("div", {
                            className: "form-group__error",
                          }),
                        )
                  );
                },
              },
            ]),
            t
          );
        })(s.Component),
        x = (function (e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var s = arguments.length, l = new Array(s), n = 0; n < s; n++)
              l[n] = arguments[n];
            return (
              ((a = Object(d.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(l)),
              )).state = {
                loading: !0,
                sliderModal: !1,
                isMapActive: !1,
                isFormModalOpen: !1,
                formModalPack: "",
              }),
              (a.domAddClass = function (e, t) {
                var a = e.className.split(" ");
                if (-1 !== a.indexOf(t)) return e;
                (a.push(t),
                  (e.className = a
                    .join(" ")
                    .replace(/\s{2,}/, " ")
                    .replace(/^\s|\s$/, "")));
              }),
              (a.domRemoveClass = function (e, t) {
                for (var a = e.className.split(" "); -1 !== a.indexOf(t); )
                  a.splice(a.indexOf(t), 1);
                e.className = a
                  .join(" ")
                  .replace(/\s{2,}/, " ")
                  .replace(/^\s|\s$/, "");
              }),
              (a.getPhoneTel = function (e) {
                return "+" + e.replace(/\D/g, "").replace(/^8{1}/, 7);
              }),
              (a.handleSliderModalShow = function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                a.setState({ sliderModal: !0, sliderModalItems: e });
                var s = Object(i.a)(Object(i.a)(a));
                setTimeout(
                  function () {
                    s.sliderModal.slickGoTo(t);
                  },
                  200,
                  s,
                );
              }),
              (a.handleSliderModalClose = function () {
                a.setState({ sliderModal: !1 });
              }),
              (a.handleFormModalShow = function (e) {
                a.setState({ isFormModalOpen: !0, formModalPack: e });
              }),
              (a.handleFormModalClose = function () {
                a.setState({ isFormModalOpen: !1 });
              }),
              (a.handleScrollTop = function (e) {
                e.preventDefault();
                var t = e.currentTarget.getAttribute("href").replace("#", ""),
                  s = document.getElementById(t).offsetTop - 70;
                (w.a.animateScroll.scrollTo(s, { duration: 800 }),
                  a.setState({ navActive: !1 }));
              }),
              a
            );
          }
          return (
            Object(p.a)(t, e),
            Object(m.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = this;
                  ((window.onscroll = function () {
                    var e = window.scrollY,
                      a = document.body;
                    e > 200
                      ? t.domAddClass(a, "scroll-top200")
                      : t.domRemoveClass(a, "scroll-top200");
                  }),
                    fetch(y.url + "j/base.json")
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (t) {
                        e.setState(Object(r.a)({ loading: !1 }, t));
                      }));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  if (this.state.loading)
                    return l.a.createElement("div", { className: "loading" });
                  var t = this.state.contacts,
                    a = {
                      form_message_success: this.state.form_message_success,
                      form_message_error: this.state.form_message_error,
                      phone: t.phone,
                    },
                    s = {
                      tabindex: 1,
                      className: "slider__modal__items",
                      inline: !0,
                      dots: !0,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      ref: function (t) {
                        e.sliderModal = t;
                      },
                    },
                    n = { handleSliderModalShow: this.handleSliderModalShow };
                  return l.a.createElement(
                    "div",
                    { className: "App" },
                    l.a.createElement(
                      "header",
                      { className: "App-header" },
                      l.a.createElement(
                        "div",
                        { className: "container" },
                        l.a.createElement(
                          "div",
                          { className: "logo" },
                          l.a.createElement("img", {
                            src: this.state.logo,
                            alt: "logo",
                          }),
                        ),
                        l.a.createElement(
                          "div",
                          { className: "contacts", align: "right" },
                          l.a.createElement(
                            "div",
                            { className: "contacts__address hidden-xs" },
                            t.address,
                          ),
                          l.a.createElement(
                            "a",
                            {
                              className: "contacts__phone",
                              href: "tel:".concat(this.getPhoneTel(t.phone)),
                            },
                            t.phone,
                          ),
                        ),
                      ),
                    ),
                    l.a.createElement(
                      "main",
                      null,
                      l.a.createElement(
                        j,
                        {
                          className: "section-home section_dark",
                          info: this.state.description,
                        },
                        l.a.createElement(
                          N.a,
                          {
                            fade: !0,
                            autoplay: !0,
                            autoplaySpeed: 3e3,
                            speed: 800,
                            className: "bgslider",
                            arrows: !1,
                            dots: !1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                          },
                          this.state.images &&
                            this.state.images.map(function (e, t) {
                              return l.a.createElement(
                                "div",
                                { key: t },
                                l.a.createElement("div", {
                                  className: "bgslider__item",
                                  style: {
                                    backgroundImage: "url('".concat(e, "')"),
                                  },
                                }),
                              );
                            }),
                        ),
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "div",
                            { className: "flex flex_middle flex_grow" },
                            l.a.createElement(
                              "div",
                              { align: "center" },
                              l.a.createElement("h1", {
                                className: "title text-wrap",
                                dangerouslySetInnerHTML: {
                                  __html: this.state.description
                                    .replace(
                                      /\[/g,
                                      '<span style="color:'.concat(
                                        this.state.link_attributes,
                                        '">',
                                      ),
                                    )
                                    .replace(/\]/g, "</span>"),
                                },
                              }),
                              l.a.createElement(
                                "p",
                                { className: "subtitle" },
                                this.state.introtext,
                              ),
                              l.a.createElement(
                                "div",
                                {
                                  className:
                                    "flex flex_center flex_wrap section_btns",
                                },
                                l.a.createElement(
                                  "a",
                                  {
                                    className:
                                      "btn btn_large btn_wide btn_glass",
                                    href: "#aboutus",
                                    onClick: this.handleScrollTop,
                                  },
                                  "\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",
                                ),
                                l.a.createElement(
                                  "a",
                                  {
                                    className:
                                      "btn btn_large btn_wide btn_info",
                                    href: "#portfolio",
                                    onClick: this.handleScrollTop,
                                    style: {
                                      backgroundColor:
                                        this.state.link_attributes,
                                    },
                                  },
                                  "\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442\u044b",
                                ),
                              ),
                            ),
                          ),
                        ),
                        l.a.createElement("a", {
                          className: "btn_scrolldown",
                          href: "#aboutus",
                          onClick: this.handleScrollTop,
                        }),
                      ),
                      l.a.createElement(
                        j,
                        {
                          id: "aboutus",
                          className: "section-aboutus",
                          info: this.state.aboutus,
                        },
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "h2",
                            { className: "section-title", align: "center" },
                            this.state.aboutus.pagetitle,
                          ),
                          l.a.createElement(
                            "div",
                            { className: "row" },
                            l.a.createElement(
                              "div",
                              { className: "col-md-6" },
                              l.a.createElement(
                                "div",
                                { className: "description" },
                                l.a.createElement(
                                  "p",
                                  null,
                                  l.a.createElement("i", {
                                    dangerouslySetInnerHTML: {
                                      __html: this.state.aboutus.content,
                                    },
                                  }),
                                ),
                              ),
                              this.state.aboutus &&
                                this.state.aboutus.list.map(function (e, t) {
                                  return l.a.createElement(
                                    "h3",
                                    { className: "section-h3", key: t },
                                    e.title,
                                  );
                                }),
                            ),
                            l.a.createElement(
                              "div",
                              {
                                className:
                                  "col-md-6 flex flex_center flex_end_md",
                              },
                              l.a.createElement(
                                "div",
                                { className: "card", align: "center" },
                                l.a.createElement("div", {
                                  className: "card__image",
                                  style: {
                                    backgroundImage: "url('".concat(
                                      this.state.aboutus.image,
                                      "')",
                                    ),
                                  },
                                }),
                                l.a.createElement("h3", {
                                  className: "card__title text-wrap",
                                  dangerouslySetInnerHTML: {
                                    __html: this.state.aboutus.description
                                      .replace(/\[/g, "<span>")
                                      .replace(/\]/g, "</span>"),
                                  },
                                }),
                                l.a.createElement(
                                  "p",
                                  { className: "card__description text-wrap" },
                                  l.a.createElement(
                                    "i",
                                    null,
                                    this.state.aboutus.introtext,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        j,
                        {
                          className:
                            "section-services section_dark section_dark_30 img_bg__parent",
                          info: this.state.services,
                        },
                        l.a.createElement("div", {
                          className: "img_bg",
                          style: {
                            backgroundImage: "url('".concat(
                              this.state.services.image,
                              "')",
                            ),
                          },
                        }),
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "h2",
                            { className: "section-title", align: "center" },
                            this.state.services.pagetitle,
                          ),
                          l.a.createElement(
                            "ul",
                            { className: "services" },
                            this.state.services &&
                              this.state.services.list.map(function (e, t) {
                                return l.a.createElement(
                                  "li",
                                  { key: t },
                                  l.a.createElement(
                                    "div",
                                    {
                                      className: "services__item",
                                      align: "center",
                                    },
                                    l.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "services__item__card services__item__card_1",
                                      },
                                      l.a.createElement("div", {
                                        className: "services__item__image",
                                        style: {
                                          backgroundImage: "url('".concat(
                                            e.image,
                                            "')",
                                          ),
                                        },
                                      }),
                                      l.a.createElement(
                                        "h3",
                                        {
                                          className:
                                            "services__item__title text-wrap",
                                        },
                                        e.title,
                                      ),
                                    ),
                                    l.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "services__item__card services__item__card_2",
                                      },
                                      l.a.createElement(
                                        "div",
                                        {
                                          className:
                                            "services__item__description text-wrap",
                                        },
                                        e.description,
                                      ),
                                    ),
                                  ),
                                );
                              }),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        j,
                        {
                          className: "section-benefits",
                          info:
                            this.state.benefits && this.state.benefits.childs,
                        },
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "h2",
                            {
                              className: "section-title text-wrap",
                              align: "center",
                            },
                            this.state.benefits.description,
                          ),
                          l.a.createElement(
                            O,
                            Object.assign({}, n, {
                              items: this.state.benefits.childs,
                            }),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        j,
                        {
                          className:
                            "section-form section_dark section_dark_30 img_bg__parent",
                          info: this.state.consulting,
                        },
                        l.a.createElement("div", {
                          className: "img_bg",
                          style: {
                            backgroundImage: "url('".concat(
                              this.state.consulting.image,
                              "')",
                            ),
                          },
                        }),
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "div",
                            { className: "row row_between" },
                            l.a.createElement(
                              "div",
                              { className: "col-md-6" },
                              l.a.createElement(
                                "h2",
                                { className: "section-title2" },
                                this.state.consulting.pagetitle,
                              ),
                            ),
                            l.a.createElement(
                              "div",
                              { className: "col-md-6" },
                              l.a.createElement(
                                M,
                                Object.assign({}, a, {
                                  className: "row row_6",
                                }),
                                l.a.createElement("input", {
                                  type: "hidden",
                                  name: "title",
                                  value: this.state.consulting.pagetitle,
                                }),
                                l.a.createElement(C, {
                                  className: "col-sm-6",
                                  name: "name",
                                  placeholder:
                                    "\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",
                                }),
                                l.a.createElement(C, {
                                  className: "col-sm-6",
                                  name: "phone",
                                  placeholder:
                                    "\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",
                                  required: !0,
                                }),
                                l.a.createElement(
                                  "div",
                                  { className: "col-sm-6" },
                                  l.a.createElement(
                                    "div",
                                    { className: "description2" },
                                    l.a.createElement(
                                      "p",
                                      null,
                                      this.state.consulting.longtitle,
                                    ),
                                  ),
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "col-sm-6" },
                                  l.a.createElement(
                                    "button",
                                    {
                                      className: "btn btn_red btn_block",
                                      style: {
                                        backgroundColor:
                                          this.state.link_attributes,
                                      },
                                    },
                                    "\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c",
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        j,
                        {
                          id: "portfolio",
                          className: "section-portfolio",
                          info: this.state.portfolio,
                        },
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "h2",
                            { className: "section-title", align: "center" },
                            this.state.portfolio.pagetitle,
                          ),
                          l.a.createElement(
                            O,
                            Object.assign({}, n, {
                              items: this.state.portfolio.childs,
                            }),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        j,
                        {
                          className:
                            "section-form section_dark section_dark_40 img_bg__parent",
                          info:
                            this.state.portfolio.image &&
                            this.state.portfolio.longtitle,
                        },
                        l.a.createElement("div", {
                          className: "img_bg",
                          style: {
                            backgroundImage: "url('".concat(
                              this.state.portfolio.image,
                              "')",
                            ),
                          },
                        }),
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "div",
                            { className: "row row_between" },
                            l.a.createElement(
                              "div",
                              { className: "col-md-6 col-lg-5" },
                              l.a.createElement(
                                "h2",
                                { className: "section-title2" },
                                this.state.portfolio.longtitle,
                              ),
                            ),
                            l.a.createElement(
                              "div",
                              { className: "col-md-6" },
                              l.a.createElement(
                                M,
                                Object.assign({}, a, {
                                  className: "row row_6",
                                  onSubmit: this.onSubmit,
                                }),
                                l.a.createElement("input", {
                                  type: "hidden",
                                  name: "title",
                                  value: this.state.portfolio.longtitle,
                                }),
                                l.a.createElement(C, {
                                  className: "col-sm-6",
                                  name: "name",
                                  placeholder:
                                    "\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",
                                }),
                                l.a.createElement(C, {
                                  className: "col-sm-6",
                                  name: "phone",
                                  placeholder:
                                    "\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",
                                  required: !0,
                                }),
                                l.a.createElement(C, {
                                  className: "col-sm-6",
                                  name: "email",
                                  placeholder: "Email",
                                  required: !0,
                                }),
                                l.a.createElement(
                                  "div",
                                  { className: "col-sm-6" },
                                  l.a.createElement(
                                    "button",
                                    {
                                      className: "btn btn_red btn_block",
                                      style: {
                                        backgroundColor:
                                          this.state.link_attributes,
                                      },
                                    },
                                    "\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c",
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        j,
                        {
                          className:
                            "section-projects section_light img_bg_parent",
                          info:
                            this.state.projects && this.state.projects.childs,
                        },
                        l.a.createElement("div", {
                          className: "img_bg",
                          style: {
                            backgroundColor:
                              this.state.projects.longtitle &&
                              this.state.projects.longtitle,
                            backgroundImage:
                              this.state.projects.image &&
                              "url('".concat(this.state.projects.image, "')"),
                          },
                        }),
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "h2",
                            { className: "section-title", align: "center" },
                            this.state.projects.pagetitle,
                          ),
                          l.a.createElement(
                            "ul",
                            { className: "images" },
                            this.state.projects &&
                              this.state.projects.list &&
                              this.state.projects.list.map(function (t, a) {
                                return l.a.createElement(
                                  "li",
                                  { key: a },
                                  l.a.createElement("button", {
                                    className: "images__item",
                                    style: {
                                      backgroundImage: "url('".concat(
                                        t.thumb
                                          ? t.thumb
                                          : t.image
                                            ? t.image
                                            : t,
                                        "')",
                                      ),
                                    },
                                    onClick: function () {
                                      return e.handleSliderModalShow(
                                        e.state.projects.images,
                                        a,
                                      );
                                    },
                                  }),
                                );
                              }),
                          ),
                        ),
                      ),
                      l.a.createElement(S, { data: this.state.prices }),
                      l.a.createElement(
                        j,
                        {
                          className:
                            "section-form section_dark section_dark_40 img_bg__parent",
                          info: this.state.calculate,
                        },
                        l.a.createElement("div", {
                          className: "img_bg",
                          style: {
                            backgroundImage: "url('".concat(
                              this.state.calculate.image,
                              "')",
                            ),
                          },
                        }),
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "div",
                            { className: "row row_between" },
                            l.a.createElement(
                              "div",
                              { className: "col-md-6 col-lg-5" },
                              l.a.createElement(
                                "h2",
                                { className: "section-title2" },
                                this.state.calculate.pagetitle,
                              ),
                            ),
                            l.a.createElement(
                              "div",
                              { className: "col-md-6" },
                              l.a.createElement(
                                M,
                                Object.assign({ className: "row row_6" }, a),
                                l.a.createElement("input", {
                                  type: "hidden",
                                  name: "title",
                                  value: this.state.calculate.pagetitle,
                                }),
                                l.a.createElement(C, {
                                  className: "col-sm-6",
                                  name: "name",
                                  placeholder:
                                    "\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",
                                }),
                                l.a.createElement(C, {
                                  className: "col-sm-6",
                                  name: "phone",
                                  placeholder:
                                    "\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",
                                  required: !0,
                                }),
                                l.a.createElement(C, {
                                  className: "col-sm-6",
                                  name: "object",
                                  placeholder: this.state.calculate.longtitle
                                    ? this.state.calculate.longtitle
                                    : "\u0422\u0438\u043f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 / \u041a\u0432\u0430\u0434\u0440\u0430\u0442\u0443\u0440\u0430",
                                  required: !0,
                                }),
                                l.a.createElement(
                                  "div",
                                  { className: "col-sm-6" },
                                  l.a.createElement(
                                    "button",
                                    {
                                      className: "btn btn_red btn_block",
                                      style: {
                                        backgroundColor:
                                          this.state.link_attributes,
                                      },
                                    },
                                    "\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c",
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        j,
                        {
                          className: "section-proccess",
                          info: this.state.proccess,
                        },
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "h2",
                            { className: "section-title", align: "center" },
                            this.state.proccess.pagetitle,
                          ),
                          l.a.createElement(
                            "ul",
                            { className: "proccess", align: "center" },
                            this.state.proccess &&
                              this.state.proccess.list.map(function (t, a) {
                                return l.a.createElement(
                                  "li",
                                  { key: a },
                                  l.a.createElement(
                                    "div",
                                    {
                                      className: "proccess__item",
                                      style: { color: e.state.link_attributes },
                                    },
                                    l.a.createElement("div", {
                                      className: "proccess__item__image",
                                      style: {
                                        backgroundImage: "url('".concat(
                                          t.image,
                                          "')",
                                        ),
                                      },
                                    }),
                                    l.a.createElement(
                                      "h3",
                                      {
                                        className:
                                          "proccess__item__title text-wrap",
                                      },
                                      t.description,
                                    ),
                                  ),
                                );
                              }),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        j,
                        {
                          className: "section-bonuses",
                          info: this.state.bonuses,
                        },
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "h2",
                            { className: "section-title", align: "center" },
                            this.state.bonuses.pagetitle,
                          ),
                          l.a.createElement(
                            O,
                            Object.assign({}, n, {
                              items: this.state.bonuses.childs,
                            }),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        j,
                        {
                          className:
                            "section-form section_dark section_dark_40 img_bg__parent",
                          info: this.state.designer,
                        },
                        l.a.createElement("div", {
                          className: "img_bg",
                          style: {
                            backgroundImage: "url('".concat(
                              this.state.designer.image,
                              "')",
                            ),
                          },
                        }),
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "div",
                            { className: "row row_between" },
                            l.a.createElement(
                              "div",
                              { className: "col-md-6 col-lg-5" },
                              l.a.createElement(
                                "h2",
                                { className: "section-title2" },
                                this.state.designer.pagetitle,
                              ),
                            ),
                            l.a.createElement(
                              "div",
                              { className: "col-md-6" },
                              l.a.createElement(
                                M,
                                Object.assign({}, a, {
                                  className: "row row_6",
                                }),
                                l.a.createElement("input", {
                                  type: "hidden",
                                  name: "title",
                                  value: this.state.designer.pagetitle,
                                }),
                                l.a.createElement(C, {
                                  className: "col-sm-6",
                                  name: "name",
                                  placeholder:
                                    "\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",
                                }),
                                l.a.createElement(C, {
                                  className: "col-sm-6",
                                  name: "phone",
                                  placeholder:
                                    "\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",
                                  required: !0,
                                }),
                                l.a.createElement(C, {
                                  className: "col-sm-6",
                                  name: "sqare",
                                  placeholder: this.state.designer.longtitle
                                    ? this.state.designer.longtitle
                                    : "\u0422\u0438\u043f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 / \u041a\u0432\u0430\u0434\u0440\u0430\u0442\u0443\u0440\u0430",
                                  required: !0,
                                }),
                                l.a.createElement(
                                  "div",
                                  { className: "col-sm-6" },
                                  l.a.createElement(
                                    "button",
                                    {
                                      className: "btn btn_red btn_block",
                                      style: {
                                        backgroundColor:
                                          this.state.link_attributes,
                                      },
                                    },
                                    "\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c",
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        j,
                        {
                          className: "section-thanksLetters",
                          info:
                            this.state.thanksLetters &&
                            this.state.thanksLetters.list,
                        },
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "h2",
                            { className: "section-title", align: "center" },
                            this.state.thanksLetters &&
                              this.state.thanksLetters.pagetitle,
                          ),
                          l.a.createElement(
                            N.a,
                            {
                              arrows: !1,
                              dots: !1,
                              slidesToShow: 4,
                              slidesToScroll: 4,
                              responsive: [
                                {
                                  breakpoint: 767,
                                  settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                  },
                                },
                                {
                                  breakpoint: 991,
                                  settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                  },
                                },
                              ],
                            },
                            this.state.thanksLetters &&
                              this.state.thanksLetters.list &&
                              this.state.thanksLetters.list.map(
                                function (t, a) {
                                  return l.a.createElement(
                                    "div",
                                    {
                                      key: a,
                                      className: "thanksLetters__item",
                                    },
                                    l.a.createElement(
                                      "button",
                                      {
                                        onClick: function () {
                                          return e.handleSliderModalShow(
                                            e.state.thanksLetters &&
                                              e.state.thanksLetters.list,
                                            a,
                                          );
                                        },
                                      },
                                      l.a.createElement("img", {
                                        src: t.thumbnail,
                                        alt: t.title,
                                      }),
                                    ),
                                  );
                                },
                              ),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        j,
                        {
                          className: "section-partners img_bg__parent",
                          info: this.state.partners,
                        },
                        l.a.createElement("div", {
                          className: "img_bg img_bg_auto img_bg_repeat",
                          style: {
                            backgroundImage: "url('".concat(
                              this.state.partners.image,
                              "')",
                            ),
                          },
                        }),
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            N.a,
                            {
                              className: "partners",
                              arrows: !1,
                              slidesToShow: 5,
                              slidesToScroll: 5,
                              responsive: [
                                {
                                  breakpoint: 767,
                                  settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                  },
                                },
                                {
                                  breakpoint: 991,
                                  settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 4,
                                  },
                                },
                              ],
                            },
                            this.state.partners &&
                              this.state.partners.list.map(function (e, t) {
                                return l.a.createElement(
                                  "div",
                                  { key: t, className: "partners__item" },
                                  l.a.createElement(
                                    "a",
                                    {
                                      href: e.description && e.description,
                                      target: "_blank",
                                    },
                                    l.a.createElement("img", {
                                      src: e.image,
                                      alt: e.description.replace(/\n/g, ""),
                                    }),
                                  ),
                                );
                              }),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        j,
                        {
                          className: "section-contacts",
                          info: this.state.description,
                        },
                        l.a.createElement(
                          "div",
                          {
                            className:
                              "contacts__map" +
                              (this.state.isMapActive
                                ? " contacts__map--active"
                                : ""),
                            onClick: function () {
                              return e.setState({ isMapActive: !0 });
                            },
                          },
                          l.a.createElement("iframe", { src: t.longtitle }),
                        ),
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "div",
                            { className: "row" },
                            l.a.createElement(
                              "div",
                              { className: "col-sm-6" },
                              l.a.createElement(
                                "h2",
                                { className: "section-title text-wrap" },
                                t.description,
                              ),
                              l.a.createElement(
                                "div",
                                { className: "description3" },
                                l.a.createElement(
                                  "p",
                                  null,
                                  l.a.createElement("i", null, t.introtext),
                                ),
                              ),
                              l.a.createElement(
                                "div",
                                { className: "description4" },
                                l.a.createElement(
                                  "p",
                                  null,
                                  l.a.createElement(
                                    "i",
                                    null,
                                    l.a.createElement(
                                      "a",
                                      {
                                        href: "tel:".concat(
                                          this.getPhoneTel(t.phone),
                                        ),
                                      },
                                      t.phone,
                                    ),
                                  ),
                                  l.a.createElement("br", null),
                                  l.a.createElement("br", null),
                                  l.a.createElement("i", null, t.worktime),
                                  l.a.createElement("br", null),
                                  l.a.createElement("br", null),
                                  l.a.createElement("i", null, t.address),
                                ),
                              ),
                            ),
                            l.a.createElement(
                              "div",
                              { className: "col-sm-6" },
                              l.a.createElement(
                                M,
                                Object.assign({}, a, {
                                  action: "request/callback",
                                  onSubmit: this.onSubmit,
                                }),
                                l.a.createElement("input", {
                                  type: "hidden",
                                  name: "title",
                                  value: t.description,
                                }),
                                l.a.createElement(C, {
                                  light: !0,
                                  name: "name",
                                  placeholder:
                                    "\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",
                                }),
                                l.a.createElement(C, {
                                  light: !0,
                                  type: "tel",
                                  name: "phone",
                                  placeholder:
                                    "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
                                  required: !0,
                                }),
                                l.a.createElement(C, {
                                  light: !0,
                                  type: "textarea",
                                  name: "message",
                                  placeholder:
                                    "\u0422\u0435\u043a\u0441 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",
                                  rows: "5",
                                  required: !0,
                                }),
                                l.a.createElement(
                                  "div",
                                  { className: "form__btn" },
                                  l.a.createElement(
                                    "button",
                                    { className: "btn btn_block btn_dark" },
                                    "\u041e\u0422\u041f\u0420\u0410\u0412\u0418\u0422\u042c",
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    l.a.createElement(
                      f.a,
                      {
                        className: "slider__modal",
                        isOpen: this.state.sliderModal,
                        onRequestClose: this.handleSliderModalClose,
                      },
                      l.a.createElement("button", {
                        className: "modal__close",
                        onClick: this.handleSliderModalClose,
                      }),
                      l.a.createElement(
                        N.a,
                        s,
                        this.state.sliderModalItems &&
                          this.state.sliderModalItems.map(function (e, t) {
                            return l.a.createElement(
                              "div",
                              { key: t },
                              l.a.createElement(
                                "div",
                                { className: "slider__modal__item" },
                                l.a.createElement("img", {
                                  src: e.image ? e.image : e,
                                }),
                              ),
                            );
                          }),
                      ),
                    ),
                    l.a.createElement(
                      "div",
                      { className: "btn_modalCallback" },
                      l.a.createElement("i", null),
                      l.a.createElement("button", {
                        className: "hidden-xs",
                        onClick: function () {
                          return e.handleFormModalShow(!1);
                        },
                      }),
                      l.a.createElement("a", {
                        className: "visible-xs",
                        href: "tel:" + this.getPhoneTel(t.phone),
                      }),
                    ),
                    l.a.createElement(
                      f.a,
                      {
                        className: "form__modal",
                        isOpen: this.state.isFormModalOpen,
                        onRequestClose: this.handleFormModalClose,
                      },
                      l.a.createElement("button", {
                        className: "modal__close",
                        onClick: this.handleFormModalClose,
                      }),
                      l.a.createElement(
                        "h4",
                        { className: "modal__title" },
                        "\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443",
                      ),
                      l.a.createElement(
                        "p",
                        {
                          className:
                            "modal__subtitle" +
                            (this.state.formModalPack ? "" : " hide"),
                        },
                        "\u043d\u0430 ",
                        this.state.formModalPack,
                      ),
                      l.a.createElement(
                        M,
                        a,
                        l.a.createElement("input", {
                          type: "hidden",
                          name: "title",
                          value: this.state.formModalPack
                            ? this.state.formModalPack
                            : "\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443",
                        }),
                        l.a.createElement(C, {
                          light: !0,
                          className: "col-sm-6",
                          name: "name",
                          placeholder:
                            "\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",
                        }),
                        l.a.createElement(C, {
                          light: !0,
                          className: "col-sm-6",
                          name: "phone",
                          placeholder:
                            "\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",
                          required: !0,
                        }),
                        l.a.createElement(
                          "div",
                          { className: "form__modal__btn" },
                          l.a.createElement(
                            "button",
                            { className: "btn btn_blue btn_block" },
                            "\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",
                          ),
                        ),
                      ),
                    ),
                    l.a.createElement(E.a, null),
                  );
                },
              },
            ]),
            t
          );
        })(s.Component);
      Boolean(
        "localhost" === window.location.hostname ||
        "[::1]" === window.location.hostname ||
        window.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
        ),
      );
      (c.a.render(l.a.createElement(x, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          }));
    },
    40: function (e, t, a) {
      e.exports = a(101);
    },
    45: function (e, t, a) {},
  },
  [[40, 2, 1]],
]);
//# sourceMappingURL=main.3b1bab40.chunk.js.map
