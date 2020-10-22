var WorkerThread = function (e) {
  function t(e) {
    return !!e && x.get(e) || null;
  }
  function s(e) {
    return C.has(e) ? C.get(e) : (C.set(e, N), y.push(e), N++);
  }
  function i() {
    let e = y;
    return y = [], e;
  }
  function r(e, t) {
    0 < v && e[58] && (L = !0,
      O = O.concat(t),
      Promise.resolve().then(
        ((t) => {
          if (L) {
            t = new Uint16Array(
              function () {
                let e = E;
                return E = [], e;
              }().reduce(((e, t) => e.concat(t[8])), []),
            ).buffer;
            let s = new Uint16Array(O).buffer;
            e.postMessage(
              { 54: v, 12: 2 === v ? 3 : 2, 37: t, 41: i(), 36: s },
              [t, s],
            ),
              O = [],
              L = !1,
              v = 2;
          }
        }),
      ));
  }
  function n(e, t, s) {
    r(e, s),
      D.forEach(
        ((e) => {
          for (let i = t.target; i; i = i.parentNode) {
            var s = e.target;
            if (s && s[7] === i[7]) {
              I(e, t);
              break;
            }
          }
        }),
      );
  }
  function a(e, t) {
    var s = [t.indexOf("["), t.indexOf("]")];
    let i = -1 !== s[0] && -1 !== s[1],
      r = i ? t.substring(0, s[0]) : t,
      n = i ? t.substring(s[0], s[1] + 1) : null;
    return s = "[" === t[0]
      ? (e) => b(t, e)
      : "#" === r[0]
      ? i ? (e) => e.id === r.substr(1) && b(n, e) : (e) => e.id === r.substr(1)
      : "." === r[0]
      ? i
        ? (e) => e.classList.contains(r.substr(1)) && b(n, e)
        : (e) => e.classList.contains(r.substr(1))
      : i
      ? (e) => e.localName === r.toLowerCase() && b(n, e)
      : (e) => e.localName === r.toLowerCase(),
      p(e[45], s).filter(((t) => e !== t && e.contains(t)));
  }
  function l(e, t, s) {
    Object.defineProperty(
      e.prototype,
      s,
      {
        enumerable: !0,
        configurable: !0,
        get() {
          return this[t].value;
        },
        set(e) {
          this[t].value = e;
        },
      },
    );
  }
  function h(e) {
    return e.replace(
      /&(?:(#x?[\da-f]+)|([\w]+));?/gi,
      (function (e, t, s) {
        return t
          ? (t = "x" === t.charAt(1).toLowerCase()
            ? parseInt(t.substr(2), 16)
            : parseInt(t.substr(1), 10),
            isNaN(t) || 1114111 < t ? e : String.fromCodePoint(t) || e)
          : s && X[s.toLowerCase()] || e;
      }),
    );
  }
  function o(e, t) {
    let s = Object.create(e[46]);
    e[46] = Object.assign(s, t);
  }
  function u(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
      var i = e[n];
      if ("number" == typeof i) {
        var r = i;
        ge[0] = r,
          ge[0] === r ? t.push(1, i) : (ce[0] = i, t.push(2, ge[0], ge[1]));
      } else if ("string" == typeof i) t.push(3, s(i));
      else if (Array.isArray(i)) {
        for (t.push(4, i.length), r = u(i), i = 0; i < r.length; i++) {
          t.push(r[i]);
        }
      } else {
        if ("object" != typeof i) throw Error("Cannot serialize argument.");
        for (r = i[68](), i = 0; i < r.length; i++) t.push(r[i]);
      }
    }
    return t;
  }
  function d(e, t) {
    let s = be++, i = t.ownerDocument;
    return new Promise(
      ((n) => {
        let a = ({ data: e }) => {
          10 === e[12] && e[73] === s &&
            (i.removeGlobalEventListener("message", a), n(e[38]));
        };
        if (!i.addGlobalEventListener) {throw Error(
            "addGlobalEventListener is not defined.",
          );}
        i.addGlobalEventListener("message", a),
          r(t.ownerDocument, [11, e[7], s]);
      }),
    );
  }
  function c(e, t, i) {
    i = Object.assign(Object.create(null), i);
    let n = Object.defineProperty;
    return n(i, "length", {
      get() {
        return Object.keys(this).length;
      },
    }),
      n(i, "key", {
        value(e) {
          let t = Object.keys(this);
          return 0 <= e && e < t.length ? t[e] : null;
        },
      }),
      n(i, "getItem", {
        value(e) {
          return (e = this[e]) ? e : null;
        },
      }),
      n(i, "setItem", {
        value(i, n) {
          n = String(n), this[i] = n, r(e, [12, 2, t, s(i), s(n)]);
        },
      }),
      n(i, "removeItem", {
        value(i) {
          delete this[i], r(e, [12, 2, t, s(i), 0]);
        },
      }),
      n(i, "clear", {
        value() {
          Object.keys(this).forEach(
            ((e) => {
              delete this[e];
            }),
          ), r(e, [12, 2, t, 0, 0]);
        },
      }),
      i;
  }
  let g = (e) => (t) => e.includes(t.tagName),
    m = (e) => 1 === e.nodeType,
    p = (e, t) => {
      const s = [];
      return e.childNodes.forEach(
        ((e) => {
          1 === e.nodeType && (t(e) && s.push(e), s.push(...p(e, t)));
        }),
      ),
        s;
    },
    f = (e, t) => {
      let s = null;
      return e.children.some(
        ((e) => (t(e) || null !== (e = f(e, t))) && (s = e, !0)),
      ),
        s;
    },
    w = (e, t) => {
      for (; e = e.parentNode;) if (t(e)) return e;
      return null;
    },
    b = (e, t) => {
      if (!e) return !1;
      const s = e.indexOf("=");
      var i = e.length, r = "i" === e.charAt(i - 2);
      const n = r ? i - 3 : i - 1;
      if (-1 !== s) {
        i = e.charAt(s - 1);
        const a = ["~", "|", "$", "^", "*"].includes(i) ? e.substring(1, s - 1)
        : e.substring(1, s);
        if (e = e.substring(s + 1, n), t = t.getAttribute(a)) {
          switch (e = r ? e.toLowerCase() : e, r = r ? t.toLowerCase() : t, i) {
            case "~":
              return -1 !== r.split(" ").indexOf(e);
            case "|":
              return r === e || r === e + "-";
            case "^":
              return r.startsWith(e);
            case "$":
              return r.endsWith(e);
            case "*":
              return -1 !== r.indexOf(e);
            default:
              return r === e;
          }
        }
        return !1;
      }
      return t.hasAttribute(e.substring(1, n));
    },
    v = 0,
    T = 0,
    E = [],
    x = new Map(),
    N = 0,
    y = [],
    C = new Map(),
    L = !1,
    O = [],
    D = [],
    S = !1,
    I = (e, t) => {
      e.pushRecord(t),
        S || (S = !0,
          Promise.resolve().then(
            (() => {
              S = !1, D.forEach(((e) => e.callback(e.takeRecords())));
            }),
          ));
    };
  var A = 42;
  let P = (e, t, s) => {
    e[t] = s, e.childNodes.forEach(((e) => P(e, t, s)));
  };
  class R {
    constructor(e, t, s, i) {
      this.childNodes = [],
        this.parentNode = null,
        this.isConnected = !1,
        this[10] = {},
        this.nodeType = e,
        this.nodeName = t,
        this.ownerDocument = s || this,
        this[45] = this,
        i
          ? (0 === v && (x.set(this[7] = i, this), T = Math.max(T, i)), e = i)
          : void 0 !== this[7]
          ? e = this[7]
          : (x.set(this[7] = ++T, this), 0 < v && E.push(this), e = T),
        this[7] = e,
        this[9] = [this[7]];
    }
    get textContent() {
      return this.getTextContent();
    }
    getTextContent() {
      let e = "", t = this.childNodes;
      return t.length ? (t.forEach(((t) => e += t.textContent)), e) : "";
    }
    get firstChild() {
      return this.childNodes[0] || null;
    }
    get lastChild() {
      return this.childNodes[this.childNodes.length - 1] || null;
    }
    get nextSibling() {
      if (null === this.parentNode) return null;
      let e = this.parentNode.childNodes;
      return e[e.indexOf(this) + 1] || null;
    }
    get previousSibling() {
      if (null === this.parentNode) return null;
      let e = this.parentNode.childNodes;
      return e[e.indexOf(this) - 1] || null;
    }
    hasChildNodes() {
      return 0 < this.childNodes.length;
    }
    contains(e) {
      return e === this ||
        0 < this.childNodes.length &&
          (!!this.childNodes.includes(this) || this.childNodes.some(
            ((t) => t.contains(e)),
          ));
    }
    insertBefore(e, t) {
      if (null === e || e === this) return e;
      if (11 === e.nodeType) {
        e.childNodes.slice().forEach(((e) => this.insertBefore(e, t)));
      } else {
        if (null == t) return this.appendChild(e);
        if (0 <= this.childNodes.indexOf(t)) {
          return e.remove(),
            this.childNodes.splice(this.childNodes.indexOf(t), 0, e),
            this[56](e),
            n(
              this.ownerDocument,
              { addedNodes: [e], nextSibling: t, type: 2, target: this },
              [2, this[7], t[7], 0, 1, 0, e[7]],
            ),
            e;
        }
      }
      return null;
    }
    56(e) {
      e.parentNode = this,
        P(e, "isConnected", this.isConnected),
        P(e, 45, this[45]);
    }
    57(e) {
      e.parentNode = null, P(e, "isConnected", !1), P(e, 45, e);
    }
    appendChild(e) {
      if (11 === e.nodeType) {
        e.childNodes.slice().forEach(this.appendChild, this);
      } else {
        e.remove(), this.childNodes.push(e), this[56](e);
        let t = this.childNodes[this.childNodes.length - 2];
        n(
          this.ownerDocument,
          { addedNodes: [e], previousSibling: t, type: 2, target: this },
          [2, this[7], 0, t ? t[7] : 0, 1, 0, e[7]],
        );
      }
      return e;
    }
    removeChild(e) {
      let t = this.childNodes.indexOf(e);
      return 0 <= t
        ? (this.childNodes.splice(t, 1),
          this[57](e),
          n(
            this.ownerDocument,
            { removedNodes: [e], type: 2, target: this },
            [2, this[7], 0, 0, 0, 1, e[7]],
          ),
          e)
        : null;
    }
    replaceChild(e, t) {
      if (e === t || t.parentNode !== this || e.contains(this)) return t;
      e.remove();
      let s = this.childNodes.indexOf(t);
      return this.childNodes.splice(s, 1, e),
        this[57](t),
        this[56](e),
        n(
          this.ownerDocument,
          {
            addedNodes: [e],
            removedNodes: [t],
            type: 2,
            nextSibling: this.childNodes[s + 1],
            target: this,
          },
          [
            2,
            this[7],
            this.childNodes[s + 1] ? this.childNodes[s + 1][7] : 0,
            0,
            1,
            1,
            e[7],
            t[7],
          ],
        ),
        t;
    }
    remove() {
      this.parentNode && this.parentNode.removeChild(this);
    }
    addEventListener(e, t, i = {}) {
      let n = s(e = e.toLowerCase()), a = this[10][e], l = 0;
      a ? l = a.push(t) : this[10][e] = [t],
        r(
          this.ownerDocument,
          [
            4,
            this[7],
            0,
            1,
            n,
            l,
            Number(!!i.capture),
            Number(!!i.once),
            Number(!!i.passive),
            Number(!!i.workerDOMPreventDefault),
          ],
        );
    }
    removeEventListener(e, t) {
      e = e.toLowerCase();
      let i = this[10][e];
      0 <= (t = i ? i.indexOf(t) : -1) &&
        (i.splice(t, 1), r(this.ownerDocument, [4, this[7], 1, 0, s(e), t]));
    }
    dispatchEvent(e) {
      let t, s, i = e.currentTarget = this;
      do {
        if (t = i && i[10] && i[10][e.type.toLowerCase()]) {
          for (
            s = t.length;
            s-- && (!1 !== t[s].call(i, e) && !e[51] || !e.cancelable);
          );
        }
      } while (
        e.bubbles && (!e.cancelable || !e[50]) && (i = i && i.parentNode)
      );
      return !e.defaultPrevented;
    }
  }
  class M extends R {
    get children() {
      return this.childNodes.filter(m);
    }
    get childElementCount() {
      return this.children.length;
    }
    get firstElementChild() {
      return this.childNodes.find(m) || null;
    }
    get lastElementChild() {
      let e = this.children;
      return e[e.length - 1] || null;
    }
    querySelector(e) {
      return (e = a(this, e)) ? e[0] : null;
    }
    querySelectorAll(e) {
      return a(this, e);
    }
  }
  let F = /\s/;
  class H {
    constructor(e, t) {
      this[43] = [], this[13] = e, this[18] = t, this[44] = e[44].bind(e);
    }
    get value() {
      return this[43].join(" ");
    }
    get length() {
      return this[43].length;
    }
    set value(e) {
      let t = this.value;
      e = e.trim(),
        this[43].splice(0, this[43].length, ..."" !== e ? e.split(/\s+/) : ""),
        this[67](t, e);
    }
    item(e) {
      return this[43][e];
    }
    contains(e) {
      return this[43].includes(e);
    }
    add(...e) {
      let t = this.value;
      this[43].splice(0, this[43].length, ...new Set(this[43].concat(e))),
        this[67](t, this.value);
    }
    remove(...e) {
      let t = this.value;
      this[43].splice(
        0,
        this[43].length,
        ...new Set(this[43].filter(((t) => !e.includes(t)))),
      ), this[67](t, this.value);
    }
    replace(e, t) {
      if (this[43].includes(e)) {
        var s = this.value, i = new Set(this[43]);
        e !== t && (i.delete(e), "" !== t && i.add(t)),
          this[43].splice(0, this[43].length, ...i),
          this[67](s, this.value);
      }
    }
    toggle(e, t) {
      if (F.test(e)) throw new TypeError("Uncaught DOMException");
      if (this[43].includes(e)) if (!t) return this.remove(e), !1;
      else (void 0 === t || t) && this.add(e);
      return !0;
    }
    67(e, t) {
      this[44](this[13].namespaceURI, this[18], t),
        n(
          this[13].ownerDocument,
          {
            type: 0,
            target: this[13],
            attributeName: this[18],
            value: t,
            oldValue: e,
          },
          [0, this[13][7], s(this[18]), 0, null !== t ? s(t) + 1 : 0],
        );
    }
  }
  let k = (e) => e.map(((e) => `${e.name}="${e.value}"`)).join(" "),
    G = (e, t) => (s) => s.namespaceURI === e && s.name === t,
    B = (e) => {
      if (
        !(0 >=
          (e = e.filter(((e) => isNaN(e) && !U.prototype.hasOwnProperty(e))))
            .length)
      ) {
        var t = U.prototype.length || 0;
        0 !== t
          ? U.prototype.length = t + e.length
          : Object.defineProperty(
            U.prototype,
            "length",
            { configurable: !0, writable: !0, value: e.length },
          ),
          e.forEach(
            ((e, s) => {
              const i = e.replace(/(webkit|ms|moz|khtml)/g, "-$1").replace(
                /([a-zA-Z])(?=[A-Z])/g,
                "$1-",
              ).toLowerCase();
              U.prototype[s + t] = i,
                Object.defineProperties(U.prototype, {
                  [e]: {
                    get() {
                      return this.getPropertyValue(i);
                    },
                    set(e) {
                      this.setProperty(i, e);
                    },
                  },
                });
            }),
          );
      }
    };
  class U {
    constructor(e) {
      this[V] = {}, this[44] = e[44].bind(e), this[13] = e;
    }
    getPropertyValue(e) {
      return this[3][e] || "";
    }
    removeProperty(e) {
      let t = this.getPropertyValue(e);
      return this[3][e] = null, this.mutated(this.cssText), t;
    }
    setProperty(e, t) {
      this[3][e] = t, this.mutated(this.cssText);
    }
    get cssText() {
      let e, t = "";
      for (let s in this[3]) {
        "" !== (e = this.getPropertyValue(s)) && (t += `${s}: ${e}; `);
      }
      return t.trim();
    }
    set cssText(e) {
      this[3] = {};
      let t = (e = ("string" == typeof e ? e : "").split(/[:;]/)).length;
      for (let s = 0; s + 1 < t; s += 2) {
        this[3][e[s].trim().toLowerCase()] = e[s + 1].trim();
      }
      this.mutated(this.cssText);
    }
    mutated(e) {
      let t = this[44](this[13].namespaceURI, "style", e);
      n(
        this[13].ownerDocument,
        {
          type: 0,
          target: this[13],
          attributeName: "style",
          value: e,
          oldValue: t,
        },
        [0, this[13][7], s("style"), 0, null !== e ? s(e) + 1 : 0],
      );
    }
  }
  var V = 3;
  let j = (e, t) => {
      e.forEach(
        ((e) => {
          for (const s in e) {
            const { 0: i, 1: r = s.toLowerCase(), 2: n } = e[s],
              a = "boolean" == typeof i;
            Object.defineProperty(t.prototype, s, {
              enumerable: !0,
              get() {
                var e = this.getAttribute(r);
                return n ? this.hasAttribute(r) ? e === n[0] : i : a
                  ? this.hasAttribute(r)
                  : (e = e || i, "number" == typeof i ? Number(e) : String(e));
              },
              set(e) {
                n
                  ? this.setAttribute(r, e ? n[0] : n[1])
                  : a
                  ? e ? this.setAttribute(r, "") : this.removeAttribute(r)
                  : this.setAttribute(r, String(e));
              },
            });
          }
        }),
      );
    },
    q = /\x3c!--([^]*)--\x3e|<(\/?)([a-z][-.0-9_a-z]*)([^>]*?)(\/?)>/gi,
    $ = /(^|\s)([^\s"'>\/=]+)\s*=\s*("([^"]+)"|'([^']+)'|(\S+))/gi,
    Y = {
      AREA: !0,
      BASE: !0,
      BR: !0,
      COL: !0,
      HR: !0,
      IMG: !0,
      INPUT: !0,
      LINK: !0,
      META: !0,
      PARAM: !0,
      SOURCE: !0,
      TRACK: !0,
      WBR: !0,
    },
    z = {
      LI: { LI: !0 },
      DT: { DT: !0, DD: !0 },
      DD: { DD: !0, DT: !0 },
      P: {
        ADDRESS: !0,
        ARTICLE: !0,
        ASIDE: !0,
        BLOCKQUOTE: !0,
        DETAILS: !0,
        DIV: !0,
        DL: !0,
        FIELDSET: !0,
        FIGCAPTION: !0,
        FIGURE: !0,
        FOOTER: !0,
        FORM: !0,
        H1: !0,
        H2: !0,
        H3: !0,
        H4: !0,
        H5: !0,
        H6: !0,
        HEADER: !0,
        HR: !0,
        MAIN: !0,
        NAV: !0,
        OL: !0,
        P: !0,
        PRE: !0,
        SECTION: !0,
        TABLE: !0,
        UL: !0,
      },
      RT: { RT: !0, RP: !0 },
      RP: { RT: !0, RP: !0 },
      OPTGROUP: { OPTGROUP: !0 },
      OPTION: { OPTION: !0, OPTGROUP: !0 },
      THEAD: { TBODY: !0, TFOOT: !0 },
      TBODY: { TBODY: !0, TFOOT: !0 },
      TR: { TR: !0 },
      TD: { TD: !0, TH: !0 },
      TH: { TD: !0, TH: !0 },
    },
    _ = {
      LI: { UL: !0, OL: !0 },
      A: { DIV: !0 },
      B: { DIV: !0 },
      I: { DIV: !0 },
      P: { DIV: !0 },
      TD: { TR: !0, TABLE: !0 },
      TH: { TR: !0, TABLE: !0 },
    },
    W = { SCRIPT: !0, NOSCRIPT: !0, STYLE: !0, PRE: !0 },
    X = { __proto__: null, amp: "&", lt: "<", gt: ">", quot: '"' };
  class Q {
    constructor(e, t) {
      this[J] = !1,
        this[K] = !1,
        this.type = e,
        this.bubbles = !!t.bubbles,
        this.cancelable = !!t.cancelable;
    }
    stopPropagation() {
      this[50] = !0;
    }
    stopImmediatePropagation() {
      this[51] = this[50] = !0;
    }
    preventDefault() {
      this.defaultPrevented = !0;
    }
    initEvent(e, t, s) {
      this.type = e, this.bubbles = t, this.cancelable = s;
    }
  }
  var J = 50, K = 51;
  let Z = (e, s) => null !== s[13] ? t(0 !== (s = s[13][0]) ? s : e[7]) : null,
    ee = (e, s, i) => {
      if (void 0 !== s[i]) {
        const r = Object.keys(s[i]),
          n = {
            length: r.length,
            item(e) {
              return this[e] || null;
            },
          };
        return r.forEach(
          ((r) => {
            r = Number(r);
            const a = s[i][r];
            n[r] = {
              identifier: a[0],
              screenX: a[1],
              screenY: a[2],
              clientX: a[3],
              clientY: a[4],
              pageX: a[5],
              pageY: a[6],
              target: t(0 !== a[7] ? a[7] : e[7]),
            };
          }),
        ),
          n;
      }
    },
    te = {},
    se = (e, t, s = "http://www.w3.org/1999/xhtml") => te[`${s}:${e}`] = t;
  var ie, re;
  (re = ie || (ie = {}))[re.NORMAL = 0] = "NORMAL", re[re.VOID = 1] = "VOID";
  let ne =
    "AREA BASE BR COL EMBED HR IMG INPUT LINK META PARAM SOURCE TRACK WBR"
      .split(" ");
  class ae extends M {
    constructor(e, t, i, r, n) {
      super(e, t.toUpperCase(), r, n),
        this.attributes = [],
        this.style = new U(this),
        this.namespaceURI = i || "http://www.w3.org/1999/xhtml",
        this.localName = t,
        this.kind = ne.includes(this.tagName) ? ie.VOID : ie.NORMAL,
        this[8] = [
          this[7],
          this.nodeType,
          s(this.localName),
          0,
          null === this.namespaceURI ? 0 : s(this.namespaceURI),
        ];
    }
    get outerHTML() {
      let e = this.localName || this.tagName,
        t = `<${[e, k(this.attributes)].join(" ").trim()}>`,
        s = this.innerHTML;
      return s || this.kind !== ie.VOID ? t + s + `</${e}>` : t;
    }
    get innerHTML() {
      let e = this.childNodes;
      return e.length
        ? e.map(
          ((e) => {
            switch (e.nodeType) {
              case 3:
                return e.textContent;
              case 8:
                return `\x3c!--${e.textContent}--\x3e`;
              default:
                return e.outerHTML;
            }
          }),
        ).join("")
        : "";
    }
    set innerHTML(e) {
      e = function (e, t) {
        let s = t.ownerDocument,
          i = t = s.createElementNS(t.namespaceURI, t.localName),
          r = t.namespaceURI,
          n = [t];
        var a, l = 0;
        e = "<q>" + e + "</q>";
        let o = [];
        if (
          "http://www.w3.org/2000/svg" !== r &&
          "http://www.w3.org/1999/xhtml" !== r
        ) {
          throw Error("Namespace not supported: " + r);
        }
        for (; a = q.exec(e);) {
          var u = a[1];
          let t = a[2], o = a[3];
          var d = a[4];
          let c = a[5];
          if (
            l < a.index &&
            (l = e.slice(l, a.index), i.appendChild(s.createTextNode(h(l)))),
              l = q.lastIndex,
              void 0 !== u
          ) {
            i.appendChild(s.createComment(u));
          } else {
            if (
              "SVG" === (u = o.toUpperCase()) && (r = t
                ? "http://www.w3.org/1999/xhtml"
                : "http://www.w3.org/2000/svg"), !t
            ) {
              !c && z[i.tagName] && z[i.tagName][u] &&
              (n.pop(), i = n[n.length - 1]),
                a = s.createElementNS(
                  r,
                  "http://www.w3.org/1999/xhtml" === r ? o.toLowerCase() : o,
                );
              for (let e; e = $.exec(d);) {
                a.setAttribute(e[2], e[4] || e[5] || e[6]);
              }
              if (i = i.appendChild(a), n.push(i), W[u]) {
                if (
                  d = "</" + u.toLowerCase() + ">",
                    -1 == (d = e.indexOf(d, q.lastIndex))
                ) {
                  throw Error("Close markup not found.");
                }
                q.lastIndex = d;
              }
            }
            if (
              "foreignObject" === o && (r = t
                ? "http://www.w3.org/2000/svg"
                : "http://www.w3.org/1999/xhtml"), t || c || Y[u]
            ) {
              for (; !(1 >= n.length);) {
                if (i.nodeName.toUpperCase() == u) n.pop(), i = n[n.length - 1];
                else if (_[i.tagName] && _[i.tagName][u]) {
                  n.pop(), i = n[n.length - 1];
                  continue;
                }
                break;
              }
            }
          }
        }
        for (let e of n) {
          if (o[o.length - 1] != e.nodeName) break;
          n.pop(), o.pop(), i = n[n.length - 1];
        }
        if (1 !== n.length) {
          throw Error("Attempting to parse invalid HTML content.");
        }
        if (e = t.firstChild) {
          return e.parentNode = null,
            e.childNodes.forEach(
              ((e) => {
                e.parentNode = null;
              }),
            ),
            e;
        }
        throw Error("Attempting to parse invalid HTML.");
      }(e, this),
        this.childNodes.forEach(
          ((e) => {
            P(e, "isConnected", !1), P(e, 45, e);
          }),
        ),
        n(
          this.ownerDocument,
          { removedNodes: this.childNodes, type: 2, target: this },
          [
            2,
            this[7],
            0,
            0,
            0,
            this.childNodes.length,
            ...this.childNodes.map(((e) => e[7])),
          ],
        ),
        this.childNodes = [],
        e.childNodes.forEach(((e) => this.appendChild(e)));
    }
    set textContent(e) {
      this.childNodes.slice().forEach(((e) => e.remove())),
        this.appendChild(this.ownerDocument.createTextNode(e));
    }
    get textContent() {
      return this.getTextContent();
    }
    get tagName() {
      return this.nodeName;
    }
    setAttribute(e, t) {
      this.setAttributeNS("http://www.w3.org/1999/xhtml", e, t);
    }
    getAttribute(e) {
      return this.getAttributeNS("http://www.w3.org/1999/xhtml", e);
    }
    removeAttribute(e) {
      this.removeAttributeNS("http://www.w3.org/1999/xhtml", e);
    }
    hasAttribute(e) {
      return this.hasAttributeNS("http://www.w3.org/1999/xhtml", e);
    }
    hasAttributes() {
      return 0 < this.attributes.length;
    }
    setAttributeNS(e, t, i) {
      let r = String(i);
      var a = this.constructor[46][t];
      void 0 !== a
        ? (this.attributes.find(G(e, t)) ||
          this.attributes.push({ namespaceURI: e, name: t, value: r }),
          a[1](this, r))
        : (a = this[44](e, t, r),
          n(
            this.ownerDocument,
            {
              type: 0,
              target: this,
              attributeName: t,
              attributeNamespace: e,
              value: r,
              oldValue: a,
            },
            [0, this[7], s(t), s(e), null !== i ? s(r) + 1 : 0],
          ));
    }
    44(e, t, s) {
      let i = this.attributes.find(G(e, t)), r = i && i.value || "";
      return i
        ? i.value = s
        : this.attributes.push({ namespaceURI: e, name: t, value: s }),
        r;
    }
    getAttributeNS(e, t) {
      return (e = this.attributes.find(G(e, t)))
        ? void 0 !== (t = this.constructor[46][t]) ? t[0](this) : e.value
        : null;
    }
    removeAttributeNS(e, t) {
      let i = this.attributes.findIndex(G(e, t));
      if (0 <= i) {
        let r = this.attributes[i].value;
        this.attributes.splice(i, 1),
          n(
            this.ownerDocument,
            {
              type: 0,
              target: this,
              attributeName: t,
              attributeNamespace: e,
              oldValue: r,
            },
            [0, this[7], s(t), s(e), 0],
          );
      }
    }
    hasAttributeNS(e, t) {
      return this.attributes.some(G(e, t));
    }
    getElementsByClassName(e) {
      let t = e.split(" ");
      return p(this, ((e) => t.some(((t) => e.classList.contains(t)))));
    }
    getElementsByTagName(e) {
      let t = e.toLowerCase();
      return p(
        this,
        "*" === e ? (e) => !0 : (s) =>
          "http://www.w3.org/1999/xhtml" === s.namespaceURI
            ? s.localName === t
            : s.tagName === e,
      );
    }
    getElementsByName(e) {
      let t = "" + e;
      return p(this, ((e) => e.getAttribute("name") === t));
    }
    cloneNode(e = !1) {
      let t = this.ownerDocument.createElementNS(
        this.namespaceURI,
        "http://www.w3.org/1999/xhtml" === this.namespaceURI
          ? this.tagName.toLowerCase()
          : this.tagName,
      );
      return this.attributes.forEach(((e) => t.setAttribute(e.name, e.value))),
        e && this.childNodes.forEach(((s) => t.appendChild(s.cloneNode(e)))),
        t;
    }
    getBoundingClientRectAsync() {
      let e = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
      return new Promise(
        ((t) => {
          let s = ({ data: e }) => {
            6 === e[12] && e[13][0] === this[7] &&
              (this.ownerDocument.removeGlobalEventListener("message", s),
                e = e[38],
                t({
                  top: e[0],
                  right: e[1],
                  bottom: e[2],
                  left: e[3],
                  width: e[4],
                  height: e[5],
                  x: e[0],
                  y: e[3],
                }));
          };
          this.ownerDocument.addGlobalEventListener && this.isConnected
            ? (this.ownerDocument.addGlobalEventListener("message", s),
              r(this.ownerDocument, [5, this[7]]),
              setTimeout(t, 500, e))
            : t(e);
        }),
      );
    }
    click() {
      let e = new Q("click", {});
      e.target = this, this.dispatchEvent(e);
    }
    get classList() {
      return this._classList || (this._classList = new H(this, "class"));
    }
  }
  ae[46] = {
    class: [(e) => e.classList.value, (e, t) => e.classList.value = t],
    style: [(e) => e.cssText, (e, t) => e.cssText = t],
  },
    l(ae, "classList", "className"),
    j([{ id: [""] }], ae);
  let le = (e) => {
    0 >= (e = e.filter(((e) => !he.prototype.hasOwnProperty(e)))).length ||
      e.forEach(
        ((e) => {
          const t = e.replace(/on/, "");
          Object.defineProperty(he.prototype, e, {
            enumerable: !0,
            get() {
              return this[76][t] || null;
            },
            set(e) {
              const s = this[76][t];
              s && this.removeEventListener(t, s),
                this.addEventListener(t, e),
                this[76][t] = e;
            },
          });
        }),
      );
  };
  class he extends ae {
    constructor() {
      super(...arguments), this[76] = {};
    }
    get form() {
      return w(this, g(["FORM"]));
    }
    68() {
      return [7, this[7]];
    }
  }
  j(
    [
      { accessKey: [""] },
      { contentEditable: ["inherit"] },
      { dir: [""] },
      { lang: [""] },
      { title: [""] },
      { draggable: [!1, void 0, ["true", "false"]] },
      { hidden: [!1, void 0] },
      { noModule: [!1] },
      { spellcheck: [!0, void 0, ["true", "false"]] },
      { translate: [!0, void 0, ["yes", "no"]] },
    ],
    he,
  );
  class oe extends ae {
    constructor(e, t, s, i) {
      super(e, t, "http://www.w3.org/2000/svg", i), this.nodeName = t;
    }
  }
  se("svg", oe, "http://www.w3.org/2000/svg");
  class ue extends he {
    get relList() {
      return this._relList || (this._relList = new H(this, "rel"));
    }
    toString() {
      return this.href;
    }
    get text() {
      return this.textContent;
    }
    set text(e) {
      this.textContent = e;
    }
  }
  se("a", ue),
    o(ue, { rel: [(e) => e.relList.value, (e, t) => e.relList.value = t] }),
    l(ue, "relList", "rel"),
    j(
      [
        { href: [""] },
        { hreflang: [""] },
        { media: [""] },
        { target: [""] },
        { type: [""] },
      ],
      ue,
    );
  class de extends he {}
  se("button", de),
    j(
      [
        { formAction: [""] },
        { formEnctype: [""] },
        { formMethod: [""] },
        { formTarget: [""] },
        { name: [""] },
        { type: ["submit"] },
        { value: [""] },
        { autofocus: [!1] },
        { disabled: [!1] },
      ],
      de,
    );
  let ce = new Float32Array(1), ge = new Uint16Array(ce.buffer);
  class me {
    constructor(e, t) {
      this.document = t, this.id = e;
    }
    addColorStop(e, t) {
      r(
        this.document,
        [9, s("addColorStop"), 2, ...this[68](), ...u([...arguments])],
      );
    }
    68() {
      return [5, this.id];
    }
  }
  class pe {
    constructor(e) {
      this.id = e;
    }
    setTransform() {}
    68() {
      return [5, this.id];
    }
  }
  class fe {
    constructor(e) {
      this.canvas = e;
    }
    getContext(e) {
      if (!this.context) {
        if ("2d" !== e.toLowerCase()) {
          throw Error("Context type not supported.");
        }
        this.context = new we(this.canvas);
      }
      return this.context;
    }
  }
  class we {
    constructor(e) {
      this.objectIndex = 0, this.canvasElement = e, this.lineDash = [];
    }
    67(e, t) {
      r(
        this.canvasElement.ownerDocument,
        [9, s(e), t.length, ...this[68](), ...u(t)],
      );
    }
    68() {
      return [6, this.canvasElement[7]];
    }
    createObjectReference(e, t, i) {
      r(
        this.canvasElement.ownerDocument,
        [10, s(t), e, i.length, ...this[68](), ...u(i)],
      );
    }
    get canvas() {
      return this.canvasElement;
    }
    clearRect(e, t, s, i) {
      this[67]("clearRect", [...arguments]);
    }
    fillRect(e, t, s, i) {
      this[67]("fillRect", [...arguments]);
    }
    strokeRect(e, t, s, i) {
      this[67]("strokeRect", [...arguments]);
    }
    set lineWidth(e) {
      this[67]("lineWidth", [...arguments]);
    }
    fillText(e, t, s, i) {
      this[67]("fillText", [...arguments]);
    }
    moveTo(e, t) {
      this[67]("moveTo", [...arguments]);
    }
    lineTo(e, t) {
      this[67]("lineTo", [...arguments]);
    }
    closePath() {
      this[67]("closePath", []);
    }
    stroke() {
      this[67]("stroke", []);
    }
    restore() {
      this[67]("restore", []);
    }
    save() {
      this[67]("save", []);
    }
    resetTransform() {
      this[67]("resetTransform", []);
    }
    rotate(e) {
      this[67]("rotate", [...arguments]);
    }
    transform(e, t, s, i, r, n) {
      this[67]("transform", [...arguments]);
    }
    translate(e, t) {
      this[67]("translate", [...arguments]);
    }
    scale(e, t) {
      this[67]("scale", [...arguments]);
    }
    set globalAlpha(e) {
      this[67]("globalAlpha", [...arguments]);
    }
    set globalCompositeOperation(e) {
      this[67]("globalCompositeOperation", [...arguments]);
    }
    set imageSmoothingQuality(e) {
      this[67]("imageSmoothingQuality", [...arguments]);
    }
    set fillStyle(e) {
      this[67]("fillStyle", [...arguments]);
    }
    set strokeStyle(e) {
      this[67]("strokeStyle", [...arguments]);
    }
    set shadowBlur(e) {
      this[67]("shadowBlur", [...arguments]);
    }
    set shadowColor(e) {
      this[67]("shadowColor", [...arguments]);
    }
    set shadowOffsetX(e) {
      this[67]("shadowOffsetX", [...arguments]);
    }
    set shadowOffsetY(e) {
      this[67]("shadowOffsetY", [...arguments]);
    }
    set filter(e) {
      this[67]("filter", [...arguments]);
    }
    beginPath() {
      this[67]("beginPath", []);
    }
    strokeText(e, t, s, i) {
      this[67]("strokeText", [...arguments]);
    }
    set textAlign(e) {
      this[67]("textAlign", [...arguments]);
    }
    set textBaseline(e) {
      this[67]("textBaseline", [...arguments]);
    }
    set lineCap(e) {
      this[67]("lineCap", [...arguments]);
    }
    set lineDashOffset(e) {
      this[67]("lineDashOffset", [...arguments]);
    }
    set lineJoin(e) {
      this[67]("lineJoin", [...arguments]);
    }
    set miterLimit(e) {
      this[67]("miterLimit", [...arguments]);
    }
    arc(e, t, s, i, r, n) {
      this[67]("arc", [...arguments]);
    }
    arcTo(e, t, s, i, r) {
      this[67]("arcTo", [...arguments]);
    }
    set direction(e) {
      this[67]("direction", [...arguments]);
    }
    set font(e) {
      this[67]("font", [...arguments]);
    }
    ellipse(e, t, s, i, r, n, a, l) {
      this[67]("ellipse", [...arguments]);
    }
    bezierCurveTo(e, t, s, i, r, n) {
      this[67]("bezierCurveTo", [...arguments]);
    }
    rect(e, t, s, i) {
      this[67]("rect", [...arguments]);
    }
    quadraticCurveTo(e, t, s, i) {
      this[67]("quadraticCurveTo", [...arguments]);
    }
    set imageSmoothingEnabled(e) {
      this[67]("imageSmoothingEnabled", [...arguments]);
    }
    setLineDash(e) {
      0 != (e = [...e]).length % 2 && (e = e.concat(e)),
        this.lineDash = e,
        this[67]("setLineDash", [...arguments]);
    }
    getLineDash() {
      return [...this.lineDash];
    }
    clip(e, t) {
      if ("object" == typeof e) {
        throw Error("clip(Path2D) is currently not supported!");
      }
      this[67]("clip", [...arguments]);
    }
    fill(e, t) {
      if ("object" == typeof e) {
        throw Error("fill(Path2D) is currently not supported!");
      }
      this[67]("fill", [...arguments]);
    }
    setTransform(e, t, s, i, r, n) {
      if ("object" == typeof e) {
        throw Error(
          "setTransform(DOMMatrix2DInit) is currently not supported!",
        );
      }
      this[67]("setTransform", [...arguments]);
    }
    createLinearGradient(e, t, s, i) {
      let r = this.objectIndex++;
      return this.createObjectReference(
        r,
        "createLinearGradient",
        [...arguments],
      ),
        new me(r, this.canvasElement.ownerDocument);
    }
    createRadialGradient(e, t, s, i, r, n) {
      let a = this.objectIndex++;
      return this.createObjectReference(
        a,
        "createRadialGradient",
        [...arguments],
      ),
        new me(a, this.canvasElement.ownerDocument);
    }
    createPattern(e, t) {
      let s = this.objectIndex++;
      return this.createObjectReference(s, "createPattern", [...arguments]),
        new pe(s);
    }
    drawImage(e, t, s) {
      this[67]("drawImage", [...arguments]);
    }
    createImageData() {
      return {};
    }
    getImageData() {
      return {};
    }
    putImageData() {}
    isPointInPath() {
      throw Error("isPointInPath is not implemented.");
    }
    isPointInStroke() {
      throw Error("isPointInStroke is not implemented.");
    }
    measureText() {
      throw Error("measureText is not implemented.");
    }
  }
  let be = 0;
  class ve {
    constructor() {
      this[70] = {}, this[71] = !1;
    }
    69(e, t, s) {
      return this[72] = d(t, e).then(
        ((t) => {
          if (!(t = e.getContext("2d").createPattern(t, s))) {
            throw Error("Pattern is null!");
          }
          this[70] = t, this[71] = !0;
        }),
      ),
        this[72];
    }
    setTransform() {}
  }
  let Te = new WeakMap();
  class Ee {
    constructor(e) {
      this.queue = [],
        this.upgraded = !1,
        this.unresolvedCalls = 0,
        this.canvasElement = e;
      let t = e.ownerDocument.defaultView.OffscreenCanvas;
      void 0 === t
        ? (this.implementation = new fe(e).getContext("2d"),
          this.polyfillUsed = this.upgraded = !0)
        : (this.implementation = new t(0, 0).getContext("2d"),
          this.getOffscreenCanvasAsync(this.canvasElement),
          this.polyfillUsed = !1);
    }
    getOffscreenCanvasAsync(e) {
      this.unresolvedCalls++;
      let t = {},
        s = this.canvasElement.ownerDocument,
        i = !s.addGlobalEventListener,
        n = new Promise(
          ((n) => {
            const a = ({ data: t }) => {
              9 === t[12] && t[13][0] === e[7] &&
                (s.removeGlobalEventListener("message", a), n(t[38]));
            };
            if (s.addGlobalEventListener) {
              s.addGlobalEventListener("message", a),
                r(e.ownerDocument, [8, e[7]]);
            } else {
              if (!i) throw Error("addGlobalEventListener is not defined.");
              t.resolve = n;
            }
          }),
        ).then(
          ((e) => {
            this.goodImplementation = e.getContext("2d"),
              this.maybeUpgradeImplementation();
          }),
        );
      return i && (t.upgradePromise = n, Te.set(e, t)), n;
    }
    degradeImplementation() {
      this.upgraded = !1,
        this.implementation = new this.canvasElement.ownerDocument.defaultView
          .OffscreenCanvas(0, 0).getContext("2d"),
        this.unresolvedCalls++;
    }
    maybeUpgradeImplementation() {
      this.unresolvedCalls--,
        0 === this.unresolvedCalls &&
        (this.implementation = this.goodImplementation,
          this.upgraded = !0,
          this.flushQueue());
    }
    flushQueue() {
      for (let e of this.queue) {
        e.isSetter ? this[e.fnName] = e.args[0] : this[e.fnName](...e.args);
      }
      this.queue.length = 0;
    }
    delegateFunc(e, t) {
      let s = this.implementation[e](...t);
      return this.upgraded ||
        this.queue.push({ fnName: e, args: t, isSetter: !1 }),
        s;
    }
    delegateSetter(e, t) {
      this.implementation[e] = t[0],
        this.upgraded || this.queue.push({ fnName: e, args: t, isSetter: !0 });
    }
    delegateGetter(e) {
      return this.implementation[e];
    }
    clearRect(e, t, s, i) {
      this.delegateFunc("clearRect", [...arguments]);
    }
    fillRect(e, t, s, i) {
      this.delegateFunc("fillRect", [...arguments]);
    }
    strokeRect(e, t, s, i) {
      this.delegateFunc("strokeRect", [...arguments]);
    }
    fillText(e, t, s, i) {
      this.delegateFunc("fillText", [...arguments]);
    }
    strokeText(e, t, s, i) {
      this.delegateFunc("strokeText", [...arguments]);
    }
    measureText(e) {
      return this.delegateFunc("measureText", [...arguments]);
    }
    set lineWidth(e) {
      this.delegateSetter("lineWidth", [...arguments]);
    }
    get lineWidth() {
      return this.delegateGetter("lineWidth");
    }
    set lineCap(e) {
      this.delegateSetter("lineCap", [...arguments]);
    }
    get lineCap() {
      return this.delegateGetter("lineCap");
    }
    set lineJoin(e) {
      this.delegateSetter("lineJoin", [...arguments]);
    }
    get lineJoin() {
      return this.delegateGetter("lineJoin");
    }
    set miterLimit(e) {
      this.delegateSetter("miterLimit", [...arguments]);
    }
    get miterLimit() {
      return this.delegateGetter("miterLimit");
    }
    getLineDash() {
      return this.delegateFunc("getLineDash", [...arguments]);
    }
    setLineDash(e) {
      this.delegateFunc("setLineDash", [...arguments]);
    }
    set lineDashOffset(e) {
      this.delegateSetter("lineDashOffset", [...arguments]);
    }
    get lineDashOffset() {
      return this.delegateGetter("lineDashOffset");
    }
    set font(e) {
      this.delegateSetter("font", [...arguments]);
    }
    get font() {
      return this.delegateGetter("font");
    }
    set textAlign(e) {
      this.delegateSetter("textAlign", [...arguments]);
    }
    get textAlign() {
      return this.delegateGetter("textAlign");
    }
    set textBaseline(e) {
      this.delegateSetter("textBaseline", [...arguments]);
    }
    get textBaseline() {
      return this.delegateGetter("textBaseline");
    }
    set direction(e) {
      this.delegateSetter("direction", [...arguments]);
    }
    get direction() {
      return this.delegateGetter("direction");
    }
    set fillStyle(e) {
      e instanceof ve && this.upgraded
        ? e[71]
          ? this.delegateSetter("fillStyle", [e[70]])
          : (this.queue.push({ fnName: "fillStyle", args: [e], isSetter: !0 }),
            this.degradeImplementation(),
            e[72].then(
              (() => {
                this.maybeUpgradeImplementation();
              }),
            ))
        : this.delegateSetter("fillStyle", [...arguments]);
    }
    get fillStyle() {
      return this.delegateGetter("fillStyle");
    }
    set strokeStyle(e) {
      e instanceof ve && this.upgraded
        ? e[71]
          ? this.delegateSetter("strokeStyle", [e[70]])
          : (this.queue.push(
            { fnName: "strokeStyle", args: [e], isSetter: !0 },
          ),
            this.degradeImplementation(),
            e[72].then(
              (() => {
                this.maybeUpgradeImplementation();
              }),
            ))
        : this.delegateSetter("strokeStyle", [...arguments]);
    }
    get strokeStyle() {
      return this.delegateGetter("strokeStyle");
    }
    createLinearGradient(e, t, s, i) {
      return this.delegateFunc("createLinearGradient", [...arguments]);
    }
    createRadialGradient(e, t, s, i, r, n) {
      return this.delegateFunc("createRadialGradient", [...arguments]);
    }
    createPattern(e, t) {
      var s = this.canvasElement.ownerDocument.defaultView.ImageBitmap;
      return this.polyfillUsed || e instanceof s
        ? this.delegateFunc("createPattern", [...arguments])
        : (this.degradeImplementation(),
          (s = new ve())[69](this.canvas, e, t).then(
            (() => {
              this.maybeUpgradeImplementation();
            }),
          ),
          s);
    }
    drawImage(e, t, s) {
      let i = this.canvasElement.ownerDocument.defaultView.ImageBitmap;
      if (this.polyfillUsed || e instanceof i) {
        this.delegateFunc("drawImage", [...arguments]);
      } else {
        let i = [];
        this.queue.push({ fnName: "drawImage", args: i, isSetter: !1 }),
          this.degradeImplementation(),
          d(e, this.canvas).then(
            ((e) => {
              i.push(e, t, s), this.maybeUpgradeImplementation();
            }),
          );
      }
    }
    set shadowBlur(e) {
      this.delegateSetter("shadowBlur", [...arguments]);
    }
    get shadowBlur() {
      return this.delegateGetter("shadowBlur");
    }
    set shadowColor(e) {
      this.delegateSetter("shadowColor", [...arguments]);
    }
    get shadowColor() {
      return this.delegateGetter("shadowColor");
    }
    set shadowOffsetX(e) {
      this.delegateSetter("shadowOffsetX", [...arguments]);
    }
    get shadowOffsetX() {
      return this.delegateGetter("shadowOffsetX");
    }
    set shadowOffsetY(e) {
      this.delegateSetter("shadowOffsetY", [...arguments]);
    }
    get shadowOffsetY() {
      return this.delegateGetter("shadowOffsetY");
    }
    beginPath() {
      this.delegateFunc("beginPath", [...arguments]);
    }
    closePath() {
      this.delegateFunc("closePath", [...arguments]);
    }
    moveTo(e, t) {
      this.delegateFunc("moveTo", [...arguments]);
    }
    lineTo(e, t) {
      this.delegateFunc("lineTo", [...arguments]);
    }
    bezierCurveTo(e, t, s, i, r, n) {
      this.delegateFunc("bezierCurveTo", [...arguments]);
    }
    quadraticCurveTo(e, t, s, i) {
      this.delegateFunc("quadraticCurveTo", [...arguments]);
    }
    arc(e, t, s, i, r, n) {
      this.delegateFunc("arc", [...arguments]);
    }
    arcTo(e, t, s, i, r) {
      this.delegateFunc("arcTo", [...arguments]);
    }
    ellipse(e, t, s, i, r, n, a, l) {
      this.delegateFunc("ellipse", [...arguments]);
    }
    rect(e, t, s, i) {
      this.delegateFunc("rect", [...arguments]);
    }
    fill(e, t) {
      let s = [...arguments];
      this.delegateFunc("fill", s);
    }
    stroke(e) {
      let t = [...arguments];
      this.delegateFunc("stroke", t);
    }
    clip(e, t) {
      let s = [...arguments];
      this.delegateFunc("clip", s);
    }
    isPointInPath(e, t, s, i) {
      let r = [...arguments];
      return this.delegateFunc("isPointInPath", r);
    }
    isPointInStroke(e, t, s) {
      let i = [...arguments];
      return this.delegateFunc("isPointInStroke", i);
    }
    rotate(e) {
      this.delegateFunc("rotate", [...arguments]);
    }
    scale(e, t) {
      this.delegateFunc("scale", [...arguments]);
    }
    translate(e, t) {
      this.delegateFunc("translate", [...arguments]);
    }
    transform(e, t, s, i, r, n) {
      this.delegateFunc("transform", [...arguments]);
    }
    setTransform(e, t, s, i, r, n) {
      let a = [...arguments];
      this.delegateFunc("setTransform", a);
    }
    resetTransform() {
      this.delegateFunc("resetTransform", [...arguments]);
    }
    set globalAlpha(e) {
      this.delegateSetter("globalAlpha", [...arguments]);
    }
    get globalAlpha() {
      return this.delegateGetter("globalAlpha");
    }
    set globalCompositeOperation(e) {
      this.delegateSetter("globalCompositeOperation", [...arguments]);
    }
    get globalCompositeOperation() {
      return this.delegateGetter("globalCompositeOperation");
    }
    createImageData(e, t) {
      let s = [...arguments];
      return this.delegateFunc("createImageData", s);
    }
    getImageData(e, t, s, i) {
      return this.delegateFunc("getImageData", [...arguments]);
    }
    putImageData(e, t, s, i, r, n, a) {
      this.delegateFunc("putImageData", [...arguments]);
    }
    set imageSmoothingEnabled(e) {
      this.delegateSetter("imageSmoothingEnabled", [...arguments]);
    }
    get imageSmoothingEnabled() {
      return this.delegateGetter("imageSmoothingEnabled");
    }
    set imageSmoothingQuality(e) {
      this.delegateSetter("imageSmoothingQuality", [...arguments]);
    }
    get imageSmoothingQuality() {
      return this.delegateGetter("imageSmoothingQuality");
    }
    save() {
      this.delegateFunc("save", [...arguments]);
    }
    restore() {
      this.delegateFunc("restore", [...arguments]);
    }
    get canvas() {
      return this.canvasElement;
    }
    set filter(e) {
      this.delegateSetter("filter", [...arguments]);
    }
    get filter() {
      return this.delegateGetter("filter");
    }
  }
  class xe extends he {
    getContext(e) {
      if (!this.context) {
        if ("2D" !== e && "2d" !== e) {
          throw Error("Context type not supported.");
        }
        this.context = new Ee(this);
      }
      return this.context;
    }
  }
  se("canvas", xe), j([{ height: [0] }, { width: [0] }], xe);
  class Ne extends he {}
  se("data", Ne), j([{ value: [""] }], Ne);
  class ye extends he {}
  se("embed", ye),
    j([{ height: [""] }, { src: [""] }, { type: [""] }, { width: [""] }], ye);
  let Ce = "BUTTON FIELDSET INPUT OBJECT OUTPUT SELECT TEXTAREA".split(" "),
    Le = (e) => {
      Object.defineProperty(e.prototype, "elements", {
        get() {
          return p(this, g(Ce));
        },
      });
    };
  class Oe extends he {
    get type() {
      return this.tagName.toLowerCase();
    }
  }
  se("fieldset", Oe), Le(Oe), j([{ name: [""] }, { disabled: [!1] }], Oe);
  class De extends he {
    get length() {
      return this.elements.length;
    }
  }
  se("form", De),
    Le(De),
    j([
      { name: [""] },
      { method: ["get"] },
      { target: [""] },
      { action: [""] },
      { enctype: ["application/x-www-form-urlencoded"] },
      { acceptCharset: ["", "accept-charset"] },
      { autocomplete: ["on"] },
      { autocapitalize: ["sentences"] },
    ], De);
  class Se extends he {
    get sandbox() {
      return this._sandbox || (this._sandbox = new H(this, "sandbox"));
    }
  }
  se("iframe", Se),
    o(Se, { sandbox: [(e) => e.sandbox.value, (e, t) => e.sandbox.value = t] }),
    j(
      [
        { allow: [""] },
        { allowFullscreen: [!1] },
        { csp: [""] },
        { height: [""] },
        { name: [""] },
        { referrerPolicy: [""] },
        { src: [""] },
        { srcdoc: [""] },
        { width: [""] },
      ],
      Se,
    );
  class Ie extends he {}
  se("img", Ie),
    j(
      [
        { alt: [""] },
        { crossOrigin: [""] },
        { height: [0] },
        { isMap: [!1] },
        { referrerPolicy: [""] },
        { src: [""] },
        { sizes: [""] },
        { srcset: [""] },
        { useMap: [""] },
        { width: [0] },
      ],
      Ie,
    );
  let Ae = (e) => {
    Object.defineProperty(e.prototype, "labels", {
      get() {
        return p(
          this.ownerDocument || this,
          ((e) => "LABEL" === e.tagName && e.for && e.for === this.id),
        );
      },
    });
  };
  class Pe extends he {
    constructor() {
      super(...arguments), this[Re] = "", this.dirtyValue = !1, this[Me] = !1;
    }
    get value() {
      return this.dirtyValue ? this[21] : this.getAttribute("value") || "";
    }
    set value(e) {
      this[21] = String(e),
        this.dirtyValue = !0,
        r(this.ownerDocument, [3, this[7], s("value"), 0, s(e)]);
    }
    get valueAsDate() {
      let e = this.stringToDate(this.value);
      return !e || isNaN(e.getTime()) ? null : e;
    }
    set valueAsDate(e) {
      if (!(e instanceof Date)) {
        throw new TypeError("The provided value is not a Date.");
      }
      this.value = this.dateToString(e);
    }
    get valueAsNumber() {
      return 0 === this.value.length ? NaN : Number(this.value);
    }
    set valueAsNumber(e) {
      this.value = "number" == typeof e ? String(e) : "";
    }
    get checked() {
      return this[47];
    }
    set checked(e) {
      this[47] !== e &&
        (this[47] = !!e,
          r(
            this.ownerDocument,
            [3, this[7], s("checked"), 1, !0 === e ? 1 : 0],
          ));
    }
    dateToString(e) {
      let t = e.getFullYear(), s = e.getMonth() + 1;
      return `${t}-${9 < s ? "" : "0"}${s}-${
        9 < (e = e.getDate()) ? "" : "0"
      }${e}`;
    }
    stringToDate(e) {
      if (3 !== (e = e.split("-")).length) return null;
      let [t, s, i] = e;
      return new Date(parseInt(t, 10), parseInt(s, 10) - 1, parseInt(i, 10));
    }
  }
  var Re = 21, Me = 47;
  se("input", Pe),
    Ae(Pe),
    j([
      { accept: [""] },
      { alt: [""] },
      { autocapitalize: [""] },
      { autocomplete: [""] },
      { autofocus: [!1] },
      { defaultChecked: [!1, "checked"] },
      { defaultValue: ["", "value"] },
      { dirName: [""] },
      { disabled: [!1] },
      { formAction: [""] },
      { formEncType: [""] },
      { formMethod: [""] },
      { formTarget: [""] },
      { height: [0] },
      { max: [""] },
      { maxLength: [0] },
      { min: [""] },
      { multiple: [!1] },
      { name: [""] },
      { pattern: [""] },
      { placeholder: [""] },
      { readOnly: [!1] },
      { required: [!1] },
      { size: [0] },
      { src: [""] },
      { step: [""] },
      { type: ["text"] },
      { width: [0] },
    ], Pe);
  class Fe extends he {
    get control() {
      let e = this.getAttribute("for");
      return null !== e
        ? this.ownerDocument && this.ownerDocument.getElementById(e)
        : f(this, g(["INPUT"]));
    }
  }
  se("label", Fe), j([{ htmlFor: ["", "for"] }], Fe);
  class He extends he {
    get relList() {
      return this._relList || (this._relList = new H(this, "rel"));
    }
  }
  se("link", He),
    o(He, { rel: [(e) => e.relList.value, (e, t) => e.relList.value = t] }),
    l(He, "relList", "rel"),
    j(
      [
        { as: [""] },
        { crossOrigin: [""] },
        { disabled: [!1] },
        { href: [""] },
        { hreflang: [""] },
        { media: [""] },
        { referrerPolicy: [""] },
        { sizes: [""] },
        { type: [""] },
      ],
      He,
    );
  class ke extends he {
    get areas() {
      return p(this, ((e) => "AREA" === e.tagName));
    }
  }
  se("map", ke), j([{ name: [""] }], ke);
  class Ge extends he {}
  se("meter", Ge),
    Ae(Ge),
    j([
      { high: [0] },
      { low: [0] },
      { max: [1] },
      { min: [0] },
      { optimum: [0] },
      { value: [0] },
    ], Ge);
  class Be extends he {}
  se("del", Be), se("ins", Be), j([{ cite: [""] }, { datetime: [""] }], Be);
  class Ue extends he {}
  se("ol", Ue), j([{ reversed: [!1] }, { start: [1] }, { type: [""] }], Ue);
  class Ve extends he {
    constructor() {
      super(...arguments), this[je] = !1;
    }
    get index() {
      return this.parentNode && this.parentNode.children.indexOf(this) || 0;
    }
    get label() {
      return this.getAttribute("label") || this.textContent;
    }
    set label(e) {
      this.setAttribute("label", e);
    }
    get selected() {
      return this[52];
    }
    set selected(e) {
      this[52] = !!e,
        r(this.ownerDocument, [3, this[7], s("selected"), 1, this[52] ? 1 : 0]);
    }
    get text() {
      return this.textContent;
    }
    set text(e) {
      this.textContent = e;
    }
    get value() {
      return this.getAttribute("value") || this.textContent;
    }
    set value(e) {
      this.setAttribute("value", e);
    }
  }
  var je = 52;
  se("option", Ve),
    o(
      Ve,
      { selected: [(e) => String(e[52]), (e, t) => e.selected = "true" === t] },
    ),
    j(
      [
        { defaultSelected: [!1, "selected"] },
        { disabled: [!1] },
        { type: [""] },
      ],
      Ve,
    );
  class qe extends he {
    constructor() {
      super(...arguments), this[$e] = !0, this[Ye] = 0, this.dirtyValue = !1;
    }
    get position() {
      return this[48] ? -1 : this.value / this.max;
    }
    get value() {
      return this.dirtyValue
        ? this[21]
        : Number(this.getAttribute("value")) || 0;
    }
    set value(e) {
      this[48] = !1, this[21] = e, this.dirtyValue = !0;
    }
  }
  var $e = 48, Ye = 21;
  se("progress", qe), Ae(qe), j([{ max: [1] }], qe);
  class ze extends he {}
  se("blockquote", ze), se("q", ze), j([{ cite: [""] }], ze);
  class _e extends he {
    get text() {
      return this.textContent;
    }
    set text(e) {
      this.textContent = e;
    }
  }
  se("script", _e),
    j(
      [
        { type: [""] },
        { src: [""] },
        { charset: [""] },
        { async: [!1] },
        { defer: [!1] },
        { crossOrigin: [""] },
        { noModule: [!1] },
      ],
      _e,
    );
  let We = g(["OPTION"]), Xe = (e) => We(e) && !0 === e.selected;
  class Qe extends he {
    constructor() {
      super(...arguments), this[49] = -1;
    }
    56(e) {
      super[56](e),
        (!this.multiple && We(e) && e.selected || "" === this.value) &&
        (this.value = e.value);
    }
    57(e) {
      super[57](e),
        !this.multiple && e.selected &&
        (0 < (e = this.options).length && (this.value = e[0].value));
    }
    get length() {
      return this.options.length;
    }
    get options() {
      return this.children.filter(We);
    }
    get selectedIndex() {
      let e = f(this, Xe);
      return e ? this.children.indexOf(e) : -1;
    }
    set selectedIndex(e) {
      this.children.forEach(((t, s) => t.selected = s === e));
    }
    get selectedOptions() {
      return p(this, Xe);
    }
    get size() {
      return -1 === this[49] ? this.multiple ? 4 : 1 : this[49];
    }
    set size(e) {
      this[49] = 0 < e ? e : this.multiple ? 4 : 1;
    }
    get type() {
      return this.multiple ? "select-one" : "select-multiple";
    }
    get value() {
      let e = f(this, Xe);
      return e ? e.value : "";
    }
    set value(e) {
      let t = String(e);
      this.children.forEach(((e) => We(e) && (e.selected = e.value === t)));
    }
  }
  se("select", Qe),
    Ae(Qe),
    j([{ multiple: [!1] }, { name: [""] }, { required: [!1] }], Qe);
  class Je extends he {}
  se("source", Je),
    j(
      [
        { media: [""] },
        { sizes: [""] },
        { src: [""] },
        { srcset: [""] },
        { type: [""] },
      ],
      Je,
    );
  class Ke extends he {}
  se("style", Ke), j([{ media: [""] }, { type: [""] }], Ke);
  class Ze extends he {
    get headers() {
      return this._headers || (this._headers = new H(this, "headers"));
    }
    get cellIndex() {
      let e = w(this, g(["TR"]));
      return null !== e ? p(e, g(["TH", "TD"])).indexOf(this) : -1;
    }
  }
  se("th", Ze),
    se("td", Ze),
    o(Ze, { headers: [(e) => e.headers.value, (e, t) => e.headers.value = t] }),
    j(
      [{ abbr: [""] }, { colSpan: [1] }, { rowSpan: [1] }, { scope: [""] }],
      Ze,
    );
  class et extends he {}
  se("col", et), j([{ span: [1] }], et);
  let tt = (e, t, s) => {
    const i = f(e, ((e) => !s.includes(e.tagName)));
    i ? e.insertBefore(t, i) : e.appendChild(t);
  };
  class st extends he {
    get caption() {
      return f(this, g(["CAPTION"]));
    }
    set caption(e) {
      if (e && "CAPTION" === e.tagName) {
        var t = this.caption;
        t && t.remove(), this.insertBefore(e, this.firstElementChild);
      }
    }
    get tHead() {
      return f(this, g(["THEAD"]));
    }
    set tHead(e) {
      if (e && "THEAD" === e.tagName) {
        var t = this.tHead;
        t && t.remove(), tt(this, e, ["CAPTION", "COLGROUP"]);
      }
    }
    get tFoot() {
      return f(this, g(["TFOOT"]));
    }
    set tFoot(e) {
      if (e && "TFOOT" === e.tagName) {
        var t = this.tFoot;
        t && t.remove(), tt(this, e, ["CAPTION", "COLGROUP", "THEAD"]);
      }
    }
    get rows() {
      return p(this, g(["TR"]));
    }
    get tBodies() {
      return p(this, g(["TBODY"]));
    }
  }
  se("table", st);
  let it = ["TABLE", "TBODY", "THEAD", "TFOOT"],
    rt = (e, t) => null === (t = w(e, t)) ? -1 : t.rows.indexOf(e);
  class nt extends he {
    get cells() {
      return p(this, g(["TD", "TH"]));
    }
    get rowIndex() {
      return rt(this, g(["TABLE"]));
    }
    get sectionRowIndex() {
      return rt(this, g(it));
    }
    deleteCell(e) {
      (e = this.cells[e]) && e.remove();
    }
    insertCell(e) {
      let t = this.cells, s = this.ownerDocument.createElement("td");
      return 0 > e || e >= t.length
        ? this.appendChild(s)
        : this.insertBefore(s, this.children[e]),
        s;
    }
  }
  se("tr", nt);
  class at extends he {
    get rows() {
      return p(this, g(["TR"]));
    }
    deleteRow(e) {
      let t = this.rows;
      (0 <= e || e <= t.length) && t[e].remove();
    }
    insertRow(e) {
      let t = this.rows, s = this.ownerDocument.createElement("tr");
      return 0 > e || e >= t.length
        ? this.appendChild(s)
        : this.insertBefore(s, this.children[e]),
        s;
    }
  }
  se("thead", at), se("tfoot", at), se("tbody", at);
  class lt extends he {}
  se("time", lt), j([{ dateTime: [""] }], lt);
  class ht extends he {
    get options() {
      return this.childNodes.filter(((e) => "OPTION" === e.nodeName));
    }
  }
  se("datalist", ht);
  class ot extends R {
    constructor(e, t, i, r, n) {
      super(t, i, r, n), this[38] = e, this[8] = [this[7], t, s(i), s(e), 0];
    }
    get data() {
      return this[38];
    }
    set data(e) {
      let t = this.data;
      this[38] = e,
        n(
          this.ownerDocument,
          { target: this, type: 1, value: e, oldValue: t },
          [1, this[7], s(e)],
        );
    }
    get length() {
      return this[38].length;
    }
    get nodeValue() {
      return this[38];
    }
    set nodeValue(e) {
      this.data = e;
    }
  }
  class ut extends ot {
    constructor(e, t, s) {
      super(e, 3, "#text", t, s);
    }
    get textContent() {
      return this.data;
    }
    set textContent(e) {
      this.nodeValue = e;
    }
    cloneNode() {
      return this.ownerDocument.createTextNode(this.data);
    }
    splitText(e) {
      let t = new ut(this.data.slice(e, this.data.length), this.ownerDocument),
        s = this.parentNode;
      if (this.nodeValue = this.data.slice(0, e), null !== s) {
        let i = (e = s.childNodes).indexOf(this) + 1;
        return s.insertBefore(t, e.length >= i ? e[i] : null);
      }
      return t;
    }
  }
  class dt extends ot {
    constructor(e, t, s) {
      super(e, 8, "#comment", t, s);
    }
    get textContent() {
      return this.data;
    }
    set textContent(e) {
      this.nodeValue = e;
    }
    cloneNode() {
      return this.ownerDocument.createComment(this.data);
    }
  }
  class ct extends M {
    constructor(e, t) {
      super(11, "#document-fragment", e, t),
        this[8] = [this[7], 11, s(this.nodeName), 0, 0];
    }
    cloneNode(e = !1) {
      let t = this.ownerDocument.createDocumentFragment();
      return e &&
        this.childNodes.forEach(((s) => t.appendChild(s.cloneNode(e)))),
        t;
    }
  }
  class gt extends ae {
    constructor(e) {
      super(9, "#document", "http://www.w3.org/1999/xhtml", null),
        this[58] = !0,
        this.nodeName = "#document",
        this.documentElement = this,
        this.defaultView = Object.assign(
          e,
          {
            document: this,
            addEventListener: this.addEventListener.bind(this),
            removeEventListener: this.removeEventListener.bind(this),
          },
        );
    }
    59() {
      v = 1,
        function (e) {
          let s = e.document;
          s.addGlobalEventListener &&
            s.addGlobalEventListener(
              "message",
              (({ data: s }) => {
                if (1 === s[12]) {
                  var i = t((s = s[39])[7]);
                  null !== i &&
                    i.dispatchEvent(
                      Object.assign(
                        new Q(s[12], { bubbles: s[25], cancelable: s[26] }),
                        {
                          cancelBubble: s[27],
                          defaultPrevented: s[29],
                          eventPhase: s[30],
                          isTrusted: s[31],
                          returnValue: s[32],
                          target: Z(e.document, s),
                          timeStamp: s[33],
                          scoped: s[34],
                          keyCode: s[35],
                          pageX: s[60],
                          pageY: s[61],
                          offsetX: s[65],
                          offsetY: s[66],
                          touches: ee(e.document, s, 62),
                          changedTouches: ee(e.document, s, 63),
                        },
                      ),
                    );
                }
              }),
            );
        }(this.defaultView),
        function (e) {
          (e = e.document).addGlobalEventListener &&
            e.addGlobalEventListener(
              "message",
              (({ data: e }) => {
                if (4 === e[12]) {
                  var s = t((e = e[40])[7]);
                  s &&
                    (s.ownerDocument[58] = !1,
                      s.value = e[21],
                      s.ownerDocument[58] = !0);
                }
              }),
            );
        }(this.defaultView),
        function (e) {
          let t = e.document;
          t.addGlobalEventListener &&
            t.addGlobalEventListener(
              "message",
              (({ data: t }) => {
                5 === t[12] && (t = t[40]) &&
                  (e.innerWidth = t[0], e.innerHeight = t[1]);
              }),
            );
        }(this.defaultView);
    }
    64(e, t) {
      switch (t[0]) {
        case 3:
          return new ut(e[t[5]], this, t[7]);
        case 8:
          return new dt(e[t[5]], this, t[7]);
        default:
          let s = e[t[6]] || "http://www.w3.org/1999/xhtml",
            i = e[t[1]],
            r = new (te[`${s}:${i}`] || he)(1, i, s, this, t[7]);
          return (t[2] || []).forEach(
            ((t) =>
              r.setAttributeNS(
                "null" !== e[t[0]]
                  ? e[t[0]]
                  : "http://www.w3.org/1999/xhtml",
                e[t[1]],
                e[t[2]],
              )),
          ),
            (t[4] || []).forEach(((t) => r.appendChild(this[64](e, t)))),
            r;
      }
    }
    createElement(e) {
      return this.createElementNS(
        "http://www.w3.org/1999/xhtml",
        e.toLowerCase(),
      );
    }
    createElementNS(e, t) {
      return new (te[`${e}:${t}`] || he)(1, t, e, this);
    }
    createEvent(e) {
      return new Event(e, { bubbles: !1, cancelable: !1 });
    }
    createTextNode(e) {
      return new ut(e, this);
    }
    createComment(e) {
      return new dt(e, this);
    }
    createDocumentFragment() {
      return new ct(this);
    }
    getElementById(e) {
      return f(this.body, ((t) => t.id === e));
    }
  }
  let mt = 1e3 / 60,
    pt = 0,
    ft = 0,
    wt = [],
    bt = {
      innerWidth: 0,
      innerHeight: 0,
      CharacterData: ot,
      Comment: dt,
      DOMTokenList: H,
      Document: gt,
      DocumentFragment: ct,
      Element: ae,
      HTMLAnchorElement: ue,
      HTMLButtonElement: de,
      HTMLCanvasElement: xe,
      HTMLDataElement: Ne,
      HTMLDataListElement: ht,
      HTMLElement: he,
      HTMLEmbedElement: ye,
      HTMLFieldSetElement: Oe,
      HTMLFormElement: De,
      HTMLIFrameElement: Se,
      HTMLImageElement: Ie,
      HTMLInputElement: Pe,
      HTMLLabelElement: Fe,
      HTMLLinkElement: He,
      HTMLMapElement: ke,
      HTMLMeterElement: Ge,
      HTMLModElement: Be,
      HTMLOListElement: Ue,
      HTMLOptionElement: Ve,
      HTMLProgressElement: qe,
      HTMLQuoteElement: ze,
      HTMLScriptElement: _e,
      HTMLSelectElement: Qe,
      HTMLSourceElement: Je,
      HTMLStyleElement: Ke,
      HTMLTableCellElement: Ze,
      HTMLTableColElement: et,
      HTMLTableElement: st,
      HTMLTableRowElement: nt,
      HTMLTableSectionElement: at,
      HTMLTimeElement: lt,
      SVGElement: oe,
      Text: ut,
      Event: Q,
      MutationObserver: class {
        constructor(e) {
          this[A] = [], this.callback = e;
        }
        observe(e, t) {
          this.disconnect(),
            this.target = e,
            this.options = t || {},
            D.push(this);
        }
        disconnect() {
          this.target = null;
          let e = D.indexOf(this);
          0 <= e && D.splice(e, 1);
        }
        takeRecords() {
          let e = this[42];
          return e.splice(0, e.length);
        }
        pushRecord(e) {
          this[42].push(e);
        }
      },
      requestAnimationFrame: self.requestAnimationFrame || function (e) {
        return 0 === wt.length && function () {
          let e = Date.now(),
            t = Math.round(Math.max(0, mt - (Date.now() - pt)));
          pt = e + t,
            setTimeout(
              (function () {
                for (
                  var e = wt.slice(0), t = wt.length = 0; t < e.length; t++
                ) {
                  if (!e[t].cancelled) {
                    try {
                      e[t].callback(pt);
                    } catch (e) {
                      setTimeout(
                        (function () {
                          throw e;
                        }),
                        0,
                      );
                    }
                  }
                }
              }),
              t,
            );
        }(),
          ft === Number.MAX_SAFE_INTEGER && (ft = 0),
          wt.push({ handle: ++ft, callback: e, cancelled: !1 }),
          ft;
      },
      cancelAnimationFrame: self.cancelAnimationFrame || function (e) {
        for (let t = 0; t < wt.length; t++) {
          if (wt[t].handle === e) {
            wt[t].cancelled = !0;
            break;
          }
        }
      },
    },
    vt = () => {},
    Tt = function (e, t, s) {
      const i = new gt(bt);
      return i.postMessage = e,
        i.addGlobalEventListener = t,
        i.removeGlobalEventListener = s,
        bt.OffscreenCanvas = self.OffscreenCanvas,
        bt.ImageBitmap = self.ImageBitmap,
        i.isConnected = !0,
        i.appendChild(i.body = i.createElement("body")),
        i.defaultView;
    }(
      postMessage.bind(self) || vt,
      addEventListener.bind(self) || vt,
      removeEventListener.bind(self) || vt,
    );
  return e.hydrate = function (e, t, i, r, n, [a, l], h, o) {
    B(r),
      le(n),
      t.forEach(s),
      (i[4] || []).forEach(((s) => e.body.appendChild(e[64](t, s)))),
      (i = e.defaultView).innerWidth = a,
      i.innerHeight = l,
      i.localStorage = c(e, 0, h),
      i.sessionStorage = c(e, 1, o);
  },
    e.workerDOM = Tt,
    e;
}({});
//# sourceMappingURL=worker.mjs.map
