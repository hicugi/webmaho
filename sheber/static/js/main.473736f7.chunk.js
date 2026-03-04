(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    108: function (e, t, a) {},
    109: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        c = a.n(n),
        l = a(18),
        i = a.n(l),
        r = (a(56), a(1)),
        s = a(2),
        o = a(3),
        m = a(5),
        u = a(4),
        d = a(6),
        v = a(7),
        h = a(30),
        E = a.n(h);
      E.a.defaults.baseURL = "/";
      var f = {
          headers: { "Content-Type": "application/json" },
          get: function (e, t) {
            var a = {};
            return (
              t && (a.params = t),
              E.a.get(e, a).then(function (e) {
                return e.data;
              })
            );
          },
          post: function (e, t) {
            return E.a.post(e, t);
          },
          delete: function (e, t) {
            return this.request(e, t, { method: "DELETE" });
          },
        },
        p = function () {
          return c.a.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "124",
              height: "90",
              viewBox: "0 0 124 90",
            },
            c.a.createElement("path", {
              d: "m 26.784,62.86778 h 6.944 v -7.605333 h 3.637333 V 73.77978 H 33.728 V 66.174447 H 26.784 V 73.77978 H 23.146667 V 55.262447 H 26.784 Z m 23.808,7.605334 h 8.266667 v 3.306666 h -11.904 V 55.262447 h 11.904 v 3.306667 H 50.592 v 4.298666 h 6.944 v 3.306667 h -6.944 z m 42.325333,0 H 101.184 V 73.77978 H 89.28 V 55.262447 h 11.904 v 3.306667 h -8.266667 v 4.298666 h 6.944 v 3.306667 h -6.944 z M 7.2879664,73.77978 c -0.9930127,0 -1.932814,-0.13136 -2.8194323,-0.394082 C 3.5819158,73.122977 2.8061364,72.728895 2.1411728,72.203453 1.4762091,71.678003 0.95311212,71.016829 0.57186625,70.219902 0.19062039,69.422976 3.1249999e-7,68.49033 3.1249999e-7,67.42192 H 3.7769753 c 0,0.595504 0.1196917,1.085916 0.3590786,1.471242 0.239387,0.385326 0.5452657,0.687449 0.9176454,0.90639 0.3723796,0.218935 0.7757849,0.367807 1.2102278,0.446625 0.4344427,0.07882 0.8467146,0.118227 1.2368266,0.118227 1.0107448,0 1.7732251,-0.188282 2.2874633,-0.564852 0.514239,-0.37657 0.771354,-0.853841 0.771354,-1.431833 0,-0.332783 -0.09309,-0.613016 -0.279283,-0.840713 C 10.094098,67.299315 9.8192508,67.089144 9.455737,66.896477 9.0922232,66.703818 8.6400551,66.511152 8.099218,66.318492 7.5583809,66.125826 6.9333244,65.898135 6.2240295,65.635415 L 5.4526755,65.346421 C 4.8675074,65.118728 4.2779151,64.869146 3.6838808,64.597665 3.0898466,64.326185 2.5534506,63.989029 2.0746767,63.586187 1.5959029,63.183346 1.2102297,62.706074 0.91764568,62.154356 0.62506161,61.602638 0.47877179,60.932705 0.47877179,60.144537 c 0,-0.840714 0.1595889,-1.59822 0.47877146,-2.272541 0.31918265,-0.674322 0.77578415,-1.256682 1.36981845,-1.747098 0.5940342,-0.490416 1.3166173,-0.866979 2.1677708,-1.129702 0.8511536,-0.262723 1.8086869,-0.394082 2.872629,-0.394082 1.0107448,0 1.94168,0.113844 2.7928335,0.341537 0.851154,0.227693 1.591469,0.591121 2.220968,1.090295 0.629499,0.499173 1.121564,1.142834 1.476212,1.931002 0.354647,0.788168 0.531968,1.733956 0.531968,2.837392 h -3.776975 c 0,-0.525445 -0.09309,-0.967689 -0.279283,-1.326743 C 10.147295,59.115542 9.9034788,58.83093 9.6020286,58.620752 9.3005783,58.410574 8.9503692,58.257321 8.5513908,58.16099 8.152413,58.064658 7.7401411,58.016493 7.3145645,58.016493 c -0.9398153,0 -1.6801305,0.170767 -2.2209676,0.512306 -0.5408372,0.34154 -0.8112517,0.810055 -0.8112517,1.405561 0,0.332781 0.079795,0.613015 0.2393857,0.840708 0.1595913,0.227693 0.3812425,0.424732 0.6649604,0.591123 0.2837179,0.166392 0.6161947,0.315265 0.9974406,0.446626 0.3812459,0.131362 0.793517,0.275858 1.2368266,0.433491 l 0.7447552,0.262721 c 0.8334216,0.297753 1.6357988,0.604258 2.4071573,0.919526 0.771358,0.315267 1.44961,0.683074 2.034778,1.10343 0.585168,0.420356 1.055069,0.923901 1.409716,1.510652 0.354647,0.586741 0.531969,1.300465 0.531969,2.141179 0,0.805682 -0.150724,1.550053 -0.452173,2.233131 -0.30145,0.683077 -0.758052,1.274197 -1.369819,1.773371 -0.611767,0.499168 -1.369814,0.888872 -2.274164,1.169106 -0.9043511,0.28024 -1.9594112,0.420356 -3.1652116,0.420356 z M 120.68429,66.308307 124,72.33687 v 1.44291 h -3.63733 l -3.8688,-6.944 h -2.74454 v 6.944 h -3.968 V 55.262447 h 8.59734 c 2.92195,0 5.29066,2.368712 5.29066,5.290667 v 0.992 c 0,2.095453 -1.21821,3.906378 -2.98504,4.763193 z m -6.93496,-7.739193 v 4.96 h 4.1664 c 1.09573,0 1.984,-0.888268 1.984,-1.984 v -0.992 c 0,-1.095733 -0.88827,-1.984 -1.984,-1.984 z M 75.888,73.77978 H 67.125333 V 55.262447 H 75.5904 c 2.739335,0 4.96,2.220667 4.96,4.96 0,1.423812 -0.599929,2.707503 -1.560793,3.612082 1.422561,0.984702 2.354393,2.628153 2.354393,4.489251 0,3.013266 -2.442734,5.456 -5.456,5.456 z m -5.125333,-3.306666 h 4.7616 c 1.09573,0 1.984,-0.88827 1.984,-1.984 v -0.330667 c 0,-1.278357 -1.03631,-2.314667 -2.314667,-2.314667 h -4.430933 z m 0,-7.605334 h 4.492338 c 0.851427,-0.308972 1.459662,-1.125055 1.459662,-2.0832 v -0.231466 c 0,-1.095733 -0.88827,-1.984 -1.984,-1.984 h -3.968 z m -43.61672,24.493796 c 0.598929,0 1.125398,-0.256075 1.579426,-0.768238 v -0.739245 h -1.593916 v -2.058281 h 4.01377 v 5.638542 H 29.826624 L 29.333959,88.62264 c -0.173883,0.222254 -0.412968,0.417936 -0.717263,0.587045 -0.304294,0.16911 -0.610999,0.285068 -0.920124,0.347875 -0.309124,0.06281 -0.574775,0.09422 -0.796958,0.09422 -1.159217,0 -2.074502,-0.314054 -2.745882,-0.942175 -0.67138,-0.628115 -1.007065,-1.488145 -1.007065,-2.580106 v -3.464295 c 0,-1.149947 0.35259,-2.036543 1.057781,-2.65983 0.70519,-0.623287 1.705,-0.934927 2.999459,-0.934927 0.560289,0 1.081929,0.0773 1.564936,0.231923 0.483007,0.154613 0.900802,0.384115 1.253398,0.688507 0.352595,0.304399 0.627905,0.68126 0.825938,1.130609 0.198032,0.449343 0.297048,0.949417 0.297048,1.500228 h -2.506795 c 0,-0.396198 -0.130411,-0.705418 -0.391234,-0.927678 -0.260824,-0.222255 -0.627904,-0.333385 -1.101251,-0.333385 -0.492668,0 -0.866993,0.120792 -1.122986,0.362377 -0.255994,0.241585 -0.383989,0.570136 -0.383989,0.985658 v 3.304855 c 0,0.415522 0.127995,0.744073 0.383989,0.985658 0.255993,0.241585 0.630318,0.362377 1.122986,0.362377 z m 13.745878,2.072778 V 79.287873 h 4.448474 c 1.072277,0 1.886131,0.282648 2.44159,0.847955 0.555458,0.565308 0.833183,1.355277 0.833183,2.369928 0,0.637783 -0.137655,1.21516 -0.412969,1.732151 -0.275314,0.516991 -0.654469,0.920431 -1.137476,1.210333 l 1.869229,3.1744 v 0.811714 H 46.514001 L 44.42742,85.723639 h -1.04329 v 3.710715 z m 2.492305,-5.768996 h 1.535955 c 0.386406,0 0.678621,-0.08214 0.876654,-0.24642 0.198033,-0.164275 0.297048,-0.45417 0.297048,-0.869699 0,-0.396198 -0.09902,-0.676432 -0.297048,-0.840707 -0.198033,-0.164275 -0.490248,-0.246413 -0.876654,-0.246413 H 43.38413 Z m 18.730488,3.696218 c 0.540968,0 0.946688,-0.132875 1.217172,-0.398612 0.270484,-0.265743 0.405724,-0.562887 0.405724,-0.891444 v -3.435309 c 0,-0.328551 -0.137655,-0.623281 -0.412969,-0.88419 -0.275314,-0.260916 -0.678619,-0.39137 -1.209927,-0.39137 -0.396066,0 -0.724506,0.07972 -0.98533,0.239171 -0.260824,0.159441 -0.432289,0.338212 -0.5144,0.536315 -0.08211,0.198096 -0.123166,0.364785 -0.123166,0.500074 v 3.435309 c 0,0.231923 0.07245,0.454177 0.217352,0.666769 0.144902,0.212593 0.342932,0.36962 0.594096,0.471088 0.251163,0.101462 0.521643,0.152199 0.811448,0.152199 z m 0,2.290204 c -1.255819,0 -2.255629,-0.326136 -2.99946,-0.978409 -0.743831,-0.65228 -1.115741,-1.548546 -1.115741,-2.688823 v -3.217883 c 0,-0.425184 0.06521,-0.855203 0.195617,-1.290049 0.130412,-0.434854 0.376742,-0.850376 0.738997,-1.246574 0.362255,-0.396192 0.830766,-0.688508 1.405544,-0.876941 0.574779,-0.188441 1.166454,-0.282654 1.775043,-0.282654 0.618249,0 1.180944,0.08214 1.688102,0.246413 0.507157,0.164281 0.941857,0.40586 1.304113,0.724748 0.362255,0.318895 0.63998,0.710252 0.833183,1.174098 0.193203,0.46384 0.289806,0.980824 0.289806,1.550959 v 3.217883 c 0,1.140277 -0.371913,2.036543 -1.115744,2.688823 -0.743832,0.652273 -1.743641,0.978409 -2.99946,0.978409 z m 17.61475,0 c -1.236502,0 -2.214574,-0.314054 -2.934257,-0.942175 -0.719683,-0.628115 -1.079514,-1.492973 -1.079514,-2.594602 v -6.82713 h 2.492301 v 6.914101 c 0,0.202931 0.06521,0.401026 0.195616,0.594294 0.130414,0.193269 0.313954,0.335799 0.550626,0.427605 0.236678,0.0918 0.49508,0.137703 0.775228,0.137703 0.280141,0 0.540957,-0.0459 0.782463,-0.137703 0.241506,-0.09181 0.425045,-0.234336 0.550626,-0.427605 0.125581,-0.193268 0.188374,-0.391363 0.188374,-0.594294 v -6.914101 h 2.492301 v 6.82713 c 0,1.101629 -0.359831,1.966487 -1.079514,2.594602 -0.719676,0.628121 -1.697755,0.942175 -2.93425,0.942175 z M 93.51871,89.434354 V 79.287873 h 4.709302 c 0.3381,0 0.681034,0.05072 1.028796,0.152193 0.347769,0.101468 0.664131,0.28024 0.949102,0.536315 0.28498,0.256081 0.51924,0.596708 0.70278,1.021899 0.18354,0.425184 0.27531,0.942168 0.27531,1.550959 0,0.367212 -0.0434,0.741659 -0.13042,1.12336 -0.0869,0.381709 -0.2584,0.751321 -0.51439,1.108871 -0.256,0.357543 -0.591679,0.62328 -1.007069,0.797224 -0.415383,0.173938 -0.850084,0.26091 -1.304109,0.26091 h -2.216995 v 3.59475 z m 2.492307,-5.768996 h 1.738818 c 0.15456,0 0.30912,-0.0459 0.463687,-0.137703 0.15456,-0.09181 0.268065,-0.227089 0.340514,-0.40586 0.07246,-0.178772 0.108677,-0.359957 0.108677,-0.543563 0,-0.183606 -0.03624,-0.367206 -0.108677,-0.550812 -0.07245,-0.183599 -0.185954,-0.323716 -0.340514,-0.42035 -0.154567,-0.09663 -0.309127,-0.144951 -0.463687,-0.144951 H 96.011017 Z M 73.738667,28.136 62.991597,19.538344 c -0.483063,-0.38645 -1.169465,-0.38645 -1.652527,0 L 59.272,21.192 l -4.96,-3.968 6.407372,-5.125898 c 0.84536,-0.676287 2.046562,-0.676287 2.891922,0 L 78.698667,24.168 v 7.936 L 63.611294,44.173898 c -0.84536,0.676288 -2.046562,0.676288 -2.891922,0 L 45.632,32.104 v -7.936 l 15.70707,12.565656 c 0.483062,0.38645 1.169464,0.38645 1.652527,0 z M 45.632,20.861333 V 12.925334 L 60.719372,0.85543553 c 0.84536,-0.67628754 2.046562,-0.67628754 2.891922,0 L 78.698667,12.925334 v 7.935999 L 62.991597,8.2956775 c -0.483063,-0.3864502 -1.169465,-0.3864502 -1.652527,0 z m 7.026667,-2.314666 8.680403,6.944323 c 0.483062,0.38645 1.169464,0.38645 1.652527,0 l 2.06707,-1.653657 4.96,3.968 -6.407373,5.125899 c -0.84536,0.676287 -2.046562,0.676287 -2.891922,0 L 48.666944,23.289289 c -0.427812,-0.34225 -0.497174,-0.966508 -0.154925,-1.39432 0.04576,-0.0572 0.09772,-0.109162 0.154925,-0.154924 z",
            }),
          );
        },
        _ =
          (a(76),
          function () {
            return c.a.createElement(
              "div",
              { className: "app-loading" },
              c.a.createElement(p, null),
            );
          }),
        g = a(9),
        b = a(27);
      function N() {
        var e = document.body.classList,
          t = "menu--active";
        Object(g.a)(e).includes(t)
          ? e.remove(t)
          : (e.add(t), b.animateScroll.scrollToTop({ duration: 200 }));
      }
      var y = function (e) {
          var t = e.menu,
            a = ["menu"];
          "/" === window.location.pathname && a.push("menu_light");
          var n = t.filter(function (e) {
            return "/vacancy.html" !== e.link;
          });
          return c.a.createElement(
            "div",
            { className: a.join(" ") },
            c.a.createElement(
              "button",
              { className: "menu-btn", onClick: N },
              "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e",
            ),
            c.a.createElement(
              "nav",
              null,
              c.a.createElement(
                "div",
                { className: "menu__container container" },
                c.a.createElement(
                  "ul",
                  { className: "menu__list" },
                  [0, 1].map(function (e) {
                    return c.a.createElement(
                      "li",
                      { key: e },
                      c.a.createElement(
                        "ul",
                        null,
                        n
                          .filter(function (t, a) {
                            return a >= 3 * e && a < 3 * e + 3;
                          })
                          .map(function (e, t) {
                            return c.a.createElement(
                              "li",
                              { key: t },
                              e.blank
                                ? c.a.createElement(
                                    "a",
                                    {
                                      href: e.blank,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                    },
                                    e.menutitle || e.title,
                                  )
                                : c.a.createElement(
                                    v.b,
                                    { to: BASE_PATH + e.link },
                                    e.menutitle || e.title,
                                  ),
                            );
                          }),
                      ),
                    );
                  }),
                ),
              ),
              c.a.createElement("i", { className: "menu__line" }),
            ),
          );
        },
        k = function (e) {
          var t = e.className,
            a = e.items,
            n = ["social-networks"];
          return (
            t && n.push(t),
            c.a.createElement(
              "ul",
              { className: n.join(" ") },
              a &&
                a.map(function (e, t) {
                  return c.a.createElement(
                    "li",
                    { key: t },
                    c.a.createElement("span", {
                      className: "ico ico_box",
                      dangerouslySetInnerHTML: { __html: e.icon },
                    }),
                    c.a.createElement(
                      "a",
                      {
                        className: "ico",
                        href: e.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      e.title,
                    ),
                  );
                }),
            )
          );
        },
        w = a(19),
        j = "routeHistoryListener";
      function O() {
        var e = window.location.pathname.replace(BASE_PATH, ""),
          t = "/" === e,
          a = document.querySelector(".menu__line");
        if (a)
          if (t) a.removeAttribute("style");
          else {
            var n = document.querySelectorAll(".menu__list a"),
              c = e.split("/")[1],
              l = Object(g.a)(n).find(function (e) {
                return e.getAttribute("href").indexOf(c) > -1;
              });
            if (l) {
              var i = l.parentNode,
                r = i.offsetLeft,
                s = i.clientWidth;
              a.style.left = "".concat(r + s / 2, "px");
            }
          }
      }
      function S(e) {
        setTimeout(function () {
          O();
        }, 200);
        var t = document.body.classList,
          a = window[j];
        if (a.previousPath !== e) {
          ((a.previousPath = e), t.remove("menu--active"));
          var n = "page--home",
            c = "/" === e,
            l = Object(g.a)(t).includes(n);
          c ? !l && t.add(n) : l && t.remove(n);
        }
      }
      var C = Object(w.d)(function (e) {
          var t = e.history;
          (void 0 === window[j] && (window[j] = {}),
            t.listen(function (e) {
              S(e.pathname);
            }));
          var a = window[j];
          return (
            a.firstInit ||
              (window.addEventListener("resize", O),
              setTimeout(function () {
                S(t.location.pathname);
              }, 100),
              (a.firstInit = !0)),
            null
          );
        }),
        L = function (e) {
          var t = e.link,
            a = e.className,
            n = ["email"];
          return (
            void 0 !== a && n.push(a),
            c.a.createElement(
              "a",
              { className: n.join(" "), href: "mailto:".concat(t) },
              c.a.createElement(
                "span",
                { className: "ico ico_box" },
                c.a.createElement(
                  "svg",
                  { width: "10", height: "8", viewBox: "0 0 10 8" },
                  c.a.createElement("path", {
                    d: "M2 0H8C9.10457 0 10 0.89543 10 2V6C10 7.10457 9.10457 8 8 8H2C0.89543 8 0 7.10457 0 6V2C0 0.89543 0.89543 0 2 0ZM1.04459 1.70382C1.01561 1.79741 1 1.89688 1 2V6C1 6.55228 1.44772 7 2 7H8C8.55229 7 9 6.55228 9 6V2C9 1.89688 8.98439 1.79741 8.95541 1.70382L5 5L1.04459 1.70382ZM1.78885 1.02233L5 3.69829L8.21115 1.02233C8.14308 1.0077 8.07244 1 8 1H2C1.92756 1 1.85692 1.0077 1.78885 1.02233Z",
                    fill: "white",
                  }),
                ),
              ),
              c.a.createElement("span", { className: "email-link" }, t),
            )
          );
        },
        I = function (e) {
          var t = e.contacts,
            a = e.menu;
          return (
            window.addEventListener("scroll", function () {
              var e = window,
                t = e.scrollY,
                a = e.innerHeight,
                n = document.body.classList,
                c = "header-offset",
                l = Object(g.a)(n).includes(c);
              t > 0.3 * a ? !l && n.add(c) : l && n.remove(c);
            }),
            c.a.createElement(
              "div",
              null,
              c.a.createElement(
                "header",
                { className: "app-header" },
                c.a.createElement(
                  "div",
                  { className: "app-header__container container" },
                  t &&
                    c.a.createElement(k, {
                      className: "app-header__social-networks",
                      items: t.socnetworks,
                    }),
                  c.a.createElement(L, {
                    className: "app-header__email",
                    link: t.email,
                  }),
                  c.a.createElement(
                    "div",
                    { className: "app-header__logo" },
                    c.a.createElement(p, null),
                    c.a.createElement(
                      v.b,
                      { to: BASE_PATH + "/" },
                      "\u0413\u043b\u0430\u0432\u043d\u0430\u044f",
                    ),
                  ),
                ),
              ),
              c.a.createElement(y, { menu: a }),
              c.a.createElement(C, null),
            )
          );
        },
        T = function () {
          return c.a.createElement(
            "svg",
            {
              width: "33.333",
              height: "44.689999",
              viewBox: "0 0 33.333 44.689999",
              version: "1.1",
            },
            c.a.createElement("path", {
              d: "m 28.33315,28.011682 -10.8337,-8.667 c -0.487,-0.3896 -1.1789,-0.3896 -1.6659,0 l -2.0837,1.667 -5,-4 6.459,-5.1672 c 0.8522,-0.6818 2.0631,-0.6818 2.9153,0 l 15.209,12.1672 v 8 l -15.209,12.1672 c -0.8522,0.6818 -2.0631,0.6818 -2.9153,0 l -15.209,-12.1672 v -8 l 15.8337,12.667 c 0.487,0.3895 1.1789,0.3895 1.6659,0 z",
            }),
            c.a.createElement("path", {
              d: "m -1.5e-4,20.678282 v -8 l 15.209,-12.16720844 c 0.8522,-0.681742 2.0631,-0.681742 2.9153,0 l 15.209,12.16720844 v 8 L 17.49945,8.0113216 c -0.487,-0.38957 -1.1789,-0.38957 -1.6659,0 z",
            }),
            c.a.createElement("path", {
              d: "m 7.08315,18.344982 8.7504,7.0003 c 0.487,0.3896 1.1789,0.3896 1.6659,0 l 2.0837,-1.667 5,4 -6.459,5.1672 c -0.8522,0.6818 -2.0631,0.6818 -2.9153,0 l -12.1496,-9.7197 c -0.4313,-0.345 -0.5012,-0.9743 -0.1562,-1.4055 0.0462,-0.0577 0.0985,-0.1101 0.1562,-0.1562 z",
            }),
          );
        },
        x = function (e) {
          var t = e.contacts,
            a = e.menu,
            n = e.copyright;
          return (
            BASE_PATH + "/" === window.location.pathname &&
              (["app-header"].push("app-header_light"),
              ["menu"].push("menu_light")),
            c.a.createElement(
              "footer",
              { id: "footer", className: "app-footer" },
              c.a.createElement(
                "section",
                { className: "app-footer__row1" },
                c.a.createElement(
                  "div",
                  { className: "container" },
                  c.a.createElement(
                    "ul",
                    { className: "menu_footer" },
                    c.a.createElement("li", null, c.a.createElement(T, null)),
                    a &&
                      a.map(function (e, t) {
                        return c.a.createElement(
                          "li",
                          { key: t },
                          c.a.createElement(
                            v.b,
                            { to: e.link },
                            e.menutitle || e.title,
                          ),
                        );
                      }),
                  ),
                ),
              ),
              c.a.createElement(
                "section",
                { className: "app-footer__row2" },
                c.a.createElement(
                  "div",
                  { className: "container" },
                  c.a.createElement(
                    "div",
                    { className: "app-footer__row2__container" },
                    t &&
                      c.a.createElement(k, {
                        className: "app-footer__social-networks",
                        items: t.socnetworks,
                      }),
                    t &&
                      c.a.createElement(
                        "a",
                        {
                          className: "app-footer__email-link email-link",
                          href: "mailto:".concat(t.email),
                        },
                        t.email,
                      ),
                    c.a.createElement(
                      "div",
                      { className: "app-footer__copyright copyright" },
                      n,
                    ),
                  ),
                ),
              ),
            )
          );
        },
        H = a(14),
        M = a.n(H),
        A = function (e) {
          var t = e.variant,
            a = e.children,
            n = e.click,
            l = e.href,
            i = e.medium;
          void 0 === t && (t = "default");
          var r = ["btn"];
          (t && r.push({ default: "btn_default" }[t]), i && r.push("btn_md"));
          var s = {
            className: r.join(" "),
            onClick: function (e) {
              return n(e);
            },
          };
          return l
            ? c.a.createElement(v.b, { to: l, className: r.join(" ") }, a)
            : c.a.createElement("button", s, a);
        };
      function z() {
        var e = document.body.querySelector("#projects");
        if (e) {
          var t = e.offsetTop,
            a = document.body.querySelector("nav");
          (a && window.innerWidth >= 1024 && (t -= a.clientHeight),
            b.animateScroll.scrollTo(t));
        }
      }
      var D = function (e) {
          var t,
            a = e.longtitle,
            n = e.description,
            l = e.images;
          return c.a.createElement(
            "section",
            { className: "section-welcome" },
            Array.isArray(l) &&
              l.length &&
              ((t = l),
              c.a.createElement(
                "div",
                { className: "background-slider" },
                c.a.createElement(
                  M.a,
                  {
                    className: "certificates",
                    arrows: !1,
                    dots: !1,
                    fade: !0,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: !0,
                    autoplaySpeed: 5e3,
                  },
                  t.map(function (e, t) {
                    return c.a.createElement(
                      "div",
                      { key: t, className: "background-slider__item" },
                      c.a.createElement("div", {
                        className: "background-slider__item__image",
                        style: { backgroundImage: "url('".concat(e, "')") },
                      }),
                    );
                  }),
                ),
              )),
            c.a.createElement(
              "div",
              { className: "container" },
              c.a.createElement(
                "div",
                { className: "welcome__info" },
                c.a.createElement("h1", null, a),
                c.a.createElement("p", null, n),
              ),
              c.a.createElement(
                "div",
                { className: "welcome__btn" },
                c.a.createElement(
                  A,
                  { click: z },
                  "\u041f\u0440\u043e\u0435\u043a\u0442\u044b",
                ),
              ),
            ),
          );
        },
        q = (function (e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, c = new Array(n), l = 0; l < n; l++)
              c[l] = arguments[l];
            return (
              ((a = Object(m.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(c)),
              )).state = { active: !1, height: null }),
              (a.toggle = function (e) {
                var t = e.target,
                  n = a.state.active,
                  c = { active: !n, height: null },
                  l = t.parentNode;
                if (!n) {
                  var i = l.getElementsByTagName("div")[0];
                  c.height = i.clientHeight + t.clientHeight / 2;
                }
                a.setState(c);
              }),
              a
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.active,
                    a = e.height,
                    n = ["toggle-info"],
                    l = {};
                  return (
                    t &&
                      (n.push("toggle-info--active"),
                      Object.assign(l, { height: a, maxHeight: a })),
                    c.a.createElement(
                      "div",
                      { className: n.join(" "), style: l },
                      c.a.createElement(
                        "button",
                        { onClick: this.toggle },
                        "Toggle",
                      ),
                      c.a.createElement("div", null, this.props.children),
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        V = function (e) {
          var t = e.items;
          return c.a.createElement(
            "ul",
            { className: "aboutus-stats" },
            t.map(function (e, t) {
              return c.a.createElement("li", {
                key: t,
                dangerouslySetInnerHTML: {
                  __html: e.replace("[", "<span>").replace("]", "</span>"),
                },
              });
            }),
          );
        },
        R = function (e) {
          var t = e.title,
            a = e.longtitle,
            n = e.description,
            l = e.image,
            i = e.statistics;
          return c.a.createElement(
            "section",
            { id: "aboutus", className: "aboutus-badge" },
            c.a.createElement(
              "div",
              { className: "container" },
              c.a.createElement(
                "div",
                { className: "row" },
                c.a.createElement(
                  "div",
                  { className: "col-md-6" },
                  c.a.createElement(
                    "h2",
                    { className: "section__undertitle" },
                    t,
                  ),
                  c.a.createElement("h3", { className: "section__title" }, a),
                  c.a.createElement(q, null, c.a.createElement("p", null, n)),
                ),
                c.a.createElement(
                  "div",
                  { className: "col-md-6" },
                  c.a.createElement(
                    "div",
                    { className: "image-box" },
                    c.a.createElement("div", {
                      className: "image-box__image",
                      style: { backgroundImage: l && "url('".concat(l, "')") },
                    }),
                  ),
                ),
              ),
              i && c.a.createElement(V, { items: i }),
            ),
          );
        },
        W = a(15),
        B = a.n(W),
        Y = a(20),
        Z = function (e) {
          var t = e.info,
            a = e.index,
            n = e.variant,
            l = e.loading,
            i = e.className,
            r = ["product-badge"];
          return (
            i && r.push(i),
            void 0 !== a && r.push("product-badge--".concat(a)),
            n && r.push("product-badge_".concat(n)),
            l && r.push("product-badge--loading"),
            t || l || r.push("product-badge--undefined"),
            t && !l && r.push("product-badge--exist"),
            c.a.createElement(
              "div",
              { className: r.join(" ") },
              t &&
                t.image &&
                c.a.createElement("img", { src: t.image, alt: t.title }),
              t &&
                t.link &&
                c.a.createElement(
                  v.b,
                  { to: t.link, className: "product-badge__link" },
                  c.a.createElement(
                    "span",
                    { className: "product-badge__link__text" },
                    c.a.createElement("span", null, t.title),
                  ),
                ),
            )
          );
        },
        F = function (e) {
          var t = e.active,
            a = e.variant,
            n = e.click,
            l = [
              "catalog-badge__arrows__item",
              "catalog-badge__arrows__item_".concat(a),
            ];
          t && l.push("catalog-badge__arrows__item--active");
          var i = {
            className: l.join(" "),
            type: "button",
            disabled: !t,
            variant: a,
            onClick: n,
          };
          return c.a.createElement("button", i);
        },
        P = function (e) {
          var t = e.filters,
            a = e.selectedCategory;
          return (
            a && (t.parent = a.id),
            new Promise(function (e, a) {
              f.get("catalog/items", t)
                .then(function (t) {
                  var a = t.items,
                    n = t.pagination;
                  e({ catalogItems: a, pagination: n });
                })
                .catch(function (e) {
                  a(e);
                });
            })
          );
        };
      function U(e) {
        var t = e.items,
          a = e.pagination,
          n = e.click;
        return a && t.length
          ? c.a.createElement(
              "div",
              { className: "catalog-badge__arrows" },
              c.a.createElement(F, { variant: "left", active: !0, click: n }),
              c.a.createElement(F, { variant: "right", active: !0, click: n }),
            )
          : null;
      }
      function $(e, t) {
        if (e) {
          var a = e.images;
          if (a && Array.isArray(a) && a.length) return a[t];
        }
      }
      var J = (function (e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, c = new Array(n), l = 0; l < n; l++)
              c[l] = arguments[l];
            return (
              ((a = Object(m.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(c)),
              )).state = {
                isLoading: !0,
                selectedCategory: null,
                filters: { page: 1, limit: 10 },
                catalogItems: [],
                selectedItemIndex: 0,
              }),
              (a.onSlide = function (e) {
                var t = e.target.getAttribute("variant"),
                  n = a.state,
                  c = n.selectedItemIndex,
                  l = n.catalogItems.length;
                -1 !== c &&
                  ("left" === t && (c -= 1) < 0 && (c = l - 1),
                  "right" === t && (c += 1) > l - 1 && (c = 0),
                  a.setState({ isLoading: !0, selectedItemIndex: -1 }),
                  setTimeout(function () {
                    a.setState({ isLoading: !1, selectedItemIndex: c });
                  }, 300));
              }),
              a
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.initCategory();
                },
              },
              {
                key: "initCategory",
                value: function () {
                  var e = this,
                    t = this.props.items;
                  t &&
                    t.length &&
                    (this.setState({ selectedCategory: t[0] }),
                    setTimeout(function () {
                      e.fetchItems();
                    }, 100));
                },
              },
              {
                key: "fetchItems",
                value: function () {
                  var e = this;
                  (this.setState({ isLoading: !0 }),
                    setTimeout(function () {
                      Object(Y.a)(
                        B.a.mark(function t() {
                          var a;
                          return B.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      (t.next = 3),
                                      P(e.state)
                                    );
                                  case 3:
                                    ((a = t.sent),
                                      e.setState(
                                        Object(r.a)({}, a, { isLoading: !1 }),
                                      ),
                                      (t.next = 10));
                                    break;
                                  case 7:
                                    ((t.prev = 7),
                                      (t.t0 = t.catch(0)),
                                      console.error(t.t0));
                                  case 10:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 7]],
                          );
                        }),
                      )();
                    }, 300));
                },
              },
              {
                key: "onSelectCategory",
                value: function (e, t) {
                  var a = this;
                  e.preventDefault();
                  var n = null;
                  (t && (n = Object(r.a)({}, t)),
                    this.setState({
                      selectedCategory: n,
                      filters: { page: 1, limit: 10 },
                    }),
                    setTimeout(function () {
                      a.fetchItems();
                    }, 100));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.items,
                    a = this.state,
                    n = a.isLoading,
                    l = a.selectedCategory,
                    i = a.catalogItems,
                    r = a.selectedItemIndex,
                    s = a.pagination;
                  if (!t || !Array.isArray(t)) return null;
                  var o = i[r];
                  return c.a.createElement(
                    "div",
                    { className: "row" },
                    c.a.createElement(
                      "div",
                      { className: "col-md-7 col-lg-6" },
                      c.a.createElement(
                        "div",
                        { className: "row" },
                        c.a.createElement(
                          "div",
                          { className: "col-md-6" },
                          c.a.createElement(
                            "div",
                            { className: "catalog-badge__menu__container" },
                            c.a.createElement(
                              "ul",
                              { className: "catalog-badge__menu" },
                              t.map(function (t, a) {
                                return c.a.createElement(
                                  "li",
                                  {
                                    key: a,
                                    className:
                                      l && t.id === l.id
                                        ? "catalog-badge__menu__item--active"
                                        : null,
                                  },
                                  c.a.createElement(
                                    "a",
                                    {
                                      href: t.link,
                                      onClick: function (a) {
                                        return e.onSelectCategory(a, t);
                                      },
                                    },
                                    t.menutitle || t.title,
                                  ),
                                );
                              }),
                            ),
                            c.a.createElement(
                              A,
                              { href: BASE_PATH+"/catalog" },
                              "\u0412\u0441\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b",
                            ),
                          ),
                          c.a.createElement(Z, {
                            className: "hidden-xs",
                            info: { image: $(o, 1) },
                            loading: n,
                          }),
                          c.a.createElement(
                            "div",
                            { className: "hidden-md-up" },
                            c.a.createElement(U, {
                              items: i,
                              pagination: s,
                              click: this.onSlide,
                            }),
                            c.a.createElement(Z, { info: o, loading: n }),
                          ),
                        ),
                        c.a.createElement(
                          "div",
                          { className: "col-md-6 hidden-xs" },
                          c.a.createElement(Z, {
                            info: { image: $(o, 0) },
                            loading: n,
                          }),
                          c.a.createElement(Z, {
                            info: { image: $(o, 2) },
                            loading: n,
                          }),
                        ),
                      ),
                    ),
                    c.a.createElement(
                      "div",
                      { className: "col-md-5 col-lg-6 hidden-xs" },
                      c.a.createElement(U, {
                        items: i,
                        pagination: s,
                        click: this.onSlide,
                      }),
                      c.a.createElement(Z, { info: o, loading: n, index: "3" }),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        K = function (e) {
          var t = e.title,
            a = e.longtitle,
            n = e.categories;
          return c.a.createElement(
            "section",
            { id: "projects", className: "catalog-badge" },
            c.a.createElement(
              "div",
              { className: "catalog-badge__container container" },
              c.a.createElement("h2", { className: "section__undertitle" }, a),
              c.a.createElement("h3", { className: "section__title" }, t),
              n && c.a.createElement(J, { items: n }),
            ),
          );
        };
      function G(e, t) {
        var a = new Date(e),
          n = a.getDate(),
          c = a.getMonth();
        (Number(n) < 10 && (n = [0, n].join("")),
          Number(c) < 10 && (c = [0, c].join("")));
        var l = [
          "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",
          "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",
          "\u0412\u0442\u043e\u0440\u043d\u0438\u043a",
          "\u0421\u0440\u0435\u0434\u0430",
          "\u0427\u0435\u0442\u0432\u0435\u0440\u0433",
          "\u041f\u044f\u0442\u043d\u0438\u0446\u0430",
          "\u0421\u0443\u0431\u0431\u043e\u0442\u0430",
        ][a.getDay()];
        return t
          .replace(/W/g, l)
          .replace(/d/g, n)
          .replace(/m/g, c)
          .replace(/Y/g, a.getFullYear());
      }
      var Q = function (e) {
          var t = e.title,
            a = e.subtitle,
            n = e.link,
            l = e.image,
            i = e.items;
          return c.a.createElement(
            "section",
            { id: "charity", className: "charity-badge" },
            c.a.createElement(
              "div",
              { className: "charity-badge__container container" },
              c.a.createElement(
                "div",
                { className: "row row_end" },
                c.a.createElement(
                  "div",
                  { className: "col-md-3 col-lg-5" },
                  c.a.createElement(
                    "div",
                    { className: "charity-badge__image__container" },
                    l &&
                      c.a.createElement("div", {
                        className: "charity-badge__image img-bg",
                        style: { backgroundImage: "url('".concat(l, "')") },
                      }),
                  ),
                ),
                c.a.createElement(
                  "div",
                  { className: "col-md-9 col-lg-7" },
                  c.a.createElement(
                    "div",
                    { className: "charity-badge__info" },
                    c.a.createElement(
                      "h2",
                      { className: "section__undertitle" },
                      a,
                    ),
                    c.a.createElement("h3", { className: "section__title" }, t),
                    i &&
                      c.a.createElement(
                        "ul",
                        { className: "charity-badge__items" },
                        i.map(function (e, t) {
                          return c.a.createElement(
                            "li",
                            { key: t },
                            c.a.createElement("p", null, e.description),
                            c.a.createElement(
                              "time",
                              {
                                className: "article-date",
                                dateTime: e.publishedon,
                              },
                              G(e.publishedon, "W d.m.Y"),
                            ),
                          );
                        }),
                      ),
                    n &&
                      c.a.createElement(
                        A,
                        { href: n },
                        "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                      ),
                  ),
                ),
              ),
            ),
          );
        },
        X = function (e) {
          var t = e.title,
            a = e.subtitle,
            n = e.image,
            l = e.items;
          return c.a.createElement(
            "section",
            { id: "partners", className: "partners-badge partners-badge_v2" },
            n &&
              c.a.createElement("div", {
                className: "partners-badge__image img-bg",
                style: { backgroundImage: "url('".concat(n, "')") },
              }),
            c.a.createElement(
              "div",
              { className: "partners-badge__container container" },
              c.a.createElement(
                "div",
                { className: "row" },
                c.a.createElement(
                  "div",
                  { className: "col-md-3" },
                  c.a.createElement(
                    "h2",
                    { className: "section__undertitle" },
                    a,
                  ),
                  c.a.createElement("h3", { className: "section__title" }, t),
                ),
                c.a.createElement(
                  "div",
                  { className: "col-md-9" },
                  c.a.createElement(
                    "div",
                    {
                      className:
                        "certificates-slider__container certificates-slider__container_full",
                    },
                    c.a.createElement(
                      M.a,
                      {
                        className: "certificates",
                        arrows: !1,
                        dots: !1,
                        speed: 1e4,
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        autoplay: !0,
                        autoplaySpeed: 0,
                        cssEase: "linear",
                        responsive: [
                          {
                            breakpoint: 1023,
                            settings: { slidesToShow: 4, slidesToScroll: 4 },
                          },
                          {
                            breakpoint: 591,
                            settings: { slidesToShow: 2, slidesToScroll: 2 },
                          },
                        ],
                      },
                      l &&
                        l.map(function (e, t) {
                          return c.a.createElement(
                            "div",
                            {
                              key: t,
                              className:
                                "certificates-item certificates-item_small",
                            },
                            c.a.createElement(
                              "div",
                              { className: "certificates-item__image" },
                              e.image &&
                                c.a.createElement("img", {
                                  src: e.image,
                                  alt: e.title,
                                }),
                            ),
                          );
                        }),
                    ),
                  ),
                ),
              ),
            ),
          );
        },
        ee = (function (e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, c = new Array(n), l = 0; l < n; l++)
              c[l] = arguments[l];
            return (
              ((a = Object(m.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(c)),
              )).state = { image: null }),
              a
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.fetchState();
                },
              },
              {
                key: "fetchState",
                value: function () {
                  var e = this;
                  f.get("home").then(function (t) {
                    var a = t.title;
                    (a && (document.title = a), e.setState(Object(r.a)({}, t)));
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.longtitle,
                    a = e.description,
                    n = e.image,
                    l = e.images,
                    i = e.aboutus,
                    r = e.catalog,
                    s = e.charity,
                    o = e.partners,
                    m = { longtitle: t, description: a, image: n, images: l };
                  return c.a.createElement(
                    "div",
                    { className: "page-home" },
                    c.a.createElement(D, m),
                    c.a.createElement(R, i),
                    c.a.createElement(K, r),
                    c.a.createElement(Q, s),
                    c.a.createElement(X, o),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        te = function (e) {
          var t = e.items,
            a = [
              {
                title: "\u0413\u043b\u0430\u0432\u043d\u0430\u044f",
                link: "/",
              },
            ].concat(Object(g.a)(t));
          return c.a.createElement(
            "div",
            { className: "breadcrumbs__container container" },
            c.a.createElement(
              "ul",
              { className: "breadcrumbs" },
              a.map(function (e, t) {
                return c.a.createElement(
                  "li",
                  { key: t },
                  e.link
                    ? c.a.createElement(v.b, { to: e.link }, e.title)
                    : c.a.createElement("span", null, e.title),
                );
              }),
            ),
          );
        },
        ae = function (e) {
          var t = e.title,
            a = e.subtitle,
            n = e.content,
            l = e.image;
          return c.a.createElement(
            "section",
            { className: "aboutus-main" },
            c.a.createElement(
              "div",
              { className: "container" },
              c.a.createElement(
                "div",
                { className: "row" },
                c.a.createElement(
                  "div",
                  { className: "col-md-6" },
                  c.a.createElement(
                    "h2",
                    { className: "section__undertitle" },
                    t,
                  ),
                  c.a.createElement("h3", { className: "section__title" }, a),
                  c.a.createElement("div", {
                    className: "content hidden-xs",
                    dangerouslySetInnerHTML: { __html: n },
                  }),
                  c.a.createElement(
                    "div",
                    { className: "visible-xs" },
                    c.a.createElement(
                      q,
                      null,
                      c.a.createElement("div", {
                        className: "content",
                        dangerouslySetInnerHTML: { __html: n },
                      }),
                    ),
                  ),
                ),
                c.a.createElement(
                  "div",
                  { className: "col-md-6" },
                  c.a.createElement(
                    "div",
                    { className: "aboutus-main__img" },
                    c.a.createElement(
                      "div",
                      { className: "img-doublebox" },
                      [1, 2].map(function (e) {
                        return c.a.createElement(
                          "div",
                          { key: e },
                          c.a.createElement("span", {
                            style: {
                              backgroundImage: l && "url('".concat(l, "')"),
                            },
                          }),
                        );
                      }),
                    ),
                  ),
                ),
              ),
            ),
          );
        },
        ne = function (e) {
          var t = e.items;
          return c.a.createElement(
            "section",
            { className: "aboutus-stats__container" },
            c.a.createElement(
              "div",
              { className: "container" },
              c.a.createElement(V, { items: t }),
            ),
          );
        },
        ce = function (e) {
          var t = e.title,
            a = e.subtitle,
            n = e.items;
          return c.a.createElement(
            "section",
            { className: "facts__section" },
            c.a.createElement(
              "div",
              { className: "container" },
              c.a.createElement("h3", { className: "section__undertitle" }, a),
              c.a.createElement("h2", { className: "section__title" }, t),
              c.a.createElement(
                "ul",
                { className: "facts" },
                n.map(function (e, t) {
                  return c.a.createElement(
                    "li",
                    { key: t, className: "facts-item" },
                    c.a.createElement("div", {
                      className: "facts-item__image",
                      style: {
                        backgroundImage:
                          e.image && "url('".concat(e.image, "')"),
                      },
                    }),
                    c.a.createElement(
                      "p",
                      { className: "facts-item__description" },
                      e.description,
                    ),
                  );
                }),
              ),
            ),
          );
        },
        le = function (e) {
          var t = e.title,
            a = e.subtitle,
            n = e.description,
            l = e.image,
            i = e.items;
          return c.a.createElement(
            "section",
            { className: "certificates__section" },
            c.a.createElement(
              "div",
              { className: "container" },
              c.a.createElement(
                "div",
                { className: "row row_between" },
                c.a.createElement(
                  "div",
                  { className: "col-md-4" },
                  c.a.createElement(
                    "div",
                    { className: "certificates__info" },
                    c.a.createElement(
                      "h3",
                      { className: "section__undertitle" },
                      a,
                    ),
                    c.a.createElement("h2", { className: "section__title" }, t),
                    c.a.createElement(
                      "p",
                      { className: "section__description" },
                      n,
                    ),
                    c.a.createElement("div", {
                      className: "certificates__info__image",
                      style: { backgroundImage: l && "url('".concat(l, "')") },
                    }),
                  ),
                ),
                c.a.createElement(
                  "div",
                  { className: "col-md-8" },
                  c.a.createElement(
                    "div",
                    { className: "certificates-slider__container" },
                    c.a.createElement(
                      M.a,
                      {
                        className: "certificates",
                        arrows: !1,
                        dots: !1,
                        speed: 1e4,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        autoplay: !0,
                        autoplaySpeed: 0,
                        cssEase: "linear",
                        responsive: [
                          {
                            breakpoint: 1023,
                            settings: { slidesToShow: 2, slidesToScroll: 2 },
                          },
                          {
                            breakpoint: 591,
                            settings: { slidesToShow: 1, slidesToScroll: 1 },
                          },
                        ],
                      },
                      i.map(function (e, t) {
                        return c.a.createElement(
                          "div",
                          { key: t, className: "certificates-item" },
                          c.a.createElement("div", {
                            className: "certificates-item__image",
                            style: {
                              backgroundImage:
                                e.image && "url('".concat(e.image, "')"),
                            },
                          }),
                        );
                      }),
                    ),
                  ),
                ),
              ),
            ),
          );
        },
        ie = (function (e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.fetchState();
                },
              },
              {
                key: "fetchState",
                value: function () {
                  var e = this;
                  f.get("page/aboutus").then(function (t) {
                    var a = t.title;
                    (a && (document.title = a), e.setState(Object(r.a)({}, t)));
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state || {},
                    t = e.title,
                    a = e.subtitle,
                    n = e.content,
                    l = e.image,
                    i = e.statistics,
                    r = e.facts,
                    s = e.certificates;
                  return c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(te, { items: [{ title: t }] }),
                    c.a.createElement(ae, {
                      title: t,
                      subtitle: a,
                      content: n,
                      image: l,
                    }),
                    i && c.a.createElement(ne, { items: i }),
                    r && c.a.createElement(ce, r),
                    s && c.a.createElement(le, s),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        re = (function (e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, c = new Array(n), l = 0; l < n; l++)
              c[l] = arguments[l];
            return (
              ((a = Object(m.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(c)),
              )).state = { filters: { limit: 30 } }),
              (a.onSelectCategory = function (e, t) {
                e.preventDefault();
                var n = null;
                (t && (n = Object(r.a)({}, t)),
                  a.setState({ selectedCategory: n }),
                  setTimeout(function () {
                    a.fetchItems();
                  }, 100));
              }),
              a
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.fetchState(), this.fetchItems());
                },
              },
              {
                key: "fetchState",
                value: function () {
                  var e = this;
                  f.get("catalog").then(function (t) {
                    var a = t.title;
                    (a && (document.title = a), e.setState(Object(r.a)({}, t)));
                  });
                },
              },
              {
                key: "fetchItems",
                value: function () {
                  var e = this;
                  (this.setState({ isLoading: !0 }),
                    Object(Y.a)(
                      B.a.mark(function t() {
                        var a;
                        return B.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    (t.next = 3),
                                    P(e.state)
                                  );
                                case 3:
                                  ((a = t.sent),
                                    e.setState(Object(r.a)({}, a)),
                                    (t.next = 10));
                                  break;
                                case 7:
                                  ((t.prev = 7),
                                    (t.t0 = t.catch(0)),
                                    console.error(t.t0));
                                case 10:
                                  e.setState({ isLoading: !1 });
                                case 11:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 7]],
                        );
                      }),
                    )());
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state || {},
                    a = t.title,
                    n = t.subtitle,
                    l = t.description,
                    i = t.items,
                    r = t.catalogItems,
                    s = t.selectedCategory;
                  if (!a) return c.a.createElement("div", null);
                  var o = [
                      {
                        title:
                          "\u0412\u0441\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b",
                        description: l,
                        link: "/catalog/",
                      },
                    ].concat(Object(g.a)(i)),
                    m = s || o[0];
                  return c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(te, { items: [{ title: a }] }),
                    c.a.createElement(
                      "section",
                      { className: "catalog__section" },
                      c.a.createElement(
                        "div",
                        { className: "container" },
                        c.a.createElement(
                          "div",
                          { className: "catalog__header" },
                          c.a.createElement(
                            "h3",
                            { className: "section__undertitle" },
                            n,
                          ),
                          c.a.createElement(
                            "h2",
                            { className: "section__title" },
                            a,
                          ),
                        ),
                        c.a.createElement(
                          "div",
                          { className: "row" },
                          c.a.createElement(
                            "div",
                            { className: "col-md-4" },
                            c.a.createElement(
                              "ul",
                              { className: "catalog-menu" },
                              o.map(function (t, a) {
                                return c.a.createElement(
                                  "li",
                                  {
                                    key: a,
                                    className:
                                      m.title === t.title ? "active" : null,
                                  },
                                  c.a.createElement(
                                    "a",
                                    {
                                      href: t.link,
                                      onClick: function (a) {
                                        return e.onSelectCategory(a, t);
                                      },
                                    },
                                    t.menutitle || t.title,
                                  ),
                                );
                              }),
                            ),
                          ),
                          c.a.createElement(
                            "div",
                            { className: "col-md-8" },
                            c.a.createElement(
                              "div",
                              { className: "catalog-info" },
                              c.a.createElement(
                                "h4",
                                { className: "section__title2" },
                                m.title,
                              ),
                              c.a.createElement(
                                "p",
                                { className: "section__description" },
                                m.description,
                              ),
                            ),
                            c.a.createElement(
                              "div",
                              { className: "row" },
                              r &&
                                r.map(function (e, t) {
                                  return c.a.createElement(
                                    "div",
                                    { className: "col-sm-6", key: t },
                                    c.a.createElement(Z, { info: e }),
                                  );
                                }),
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
        })(n.Component);
      function se(e) {
        var t = e.type,
          a = e.title,
          n = e.image;
        return c.a.createElement(
          "div",
          { className: "product-images__".concat(t, "__item") },
          c.a.createElement("div", {
            className: "product-images__".concat(t, "__item__image"),
            style: { backgroundImage: n && "url('".concat(n, "')") },
            alt: a,
          }),
        );
      }
      var oe = (function (e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, c = new Array(n), l = 0; l < n; l++)
              c[l] = arguments[l];
            return (
              ((a = Object(m.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(c)),
              )).state = { main: null, switcher: null }),
              a
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.setState({
                    main: this.sliderMain,
                    switcher: this.sliderSwitcher,
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.items,
                    a = this.state,
                    n = a.main,
                    l = a.switcher;
                  if (!t || !Array.isArray(t) || !t.length) return null;
                  var i = {
                      ref: function (t) {
                        return (e.sliderMain = t);
                      },
                      className: "product-images__main",
                      asNavFor: l,
                      fade: !0,
                      dots: !1,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    },
                    r = {
                      ref: function (t) {
                        return (e.sliderSwitcher = t);
                      },
                      className: "product-images__switcher hidden-xs",
                      asNavFor: n,
                      arrows: !1,
                      dots: !1,
                      focusOnSelect: !0,
                      slidesToShow: 3,
                      slidesToScroll: 3,
                    };
                  return c.a.createElement(
                    "div",
                    { className: "product-images" },
                    c.a.createElement(
                      M.a,
                      i,
                      t.map(function (e, t) {
                        return c.a.createElement(
                          se,
                          Object.assign({ key: t }, e, { type: "main" }),
                        );
                      }),
                    ),
                    c.a.createElement(
                      M.a,
                      r,
                      t.map(function (e, t) {
                        return c.a.createElement(
                          se,
                          Object.assign({ key: t }, e, { type: "switcher" }),
                        );
                      }),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        me = (function (e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, c = new Array(n), l = 0; l < n; l++)
              c[l] = arguments[l];
            return (
              ((a = Object(m.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(c)),
              )).state = { filters: {} }),
              a
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.fetchState();
                },
              },
              {
                key: "fetchState",
                value: function () {
                  var e = this,
                    t = { alias: window.location.pathname.split("/").pop() };
                  f.get("catalog/product", t).then(function (t) {
                    var a = t.title;
                    (a && (document.title = a), e.setState(Object(r.a)({}, t)));
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state || {},
                    t = e.title,
                    a = e.subtitle,
                    n = e.build_date,
                    l = e.square,
                    i = e.location,
                    r = e.content,
                    s = e.images;
                  if (!t) return c.a.createElement("div", null);
                  var o = [
                    {
                      title:
                        "\u0413\u043e\u0434 \u043f\u043e\u0441\u0442\u0440\u043e\u0439\u043a\u0438",
                      alias: "date",
                      value: n,
                    },
                    {
                      title: "\u041f\u043b\u043e\u0449\u0430\u0434\u044c",
                      alias: "square",
                      value: l,
                    },
                    {
                      title:
                        "\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435",
                      alias: "location",
                      value: i,
                    },
                  ];
                  return c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(te, { items: [{ title: t }] }),
                    c.a.createElement(
                      "section",
                      { className: "product__section" },
                      c.a.createElement(
                        "div",
                        { className: "container" },
                        c.a.createElement(
                          "div",
                          { className: "product__header" },
                          c.a.createElement(
                            "h3",
                            { className: "section__undertitle" },
                            a,
                          ),
                          c.a.createElement(
                            "h2",
                            { className: "section__title" },
                            t,
                          ),
                        ),
                        c.a.createElement(
                          "div",
                          { className: "row" },
                          c.a.createElement(
                            "div",
                            { className: "col-lg-6" },
                            c.a.createElement(
                              "ul",
                              { className: "product-cards" },
                              o.map(function (e, t) {
                                return c.a.createElement(
                                  "li",
                                  {
                                    key: t,
                                    className: [
                                      "product-cards__item",
                                      "product-cards__item_".concat(e.alias),
                                    ].join(" "),
                                  },
                                  c.a.createElement(
                                    "h5",
                                    { className: "product-cards__item__title" },
                                    e.title,
                                  ),
                                  c.a.createElement(
                                    "p",
                                    { className: "product-cards__item__value" },
                                    e.value,
                                  ),
                                );
                              }),
                            ),
                            c.a.createElement(
                              "div",
                              { className: "product__info" },
                              c.a.createElement(
                                "h4",
                                { className: "section__title2" },
                                "\u041e \u0436\u0438\u043b\u043e\u043c \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0435",
                              ),
                              c.a.createElement("div", {
                                className: "content",
                                dangerouslySetInnerHTML: { __html: r },
                              }),
                            ),
                          ),
                          c.a.createElement(
                            "div",
                            { className: "col-lg-6" },
                            c.a.createElement(oe, { items: s }),
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
        ue = function () {
          var e = window.location.pathname.match(/\/catalog\/?([\w-]+\/?)?$/);
          return c.a.createElement(
            "div",
            null,
            e ? c.a.createElement(re, null) : c.a.createElement(me, null),
          );
        },
        de = (function (e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.fetchState();
                },
              },
              {
                key: "fetchState",
                value: function () {
                  var e = this;
                  f.get("page/charity").then(function (t) {
                    var a = t.title;
                    (a && (document.title = a), e.setState(Object(r.a)({}, t)));
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state || {},
                    t = e.title,
                    a = e.subtitle,
                    n = e.items;
                  return t
                    ? c.a.createElement(
                        "div",
                        null,
                        c.a.createElement(te, { items: [{ title: t }] }),
                        c.a.createElement(
                          "section",
                          { className: "charity-catalog__section" },
                          c.a.createElement(
                            "div",
                            { className: "container" },
                            c.a.createElement(
                              "div",
                              { className: "charity-catalog__header" },
                              c.a.createElement(
                                "h2",
                                { className: "section__undertitle" },
                                a,
                              ),
                              c.a.createElement(
                                "h1",
                                { className: "section__title" },
                                t,
                              ),
                            ),
                            c.a.createElement(
                              "ul",
                              { className: "charity-catalog__items" },
                              n.map(function (e, t) {
                                return c.a.createElement(
                                  "li",
                                  {
                                    key: t,
                                    className: "charity-catalog__items__item",
                                  },
                                  c.a.createElement(
                                    "div",
                                    { className: "row" },
                                    c.a.createElement(
                                      "div",
                                      { className: "col-md-5" },
                                      c.a.createElement(
                                        v.b,
                                        {
                                          to: e.link,
                                          style: {
                                            backgroundImage:
                                              e.image &&
                                              "url('".concat(e.image, "')"),
                                          },
                                          className:
                                            "charity-catalog__items__item__image",
                                        },
                                        c.a.createElement(
                                          "span",
                                          null,
                                          "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                                        ),
                                      ),
                                    ),
                                    c.a.createElement(
                                      "div",
                                      { className: "col-md-7" },
                                      c.a.createElement(
                                        "div",
                                        {
                                          className:
                                            "charity-catalog__items__item__info",
                                        },
                                        c.a.createElement(
                                          "h3",
                                          {
                                            className:
                                              "charity-catalog__items__item__title",
                                          },
                                          c.a.createElement(
                                            v.b,
                                            { to: e.link },
                                            e.title,
                                          ),
                                        ),
                                        c.a.createElement(
                                          "p",
                                          {
                                            className:
                                              "charity-catalog__items__item__description",
                                          },
                                          e.description,
                                        ),
                                        c.a.createElement(
                                          "time",
                                          {
                                            className: "article-date",
                                            dateTime: e.date,
                                          },
                                          G(e.date, "W d.m.Y"),
                                        ),
                                      ),
                                    ),
                                  ),
                                );
                              }),
                            ),
                          ),
                        ),
                      )
                    : c.a.createElement("div", null);
                },
              },
            ]),
            t
          );
        })(n.Component),
        ve = a(28),
        he = (function (e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.fetchState();
                },
              },
              {
                key: "fetchState",
                value: function () {
                  var e = this,
                    t = window.location.pathname.replace(BASE_PATH, "").split("/"),
                    a = { parent: t[1], alias: t.pop() };
                  f.get("article", a).then(function (t) {
                    var a = t.title;
                    (a && (document.title = a), e.setState(Object(r.a)({}, t)));
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state || {},
                    t = e.parent,
                    a = e.article_subtitle,
                    n = e.title,
                    l = e.subtitle,
                    i = e.content,
                    s = e.image;
                  if (!n) return c.a.createElement("div", null);
                  var o = [{ title: n }];
                  t && (o = [t].concat(Object(g.a)(o)));
                  var m = [
                    {
                      title: "Facebook",
                      alias: "facebook",
                      link: "https://www.facebook.com/sharer/sharer.php?u=[url]",
                    },
                    {
                      title: "VK",
                      alias: "vk",
                      link: "https://vk.com/share.php?url=[url]title=[title]&image=[image]",
                    },
                  ].map(function (e) {
                    var t = e.link,
                      a = Object(ve.a)(e, ["link"]);
                    return Object(r.a)({}, a, {
                      link: t
                        .replace("[title]", encodeURIComponent(n))
                        .replace(
                          "[url]",
                          encodeURIComponent(window.location.href),
                        )
                        .replace("[image]", encodeURIComponent(s)),
                    });
                  });
                  return c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(te, { items: o }),
                    c.a.createElement(
                      "section",
                      { className: "article__section" },
                      c.a.createElement(
                        "div",
                        { className: "container" },
                        c.a.createElement(
                          "div",
                          { className: "article__header" },
                          c.a.createElement(
                            "h2",
                            { className: "section__undertitle" },
                            a,
                          ),
                          c.a.createElement(
                            "h1",
                            { className: "section__title" },
                            n,
                          ),
                        ),
                        c.a.createElement(
                          "div",
                          { className: "row" },
                          c.a.createElement(
                            "div",
                            { className: "col-md-6" },
                            c.a.createElement(
                              "div",
                              { className: "article-info" },
                              c.a.createElement(
                                "h3",
                                { className: "section__title2" },
                                l,
                              ),
                              c.a.createElement("div", {
                                className: "content",
                                dangerouslySetInnerHTML: { __html: i },
                              }),
                            ),
                          ),
                          c.a.createElement(
                            "div",
                            { className: "col-md-6" },
                            c.a.createElement(
                              "div",
                              { className: "article-image" },
                              s && c.a.createElement("img", { src: s, alt: n }),
                            ),
                            c.a.createElement(
                              "div",
                              { className: "article-share" },
                              c.a.createElement(
                                "p",
                                { className: "article-share__title" },
                                "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043d\u043e\u0432\u043e\u0441\u0442\u044c\u044e:",
                              ),
                              c.a.createElement(
                                "ul",
                                { className: "article-share__items" },
                                m.map(function (e, t) {
                                  return c.a.createElement(
                                    "li",
                                    {
                                      key: t,
                                      className:
                                        "article-share__items__item_".concat(
                                          e.alias,
                                        ),
                                    },
                                    c.a.createElement(
                                      "a",
                                      {
                                        href: e.link,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      },
                                      e.title,
                                    ),
                                  );
                                }),
                              ),
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
        Ee = function () {
          return window.location.pathname.replace(BASE_PATH, "").match(/^\/charity\/?([\w-]+\/?)?$/)
            ? c.a.createElement(de, null)
            : c.a.createElement(he, null);
        };
      function fe(e) {
        var t = e.item;
        return c.a.createElement(
          "div",
          { className: "news-item" },
          c.a.createElement(
            v.b,
            { to: t.link, className: "news-item__image" },
            c.a.createElement("div", {
              style: {
                backgroundImage: t.image && "url('".concat(t.image, "')"),
              },
            }),
            c.a.createElement(
              "span",
              null,
              "\u041f\u0440\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
            ),
          ),
          c.a.createElement(
            "h3",
            { className: "news-item__title" },
            c.a.createElement(v.b, { to: t.link }, t.title),
          ),
          c.a.createElement(
            "time",
            { className: "news-item__date" },
            G(t.date, "W d.m.Y"),
          ),
          c.a.createElement(
            "p",
            { className: "news-item__description" },
            t.description,
          ),
        );
      }
      function pe(e) {
        var t = e.group;
        return c.a.createElement(
          "ul",
          { className: "news-items__group" },
          t.map(function (e, t) {
            return c.a.createElement(
              "li",
              { key: t },
              c.a.createElement(fe, { item: e }),
            );
          }),
        );
      }
      var _e = (function (e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.fetchState();
                },
              },
              {
                key: "fetchState",
                value: function () {
                  var e = this;
                  f.get("page/news").then(function (t) {
                    var a = t.title;
                    (a && (document.title = a), e.setState(Object(r.a)({}, t)));
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state || {},
                    t = e.title,
                    a = e.subtitle,
                    n = e.items;
                  if (!t) return c.a.createElement("div", null);
                  var l = n.reduce(
                      function (e, t, a) {
                        return (e[a % 3].push(t), e);
                      },
                      [[], [], []],
                    ),
                    i = n.reduce(
                      function (e, t, a) {
                        return (e[a % 2].push(t), e);
                      },
                      [[], []],
                    );
                  return c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(te, { items: [{ title: t }] }),
                    c.a.createElement(
                      "section",
                      { className: "news__section" },
                      c.a.createElement(
                        "div",
                        { className: "container" },
                        c.a.createElement(
                          "div",
                          { className: "news__header" },
                          c.a.createElement(
                            "h2",
                            { className: "section__undertitle" },
                            a,
                          ),
                          c.a.createElement(
                            "h1",
                            { className: "section__title" },
                            t,
                          ),
                        ),
                        c.a.createElement(
                          "div",
                          null,
                          c.a.createElement(
                            "div",
                            { className: "news-items hidden-md-down" },
                            l.map(function (e, t) {
                              return c.a.createElement(pe, {
                                key: t,
                                group: e,
                              });
                            }),
                          ),
                          c.a.createElement(
                            "div",
                            { className: "news-items hidden-xs hidden-lg-up" },
                            i.map(function (e, t) {
                              return c.a.createElement(pe, {
                                key: t,
                                group: e,
                              });
                            }),
                          ),
                          c.a.createElement(
                            "div",
                            { className: "news-items__group hidden-md-up" },
                            n.map(function (e, t) {
                              return c.a.createElement(fe, { key: t, item: e });
                            }),
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
        ge = function () {
          return window.location.pathname.replace(BASE_PATH, "").match(/^\/news\/?([\w-]+\/?)?$/)
            ? c.a.createElement(_e, null)
            : c.a.createElement(he, null);
        },
        be = a(29),
        Ne = a(26),
        ye = function (e) {
          var t = e.title,
            a = e.children,
            n = e.variant,
            l = e.close,
            i = ["dialog dialog--show"];
          return (
            n && i.push("dialog_".concat(n)),
            setTimeout(function () {
              var e = "dialog--show",
                t = document.body.querySelector(".".concat(e));
              t && t.classList.remove(e);
            }, 500),
            c.a.createElement(
              "div",
              { className: i.join(" ") },
              c.a.createElement("div", {
                className: "dialog__bg",
                onClick: function () {
                  (document.body
                    .querySelector(".dialog")
                    .classList.add("dialog--close"),
                    setTimeout(function () {
                      l();
                    }, 500));
                },
              }),
              c.a.createElement(
                "button",
                { className: "dialog__close", onClick: l },
                "\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0434\u0438\u0430\u043b\u043e\u0433",
              ),
              c.a.createElement(
                "div",
                { className: "dialog__content" },
                t &&
                  c.a.createElement(
                    "div",
                    { className: "dialog__header" },
                    c.a.createElement("h5", { className: "dialog__title" }, t),
                  ),
                c.a.createElement("div", { className: "dialog__body" }, a),
              ),
            )
          );
        },
        ke = function (e) {
          var t = e.title,
            a = e.type,
            n = e.change,
            l = e.error,
            i = Object(ve.a)(e, ["title", "type", "change", "error"]),
            s = Object(r.a)({}, i, { className: "form-control" });
          ("textarea" !== a && (s.type = a || "text"),
            "file" === a &&
              (s.onChange = function (e) {
                var t = e.target,
                  a = Object(be.a)(t.files, 1)[0],
                  c = t.parentNode,
                  l = c.querySelector("span");
                (a
                  ? ((l.textContent = a.name),
                    c.classList.add("form-file--exist"))
                  : ((l.textContent = ""),
                    c.classList.remove("form-file--exist")),
                  n && n({ name: t.name, value: a }));
              }),
            void 0 === s.onChange &&
              (s.onChange = function (e) {
                var t = e.target,
                  a = t.name,
                  c = t.value;
                n({ name: a, value: c });
              }));
          var o = ["form-group"],
            m = t;
          return (
            void 0 !== l &&
              (o.push("form-group--error"), "string" === typeof l && (m = l)),
            c.a.createElement(
              "div",
              { className: o.join(" ") },
              c.a.createElement("label", { className: "form-label" }, m),
              "textarea" === a
                ? c.a.createElement("textarea", s)
                : "file" === a
                  ? c.a.createElement(
                      "label",
                      { className: "form-file" },
                      c.a.createElement("input", s),
                      c.a.createElement("span", null),
                    )
                  : c.a.createElement("input", s),
            )
          );
        },
        we = (function (e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, c = new Array(n), l = 0; l < n; l++)
              c[l] = arguments[l];
            return (
              ((a = Object(m.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(c)),
              )).state = {
                isActive: !1,
                isSubccess: !1,
                fields: [
                  { title: "\u0418\u043c\u044f", name: "name" },
                  {
                    title: "Email",
                    name: "email",
                    type: "email",
                    required: !0,
                  },
                  {
                    title: "\u0420\u0435\u0437\u044e\u043c\u0435",
                    name: "file",
                    type: "file",
                    required: !0,
                  },
                ],
                form: {},
                errors: {},
              }),
              (a.onClose = function () {
                a.setState({ isActive: !1 });
                var e = document.body.classList,
                  t = "dialog--body";
                e.contains(t) && e.remove(t);
              }),
              (a.onChange = function (e) {
                var t = e.name,
                  n = e.value,
                  c = a.state,
                  l = c.form,
                  i = c.errors,
                  s = { form: Object(r.a)({}, l, Object(Ne.a)({}, t, n)) };
                if (void 0 !== i[t]) {
                  var o = Object(r.a)({}, i);
                  (delete o[t], (s.errors = o));
                }
                a.setState(s);
              }),
              (a.onSubmit = function (e) {
                e.preventDefault();
                var t = a.state,
                  n = t.fields,
                  c = t.form,
                  l = n.reduce(function (e, t) {
                    var a = t.name;
                    return (
                      t.required &&
                        !c[a] &&
                        (e[a] =
                          "\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),
                      e
                    );
                  }, {});
                Object.keys(l).length
                  ? a.setState({ errors: l })
                  : Object(Y.a)(
                      B.a.mark(function e() {
                        var t, n, l, i;
                        return B.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (t = new FormData()),
                                    (n = {
                                      position: a.props.info.title,
                                      url: window.location.href,
                                    }),
                                    Object.entries(
                                      Object(r.a)({}, c, n),
                                    ).forEach(function (e) {
                                      var a = Object(be.a)(e, 2),
                                        n = a[0],
                                        c = a[1];
                                      t.append(n, c);
                                    }),
                                    (e.next = 6),
                                    f.post("request/resume", t)
                                  );
                                case 6:
                                  (a.setState({ isSubccess: !0 }),
                                    (e.next = 14));
                                  break;
                                case 9:
                                  ((e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    (l = e.t0.response),
                                    (i = l.data),
                                    a.setState({ errors: i.errors || {} }));
                                case 14:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 9]],
                        );
                      }),
                    )();
              }),
              a
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  if ((e.info || {}).title) {
                    this.setState({
                      isActive: !0,
                      isSubccess: !1,
                      form: {},
                      errors: {},
                    });
                    var t = document.body.classList,
                      a = "dialog--body";
                    t.contains(a) || t.add(a);
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    a = t.isActive,
                    n = t.isSubccess,
                    l = t.fields,
                    i = t.errors;
                  if (!a) return null;
                  var r = this.props.info.title;
                  return c.a.createElement(
                    ye,
                    {
                      title:
                        "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0437\u044e\u043c\u0435",
                      close: this.onClose,
                    },
                    c.a.createElement(
                      "p",
                      { className: "dialog-description" },
                      "\u041f\u043e\u0437\u0438\u0446\u0438\u044f \xab",
                      c.a.createElement("strong", null, r),
                      "\xbb",
                    ),
                    c.a.createElement(
                      "form",
                      { onSubmit: this.onSubmit, className: n ? "hide" : null },
                      l.map(function (t, a) {
                        return c.a.createElement(
                          ke,
                          Object.assign({ key: a }, t, {
                            error: i[t.name],
                            change: e.onChange,
                          }),
                        );
                      }),
                      c.a.createElement(
                        "div",
                        { className: "form-btn" },
                        c.a.createElement(
                          A,
                          { variant: "default", click: this.onSubmit },
                          "\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",
                        ),
                      ),
                    ),
                    c.a.createElement(
                      "div",
                      { className: n ? null : " hide" },
                      c.a.createElement(
                        "div",
                        { className: "alert" },
                        "\u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u043e\u0448\u0435\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e!",
                      ),
                      c.a.createElement(
                        "div",
                        { className: "form-btn" },
                        c.a.createElement(
                          A,
                          { variant: "default", click: this.onClose },
                          "\u0437\u0430\u043a\u0440\u044b\u0442\u044c",
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
        je = (function (e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, c = new Array(n), l = 0; l < n; l++)
              c[l] = arguments[l];
            return (
              ((a = Object(m.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(c)),
              )).state = {
                clsActive: "vacancies-item--active",
                clsBody: "vacancies-item__body",
                activeItem: null,
              }),
              (a.onToggle = function (e) {
                var t = a.state,
                  n = t.clsActive,
                  c = t.clsBody,
                  l = document.body.querySelectorAll(".vacancies-item");
                Object(g.a)(l).forEach(function (e) {
                  e.classList.remove(n);
                  var t = e.querySelector(".".concat(c));
                  t && t.removeAttribute("style");
                });
                var i = l[e];
                (i && i.classList.add(n), a.setItemHeader());
              }),
              (a.onSendResume = function (e) {
                a.setState({ activeItem: e });
              }),
              (a.onCloseDialog = function () {
                a.setState({ activeItem: null });
              }),
              a
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.fetchState(), this.initResizeEvent());
                },
              },
              {
                key: "fetchState",
                value: function () {
                  var e = this;
                  f.get("page/vacancy").then(function (t) {
                    var a = t.title;
                    (a && (document.title = a),
                      e.setState(Object(r.a)({}, t)),
                      setTimeout(function () {
                        e.onToggle(0);
                      }, 100));
                  });
                },
              },
              {
                key: "initResizeEvent",
                value: function () {
                  var e = this;
                  window.vacancyResizeEventInited ||
                    ((window.vacancyResizeEventInited = !0),
                    window.addEventListener("resize", function () {
                      e.setItemHeader();
                    }));
                },
              },
              {
                key: "setItemHeader",
                value: function () {
                  var e = this.state || {},
                    t = e.clsActive,
                    a = e.clsBody;
                  if (t && a) {
                    var n = document.body.querySelector(".".concat(t)),
                      c = n && n.querySelector(".".concat(a));
                    n &&
                      c &&
                      (c.removeAttribute("style"),
                      (c.style.height = [
                        n.querySelector(".vacancies-item__body__inner")
                          .clientHeight,
                        "px",
                      ].join("")));
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state || {},
                    a = t.title,
                    n = t.subtitle,
                    l = t.email,
                    i = t.content,
                    r = t.image,
                    s = t.items,
                    o = t.activeItem;
                  return a
                    ? c.a.createElement(
                        "div",
                        null,
                        c.a.createElement(te, { items: [{ title: a }] }),
                        c.a.createElement(
                          "section",
                          { className: "main__header" },
                          c.a.createElement(
                            "div",
                            { className: "container" },
                            c.a.createElement(
                              "h2",
                              { className: "section__undertitle" },
                              n,
                            ),
                            c.a.createElement(
                              "h1",
                              { className: "section__title" },
                              a,
                            ),
                          ),
                        ),
                        c.a.createElement(
                          "section",
                          { className: "vacancy-section" },
                          c.a.createElement(
                            "div",
                            { className: "container" },
                            c.a.createElement(
                              "div",
                              { className: "row" },
                              c.a.createElement(
                                "div",
                                { className: "col-md-5" },
                                r &&
                                  c.a.createElement(
                                    "div",
                                    { className: "vacancy-image" },
                                    c.a.createElement("img", {
                                      src: r,
                                      alt: a,
                                    }),
                                  ),
                                c.a.createElement("div", {
                                  className: "vacancy-content",
                                  dangerouslySetInnerHTML: { __html: i },
                                }),
                                l &&
                                  c.a.createElement(L, {
                                    className: "vacancy-email",
                                    link: l,
                                  }),
                              ),
                              c.a.createElement(
                                "div",
                                { className: "col-md-7" },
                                c.a.createElement(
                                  "ul",
                                  { className: "vacancies" },
                                  s.map(function (t, a) {
                                    return c.a.createElement(
                                      "li",
                                      { key: a, className: "vacancies-item" },
                                      c.a.createElement(
                                        "h3",
                                        {
                                          className: "vacancies-item__header",
                                          onClick: function () {
                                            return e.onToggle(a);
                                          },
                                        },
                                        t.title,
                                      ),
                                      c.a.createElement(
                                        "div",
                                        { className: "vacancies-item__body" },
                                        c.a.createElement(
                                          "div",
                                          {
                                            className:
                                              "vacancies-item__body__inner",
                                          },
                                          c.a.createElement(
                                            "ul",
                                            null,
                                            c.a.createElement(
                                              "li",
                                              null,
                                              c.a.createElement(
                                                "h4",
                                                null,
                                                "\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u0443",
                                              ),
                                              c.a.createElement("p", {
                                                dangerouslySetInnerHTML: {
                                                  __html: t.requiments,
                                                },
                                              }),
                                            ),
                                            c.a.createElement(
                                              "li",
                                              null,
                                              c.a.createElement(
                                                "h4",
                                                null,
                                                "\u0423\u0441\u043b\u043e\u0432\u0438\u044f",
                                              ),
                                              c.a.createElement("p", {
                                                dangerouslySetInnerHTML: {
                                                  __html: t.conditions,
                                                },
                                              }),
                                            ),
                                          ),
                                          c.a.createElement(
                                            "div",
                                            {
                                              className: "vacancies-item__btn",
                                            },
                                            c.a.createElement(
                                              A,
                                              {
                                                medium: !0,
                                                click: function () {
                                                  return e.onSendResume(t);
                                                },
                                              },
                                              "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0437\u044e\u043c\u0435",
                                            ),
                                          ),
                                        ),
                                      ),
                                    );
                                  }),
                                ),
                              ),
                            ),
                          ),
                        ),
                        c.a.createElement(we, {
                          info: o,
                          close: this.onCloseDialog,
                        }),
                      )
                    : null;
                },
              },
            ]),
            t
          );
        })(n.Component),
        Oe = (function (e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.fetchState();
                },
              },
              {
                key: "fetchState",
                value: function () {
                  var e = this;
                  f.get("page/contacts").then(function (t) {
                    var a = t.title;
                    (a && (document.title = a), e.setState(Object(r.a)({}, t)));
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state || {},
                    t = e.title,
                    a = e.subtitle,
                    n = e.description,
                    l = e.map,
                    i = e.mapLink,
                    r = e.address,
                    s = e.email,
                    o = e.phones,
                    m = e.worktimes;
                  return t
                    ? c.a.createElement(
                        "div",
                        { className: "contacts-page" },
                        c.a.createElement(te, { items: [{ title: t }] }),
                        c.a.createElement(
                          "section",
                          { className: "contacts-section" },
                          c.a.createElement(
                            "div",
                            { className: "container" },
                            c.a.createElement(
                              "div",
                              { className: "contacts-header" },
                              c.a.createElement(
                                "h2",
                                { className: "section__undertitle" },
                                a,
                              ),
                              c.a.createElement(
                                "h1",
                                { className: "section__title" },
                                t,
                              ),
                            ),
                          ),
                          c.a.createElement(
                            "div",
                            { className: "contacts" },
                            c.a.createElement("iframe", {
                              src: l,
                              title: "Contacts map",
                            }),
                            c.a.createElement(
                              "div",
                              { className: "contacts__container container" },
                              c.a.createElement(
                                "div",
                                { className: "contacts-info" },
                                c.a.createElement(
                                  "h3",
                                  { className: "contacts-info__title" },
                                  n,
                                ),
                                c.a.createElement(
                                  "div",
                                  { className: "contacts-info__group" },
                                  c.a.createElement(
                                    "h4",
                                    {
                                      className: "contacts-info__group__title",
                                    },
                                    "\u0410\u0434\u0440\u0435\u0441 \u043e\u0444\u0438\u0441\u0430:",
                                  ),
                                  c.a.createElement("p", {
                                    className: "contacts-info__group__value",
                                    dangerouslySetInnerHTML: {
                                      __html: i
                                        ? '<a href="'
                                            .concat(
                                              i,
                                              '" target="_blank" rel="noopener noreferrer">',
                                            )
                                            .concat(r, "</a>")
                                        : r,
                                    },
                                  }),
                                ),
                                c.a.createElement(
                                  "div",
                                  { className: "contacts-info__group" },
                                  c.a.createElement(
                                    "h4",
                                    {
                                      className: "contacts-info__group__title",
                                    },
                                    "E-mail:",
                                  ),
                                  c.a.createElement("p", {
                                    className: "contacts-info__group__value",
                                    dangerouslySetInnerHTML: {
                                      __html: '<a href="mailto:'
                                        .concat(s, '">')
                                        .concat(s, "</a>"),
                                    },
                                  }),
                                ),
                                c.a.createElement(
                                  "div",
                                  { className: "contacts-info__group" },
                                  c.a.createElement(
                                    "h4",
                                    {
                                      className: "contacts-info__group__title",
                                    },
                                    "\u0422\u0435\u043b\u0435\u0444\u043e\u043d:",
                                  ),
                                  c.a.createElement("p", {
                                    className: "contacts-info__group__value",
                                    dangerouslySetInnerHTML: {
                                      __html:
                                        o &&
                                        o
                                          .map(function (e) {
                                            return '<a href="tel:'
                                              .concat(
                                                e
                                                  .replace(/\D/g, "")
                                                  .replace(/^[87]?/, "+7"),
                                                '">',
                                              )
                                              .concat(e, "</a>");
                                          })
                                          .join("\n"),
                                    },
                                  }),
                                ),
                                c.a.createElement(
                                  "div",
                                  { className: "contacts-info__group" },
                                  c.a.createElement(
                                    "h4",
                                    {
                                      className: "contacts-info__group__title",
                                    },
                                    "\u0413\u0440\u0430\u0444\u0438\u043a \u0440\u0430\u0431\u043e\u0442\u044b:",
                                  ),
                                  c.a.createElement(
                                    "p",
                                    {
                                      className: "contacts-info__group__value",
                                    },
                                    m,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      )
                    : c.a.createElement("div", null);
                },
              },
            ]),
            t
          );
        })(n.Component),
        Se = (function (e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function () {
                  return c.a.createElement(
                    "main",
                    null,
                    c.a.createElement(w.a, {
                      exact: !0,
                      path: BASE_PATH + "/",
                      component: ee,
                    }),
                    c.a.createElement(w.a, {
                      path: BASE_PATH + "/aboutus.html",
                      component: ie,
                    }),
                    c.a.createElement(w.a, { path: BASE_PATH + "/catalog", component: ue }),
                    c.a.createElement(w.a, { path: BASE_PATH + "/charity", component: Ee }),
                    c.a.createElement(w.a, { path: BASE_PATH + "/news", component: ge }),
                    c.a.createElement(w.a, {
                      path: BASE_PATH + "/vacancy.html",
                      component: je,
                    }),
                    c.a.createElement(w.a, {
                      path: BASE_PATH + "/contacts.html",
                      component: Oe,
                    }),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        Ce =
          (a(108),
          (function (e) {
            function t() {
              var e, a;
              Object(s.a)(this, t);
              for (
                var n = arguments.length, c = new Array(n), l = 0;
                l < n;
                l++
              )
                c[l] = arguments[l];
              return (
                ((a = Object(m.a)(
                  this,
                  (e = Object(u.a)(t)).call.apply(e, [this].concat(c)),
                )).state = { isLoading: !0 }),
                a
              );
            }
            return (
              Object(d.a)(t, e),
              Object(o.a)(t, [
                {
                  key: "componentWillMount",
                  value: function () {
                    document.title = "Sheber";
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    (this.getData(), this.iniHistoryListener());
                  },
                },
                {
                  key: "getData",
                  value: function () {
                    var e = this;
                    const fGet = f.get;
                    f.get = (url) => fGet(BASE_PATH + "/json/" + url + ".json");
                    f.get("main")
                      .then(function (t) {
                        e.setState(Object(r.a)({ isLoading: !1 }, t));
                      })
                      .catch(function (e) {
                        console.error(e);
                      });
                  },
                },
                { key: "iniHistoryListener", value: function () {} },
                {
                  key: "render",
                  value: function () {
                    var e = this.state,
                      t = e.isLoading,
                      a = e.contacts,
                      n = e.menu,
                      l = e.copyright;
                    return t
                      ? c.a.createElement(_, null)
                      : c.a.createElement(
                          v.a,
                          null,
                          c.a.createElement(I, { contacts: a, menu: n }),
                          c.a.createElement(Se, null),
                          c.a.createElement(x, {
                            contacts: a,
                            menu: n,
                            copyright: l,
                          }),
                        );
                  },
                },
              ]),
              t
            );
          })(n.Component));
      Boolean(
        "localhost" === window.location.hostname ||
        "[::1]" === window.location.hostname ||
        window.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
        ),
      );
      (i.a.render(c.a.createElement(Ce, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          }));
    },
    51: function (e, t, a) {
      e.exports = a(109);
    },
    56: function (e, t, a) {},
    76: function (e, t, a) {},
  },
  [[51, 1, 2]],
]);
