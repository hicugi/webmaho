(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    141: function (e, t, a) {},
    144: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        s = a.n(n),
        l = a(16),
        r = a.n(l),
        i = a(146),
        c = a(52),
        o = a.n(c),
        m = a(28),
        u = a(9),
        d = a(2),
        h = a(3),
        p = a(5),
        g = a(4),
        f = a(6),
        _ = a(148),
        E = a(17),
        v = a.n(E),
        b = a(53),
        N = a.n(b),
        O = a(13),
        j = a(147),
        y = (function (e) {
          function t() {
            return (
              Object(d.a)(this, t),
              Object(p.a)(this, Object(g.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(h.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = ["btn"];
                  (e.theme && t.push("btn_" + e.theme),
                    e.class && t.push(e.class));
                  var a = {
                    className: t.join(" "),
                    disabled: e.disabled,
                    onClick: e.handleClick,
                  };
                  return s.a.createElement("button", a, this.props.children);
                },
              },
            ]),
            t
          );
        })(n.Component),
        k = (function (e) {
          function t() {
            return (
              Object(d.a)(this, t),
              Object(p.a)(this, Object(g.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(h.a)(t, [
              {
                key: "render",
                value: function () {
                  return s.a.createElement(
                    "section",
                    { className: "search" },
                    s.a.createElement(
                      "form",
                      {
                        className: "container",
                        action: "/search",
                        method: "GET",
                      },
                      s.a.createElement(
                        "label",
                        { className: "search__title" },
                        "\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043b\u0438\u0447\u043d\u043e\u043c\u0443 \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0443",
                      ),
                      s.a.createElement("input", {
                        type: "search",
                        name: "v",
                        placeholder:
                          "\u0427\u0442\u043e \u0436\u0435\u043b\u0430\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438?",
                      }),
                      s.a.createElement(
                        y,
                        { theme: "search" },
                        s.a.createElement("i", { className: "ico ico_search" }),
                        s.a.createElement(
                          "span",
                          null,
                          "\u041d\u0430\u0439\u0442\u0438",
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        w = (function (e) {
          function t() {
            var e, a;
            Object(d.a)(this, t);
            for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++)
              s[l] = arguments[l];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(g.a)(t)).call.apply(e, [this].concat(s)),
              )).state = { redirect: !1 }),
              (a.onLinkClick = function (e) {
                (e.preventDefault(), a.setState({ redirect: e.target.href }));
              }),
              a
            );
          }
          return (
            Object(f.a)(t, e),
            Object(h.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props.menu;
                  return s.a.createElement(
                    "header",
                    { className: "page-header" },
                    s.a.createElement(
                      "section",
                      { className: "header__top" },
                      s.a.createElement(
                        "div",
                        { className: "container" },
                        s.a.createElement(
                          j.a,
                          { className: "logo logo_header", to: BASE_PATH + "/" },
                          s.a.createElement("img", {
                            src: "assets/imgs/logo.svg",
                            alt: "ICORE TAC",
                          }),
                        ),
                        s.a.createElement(
                          "nav",
                          null,
                          s.a.createElement(
                            "ul",
                            null,
                            e.map(function (e, t) {
                              return s.a.createElement(
                                "li",
                                { key: t },
                                s.a.createElement(
                                  j.a,
                                  { to: BASE_PATH + "/" + e.uri.replace(/^\/+/, "") },
                                  e.menutitle ? e.menutitle : e.pagetitle,
                                ),
                              );
                            }),
                          ),
                        ),
                        s.a.createElement(
                          y,
                          { class: "header__callback", theme: "success" },
                          "\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f",
                        ),
                        s.a.createElement(
                          y,
                          { class: "search__togglebtn" },
                          s.a.createElement("i", {
                            className: "ico ico_search",
                          }),
                        ),
                      ),
                    ),
                    s.a.createElement(k, null),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        C = {
          uri: "/j/",
          params: {},
          f: (url, ...atrs) => fetch(BASE_PATH + url + '.json', ...atrs),
        },
        S =
          (a(107),
          (function (e) {
            function t() {
              var e, a;
              Object(d.a)(this, t);
              for (
                var n = arguments.length, s = new Array(n), l = 0;
                l < n;
                l++
              )
                s[l] = arguments[l];
              return (
                ((a = Object(p.a)(
                  this,
                  (e = Object(g.a)(t)).call.apply(e, [this].concat(s)),
                )).state = { form: { message: "", email: "" }, formError: {} }),
                (a.handleFormChange = function (e) {
                  var t = e.target;
                  a.setState({
                    form: Object.assign(
                      a.state.form,
                      Object(u.a)({}, t.name, t.value),
                    ),
                  });
                }),
                (a.handleSubmit = function (e) {
                  e.preventDefault();
                  var t = new FormData(),
                    n = a.state.form;
                  (t.append(
                    "title",
                    "\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c - \u0437\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441 \u0441 \u043b\u0435\u0432\u043e\u0433\u043e \u043f\u0430\u043d\u0435\u043b\u044f",
                  ),
                    t.append("message", n.message),
                    t.append("email", n.email),
                    v.a
                      .post(C.uri + "request", t)
                      .then(function () {
                        (a.setState({ form: { message: "", email: "" } }),
                          a.props.handleNotify({
                            type: "success",
                            text: "\u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u043e\u0448\u0435\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e, \u043c\u044b \u0432\u0441\u043a\u043e\u0440\u0435 \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0441 \u0412\u0430\u043c\u0438",
                          }));
                      })
                      .catch(function () {
                        a.props.handleNotify({
                          type: "error",
                          text: "\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435",
                        });
                      }));
                }),
                a
              );
            }
            return (
              Object(f.a)(t, e),
              Object(h.a)(t, [
                {
                  key: "render",
                  value: function () {
                    if (
                      void 0 !== this.props.width &&
                      this.props.width[1] < 992
                    )
                      return "";
                    var e = this.props.user,
                      t = this.state.form,
                      a = { required: !0, onChange: this.handleFormChange };
                    return s.a.createElement(
                      "aside",
                      { className: "page-aside aside_left" },
                      s.a.createElement(
                        "header",
                        null,
                        s.a.createElement(
                          j.a,
                          { className: "logo_white", to: BASE_PATH + "/" },
                          s.a.createElement("img", {
                            src: "assets/imgs/logo-white.svg",
                            alt: "ICORE ITAC",
                          }),
                        ),
                      ),
                      s.a.createElement(
                        "section",
                        { className: "aside__menu" },
                        s.a.createElement(
                          "ul",
                          null,
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              "h3",
                              { className: "aside__title" },
                              e
                                ? "\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0435"
                                : "\u041c\u0435\u043d\u044e",
                            ),
                            s.a.createElement(
                              "ul",
                              { className: e ? "" : "hide" },
                              this.props.licenses &&
                                this.props.licenses.map(function (e, t) {
                                  return s.a.createElement(
                                    "li",
                                    { key: t },
                                    s.a.createElement(
                                      j.a,
                                      {
                                        className: "aside__menu__item",
                                        to: BASE_PATH + "/cabinet#" + (t + 1),
                                      },
                                      e.title,
                                    ),
                                  );
                                }),
                            ),
                            s.a.createElement(
                              "ul",
                              { className: e ? "hide" : "" },
                              this.props.menu &&
                                this.props.menu.map(function (e, t) {
                                  return t
                                    ? s.a.createElement(
                                        "li",
                                        { key: t },
                                        s.a.createElement(
                                          j.a,
                                          {
                                            className: "aside__menu__item",
                                            to: BASE_PATH + "/" + e.uri,
                                          },
                                          e.menutitle
                                            ? e.menutitle
                                            : e.pagetitle,
                                        ),
                                      )
                                    : "";
                                }),
                            ),
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              j.a,
                              { className: "aside__title", to: BASE_PATH + "/infobase" },
                              "\u0411\u0430\u0437\u0430 \u0437\u043d\u0430\u043d\u0438\u0439",
                            ),
                          ),
                        ),
                      ),
                      s.a.createElement(
                        "section",
                        { className: "callback" },
                        s.a.createElement(
                          "form",
                          { onSubmit: this.handleSubmit },
                          s.a.createElement("input", {
                            type: "hidden",
                            name: "title",
                            value:
                              "\u041b\u0435\u0432\u044b\u0439 \u0431\u043b\u043e\u043a: \u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u0437\u044f\u044c - \u0437\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441",
                          }),
                          s.a.createElement(
                            "h3",
                            { className: "aside__title aside__title_green" },
                            "\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c",
                          ),
                          s.a.createElement(
                            "div",
                            { className: "form-group" },
                            s.a.createElement(
                              "label",
                              {
                                htmlFor: "callbackMessage",
                                className: t.message.length && "hide",
                              },
                              "\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441...",
                            ),
                            s.a.createElement(
                              "textarea",
                              Object.assign(
                                {
                                  id: "callbackMessage",
                                  name: "message",
                                  placeholder:
                                    "\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441...",
                                  rows: "10",
                                  value: t.message,
                                },
                                a,
                              ),
                            ),
                          ),
                          s.a.createElement(
                            "div",
                            { className: "form-group callback__email" },
                            s.a.createElement(
                              "input",
                              Object.assign(
                                {
                                  id: "callbackEmail",
                                  type: "email",
                                  name: "email",
                                  className: "form__input",
                                  placeholder: "email",
                                  value: t.email,
                                },
                                a,
                              ),
                            ),
                          ),
                          s.a.createElement(
                            "div",
                            { className: "callback__btns" },
                            s.a.createElement(
                              y,
                              { theme: "success" },
                              "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",
                            ),
                          ),
                        ),
                      ),
                      s.a.createElement(
                        "section",
                        { className: "contacts" },
                        s.a.createElement(
                          "h3",
                          { className: "aside__title" },
                          "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",
                        ),
                        s.a.createElement(
                          "p",
                          { className: "aside__description" },
                          this.props.address,
                          s.a.createElement("br", null),
                          s.a.createElement(
                            "a",
                            { href: "tel:".concat(this.props.phoneHref) },
                            this.props.phone,
                          ),
                        ),
                      ),
                      s.a.createElement(
                        "footer",
                        null,
                        s.a.createElement(
                          "ul",
                          { className: "list_links" },
                          this.props.emails.map(function (e, t) {
                            return s.a.createElement(
                              "li",
                              { key: t },
                              s.a.createElement(
                                "a",
                                { href: "mailto:".concat(e) },
                                e,
                              ),
                            );
                          }),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              "a",
                              { href: this.props.basesite },
                              this.props.basesite,
                            ),
                          ),
                        ),
                      ),
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        L = a(54),
        I = a.n(L),
        x = (function (e) {
          function t() {
            var e, a;
            Object(d.a)(this, t);
            for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++)
              s[l] = arguments[l];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(g.a)(t)).call.apply(e, [this].concat(s)),
              )).state = { select: !1 }),
              a
            );
          }
          return (
            Object(f.a)(t, e),
            Object(h.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = ["form-group"];
                  (t.class && a.push(t.class),
                    "select" === t.type && a.push("form__select__group"),
                    t.error && a.push("form-group_error"));
                  var n = { className: a.join(" ") },
                    l = {
                      className: "form__input",
                      type: t.type ? t.type : "text",
                      name: t.name,
                      onChange: function (e) {
                        return t.handleChange(e);
                      },
                      required: t.required,
                      value: t.value,
                      placeholder: t.placeholder,
                    };
                  return s.a.createElement(
                    "div",
                    n,
                    "select" !== t.type ? s.a.createElement("input", l) : "",
                    "select" === t.type
                      ? s.a.createElement(
                          "div",
                          {
                            className:
                              "form__select" +
                              (this.state.select
                                ? " form__select--active"
                                : ""),
                            onMouseOver: function () {
                              return e.setState({ select: !0 });
                            },
                            onMouseOut: function () {
                              return e.setState({ select: !1 });
                            },
                          },
                          s.a.createElement("i", { className: "ico_arrow" }),
                          s.a.createElement(
                            "label",
                            { className: t.value ? "active" : "" },
                            t.value ? t.value : t.placeholder,
                          ),
                          s.a.createElement(
                            "ul",
                            {
                              style: {
                                paddingTop: this.state.select ? "20px" : "0px",
                                paddingBottom: this.state.select
                                  ? "10px"
                                  : "0px",
                                height: this.state.select
                                  ? 18 * (t.values.length + 1) + 30 + "px"
                                  : "0px",
                              },
                            },
                            s.a.createElement(
                              "li",
                              {
                                className: "default",
                                onClick: function () {
                                  return l.onChange({ name: t.name, value: 0 });
                                },
                              },
                              "\u0432\u0441\u0435",
                            ),
                            t.values &&
                              t.values.map(function (e, a) {
                                var n = e.title ? e.title : e,
                                  r = e.value ? e.value : e;
                                return s.a.createElement(
                                  "li",
                                  {
                                    key: a,
                                    onClick: function () {
                                      return l.onChange({
                                        name: t.name,
                                        value: e.title
                                          ? { title: n, value: r }
                                          : r,
                                      });
                                    },
                                  },
                                  n,
                                );
                              }),
                          ),
                        )
                      : "",
                    t.error
                      ? s.a.createElement(
                          "div",
                          { className: "form-group__error" },
                          t.error,
                        )
                      : "",
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        M = (function (e) {
          function t() {
            var e, a;
            Object(d.a)(this, t);
            for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++)
              s[l] = arguments[l];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(g.a)(t)).call.apply(e, [this].concat(s)),
              )).state = {
                loginForm: {},
                formRequestLoading: !1,
                requestForm: {},
              }),
              (a.handleLoginFormChange = function (e) {
                var t = e.target;
                a.setState({
                  loginForm: Object.assign(
                    a.state.loginForm,
                    Object(u.a)({}, t.name, t.value),
                  ),
                });
              }),
              (a.handleLoginSubmit = function (e) {
                a.props.handleLoginSubmit(e, a.state.loginForm);
              }),
              (a.handleRequestFormChange = function (e) {
                var t = e.target;
                a.setState({
                  requestForm: Object.assign(
                    a.state.requestForm,
                    Object(u.a)({}, t.name, t.value),
                  ),
                });
              }),
              (a.handleRequestSubmit = function (e) {
                e.preventDefault();
                var t = new FormData(),
                  n = a.state.requestForm,
                  s = a.props.card && a.props.card.items;
                for (var l in n) t.append(l, n[l]);
                for (var r = 0; r < s.length; r++)
                  t.append("cardItems[]", s[r].pagetitle);
                (a.setState({ formRequestLoading: !0 }),
                  v.a
                    .post(C.uri + "request", t)
                    .then(function () {
                      for (var e in n) n[e] = "";
                      (a.setState({ requestForm: n, formRequestLoading: !1 }),
                        O.NotificationManager.success(
                          "\u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u043e\u0448\u0435\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e",
                          "\u0421\u043f\u0430\u0441\u0438\u0431\u043e",
                        ));
                    })
                    .catch(function () {
                      (a.setState({ formRequestLoading: !1 }),
                        O.NotificationManager.error(
                          "\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435",
                          "\u041e\u0448\u0438\u0431\u043a\u0430",
                        ));
                    }));
              }),
              a
            );
          }
          return (
            Object(f.a)(t, e),
            Object(h.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  if (void 0 !== this.props.width && this.props.width[1] < 992)
                    return "";
                  var t = this.props.portal_link,
                    a = this.props.user,
                    n = this.state.loginForm,
                    l = {
                      required: !0,
                      handleChange: function (t) {
                        return e.handleLoginFormChange(t);
                      },
                    },
                    r = {
                      class: "aside__wrap",
                      handleChange: this.handleRequestFormChange,
                    },
                    i = this.props.card;
                  return s.a.createElement(
                    "aside",
                    { className: "page-aside aside_right" },
                    s.a.createElement(
                      "header",
                      null,
                      s.a.createElement(
                        "form",
                        {
                          className:
                            "login-form" +
                            (this.props.formLoginLoading ? " loading" : "") +
                            (a ? " hide" : ""),
                          onSubmit: this.handleLoginSubmit,
                        },
                        s.a.createElement("img", {
                          src: "assets/imgs/profile-picture.svg",
                          alt: "Profile avatar",
                        }),
                        s.a.createElement(
                          x,
                          Object.assign(
                            {
                              type: "email",
                              name: "email",
                              value: n.email,
                              placeholder: "email",
                            },
                            l,
                          ),
                        ),
                        s.a.createElement(
                          x,
                          Object.assign(
                            {
                              type: "password",
                              name: "password",
                              value: n.password,
                              placeholder:
                                "\u043f\u0430\u0440\u043e\u043b\u044c",
                            },
                            l,
                          ),
                        ),
                        s.a.createElement(
                          "div",
                          { className: "loginform__btns" },
                          s.a.createElement(
                            y,
                            { theme: "success" },
                            "\u0412\u043e\u0439\u0442\u0438",
                          ),
                          s.a.createElement(
                            "a",
                            { href: "login/forget" },
                            "\u0437\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?",
                          ),
                        ),
                      ),
                      s.a.createElement(
                        "div",
                        { className: "profile" + (a ? "" : " hide") },
                        s.a.createElement("img", {
                          src: "assets/imgs/profile-picture.svg",
                          alt: "Profile avatar",
                        }),
                        s.a.createElement(
                          "div",
                          { className: "profile__info" },
                          s.a.createElement(
                            "p",
                            { className: "profile__name" },
                            a && a.email,
                          ),
                          s.a.createElement(
                            "p",
                            { className: "profile__id" },
                            "\u2116",
                            a && a.id,
                          ),
                        ),
                        s.a.createElement(
                          "div",
                          { className: "profile__btn" },
                          s.a.createElement(
                            y,
                            {
                              theme: "success",
                              handleClick: this.props.handleSignout,
                            },
                            "\u0412\u044b\u0439\u0442\u0438",
                          ),
                        ),
                      ),
                    ),
                    s.a.createElement(
                      "section",
                      null,
                      s.a.createElement(
                        "a",
                        {
                          className: "aside__phone",
                          href: "tel:".concat(this.props.phone2Href),
                        },
                        this.props.phone2,
                      ),
                    ),
                    s.a.createElement(
                      "section",
                      null,
                      s.a.createElement(
                        "a",
                        {
                          className: "aside__title aside__title_blue",
                          href: t,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043f\u043e\u0440\u0442\u0430\u043b",
                      ),
                    ),
                    s.a.createElement(
                      "section",
                      { className: "aside__calendar" },
                      s.a.createElement(I.a, {
                        locale: "ru-RU",
                        value: new Date(),
                      }),
                    ),
                    s.a.createElement(
                      "section",
                      { className: "callback" },
                      s.a.createElement(
                        "form",
                        {
                          className: this.state.formRequestLoading
                            ? "loading"
                            : "",
                          onSubmit: this.handleRequestSubmit,
                        },
                        s.a.createElement(
                          "h3",
                          { className: "aside__title aside__title_green" },
                          "\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443",
                        ),
                        s.a.createElement(
                          x,
                          Object.assign(
                            {
                              name: "name",
                              value: this.state.requestForm.name,
                              placeholder: "\u0424.\u0418.\u041e.",
                            },
                            r,
                          ),
                        ),
                        s.a.createElement(
                          x,
                          Object.assign(
                            {
                              name: "position",
                              value: this.state.requestForm.position,
                              placeholder:
                                "\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",
                            },
                            r,
                          ),
                        ),
                        s.a.createElement(
                          x,
                          Object.assign(
                            {
                              name: "company",
                              value: this.state.requestForm.company,
                              placeholder:
                                "\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",
                            },
                            r,
                          ),
                        ),
                        s.a.createElement(
                          x,
                          Object.assign(
                            {
                              name: "email",
                              value: this.state.requestForm.email,
                              type: "email",
                              placeholder: "Email",
                            },
                            r,
                          ),
                        ),
                        s.a.createElement(
                          x,
                          Object.assign(
                            {
                              name: "phone",
                              value: this.state.requestForm.phone,
                              type: "tel",
                              placeholder:
                                "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440",
                              required: !0,
                            },
                            r,
                          ),
                        ),
                        s.a.createElement(
                          "div",
                          { className: "callback__btns" },
                          s.a.createElement(
                            y,
                            { theme: "success" },
                            "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",
                          ),
                        ),
                      ),
                    ),
                    s.a.createElement(
                      "section",
                      null,
                      s.a.createElement(
                        "h3",
                        { className: "aside__title" },
                        "\u041a\u0430\u0442\u0430\u043b\u043e\u0433 / \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",
                      ),
                      s.a.createElement(
                        "div",
                        { className: "card_aside" },
                        s.a.createElement(
                          "ul",
                          null,
                          i.items.map(function (t, a) {
                            return s.a.createElement(
                              "li",
                              { key: a },
                              s.a.createElement(
                                "a",
                                { href: t.uri },
                                t.pagetitle,
                              ),
                              s.a.createElement(y, {
                                theme: "remove",
                                handleClick: function () {
                                  return e.props.handleCardRemove(t);
                                },
                              }),
                            );
                          }),
                          s.a.createElement(
                            "li",
                            {
                              className:
                                "card__empty" + (i.items.length ? " hide" : ""),
                            },
                            s.a.createElement(
                              "span",
                              null,
                              "\u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430, ",
                            ),
                            s.a.createElement(
                              j.a,
                              { to: BASE_PATH + "/catalog" },
                              "\u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",
                            ),
                          ),
                        ),
                      ),
                    ),
                    s.a.createElement(
                      "footer",
                      null,
                      s.a.createElement(
                        "div",
                        { className: "card_aside__btn" },
                        s.a.createElement(
                          y,
                          { theme: "success", disabled: !i.items.length },
                          "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441",
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        T = (function (e) {
          function t() {
            return (
              Object(d.a)(this, t),
              Object(p.a)(this, Object(g.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(h.a)(t, [
              {
                key: "render",
                value: function () {
                  if (void 0 !== this.props.width && this.props.width[1] >= 992)
                    return "";
                  var e = this.props.user;
                  return s.a.createElement(
                    "aside",
                    { className: "page-aside aside_medium" },
                    s.a.createElement("button", {
                      className: "aside_medium__bg",
                      onClick: this.props.handleAsideToggle,
                    }),
                    s.a.createElement(
                      "div",
                      { className: "aside_medium__wrap" },
                      s.a.createElement(
                        "header",
                        null,
                        s.a.createElement(
                          j.a,
                          {
                            className:
                              "aside__title aside__title_blue" +
                              (e ? " hide" : ""),
                            to: BASE_PATH + "/login",
                          },
                          "\u0412\u0445\u043e\u0434 \u0432 \u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442",
                        ),
                        s.a.createElement(
                          "div",
                          {
                            className:
                              "aside__title aside__title_blue" +
                              (e ? "" : " hide"),
                          },
                          s.a.createElement("span", null, e && e.email),
                        ),
                      ),
                      s.a.createElement(
                        "section",
                        { className: "aside__menu" },
                        s.a.createElement(
                          "ul",
                          null,
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              "h3",
                              { className: "aside__title" },
                              "\u041c\u0435\u043d\u044e",
                            ),
                            s.a.createElement(
                              "ul",
                              null,
                              this.props.menu.map(function (e, t) {
                                return t
                                  ? s.a.createElement(
                                      "li",
                                      { key: t },
                                      s.a.createElement(
                                        j.a,
                                        {
                                          className: "aside__menu__item",
                                          to: BASE_PATH + "/" + e.uri,
                                        },
                                        e.menutitle ? e.menutitle : e.pagetitle,
                                      ),
                                    )
                                  : "";
                              }),
                            ),
                          ),
                          s.a.createElement(
                            "li",
                            { className: e ? "" : "hide" },
                            s.a.createElement(
                              "h3",
                              { className: "aside__title" },
                              "\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0435",
                            ),
                            s.a.createElement(
                              "ul",
                              null,
                              this.props.licenses &&
                                this.props.licenses.map(function (e, t) {
                                  return s.a.createElement(
                                    "li",
                                    { key: t },
                                    s.a.createElement(
                                      j.a,
                                      {
                                        className: "aside__menu__item",
                                        to: BASE_PATH + "/cabinet/#" + t,
                                      },
                                      e.title,
                                    ),
                                  );
                                }),
                              s.a.createElement(
                                "li",
                                null,
                                s.a.createElement(
                                  "button",
                                  {
                                    className: "aside__menu__item",
                                    onClick: this.props.handleSignout,
                                  },
                                  "\u0412\u044b\u0439\u0442\u0438",
                                ),
                              ),
                            ),
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              j.a,
                              { className: "aside__title", to: BASE_PATH + "/infobase" },
                              "\u0411\u0430\u0437\u0430 \u0437\u043d\u0430\u043d\u0438\u0439",
                            ),
                          ),
                        ),
                      ),
                      s.a.createElement(
                        "section",
                        { className: "contacts" },
                        s.a.createElement(
                          "h3",
                          { className: "aside__title" },
                          "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",
                        ),
                        s.a.createElement(
                          "p",
                          { className: "aside__description" },
                          this.props.address,
                          s.a.createElement("br", null),
                          s.a.createElement(
                            "a",
                            { href: "tel:".concat(this.props.phoneHref) },
                            this.props.phone,
                          ),
                        ),
                      ),
                      s.a.createElement(
                        "footer",
                        null,
                        s.a.createElement(
                          "ul",
                          { className: "list_links" },
                          this.props.emails.map(function (e, t) {
                            return s.a.createElement(
                              "li",
                              { key: t },
                              s.a.createElement(
                                "a",
                                { href: "mailto:".concat(e) },
                                e,
                              ),
                            );
                          }),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              "a",
                              { href: this.props.basesite },
                              this.props.basesite,
                            ),
                          ),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        D = a(55),
        q = a.n(D),
        A = (function (e) {
          function t() {
            var e, a;
            Object(d.a)(this, t);
            for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++)
              s[l] = arguments[l];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(g.a)(t)).call.apply(e, [this].concat(s)),
              )).state = {
                loading: !0,
                image: "assets/img/home/1.jpg",
                image2: "assets/img/home/2.jpg",
                page: !1,
              }),
              a
            );
          }
          return (
            Object(f.a)(t, e),
            Object(h.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  if (!1 !== this.state.page) return 0;
                  C.f(C.uri + "page", C.params)
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (t) {
                      return e.setState({ loading: !1, page: t });
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  if (this.state.loading)
                    return s.a.createElement("div", { className: "loading" });
                  var e = this.state.page;
                  return s.a.createElement(
                    "div",
                    { className: "page" },
                    s.a.createElement(
                      "section",
                      { className: "welcome img__container" },
                      s.a.createElement("div", {
                        className: "img_bg",
                        style: {
                          backgroundImage: "url('".concat(
                            this.state.image,
                            "')",
                          ),
                        },
                      }),
                      s.a.createElement("img", {
                        src: "assets/imgs/logo2.svg",
                        alt: "ICORE",
                      }),
                    ),
                    s.a.createElement(
                      "article",
                      { className: "article article__aboutus" },
                      s.a.createElement(
                        "section",
                        null,
                        s.a.createElement(
                          "h2",
                          { className: "page__title" },
                          e.aboutus.pagetitle,
                        ),
                        s.a.createElement(
                          "div",
                          { className: "row row_20" },
                          s.a.createElement(
                            "div",
                            { className: "col-md-6" },
                            s.a.createElement("div", {
                              className: "page__content",
                              dangerouslySetInnerHTML: {
                                __html: e.aboutus.content,
                              },
                            }),
                          ),
                          s.a.createElement(
                            "div",
                            { className: "col-md-6" },
                            s.a.createElement("div", {
                              className: "page__content",
                              dangerouslySetInnerHTML: {
                                __html: e.aboutus.extracontent,
                              },
                            }),
                          ),
                        ),
                      ),
                      s.a.createElement("hr", null),
                      e.aboutus.list
                        ? s.a.createElement(
                            "section",
                            null,
                            s.a.createElement(
                              "ul",
                              { className: "list" },
                              e.aboutus.list.map(function (e, t) {
                                return s.a.createElement(
                                  "li",
                                  { key: t },
                                  s.a.createElement(
                                    "div",
                                    { className: "list__item" },
                                    s.a.createElement(
                                      "h3",
                                      { className: "list__title" },
                                      e.title,
                                    ),
                                    s.a.createElement(
                                      "p",
                                      { className: "list__description" },
                                      e.description,
                                    ),
                                  ),
                                );
                              }),
                            ),
                          )
                        : "",
                    ),
                    e.partners
                      ? s.a.createElement(
                          "section",
                          { className: "partners img__container" },
                          s.a.createElement("div", {
                            className: "img_bg",
                            style: {
                              backgroundImage: "url('".concat(
                                this.state.image2,
                                "')",
                              ),
                            },
                          }),
                          s.a.createElement(
                            q.a,
                            {
                              arrows: !1,
                              slidesToShow: 5,
                              slidesToScroll: 5,
                              responsive: [
                                {
                                  breakpoint: 1199,
                                  settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 4,
                                  },
                                },
                                {
                                  breakpoint: 767,
                                  settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                  },
                                },
                              ],
                            },
                            e.partners.map(function (e, t) {
                              return s.a.createElement(
                                "div",
                                { key: t },
                                s.a.createElement(
                                  "div",
                                  { className: "partners__item" },
                                  s.a.createElement(
                                    "a",
                                    {
                                      href: e.description,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                    },
                                    s.a.createElement("img", {
                                      src: e.image,
                                      alt: e.title,
                                      title: e.title,
                                    }),
                                  ),
                                ),
                              );
                            }),
                          ),
                        )
                      : "",
                    e.infobase
                      ? s.a.createElement(
                          "article",
                          { className: "article article__infobase" },
                          s.a.createElement(
                            "section",
                            null,
                            s.a.createElement(
                              "h2",
                              { className: "page__title" },
                              e.infobase.pagetitle,
                            ),
                            s.a.createElement("div", {
                              className: "page__content",
                              dangerouslySetInnerHTML: {
                                __html: e.infobase.content,
                              },
                            }),
                          ),
                          s.a.createElement(
                            "section",
                            null,
                            s.a.createElement(
                              "ul",
                              { className: "list" },
                              e.infobase.list.map(function (e, t) {
                                return s.a.createElement(
                                  "li",
                                  { key: t },
                                  s.a.createElement(
                                    "div",
                                    { className: "list__item" },
                                    s.a.createElement(
                                      "h3",
                                      { className: "list__title" },
                                      e.title,
                                    ),
                                    s.a.createElement(
                                      "p",
                                      { className: "list__description" },
                                      e.description,
                                    ),
                                  ),
                                );
                              }),
                            ),
                          ),
                        )
                      : "",
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        F = (function (e) {
          function t() {
            var e, a;
            Object(d.a)(this, t);
            for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++)
              s[l] = arguments[l];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(g.a)(t)).call.apply(e, [this].concat(s)),
              )).state = { loading: !0, page: {} }),
              a
            );
          }
          return (
            Object(f.a)(t, e),
            Object(h.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = this.props.route.match.url.replace(BASE_PATH, '');
                  C.f(C.uri + "page" + t, C.params)
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (t) {
                      return e.setState({ page: t });
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  if (this.loading)
                    return s.a.createElement("div", { className: "loading" });
                  var e = this.state.page;
                  return s.a.createElement(
                    "article",
                    { className: "page-article" },
                    s.a.createElement(
                      "header",
                      { className: "main__header" },
                      s.a.createElement(
                        "h1",
                        { className: "main__title" },
                        s.a.createElement("span", null, e.pagetitle),
                      ),
                    ),
                    s.a.createElement(
                      "section",
                      { className: "main__content" },
                      s.a.createElement("div", {
                        dangerouslySetInnerHTML: {
                          __html: e.content && e.content,
                        },
                      }),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        R = (function (e) {
          function t() {
            var e, a;
            Object(d.a)(this, t);
            for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++)
              s[l] = arguments[l];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(g.a)(t)).call.apply(e, [this].concat(s)),
              )).state = {
                loading: !0,
                page: !1,
                product: !1,
                activeItems: [],
              }),
              (a.handleToggleCatalog = function (e) {
                var t = a.state.activeItems,
                  n = t.indexOf(e);
                (-1 === n ? t.push(e) : t.splice(n, 1),
                  a.setState({ activeItems: t }),
                  console.log(a.state.activeItems));
              }),
              a
            );
          }
          return (
            Object(f.a)(t, e),
            Object(h.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  if (this.state.page) return 0;
                  C.f(C.uri + "page/catalog", C.params)
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (t) {
                      return e.setState({ loading: !1, page: t });
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  if (this.state.loading)
                    return s.a.createElement("div", { className: "loading" });
                  var t = this.state.page;
                  return s.a.createElement(
                    "article",
                    { className: "page-catalog" },
                    s.a.createElement(
                      "header",
                      { className: "main__header" },
                      s.a.createElement(
                        "h1",
                        { className: "main__title" },
                        s.a.createElement("span", null, t.pagetitle),
                      ),
                    ),
                    s.a.createElement("section", {
                      className: "main__content",
                      dangerouslySetInnerHTML: { __html: t.content },
                    }),
                    s.a.createElement(
                      "section",
                      { className: "catalog__items" },
                      s.a.createElement("hr", null),
                      s.a.createElement(
                        "ul",
                        null,
                        t.items.map(function (t, a) {
                          return s.a.createElement(
                            "li",
                            { key: a },
                            s.a.createElement(
                              "div",
                              {
                                className:
                                  "catalog__item" +
                                  (-1 !== e.state.activeItems.indexOf(t.id)
                                    ? " active"
                                    : "") +
                                  (t.items && t.items.length
                                    ? " childs_exist"
                                    : ""),
                              },
                              s.a.createElement(
                                "div",
                                { className: "catalog__item__title" },
                                s.a.createElement(
                                  y,
                                  {
                                    theme: "text",
                                    handleClick: function () {
                                      return e.handleToggleCatalog(t.id);
                                    },
                                  },
                                  s.a.createElement("i", {
                                    className: "catalog__item__icon",
                                  }),
                                  t.pagetitle,
                                ),
                              ),
                              s.a.createElement(
                                "ul",
                                {
                                  className: "catalog__item__childs",
                                  style: {
                                    height:
                                      -1 !== e.state.activeItems.indexOf(t.id)
                                        ? 34 *
                                            (t.items && t.items.length
                                              ? t.items.length
                                              : 1) +
                                          "px"
                                        : "0px",
                                  },
                                },
                                t.items.map(function (t, a) {
                                  return s.a.createElement(
                                    "li",
                                    { key: a },
                                    s.a.createElement(
                                      "div",
                                      { className: "catalog__item__child" },
                                      s.a.createElement(
                                        "h3",
                                        {
                                          className:
                                            "catalog__item__child__title",
                                        },
                                        s.a.createElement("i", {
                                          className: "catalog__item__icon",
                                        }),
                                        s.a.createElement(
                                          "span",
                                          null,
                                          t.pagetitle,
                                        ),
                                      ),
                                      s.a.createElement(
                                        "div",
                                        {
                                          className:
                                            "catalog__item__child_btns",
                                        },
                                        s.a.createElement(
                                          y,
                                          {
                                            theme: "info",
                                            handleClick: function () {
                                              return e.props.handleGetModalInfo(
                                                t.uri,
                                              );
                                            },
                                          },
                                          s.a.createElement(
                                            "span",
                                            { className: "hidden-xs" },
                                            "\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435...",
                                          ),
                                          s.a.createElement(
                                            "span",
                                            { className: "visible-xs" },
                                            "...",
                                          ),
                                        ),
                                        s.a.createElement(
                                          y,
                                          {
                                            theme:
                                              "success" +
                                              (-1 !==
                                              e.props.handleGetCardItemIndex(t)
                                                ? " hide"
                                                : ""),
                                            handleClick: function () {
                                              return e.props.handleCardAdd(t);
                                            },
                                          },
                                          s.a.createElement(
                                            "span",
                                            { className: "hidden-xs" },
                                            "\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",
                                          ),
                                          s.a.createElement(
                                            "span",
                                            { className: "visible-xs" },
                                            "+",
                                          ),
                                        ),
                                        s.a.createElement(
                                          y,
                                          {
                                            theme:
                                              "danger" +
                                              (-1 ===
                                              e.props.handleGetCardItemIndex(t)
                                                ? " hide"
                                                : ""),
                                            handleClick: function () {
                                              return e.props.handleCardRemove(
                                                t,
                                              );
                                            },
                                          },
                                          s.a.createElement(
                                            "span",
                                            { className: "hidden-xs" },
                                            "\u0443\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b",
                                          ),
                                          s.a.createElement(
                                            "span",
                                            { className: "visible-xs" },
                                            "-",
                                          ),
                                        ),
                                      ),
                                    ),
                                  );
                                }),
                                s.a.createElement(
                                  "li",
                                  {
                                    className:
                                      "catalog__item__undefined" +
                                      (t.items && t.items.length
                                        ? " hide"
                                        : ""),
                                  },
                                  "\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b",
                                ),
                              ),
                            ),
                          );
                        }),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        H = (function (e) {
          function t() {
            var e, a;
            Object(d.a)(this, t);
            for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++)
              s[l] = arguments[l];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(g.a)(t)).call.apply(e, [this].concat(s)),
              )).state = { email: "", password: "" }),
              (a.handleChange = function (e) {
                var t = e.target;
                a.setState(Object(u.a)({}, t.name, t.value));
              }),
              (a.handleSubmit = function (e) {
                a.props.handleLoginSubmit(e, a.state);
              }),
              a
            );
          }
          return (
            Object(f.a)(t, e),
            Object(h.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  void 0 !== this.props.user &&
                    this.props.user.id > 0 &&
                    (window.location.href = "/");
                  var t = "login-form",
                    a = this.state,
                    n = {
                      handleChange: function (t) {
                        return e.handleChange(t);
                      },
                    };
                  return s.a.createElement(
                    "section",
                    { className: "page-login" },
                    s.a.createElement(
                      "div",
                      { className: t + "__container bg__logo bg__logo_middle" },
                      s.a.createElement(
                        "h2",
                        { className: t + "__title page__title" },
                        s.a.createElement(
                          "span",
                          null,
                          "\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",
                        ),
                      ),
                      s.a.createElement(
                        "p",
                        { className: t + "__description" },
                        "\u041f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u0447\u0442\u043e\u0431\u044b \u0432\u043e\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443",
                      ),
                      s.a.createElement(
                        "form",
                        {
                          className: "login-form",
                          onSubmit: this.handleSubmit,
                        },
                        s.a.createElement("img", {
                          src: "assets/imgs/profile-picture.svg",
                          alt: "Profile avatar",
                        }),
                        s.a.createElement(
                          x,
                          Object.assign(
                            {
                              type: "email",
                              name: "email",
                              value: a.email,
                              required: !0,
                              placeholder: "email",
                            },
                            n,
                          ),
                        ),
                        s.a.createElement(
                          x,
                          Object.assign(
                            {
                              type: "password",
                              name: "password",
                              value: a.password,
                              required: !0,
                              placeholder:
                                "\u043f\u0430\u0440\u043e\u043b\u044c",
                            },
                            n,
                          ),
                        ),
                        s.a.createElement(
                          "div",
                          { className: "loginform__btns" },
                          s.a.createElement(
                            y,
                            { theme: "success" },
                            "\u0412\u043e\u0439\u0442\u0438",
                          ),
                          s.a.createElement(
                            "a",
                            { href: "login/forget" },
                            "\u0437\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?",
                          ),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        G = (function (e) {
          function t() {
            return (
              Object(d.a)(this, t),
              Object(p.a)(this, Object(g.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(h.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.info;
                  return s.a.createElement(
                    "li",
                    { key: this.props.key },
                    s.a.createElement(
                      "button",
                      {
                        className: "table__title",
                        onClick: function () {
                          return e.props.handleGetModalInfo(t.uri);
                        },
                      },
                      s.a.createElement("span", null, t.pagetitle),
                    ),
                    s.a.createElement(
                      "p",
                      { className: "table__longtitle" },
                      t.longtitle,
                    ),
                    s.a.createElement(
                      "p",
                      { className: "table__description" },
                      t.introtext,
                    ),
                    s.a.createElement(
                      "p",
                      { className: "table__link" },
                      s.a.createElement(
                        "a",
                        {
                          className: t.document ? "" : "hide",
                          href: "/" + t.document,
                          target: "login" !== t.document && "_blank",
                        },
                        s.a.createElement("i", {
                          className:
                            "ico_arrow ico_arrow_success ico_arrow_small ico_arrow_middle",
                        }),
                        s.a.createElement(
                          "span",
                          null,
                          "\u0441\u043a\u0430\u0437\u0430\u0442\u044c",
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        W = (function (e) {
          function t() {
            var e, a;
            Object(d.a)(this, t);
            for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++)
              s[l] = arguments[l];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(g.a)(t)).call.apply(e, [this].concat(s)),
              )).state = {
                filters: { product: 0, version: 0 },
                productNames: [],
                versions: [],
                loading: !0,
                page: !1,
              }),
              (a.handleChange = function (e) {
                (a.setState({
                  filters: Object.assign(
                    a.state.filters,
                    Object(u.a)({}, e.name, e.value),
                  ),
                }),
                  console.log(a.state.filters));
              }),
              a
            );
          }
          return (
            Object(f.a)(t, e),
            Object(h.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  if (this.state.page) return 0;
                  var t = this.props.user
                    ? "?token=" + this.props.user.token
                    : "";
                  C.f(C.uri + "page/infobase" + t, C.params)
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (t) {
                      var a = t.items,
                        n = [],
                        s = [];
                      (a.forEach(function (e) {
                        var t = e.pagetitle;
                        -1 === n.indexOf(t) && n.push(t);
                      }),
                        a.forEach(function (e) {
                          var t = e.longtitle;
                          -1 === s.indexOf(t) && s.push(t);
                        }),
                        e.setState({
                          loading: !1,
                          versions: s,
                          productNames: n,
                          page: t,
                        }));
                    });
                },
              },
              {
                key: "handleSubmit",
                value: function (e) {
                  (e.preventDefault(), console.log(this.state));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  if (this.state.loading)
                    return s.a.createElement("div", { className: "loading" });
                  var t = this.state.page,
                    a = this.state.filters,
                    n = {
                      type: "select",
                      handleChange: function (t) {
                        return e.handleChange(t);
                      },
                    };
                  return s.a.createElement(
                    "div",
                    { className: "page-infobase" },
                    s.a.createElement(
                      "header",
                      { className: "main__header" },
                      s.a.createElement(
                        "h1",
                        { className: "main__title" },
                        t.pagetitle,
                      ),
                      s.a.createElement(
                        "form",
                        {
                          className: "filters",
                          onSubmit: function (t) {
                            return e.handleSubmit(t);
                          },
                        },
                        s.a.createElement(
                          x,
                          Object.assign(
                            {
                              placeholder:
                                "\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442",
                              name: "product",
                              value: a.product,
                              values: this.state.productNames,
                            },
                            n,
                          ),
                        ),
                        s.a.createElement(
                          x,
                          Object.assign(
                            {
                              placeholder:
                                "\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0432\u0435\u0440\u0441\u0438\u044e",
                              name: "version",
                              value: a.version,
                              values: this.state.versions,
                            },
                            n,
                          ),
                        ),
                        s.a.createElement(y, { class: "hide" }),
                      ),
                    ),
                    s.a.createElement(
                      "section",
                      { className: "table__container" },
                      s.a.createElement(
                        "div",
                        { className: "table" },
                        s.a.createElement(
                          "header",
                          null,
                          s.a.createElement(
                            "ul",
                            null,
                            s.a.createElement(
                              "li",
                              { className: "table__title" },
                              "\u041f\u0440\u043e\u0434\u0443\u043a\u0442",
                            ),
                            s.a.createElement(
                              "li",
                              { className: "table__longtitle" },
                              "\u0412\u0435\u0440\u0441\u0438\u044f",
                            ),
                            s.a.createElement(
                              "li",
                              { className: "table__description" },
                              "\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
                            ),
                          ),
                        ),
                        s.a.createElement(
                          "ul",
                          null,
                          t &&
                            t.items.map(function (e, t) {
                              return (a.product && a.product !== e.pagetitle) ||
                                (a.version && a.version !== e.longtitle)
                                ? ""
                                : s.a.createElement(G, { key: t, info: e });
                            }),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        P = (function (e) {
          function t() {
            var e, a;
            Object(d.a)(this, t);
            for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++)
              s[l] = arguments[l];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(g.a)(t)).call.apply(e, [this].concat(s)),
              )).state = { date: new Date() }),
              (a.getLicenseWidth = function (e) {
                var t = new Date(e[0]).getTime(),
                  n = new Date(e[1]).getTime(),
                  s = a.state.date.getTime(),
                  l = t - n;
                return Math.round(Math.abs((s - t) / (l / 100)));
              }),
              (a.getLicensePast = function (e) {
                var t = new Date(e[0]).getTime(),
                  n = a.state.date.getTime();
                return Math.round(Math.abs((n - t) / 864e5));
              }),
              (a.getLicenseLeft = function (e) {
                var t = new Date(e[1]).getTime(),
                  n = a.state.date.getTime();
                return Math.round(Math.abs((t - n) / 864e5));
              }),
              (a.getLicenseDate = function (e) {
                "string" === typeof e && (e = new Date(e));
                var t = e.getDate(),
                  a = e.getMonth() + 1;
                return (
                  (t = t < 10 ? "0" + t : t) +
                  "." +
                  (a = a < 10 ? "0" + a : a) +
                  "." +
                  e.getFullYear()
                );
              }),
              a
            );
          }
          return (
            Object(f.a)(t, e),
            Object(h.a)(t, [
              {
                key: "render",
                value: function () {
                  if (-1 === this.props.date.indexOf("-")) return "";
                  var e = this.props.date.replace(/\s/g, "").split("-");
                  return s.a.createElement(
                    "div",
                    { className: "license" + (e.length ? "" : " hide") },
                    s.a.createElement(
                      "p",
                      { className: "license__line__start" },
                      "\u043d\u0430\u0447\u0430\u043b\u043e ",
                      s.a.createElement("br", null),
                      this.getLicenseDate(e[0]),
                    ),
                    s.a.createElement(
                      "div",
                      { className: "license__line" },
                      s.a.createElement(
                        "div",
                        {
                          className: "license__line__today",
                          style: { width: this.getLicenseWidth(e) + "%" },
                        },
                        s.a.createElement(
                          "span",
                          { className: "license__line__today__date" },
                          "\u0441\u0435\u0433\u043e\u0434\u043d\u044f ",
                          this.getLicenseDate(this.state.date),
                        ),
                        s.a.createElement(
                          "span",
                          { className: "license__line__today__past" },
                          "\u043f\u0440\u043e\u0448\u043b\u043e",
                          s.a.createElement("br", null),
                          this.getLicensePast(e),
                          " \u0434\u043d\u044f",
                        ),
                        s.a.createElement(
                          "span",
                          { className: "license__line__today__left" },
                          "\u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c",
                          s.a.createElement("br", null),
                          this.getLicenseLeft(e),
                          " \u0434\u043d\u044f",
                        ),
                      ),
                    ),
                    s.a.createElement(
                      "div",
                      { className: "license__line__end" },
                      "\u043a\u043e\u043d\u0435\u0446 ",
                      s.a.createElement("br", null),
                      this.getLicenseDate(e[1]),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        z = (function (e) {
          function t() {
            var e, a;
            Object(d.a)(this, t);
            for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++)
              s[l] = arguments[l];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(g.a)(t)).call.apply(e, [this].concat(s)),
              )).state = {
                loading: !0,
                date: new Date(),
                items: [],
                isDateLoaded: !1,
              }),
              a
            );
          }
          return (
            Object(f.a)(t, e),
            Object(h.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  if (this.state.isDateLoaded) return 0;
                  (this.props.user || (window.location.href = "/"),
                    c.f(
                      C.uri + "liacense?token=" + this.props.user.token,
                      C.params,
                    )
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (t) {
                        e.setState({
                          loading: !1,
                          items: t.items,
                          isDateLoaded: !0,
                        });
                      }));
                },
              },
              {
                key: "render",
                value: function () {
                  return this.state.loading
                    ? s.a.createElement("div", { className: "loading" })
                    : s.a.createElement(
                        "article",
                        { className: "page-infobase" },
                        s.a.createElement(
                          "header",
                          { className: "main__header" },
                          s.a.createElement(
                            "h1",
                            { className: "main__title" },
                            "\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442",
                          ),
                        ),
                        s.a.createElement(
                          "section",
                          { className: "main__content" },
                          s.a.createElement("br", null),
                          s.a.createElement(
                            "ul",
                            { className: "license__list" },
                            this.state.items &&
                              this.state.items.map(function (e, t) {
                                return s.a.createElement(
                                  "li",
                                  { key: t },
                                  s.a.createElement(
                                    "h2",
                                    {
                                      id: "license" + (t + 1),
                                      className: "main__title",
                                    },
                                    e.title,
                                  ),
                                  s.a.createElement(P, { date: e.date }),
                                  s.a.createElement("div", {
                                    className: "page__content",
                                    dangerouslySetInnerHTML: {
                                      __html: e.content,
                                    },
                                  }),
                                );
                              }),
                          ),
                        ),
                      );
                },
              },
            ]),
            t
          );
        })(n.Component),
        J =
          (a(141),
          (function (e) {
            function t() {
              var e, a;
              Object(d.a)(this, t);
              for (
                var n = arguments.length, s = new Array(n), l = 0;
                l < n;
                l++
              )
                s[l] = arguments[l];
              return (
                ((a = Object(p.a)(
                  this,
                  (e = Object(g.a)(t)).call.apply(e, [this].concat(s)),
                )).state = {
                  loading: !1,
                  url: "",
                  user: localStorage.user && JSON.parse(localStorage.user),
                  phone: "",
                  phoneHref: "",
                  phone2: "",
                  phone2Href: "",
                  address: "",
                  basesite: "",
                  emails: [],
                  menu: [],
                  asidemenu: [],
                  asidemenuOpen: "",
                  form: { message: "", email: "" },
                  formLogin: { email: "", password: "" },
                  formLoginError: {},
                  formLoginLoading: !1,
                  card: { items: [] },
                  modalInfo: !1,
                }),
                (a.componentWillMount = function () {
                  var e = a.state.user ? "?token=" + a.state.user.token : "";
                  (C.f(C.uri + "base" + e, C.params)
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      for (
                        var t = [
                            "address",
                            "asidemenu",
                            "basesite",
                            "direction",
                            "emails",
                            "history",
                            "image",
                            "imagexs",
                            "menu",
                            "phone",
                            "phoneHref",
                            "phone2",
                            "phone2Hreaf",
                            "usertoken",
                            "licenses",
                            "portal_link",
                          ],
                          n = 0;
                        n < t.length;
                        n++
                      ) {
                        var s = t[n];
                        void 0 !== e[s] &&
                          a.setState(Object(u.a)({}, s, e[s] && e[s]));
                      }
                      !1 === e.licenses &&
                        void 0 !== localStorage.user &&
                        (localStorage.removeItem("user"),
                        a.setState({ user: !1 }));
                    }),
                    (window.onresize = a.handleWindowResize),
                    a.handleWindowResize());
                }),
                (a.componentWillUpdate = function () {
                  var e = window.location.href;
                  e !== a.state.url &&
                    (a.handleAsideToggle(!1), a.setState({ url: e }));
                }),
                (a.handleWindowResize = function () {
                  for (
                    var e = document.body.clientWidth,
                      t = [
                        ["xs", 0, 767],
                        ["sm", 768, 991],
                        ["md", 992, 1199],
                        ["lg", 1200, 1919],
                        ["xl", 1920],
                      ],
                      n = 0;
                    n < t.length;
                    n++
                  ) {
                    var s = t[n];
                    if (s[1] <= e && (e <= s[2] || void 0 === s[2])) {
                      a.setWidth(s);
                      break;
                    }
                  }
                }),
                (a.setWidth = function (e) {
                  (void 0 !== a.state.width && a.state.width[0] === e[0]) ||
                    a.setState({ width: e });
                }),
                (a.handleFormChange = function (e) {
                  var t = a.state.form,
                    n = e.target;
                  ((t[n.name] = n.value), a.setState({ form: t }));
                }),
                (a.handleLoading = function (e) {
                  a.setState({ loading: e });
                }),
                (a.handleLoginChange = function (e) {
                  var t = e.target;
                  a.setState({
                    form: Object.assign(
                      a.state.formLogin,
                      Object(u.a)({}, t.name, t.value),
                    ),
                  });
                }),
                (a.handleLoginSubmit = function (e, t) {
                  e.preventDefault();
                  var n = void 0 !== t ? t : a.state.formLogin,
                    s = new FormData(),
                    l = { email: !0, password: !0 };
                  (s.append("email", n.email),
                    s.append("password", n.password),
                    (n.password = ""),
                    a.setState({ formLoginLoading: !0 }),
                    v.a
                      .post(C.uri + "login", s)
                      .then(function (e) {
                        var t = e.data,
                          a = t.user && t.user;
                        a &&
                          (localStorage.setItem("user", JSON.stringify(a)),
                          window.location.reload());
                      })
                      .catch(function () {
                        (O.NotificationManager.error(
                          "\u041d\u0435 \u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0440\u0430\u043e\u043b\u044c",
                          "\u041e\u0448\u0438\u0431\u043a\u0430",
                        ),
                          a.setState({
                            formLoginLoading: !1,
                            formLoginError: l,
                          }));
                      }));
                }),
                (a.handleSignout = function (e) {
                  (void 0 !== e.preventDefault && e.preventDefault(),
                    a.setState({ user: !1 }),
                    localStorage.removeItem("user"),
                    window.location.reload());
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
                (a.domToggleClass = function (e, t) {
                  e.className.split(" ").indexOf(t) > -1
                    ? a.domRemoveClass(e, t)
                    : a.domAddClass(e, t);
                }),
                (a.handleCardAdd = function (e) {
                  var t = a.state.card;
                  (t.items.push(e), a.setState({ card: t }));
                }),
                (a.handleGetCardItemIndex = function (e) {
                  var t = -1;
                  return (
                    a.state.card.items.forEach(function (a, n) {
                      if (a.id === e.id) return ((t = n), 0);
                    }),
                    t
                  );
                }),
                (a.handleCardRemove = function (e) {
                  var t = a.state.card,
                    n = a.handleGetCardItemIndex(e);
                  (n > -1 && t.items.splice(n, 1), a.setState({ card: t }));
                }),
                (a.handleGetModalInfo = function (e) {
                  (a.setState({ modalInfo: !0 }),
                    C.f(C.uri + "page/" + e, C.params)
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (e) {
                        return a.setState({ modalInfo: e });
                      }));
                }),
                (a.handleModalInfoClose = function () {
                  a.setState({ modalInfo: !1 });
                }),
                (a.handleNotify = function (e) {
                  var t = e.text;
                  switch (e.type) {
                    case "success":
                      O.NotificationManager.success(
                        t,
                        "\u0437\u0430\u043a\u0440\u044b\u0442\u044c",
                        3e3,
                      );
                      break;
                    case "error":
                      O.NotificationManager.error(
                        t,
                        "\u0437\u0430\u043a\u0440\u044b\u0442\u044c",
                        3e3,
                      );
                  }
                }),
                (a.handleAsideToggle = function (e) {
                  var t = "nav--active";
                  ("object" === typeof e && a.domToggleClass(document.body, t),
                    !0 === e && a.domAddClass(document.body, t),
                    !1 === e && a.domRemoveClass(document.body, t));
                }),
                a
              );
            }
            return (
              Object(f.a)(t, e),
              Object(h.a)(t, [
                {
                  key: "handleAsideMenuToggle",
                  value: function (e) {
                    this.setState({
                      asidemenu: Object.assign(this.state.asidemenu, {
                        open: e,
                      }),
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = {
                        formLoginLoading: this.state.formLoginLoading,
                        handleLoginSubmit: this.handleLoginSubmit,
                        handleSignout: this.handleSignout,
                        user: this.state.user,
                      },
                      a = {
                        user: this.state.user,
                        width: this.state.width,
                        handleNotify: this.handleNotify,
                      },
                      n = Object(m.a)(
                        {
                          address: this.state.address,
                          phone: this.state.phone,
                          phoneHref: this.state.phoneHref,
                          emails: this.state.emails,
                          menu: this.state.menu,
                          licenses: this.state.licenses,
                          basesite: this.state.basesite,
                        },
                        a,
                      ),
                      l = Object(m.a)(
                        {
                          phone2: this.state.phone2,
                          phone2Href: this.state.phone2Href,
                          card: this.state.card,
                          portal_link: this.state.portal_link,
                          handleCardRemove: this.handleCardRemove,
                        },
                        t,
                        a,
                      ),
                      r = {
                        width: this.state.width,
                        menu: this.state.menu,
                        user: this.state.user,
                        licenses: this.state.licenses,
                        address: this.state.address,
                        phone: this.state.phone,
                        phoneHref: this.state.phoneHref,
                        emails: this.state.emails,
                        basesite: this.state.basesite,
                        handleSignout: this.handleSignout,
                        handleAsideToggle: this.handleAsideToggle,
                      },
                      i = {
                        handleGetCardItemIndex: this.handleGetCardItemIndex,
                        handleCardAdd: this.handleCardAdd,
                        handleCardRemove: this.handleCardRemove,
                        handleGetModalInfo: this.handleGetModalInfo,
                      },
                      c = this.state.modalInfo,
                      o = { user: this.state.user };
                    return s.a.createElement(
                      "div",
                      null,
                      s.a.createElement("div", {
                        className: "app__bg img_bg",
                        style: {
                          backgroundImage: "url('assets/imgs/bg.jpg')",
                        },
                      }),
                      s.a.createElement("button", {
                        className: "nav__btn hidden-md-up",
                        onClick: this.handleAsideToggle,
                      }),
                      s.a.createElement(w, { menu: this.state.menu }),
                      s.a.createElement(T, r),
                      s.a.createElement(
                        "section",
                        { className: "page-body" },
                        s.a.createElement(
                          "div",
                          { className: "container" },
                          s.a.createElement(S, n),
                          s.a.createElement(
                            "main",
                            null,
                            s.a.createElement("div", {
                              className:
                                "loading" + (this.state.loading ? "" : " hide"),
                            }),
                            s.a.createElement(_.a, {
                              exact: !0,
                              path: BASE_PATH + "/",
                              component: function () {
                                return s.a.createElement(A, null);
                              },
                            }),
                            s.a.createElement(_.a, {
                              exact: !0,
                              path: BASE_PATH + "/aboutus.html",
                              render: function (e) {
                                return s.a.createElement(F, { route: e });
                              },
                            }),
                            s.a.createElement(_.a, {
                              exact: !0,
                              path: BASE_PATH + "/contacts.html",
                              render: function (e) {
                                return s.a.createElement(F, { route: e });
                              },
                            }),
                            s.a.createElement(_.a, {
                              path: BASE_PATH + "/catalog",
                              component: function (e) {
                                return s.a.createElement(
                                  R,
                                  Object.assign({ route: e }, i),
                                );
                              },
                            }),
                            s.a.createElement(_.a, {
                              path: BASE_PATH + "/infobase",
                              render: function () {
                                return s.a.createElement(W, {
                                  user: e.state.user,
                                  handleGetModalInfo: e.handleGetModalInfo,
                                });
                              },
                            }),
                            s.a.createElement(_.a, {
                              path: BASE_PATH + "/login",
                              render: function () {
                                return s.a.createElement(H, t);
                              },
                            }),
                            s.a.createElement(_.a, {
                              path: BASE_PATH + "/cabinet",
                              component: function (e) {
                                return s.a.createElement(
                                  z,
                                  Object.assign({ route: e }, o),
                                );
                              },
                            }),
                          ),
                          s.a.createElement(M, l),
                        ),
                      ),
                      s.a.createElement("footer", { className: "page-footer" }),
                      s.a.createElement(
                        N.a,
                        {
                          className: "modal__product",
                          isOpen: !1 !== c,
                          onRequestClose: this.handleModalInfoClose,
                        },
                        s.a.createElement("div", {
                          className:
                            "modal__laoding loading" +
                            (c.pagetitle ? " hide" : ""),
                        }),
                        s.a.createElement(
                          "article",
                          { className: c.pagetitle ? "" : "hide" },
                          s.a.createElement(
                            "header",
                            { className: "modal__header" },
                            s.a.createElement(y, {
                              theme: "remove",
                              class: "modal__close",
                              handleClick: this.handleModalInfoClose,
                            }),
                            s.a.createElement(
                              "h2",
                              { className: "page__title" },
                              s.a.createElement("span", null, c.pagetitle),
                            ),
                            s.a.createElement(
                              "div",
                              { className: "table" },
                              s.a.createElement(
                                "ul",
                                null,
                                s.a.createElement(
                                  "li",
                                  { valign: "top" },
                                  s.a.createElement(
                                    "h3",
                                    { className: "table__title" },
                                    c.publishedon,
                                  ),
                                  s.a.createElement(
                                    "p",
                                    { className: "table__longtitle" },
                                    c.longtitle,
                                  ),
                                  s.a.createElement(
                                    "p",
                                    { className: "table__description" },
                                    c.introtext,
                                  ),
                                  s.a.createElement(
                                    "p",
                                    {
                                      className:
                                        "table__link" +
                                        (c.document ? "" : " hide"),
                                    },
                                    s.a.createElement(
                                      "a",
                                      {
                                        href: "/" + c.document,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      },
                                      s.a.createElement("i", {
                                        className:
                                          "ico_arrow ico_arrow_success ico_arrow_small ico_arrow_middle",
                                      }),
                                      s.a.createElement(
                                        "span",
                                        null,
                                        c.introtext,
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          s.a.createElement("section", {
                            className: "modal__body",
                            dangerouslySetInnerHTML: { __html: c.content },
                          }),
                        ),
                      ),
                      s.a.createElement(O.NotificationContainer, null),
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        B = o()();
      r.a.render(
        s.a.createElement(i.a, { history: B }, s.a.createElement(J, null)),
        document.getElementById("root"),
      );
    },
    57: function (e, t, a) {
      e.exports = a(144);
    },
  },
  [[57, 2, 1]],
]);
//# sourceMappingURL=main.d2b9bc34.chunk.js.map
