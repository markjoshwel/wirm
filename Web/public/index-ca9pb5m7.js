var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/franken-ui/dist/js/core.iife.js
var require_core_iife = __commonJS((exports, module) => {
  var FRANKENUICORE = function(E) {
    var Dr;
    const Qi = globalThis, ts = Qi.ShadowRoot && (Qi.ShadyCSS === undefined || Qi.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Bs = Symbol(), Xn = new WeakMap;
    let js = class {
      constructor(n, a, h) {
        if (this._$cssResult$ = true, h !== Bs)
          throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = n, this.t = a;
      }
      get styleSheet() {
        let n = this.o;
        const a = this.t;
        if (ts && n === undefined) {
          const h = a !== undefined && a.length === 1;
          h && (n = Xn.get(a)), n === undefined && ((this.o = n = new CSSStyleSheet).replaceSync(this.cssText), h && Xn.set(a, n));
        }
        return n;
      }
      toString() {
        return this.cssText;
      }
    };
    const Qn = (f) => new js(typeof f == "string" ? f : f + "", undefined, Bs), Wa = (f, ...n) => {
      const a = f.length === 1 ? f[0] : n.reduce((h, c, m) => h + ((p) => {
        if (p._$cssResult$ === true)
          return p.cssText;
        if (typeof p == "number")
          return p;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + p + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(c) + f[m + 1], f[0]);
      return new js(a, f, Bs);
    }, tr = (f, n) => {
      if (ts)
        f.adoptedStyleSheets = n.map((a) => a instanceof CSSStyleSheet ? a : a.styleSheet);
      else
        for (const a of n) {
          const h = document.createElement("style"), c = Qi.litNonce;
          c !== undefined && h.setAttribute("nonce", c), h.textContent = a.cssText, f.appendChild(h);
        }
    }, Rs = ts ? (f) => f : (f) => f instanceof CSSStyleSheet ? ((n) => {
      let a = "";
      for (const h of n.cssRules)
        a += h.cssText;
      return Qn(a);
    })(f) : f;
    const { is: qa, defineProperty: Ya, getOwnPropertyDescriptor: Va, getOwnPropertyNames: Ja, getOwnPropertySymbols: Ka, getPrototypeOf: Ga } = Object, ge = globalThis, er = ge.trustedTypes, Za = er ? er.emptyScript : "", zs = ge.reactiveElementPolyfillSupport, bi = (f, n) => f, yi = { toAttribute(f, n) {
      switch (n) {
        case Boolean:
          f = f ? Za : null;
          break;
        case Object:
        case Array:
          f = f == null ? f : JSON.stringify(f);
      }
      return f;
    }, fromAttribute(f, n) {
      let a = f;
      switch (n) {
        case Boolean:
          a = f !== null;
          break;
        case Number:
          a = f === null ? null : Number(f);
          break;
        case Object:
        case Array:
          try {
            a = JSON.parse(f);
          } catch {
            a = null;
          }
      }
      return a;
    } }, es = (f, n) => !qa(f, n), ir = { attribute: true, type: String, converter: yi, reflect: false, hasChanged: es };
    Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), ge.litPropertyMetadata ?? (ge.litPropertyMetadata = new WeakMap);
    let Ae = class extends HTMLElement {
      static addInitializer(n) {
        this._$Ei(), (this.l ?? (this.l = [])).push(n);
      }
      static get observedAttributes() {
        return this.finalize(), this._$Eh && [...this._$Eh.keys()];
      }
      static createProperty(n, a = ir) {
        if (a.state && (a.attribute = false), this._$Ei(), this.elementProperties.set(n, a), !a.noAccessor) {
          const h = Symbol(), c = this.getPropertyDescriptor(n, h, a);
          c !== undefined && Ya(this.prototype, n, c);
        }
      }
      static getPropertyDescriptor(n, a, h) {
        const { get: c, set: m } = Va(this.prototype, n) ?? { get() {
          return this[a];
        }, set(p) {
          this[a] = p;
        } };
        return { get() {
          return c == null ? undefined : c.call(this);
        }, set(p) {
          const k = c == null ? undefined : c.call(this);
          m.call(this, p), this.requestUpdate(n, k, h);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(n) {
        return this.elementProperties.get(n) ?? ir;
      }
      static _$Ei() {
        if (this.hasOwnProperty(bi("elementProperties")))
          return;
        const n = Ga(this);
        n.finalize(), n.l !== undefined && (this.l = [...n.l]), this.elementProperties = new Map(n.elementProperties);
      }
      static finalize() {
        if (this.hasOwnProperty(bi("finalized")))
          return;
        if (this.finalized = true, this._$Ei(), this.hasOwnProperty(bi("properties"))) {
          const a = this.properties, h = [...Ja(a), ...Ka(a)];
          for (const c of h)
            this.createProperty(c, a[c]);
        }
        const n = this[Symbol.metadata];
        if (n !== null) {
          const a = litPropertyMetadata.get(n);
          if (a !== undefined)
            for (const [h, c] of a)
              this.elementProperties.set(h, c);
        }
        this._$Eh = new Map;
        for (const [a, h] of this.elementProperties) {
          const c = this._$Eu(a, h);
          c !== undefined && this._$Eh.set(c, a);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
      }
      static finalizeStyles(n) {
        const a = [];
        if (Array.isArray(n)) {
          const h = new Set(n.flat(1 / 0).reverse());
          for (const c of h)
            a.unshift(Rs(c));
        } else
          n !== undefined && a.push(Rs(n));
        return a;
      }
      static _$Eu(n, a) {
        const h = a.attribute;
        return h === false ? undefined : typeof h == "string" ? h : typeof n == "string" ? n.toLowerCase() : undefined;
      }
      constructor() {
        super(), this._$Ep = undefined, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
      }
      _$Ev() {
        var n;
        this._$ES = new Promise((a) => this.enableUpdating = a), this._$AL = new Map, this._$E_(), this.requestUpdate(), (n = this.constructor.l) == null || n.forEach((a) => a(this));
      }
      addController(n) {
        var a;
        (this._$EO ?? (this._$EO = new Set)).add(n), this.renderRoot !== undefined && this.isConnected && ((a = n.hostConnected) == null || a.call(n));
      }
      removeController(n) {
        var a;
        (a = this._$EO) == null || a.delete(n);
      }
      _$E_() {
        const n = new Map, a = this.constructor.elementProperties;
        for (const h of a.keys())
          this.hasOwnProperty(h) && (n.set(h, this[h]), delete this[h]);
        n.size > 0 && (this._$Ep = n);
      }
      createRenderRoot() {
        const n = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return tr(n, this.constructor.elementStyles), n;
      }
      connectedCallback() {
        var n;
        this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (n = this._$EO) == null || n.forEach((a) => {
          var h;
          return (h = a.hostConnected) == null ? undefined : h.call(a);
        });
      }
      enableUpdating(n) {
      }
      disconnectedCallback() {
        var n;
        (n = this._$EO) == null || n.forEach((a) => {
          var h;
          return (h = a.hostDisconnected) == null ? undefined : h.call(a);
        });
      }
      attributeChangedCallback(n, a, h) {
        this._$AK(n, h);
      }
      _$EC(n, a) {
        var m;
        const h = this.constructor.elementProperties.get(n), c = this.constructor._$Eu(n, h);
        if (c !== undefined && h.reflect === true) {
          const p = (((m = h.converter) == null ? undefined : m.toAttribute) !== undefined ? h.converter : yi).toAttribute(a, h.type);
          this._$Em = n, p == null ? this.removeAttribute(c) : this.setAttribute(c, p), this._$Em = null;
        }
      }
      _$AK(n, a) {
        var m;
        const h = this.constructor, c = h._$Eh.get(n);
        if (c !== undefined && this._$Em !== c) {
          const p = h.getPropertyOptions(c), k = typeof p.converter == "function" ? { fromAttribute: p.converter } : ((m = p.converter) == null ? undefined : m.fromAttribute) !== undefined ? p.converter : yi;
          this._$Em = c, this[c] = k.fromAttribute(a, p.type), this._$Em = null;
        }
      }
      requestUpdate(n, a, h) {
        if (n !== undefined) {
          if (h ?? (h = this.constructor.getPropertyOptions(n)), !(h.hasChanged ?? es)(this[n], a))
            return;
          this.P(n, a, h);
        }
        this.isUpdatePending === false && (this._$ES = this._$ET());
      }
      P(n, a, h) {
        this._$AL.has(n) || this._$AL.set(n, a), h.reflect === true && this._$Em !== n && (this._$Ej ?? (this._$Ej = new Set)).add(n);
      }
      async _$ET() {
        this.isUpdatePending = true;
        try {
          await this._$ES;
        } catch (a) {
          Promise.reject(a);
        }
        const n = this.scheduleUpdate();
        return n != null && await n, !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        var h;
        if (!this.isUpdatePending)
          return;
        if (!this.hasUpdated) {
          if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
            for (const [m, p] of this._$Ep)
              this[m] = p;
            this._$Ep = undefined;
          }
          const c = this.constructor.elementProperties;
          if (c.size > 0)
            for (const [m, p] of c)
              p.wrapped !== true || this._$AL.has(m) || this[m] === undefined || this.P(m, this[m], p);
        }
        let n = false;
        const a = this._$AL;
        try {
          n = this.shouldUpdate(a), n ? (this.willUpdate(a), (h = this._$EO) == null || h.forEach((c) => {
            var m;
            return (m = c.hostUpdate) == null ? undefined : m.call(c);
          }), this.update(a)) : this._$EU();
        } catch (c) {
          throw n = false, this._$EU(), c;
        }
        n && this._$AE(a);
      }
      willUpdate(n) {
      }
      _$AE(n) {
        var a;
        (a = this._$EO) == null || a.forEach((h) => {
          var c;
          return (c = h.hostUpdated) == null ? undefined : c.call(h);
        }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(n)), this.updated(n);
      }
      _$EU() {
        this._$AL = new Map, this.isUpdatePending = false;
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$ES;
      }
      shouldUpdate(n) {
        return true;
      }
      update(n) {
        this._$Ej && (this._$Ej = this._$Ej.forEach((a) => this._$EC(a, this[a]))), this._$EU();
      }
      updated(n) {
      }
      firstUpdated(n) {
      }
    };
    Ae.elementStyles = [], Ae.shadowRootOptions = { mode: "open" }, Ae[bi("elementProperties")] = new Map, Ae[bi("finalized")] = new Map, zs == null || zs({ ReactiveElement: Ae }), (ge.reactiveElementVersions ?? (ge.reactiveElementVersions = [])).push("2.0.4");
    const wi = globalThis, is = wi.trustedTypes, sr = is ? is.createPolicy("lit-html", { createHTML: (f) => f }) : undefined, Us = "$lit$", ne = `lit$${Math.random().toFixed(9).slice(2)}$`, Fs = "?" + ne, Xa = `<${Fs}>`, Ee = document, ki = () => Ee.createComment(""), xi = (f) => f === null || typeof f != "object" && typeof f != "function", nr = Array.isArray, rr = (f) => nr(f) || typeof (f == null ? undefined : f[Symbol.iterator]) == "function", Ws = `[ 	
\f\r]`, Si = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, or = /-->/g, ar = />/g, Ie = RegExp(`>|${Ws}(?:([^\\s"'>=/]+)(${Ws}*=${Ws}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), lr = /'/g, cr = /"/g, hr = /^(?:script|style|textarea|title)$/i, ur = (f) => (n, ...a) => ({ _$litType$: f, strings: n, values: a }), z = ur(1), Qa = ur(2), re = Symbol.for("lit-noChange"), yt = Symbol.for("lit-nothing"), dr = new WeakMap, Ce = Ee.createTreeWalker(Ee, 129);
    function fr(f, n) {
      if (!Array.isArray(f) || !f.hasOwnProperty("raw"))
        throw Error("invalid template strings array");
      return sr !== undefined ? sr.createHTML(n) : n;
    }
    const pr = (f, n) => {
      const a = f.length - 1, h = [];
      let c, m = n === 2 ? "<svg>" : "", p = Si;
      for (let k = 0;k < a; k++) {
        const w = f[k];
        let C, b, I = -1, P = 0;
        for (;P < w.length && (p.lastIndex = P, b = p.exec(w), b !== null); )
          P = p.lastIndex, p === Si ? b[1] === "!--" ? p = or : b[1] !== undefined ? p = ar : b[2] !== undefined ? (hr.test(b[2]) && (c = RegExp("</" + b[2], "g")), p = Ie) : b[3] !== undefined && (p = Ie) : p === Ie ? b[0] === ">" ? (p = c ?? Si, I = -1) : b[1] === undefined ? I = -2 : (I = p.lastIndex - b[2].length, C = b[1], p = b[3] === undefined ? Ie : b[3] === '"' ? cr : lr) : p === cr || p === lr ? p = Ie : p === or || p === ar ? p = Si : (p = Ie, c = undefined);
        const N = p === Ie && f[k + 1].startsWith("/>") ? " " : "";
        m += p === Si ? w + Xa : I >= 0 ? (h.push(C), w.slice(0, I) + Us + w.slice(I) + ne + N) : w + ne + (I === -2 ? k : N);
      }
      return [fr(f, m + (f[a] || "<?>") + (n === 2 ? "</svg>" : "")), h];
    };

    class _i {
      constructor({ strings: n, _$litType$: a }, h) {
        let c;
        this.parts = [];
        let m = 0, p = 0;
        const k = n.length - 1, w = this.parts, [C, b] = pr(n, a);
        if (this.el = _i.createElement(C, h), Ce.currentNode = this.el.content, a === 2) {
          const I = this.el.content.firstChild;
          I.replaceWith(...I.childNodes);
        }
        for (;(c = Ce.nextNode()) !== null && w.length < k; ) {
          if (c.nodeType === 1) {
            if (c.hasAttributes())
              for (const I of c.getAttributeNames())
                if (I.endsWith(Us)) {
                  const P = b[p++], N = c.getAttribute(I).split(ne), Y = /([.?@])?(.*)/.exec(P);
                  w.push({ type: 1, index: m, name: Y[2], strings: N, ctor: Y[1] === "." ? gr : Y[1] === "?" ? vr : Y[1] === "@" ? $r : Ai }), c.removeAttribute(I);
                } else
                  I.startsWith(ne) && (w.push({ type: 6, index: m }), c.removeAttribute(I));
            if (hr.test(c.tagName)) {
              const I = c.textContent.split(ne), P = I.length - 1;
              if (P > 0) {
                c.textContent = is ? is.emptyScript : "";
                for (let N = 0;N < P; N++)
                  c.append(I[N], ki()), Ce.nextNode(), w.push({ type: 2, index: ++m });
                c.append(I[P], ki());
              }
            }
          } else if (c.nodeType === 8)
            if (c.data === Fs)
              w.push({ type: 2, index: m });
            else {
              let I = -1;
              for (;(I = c.data.indexOf(ne, I + 1)) !== -1; )
                w.push({ type: 7, index: m }), I += ne.length - 1;
            }
          m++;
        }
      }
      static createElement(n, a) {
        const h = Ee.createElement("template");
        return h.innerHTML = n, h;
      }
    }
    function Te(f, n, a = f, h) {
      var p, k;
      if (n === re)
        return n;
      let c = h !== undefined ? (p = a._$Co) == null ? undefined : p[h] : a._$Cl;
      const m = xi(n) ? undefined : n._$litDirective$;
      return (c == null ? undefined : c.constructor) !== m && ((k = c == null ? undefined : c._$AO) == null || k.call(c, false), m === undefined ? c = undefined : (c = new m(f), c._$AT(f, a, h)), h !== undefined ? (a._$Co ?? (a._$Co = []))[h] = c : a._$Cl = c), c !== undefined && (n = Te(f, c._$AS(f, n.values), c, h)), n;
    }

    class mr {
      constructor(n, a) {
        this._$AV = [], this._$AN = undefined, this._$AD = n, this._$AM = a;
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      u(n) {
        const { el: { content: a }, parts: h } = this._$AD, c = ((n == null ? undefined : n.creationScope) ?? Ee).importNode(a, true);
        Ce.currentNode = c;
        let m = Ce.nextNode(), p = 0, k = 0, w = h[0];
        for (;w !== undefined; ) {
          if (p === w.index) {
            let C;
            w.type === 2 ? C = new Ge(m, m.nextSibling, this, n) : w.type === 1 ? C = new w.ctor(m, w.name, w.strings, this, n) : w.type === 6 && (C = new br(m, this, n)), this._$AV.push(C), w = h[++k];
          }
          p !== (w == null ? undefined : w.index) && (m = Ce.nextNode(), p++);
        }
        return Ce.currentNode = Ee, c;
      }
      p(n) {
        let a = 0;
        for (const h of this._$AV)
          h !== undefined && (h.strings !== undefined ? (h._$AI(n, h, a), a += h.strings.length - 2) : h._$AI(n[a])), a++;
      }
    }

    class Ge {
      get _$AU() {
        var n;
        return ((n = this._$AM) == null ? undefined : n._$AU) ?? this._$Cv;
      }
      constructor(n, a, h, c) {
        this.type = 2, this._$AH = yt, this._$AN = undefined, this._$AA = n, this._$AB = a, this._$AM = h, this.options = c, this._$Cv = (c == null ? undefined : c.isConnected) ?? true;
      }
      get parentNode() {
        let n = this._$AA.parentNode;
        const a = this._$AM;
        return a !== undefined && (n == null ? undefined : n.nodeType) === 11 && (n = a.parentNode), n;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(n, a = this) {
        n = Te(this, n, a), xi(n) ? n === yt || n == null || n === "" ? (this._$AH !== yt && this._$AR(), this._$AH = yt) : n !== this._$AH && n !== re && this._(n) : n._$litType$ !== undefined ? this.$(n) : n.nodeType !== undefined ? this.T(n) : rr(n) ? this.k(n) : this._(n);
      }
      S(n) {
        return this._$AA.parentNode.insertBefore(n, this._$AB);
      }
      T(n) {
        this._$AH !== n && (this._$AR(), this._$AH = this.S(n));
      }
      _(n) {
        this._$AH !== yt && xi(this._$AH) ? this._$AA.nextSibling.data = n : this.T(Ee.createTextNode(n)), this._$AH = n;
      }
      $(n) {
        var m;
        const { values: a, _$litType$: h } = n, c = typeof h == "number" ? this._$AC(n) : (h.el === undefined && (h.el = _i.createElement(fr(h.h, h.h[0]), this.options)), h);
        if (((m = this._$AH) == null ? undefined : m._$AD) === c)
          this._$AH.p(a);
        else {
          const p = new mr(c, this), k = p.u(this.options);
          p.p(a), this.T(k), this._$AH = p;
        }
      }
      _$AC(n) {
        let a = dr.get(n.strings);
        return a === undefined && dr.set(n.strings, a = new _i(n)), a;
      }
      k(n) {
        nr(this._$AH) || (this._$AH = [], this._$AR());
        const a = this._$AH;
        let h, c = 0;
        for (const m of n)
          c === a.length ? a.push(h = new Ge(this.S(ki()), this.S(ki()), this, this.options)) : h = a[c], h._$AI(m), c++;
        c < a.length && (this._$AR(h && h._$AB.nextSibling, c), a.length = c);
      }
      _$AR(n = this._$AA.nextSibling, a) {
        var h;
        for ((h = this._$AP) == null ? undefined : h.call(this, false, true, a);n && n !== this._$AB; ) {
          const c = n.nextSibling;
          n.remove(), n = c;
        }
      }
      setConnected(n) {
        var a;
        this._$AM === undefined && (this._$Cv = n, (a = this._$AP) == null || a.call(this, n));
      }
    }

    class Ai {
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      constructor(n, a, h, c, m) {
        this.type = 1, this._$AH = yt, this._$AN = undefined, this.element = n, this.name = a, this._$AM = c, this.options = m, h.length > 2 || h[0] !== "" || h[1] !== "" ? (this._$AH = Array(h.length - 1).fill(new String), this.strings = h) : this._$AH = yt;
      }
      _$AI(n, a = this, h, c) {
        const m = this.strings;
        let p = false;
        if (m === undefined)
          n = Te(this, n, a, 0), p = !xi(n) || n !== this._$AH && n !== re, p && (this._$AH = n);
        else {
          const k = n;
          let w, C;
          for (n = m[0], w = 0;w < m.length - 1; w++)
            C = Te(this, k[h + w], a, w), C === re && (C = this._$AH[w]), p || (p = !xi(C) || C !== this._$AH[w]), C === yt ? n = yt : n !== yt && (n += (C ?? "") + m[w + 1]), this._$AH[w] = C;
        }
        p && !c && this.j(n);
      }
      j(n) {
        n === yt ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, n ?? "");
      }
    }

    class gr extends Ai {
      constructor() {
        super(...arguments), this.type = 3;
      }
      j(n) {
        this.element[this.name] = n === yt ? undefined : n;
      }
    }

    class vr extends Ai {
      constructor() {
        super(...arguments), this.type = 4;
      }
      j(n) {
        this.element.toggleAttribute(this.name, !!n && n !== yt);
      }
    }

    class $r extends Ai {
      constructor(n, a, h, c, m) {
        super(n, a, h, c, m), this.type = 5;
      }
      _$AI(n, a = this) {
        if ((n = Te(this, n, a, 0) ?? yt) === re)
          return;
        const h = this._$AH, c = n === yt && h !== yt || n.capture !== h.capture || n.once !== h.once || n.passive !== h.passive, m = n !== yt && (h === yt || c);
        c && this.element.removeEventListener(this.name, this, h), m && this.element.addEventListener(this.name, this, n), this._$AH = n;
      }
      handleEvent(n) {
        var a;
        typeof this._$AH == "function" ? this._$AH.call(((a = this.options) == null ? undefined : a.host) ?? this.element, n) : this._$AH.handleEvent(n);
      }
    }

    class br {
      constructor(n, a, h) {
        this.element = n, this.type = 6, this._$AN = undefined, this._$AM = a, this.options = h;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(n) {
        Te(this, n);
      }
    }
    const yr = { P: Us, A: ne, C: Fs, M: 1, L: pr, R: mr, D: rr, V: Te, I: Ge, H: Ai, N: vr, U: $r, B: gr, F: br }, qs = wi.litHtmlPolyfillSupport;
    qs == null || qs(_i, Ge), (wi.litHtmlVersions ?? (wi.litHtmlVersions = [])).push("3.1.4");
    const wr = (f, n, a) => {
      const h = (a == null ? undefined : a.renderBefore) ?? n;
      let c = h._$litPart$;
      if (c === undefined) {
        const m = (a == null ? undefined : a.renderBefore) ?? null;
        h._$litPart$ = c = new Ge(n.insertBefore(ki(), m), m, undefined, a ?? {});
      }
      return c._$AI(f), c;
    };
    let Oe = class extends Ae {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this._$Do = undefined;
      }
      createRenderRoot() {
        var a;
        const n = super.createRenderRoot();
        return (a = this.renderOptions).renderBefore ?? (a.renderBefore = n.firstChild), n;
      }
      update(n) {
        const a = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(n), this._$Do = wr(a, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        var n;
        super.connectedCallback(), (n = this._$Do) == null || n.setConnected(true);
      }
      disconnectedCallback() {
        var n;
        super.disconnectedCallback(), (n = this._$Do) == null || n.setConnected(false);
      }
      render() {
        return re;
      }
    };
    Oe._$litElement$ = true, Oe.finalized = true, (Dr = globalThis.litElementHydrateSupport) == null || Dr.call(globalThis, { LitElement: Oe });
    const Ys = globalThis.litElementPolyfillSupport;
    Ys == null || Ys({ LitElement: Oe });
    const tl = { _$AK: (f, n, a) => {
      f._$AK(n, a);
    }, _$AL: (f) => f._$AL };
    (globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.6");
    const el = Object.freeze(Object.defineProperty({ __proto__: null, CSSResult: js, LitElement: Oe, ReactiveElement: Ae, _$LE: tl, _$LH: yr, adoptStyles: tr, css: Wa, defaultConverter: yi, getCompatibleStyle: Rs, html: z, isServer: false, noChange: re, notEqual: es, nothing: yt, render: wr, supportsAdoptingStyleSheets: ts, svg: Qa, unsafeCSS: Qn }, Symbol.toStringTag, { value: "Module" }));
    const oe = (f) => (n, a) => {
      a !== undefined ? a.addInitializer(() => {
        customElements.define(f, n);
      }) : customElements.define(f, n);
    };
    const il = { attribute: true, type: String, converter: yi, reflect: false, hasChanged: es }, kr = (f = il, n, a) => {
      const { kind: h, metadata: c } = a;
      let m = globalThis.litPropertyMetadata.get(c);
      if (m === undefined && globalThis.litPropertyMetadata.set(c, m = new Map), m.set(a.name, f), h === "accessor") {
        const { name: p } = a;
        return { set(k) {
          const w = n.get.call(this);
          n.set.call(this, k), this.requestUpdate(p, w, f);
        }, init(k) {
          return k !== undefined && this.P(p, undefined, f), k;
        } };
      }
      if (h === "setter") {
        const { name: p } = a;
        return function(k) {
          const w = this[p];
          n.call(this, k), this.requestUpdate(p, w, f);
        };
      }
      throw Error("Unsupported decorator location: " + h);
    };
    function j(f) {
      return (n, a) => typeof a == "object" ? kr(f, n, a) : ((h, c, m) => {
        const p = c.hasOwnProperty(m);
        return c.constructor.createProperty(m, p ? { ...h, wrapped: true } : h), p ? Object.getOwnPropertyDescriptor(c, m) : undefined;
      })(f, n, a);
    }
    function X(f) {
      return j({ ...f, state: true, attribute: false });
    }
    function sl(f) {
      return (n, a) => {
        const h = typeof n == "function" ? n : n[a];
        Object.assign(h, f);
      };
    }
    const Ze = (f, n, a) => (a.configurable = true, a.enumerable = true, Reflect.decorate && typeof n != "object" && Object.defineProperty(f, n, a), a);
    function nl(f, n) {
      return (a, h, c) => {
        const m = (p) => {
          var k;
          return ((k = p.renderRoot) == null ? undefined : k.querySelector(f)) ?? null;
        };
        if (n) {
          const { get: p, set: k } = typeof h == "object" ? a : c ?? (() => {
            const w = Symbol();
            return { get() {
              return this[w];
            }, set(C) {
              this[w] = C;
            } };
          })();
          return Ze(a, h, { get() {
            let w = p.call(this);
            return w === undefined && (w = m(this), (w !== null || this.hasUpdated) && k.call(this, w)), w;
          } });
        }
        return Ze(a, h, { get() {
          return m(this);
        } });
      };
    }
    let rl;
    function ol(f) {
      return (n, a) => Ze(n, a, { get() {
        return (this.renderRoot ?? rl ?? (rl = document.createDocumentFragment())).querySelectorAll(f);
      } });
    }
    function al(f) {
      return (n, a) => Ze(n, a, { async get() {
        var h;
        return await this.updateComplete, ((h = this.renderRoot) == null ? undefined : h.querySelector(f)) ?? null;
      } });
    }
    function ll(f) {
      return (n, a) => {
        const { slot: h, selector: c } = f ?? {}, m = "slot" + (h ? `[name=${h}]` : ":not([name])");
        return Ze(n, a, { get() {
          var w;
          const p = (w = this.renderRoot) == null ? undefined : w.querySelector(m), k = (p == null ? undefined : p.assignedElements(f)) ?? [];
          return c === undefined ? k : k.filter((C) => C.matches(c));
        } });
      };
    }
    function cl(f) {
      return (n, a) => {
        const { slot: h } = f ?? {}, c = "slot" + (h ? `[name=${h}]` : ":not([name])");
        return Ze(n, a, { get() {
          var p;
          const m = (p = this.renderRoot) == null ? undefined : p.querySelector(c);
          return (m == null ? undefined : m.assignedNodes(f)) ?? [];
        } });
      };
    }
    const hl = Object.freeze(Object.defineProperty({ __proto__: null, customElement: oe, eventOptions: sl, property: j, query: nl, queryAll: ol, queryAssignedElements: ll, queryAssignedNodes: cl, queryAsync: al, standardProperty: kr, state: X }, Symbol.toStringTag, { value: "Module" }));
    const xr = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, Sr = (f) => (...n) => ({ _$litDirective$: f, values: n });

    class _r {
      constructor(n) {
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AT(n, a, h) {
        this._$Ct = n, this._$AM = a, this._$Ci = h;
      }
      _$AS(n, a) {
        return this.update(n, a);
      }
      update(n, a) {
        return this.render(...a);
      }
    }
    const { I: ul } = yr, Ar = () => document.createComment(""), Ei = (f, n, a) => {
      var m;
      const h = f._$AA.parentNode, c = n === undefined ? f._$AB : n._$AA;
      if (a === undefined) {
        const p = h.insertBefore(Ar(), c), k = h.insertBefore(Ar(), c);
        a = new ul(p, k, f, f.options);
      } else {
        const p = a._$AB.nextSibling, k = a._$AM, w = k !== f;
        if (w) {
          let C;
          (m = a._$AQ) == null || m.call(a, f), a._$AM = f, a._$AP !== undefined && (C = f._$AU) !== k._$AU && a._$AP(C);
        }
        if (p !== c || w) {
          let C = a._$AA;
          for (;C !== p; ) {
            const b = C.nextSibling;
            h.insertBefore(C, c), C = b;
          }
        }
      }
      return a;
    }, De = (f, n, a = f) => (f._$AI(n, a), f), dl = {}, fl = (f, n = dl) => f._$AH = n, pl = (f) => f._$AH, Vs = (f) => {
      var h;
      (h = f._$AP) == null || h.call(f, false, true);
      let n = f._$AA;
      const a = f._$AB.nextSibling;
      for (;n !== a; ) {
        const c = n.nextSibling;
        n.remove(), n = c;
      }
    };
    const Er = (f, n, a) => {
      const h = new Map;
      for (let c = n;c <= a; c++)
        h.set(f[c], c);
      return h;
    }, Pe = Sr(class extends _r {
      constructor(f) {
        if (super(f), f.type !== xr.CHILD)
          throw Error("repeat() can only be used in text expressions");
      }
      dt(f, n, a) {
        let h;
        a === undefined ? a = n : n !== undefined && (h = n);
        const c = [], m = [];
        let p = 0;
        for (const k of f)
          c[p] = h ? h(k, p) : p, m[p] = a(k, p), p++;
        return { values: m, keys: c };
      }
      render(f, n, a) {
        return this.dt(f, n, a).values;
      }
      update(f, [n, a, h]) {
        const c = pl(f), { values: m, keys: p } = this.dt(n, a, h);
        if (!Array.isArray(c))
          return this.ut = p, m;
        const k = this.ut ?? (this.ut = []), w = [];
        let C, b, I = 0, P = c.length - 1, N = 0, Y = m.length - 1;
        for (;I <= P && N <= Y; )
          if (c[I] === null)
            I++;
          else if (c[P] === null)
            P--;
          else if (k[I] === p[N])
            w[N] = De(c[I], m[N]), I++, N++;
          else if (k[P] === p[Y])
            w[Y] = De(c[P], m[Y]), P--, Y--;
          else if (k[I] === p[Y])
            w[Y] = De(c[I], m[Y]), Ei(f, w[Y + 1], c[I]), I++, Y--;
          else if (k[P] === p[N])
            w[N] = De(c[P], m[N]), Ei(f, c[I], c[P]), P--, N++;
          else if (C === undefined && (C = Er(p, N, Y), b = Er(k, I, P)), C.has(k[I]))
            if (C.has(k[P])) {
              const rt = b.get(p[N]), Dt = rt !== undefined ? c[rt] : null;
              if (Dt === null) {
                const te = Ei(f, c[I]);
                De(te, m[N]), w[N] = te;
              } else
                w[N] = De(Dt, m[N]), Ei(f, c[I], Dt), c[rt] = null;
              N++;
            } else
              Vs(c[P]), P--;
          else
            Vs(c[I]), I++;
        for (;N <= Y; ) {
          const rt = Ei(f, w[Y + 1]);
          De(rt, m[N]), w[N++] = rt;
        }
        for (;I <= P; ) {
          const rt = c[I++];
          rt !== null && Vs(rt);
        }
        return this.ut = p, fl(f, w), re;
      }
    });

    class Js extends _r {
      constructor(n) {
        if (super(n), this.it = yt, n.type !== xr.CHILD)
          throw Error(this.constructor.directiveName + "() can only be used in child bindings");
      }
      render(n) {
        if (n === yt || n == null)
          return this._t = undefined, this.it = n;
        if (n === re)
          return n;
        if (typeof n != "string")
          throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (n === this.it)
          return this._t;
        this.it = n;
        const a = [n];
        return a.raw = a, this._t = { _$litType$: this.constructor.resultType, strings: a, values: [] };
      }
    }
    Js.directiveName = "unsafeHTML", Js.resultType = 1;
    const ml = Sr(Js);
    (function(f, n) {
      typeof E == "object" && typeof module < "u" ? module.exports = n() : typeof define == "function" && define.amd ? define("uikit", n) : (f = typeof globalThis < "u" ? globalThis : f || self, f.UIkit = n());
    })(undefined, function() {
      const { hasOwnProperty: f, toString: n } = Object.prototype;
      function a(t, e) {
        return f.call(t, e);
      }
      const h = /\B([A-Z])/g, c = Ft((t) => t.replace(h, "-$1").toLowerCase()), m = /-(\w)/g, p = Ft((t) => (t.charAt(0).toLowerCase() + t.slice(1)).replace(m, (e, i) => i.toUpperCase())), k = Ft((t) => t.charAt(0).toUpperCase() + t.slice(1));
      function w(t, e) {
        var i;
        return (i = t == null ? undefined : t.startsWith) == null ? undefined : i.call(t, e);
      }
      function C(t, e) {
        var i;
        return (i = t == null ? undefined : t.endsWith) == null ? undefined : i.call(t, e);
      }
      function b(t, e) {
        var i;
        return (i = t == null ? undefined : t.includes) == null ? undefined : i.call(t, e);
      }
      function I(t, e) {
        var i;
        return (i = t == null ? undefined : t.findIndex) == null ? undefined : i.call(t, e);
      }
      const { isArray: P, from: N } = Array, { assign: Y } = Object;
      function rt(t) {
        return typeof t == "function";
      }
      function Dt(t) {
        return t !== null && typeof t == "object";
      }
      function te(t) {
        return n.call(t) === "[object Object]";
      }
      function ii(t) {
        return Dt(t) && t === t.window;
      }
      function le(t) {
        return Jt(t) === 9;
      }
      function He(t) {
        return Jt(t) >= 1;
      }
      function zt(t) {
        return Jt(t) === 1;
      }
      function Jt(t) {
        return !ii(t) && Dt(t) && t.nodeType;
      }
      function ce(t) {
        return typeof t == "boolean";
      }
      function ht(t) {
        return typeof t == "string";
      }
      function ee(t) {
        return typeof t == "number";
      }
      function at(t) {
        return ee(t) || ht(t) && !isNaN(t - parseFloat(t));
      }
      function Q(t) {
        return !(P(t) ? t.length : Dt(t) && Object.keys(t).length);
      }
      function vt(t) {
        return t === undefined;
      }
      function si(t) {
        return ce(t) ? t : t === "true" || t === "1" || t === "" ? true : t === "false" || t === "0" ? false : t;
      }
      function L(t) {
        const e = Number(t);
        return isNaN(e) ? false : e;
      }
      function x(t) {
        return parseFloat(t) || 0;
      }
      function S(t) {
        return t && _(t)[0];
      }
      function _(t) {
        return He(t) ? [t] : Array.from(t || []).filter(He);
      }
      function T(t) {
        if (ii(t))
          return t;
        t = S(t);
        const e = le(t) ? t : t == null ? undefined : t.ownerDocument;
        return (e == null ? undefined : e.defaultView) || window;
      }
      function R(t, e) {
        return t === e || Dt(t) && Dt(e) && Object.keys(t).length === Object.keys(e).length && lt(t, (i, s) => i === e[s]);
      }
      function U(t, e, i) {
        return t.replace(new RegExp(`${e}|${i}`, "g"), (s) => s === e ? i : e);
      }
      function K(t) {
        return t[t.length - 1];
      }
      function lt(t, e) {
        for (const i in t)
          if (e(t[i], i) === false)
            return false;
        return true;
      }
      function wt(t, e) {
        return t.slice().sort(({ [e]: i = 0 }, { [e]: s = 0 }) => i > s ? 1 : s > i ? -1 : 0);
      }
      function dt(t, e) {
        return t.reduce((i, s) => i + x(rt(e) ? e(s) : s[e]), 0);
      }
      function Ot(t, e) {
        const i = new Set;
        return t.filter(({ [e]: s }) => i.has(s) ? false : i.add(s));
      }
      function ie(t, e) {
        return e.reduce((i, s) => ({ ...i, [s]: t[s] }), {});
      }
      function ft(t, e = 0, i = 1) {
        return Math.min(Math.max(L(t) || 0, e), i);
      }
      function ut() {
      }
      function Kt(...t) {
        return [["bottom", "top"], ["right", "left"]].every(([e, i]) => Math.min(...t.map(({ [e]: s }) => s)) - Math.max(...t.map(({ [i]: s }) => s)) > 0);
      }
      function kt(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
      }
      function Ut(t, e, i) {
        const s = e === "width" ? "height" : "width";
        return { [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s], [e]: i };
      }
      function ve(t, e) {
        t = { ...t };
        for (const i in t)
          t = t[i] > e[i] ? Ut(t, i, e[i]) : t;
        return t;
      }
      function ni(t, e) {
        t = ve(t, e);
        for (const i in t)
          t = t[i] < e[i] ? Ut(t, i, e[i]) : t;
        return t;
      }
      const Zs = { ratio: Ut, contain: ve, cover: ni };
      function Ht(t, e, i = 0, s = false) {
        e = _(e);
        const { length: r } = e;
        return r ? (t = at(t) ? L(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? r - 1 : e.indexOf(S(t)), s ? ft(t, 0, r - 1) : (t %= r, t < 0 ? t + r : t)) : -1;
      }
      function Ft(t) {
        const e = Object.create(null);
        return (i, ...s) => e[i] || (e[i] = t(i, ...s));
      }
      function V(t, ...e) {
        for (const i of _(t)) {
          const s = Ne(e).filter((r) => !W(i, r));
          s.length && i.classList.add(...s);
        }
      }
      function ot(t, ...e) {
        for (const i of _(t)) {
          const s = Ne(e).filter((r) => W(i, r));
          s.length && i.classList.remove(...s);
        }
      }
      function Xs(t, e, i) {
        i = Ne(i), e = Ne(e).filter((s) => !b(i, s)), ot(t, e), V(t, i);
      }
      function W(t, e) {
        return [e] = Ne(e), _(t).some((i) => i.classList.contains(e));
      }
      function mt(t, e, i) {
        const s = Ne(e);
        vt(i) || (i = !!i);
        for (const r of _(t))
          for (const o of s)
            r.classList.toggle(o, i);
      }
      function Ne(t) {
        return t ? P(t) ? t.map(Ne).flat() : String(t).split(" ").filter(Boolean) : [];
      }
      function O(t, e, i) {
        var s;
        if (Dt(e)) {
          for (const r in e)
            O(t, r, e[r]);
          return;
        }
        if (vt(i))
          return (s = S(t)) == null ? undefined : s.getAttribute(e);
        for (const r of _(t))
          rt(i) && (i = i.call(r, O(r, e))), i === null ? Ci(r, e) : r.setAttribute(e, i);
      }
      function $e(t, e) {
        return _(t).some((i) => i.hasAttribute(e));
      }
      function Ci(t, e) {
        _(t).forEach((i) => i.removeAttribute(e));
      }
      function It(t, e) {
        for (const i of [e, `data-${e}`])
          if ($e(t, i))
            return O(t, i);
      }
      const Le = typeof window < "u", xt = Le && document.dir === "rtl", ri = Le && "ontouchstart" in window, oi = Le && window.PointerEvent, Wt = oi ? "pointerdown" : ri ? "touchstart" : "mousedown", os = oi ? "pointermove" : ri ? "touchmove" : "mousemove", be = oi ? "pointerup" : ri ? "touchend" : "mouseup", Be = oi ? "pointerenter" : ri ? "" : "mouseenter", ai = oi ? "pointerleave" : ri ? "" : "mouseleave", as = oi ? "pointercancel" : "touchcancel", Ul = { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
      function Qs(t) {
        return _(t).some((e) => Ul[e.tagName.toLowerCase()]);
      }
      const Fl = Le && Element.prototype.checkVisibility || function() {
        return this.offsetWidth || this.offsetHeight || this.getClientRects().length;
      };
      function St(t) {
        return _(t).some((e) => Fl.call(e));
      }
      const Ti = "input,select,textarea,button";
      function ls(t) {
        return _(t).some((e) => tt(e, Ti));
      }
      const Oi = `${Ti},a[href],[tabindex]`;
      function cs(t) {
        return tt(t, Oi);
      }
      function it(t) {
        var e;
        return (e = S(t)) == null ? undefined : e.parentElement;
      }
      function Di(t, e) {
        return _(t).filter((i) => tt(i, e));
      }
      function tt(t, e) {
        return _(t).some((i) => i.matches(e));
      }
      function li(t, e) {
        const i = [];
        for (;t = it(t); )
          (!e || tt(t, e)) && i.push(t);
        return i;
      }
      function st(t, e) {
        t = S(t);
        const i = t ? N(t.children) : [];
        return e ? Di(i, e) : i;
      }
      function he(t, e) {
        return e ? _(t).indexOf(S(e)) : st(it(t)).indexOf(t);
      }
      function ci(t) {
        return t = S(t), t && ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
      }
      function tn(t) {
        if (ci(t)) {
          const { hash: e, ownerDocument: i } = S(t), s = decodeURIComponent(e).slice(1);
          return s ? i.getElementById(s) || i.getElementsByName(s)[0] : i.documentElement;
        }
      }
      function qt(t, e) {
        return en(t, Pr(t, e));
      }
      function Pi(t, e) {
        return Mi(t, Pr(t, e));
      }
      function en(t, e) {
        return S(Nr(t, S(e), "querySelector"));
      }
      function Mi(t, e) {
        return _(Nr(t, S(e), "querySelectorAll"));
      }
      function Pr(t, e = document) {
        return le(e) || Mr(t).isContextSelector ? e : e.ownerDocument;
      }
      const Wl = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, ql = /(\([^)]*\)|[^,])+/g, Mr = Ft((t) => {
        let e = false;
        if (!t || !ht(t))
          return {};
        const i = [];
        for (let s of t.match(ql))
          s = s.trim().replace(Wl, "$1 *"), e || (e = ["!", "+", "~", "-", ">"].includes(s[0])), i.push(s);
        return { selector: i.join(","), selectors: i, isContextSelector: e };
      }), Yl = /(\([^)]*\)|\S)*/, Hr = Ft((t) => {
        t = t.slice(1).trim();
        const [e] = t.match(Yl);
        return [e, t.slice(e.length + 1)];
      });
      function Nr(t, e = document, i) {
        const s = Mr(t);
        if (!s.isContextSelector)
          return s.selector ? sn(e, i, s.selector) : t;
        t = "";
        const r = s.selectors.length === 1;
        for (let o of s.selectors) {
          let l, u = e;
          if (o[0] === "!" && ([l, o] = Hr(o), u = e.parentElement.closest(l), !o && r) || u && o[0] === "-" && ([l, o] = Hr(o), u = u.previousElementSibling, u = tt(u, l) ? u : null, !o && r))
            return u;
          if (u) {
            if (r)
              return o[0] === "~" || o[0] === "+" ? (o = `:scope > :nth-child(${he(u) + 1}) ${o}`, u = u.parentElement) : o[0] === ">" && (o = `:scope ${o}`), sn(u, i, o);
            t += `${t ? "," : ""}${Vl(u)} ${o}`;
          }
        }
        return le(e) || (e = e.ownerDocument), sn(e, i, t);
      }
      function sn(t, e, i) {
        try {
          return t[e](i);
        } catch {
          return null;
        }
      }
      function Vl(t) {
        const e = [];
        for (;t.parentNode; ) {
          const i = O(t, "id");
          if (i) {
            e.unshift(`#${nn(i)}`);
            break;
          } else {
            let { tagName: s } = t;
            s !== "HTML" && (s += `:nth-child(${he(t) + 1})`), e.unshift(s), t = t.parentNode;
          }
        }
        return e.join(" > ");
      }
      function nn(t) {
        return ht(t) ? CSS.escape(t) : "";
      }
      function J(...t) {
        let [e, i, s, r, o = false] = rn(t);
        r.length > 1 && (r = Kl(r)), o != null && o.self && (r = Gl(r)), s && (r = Jl(s, r));
        for (const l of i)
          for (const u of e)
            u.addEventListener(l, r, o);
        return () => je(e, i, r, o);
      }
      function je(...t) {
        let [e, i, , s, r = false] = rn(t);
        for (const o of i)
          for (const l of e)
            l.removeEventListener(o, s, r);
      }
      function gt(...t) {
        const [e, i, s, r, o = false, l] = rn(t), u = J(e, i, s, (d) => {
          const v = !l || l(d);
          v && (u(), r(d, v));
        }, o);
        return u;
      }
      function M(t, e, i) {
        return on(t).every((s) => s.dispatchEvent(hi(e, true, true, i)));
      }
      function hi(t, e = true, i = false, s) {
        return ht(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: i, detail: s })), t;
      }
      function rn(t) {
        return t[0] = on(t[0]), ht(t[1]) && (t[1] = t[1].split(" ")), rt(t[2]) && t.splice(2, 0, false), t;
      }
      function Jl(t, e) {
        return (i) => {
          const s = t[0] === ">" ? Mi(t, i.currentTarget).reverse().find((r) => r.contains(i.target)) : i.target.closest(t);
          s && (i.current = s, e.call(this, i), delete i.current);
        };
      }
      function Kl(t) {
        return (e) => P(e.detail) ? t(e, ...e.detail) : t(e);
      }
      function Gl(t) {
        return function(e) {
          if (e.target === e.currentTarget || e.target === e.current)
            return t.call(null, e);
        };
      }
      function Lr(t) {
        return t && "addEventListener" in t;
      }
      function Zl(t) {
        return Lr(t) ? t : S(t);
      }
      function on(t) {
        return P(t) ? t.map(Zl).filter(Boolean) : ht(t) ? Mi(t) : Lr(t) ? [t] : _(t);
      }
      function Gt(t) {
        return t.pointerType === "touch" || !!t.touches;
      }
      function ue(t) {
        var e, i;
        const { clientX: s, clientY: r } = ((e = t.touches) == null ? undefined : e[0]) || ((i = t.changedTouches) == null ? undefined : i[0]) || t;
        return { x: s, y: r };
      }
      const Xl = { "animation-iteration-count": true, "column-count": true, "fill-opacity": true, "flex-grow": true, "flex-shrink": true, "font-weight": true, "line-height": true, opacity: true, order: true, orphans: true, "stroke-dasharray": true, "stroke-dashoffset": true, widows: true, "z-index": true, zoom: true };
      function g(t, e, i, s) {
        const r = _(t);
        for (const o of r)
          if (ht(e)) {
            if (e = hs(e), vt(i))
              return getComputedStyle(o).getPropertyValue(e);
            o.style.setProperty(e, at(i) && !Xl[e] ? `${i}px` : i || ee(i) ? i : "", s);
          } else if (P(e)) {
            const l = {};
            for (const u of e)
              l[u] = g(o, u);
            return l;
          } else if (Dt(e))
            for (const l in e)
              g(o, l, e[l], i);
        return r[0];
      }
      const hs = Ft((t) => {
        if (w(t, "--"))
          return t;
        t = c(t);
        const { style: e } = document.documentElement;
        if (t in e)
          return t;
        for (const i of ["webkit", "moz"]) {
          const s = `-${i}-${t}`;
          if (s in e)
            return s;
        }
      }), an = "uk-transition", ln = "transitionend", cn = "transitioncanceled";
      function Ql(t, e, i = 400, s = "linear") {
        return i = Math.round(i), Promise.all(_(t).map((r) => new Promise((o, l) => {
          for (const d in e)
            g(r, d);
          const u = setTimeout(() => M(r, ln), i);
          gt(r, [ln, cn], ({ type: d }) => {
            clearTimeout(u), ot(r, an), g(r, { transitionProperty: "", transitionDuration: "", transitionTimingFunction: "" }), d === cn ? l() : o(r);
          }, { self: true }), V(r, an), g(r, { transitionProperty: Object.keys(e).map(hs).join(","), transitionDuration: `${i}ms`, transitionTimingFunction: s, ...e });
        })));
      }
      const nt = { start: Ql, async stop(t) {
        M(t, ln), await Promise.resolve();
      }, async cancel(t) {
        M(t, cn), await Promise.resolve();
      }, inProgress(t) {
        return W(t, an);
      } }, Hi = "uk-anmt", Br = "animationend", us = "animationcanceled";
      function jr(t, e, i = 200, s, r) {
        return Promise.all(_(t).map((o) => new Promise((l, u) => {
          W(o, Hi) && M(o, us);
          const d = [e, Hi, `${Hi}-${r ? "leave" : "enter"}`, s && `uk-transform-origin-${s}`, r && `${Hi}-reverse`], v = setTimeout(() => M(o, Br), i);
          gt(o, [Br, us], ({ type: $ }) => {
            clearTimeout(v), $ === us ? u() : l(o), g(o, "animationDuration", ""), ot(o, d);
          }, { self: true }), g(o, "animationDuration", `${i}ms`), V(o, d);
        })));
      }
      const ye = { in: jr, out(t, e, i, s) {
        return jr(t, e, i, s, true);
      }, inProgress(t) {
        return W(t, Hi);
      }, cancel(t) {
        M(t, us);
      } };
      function tc(t) {
        if (document.readyState !== "loading") {
          t();
          return;
        }
        gt(document, "DOMContentLoaded", t);
      }
      function pt(t, ...e) {
        return e.some((i) => {
          var s;
          return ((s = t == null ? undefined : t.tagName) == null ? undefined : s.toLowerCase()) === i.toLowerCase();
        });
      }
      function Rr(t) {
        return t = F(t), t && (t.innerHTML = ""), t;
      }
      function de(t, e) {
        return vt(e) ? F(t).innerHTML : $t(Rr(t), e);
      }
      const ec = ps("prepend"), $t = ps("append"), ds = ps("before"), fs = ps("after");
      function ps(t) {
        return function(e, i) {
          var s;
          const r = _(ht(i) ? fe(i) : i);
          return (s = F(e)) == null || s[t](...r), zr(r);
        };
      }
      function Ct(t) {
        _(t).forEach((e) => e.remove());
      }
      function Ni(t, e) {
        for (e = S(ds(t, e));e.firstElementChild; )
          e = e.firstElementChild;
        return $t(e, t), e;
      }
      function hn(t, e) {
        return _(_(t).map((i) => i.hasChildNodes() ? Ni(N(i.childNodes), e) : $t(i, e)));
      }
      function Li(t) {
        _(t).map(it).filter((e, i, s) => s.indexOf(e) === i).forEach((e) => e.replaceWith(...e.childNodes));
      }
      const ic = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
      function fe(t) {
        const e = ic.exec(t);
        if (e)
          return document.createElement(e[1]);
        const i = document.createElement("template");
        return i.innerHTML = t.trim(), zr(i.content.childNodes);
      }
      function zr(t) {
        return t.length > 1 ? t : t[0];
      }
      function we(t, e) {
        if (zt(t))
          for (e(t), t = t.firstElementChild;t; )
            we(t, e), t = t.nextElementSibling;
      }
      function F(t, e) {
        return Ur(t) ? S(fe(t)) : en(t, e);
      }
      function ct(t, e) {
        return Ur(t) ? _(fe(t)) : Mi(t, e);
      }
      function Ur(t) {
        return ht(t) && w(t.trim(), "<");
      }
      const Re = { width: ["left", "right"], height: ["top", "bottom"] };
      function H(t) {
        const e = zt(t) ? S(t).getBoundingClientRect() : { height: Pt(t), width: ms(t), top: 0, left: 0 };
        return { height: e.height, width: e.width, top: e.top, left: e.left, bottom: e.top + e.height, right: e.left + e.width };
      }
      function G(t, e) {
        e && g(t, { left: 0, top: 0 });
        const i = H(t);
        if (t) {
          const { scrollY: s, scrollX: r } = T(t), o = { height: s, width: r };
          for (const l in Re)
            for (const u of Re[l])
              i[u] += o[l];
        }
        if (!e)
          return i;
        for (const s of ["left", "top"])
          g(t, s, e[s] - i[s]);
      }
      function un(t) {
        let { top: e, left: i } = G(t);
        const { ownerDocument: { body: s, documentElement: r }, offsetParent: o } = S(t);
        let l = o || r;
        for (;l && (l === s || l === r) && g(l, "position") === "static"; )
          l = l.parentNode;
        if (zt(l)) {
          const u = G(l);
          e -= u.top + x(g(l, "borderTopWidth")), i -= u.left + x(g(l, "borderLeftWidth"));
        }
        return { top: e - x(g(t, "marginTop")), left: i - x(g(t, "marginLeft")) };
      }
      function Bi(t) {
        t = S(t);
        const e = [t.offsetTop, t.offsetLeft];
        for (;t = t.offsetParent; )
          if (e[0] += t.offsetTop + x(g(t, "borderTopWidth")), e[1] += t.offsetLeft + x(g(t, "borderLeftWidth")), g(t, "position") === "fixed") {
            const i = T(t);
            return e[0] += i.scrollY, e[1] += i.scrollX, e;
          }
        return e;
      }
      const Pt = Fr("height"), ms = Fr("width");
      function Fr(t) {
        const e = k(t);
        return (i, s) => {
          if (vt(s)) {
            if (ii(i))
              return i[`inner${e}`];
            if (le(i)) {
              const r = i.documentElement;
              return Math.max(r[`offset${e}`], r[`scroll${e}`]);
            }
            return i = S(i), s = g(i, t), s = s === "auto" ? i[`offset${e}`] : x(s) || 0, s - dn(i, t);
          } else
            return g(i, t, !s && s !== 0 ? "" : +s + dn(i, t) + "px");
        };
      }
      function dn(t, e, i = "border-box") {
        return g(t, "boxSizing") === i ? dt(Re[e], (s) => x(g(t, `padding-${s}`)) + x(g(t, `border-${s}-width`))) : 0;
      }
      function gs(t) {
        for (const e in Re)
          for (const i in Re[e])
            if (Re[e][i] === t)
              return Re[e][1 - i];
        return t;
      }
      function At(t, e = "width", i = window, s = false) {
        return ht(t) ? dt(nc(t), (r) => {
          const o = oc(r);
          return o ? ac(o === "vh" ? lc() : o === "vw" ? ms(T(i)) : s ? i[`offset${k(e)}`] : H(i)[e], r) : r;
        }) : x(t);
      }
      const sc = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, nc = Ft((t) => t.toString().replace(/\s/g, "").match(sc) || []), rc = /(?:v[hw]|%)$/, oc = Ft((t) => (t.match(rc) || [])[0]);
      function ac(t, e) {
        return t * x(e) / 100;
      }
      let ji, ui;
      function lc() {
        return ji || (ui || (ui = F("<div>"), g(ui, { height: "100vh", position: "fixed" }), J(window, "resize", () => ji = null)), $t(document.body, ui), ji = ui.clientHeight, Ct(ui), ji);
      }
      const ke = { read: cc, write: hc, clear: uc, flush: Wr }, vs = [], $s = [];
      function cc(t) {
        return vs.push(t), pn(), t;
      }
      function hc(t) {
        return $s.push(t), pn(), t;
      }
      function uc(t) {
        Yr(vs, t), Yr($s, t);
      }
      let fn = false;
      function Wr() {
        qr(vs), qr($s.splice(0)), fn = false, (vs.length || $s.length) && pn();
      }
      function pn() {
        fn || (fn = true, queueMicrotask(Wr));
      }
      function qr(t) {
        let e;
        for (;e = t.shift(); )
          try {
            e();
          } catch (i) {
            console.error(i);
          }
      }
      function Yr(t, e) {
        const i = t.indexOf(e);
        return ~i && t.splice(i, 1);
      }

      class Vr {
        init() {
          this.positions = [];
          let e;
          this.unbind = J(document, "mousemove", (i) => e = ue(i)), this.interval = setInterval(() => {
            e && (this.positions.push(e), this.positions.length > 5 && this.positions.shift());
          }, 50);
        }
        cancel() {
          var e;
          (e = this.unbind) == null || e.call(this), clearInterval(this.interval);
        }
        movesTo(e) {
          if (!this.positions || this.positions.length < 2)
            return false;
          const i = H(e), { left: s, right: r, top: o, bottom: l } = i, [u] = this.positions, d = K(this.positions), v = [u, d];
          return kt(d, i) ? false : [[{ x: s, y: o }, { x: r, y: l }], [{ x: s, y: l }, { x: r, y: o }]].some((y) => {
            const A = dc(v, y);
            return A && kt(A, i);
          });
        }
      }
      function dc([{ x: t, y: e }, { x: i, y: s }], [{ x: r, y: o }, { x: l, y: u }]) {
        const d = (u - o) * (i - t) - (l - r) * (s - e);
        if (d === 0)
          return false;
        const v = ((l - r) * (e - o) - (u - o) * (t - r)) / d;
        return v < 0 ? false : { x: t + v * (i - t), y: e + v * (s - e) };
      }
      function Jr(t, e, i = {}, { intersecting: s = true } = {}) {
        const r = new IntersectionObserver(s ? (o, l) => {
          o.some((u) => u.isIntersecting) && e(o, l);
        } : e, i);
        for (const o of _(t))
          r.observe(o);
        return r;
      }
      const fc = Le && window.ResizeObserver;
      function bs(t, e, i = { box: "border-box" }) {
        if (fc)
          return Kr(ResizeObserver, t, e, i);
        const s = [J(window, "load resize", e), J(document, "loadedmetadata load", e, true)];
        return { disconnect: () => s.map((r) => r()) };
      }
      function mn(t) {
        return { disconnect: J([window, window.visualViewport], "resize", t) };
      }
      function gn(t, e, i) {
        return Kr(MutationObserver, t, e, i);
      }
      function Kr(t, e, i, s) {
        const r = new t(i);
        for (const o of _(e))
          r.observe(o, s);
        return r;
      }
      function vn(t) {
        bn(t) && yn(t, { func: "playVideo", method: "play" }), $n(t) && t.play().catch(ut);
      }
      function ys(t) {
        bn(t) && yn(t, { func: "pauseVideo", method: "pause" }), $n(t) && t.pause();
      }
      function Gr(t) {
        bn(t) && yn(t, { func: "mute", method: "setVolume", value: 0 }), $n(t) && (t.muted = true);
      }
      function $n(t) {
        return pt(t, "video");
      }
      function bn(t) {
        return pt(t, "iframe") && (Zr(t) || Xr(t));
      }
      function Zr(t) {
        return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
      }
      function Xr(t) {
        return !!t.src.match(/vimeo\.com\/video\/.*/);
      }
      async function yn(t, e) {
        await mc(t), Qr(t, e);
      }
      function Qr(t, e) {
        t.contentWindow.postMessage(JSON.stringify({ event: "command", ...e }), "*");
      }
      const wn = "_ukPlayer";
      let pc = 0;
      function mc(t) {
        if (t[wn])
          return t[wn];
        const e = Zr(t), i = Xr(t), s = ++pc;
        let r;
        return t[wn] = new Promise((o) => {
          e && gt(t, "load", () => {
            const l = () => Qr(t, { event: "listening", id: s });
            r = setInterval(l, 100), l();
          }), gt(window, "message", o, false, ({ data: l }) => {
            try {
              return l = JSON.parse(l), e && (l == null ? undefined : l.id) === s && l.event === "onReady" || i && Number(l == null ? undefined : l.player_id) === s;
            } catch {
            }
          }), t.src = `${t.src}${b(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${s}`}`;
        }).then(() => clearInterval(r));
      }
      function gc(t, e = 0, i = 0) {
        return St(t) ? Kt(...Ue(t).map((s) => {
          const { top: r, left: o, bottom: l, right: u } = Yt(s);
          return { top: r - e, left: o - i, bottom: l + e, right: u + i };
        }).concat(G(t))) : false;
      }
      function to(t, { offset: e = 0 } = {}) {
        const i = St(t) ? di(t, false, ["hidden"]) : [];
        return i.reduce((l, u, d) => {
          const { scrollTop: v, scrollHeight: $, offsetHeight: y } = u, A = Yt(u), D = $ - A.height, { height: B, top: q } = i[d - 1] ? Yt(i[d - 1]) : G(t);
          let Z = Math.ceil(q - A.top - e + v);
          return e > 0 && y < B + e ? Z += e : e = 0, Z > D ? (e -= Z - D, Z = D) : Z < 0 && (e -= Z, Z = 0), () => s(u, Z - v, t, D).then(l);
        }, () => Promise.resolve())();
        function s(l, u, d, v) {
          return new Promise(($) => {
            const y = l.scrollTop, A = r(Math.abs(u)), D = Date.now(), B = Sn(l) === l, q = G(d).top + (B ? 0 : y);
            let Z = 0, jt = 15;
            (function me() {
              const _e = o(ft((Date.now() - D) / A));
              let se = 0;
              i[0] === l && y + u < v && (se = G(d).top + (B ? 0 : l.scrollTop) - q - H(kn(d)).height), g(l, "scrollBehavior") !== "auto" && g(l, "scrollBehavior", "auto"), l.scrollTop = y + (u + se) * _e, g(l, "scrollBehavior", ""), _e === 1 && (Z === se || !jt--) ? $() : (Z = se, requestAnimationFrame(me));
            })();
          });
        }
        function r(l) {
          return 40 * Math.pow(l, 0.375);
        }
        function o(l) {
          return 0.5 * (1 - Math.cos(Math.PI * l));
        }
      }
      function ws(t, e = 0, i = 0) {
        if (!St(t))
          return 0;
        const s = ze(t, true), { scrollHeight: r, scrollTop: o } = s, { height: l } = Yt(s), u = r - l, d = Bi(t)[0] - Bi(s)[0], v = Math.max(0, d - l + e), $ = Math.min(u, d + t.offsetHeight - i);
        return v < $ ? ft((o - v) / ($ - v)) : 1;
      }
      function di(t, e = false, i = []) {
        const s = Sn(t);
        let r = li(t).reverse();
        r = r.slice(r.indexOf(s) + 1);
        const o = I(r, (l) => g(l, "position") === "fixed");
        return ~o && (r = r.slice(o)), [s].concat(r.filter((l) => g(l, "overflow").split(" ").some((u) => b(["auto", "scroll", ...i], u)) && (!e || l.scrollHeight > Yt(l).height))).reverse();
      }
      function ze(...t) {
        return di(...t)[0];
      }
      function Ue(t) {
        return di(t, false, ["hidden", "clip"]);
      }
      function Yt(t) {
        const e = T(t), i = Sn(t), s = !He(t) || t.contains(i);
        if (s && e.visualViewport) {
          let { height: d, width: v, scale: $, pageTop: y, pageLeft: A } = e.visualViewport;
          return d = Math.round(d * $), v = Math.round(v * $), { height: d, width: v, top: y, left: A, bottom: y + d, right: A + v };
        }
        let r = G(s ? e : t);
        if (g(t, "display") === "inline")
          return r;
        const { body: o, documentElement: l } = e.document, u = s ? i === l || i.clientHeight < o.clientHeight ? i : o : t;
        for (let [d, v, $, y] of [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]]) {
          const A = r[d] % 1;
          r[$] += x(g(u, `border-${$}-width`)), r[d] = r[v] = u[`client${k(d)}`] - (A ? A < 0.5 ? -A : 1 - A : 0), r[y] = r[d] + r[$];
        }
        return r;
      }
      function kn(t) {
        const { left: e, width: i, top: s } = H(t);
        for (const r of s ? [0, s] : [0]) {
          let o;
          for (const l of T(t).document.elementsFromPoint(e + i / 2, r))
            !l.contains(t) && !W(l, "uk-togglable-leave") && (xn(l, "fixed") && eo(li(t).reverse().find((u) => !u.contains(l) && !xn(u, "static"))) < eo(l) || xn(l, "sticky") && it(l).contains(t)) && (!o || H(o).height < H(l).height) && (o = l);
          if (o)
            return o;
        }
      }
      function eo(t) {
        return x(g(t, "zIndex"));
      }
      function xn(t, e) {
        return g(t, "position") === e;
      }
      function Sn(t) {
        return T(t).document.scrollingElement;
      }
      const Nt = [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]];
      function io(t, e, i) {
        i = { attach: { element: ["left", "top"], target: ["left", "top"], ...i.attach }, offset: [0, 0], placement: [], ...i }, P(e) || (e = [e, e]), G(t, so(t, e, i));
      }
      function so(t, e, i) {
        const s = no(t, e, i), { boundary: r, viewportOffset: o = 0, placement: l } = i;
        let u = s;
        for (const [d, [v, , $, y]] of Object.entries(Nt)) {
          const A = vc(t, e[d], o, r, d);
          if (ks(s, A, d))
            continue;
          let D = 0;
          if (l[d] === "flip") {
            const B = i.attach.target[d];
            if (B === y && s[y] <= A[y] || B === $ && s[$] >= A[$])
              continue;
            D = bc(t, e, i, d)[$] - s[$];
            const q = $c(t, e[d], o, d);
            if (!ks(_n(s, D, d), q, d)) {
              if (ks(s, q, d))
                continue;
              if (i.recursion)
                return false;
              const Z = yc(t, e, i);
              if (Z && ks(Z, q, 1 - d))
                return Z;
              continue;
            }
          } else if (l[d] === "shift") {
            const B = G(e[d]), { offset: q } = i;
            D = ft(ft(s[$], A[$], A[y] - s[v]), B[$] - s[v] + q[d], B[y] - q[d]) - s[$];
          }
          u = _n(u, D, d);
        }
        return u;
      }
      function no(t, e, i) {
        let { attach: s, offset: r } = { attach: { element: ["left", "top"], target: ["left", "top"], ...i.attach }, offset: [0, 0], ...i }, o = G(t);
        for (const [l, [u, , d, v]] of Object.entries(Nt)) {
          const $ = s.target[l] === s.element[l] ? Yt(e[l]) : G(e[l]);
          o = _n(o, $[d] - o[d] + ro(s.target[l], v, $[u]) - ro(s.element[l], v, o[u]) + +r[l], l);
        }
        return o;
      }
      function _n(t, e, i) {
        const [, s, r, o] = Nt[i], l = { ...t };
        return l[r] = t[s] = t[r] + e, l[o] += e, l;
      }
      function ro(t, e, i) {
        return t === "center" ? i / 2 : t === e ? i : 0;
      }
      function vc(t, e, i, s, r) {
        let o = ao(...oo(t, e).map(Yt));
        return i && (o[Nt[r][2]] += i, o[Nt[r][3]] -= i), s && (o = ao(o, G(P(s) ? s[r] : s))), o;
      }
      function $c(t, e, i, s) {
        const [r, o, l, u] = Nt[s], [d] = oo(t, e), v = Yt(d);
        return ["auto", "scroll"].includes(g(d, `overflow-${o}`)) && (v[l] -= d[`scroll${k(l)}`], v[u] = v[l] + d[`scroll${k(r)}`]), v[l] += i, v[u] -= i, v;
      }
      function oo(t, e) {
        return Ue(e).filter((i) => i.contains(t));
      }
      function ao(...t) {
        let e = {};
        for (const i of t)
          for (const [, , s, r] of Nt)
            e[s] = Math.max(e[s] || 0, i[s]), e[r] = Math.min(...[e[r], i[r]].filter(Boolean));
        return e;
      }
      function ks(t, e, i) {
        const [, , s, r] = Nt[i];
        return t[s] >= e[s] && t[r] <= e[r];
      }
      function bc(t, e, { offset: i, attach: s }, r) {
        return no(t, e, { attach: { element: lo(s.element, r), target: lo(s.target, r) }, offset: wc(i, r) });
      }
      function yc(t, e, i) {
        return so(t, e, { ...i, attach: { element: i.attach.element.map(co).reverse(), target: i.attach.target.map(co).reverse() }, offset: i.offset.reverse(), placement: i.placement.reverse(), recursion: true });
      }
      function lo(t, e) {
        const i = [...t], s = Nt[e].indexOf(t[e]);
        return ~s && (i[e] = Nt[e][1 - s % 2 + 2]), i;
      }
      function co(t) {
        for (let e = 0;e < Nt.length; e++) {
          const i = Nt[e].indexOf(t);
          if (~i)
            return Nt[1 - e][i % 2 + 2];
        }
      }
      function wc(t, e) {
        return t = [...t], t[e] *= -1, t;
      }
      var kc = Object.freeze({ __proto__: null, $: F, $$: ct, Animation: ye, Dimensions: Zs, MouseTracker: Vr, Transition: nt, addClass: V, after: fs, append: $t, apply: we, assign: Y, attr: O, before: ds, boxModelAdjust: dn, camelize: p, children: st, clamp: ft, createEvent: hi, css: g, data: It, dimensions: H, each: lt, empty: Rr, endsWith: C, escape: nn, fastdom: ke, filter: Di, find: en, findAll: Mi, findIndex: I, flipPosition: gs, fragment: fe, getCoveringElement: kn, getEventPos: ue, getIndex: Ht, getTargetedElement: tn, hasAttr: $e, hasClass: W, hasOwn: a, hasTouch: ri, height: Pt, html: de, hyphenate: c, inBrowser: Le, includes: b, index: he, intersectRect: Kt, isArray: P, isBoolean: ce, isDocument: le, isElement: zt, isEmpty: Q, isEqual: R, isFocusable: cs, isFunction: rt, isInView: gc, isInput: ls, isNode: He, isNumber: ee, isNumeric: at, isObject: Dt, isPlainObject: te, isRtl: xt, isSameSiteAnchor: ci, isString: ht, isTag: pt, isTouch: Gt, isUndefined: vt, isVisible: St, isVoidElement: Qs, isWindow: ii, last: K, matches: tt, memoize: Ft, mute: Gr, noop: ut, observeIntersection: Jr, observeMutation: gn, observeResize: bs, observeViewportResize: mn, off: je, offset: G, offsetPosition: Bi, offsetViewport: Yt, on: J, once: gt, overflowParents: Ue, parent: it, parents: li, pause: ys, pick: ie, play: vn, pointInRect: kt, pointerCancel: as, pointerDown: Wt, pointerEnter: Be, pointerLeave: ai, pointerMove: os, pointerUp: be, position: un, positionAt: io, prepend: ec, propName: hs, query: qt, queryAll: Pi, ready: tc, remove: Ct, removeAttr: Ci, removeClass: ot, replaceClass: Xs, scrollIntoView: to, scrollParent: ze, scrollParents: di, scrolledOver: ws, selFocusable: Oi, selInput: Ti, sortBy: wt, startsWith: w, sumBy: dt, swap: U, toArray: N, toBoolean: si, toEventTargets: on, toFloat: x, toNode: S, toNodes: _, toNumber: L, toPx: At, toWindow: T, toggleClass: mt, trigger: M, ucfirst: k, uniqueBy: Ot, unwrap: Li, width: ms, wrapAll: Ni, wrapInner: hn });
      const _t = {};
      _t.events = _t.watch = _t.observe = _t.created = _t.beforeConnect = _t.connected = _t.beforeDisconnect = _t.disconnected = _t.destroy = An, _t.args = function(t, e) {
        return e !== false && An(e || t);
      }, _t.update = function(t, e) {
        return wt(An(t, rt(e) ? { read: e } : e), "order");
      }, _t.props = function(t, e) {
        if (P(e)) {
          const i = {};
          for (const s of e)
            i[s] = String;
          e = i;
        }
        return _t.methods(t, e);
      }, _t.computed = _t.methods = function(t, e) {
        return e ? t ? { ...t, ...e } : e : t;
      }, _t.i18n = _t.data = function(t, e, i) {
        return i ? ho(t, e, i) : e ? t ? function(s) {
          return ho(t, e, s);
        } : e : t;
      };
      function ho(t, e, i) {
        return _t.computed(rt(t) ? t.call(i, i) : t, rt(e) ? e.call(i, i) : e);
      }
      function An(t, e) {
        return t = t && !P(t) ? [t] : t, e ? t ? t.concat(e) : P(e) ? e : [e] : t;
      }
      function xc(t, e) {
        return vt(e) ? t : e;
      }
      function Ri(t, e, i) {
        const s = {};
        if (rt(e) && (e = e.options), e.extends && (t = Ri(t, e.extends, i)), e.mixins)
          for (const o of e.mixins)
            t = Ri(t, o, i);
        for (const o in t)
          r(o);
        for (const o in e)
          a(t, o) || r(o);
        function r(o) {
          s[o] = (_t[o] || xc)(t[o], e[o], i);
        }
        return s;
      }
      function fi(t, e = []) {
        try {
          return t ? w(t, "{") ? JSON.parse(t) : e.length && !b(t, ":") ? { [e[0]]: t } : t.split(";").reduce((i, s) => {
            const [r, o] = s.split(/:(.*)/);
            return r && !vt(o) && (i[r.trim()] = o.trim()), i;
          }, {}) : {};
        } catch {
          return {};
        }
      }
      function En(t, e) {
        return t === Boolean ? si(e) : t === Number ? L(e) : t === "list" ? _c(e) : t === Object && ht(e) ? fi(e) : t ? t(e) : e;
      }
      const Sc = /,(?![^(]*\))/;
      function _c(t) {
        return P(t) ? t : ht(t) ? t.split(Sc).map((e) => at(e) ? L(e) : si(e.trim())) : [t];
      }
      function Ac(t) {
        t._data = {}, t._updates = [...t.$options.update || []], t._disconnect.push(() => t._updates = t._data = null);
      }
      function Ec(t, e) {
        t._updates.unshift(e);
      }
      function zi(t, e = "update") {
        t._connected && t._updates.length && (t._queued || (t._queued = new Set, ke.read(() => {
          t._connected && Ic(t, t._queued), t._queued = null;
        })), t._queued.add(e.type || e));
      }
      function Ic(t, e) {
        for (const { read: i, write: s, events: r = [] } of t._updates) {
          if (!e.has("update") && !r.some((l) => e.has(l)))
            continue;
          let o;
          i && (o = i.call(t, t._data, e), o && te(o) && Y(t._data, o)), s && o !== false && ke.write(() => {
            t._connected && s.call(t, t._data, e);
          });
        }
      }
      function pe(t) {
        return Wi(bs, t, "resize");
      }
      function Ui(t) {
        return Wi(Jr, t);
      }
      function In(t) {
        return Wi(gn, t);
      }
      function xs(t = {}) {
        return Ui({ handler: function(e, i) {
          const { targets: s = this.$el, preload: r = 5 } = t;
          for (const o of _(rt(s) ? s(this) : s))
            ct('[loading="lazy"]', o).slice(0, r - 1).forEach((l) => Ci(l, "loading"));
          for (const o of e.filter(({ isIntersecting: l }) => l).map(({ target: l }) => l))
            i.unobserve(o);
        }, ...t });
      }
      function uo(t) {
        return Wi((e, i) => mn(i), t, "resize");
      }
      function Fi(t) {
        return Wi((e, i) => ({ disconnect: J(Tc(e), "scroll", i, { passive: true }) }), t, "scroll");
      }
      function fo(t) {
        return { observe(e, i) {
          return { observe: ut, unobserve: ut, disconnect: J(e, Wt, i, { passive: true }) };
        }, handler(e) {
          if (!Gt(e))
            return;
          const i = ue(e), s = "tagName" in e.target ? e.target : it(e.target);
          gt(document, `${be} ${as} scroll`, (r) => {
            const { x: o, y: l } = ue(r);
            (r.type !== "scroll" && s && o && Math.abs(i.x - o) > 100 || l && Math.abs(i.y - l) > 100) && setTimeout(() => {
              M(s, "swipe"), M(s, `swipe${Cc(i.x, i.y, o, l)}`);
            });
          });
        }, ...t };
      }
      function Wi(t, e, i) {
        return { observe: t, handler() {
          zi(this, i);
        }, ...e };
      }
      function Cc(t, e, i, s) {
        return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down";
      }
      function Tc(t) {
        return _(t).map((e) => {
          const { ownerDocument: i } = e, s = ze(e, true);
          return s === i.scrollingElement ? i : s;
        });
      }
      var Oc = { props: { margin: String, firstColumn: Boolean }, data: { margin: "uk-margin-small-top", firstColumn: "uk-first-column" }, observe: [In({ options: { childList: true } }), In({ options: { attributes: true, attributeFilter: ["style"] }, target: ({ $el: t }) => [t, ...st(t)] }), pe({ target: ({ $el: t }) => [t, ...st(t)] })], update: { read() {
        return { rows: po(st(this.$el)) };
      }, write({ rows: t }) {
        for (const e of t)
          for (const i of e)
            mt(i, this.margin, t[0] !== e), mt(i, this.firstColumn, e[xt ? e.length - 1 : 0] === i);
      }, events: ["resize"] } };
      function po(t) {
        const e = [[]], i = t.some((s, r) => r && t[r - 1].offsetParent !== s.offsetParent);
        for (const s of t) {
          if (!St(s))
            continue;
          const r = Cn(s, i);
          for (let o = e.length - 1;o >= 0; o--) {
            const l = e[o];
            if (!l[0]) {
              l.push(s);
              break;
            }
            const u = Cn(l[0], i);
            if (r.top >= u.bottom - 1 && r.top !== u.top) {
              e.push([s]);
              break;
            }
            if (r.bottom - 1 > u.top || r.top === u.top) {
              let d = l.length - 1;
              for (;d >= 0; d--) {
                const v = Cn(l[d], i);
                if (r.left >= v.left)
                  break;
              }
              l.splice(d + 1, 0, s);
              break;
            }
            if (o === 0) {
              e.unshift([s]);
              break;
            }
          }
        }
        return e;
      }
      function Cn(t, e = false) {
        let { offsetTop: i, offsetLeft: s, offsetHeight: r, offsetWidth: o } = t;
        return e && ([i, s] = Bi(t)), { top: i, left: s, bottom: i + r, right: s + o };
      }
      async function Dc(t, e, i) {
        await Tn();
        let s = st(e);
        const r = s.map((D) => mo(D, true)), o = { ...g(e, ["height", "padding"]), display: "block" }, l = s.concat(e);
        await Promise.all(l.map(nt.cancel)), g(l, "transitionProperty", "none"), await t(), s = s.concat(st(e).filter((D) => !b(s, D))), await Promise.resolve(), g(l, "transitionProperty", "");
        const u = O(e, "style"), d = g(e, ["height", "padding"]), [v, $] = Pc(e, s, r), y = s.map((D) => ({ style: O(D, "style") }));
        s.forEach((D, B) => $[B] && g(D, $[B])), g(e, o), M(e, "scroll"), await Tn();
        const A = s.map((D, B) => it(D) === e && nt.start(D, v[B], i, "ease")).concat(nt.start(e, d, i, "ease"));
        try {
          await Promise.all(A), s.forEach((D, B) => {
            O(D, y[B]), it(D) === e && g(D, "display", v[B].opacity === 0 ? "none" : "");
          }), O(e, "style", u);
        } catch {
          O(s, "style", ""), Mc(e, o);
        }
      }
      function mo(t, e) {
        const i = g(t, "zIndex");
        return St(t) ? { display: "", opacity: e ? g(t, "opacity") : "0", pointerEvents: "none", position: "absolute", zIndex: i === "auto" ? he(t) : i, ...go(t) } : false;
      }
      function Pc(t, e, i) {
        const s = e.map((o, l) => it(o) && (l in i) ? i[l] ? St(o) ? go(o) : { opacity: 0 } : { opacity: St(o) ? 1 : 0 } : false), r = s.map((o, l) => {
          const u = it(e[l]) === t && (i[l] || mo(e[l]));
          if (!u)
            return false;
          if (!o)
            delete u.opacity;
          else if (!("opacity" in o)) {
            const { opacity: d } = u;
            d % 1 ? o.opacity = 1 : delete u.opacity;
          }
          return u;
        });
        return [s, r];
      }
      function Mc(t, e) {
        for (const i in e)
          g(t, i, "");
      }
      function go(t) {
        const { height: e, width: i } = H(t);
        return { height: e, width: i, transform: "", ...un(t), ...g(t, ["marginTop", "marginLeft"]) };
      }
      function Tn() {
        return new Promise((t) => requestAnimationFrame(t));
      }
      const On = "uk-transition-leave", Dn = "uk-transition-enter";
      function vo(t, e, i, s = 0) {
        const r = Ss(e, true), o = { opacity: 1 }, l = { opacity: 0 }, u = ($) => () => r === Ss(e) ? $() : Promise.reject(), d = u(async () => {
          V(e, On), await Promise.all(bo(e).map(($, y) => new Promise((A) => setTimeout(() => nt.start($, l, i / 2, "ease").then(A), y * s)))), ot(e, On);
        }), v = u(async () => {
          const $ = Pt(e);
          V(e, Dn), t(), g(st(e), { opacity: 0 }), await Tn();
          const y = st(e), A = Pt(e);
          g(e, "alignContent", "flex-start"), Pt(e, $);
          const D = bo(e);
          g(y, l);
          const B = D.map(async (q, Z) => {
            await Hc(Z * s), await nt.start(q, o, i / 2, "ease");
          });
          $ !== A && B.push(nt.start(e, { height: A }, i / 2 + D.length * s, "ease")), await Promise.all(B).then(() => {
            ot(e, Dn), r === Ss(e) && (g(e, { height: "", alignContent: "" }), g(y, { opacity: "" }), delete e.dataset.transition);
          });
        });
        return W(e, On) ? $o(e).then(v) : W(e, Dn) ? $o(e).then(d).then(v) : d().then(v);
      }
      function Ss(t, e) {
        return e && (t.dataset.transition = 1 + Ss(t)), L(t.dataset.transition) || 0;
      }
      function $o(t) {
        return Promise.all(st(t).filter(nt.inProgress).map((e) => new Promise((i) => gt(e, "transitionend transitioncanceled", i))));
      }
      function bo(t) {
        return po(st(t)).flat().filter(St);
      }
      function Hc(t) {
        return new Promise((e) => setTimeout(e, t));
      }
      var yo = { props: { duration: Number, animation: Boolean }, data: { duration: 150, animation: "slide" }, methods: { animate(t, e = this.$el) {
        const i = this.animation;
        return (i === "fade" ? vo : i === "delayed-fade" ? (...r) => vo(...r, 40) : i ? Dc : () => (t(), Promise.resolve()))(t, e, this.duration).catch(ut);
      } } };
      const et = { TAB: 9, ESC: 27, SPACE: 32, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };
      var Nc = { mixins: [yo], args: "target", props: { target: String, selActive: Boolean }, data: { target: "", selActive: false, attrItem: "uk-filter-control", cls: "uk-active", duration: 250 }, computed: { children: ({ target: t }, e) => ct(`${t} > *`, e), toggles: ({ attrItem: t }, e) => ct(`[${t}],[data-${t}]`, e) }, watch: { toggles(t) {
        this.updateState();
        const e = ct(this.selActive, this.$el);
        for (const i of t) {
          this.selActive !== false && mt(i, this.cls, b(e, i));
          const s = zc(i);
          pt(s, "a") && O(s, "role", "button");
        }
      }, children(t, e) {
        e && this.updateState();
      } }, events: { name: "click keydown", delegate: ({ attrItem: t }) => `[${t}],[data-${t}]`, handler(t) {
        t.type === "keydown" && t.keyCode !== et.SPACE || t.target.closest("a,button") && (t.preventDefault(), this.apply(t.current));
      } }, methods: { apply(t) {
        const e = this.getState(), i = ko(t, this.attrItem, this.getState());
        Lc(e, i) || this.setState(i);
      }, getState() {
        return this.toggles.filter((t) => W(t, this.cls)).reduce((t, e) => ko(e, this.attrItem, t), { filter: { "": "" }, sort: [] });
      }, async setState(t, e = true) {
        t = { filter: { "": "" }, sort: [], ...t }, M(this.$el, "beforeFilter", [this, t]);
        for (const i of this.toggles)
          mt(i, this.cls, jc(i, this.attrItem, t));
        await Promise.all(ct(this.target, this.$el).map((i) => {
          const s = () => Bc(t, i, st(i));
          return e ? this.animate(s, i) : s();
        })), M(this.$el, "afterFilter", [this]);
      }, updateState() {
        ke.write(() => this.setState(this.getState(), false));
      } } };
      function wo(t, e) {
        return fi(It(t, e), ["filter"]);
      }
      function Lc(t, e) {
        return ["filter", "sort"].every((i) => R(t[i], e[i]));
      }
      function Bc(t, e, i) {
        for (const o of i)
          g(o, "display", Object.values(t.filter).every((l) => !l || tt(o, l)) ? "" : "none");
        const [s, r] = t.sort;
        if (s) {
          const o = Rc(i, s, r);
          R(o, i) || $t(e, o);
        }
      }
      function ko(t, e, i) {
        const { filter: s, group: r, sort: o, order: l = "asc" } = wo(t, e);
        return (s || vt(o)) && (r ? s ? (delete i.filter[""], i.filter[r] = s) : (delete i.filter[r], (Q(i.filter) || ("" in i.filter)) && (i.filter = { "": s || "" })) : i.filter = { "": s || "" }), vt(o) || (i.sort = [o, l]), i;
      }
      function jc(t, e, { filter: i = { "": "" }, sort: [s, r] }) {
        const { filter: o = "", group: l = "", sort: u, order: d = "asc" } = wo(t, e);
        return vt(u) ? l in i && o === i[l] || !o && l && !(l in i) && !i[""] : s === u && r === d;
      }
      function Rc(t, e, i) {
        return [...t].sort((s, r) => It(s, e).localeCompare(It(r, e), undefined, { numeric: true }) * (i === "asc" || -1));
      }
      function zc(t) {
        return F("a,button", t) || t;
      }
      var Uc = { args: "dataSrc", props: { dataSrc: String, sources: String, margin: String, target: String, loading: String }, data: { dataSrc: "", sources: false, margin: "50%", target: false, loading: "lazy" }, connected() {
        this.loading !== "lazy" ? this.load() : Mn(this.$el) && (this.$el.loading = "lazy", Pn(this.$el));
      }, disconnected() {
        this.img && (this.img.onload = ""), delete this.img;
      }, observe: Ui({ handler(t, e) {
        this.load(), e.disconnect();
      }, options: ({ margin: t }) => ({ rootMargin: t }), filter: ({ loading: t }) => t === "lazy", target: ({ $el: t, $props: e }) => e.target ? [t, ...Pi(e.target, t)] : t }), methods: { load() {
        if (this.img)
          return this.img;
        const t = Mn(this.$el) ? this.$el : Wc(this.$el, this.dataSrc, this.sources);
        return Ci(t, "loading"), Pn(this.$el, t.currentSrc), this.img = t;
      } } };
      function Pn(t, e) {
        if (Mn(t)) {
          const i = it(t);
          (pt(i, "picture") ? st(i) : [t]).forEach((r) => xo(r, r));
        } else
          e && !b(t.style.backgroundImage, e) && (g(t, "backgroundImage", `url(${nn(e)})`), M(t, hi("load", false)));
      }
      const Fc = ["data-src", "data-srcset", "sizes"];
      function xo(t, e) {
        for (const i of Fc) {
          const s = It(t, i);
          s && O(e, i.replace(/data-/g, ""), s);
        }
      }
      function Wc(t, e, i) {
        const s = new Image;
        return So(s, i), xo(t, s), s.onload = () => Pn(t, s.currentSrc), O(s, "src", e), s;
      }
      function So(t, e) {
        if (e = qc(e), e.length) {
          const i = fe("<picture>");
          for (const s of e) {
            const r = fe("<source>");
            O(r, s), $t(i, r);
          }
          $t(i, t);
        }
      }
      function qc(t) {
        if (!t)
          return [];
        if (w(t, "["))
          try {
            t = JSON.parse(t);
          } catch {
            t = [];
          }
        else
          t = fi(t);
        return P(t) || (t = [t]), t.filter((e) => !Q(e));
      }
      function Mn(t) {
        return pt(t, "img");
      }
      let Hn;
      function _o(t) {
        const e = J(t, "touchstart", (s) => {
          if (s.targetTouches.length !== 1 || tt(s.target, 'input[type="range"'))
            return;
          let r = ue(s).y;
          const o = J(t, "touchmove", (l) => {
            const u = ue(l).y;
            u !== r && (r = u, di(l.target).some((d) => {
              if (!t.contains(d))
                return false;
              let { scrollHeight: v, clientHeight: $ } = d;
              return $ < v;
            }) || l.preventDefault());
          }, { passive: false });
          gt(t, "scroll touchend touchcanel", o, { capture: true });
        }, { passive: true });
        if (Hn)
          return e;
        Hn = true;
        const { scrollingElement: i } = document;
        return g(i, { overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden", touchAction: "none", paddingRight: ms(window) - i.clientWidth || "" }), () => {
          Hn = false, e(), g(i, { overflowY: "", touchAction: "", paddingRight: "" });
        };
      }
      var Lt = { connected() {
        V(this.$el, this.$options.id);
      } }, qi = { props: { container: Boolean }, data: { container: true }, computed: { container({ container: t }) {
        return t === true && this.$container || t && F(t);
      } } }, Ao = { props: { pos: String, offset: Boolean, flip: Boolean, shift: Boolean, inset: Boolean }, data: { pos: `bottom-${xt ? "right" : "left"}`, offset: false, flip: true, shift: true, inset: false }, connected() {
        this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = b(["top", "bottom"], this.dir) ? "y" : "x";
      }, methods: { positionAt(t, e, i) {
        let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
        const r = [this.flip && "flip", this.shift && "shift"], o = { element: [this.inset ? this.dir : gs(this.dir), this.align], target: [this.dir, this.align] };
        if (this.axis === "y") {
          for (const d in o)
            o[d].reverse();
          s.reverse(), r.reverse();
        }
        const l = Nn(t), u = H(t);
        g(t, { top: -u.height, left: -u.width }), io(t, e, { attach: o, offset: s, boundary: i, placement: r, viewportOffset: this.getViewportOffset(t) }), l();
      }, getPositionOffset(t = this.$el) {
        return At(this.offset === false ? g(t, "--uk-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (b(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
      }, getShiftOffset(t = this.$el) {
        return this.align === "center" ? 0 : At(g(t, "--uk-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (b(["left", "top"], this.align) ? 1 : -1);
      }, getViewportOffset(t) {
        return At(g(t, "--uk-position-viewport-offset"));
      } } };
      function Nn(t) {
        const e = ze(t), { scrollTop: i } = e;
        return () => {
          i !== e.scrollTop && (e.scrollTop = i);
        };
      }
      var Fe = { props: { cls: Boolean, animation: "list", duration: Number, velocity: Number, origin: String, transition: String }, data: { cls: false, animation: [false], duration: 200, velocity: 0.2, origin: false, transition: "ease", clsEnter: "uk-togglable-enter", clsLeave: "uk-togglable-leave" }, computed: { hasAnimation: ({ animation: t }) => !!t[0], hasTransition: ({ animation: t }) => ["slide", "reveal"].some((e) => w(t[0], e)) }, methods: { async toggleElement(t, e, i) {
        try {
          return await Promise.all(_(t).map((s) => {
            const r = ce(e) ? e : !this.isToggled(s);
            if (!M(s, `before${r ? "show" : "hide"}`, [this]))
              return Promise.reject();
            const o = (rt(i) ? i : i === false || !this.hasAnimation ? Yc : this.hasTransition ? Vc : Jc)(s, r, this), l = r ? this.clsEnter : this.clsLeave;
            V(s, l), M(s, r ? "show" : "hide", [this]);
            const u = () => {
              var d;
              if (ot(s, l), M(s, r ? "shown" : "hidden", [this]), r) {
                const v = Nn(s);
                (d = ct("[autofocus]", s).find(St)) == null || d.focus(), v();
              }
            };
            return o ? o.then(u, () => (ot(s, l), Promise.reject())) : u();
          })), true;
        } catch {
          return false;
        }
      }, isToggled(t = this.$el) {
        return t = S(t), W(t, this.clsEnter) ? true : W(t, this.clsLeave) ? false : this.cls ? W(t, this.cls.split(" ")[0]) : St(t);
      }, _toggle(t, e) {
        if (!t)
          return;
        e = !!e;
        let i;
        this.cls ? (i = b(this.cls, " ") || e !== W(t, this.cls), i && mt(t, this.cls, b(this.cls, " ") ? undefined : e)) : (i = e === t.hidden, i && (t.hidden = !e)), i && M(t, "toggled", [e, this]);
      } } };
      function Yc(t, e, { _toggle: i }) {
        return ye.cancel(t), nt.cancel(t), i(t, e);
      }
      async function Vc(t, e, { animation: i, duration: s, velocity: r, transition: o, _toggle: l }) {
        var u;
        const [d = "reveal", v = "top"] = ((u = i[0]) == null ? undefined : u.split("-")) || [], $ = [["left", "right"], ["top", "bottom"]], y = $[b($[0], v) ? 0 : 1], A = y[1] === v, B = ["width", "height"][$.indexOf(y)], q = `margin-${y[0]}`, Z = `margin-${v}`;
        let jt = H(t)[B];
        const me = nt.inProgress(t);
        await nt.cancel(t), e && l(t, true);
        const _e = Object.fromEntries(["padding", "border", "width", "height", "minWidth", "minHeight", "overflowY", "overflowX", q, Z].map((Fa) => [Fa, t.style[Fa]])), se = H(t), Zn = x(g(t, q)), Ra = x(g(t, Z)), Ke = se[B] + Ra;
        !me && !e && (jt += Ra);
        const [Ls] = hn(t, "<div>");
        g(Ls, { boxSizing: "border-box", height: se.height, width: se.width, ...g(t, ["overflow", "padding", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderImage", Z]) }), g(t, { padding: 0, border: 0, minWidth: 0, minHeight: 0, [Z]: 0, width: se.width, height: se.height, overflow: "hidden", [B]: jt });
        const za = jt / Ke;
        s = (r * Ke + s) * (e ? 1 - za : za);
        const Ua = { [B]: e ? Ke : 0 };
        A && (g(t, q, Ke - jt + Zn), Ua[q] = e ? Zn : Ke + Zn), !A ^ d === "reveal" && (g(Ls, q, -Ke + jt), nt.start(Ls, { [q]: e ? 0 : -Ke }, s, o));
        try {
          await nt.start(t, Ua, s, o);
        } finally {
          g(t, _e), Li(Ls.firstChild), e || l(t, false);
        }
      }
      function Jc(t, e, i) {
        const { animation: s, duration: r, _toggle: o } = i;
        return e ? (o(t, true), ye.in(t, s[0], r, i.origin)) : ye.out(t, s[1] || s[0], r, i.origin).then(() => o(t, false));
      }
      const Mt = [];
      var Ln = { mixins: [Lt, qi, Fe], props: { selPanel: String, selClose: String, escClose: Boolean, bgClose: Boolean, stack: Boolean, role: String }, data: { cls: "uk-open", escClose: true, bgClose: true, overlay: true, stack: false, role: "dialog" }, computed: { panel: ({ selPanel: t }, e) => F(t, e), transitionElement() {
        return this.panel;
      } }, connected() {
        O(this.panel || this.$el, "role", this.role), this.overlay && O(this.panel || this.$el, "aria-modal", true);
      }, beforeDisconnect() {
        b(Mt, this) && this.toggleElement(this.$el, false, false);
      }, events: [{ name: "click", delegate: ({ selClose: t }) => `${t},a[href*="#"]`, handler(t) {
        const { current: e, defaultPrevented: i } = t, { hash: s } = e;
        !i && s && ci(e) && !this.$el.contains(F(s)) ? this.hide() : tt(e, this.selClose) && (t.preventDefault(), this.hide());
      } }, { name: "toggle", self: true, handler(t) {
        t.defaultPrevented || (t.preventDefault(), this.isToggled() === b(Mt, this) && this.toggle());
      } }, { name: "beforeshow", self: true, handler(t) {
        if (b(Mt, this))
          return false;
        !this.stack && Mt.length ? (Promise.all(Mt.map((e) => e.hide())).then(this.show), t.preventDefault()) : Mt.push(this);
      } }, { name: "show", self: true, handler() {
        this.stack && g(this.$el, "zIndex", x(g(this.$el, "zIndex")) + Mt.length);
        const t = [this.overlay && Gc(this), this.overlay && _o(this.$el), this.bgClose && Zc(this), this.escClose && Xc(this)];
        gt(this.$el, "hidden", () => t.forEach((e) => e && e()), { self: true }), V(document.documentElement, this.clsPage);
      } }, { name: "shown", self: true, handler() {
        cs(this.$el) || O(this.$el, "tabindex", "-1"), tt(this.$el, ":focus-within") || this.$el.focus();
      } }, { name: "hidden", self: true, handler() {
        b(Mt, this) && Mt.splice(Mt.indexOf(this), 1), g(this.$el, "zIndex", ""), Mt.some((t) => t.clsPage === this.clsPage) || ot(document.documentElement, this.clsPage);
      } }], methods: { toggle() {
        return this.isToggled() ? this.hide() : this.show();
      }, show() {
        return this.container && it(this.$el) !== this.container ? ($t(this.container, this.$el), new Promise((t) => requestAnimationFrame(() => this.show().then(t)))) : this.toggleElement(this.$el, true, Eo);
      }, hide() {
        return this.toggleElement(this.$el, false, Eo);
      } } };
      function Eo(t, e, { transitionElement: i, _toggle: s }) {
        return new Promise((r, o) => gt(t, "show hide", () => {
          var l;
          (l = t._reject) == null || l.call(t), t._reject = o, s(t, e);
          const u = gt(i, "transitionstart", () => {
            gt(i, "transitionend transitioncancel", r, { self: true }), clearTimeout(d);
          }, { self: true }), d = setTimeout(() => {
            u(), r();
          }, Kc(g(i, "transitionDuration")));
        })).then(() => delete t._reject);
      }
      function Kc(t) {
        return t ? C(t, "ms") ? x(t) : x(t) * 1000 : 0;
      }
      function Gc(t) {
        return J(document, "focusin", (e) => {
          K(Mt) === t && !t.$el.contains(e.target) && t.$el.focus();
        });
      }
      function Zc(t) {
        return J(document, Wt, ({ target: e }) => {
          K(Mt) !== t || t.overlay && !t.$el.contains(e) || !t.panel || t.panel.contains(e) || gt(document, `${be} ${as} scroll`, ({ defaultPrevented: i, type: s, target: r }) => {
            !i && s === be && e === r && t.hide();
          }, true);
        });
      }
      function Xc(t) {
        return J(document, "keydown", (e) => {
          e.keyCode === 27 && K(Mt) === t && t.hide();
        });
      }
      var Bn = { slide: { show(t) {
        return [{ transform: bt(t * -100) }, { transform: bt() }];
      }, percent(t) {
        return Yi(t);
      }, translate(t, e) {
        return [{ transform: bt(e * -100 * t) }, { transform: bt(e * 100 * (1 - t)) }];
      } } };
      function Yi(t) {
        return Math.abs(new DOMMatrix(g(t, "transform")).m41 / t.offsetWidth);
      }
      function bt(t = 0, e = "%") {
        return t ? `translate3d(${t + e}, 0, 0)` : "";
      }
      function Qc(t, e, i, { animation: s, easing: r }) {
        const { percent: o, translate: l, show: u = ut } = s, d = u(i), { promise: v, resolve: $ } = Io();
        return { dir: i, show(y, A = 0, D) {
          const B = D ? "linear" : r;
          return y -= Math.round(y * ft(A, -1, 1)), this.translate(A), We(e, "itemin", { percent: A, duration: y, timing: B, dir: i }), We(t, "itemout", { percent: 1 - A, duration: y, timing: B, dir: i }), Promise.all([nt.start(e, d[1], y, B), nt.start(t, d[0], y, B)]).then(() => {
            this.reset(), $();
          }, ut), v;
        }, cancel() {
          return nt.cancel([e, t]);
        }, reset() {
          for (const y in d[0])
            g([e, t], y, "");
        }, async forward(y, A = this.percent()) {
          return await this.cancel(), this.show(y, A, true);
        }, translate(y) {
          this.reset();
          const A = l(y, i);
          g(e, A[1]), g(t, A[0]), We(e, "itemtranslatein", { percent: y, dir: i }), We(t, "itemtranslateout", { percent: 1 - y, dir: i });
        }, percent() {
          return o(t || e, e, i);
        }, getDistance() {
          return t == null ? undefined : t.offsetWidth;
        } };
      }
      function We(t, e, i) {
        M(t, hi(e, false, false, i));
      }
      function Io() {
        let t;
        return { promise: new Promise((e) => t = e), resolve: t };
      }
      var jn = { props: { i18n: Object }, data: { i18n: null }, methods: { t(t, ...e) {
        var i, s, r;
        let o = 0;
        return ((r = ((i = this.i18n) == null ? undefined : i[t]) || ((s = this.$options.i18n) == null ? undefined : s[t])) == null ? undefined : r.replace(/%s/g, () => e[o++] || "")) || "";
      } } }, th = { props: { autoplay: Boolean, autoplayInterval: Number, pauseOnHover: Boolean }, data: { autoplay: false, autoplayInterval: 7000, pauseOnHover: true }, connected() {
        O(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay();
      }, disconnected() {
        this.stopAutoplay();
      }, update() {
        O(this.slides, "tabindex", "-1");
      }, events: [{ name: "visibilitychange", el: () => document, filter: ({ autoplay: t }) => t, handler() {
        document.hidden ? this.stopAutoplay() : this.startAutoplay();
      } }], methods: { startAutoplay() {
        this.stopAutoplay(), this.interval = setInterval(() => {
          this.stack.length || this.draggable && tt(this.$el, ":focus-within") && !tt(this.$el, ":focus") || this.pauseOnHover && tt(this.$el, ":hover") || this.show("next");
        }, this.autoplayInterval);
      }, stopAutoplay() {
        clearInterval(this.interval);
      } } };
      const _s = { passive: false, capture: true }, Co = { passive: true, capture: true }, eh = "touchstart mousedown", Rn = "touchmove mousemove", To = "touchend touchcancel mouseup click input scroll";
      var ih = { props: { draggable: Boolean }, data: { draggable: true, threshold: 10 }, created() {
        for (const t of ["start", "move", "end"]) {
          const e = this[t];
          this[t] = (i) => {
            const s = ue(i).x * (xt ? -1 : 1);
            this.prevPos = s === this.pos ? this.prevPos : this.pos, this.pos = s, e(i);
          };
        }
      }, events: [{ name: eh, passive: true, delegate: ({ selList: t }) => `${t} > *`, handler(t) {
        !this.draggable || this.parallax || !Gt(t) && sh(t.target) || t.target.closest(Ti) || t.button > 0 || this.length < 2 || this.start(t);
      } }, { name: "dragstart", handler(t) {
        t.preventDefault();
      } }, { name: Rn, el: ({ list: t }) => t, handler: ut, ..._s }], methods: { start() {
        this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = true, this.stack = []) : this.prevIndex = this.index, J(document, Rn, this.move, _s), J(document, To, this.end, Co), g(this.list, "userSelect", "none");
      }, move(t) {
        const e = this.pos - this.drag;
        if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
          return;
        t.cancelable && t.preventDefault(), this.dragging = true, this.dir = e < 0 ? 1 : -1;
        let { slides: i, prevIndex: s } = this, r = Math.abs(e), o = this.getIndex(s + this.dir), l = Oo.call(this, s, o);
        for (;o !== s && r > l; )
          this.drag -= l * this.dir, s = o, r -= l, o = this.getIndex(s + this.dir), l = Oo.call(this, s, o);
        this.percent = r / l;
        const u = i[s], d = i[o], v = this.index !== o, $ = s === o;
        let y;
        for (const A of [this.index, this.prevIndex])
          b([o, s], A) || (M(i[A], "itemhidden", [this]), $ && (y = true, this.prevIndex = s));
        (this.index === s && this.prevIndex !== s || y) && M(i[this.index], "itemshown", [this]), v && (this.prevIndex = s, this.index = o, $ || (M(u, "beforeitemhide", [this]), M(u, "itemhide", [this])), M(d, "beforeitemshow", [this]), M(d, "itemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), u, !$ && d);
      }, end() {
        if (je(document, Rn, this.move, _s), je(document, To, this.end, Co), this.dragging)
          if (setTimeout(J(this.list, "click", (t) => t.preventDefault(), _s)), this.dragging = null, this.index === this.prevIndex)
            this.percent = 1 - this.percent, this.dir *= -1, this._show(false, this.index, true), this._transitioner = null;
          else {
            const t = (xt ? this.dir * (xt ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
            this.index = t ? this.index : this.prevIndex, t && (M(this.slides[this.prevIndex], "itemhidden", [this]), M(this.slides[this.index], "itemshown", [this]), this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", true);
          }
        g(this.list, { userSelect: "" }), this.drag = this.percent = null;
      } } };
      function Oo(t, e) {
        return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
      }
      function sh(t) {
        return g(t, "userSelect") !== "none" && N(t.childNodes).some((e) => e.nodeType === 3 && e.textContent.trim());
      }
      function nh(t) {
        t._watches = [];
        for (const e of t.$options.watch || [])
          for (const [i, s] of Object.entries(e))
            Do(t, s, i);
        t._initial = true;
      }
      function Do(t, e, i) {
        t._watches.push({ name: i, ...te(e) ? e : { handler: e } });
      }
      function rh(t, e) {
        for (const { name: i, handler: s, immediate: r = true } of t._watches)
          (t._initial && r || a(e, i) && !R(e[i], t[i])) && s.call(t, t[i], e[i]);
        t._initial = false;
      }
      function oh(t) {
        const { computed: e } = t.$options;
        if (t._computed = {}, e)
          for (const i in e)
            Mo(t, i, e[i]);
      }
      const Po = { subtree: true, childList: true };
      function Mo(t, e, i) {
        t._hasComputed = true, Object.defineProperty(t, e, { enumerable: true, get() {
          const { _computed: s, $props: r, $el: o } = t;
          if (!a(s, e) && (s[e] = (i.get || i).call(t, r, o), i.observe && t._computedObserver)) {
            const l = i.observe.call(t, r);
            t._computedObserver.observe(["~", "+", "-"].includes(l[0]) ? o.parentElement : o.getRootNode(), Po);
          }
          return s[e];
        }, set(s) {
          const { _computed: r } = t;
          r[e] = i.set ? i.set.call(t, s) : s, vt(r[e]) && delete r[e];
        } });
      }
      function ah(t) {
        t._hasComputed && (Ec(t, { read: () => rh(t, Ho(t)), events: ["resize", "computed"] }), t._computedObserver = gn(t.$el, () => zi(t, "computed"), Po), t._disconnect.push(() => {
          t._computedObserver.disconnect(), t._computedObserver = null, Ho(t);
        }));
      }
      function Ho(t) {
        const e = { ...t._computed };
        return t._computed = {}, e;
      }
      function lh(t) {
        for (const e of t.$options.events || [])
          if (a(e, "handler"))
            No(t, e);
          else
            for (const i in e)
              No(t, { name: i, handler: e[i] });
      }
      function No(t, { name: e, el: i, handler: s, capture: r, passive: o, delegate: l, filter: u, self: d }) {
        u && !u.call(t, t) || t._disconnect.push(J(i ? i.call(t, t) : t.$el, e, l == null ? undefined : l.call(t, t), s.bind(t), { passive: o, capture: r, self: d }));
      }
      function ch(t) {
        for (const e of t.$options.observe || [])
          hh(t, e);
      }
      function hh(t, e) {
        let { observe: i, target: s = t.$el, handler: r, options: o, filter: l, args: u } = e;
        if (l && !l.call(t, t))
          return;
        const d = `_observe${t._disconnect.length}`;
        rt(s) && !a(t, d) && Mo(t, d, () => {
          const y = s.call(t, t);
          return P(y) ? _(y) : y;
        }), r = ht(r) ? t[r] : r.bind(t), rt(o) && (o = o.call(t, t));
        const v = a(t, d) ? t[d] : s, $ = i(v, r, o, u);
        rt(s) && P(t[d]) && Do(t, { handler: uh($, o), immediate: false }, d), t._disconnect.push(() => $.disconnect());
      }
      function uh(t, e) {
        return (i, s) => {
          for (const r of s)
            b(i, r) || (t.unobserve ? t.unobserve(r) : t.observe && t.disconnect());
          for (const r of i)
            (!b(s, r) || !t.unobserve) && t.observe(r, e);
        };
      }
      function dh(t) {
        const { $options: e, $props: i } = t, s = Lo(e);
        Y(i, s);
        const { computed: r, methods: o } = e;
        for (let l in i)
          l in s && (!r || !a(r, l)) && (!o || !a(o, l)) && (t[l] = i[l]);
      }
      function Lo(t) {
        const e = {}, { args: i = [], props: s = {}, el: r, id: o } = t;
        if (!s)
          return e;
        for (const u in s) {
          const d = c(u);
          let v = It(r, d);
          vt(v) || (v = s[u] === Boolean && v === "" ? true : En(s[u], v), !(d === "target" && w(v, "_")) && (e[u] = v));
        }
        const l = fi(It(r, o), i);
        for (const u in l) {
          const d = p(u);
          vt(s[d]) || (e[d] = En(s[d], l[u]));
        }
        return e;
      }
      const fh = Ft((t, e) => {
        const i = Object.keys(e), s = i.concat(t).map((r) => [c(r), `data-${c(r)}`]).flat();
        return { attributes: i, filter: s };
      });
      function ph(t) {
        const { $options: e, $props: i } = t, { id: s, props: r, el: o } = e;
        if (!r)
          return;
        const { attributes: l, filter: u } = fh(s, r), d = new MutationObserver((v) => {
          const $ = Lo(e);
          v.some(({ attributeName: y }) => {
            const A = y.replace("data-", "");
            return (A === s ? l : [p(A), p(y)]).some((D) => !vt($[D]) && $[D] !== i[D]);
          }) && t.$reset();
        });
        d.observe(o, { attributes: true, attributeFilter: u }), t._disconnect.push(() => d.disconnect());
      }
      function pi(t, e) {
        var i;
        (i = t.$options[e]) == null || i.forEach((s) => s.call(t));
      }
      function zn(t) {
        t._connected || (dh(t), pi(t, "beforeConnect"), t._connected = true, t._disconnect = [], lh(t), Ac(t), nh(t), ch(t), ph(t), ah(t), pi(t, "connected"), zi(t));
      }
      function Un(t) {
        t._connected && (pi(t, "beforeDisconnect"), t._disconnect.forEach((e) => e()), t._disconnect = null, pi(t, "disconnected"), t._connected = false);
      }
      let mh = 0;
      function Bo(t, e = {}) {
        e.data = $h(e, t.constructor.options), t.$options = Ri(t.constructor.options, e, t), t.$props = {}, t._uid = mh++, gh(t), vh(t), oh(t), pi(t, "created"), e.el && t.$mount(e.el);
      }
      function gh(t) {
        const { data: e = {} } = t.$options;
        for (const i in e)
          t.$props[i] = t[i] = e[i];
      }
      function vh(t) {
        const { methods: e } = t.$options;
        if (e)
          for (const i in e)
            t[i] = e[i].bind(t);
      }
      function $h({ data: t = {} }, { args: e = [], props: i = {} }) {
        P(t) && (t = t.slice(0, e.length).reduce((s, r, o) => (te(r) ? Y(s, r) : s[e[o]] = r, s), {}));
        for (const s in t)
          vt(t[s]) ? delete t[s] : i[s] && (t[s] = En(i[s], t[s]));
        return t;
      }
      const Bt = function(t) {
        Bo(this, t);
      };
      Bt.util = kc, Bt.options = {}, Bt.version = "3.22.2";
      const bh = "uk-", qe = "__uikit__", mi = {};
      function jo(t, e) {
        var i, s;
        const r = bh + c(t);
        if (!e)
          return mi[r].options || (mi[r] = Bt.extend(mi[r])), mi[r];
        t = p(t), Bt[t] = (l, u) => Vi(t, l, u);
        const o = (i = e.options) != null ? i : { ...e };
        return o.id = r, o.name = t, (s = o.install) == null || s.call(o, Bt, o, t), Bt._initialized && !o.functional && requestAnimationFrame(() => Vi(t, `[${r}],[data-${r}]`)), mi[r] = o;
      }
      function Vi(t, e, i, ...s) {
        const r = jo(t);
        return r.options.functional ? new r({ data: te(e) ? e : [e, i, ...s] }) : e ? ct(e).map(o)[0] : o();
        function o(l) {
          const u = As(l, t);
          if (u)
            if (i)
              u.$destroy();
            else
              return u;
          return new r({ el: l, data: i });
        }
      }
      function Ji(t) {
        return (t == null ? undefined : t[qe]) || {};
      }
      function As(t, e) {
        return Ji(t)[e];
      }
      function yh(t, e) {
        t[qe] || (t[qe] = {}), t[qe][e.$options.name] = e;
      }
      function wh(t, e) {
        var i;
        (i = t[qe]) == null || delete i[e.$options.name], Q(t[qe]) && delete t[qe];
      }
      function kh(t) {
        t.component = jo, t.getComponents = Ji, t.getComponent = As, t.update = Ro, t.use = function(i) {
          if (!i.installed)
            return i.call(null, this), i.installed = true, this;
        }, t.mixin = function(i, s) {
          s = (ht(s) ? this.component(s) : s) || this, s.options = Ri(s.options, i);
        }, t.extend = function(i) {
          i || (i = {});
          const s = this, r = function(l) {
            Bo(this, l);
          };
          return r.prototype = Object.create(s.prototype), r.prototype.constructor = r, r.options = Ri(s.options, i), r.super = s, r.extend = s.extend, r;
        };
        let e;
        Object.defineProperty(t, "container", { get() {
          return e || document.body;
        }, set(i) {
          e = F(i);
        } });
      }
      function Ro(t, e) {
        t = t ? S(t) : document.body;
        for (const i of li(t).reverse())
          zo(i, e);
        we(t, (i) => zo(i, e));
      }
      function zo(t, e) {
        const i = Ji(t);
        for (const s in i)
          zi(i[s], e);
      }
      function xh(t) {
        t.prototype.$mount = function(e) {
          const i = this;
          yh(e, i), i.$options.el = e, e.isConnected && zn(i);
        }, t.prototype.$destroy = function(e = false) {
          const i = this, { el: s } = i.$options;
          s && Un(i), pi(i, "destroy"), wh(s, i), e && Ct(i.$el);
        }, t.prototype.$create = Vi, t.prototype.$emit = function(e) {
          zi(this, e);
        }, t.prototype.$update = function(e = this.$el, i) {
          Ro(e, i);
        }, t.prototype.$reset = function() {
          Un(this), zn(this);
        }, t.prototype.$getComponent = As, Object.defineProperties(t.prototype, { $el: { get() {
          return this.$options.el;
        } }, $container: Object.getOwnPropertyDescriptor(t, "container") });
      }
      let Sh = 1;
      function Ye(t, e = null) {
        return (e == null ? undefined : e.id) || `${t.$options.id}-${Sh++}`;
      }
      var _h = { i18n: { next: "Next slide", previous: "Previous slide", slideX: "Slide %s", slideLabel: "%s of %s", role: "String" }, data: { selNav: false, role: "region" }, computed: { nav: ({ selNav: t }, e) => F(t, e), navChildren() {
        return st(this.nav);
      }, selNavItem: ({ attrItem: t }) => `[${t}],[data-${t}]`, navItems(t, e) {
        return ct(this.selNavItem, e);
      } }, watch: { nav(t, e) {
        O(t, "role", "tablist"), this.padNavitems(), e && this.$emit();
      }, list(t) {
        pt(t, "ul") && O(t, "role", "presentation");
      }, navChildren(t) {
        O(t, "role", "presentation"), this.padNavitems(), this.updateNav();
      }, navItems(t) {
        for (const e of t) {
          const i = It(e, this.attrItem), s = F("a,button", e) || e;
          let r, o = null;
          if (at(i)) {
            const l = L(i), u = this.slides[l];
            u && (u.id || (u.id = Ye(this, u)), o = u.id), r = this.t("slideX", x(i) + 1), O(s, "role", "tab");
          } else
            this.list && (this.list.id || (this.list.id = Ye(this, this.list)), o = this.list.id), r = this.t(i);
          O(s, { "aria-controls": o, "aria-label": O(s, "aria-label") || r });
        }
      }, slides(t) {
        t.forEach((e, i) => O(e, { role: this.nav ? "tabpanel" : "group", "aria-label": this.t("slideLabel", i + 1, this.length), "aria-roledescription": this.nav ? null : "slide" })), this.padNavitems();
      } }, connected() {
        O(this.$el, { role: this.role, "aria-roledescription": "carousel" });
      }, update: [{ write() {
        this.navItems.concat(this.nav).forEach((t) => t && (t.hidden = !this.maxIndex)), this.updateNav();
      }, events: ["resize"] }], events: [{ name: "click keydown", delegate: ({ selNavItem: t }) => t, filter: ({ parallax: t }) => !t, handler(t) {
        t.target.closest("a,button") && (t.type === "click" || t.keyCode === et.SPACE) && (t.preventDefault(), this.show(It(t.current, this.attrItem)));
      } }, { name: "itemshow", handler() {
        this.updateNav();
      } }, { name: "keydown", delegate: ({ selNavItem: t }) => t, filter: ({ parallax: t }) => !t, handler(t) {
        const { current: e, keyCode: i } = t, s = It(e, this.attrItem);
        if (!at(s))
          return;
        let r = i === et.HOME ? 0 : i === et.END ? "last" : i === et.LEFT ? "previous" : i === et.RIGHT ? "next" : -1;
        ~r && (t.preventDefault(), this.show(r));
      } }], methods: { updateNav() {
        const t = this.getValidIndex();
        for (const e of this.navItems) {
          const i = It(e, this.attrItem), s = F("a,button", e) || e;
          if (at(i)) {
            const o = L(i) === t;
            mt(e, this.clsActive, o), mt(s, "uk-disabled", !!this.parallax), O(s, { "aria-selected": o, tabindex: o && !this.parallax ? null : -1 }), o && s && tt(it(e), ":focus-within") && s.focus();
          } else
            mt(e, "uk-invisible", this.finite && (i === "previous" && t === 0 || i === "next" && t >= this.maxIndex));
        }
      }, padNavitems() {
        if (!this.nav)
          return;
        const t = [];
        for (let e = 0;e < this.length; e++) {
          const i = `${this.attrItem}="${e}"`;
          t[e] = this.navChildren.findLast((s) => s.matches(`[${i}]`)) || F(`<li ${i}><a href></a></li>`);
        }
        R(t, this.navChildren) || de(this.nav, t);
      } } };
      const Ah = "cubic-bezier(0.25, 0.46, 0.45, 0.94)", Eh = "cubic-bezier(0.165, 0.84, 0.44, 1)";
      var Uo = { mixins: [th, ih, _h, jn], props: { clsActivated: String, easing: String, index: Number, finite: Boolean, velocity: Number }, data: () => ({ easing: "ease", finite: false, velocity: 1, index: 0, prevIndex: -1, stack: [], percent: 0, clsActive: "uk-active", clsActivated: "", clsEnter: "uk-slide-enter", clsLeave: "uk-slide-leave", clsSlideActive: "uk-slide-active", Transitioner: false, transitionOptions: {} }), connected() {
        this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = [];
      }, disconnected() {
        ot(this.slides, this.clsActive);
      }, computed: { duration: ({ velocity: t }, e) => Fo(e.offsetWidth / t), list: ({ selList: t }, e) => F(t, e), maxIndex() {
        return this.length - 1;
      }, slides() {
        return st(this.list);
      }, length() {
        return this.slides.length;
      } }, watch: { slides(t, e) {
        e && this.$emit();
      } }, events: { itemshow({ target: t }) {
        V(t, this.clsEnter, this.clsSlideActive);
      }, itemshown({ target: t }) {
        ot(t, this.clsEnter);
      }, itemhide({ target: t }) {
        V(t, this.clsLeave);
      }, itemhidden({ target: t }) {
        ot(t, this.clsLeave, this.clsSlideActive);
      } }, methods: { async show(t, e = false) {
        var i;
        if (this.dragging || !this.length || this.parallax)
          return;
        const { stack: s } = this, r = e ? 0 : s.length, o = () => {
          s.splice(r, 1), s.length && this.show(s.shift(), true);
        };
        if (s[e ? "unshift" : "push"](t), !e && s.length > 1) {
          s.length === 2 && ((i = this._transitioner) == null || i.forward(Math.min(this.duration, 200)));
          return;
        }
        const l = this.getIndex(this.index), u = W(this.slides, this.clsActive) && this.slides[l], d = this.getIndex(t, this.index), v = this.slides[d];
        if (u === v) {
          o();
          return;
        }
        if (this.dir = Ih(t, l), this.prevIndex = l, this.index = d, u && !M(u, "beforeitemhide", [this]) || !M(v, "beforeitemshow", [this, u])) {
          this.index = this.prevIndex, o();
          return;
        }
        u && M(u, "itemhide", [this]), M(v, "itemshow", [this]), await this._show(u, v, e), u && M(u, "itemhidden", [this]), M(v, "itemshown", [this]), s.shift(), this._transitioner = null, s.length && requestAnimationFrame(() => s.length && this.show(s.shift(), true));
      }, getIndex(t = this.index, e = this.index) {
        return ft(Ht(t, this.slides, e, this.finite), 0, Math.max(0, this.maxIndex));
      }, getValidIndex(t = this.index, e = this.prevIndex) {
        return this.getIndex(t, e);
      }, async _show(t, e, i) {
        if (this._transitioner = this._getTransitioner(t, e, this.dir, { easing: i ? e.offsetWidth < 600 ? Ah : Eh : this.easing, ...this.transitionOptions }), !i && !t) {
          this._translate(1);
          return;
        }
        const { length: s } = this.stack;
        return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent);
      }, _translate(t, e = this.prevIndex, i = this.index) {
        const s = this._getTransitioner(e === i ? false : e, i);
        return s.translate(t), s;
      }, _getTransitioner(t = this.prevIndex, e = this.index, i = this.dir || 1, s = this.transitionOptions) {
        return new this.Transitioner(ee(t) ? this.slides[t] : t, ee(e) ? this.slides[e] : e, i * (xt ? -1 : 1), s);
      } } };
      function Ih(t, e) {
        return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
      }
      function Fo(t) {
        return 0.5 * t + 300;
      }
      var Wo = { mixins: [Uo], props: { animation: String }, data: { animation: "slide", clsActivated: "uk-transition-active", Animations: Bn, Transitioner: Qc }, computed: { animation({ animation: t, Animations: e }) {
        return { ...e[t] || e.slide, name: t };
      }, transitionOptions() {
        return { animation: this.animation };
      } }, observe: pe(), events: { itemshow({ target: t }) {
        V(t, this.clsActive);
      }, itemshown({ target: t }) {
        V(t, this.clsActivated);
      }, itemhidden({ target: t }) {
        ot(t, this.clsActive, this.clsActivated);
      } } }, Ch = { ...Bn, fade: { show() {
        return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
      }, percent(t) {
        return 1 - g(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
      } }, scale: { show() {
        return [{ opacity: 0, transform: gi(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
      }, percent(t) {
        return 1 - g(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t, transform: gi(1 + 0.5 * t), zIndex: 0 }, { zIndex: -1 }];
      } }, pull: { show(t) {
        return t < 0 ? [{ transform: bt(30), zIndex: -1 }, { transform: bt(), zIndex: 0 }] : [{ transform: bt(-100), zIndex: 0 }, { transform: bt(), zIndex: -1 }];
      }, percent(t, e, i) {
        return i < 0 ? 1 - Yi(e) : Yi(t);
      }, translate(t, e) {
        return e < 0 ? [{ transform: bt(30 * t), zIndex: -1 }, { transform: bt(-100 * (1 - t)), zIndex: 0 }] : [{ transform: bt(-t * 100), zIndex: 0 }, { transform: bt(30 * (1 - t)), zIndex: -1 }];
      } }, push: { show(t) {
        return t < 0 ? [{ transform: bt(100), zIndex: 0 }, { transform: bt(), zIndex: -1 }] : [{ transform: bt(-30), zIndex: -1 }, { transform: bt(), zIndex: 0 }];
      }, percent(t, e, i) {
        return i > 0 ? 1 - Yi(e) : Yi(t);
      }, translate(t, e) {
        return e < 0 ? [{ transform: bt(t * 100), zIndex: 0 }, { transform: bt(-30 * (1 - t)), zIndex: -1 }] : [{ transform: bt(-30 * t), zIndex: -1 }, { transform: bt(100 * (1 - t)), zIndex: 0 }];
      } } };
      function gi(t) {
        return `scale3d(${t}, ${t}, 1)`;
      }
      var qo = { ...Bn, fade: { show() {
        return [{ opacity: 0 }, { opacity: 1 }];
      }, percent(t) {
        return 1 - g(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t }, { opacity: t }];
      } }, scale: { show() {
        return [{ opacity: 0, transform: gi(1 - 0.2) }, { opacity: 1, transform: gi(1) }];
      }, percent(t) {
        return 1 - g(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t, transform: gi(1 - 0.2 * t) }, { opacity: t, transform: gi(1 - 0.2 + 0.2 * t) }];
      } } }, Yo = { i18n: { counter: "%s / %s" }, mixins: [Ln, Wo], functional: true, props: { counter: Boolean, preload: Number, nav: Boolean, slidenav: Boolean, delayControls: Number, videoAutoplay: Boolean, template: String }, data: () => ({ counter: false, preload: 1, nav: false, slidenav: true, delayControls: 3000, videoAutoplay: false, items: [], cls: "uk-open", clsPage: "uk-lightbox-page", clsFit: "uk-lightbox-items-fit", clsZoom: "uk-lightbox-zoom", attrItem: "uk-lightbox-item", selList: ".uk-lightbox-items", selClose: ".uk-close-large", selNav: ".uk-lightbox-thumbnav, .uk-lightbox-dotnav", selCaption: ".uk-lightbox-caption", selCounter: ".uk-lightbox-counter", pauseOnHover: false, velocity: 2, Animations: qo, template: '<div class="uk-lightbox uk-overflow-hidden"> <div class="uk-lightbox-items"></div> <div class="uk-position-top-right uk-position-sm uk-transition-fade" uk-inverse> <button class="uk-lightbox-close uk-close-large" type="button" uk-close></button> </div> <div class="uk-lightbox-slidenav uk-position-center-left uk-position-sm uk-transition-fade" uk-inverse> <a href uk-slidenav-previous uk-lightbox-item="previous"></a> </div> <div class="uk-lightbox-slidenav uk-position-center-right uk-position-sm uk-transition-fade" uk-inverse> <a href uk-slidenav-next uk-lightbox-item="next"></a> </div> <div class="uk-position-center-right uk-position-sm uk-transition-fade" uk-inverse style="max-height: 90vh; overflow: auto;"> <ul class="uk-lightbox-thumbnav uk-lightbox-thumbnav-vertical uk-thumbnav uk-thumbnav-vertical"></ul> <ul class="uk-lightbox-dotnav uk-dotnav uk-dotnav-vertical"></ul> </div> <div class="uk-lightbox-counter text-lg uk-position-top-left uk-position-sm uk-transition-fade" uk-inverse></div> <div class="uk-lightbox-caption uk-position-bottom text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>' }), created() {
        let t = F(this.template);
        pt(t, "template") && (t = fe(de(t)));
        const e = F(this.selList, t), i = this.$props.nav;
        Ct(ct(this.selNav, t).filter((o) => !tt(o, `.uk-${i}`)));
        for (const [o, l] of this.items.entries())
          $t(e, "<div>"), i === "thumbnav" && Ni(Th(l, this.videoAutoplay), $t(F(this.selNav, t), `<li uk-lightbox-item="${o}"><a href></a></li>`));
        this.slidenav || Ct(ct(".uk-lightbox-slidenav", t)), this.counter || Ct(F(this.selCounter, t)), V(e, this.clsFit);
        const s = F("[uk-close]", t), r = this.t("close");
        s && r && (s.dataset.i18n = JSON.stringify({ label: r })), this.$mount($t(this.container, t));
      }, events: [{ name: "click", self: true, filter: ({ bgClose: t }) => t, delegate: ({ selList: t }) => `${t} > *`, handler(t) {
        t.defaultPrevented || this.hide();
      } }, { name: "click", self: true, delegate: ({ clsZoom: t }) => `.${t}`, handler(t) {
        t.defaultPrevented || mt(this.list, this.clsFit);
      } }, { name: `${os} ${Wt} keydown`, filter: ({ delayControls: t }) => t, handler() {
        this.showControls();
      } }, { name: "shown", self: true, handler() {
        this.showControls();
      } }, { name: "hide", self: true, handler() {
        this.hideControls(), ot(this.slides, this.clsActive), nt.stop(this.slides);
      } }, { name: "hidden", self: true, handler() {
        this.$destroy(true);
      } }, { name: "keyup", el: () => document, handler({ keyCode: t }) {
        if (!this.isToggled(this.$el) || !this.draggable)
          return;
        let e = -1;
        t === et.LEFT ? e = "previous" : t === et.RIGHT ? e = "next" : t === et.HOME ? e = 0 : t === et.END && (e = "last"), ~e && this.show(e);
      } }, { name: "beforeitemshow", handler(t) {
        de(F(this.selCaption, this.$el), this.getItem().caption || ""), de(F(this.selCounter, this.$el), this.t("counter", this.index + 1, this.slides.length));
        for (let e = -this.preload;e <= this.preload; e++)
          this.loadItem(this.index + e);
        this.isToggled() || (this.draggable = false, t.preventDefault(), this.toggleElement(this.$el, true, false), this.animation = qo.scale, ot(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
      } }, { name: "itemshown", handler() {
        this.draggable = this.$props.draggable;
      } }, { name: "itemload", async handler(t, e) {
        const { source: i, type: s, attrs: r = {} } = e;
        if (this.setItem(e, "<span uk-spinner uk-inverse></span>"), !i)
          return;
        let o;
        const l = { allowfullscreen: "", style: "max-width: 100%; box-sizing: border-box;", "uk-responsive": "", "uk-video": `${!!this.videoAutoplay}` };
        if (s === "image" || Vo(i)) {
          const u = xe("img");
          So(u, e.sources), O(u, { src: i, ...ie(e, ["alt", "srcset", "sizes"]), ...r }), J(u, "load", () => this.setItem(e, it(u) || u)), J(u, "error", () => this.setError(e));
        } else if (s === "video" || Jo(i)) {
          const u = this.videoAutoplay === "inline", d = xe("video", { src: i, playsinline: "", controls: u ? null : "", loop: u ? "" : null, poster: this.videoAutoplay ? null : e.poster, "uk-video": u ? "automute: true" : !!this.videoAutoplay, ...r });
          J(d, "loadedmetadata", () => this.setItem(e, d)), J(d, "error", () => this.setError(e));
        } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i))
          this.setItem(e, xe("iframe", { src: i, allowfullscreen: "", class: "uk-lightbox-iframe", ...r }));
        else if (o = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))
          this.setItem(e, xe("iframe", { src: `https://www.youtube${o[1] || ""}.com/embed/${o[2]}${o[3] ? `?${o[3]}` : ""}`, width: 1920, height: 1080, ...l, ...r }));
        else if (o = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))
          try {
            const { height: u, width: d } = await (await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`, { credentials: "omit" })).json();
            this.setItem(e, xe("iframe", { src: `https://player.vimeo.com/video/${o[1]}${o[2] ? `?${o[2]}` : ""}`, width: d, height: u, ...l, ...r }));
          } catch {
            this.setError(e);
          }
      } }, { name: "itemloaded", handler() {
        this.$emit("resize");
      } }], update: { read() {
        for (const t of ct(`${this.selList} :not([controls]):is(img,video)`, this.$el))
          mt(t, this.clsZoom, (t.naturalHeight || t.videoHeight) - this.$el.offsetHeight > Math.max(0, (t.naturalWidth || t.videoWidth) - this.$el.offsetWidth));
      }, events: ["resize"] }, methods: { loadItem(t = this.index) {
        const e = this.getItem(t);
        this.getSlide(e).childElementCount || M(this.$el, "itemload", [e]);
      }, getItem(t = this.index) {
        return this.items[Ht(t, this.slides)];
      }, setItem(t, e) {
        M(this.$el, "itemloaded", [this, de(this.getSlide(t), e)]);
      }, getSlide(t) {
        return this.slides[this.items.indexOf(t)];
      }, setError(t) {
        this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2" uk-inverse></span>');
      }, showControls() {
        clearTimeout(this.controlsTimer), this.controlsTimer = this.delayControls && setTimeout(this.hideControls, this.delayControls), V(this.$el, "uk-active", "uk-transition-active");
      }, hideControls() {
        ot(this.$el, "uk-active", "uk-transition-active");
      } } };
      function xe(t, e) {
        const i = fe(`<${t}>`);
        return O(i, e), i;
      }
      function Th(t, e) {
        const i = t.poster || t.thumb && (t.type === "image" || Vo(t.thumb)) ? xe("img", { src: t.poster || t.thumb, alt: "" }) : t.thumb && (t.type === "video" || Jo(t.thumb)) ? xe("video", { src: t.thumb, loop: "", playsinline: "", "uk-video": `autoplay: ${!!e}; automute: true` }) : xe("canvas");
        return t.thumbRatio && (i.style.aspectRatio = t.thumbRatio), i;
      }
      function Vo(t) {
        return t == null ? undefined : t.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i);
      }
      function Jo(t) {
        return t == null ? undefined : t.match(/\.(mp4|webm|ogv)($|\?)/i);
      }
      const Oh = ".uk-disabled *, .uk-disabled, [disabled]";
      var Dh = { install: Ph, props: { toggle: String }, data: { toggle: "a" }, computed: { toggles: ({ toggle: t }, e) => ct(t, e) }, watch: { toggles(t) {
        this.hide();
        for (const e of t)
          pt(e, "a") && O(e, "role", "button");
      } }, disconnected() {
        this.hide();
      }, events: { name: "click", delegate: ({ toggle: t }) => t, handler(t) {
        t.defaultPrevented || (t.preventDefault(), tt(t.current, Oh) || this.show(t.current));
      } }, methods: { show(t) {
        let e = this.toggles.map(Ko);
        if (this.nav === "thumbnav" && Mh.call(this, this.toggles, e), e = Ot(e, "source"), zt(t)) {
          const { source: i } = Ko(t);
          t = I(e, ({ source: s }) => i === s);
        }
        return this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props, items: e }), J(this.panel.$el, "hidden", () => this.panel = null), this.panel.show(t);
      }, hide() {
        var t;
        return (t = this.panel) == null ? undefined : t.hide();
      } } };
      function Ph(t, e) {
        t.lightboxPanel || t.component("lightboxPanel", Yo), Y(e.props, t.component("lightboxPanel").options.props);
      }
      function Mh(t, e) {
        for (const [i, s] of Object.entries(t)) {
          if (e[i].thumb)
            continue;
          const r = li(s).reverse().concat(s).find((l) => this.$el.contains(l) && (l === s || ct(this.toggle, l).length === 1));
          if (!r)
            continue;
          const o = F("img,video", r);
          o && (e[i].thumb = o.currentSrc || o.poster || o.src, e[i].thumbRatio = (o.naturalWidth || o.videoWidth) / (o.naturalHeight || o.videoHeight));
        }
      }
      function Ko(t) {
        const e = {};
        for (const i of t.getAttributeNames()) {
          const s = i.replace(/^data-/, "");
          e[s === "href" ? "source" : s] = t.getAttribute(i);
        }
        return e.attrs = fi(e.attrs), e;
      }
      var Hh = { mixins: [qi], functional: true, args: ["message", "status"], data: { message: "", status: "", timeout: 5000, group: "", pos: "top-center", clsContainer: "uk-notification", clsClose: "uk-notification-close", clsMsg: "uk-notification-message" }, install: Nh, computed: { marginProp: ({ pos: t }) => `margin-${t.match(/[a-z]+(?=-)/)[0]}`, startProps() {
        return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
      } }, created() {
        const t = `${this.clsContainer}-${this.pos}`, e = `data-${this.clsContainer}-container`, i = F(`.${t}[${e}]`, this.container) || $t(this.container, `<div class="${this.clsContainer} ${t}" ${e}></div>`);
        this.$mount($t(i, `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`));
      }, async connected() {
        const t = x(g(this.$el, this.marginProp));
        await nt.start(g(this.$el, this.startProps), { opacity: 1, [this.marginProp]: t }), this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      }, events: { click(t) {
        t.target.closest('a[href="#"],a[href=""]') && t.preventDefault(), this.close();
      }, [Be]() {
        this.timer && clearTimeout(this.timer);
      }, [ai]() {
        this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      } }, methods: { async close(t) {
        const e = (i) => {
          const s = it(i);
          M(i, "close", [this]), Ct(i), s != null && s.hasChildNodes() || Ct(s);
        };
        this.timer && clearTimeout(this.timer), t || await nt.start(this.$el, this.startProps), e(this.$el);
      } } };
      function Nh(t) {
        t.notification.closeAll = function(e, i) {
          we(document.body, (s) => {
            const r = t.getComponent(s, "notification");
            r && (!e || e === r.group) && r.close(i);
          });
        };
      }
      var Es = { props: { media: Boolean }, data: { media: false }, connected() {
        const t = Lh(this.media, this.$el);
        if (this.matchMedia = true, t) {
          this.mediaObj = window.matchMedia(t);
          const e = () => {
            this.matchMedia = this.mediaObj.matches, M(this.$el, hi("mediachange", false, true, [this.mediaObj]));
          };
          this.offMediaObj = J(this.mediaObj, "change", () => {
            e(), this.$emit("resize");
          }), e();
        }
      }, disconnected() {
        var t;
        (t = this.offMediaObj) == null || t.call(this);
      } };
      function Lh(t, e) {
        if (ht(t)) {
          if (w(t, "@"))
            t = x(g(e, `--uk-breakpoint-${t.slice(1)}`));
          else if (isNaN(t))
            return t;
        }
        return t && at(t) ? `(min-width: ${t}px)` : "";
      }
      function Go(t) {
        return St(t) ? Math.ceil(Math.max(0, ...ct("[stroke]", t).map((e) => {
          var i;
          return ((i = e.getTotalLength) == null ? undefined : i.call(e)) || 0;
        }))) : 0;
      }
      const Is = { x: Cs, y: Cs, rotate: Cs, scale: Cs, color: Fn, backgroundColor: Fn, borderColor: Fn, blur: Ve, hue: Ve, fopacity: Ve, grayscale: Ve, invert: Ve, saturate: Ve, sepia: Ve, opacity: jh, stroke: Rh, bgx: Qo, bgy: Qo }, { keys: Zo } = Object;
      var Xo = { mixins: [Es], props: na(Zo(Is), "list"), data: na(Zo(Is), undefined), computed: { props(t, e) {
        const i = {};
        for (const r in t)
          r in Is && !vt(t[r]) && (i[r] = t[r].slice());
        const s = {};
        for (const r in i)
          s[r] = Is[r](r, e, i[r], i);
        return s;
      } }, events: { load() {
        this.$emit();
      } }, methods: { reset() {
        for (const t in this.getCss(0))
          g(this.$el, t, "");
      }, getCss(t) {
        const e = {};
        for (const i in this.props)
          this.props[i](e, ft(t));
        return e.willChange = Object.keys(e).map(hs).join(","), e;
      } } };
      function Cs(t, e, i) {
        let s = Os(i) || { x: "px", y: "px", rotate: "deg" }[t] || "", r;
        return t === "x" || t === "y" ? (t = `translate${k(t)}`, r = (o) => x(x(o).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "", r = (o) => {
          var l;
          return Os([o]) ? At(o, "width", e, true) / e[`offset${(l = o.endsWith) != null && l.call(o, "vh") ? "Height" : "Width"}`] : x(o);
        }), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = vi(i, r), (o, l) => {
          o.transform = `${o.transform || ""} ${t}(${Ki(i, l)}${s})`;
        };
      }
      function Fn(t, e, i) {
        return i.length === 1 && i.unshift(Gi(e, t, "")), i = vi(i, (s) => Bh(e, s)), (s, r) => {
          const [o, l, u] = sa(i, r), d = o.map((v, $) => (v += u * (l[$] - v), $ === 3 ? x(v) : parseInt(v, 10))).join(",");
          s[t] = `rgba(${d})`;
        };
      }
      function Bh(t, e) {
        return Gi(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(x);
      }
      function Ve(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = Os(i) || { blur: "px", hue: "deg" }[t] || "%";
        return t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t, i = vi(i), (r, o) => {
          const l = Ki(i, o);
          r.filter = `${r.filter || ""} ${t}(${l + s})`;
        };
      }
      function jh(t, e, i) {
        return i.length === 1 && i.unshift(Gi(e, t, "")), i = vi(i), (s, r) => {
          s[t] = Ki(i, r);
        };
      }
      function Rh(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = Os(i), r = Go(e);
        return i = vi(i.reverse(), (o) => (o = x(o), s === "%" ? o * r / 100 : o)), i.some(([o]) => o) ? (g(e, "strokeDasharray", r), (o, l) => {
          o.strokeDashoffset = Ki(i, l);
        }) : ut;
      }
      function Qo(t, e, i, s) {
        i.length === 1 && i.unshift(0);
        const r = t === "bgy" ? "height" : "width";
        s[t] = vi(i, (u) => At(u, r, e));
        const o = ["bgx", "bgy"].filter((u) => (u in s));
        if (o.length === 2 && t === "bgx")
          return ut;
        if (Gi(e, "backgroundSize", "") === "cover")
          return zh(t, e, i, s);
        const l = {};
        for (const u of o)
          l[u] = ta(e, u);
        return ea(o, l, s);
      }
      function zh(t, e, i, s) {
        const r = Uh(e);
        if (!r.width)
          return ut;
        const o = { width: e.offsetWidth, height: e.offsetHeight }, l = ["bgx", "bgy"].filter(($) => ($ in s)), u = {};
        for (const $ of l) {
          const y = s[$].map(([Z]) => Z), A = Math.min(...y), D = Math.max(...y), B = y.indexOf(A) < y.indexOf(D), q = D - A;
          u[$] = `${(B ? -q : 0) - (B ? A : D)}px`, o[$ === "bgy" ? "height" : "width"] += q;
        }
        const d = Zs.cover(r, o);
        for (const $ of l) {
          const y = $ === "bgy" ? "height" : "width", A = d[y] - o[y];
          u[$] = `max(${ta(e, $)},-${A}px) + ${u[$]}`;
        }
        const v = ea(l, u, s);
        return ($, y) => {
          v($, y), $.backgroundSize = `${d.width}px ${d.height}px`, $.backgroundRepeat = "no-repeat";
        };
      }
      function ta(t, e) {
        return Gi(t, `background-position-${e.slice(-1)}`, "");
      }
      function ea(t, e, i) {
        return function(s, r) {
          for (const o of t) {
            const l = Ki(i[o], r);
            s[`background-position-${o.slice(-1)}`] = `calc(${e[o]} + ${l}px)`;
          }
        };
      }
      const ia = {}, Ts = {};
      function Uh(t) {
        const e = g(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
        if (Ts[e])
          return Ts[e];
        const i = new Image;
        return e && (i.src = e, !i.naturalWidth && !ia[e]) ? (gt(i, "error load", () => {
          Ts[e] = Wn(i), M(t, hi("load", false));
        }), ia[e] = true, Wn(i)) : Ts[e] = Wn(i);
      }
      function Wn(t) {
        return { width: t.naturalWidth, height: t.naturalHeight };
      }
      function vi(t, e = x) {
        const i = [], { length: s } = t;
        let r = 0;
        for (let o = 0;o < s; o++) {
          let [l, u] = ht(t[o]) ? t[o].trim().split(/ (?![^(]*\))/) : [t[o]];
          if (l = e(l), u = u ? x(u) / 100 : null, o === 0 ? u === null ? u = 0 : u && i.push([l, 0]) : o === s - 1 && (u === null ? u = 1 : u !== 1 && (i.push([l, u]), u = 1)), i.push([l, u]), u === null)
            r++;
          else if (r) {
            const d = i[o - r - 1][1], v = (u - d) / (r + 1);
            for (let $ = r;$ > 0; $--)
              i[o - $][1] = d + v * (r - $ + 1);
            r = 0;
          }
        }
        return i;
      }
      function sa(t, e) {
        const i = I(t.slice(1), ([, s]) => e <= s) + 1;
        return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])];
      }
      function Ki(t, e) {
        const [i, s, r] = sa(t, e);
        return i + Math.abs(i - s) * r * (i < s ? 1 : -1);
      }
      const Fh = /^-?\d+(?:\.\d+)?(\S+)?/;
      function Os(t, e) {
        var i;
        for (const s of t) {
          const r = (i = s.match) == null ? undefined : i.call(s, Fh);
          if (r)
            return r[1];
        }
        return e;
      }
      function Gi(t, e, i) {
        const s = t.style[e], r = g(g(t, e, i), e);
        return t.style[e] = s, r;
      }
      function na(t, e) {
        return t.reduce((i, s) => (i[s] = e, i), {});
      }
      function ra(t, e) {
        return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
      }
      var Wh = { mixins: [Xo], props: { target: String, viewport: Number, easing: Number, start: String, end: String }, data: { target: false, viewport: 1, easing: 1, start: 0, end: 0 }, computed: { target: ({ target: t }, e) => oa(t && qt(t, e) || e), start({ start: t }) {
        return At(t, "height", this.target, true);
      }, end({ end: t, viewport: e }) {
        return At(t || (e = (1 - e) * 100) && `${e}vh+${e}%`, "height", this.target, true);
      } }, observe: [uo(), Fi({ target: ({ target: t }) => t }), pe({ target: ({ $el: t, target: e }) => [t, e, ze(e, true)] })], update: { read({ percent: t }, e) {
        if (e.has("scroll") || (t = false), !St(this.$el))
          return false;
        if (!this.matchMedia)
          return;
        const i = t;
        return t = ra(ws(this.target, this.start, this.end), this.easing), { percent: t, style: i === t ? false : this.getCss(t) };
      }, write({ style: t }) {
        if (!this.matchMedia) {
          this.reset();
          return;
        }
        t && g(this.$el, t);
      }, events: ["scroll", "resize"] } };
      function oa(t) {
        return t ? "offsetTop" in t ? t : oa(it(t)) : document.documentElement;
      }
      var aa = { props: { parallax: Boolean, parallaxTarget: Boolean, parallaxStart: String, parallaxEnd: String, parallaxEasing: Number }, data: { parallax: false, parallaxTarget: false, parallaxStart: 0, parallaxEnd: 0, parallaxEasing: 0 }, observe: [pe({ target: ({ $el: t, parallaxTarget: e }) => [t, e], filter: ({ parallax: t }) => t }), Fi({ filter: ({ parallax: t }) => t })], computed: { parallaxTarget({ parallaxTarget: t }, e) {
        return t && qt(t, e) || this.list;
      } }, update: { read() {
        if (!this.parallax)
          return false;
        const t = this.parallaxTarget;
        if (!t)
          return false;
        const e = At(this.parallaxStart, "height", t, true), i = At(this.parallaxEnd, "height", t, true), s = ra(ws(t, e, i), this.parallaxEasing);
        return { parallax: this.getIndexAt(s) };
      }, write({ parallax: t }) {
        const [e, i] = t, s = this.getValidIndex(e + Math.ceil(i)), r = this.slides[e], o = this.slides[s], { triggerShow: l, triggerShown: u, triggerHide: d, triggerHidden: v } = qh(this);
        if (~this.prevIndex)
          for (const y of new Set([this.index, this.prevIndex]))
            b([s, e], y) || (d(this.slides[y]), v(this.slides[y]));
        const $ = this.prevIndex !== e || this.index !== s;
        this.dir = 1, this.prevIndex = e, this.index = s, r !== o && d(r), l(o), $ && u(r), this._translate(r === o ? 1 : i, r, o);
      }, events: ["scroll", "resize"] }, methods: { getIndexAt(t) {
        const e = t * (this.length - 1);
        return [Math.floor(e), e % 1];
      } } };
      function qh(t) {
        const { clsSlideActive: e, clsEnter: i, clsLeave: s } = t;
        return { triggerShow: r, triggerShown: o, triggerHide: l, triggerHidden: u };
        function r(d) {
          W(d, s) && (l(d), u(d)), W(d, e) || (M(d, "beforeitemshow", [t]), M(d, "itemshow", [t]));
        }
        function o(d) {
          W(d, i) && M(d, "itemshown", [t]);
        }
        function l(d) {
          W(d, e) || r(d), W(d, i) && o(d), W(d, s) || (M(d, "beforeitemhide", [t]), M(d, "itemhide", [t]));
        }
        function u(d) {
          W(d, s) && M(d, "itemhidden", [t]);
        }
      }
      var la = { update: { write() {
        if (this.stack.length || this.dragging || this.parallax)
          return;
        const t = this.getValidIndex();
        !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1);
      }, events: ["resize"] } }, ca = { observe: xs({ target: ({ slides: t }) => t, targets: (t) => t.getAdjacentSlides() }), methods: { getAdjacentSlides() {
        return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
      } } };
      function Yh(t, e, i, { center: s, easing: r, list: o }) {
        const l = t ? Zi(t, o, s) : Zi(e, o, s) + H(e).width * i, u = e ? Zi(e, o, s) : l + H(t).width * i * (xt ? -1 : 1), { promise: d, resolve: v } = Io();
        return { dir: i, show($, y = 0, A) {
          const D = A ? "linear" : r;
          return $ -= Math.round($ * ft(y, -1, 1)), g(o, "transitionProperty", "none"), this.translate(y), g(o, "transitionProperty", ""), y = t ? y : ft(y, 0, 1), We(this.getItemIn(), "itemin", { percent: y, duration: $, timing: D, dir: i }), t && We(this.getItemIn(true), "itemout", { percent: 1 - y, duration: $, timing: D, dir: i }), nt.start(o, { transform: bt(-u * (xt ? -1 : 1), "px") }, $, D).then(v, ut), d;
        }, cancel() {
          return nt.cancel(o);
        }, reset() {
          g(o, "transform", "");
        }, async forward($, y = this.percent()) {
          return await this.cancel(), this.show($, y, true);
        }, translate($) {
          if ($ === this.percent())
            return;
          const y = this.getDistance() * i * (xt ? -1 : 1);
          g(o, "transform", bt(ft(-u + (y - y * $), -$i(o), H(o).width) * (xt ? -1 : 1), "px"));
          const A = this.getActives(), D = this.getItemIn(), B = this.getItemIn(true);
          $ = t ? ft($, -1, 1) : 0;
          for (const q of st(o)) {
            const Z = b(A, q), jt = q === D, me = q === B, _e = jt || !me && (Z || i * (xt ? -1 : 1) === -1 ^ Ds(q, o) > Ds(t || e));
            We(q, `itemtranslate${_e ? "in" : "out"}`, { dir: i, percent: me ? 1 - $ : jt ? $ : Z ? 1 : 0 });
          }
        }, percent() {
          return Math.abs((new DOMMatrix(g(o, "transform")).m41 * (xt ? -1 : 1) + l) / (u - l));
        }, getDistance() {
          return Math.abs(u - l);
        }, getItemIn($ = false) {
          let y = this.getActives(), A = ua(o, Zi(e || t, o, s));
          if ($) {
            const D = y;
            y = A, A = D;
          }
          return A[I(A, (D) => !b(y, D))];
        }, getActives() {
          return ua(o, Zi(t || e, o, s));
        } };
      }
      function Zi(t, e, i) {
        const s = Ds(t, e);
        return i ? s - Vh(t, e) : Math.min(s, ha(e));
      }
      function ha(t) {
        return Math.max(0, $i(t) - H(t).width);
      }
      function $i(t, e) {
        return dt(st(t).slice(0, e), (i) => H(i).width);
      }
      function Vh(t, e) {
        return H(e).width / 2 - H(t).width / 2;
      }
      function Ds(t, e) {
        return t && (un(t).left + (xt ? H(t).width - H(e).width : 0)) * (xt ? -1 : 1) || 0;
      }
      function ua(t, e) {
        e -= 1;
        const i = H(t).width, s = e + i + 2;
        return st(t).filter((r) => {
          const o = Ds(r, t), l = o + Math.min(H(r).width, i);
          return o >= e && l <= s;
        });
      }
      var Jh = { mixins: [Lt, Uo, la, aa, ca], props: { center: Boolean, sets: Boolean, active: String }, data: { center: false, sets: false, attrItem: "uk-slider-item", selList: ".uk-slider-items", selNav: ".uk-slider-nav", clsContainer: "uk-slider-container", active: "all", Transitioner: Yh }, computed: { finite({ finite: t }) {
        return t || Kh(this.list, this.center);
      }, maxIndex() {
        if (!this.finite || this.center && !this.sets)
          return this.length - 1;
        if (this.center)
          return K(this.sets);
        let t = 0;
        const e = ha(this.list), i = I(this.slides, (s) => {
          if (t >= e - 0.005)
            return true;
          t += H(s).width;
        });
        return ~i ? i : this.length - 1;
      }, sets({ sets: t }) {
        if (!t || this.parallax)
          return;
        let e = 0;
        const i = [], s = H(this.list).width;
        for (let r = 0;r < this.length; r++) {
          const o = H(this.slides[r]).width;
          e + o > s && (e = 0), this.center ? e < s / 2 && e + o + H(this.slides[Ht(r + 1, this.slides)]).width / 2 > s / 2 && (i.push(r), e = s / 2 - o / 2) : e === 0 && i.push(Math.min(r, this.maxIndex)), e += o;
        }
        if (i.length)
          return i;
      }, transitionOptions() {
        return { center: this.center, list: this.list };
      }, slides() {
        return st(this.list).filter(St);
      } }, connected() {
        mt(this.$el, this.clsContainer, !F(`.${this.clsContainer}`, this.$el));
      }, observe: pe({ target: ({ slides: t, $el: e }) => [e, ...t] }), update: { write() {
        for (const t of this.navItems) {
          const e = L(It(t, this.attrItem));
          e !== false && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !b(this.sets, e));
        }
        this.reorder(), this.parallax || this._translate(1), this.updateActiveClasses();
      }, events: ["resize"] }, events: { beforeitemshow(t) {
        !this.dragging && this.sets && this.stack.length < 2 && !b(this.sets, this.index) && (this.index = this.getValidIndex());
        const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
        if (!this.dragging && e > 1) {
          for (let r = 0;r < e; r++)
            this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
          t.preventDefault();
          return;
        }
        const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex, s = $i(this.list) / this.length;
        this.duration = Fo(s / this.velocity) * (H(this.slides[i]).width / s), this.reorder();
      }, itemshow() {
        ~this.prevIndex && V(this._getTransitioner().getItemIn(), this.clsActive), this.updateActiveClasses(this.prevIndex);
      }, itemshown() {
        this.updateActiveClasses();
      } }, methods: { reorder() {
        if (this.finite) {
          g(this.slides, "order", "");
          return;
        }
        const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
        if (this.slides.forEach((r, o) => g(r, "order", this.dir > 0 && o < t ? 1 : this.dir < 0 && o >= this.index ? -1 : "")), !this.center || !this.length)
          return;
        const e = this.slides[t];
        let i = H(this.list).width / 2 - H(e).width / 2, s = 0;
        for (;i > 0; ) {
          const r = this.getIndex(--s + t, t), o = this.slides[r];
          g(o, "order", r > t ? -2 : -1), i -= H(o).width;
        }
      }, updateActiveClasses(t = this.index) {
        let e = this._getTransitioner(t).getActives();
        this.active !== "all" && (e = [this.slides[this.getValidIndex(t)]]);
        const i = [this.clsActive, !this.sets || b(this.sets, x(this.index)) ? this.clsActivated : ""];
        for (const s of this.slides) {
          const r = b(e, s);
          mt(s, i, r), O(s, "aria-hidden", !r);
          for (const o of ct(Oi, s))
            a(o, "_tabindex") || (o._tabindex = O(o, "tabindex")), O(o, "tabindex", r ? o._tabindex : -1);
        }
      }, getValidIndex(t = this.index, e = this.prevIndex) {
        if (t = this.getIndex(t, e), !this.sets)
          return t;
        let i;
        do {
          if (b(this.sets, t))
            return t;
          i = t, t = this.getIndex(t + this.dir, e);
        } while (t !== i);
        return t;
      }, getAdjacentSlides() {
        const { width: t } = H(this.list), e = -t, i = t * 2, s = H(this.slides[this.index]).width, r = this.center ? t / 2 - s / 2 : 0, o = new Set;
        for (const l of [-1, 1]) {
          let u = r + (l > 0 ? s : 0), d = 0;
          do {
            const v = this.slides[this.getIndex(this.index + l + d++ * l)];
            u += H(v).width * l, o.add(v);
          } while (this.length > d && u > e && u < i);
        }
        return Array.from(o);
      }, getIndexAt(t) {
        let e = -1;
        const i = this.center ? $i(this.list) - (H(this.slides[0]).width / 2 + H(K(this.slides)).width / 2) : $i(this.list, this.maxIndex);
        let s = t * i, r = 0;
        do {
          const o = H(this.slides[++e]).width, l = this.center ? o / 2 + H(this.slides[e + 1]).width / 2 : o;
          r = s / l % 1, s -= l;
        } while (s >= 0 && e < this.maxIndex);
        return [e, r];
      } } };
      function Kh(t, e) {
        if (!t || t.length < 2)
          return true;
        const { width: i } = H(t);
        if (!e)
          return Math.ceil($i(t)) < Math.trunc(i + Gh(t));
        const s = st(t), r = Math.trunc(i / 2);
        for (const o in s) {
          const l = s[o], u = H(l).width, d = new Set([l]);
          let v = 0;
          for (const $ of [-1, 1]) {
            let y = u / 2, A = 0;
            for (;y < r; ) {
              const D = s[Ht(+o + $ + A++ * $, s)];
              if (d.has(D))
                return true;
              y += H(D).width, d.add(D);
            }
            v = Math.max(v, u / 2 + H(s[Ht(+o + $, s)]).width / 2 - (y - r));
          }
          if (Math.trunc(v) > dt(s.filter(($) => !d.has($)), ($) => H($).width))
            return true;
        }
        return false;
      }
      function Gh(t) {
        return Math.max(0, ...st(t).map((e) => H(e).width));
      }
      var da = { mixins: [Xo], beforeConnect() {
        this.item = this.$el.closest(`.${this.$options.id.replace("parallax", "items")} > *`);
      }, disconnected() {
        this.item = null;
      }, events: [{ name: "itemin itemout", self: true, el: ({ item: t }) => t, handler({ type: t, detail: { percent: e, duration: i, timing: s, dir: r } }) {
        ke.read(() => {
          if (!this.matchMedia)
            return;
          const o = this.getCss(pa(t, r, e)), l = this.getCss(fa(t) ? 0.5 : r > 0 ? 1 : 0);
          ke.write(() => {
            g(this.$el, o), nt.start(this.$el, l, i, s).catch(ut);
          });
        });
      } }, { name: "transitioncanceled transitionend", self: true, el: ({ item: t }) => t, handler() {
        nt.cancel(this.$el);
      } }, { name: "itemtranslatein itemtranslateout", self: true, el: ({ item: t }) => t, handler({ type: t, detail: { percent: e, dir: i } }) {
        ke.read(() => {
          if (!this.matchMedia) {
            this.reset();
            return;
          }
          const s = this.getCss(pa(t, i, e));
          ke.write(() => g(this.$el, s));
        });
      } }] };
      function fa(t) {
        return C(t, "in");
      }
      function pa(t, e, i) {
        return i /= 2, fa(t) ^ e < 0 ? i : 1 - i;
      }
      var Zh = { mixins: [Lt, Wo, la, aa, ca], props: { ratio: String, minHeight: String, maxHeight: String }, data: { ratio: "16:9", minHeight: undefined, maxHeight: undefined, selList: ".uk-slideshow-items", attrItem: "uk-slideshow-item", selNav: ".uk-slideshow-nav", Animations: Ch }, watch: { list(t) {
        g(t, { aspectRatio: this.ratio ? this.ratio.replace(":", "/") : undefined, minHeight: this.minHeight, maxHeight: this.maxHeight, width: "100%" });
      } }, methods: { getAdjacentSlides() {
        return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
      } } }, Xh = { mixins: [Lt, yo], props: { group: String, threshold: Number, clsItem: String, clsPlaceholder: String, clsDrag: String, clsDragState: String, clsBase: String, clsNoDrag: String, clsEmpty: String, clsCustom: String, handle: String }, data: { group: false, threshold: 5, clsItem: "uk-sortable-item", clsPlaceholder: "uk-sortable-placeholder", clsDrag: "uk-sortable-drag", clsDragState: "uk-drag", clsBase: "uk-sortable", clsNoDrag: "uk-sortable-nodrag", clsEmpty: "uk-sortable-empty", clsCustom: "", handle: false, pos: {} }, events: { name: Wt, passive: false, handler(t) {
        this.init(t);
      } }, computed: { target: (t, e) => (e.tBodies || [e])[0], items() {
        return st(this.target);
      }, isEmpty() {
        return !this.items.length;
      }, handles({ handle: t }, e) {
        return t ? ct(t, e) : this.items;
      } }, watch: { isEmpty(t) {
        mt(this.target, this.clsEmpty, t);
      }, handles(t, e) {
        g(e, { touchAction: "", userSelect: "" }), g(t, { touchAction: "none", userSelect: "none" });
      } }, update: { write(t) {
        if (!this.drag || !it(this.placeholder))
          return;
        const { pos: { x: e, y: i }, origin: { offsetTop: s, offsetLeft: r }, placeholder: o } = this;
        g(this.drag, { top: i - s, left: e - r });
        const l = this.getSortable(document.elementFromPoint(e, i));
        if (!l)
          return;
        const { items: u } = l;
        if (u.some(nt.inProgress))
          return;
        const d = iu(u, { x: e, y: i });
        if (u.length && (!d || d === o))
          return;
        const v = this.getSortable(o), $ = su(l.target, d, o, e, i, l === v && t.moved !== d);
        $ !== false && ($ && o === $ || (l !== v ? (v.remove(o), t.moved = d) : delete t.moved, l.insert(o, $), this.touched.add(l)));
      }, events: ["move"] }, methods: { init(t) {
        const { target: e, button: i, defaultPrevented: s } = t, [r] = this.items.filter((o) => o.contains(e));
        !r || s || i > 0 || ls(e) || e.closest(`.${this.clsNoDrag}`) || this.handle && !e.closest(this.handle) || (t.preventDefault(), this.pos = ue(t), this.touched = new Set([this]), this.placeholder = r, this.origin = { target: e, index: he(r), ...this.pos }, J(document, os, this.move), J(document, be, this.end), this.threshold || this.start(t));
      }, start(t) {
        this.drag = eu(this.$container, this.placeholder);
        const { left: e, top: i } = H(this.placeholder);
        Y(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - i }), V(this.drag, this.clsDrag, this.clsCustom), V(this.placeholder, this.clsPlaceholder), V(this.items, this.clsItem), V(document.documentElement, this.clsDragState), M(this.$el, "start", [this, this.placeholder]), Qh(this.pos), this.move(t);
      }, move: ru(function(t) {
        Y(this.pos, ue(t)), !this.drag && (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t), this.$emit("move");
      }), end() {
        if (je(document, os, this.move), je(document, be, this.end), !this.drag)
          return;
        tu();
        const t = this.getSortable(this.placeholder);
        this === t ? this.origin.index !== he(this.placeholder) && M(this.$el, "moved", [this, this.placeholder]) : (M(t.$el, "added", [t, this.placeholder]), M(this.$el, "removed", [this, this.placeholder])), M(this.$el, "stop", [this, this.placeholder]), Ct(this.drag), this.drag = null;
        for (const { clsPlaceholder: e, clsItem: i } of this.touched)
          for (const s of this.touched)
            ot(s.items, e, i);
        this.touched = null, ot(document.documentElement, this.clsDragState);
      }, insert(t, e) {
        V(this.items, this.clsItem), e && e.previousElementSibling !== t ? this.animate(() => ds(e, t)) : !e && this.target.lastElementChild !== t && this.animate(() => $t(this.target, t));
      }, remove(t) {
        this.target.contains(t) && this.animate(() => Ct(t));
      }, getSortable(t) {
        do {
          const e = this.$getComponent(t, "sortable");
          if (e && (e === this || this.group !== false && e.group === this.group))
            return e;
        } while (t = it(t));
      } } };
      let ma;
      function Qh(t) {
        let e = Date.now();
        ma = setInterval(() => {
          let { x: i, y: s } = t;
          s += document.scrollingElement.scrollTop;
          const r = (Date.now() - e) * 0.3;
          e = Date.now(), di(document.elementFromPoint(i, t.y)).reverse().some((o) => {
            let { scrollTop: l, scrollHeight: u } = o;
            const { top: d, bottom: v, height: $ } = Yt(o);
            if (d < s && d + 35 > s)
              l -= r;
            else if (v > s && v - 35 < s)
              l += r;
            else
              return;
            if (l > 0 && l < u - $)
              return o.scrollTop = l, true;
          });
        }, 15);
      }
      function tu() {
        clearInterval(ma);
      }
      function eu(t, e) {
        let i;
        if (pt(e, "li", "tr")) {
          i = F("<div>"), $t(i, e.cloneNode(true).children);
          for (const s of e.getAttributeNames())
            O(i, s, e.getAttribute(s));
        } else
          i = e.cloneNode(true);
        return $t(t, i), g(i, "margin", "0", "important"), g(i, { boxSizing: "border-box", width: e.offsetWidth, height: e.offsetHeight, padding: g(e, "padding") }), Pt(i.firstElementChild, Pt(e.firstElementChild)), i;
      }
      function iu(t, e) {
        return t[I(t, (i) => kt(e, H(i)))];
      }
      function su(t, e, i, s, r, o) {
        if (!st(t).length)
          return;
        const l = H(e);
        if (!o)
          return nu(t, i) || r < l.top + l.height / 2 ? e : e.nextElementSibling;
        const u = H(i), d = ga([l.top, l.bottom], [u.top, u.bottom]), [v, $, y, A] = d ? [s, "width", "left", "right"] : [r, "height", "top", "bottom"], D = u[$] < l[$] ? l[$] - u[$] : 0;
        return u[y] < l[y] ? D && v < l[y] + D ? false : e.nextElementSibling : D && v > l[A] - D ? false : e;
      }
      function nu(t, e) {
        const i = st(t).length === 1;
        i && $t(t, e);
        const s = st(t), r = s.some((o, l) => {
          const u = H(o);
          return s.slice(l + 1).some((d) => {
            const v = H(d);
            return !ga([u.left, u.right], [v.left, v.right]);
          });
        });
        return i && Ct(e), r;
      }
      function ga(t, e) {
        return t[1] > e[0] && e[1] > t[0];
      }
      function ru(t) {
        let e;
        return function(...i) {
          e || (e = true, t.call(this, ...i), requestAnimationFrame(() => e = false));
        };
      }
      var ou = { mixins: [qi, Fe, Ao], data: { pos: "top", animation: ["uk-anmt-scale-up"], duration: 100, cls: "uk-active" }, connected() {
        au(this.$el);
      }, disconnected() {
        this.hide();
      }, methods: { show() {
        if (this.isToggled(this.tooltip || null))
          return;
        const { delay: t = 0, title: e } = cu(this.$options);
        if (!e)
          return;
        const i = O(this.$el, "title"), s = J(this.$el, ["blur", ai], (o) => !Gt(o) && this.hide());
        this.reset = () => {
          O(this.$el, { title: i, "aria-describedby": null }), s();
        };
        const r = Ye(this);
        O(this.$el, { title: null, "aria-describedby": r }), clearTimeout(this.showTimer), this.showTimer = setTimeout(() => this._show(e, r), t);
      }, async hide() {
        var t;
        tt(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, false, false), (t = this.reset) == null || t.call(this), Ct(this.tooltip), this.tooltip = null);
      }, async _show(t, e) {
        this.tooltip = $t(this.container, `<div id="${e}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${t}</div> </div>`), J(this.tooltip, "toggled", (i, s) => {
          if (!s)
            return;
          const r = () => this.positionAt(this.tooltip, this.$el);
          r();
          const [o, l] = lu(this.tooltip, this.$el, this.pos);
          this.origin = this.axis === "y" ? `${gs(o)}-${l}` : `${l}-${gs(o)}`;
          const u = [gt(document, `keydown ${Wt}`, this.hide, false, (d) => d.type === Wt && !this.$el.contains(d.target) || d.type === "keydown" && d.keyCode === et.ESC), J([document, ...Ue(this.$el)], "scroll", r, { passive: true })];
          gt(this.tooltip, "hide", () => u.forEach((d) => d()), { self: true });
        }), await this.toggleElement(this.tooltip, true) || this.hide();
      } }, events: { [`focus ${Be} ${Wt}`](t) {
        (!Gt(t) || t.type === Wt) && document.readyState !== "loading" && this.show();
      } } };
      function au(t) {
        cs(t) || O(t, "tabindex", "0");
      }
      function lu(t, e, [i, s]) {
        const r = G(t), o = G(e), l = [["left", "right"], ["top", "bottom"]];
        for (const d of l) {
          if (r[d[0]] >= o[d[1]]) {
            i = d[1];
            break;
          }
          if (r[d[1]] <= o[d[0]]) {
            i = d[0];
            break;
          }
        }
        return s = (b(l[0], i) ? l[1] : l[0]).find((d) => r[d] === o[d]) || "center", [i, s];
      }
      function cu(t) {
        const { el: e, id: i, data: s } = t;
        return ["delay", "title"].reduce((r, o) => ({ [o]: It(e, o), ...r }), { ...fi(It(e, i), ["title"]), ...s });
      }
      var hu = Object.freeze({ __proto__: null, Filter: Nc, Lightbox: Dh, LightboxPanel: Yo, Notification: Hh, Parallax: Wh, Slider: Jh, SliderParallax: da, Slideshow: Zh, SlideshowParallax: da, Sortable: Xh, Tooltip: ou });
      function uu(t) {
        Le && window.MutationObserver && (document.body ? requestAnimationFrame(() => va(t)) : new MutationObserver((e, i) => {
          document.body && (va(t), i.disconnect());
        }).observe(document.documentElement, { childList: true }));
      }
      function va(t) {
        M(document, "uikit:init", t), document.body && we(document.body, $a), new MutationObserver(du).observe(document, { subtree: true, childList: true, attributes: true }), t._initialized = true;
      }
      function du(t) {
        var e;
        for (const { addedNodes: i, removedNodes: s, target: r, attributeName: o } of t) {
          for (const u of i)
            we(u, $a);
          for (const u of s)
            we(u, fu);
          const l = o && ba(o);
          l && ($e(r, o) ? Vi(l, r) : (e = As(r, l)) == null || e.$destroy());
        }
      }
      function $a(t) {
        const e = Ji(t);
        for (const i in e)
          zn(e[i]);
        for (const i of t.getAttributeNames()) {
          const s = ba(i);
          s && Vi(s, t);
        }
      }
      function fu(t) {
        const e = Ji(t);
        for (const i in e)
          Un(e[i]);
      }
      function ba(t) {
        w(t, "data-") && (t = t.slice(5));
        const e = mi[t];
        return e && (e.options || e).name;
      }
      kh(Bt), xh(Bt);
      var ya = { mixins: [Lt, Fe], props: { animation: Boolean, targets: String, active: null, collapsible: Boolean, multiple: Boolean, toggle: String, content: String, offset: Number }, data: { targets: "> *", active: false, animation: true, collapsible: true, multiple: false, clsOpen: "uk-open", toggle: "> .uk-accordion-title", content: "> .uk-accordion-content", offset: 0 }, computed: { items: ({ targets: t }, e) => ct(t, e), toggles({ toggle: t }) {
        return this.items.map((e) => F(t, e));
      }, contents({ content: t }) {
        return this.items.map((e) => {
          var i;
          return ((i = e._wrapper) == null ? undefined : i.firstElementChild) || F(t, e);
        });
      } }, watch: { items(t, e) {
        if (e || W(t, this.clsOpen))
          return;
        const i = this.active !== false && t[Number(this.active)] || !this.collapsible && t[0];
        i && this.toggle(i, false);
      }, toggles() {
        this.$emit();
      }, contents(t) {
        for (const e of t) {
          const i = W(this.items.find((s) => s.contains(e)), this.clsOpen);
          Ps(e, !i);
        }
        this.$emit();
      } }, observe: xs(), events: [{ name: "click keydown", delegate: ({ targets: t, $props: e }) => `${t} ${e.toggle}`, async handler(t) {
        var e;
        t.type === "keydown" && t.keyCode !== et.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = mu(t.target), await this.toggle(he(this.toggles, t.current)), this._off());
      } }, { name: "shown hidden", self: true, delegate: ({ targets: t }) => t, handler() {
        this.$emit();
      } }], update() {
        const t = Di(this.items, `.${this.clsOpen}`);
        for (const e in this.items) {
          const i = this.toggles[e], s = this.contents[e];
          if (!i || !s)
            continue;
          i.id = Ye(this, i), s.id = Ye(this, s);
          const r = b(t, this.items[e]);
          O(i, { role: pt(i, "a") ? "button" : null, "aria-controls": s.id, "aria-expanded": r, "aria-disabled": !this.collapsible && t.length < 2 && r }), O(s, { role: "region", "aria-labelledby": i.id }), pt(s, "ul") && O(st(s), "role", "presentation");
        }
      }, methods: { toggle(t, e) {
        t = this.items[Ht(t, this.items)];
        let i = [t];
        const s = Di(this.items, `.${this.clsOpen}`);
        if (!this.multiple && !b(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && b(s, t)))
          return Promise.all(i.map((r) => this.toggleElement(r, !b(s, r), (o, l) => {
            if (mt(o, this.clsOpen, l), e === false || !this.animation) {
              Ps(F(this.content, o), !l);
              return;
            }
            return pu(o, l, this);
          })));
      } } };
      function Ps(t, e) {
        t && (t.hidden = e);
      }
      async function pu(t, e, { content: i, duration: s, velocity: r, transition: o }) {
        var l;
        i = ((l = t._wrapper) == null ? undefined : l.firstElementChild) || F(i, t), t._wrapper || (t._wrapper = Ni(i, "<div>"));
        const u = t._wrapper;
        g(u, "overflow", "hidden");
        const d = x(g(u, "height"));
        await nt.cancel(u), Ps(i, false);
        const v = dt(["marginTop", "marginBottom"], (y) => g(i, y)) + H(i).height, $ = d / v;
        s = (r * v + s) * (e ? 1 - $ : $), g(u, "height", d), await nt.start(u, { height: e ? v : 0 }, s, o), Li(i), delete t._wrapper, e || Ps(i, true);
      }
      function mu(t) {
        const e = ze(t, true);
        let i;
        return function s() {
          i = requestAnimationFrame(() => {
            const { top: r } = H(t);
            r < 0 && (e.scrollTop += r), s();
          });
        }(), () => requestAnimationFrame(() => cancelAnimationFrame(i));
      }
      var gu = { mixins: [Lt, Fe], args: "animation", props: { animation: Boolean, close: String }, data: { animation: true, selClose: ".uk-alert-close", duration: 150 }, events: { name: "click", delegate: ({ selClose: t }) => t, handler(t) {
        t.preventDefault(), this.close();
      } }, methods: { async close() {
        await this.toggleElement(this.$el, false, vu), this.$destroy(true);
      } } };
      function vu(t, e, { duration: i, transition: s, velocity: r }) {
        const o = x(g(t, "height"));
        return g(t, "height", o), nt.start(t, { height: 0, marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0, borderTop: 0, borderBottom: 0, opacity: 0 }, r * o + i, s);
      }
      var wa = { args: "autoplay", props: { automute: Boolean, autoplay: Boolean }, data: { automute: false, autoplay: true }, beforeConnect() {
        this.autoplay === "inview" && !$e(this.$el, "preload") && (this.$el.preload = "none"), pt(this.$el, "iframe") && !$e(this.$el, "allow") && (this.$el.allow = "autoplay"), this.autoplay === "hover" && (pt(this.$el, "video") ? this.$el.tabindex = 0 : this.autoplay = true), this.automute && Gr(this.$el);
      }, events: [{ name: `${Be} focusin`, filter: ({ autoplay: t }) => b(t, "hover"), handler(t) {
        !Gt(t) || !$u(this.$el) ? vn(this.$el) : ys(this.$el);
      } }, { name: `${ai} focusout`, filter: ({ autoplay: t }) => b(t, "hover"), handler(t) {
        Gt(t) || ys(this.$el);
      } }], observe: [Ui({ filter: ({ autoplay: t }) => t !== "hover", handler([{ isIntersecting: t }]) {
        document.fullscreenElement || (t ? this.autoplay && vn(this.$el) : ys(this.$el));
      }, args: { intersecting: false }, options: ({ $el: t, autoplay: e }) => ({ root: e === "inview" ? null : it(t).closest(":not(a)") }) })] };
      function $u(t) {
        return !t.paused && !t.ended;
      }
      var bu = { mixins: [wa], props: { width: Number, height: Number }, data: { automute: true }, created() {
        this.useObjectFit = pt(this.$el, "img", "video");
      }, observe: pe({ target: ({ $el: t }) => ka(t) || it(t), filter: ({ useObjectFit: t }) => !t }), update: { read() {
        if (this.useObjectFit)
          return false;
        const { ratio: t, cover: e } = Zs, { $el: i, width: s, height: r } = this;
        let o = { width: s, height: r };
        if (!s || !r) {
          const v = { width: i.naturalWidth || i.videoWidth || i.clientWidth, height: i.naturalHeight || i.videoHeight || i.clientHeight };
          s ? o = t(v, "width", s) : r ? o = t(v, "height", r) : o = v;
        }
        const { offsetHeight: l, offsetWidth: u } = ka(i) || it(i), d = e(o, { width: u, height: l });
        return !d.width || !d.height ? false : d;
      }, write({ height: t, width: e }) {
        g(this.$el, { height: t, width: e });
      }, events: ["resize"] } };
      function ka(t) {
        for (;t = it(t); )
          if (g(t, "position") !== "static")
            return t;
      }
      let Et;
      var xa = { mixins: [qi, Ao, Fe], args: "pos", props: { mode: "list", toggle: Boolean, boundary: Boolean, boundaryX: Boolean, boundaryY: Boolean, target: Boolean, targetX: Boolean, targetY: Boolean, stretch: Boolean, delayShow: Number, delayHide: Number, autoUpdate: Boolean, clsDrop: String, animateOut: Boolean, bgScroll: Boolean, closeOnScroll: Boolean }, data: { mode: ["click", "hover"], toggle: "- *", boundary: false, boundaryX: false, boundaryY: false, target: false, targetX: false, targetY: false, stretch: false, delayShow: 0, delayHide: 800, autoUpdate: true, clsDrop: false, animateOut: false, bgScroll: true, animation: ["uk-anmt-fade"], cls: "uk-open", container: false, closeOnScroll: false }, computed: { boundary({ boundary: t, boundaryX: e, boundaryY: i }, s) {
        return [qt(e || t, s) || window, qt(i || t, s) || window];
      }, target({ target: t, targetX: e, targetY: i }, s) {
        return e || (e = t || this.targetEl), i || (i = t || this.targetEl), [e === true ? window : qt(e, s), i === true ? window : qt(i, s)];
      } }, created() {
        this.tracker = new Vr;
      }, beforeConnect() {
        this.clsDrop = this.$props.clsDrop || this.$options.id;
      }, connected() {
        V(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = wu(this)), this._style = ie(this.$el.style, ["width", "height"]);
      }, disconnected() {
        this.isActive() && (this.hide(false), Et = null), g(this.$el, this._style);
      }, events: [{ name: "click", delegate: () => ".uk-drop-close", handler(t) {
        t.preventDefault(), this.hide(false);
      } }, { name: "click", delegate: () => 'a[href*="#"]', handler({ defaultPrevented: t, current: e }) {
        const { hash: i } = e;
        !t && i && ci(e) && !this.$el.contains(F(i)) && this.hide(false);
      } }, { name: "beforescroll", handler() {
        this.hide(false);
      } }, { name: "toggle", self: true, handler(t, e) {
        t.preventDefault(), this.isToggled() ? this.hide(false) : this.show(e == null ? undefined : e.$el, false);
      } }, { name: "toggleshow", self: true, handler(t, e) {
        t.preventDefault(), this.show(e == null ? undefined : e.$el);
      } }, { name: "togglehide", self: true, handler(t) {
        t.preventDefault(), tt(this.$el, ":focus,:hover") || this.hide();
      } }, { name: `${Be} focusin`, filter: ({ mode: t }) => b(t, "hover"), handler(t) {
        Gt(t) || this.clearTimers();
      } }, { name: `${ai} focusout`, filter: ({ mode: t }) => b(t, "hover"), handler(t) {
        !Gt(t) && t.relatedTarget && this.hide();
      } }, { name: "toggled", self: true, handler(t, e) {
        e && (this.clearTimers(), this.position());
      } }, { name: "show", self: true, handler() {
        Et = this, this.tracker.init(), O(this.targetEl, "aria-expanded", true);
        const t = [ku(this), xu(this), _u(this), this.autoUpdate && Sa(this), this.closeOnScroll && Su(this)];
        gt(this.$el, "hide", () => t.forEach((e) => e && e()), { self: true }), this.bgScroll || gt(this.$el, "hidden", _o(this.$el), { self: true });
      } }, { name: "beforehide", self: true, handler() {
        this.clearTimers();
      } }, { name: "hide", handler({ target: t }) {
        if (this.$el !== t) {
          Et = Et === null && this.$el.contains(t) && this.isToggled() ? this : Et;
          return;
        }
        Et = this.isActive() ? null : Et, this.tracker.cancel(), O(this.targetEl, "aria-expanded", null);
      } }], update: { write() {
        this.isToggled() && !W(this.$el, this.clsEnter) && this.position();
      } }, methods: { show(t = this.targetEl, e = true) {
        if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(false, false), this.targetEl = t, this.clearTimers(), !this.isActive()) {
          if (Et) {
            if (e && Et.isDelaying()) {
              this.showTimer = setTimeout(() => tt(t, ":hover") && this.show(), 10);
              return;
            }
            let i;
            for (;Et && i !== Et && !Et.$el.contains(this.$el); )
              i = Et, Et.hide(false, false);
          }
          this.container && it(this.$el) !== this.container && $t(this.container, this.$el), this.showTimer = setTimeout(() => this.toggleElement(this.$el, true), e && this.delayShow || 0);
        }
      }, hide(t = true, e = true) {
        const i = () => this.toggleElement(this.$el, false, this.animateOut && e);
        this.clearTimers(), this.isDelayedHide = t, t && this.isDelaying() ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i();
      }, clearTimers() {
        clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null;
      }, isActive() {
        return Et === this;
      }, isDelaying() {
        return [this.$el, ...ct(".uk-drop", this.$el)].some((t) => this.tracker.movesTo(t));
      }, position() {
        const t = Nn(this.$el);
        ot(this.$el, "uk-drop-stack"), g(this.$el, this._style), this.$el.hidden = true;
        const e = this.target.map((o) => yu(this.$el, o)), i = this.getViewportOffset(this.$el), s = [[0, ["x", "width", "left", "right"]], [1, ["y", "height", "top", "bottom"]]];
        for (const [o, [l, u]] of s)
          this.axis !== l && b([l, true], this.stretch) && g(this.$el, { [u]: Math.min(G(this.boundary[o])[u], e[o][u] - 2 * i), [`overflow-${l}`]: "auto" });
        const r = e[0].width - 2 * i;
        this.$el.hidden = false, g(this.$el, "maxWidth", ""), this.$el.offsetWidth > r && V(this.$el, "uk-drop-stack"), g(this.$el, "maxWidth", r), this.positionAt(this.$el, this.target, this.boundary);
        for (const [o, [l, u, d, v]] of s)
          if (this.axis === l && b([l, true], this.stretch)) {
            const $ = Math.abs(this.getPositionOffset()), y = G(this.target[o]), A = G(this.$el);
            g(this.$el, { [u]: (y[d] > A[d] ? y[this.inset ? v : d] - Math.max(G(this.boundary[o])[d], e[o][d] + i) : Math.min(G(this.boundary[o])[v], e[o][v] - i) - y[this.inset ? d : v]) - $, [`overflow-${l}`]: "auto" }), this.positionAt(this.$el, this.target, this.boundary);
          }
        t();
      } } };
      function yu(t, e) {
        return Yt(Ue(e).find((i) => i.contains(t)));
      }
      function wu(t) {
        const { $el: e } = t.$create("toggle", qt(t.toggle, t.$el), { target: t.$el, mode: t.mode });
        return O(e, "aria-haspopup", true), e;
      }
      function ku(t) {
        const e = () => t.$emit(), i = [mn(e), bs(Ue(t.$el).concat(t.target), e)];
        return () => i.map((s) => s.disconnect());
      }
      function Sa(t, e = () => t.$emit()) {
        return J([document, ...Ue(t.$el)], "scroll", e, { passive: true });
      }
      function xu(t) {
        return J(document, "keydown", (e) => {
          e.keyCode === et.ESC && t.hide(false);
        });
      }
      function Su(t) {
        return Sa(t, () => t.hide(false));
      }
      function _u(t) {
        return J(document, Wt, ({ target: e }) => {
          t.$el.contains(e) || gt(document, `${be} ${as} scroll`, ({ defaultPrevented: i, type: s, target: r }) => {
            var o;
            !i && s === be && e === r && !((o = t.targetEl) != null && o.contains(e)) && t.hide(false);
          }, true);
        });
      }
      var Au = { mixins: [Lt, qi], props: { align: String, clsDrop: String, boundary: Boolean, dropbar: Boolean, dropbarAnchor: Boolean, duration: Number, mode: Boolean, offset: Boolean, stretch: Boolean, delayShow: Boolean, delayHide: Boolean, target: Boolean, targetX: Boolean, targetY: Boolean, animation: Boolean, animateOut: Boolean, closeOnScroll: Boolean }, data: { align: xt ? "right" : "left", clsDrop: "uk-dropdown", clsDropbar: "uk-dropnav-dropbar", boundary: true, dropbar: false, dropbarAnchor: false, duration: 200, container: false, selNavItem: "> li > a, > ul > li > a" }, computed: { dropbarAnchor: ({ dropbarAnchor: t }, e) => qt(t, e) || e, dropbar({ dropbar: t }) {
        return t ? (t = this._dropbar || qt(t, this.$el) || F(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = F("<div></div>"))) : null;
      }, dropContainer(t, e) {
        return this.container || e;
      }, dropdowns({ clsDrop: t }, e) {
        var i;
        const s = ct(`.${t}`, e);
        if (this.dropContainer !== e)
          for (const r of ct(`.${t}`, this.dropContainer)) {
            const o = (i = this.getDropdown(r)) == null ? undefined : i.targetEl;
            !b(s, r) && o && this.$el.contains(o) && s.push(r);
          }
        return s;
      }, items({ selNavItem: t }, e) {
        return ct(t, e);
      } }, watch: { dropbar(t) {
        V(t, "uk-dropbar", "uk-dropbar-top", this.clsDropbar, `uk-${this.$options.name}-dropbar`);
      }, dropdowns() {
        this.initializeDropdowns();
      } }, connected() {
        this.initializeDropdowns();
      }, disconnected() {
        Ct(this._dropbar), delete this._dropbar;
      }, events: [{ name: "mouseover focusin", delegate: ({ selNavItem: t }) => t, handler({ current: t }) {
        const e = this.getActive();
        e && b(e.mode, "hover") && e.targetEl && !t.contains(e.targetEl) && !e.isDelaying() && e.hide(false);
      } }, { name: "keydown", self: true, delegate: ({ selNavItem: t }) => t, handler(t) {
        var e;
        const { current: i, keyCode: s } = t, r = this.getActive();
        s === et.DOWN && (r == null ? undefined : r.targetEl) === i && (t.preventDefault(), (e = F(Oi, r.$el)) == null || e.focus()), _a(t, this.items, r);
      } }, { name: "keydown", el: ({ dropContainer: t }) => t, delegate: ({ clsDrop: t }) => `.${t}`, handler(t) {
        var e;
        const { current: i, keyCode: s, target: r } = t;
        if (ls(r) || !b(this.dropdowns, i))
          return;
        const o = this.getActive();
        let l = -1;
        if (s === et.HOME ? l = 0 : s === et.END ? l = "last" : s === et.UP ? l = "previous" : s === et.DOWN ? l = "next" : s === et.ESC && ((e = o.targetEl) == null || e.focus()), ~l) {
          t.preventDefault();
          const u = ct(Oi, i);
          u[Ht(l, u, I(u, (d) => tt(d, ":focus")))].focus();
        }
        _a(t, this.items, o);
      } }, { name: "mouseleave", el: ({ dropbar: t }) => t, filter: ({ dropbar: t }) => t, handler() {
        const t = this.getActive();
        t && b(t.mode, "hover") && !this.dropdowns.some((e) => tt(e, ":hover")) && t.hide();
      } }, { name: "beforeshow", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler({ target: t }) {
        this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && fs(this.dropbarAnchor, this.dropbar), V(t, `${this.clsDrop}-dropbar`));
      } }, { name: "show", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler({ target: t }) {
        if (!this.isDropbarDrop(t))
          return;
        const e = this.getDropdown(t), i = () => {
          const s = Math.max(...li(t, `.${this.clsDrop}`).concat(t).map((r) => G(r).bottom));
          G(this.dropbar, { left: G(this.dropbar).left, top: this.getDropbarOffset(e.getPositionOffset()) }), this.transitionTo(s - G(this.dropbar).top + x(g(t, "marginBottom")), t);
        };
        this._observer = bs([e.$el, ...e.target], i), i();
      } }, { name: "beforehide", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler(t) {
        const e = this.getActive();
        tt(this.dropbar, ":hover") && e.$el === t.target && this.isDropbarDrop(e.$el) && b(e.mode, "hover") && e.isDelayedHide && !this.items.some((i) => e.targetEl !== i && tt(i, ":focus")) && t.preventDefault();
      } }, { name: "hide", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler({ target: t }) {
        var e;
        if (!this.isDropbarDrop(t))
          return;
        (e = this._observer) == null || e.disconnect();
        const i = this.getActive();
        (!i || i.$el === t) && this.transitionTo(0);
      } }], methods: { getActive() {
        var t;
        return b(this.dropdowns, (t = Et) == null ? undefined : t.$el) && Et;
      }, async transitionTo(t, e) {
        const { dropbar: i } = this, s = Pt(i);
        if (e = s < t && e, await nt.cancel([e, i]), e) {
          const r = G(e).top - G(i).top - s;
          r > 0 && g(e, "transitionDelay", `${r / t * this.duration}ms`);
        }
        g(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`), Pt(i, s), await Promise.all([nt.start(i, { height: t }, this.duration), nt.start(e, { clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)` }, this.duration).finally(() => g(e, { clipPath: "", transitionDelay: "" }))]).catch(ut);
      }, getDropdown(t) {
        return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
      }, isDropbarDrop(t) {
        return b(this.dropdowns, t) && W(t, this.clsDrop);
      }, getDropbarOffset(t) {
        const { $el: e, target: i, targetY: s } = this, { top: r, height: o } = G(qt(s || i || e, e));
        return r + o + t;
      }, initializeDropdowns() {
        this.$create("drop", this.dropdowns.filter((t) => !this.getDropdown(t)), { ...this.$props, flip: false, shift: true, pos: `bottom-${this.align}`, boundary: this.boundary === true ? this.$el : this.boundary });
      } } };
      function _a(t, e, i) {
        var s, r, o;
        const { current: l, keyCode: u } = t;
        let d = -1;
        u === et.HOME ? d = 0 : u === et.END ? d = "last" : u === et.LEFT ? d = "previous" : u === et.RIGHT ? d = "next" : u === et.TAB && ((s = i.targetEl) == null || s.focus(), (r = i.hide) == null || r.call(i, false)), ~d && (t.preventDefault(), (o = i.hide) == null || o.call(i, false), e[Ht(d, e, e.indexOf(i.targetEl || l))].focus());
      }
      var Eu = { mixins: [Lt], args: "target", props: { target: Boolean }, data: { target: false }, computed: { input: (t, e) => F(Ti, e), state() {
        return this.input.nextElementSibling;
      }, target({ target: t }, e) {
        return t && (t === true && it(this.input) === e && this.input.nextElementSibling || F(t, e));
      } }, update() {
        var t;
        const { target: e, input: i } = this;
        if (!e)
          return;
        let s;
        const r = ls(e) ? "value" : "textContent", o = e[r], l = (t = i.files) != null && t[0] ? i.files[0].name : tt(i, "select") && (s = ct("option", i).filter((u) => u.selected)[0]) ? s.textContent : i.value;
        o !== l && (e[r] = l);
      }, events: [{ name: "change", handler() {
        this.$emit();
      } }, { name: "reset", el: ({ $el: t }) => t.closest("form"), handler() {
        this.$emit();
      } }] }, Iu = { extends: Oc, mixins: [Lt], name: "grid", props: { masonry: Boolean, parallax: String, parallaxStart: String, parallaxEnd: String, parallaxJustify: Boolean }, data: { margin: "uk-grid-margin", clsStack: "uk-grid-stack", masonry: false, parallax: 0, parallaxStart: 0, parallaxEnd: 0, parallaxJustify: false }, connected() {
        this.masonry && V(this.$el, "uk-flex-top", "uk-flex-wrap-top");
      }, observe: Fi({ filter: ({ parallax: t, parallaxJustify: e }) => t || e }), update: [{ write({ rows: t }) {
        mt(this.$el, this.clsStack, !t.some((e) => e.length > 1));
      }, events: ["resize"] }, { read(t) {
        const { rows: e } = t;
        let { masonry: i, parallax: s, parallaxJustify: r, margin: o } = this;
        if (s = Math.max(0, At(s)), !(i || s || r) || Aa(e) || e[0].some((B, q) => e.some((Z) => Z[q] && Z[q].offsetWidth !== B.offsetWidth)))
          return t.translates = t.scrollColumns = false;
        let l = Tu(e, o), u, d;
        i ? [u, d] = Cu(e, l, i === "next") : u = Ou(e);
        const v = u.map((B) => dt(B, "offsetHeight") + l * (B.length - 1)), $ = Math.max(0, ...v);
        let y, A, D;
        return (s || r) && (y = v.map((B, q) => r ? $ - B + s : s / (q % 2 || 8)), r || (s = Math.max(...v.map((B, q) => B + y[q] - $))), A = At(this.parallaxStart, "height", this.$el, true), D = At(this.parallaxEnd, "height", this.$el, true)), { columns: u, translates: d, scrollColumns: y, parallaxStart: A, parallaxEnd: D, padding: s, height: d ? $ : "" };
      }, write({ height: t, padding: e }) {
        g(this.$el, "paddingBottom", e || ""), t !== false && g(this.$el, "height", t);
      }, events: ["resize"] }, { read({ rows: t, scrollColumns: e, parallaxStart: i, parallaxEnd: s }) {
        return { scrolled: e && !Aa(t) ? ws(this.$el, i, s) : false };
      }, write({ columns: t, scrolled: e, scrollColumns: i, translates: s }) {
        !e && !s || t.forEach((r, o) => r.forEach((l, u) => {
          let [d, v] = s && s[o][u] || [0, 0];
          e && (v += e * i[o]), g(l, "transform", `translate(${d}px, ${v}px)`);
        }));
      }, events: ["scroll", "resize"] }] };
      function Aa(t) {
        return t.flat().some((e) => g(e, "position") === "absolute");
      }
      function Cu(t, e, i) {
        const s = [], r = [], o = Array(t[0].length).fill(0);
        let l = 0;
        for (let u of t) {
          xt && u.reverse();
          let d = 0;
          for (const v in u) {
            const { offsetWidth: $, offsetHeight: y } = u[v], A = i ? v : o.indexOf(Math.min(...o));
            qn(s, A, u[v]), qn(r, A, [(A - v) * $ * (xt ? -1 : 1), o[A] - l]), o[A] += y + e, d = Math.max(d, y);
          }
          l += d + e;
        }
        return [s, r];
      }
      function Tu(t, e) {
        const i = t.flat().find((s) => W(s, e));
        return x(i ? g(i, "marginTop") : g(t[0][0], "paddingLeft"));
      }
      function Ou(t) {
        const e = [];
        for (const i of t)
          for (const s in i)
            qn(e, s, i[s]);
        return e;
      }
      function qn(t, e, i) {
        t[e] || (t[e] = []), t[e].push(i);
      }
      var Du = { mixins: [Lt, Es], props: { fill: String }, data: { fill: "", clsWrapper: "uk-leader-fill", clsHide: "uk-leader-hide", attrFill: "data-fill" }, computed: { fill: ({ fill: t }, e) => t || g(e, "--uk-leader-fill-content") }, connected() {
        [this.wrapper] = hn(this.$el, `<span class="${this.clsWrapper}">`);
      }, disconnected() {
        Li(this.wrapper.childNodes);
      }, observe: pe(), update: { read() {
        return { width: Math.trunc(this.$el.offsetWidth / 2), fill: this.fill, hide: !this.matchMedia };
      }, write({ width: t, fill: e, hide: i }) {
        mt(this.wrapper, this.clsHide, i), O(this.wrapper, this.attrFill, new Array(t).join(e));
      }, events: ["resize"] } }, Pu = { install: Mu, mixins: [Ln], data: { clsPage: "uk-modal-page", selPanel: ".uk-modal-dialog", selClose: '[class*="uk-modal-close"]' }, events: [{ name: "fullscreenchange webkitendfullscreen", capture: true, handler(t) {
        pt(t.target, "video") && this.isToggled() && !document.fullscreenElement && this.hide();
      } }, { name: "show", self: true, handler() {
        W(this.panel, "uk-margin-auto-vertical") ? V(this.$el, "uk-flex") : g(this.$el, "display", "block"), Pt(this.$el);
      } }, { name: "hidden", self: true, handler() {
        g(this.$el, "display", ""), ot(this.$el, "uk-flex");
      } }] };
      function Mu({ modal: t }) {
        t.dialog = function(i, s) {
          const r = t(F(`<div><div class="uk-modal-dialog">${i}</div></div>`), { stack: true, role: "alertdialog", ...s });
          return r.show(), J(r.$el, "hidden", async () => {
            await Promise.resolve(), r.$destroy(true);
          }, { self: true }), r;
        }, t.alert = function(i, s) {
          return e(({ i18n: r }) => `<div class="uk-modal-body">${ht(i) ? i : de(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-btn uk-btn-primary uk-modal-close" autofocus>${r.ok}</button> </div>`, s);
        }, t.confirm = function(i, s) {
          return e(({ i18n: r }) => `<form> <div class="uk-modal-body">${ht(i) ? i : de(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-btn uk-btn-default uk-modal-close mr-2" type="button">${r.cancel}</button> <button class="uk-btn uk-btn-primary" autofocus>${r.ok}</button> </div> </form>`, s, () => Promise.reject());
        }, t.prompt = function(i, s, r) {
          const o = e(({ i18n: d }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label class="uk-form-label">${ht(i) ? i : de(i)}</label> <input class="uk-input mt-2" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-btn uk-btn-default uk-modal-close mr-2" type="button">${d.cancel}</button> <button class="uk-btn uk-btn-primary">${d.ok}</button> </div> </form>`, r, () => null, () => u.value), { $el: l } = o.dialog, u = F("input", l);
          return u.value = s || "", J(l, "show", () => u.select()), o;
        }, t.i18n = { ok: "Ok", cancel: "Cancel" };
        function e(i, s, r = ut, o = ut) {
          s = { bgClose: false, escClose: true, ...s, i18n: { ...t.i18n, ...s == null ? undefined : s.i18n } };
          const l = t.dialog(i(s), s);
          return Y(new Promise((u) => {
            const d = J(l.$el, "hide", () => u(r()));
            J(l.$el, "submit", "form", (v) => {
              v.preventDefault(), u(o(l)), d(), l.hide();
            });
          }), { dialog: l });
        }
      }
      var Hu = { extends: ya, data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" } }, Nu = { mixins: [Ln], args: "mode", props: { mode: String, flip: Boolean, overlay: Boolean, swiping: Boolean }, data: { mode: "slide", flip: false, overlay: false, clsPage: "uk-offcanvas-page", clsContainer: "uk-offcanvas-container", selPanel: ".uk-offcanvas-bar", clsFlip: "uk-offcanvas-flip", clsContainerAnimation: "uk-offcanvas-container-animation", clsSidebarAnimation: "uk-offcanvas-bar-animation", clsMode: "uk-offcanvas", clsOverlay: "uk-offcanvas-overlay", selClose: ".uk-offcanvas-close", container: false, swiping: true }, computed: { clsFlip: ({ flip: t, clsFlip: e }) => t ? e : "", clsOverlay: ({ overlay: t, clsOverlay: e }) => t ? e : "", clsMode: ({ mode: t, clsMode: e }) => `${e}-${t}`, clsSidebarAnimation: ({ mode: t, clsSidebarAnimation: e }) => t === "none" || t === "reveal" ? "" : e, clsContainerAnimation: ({ mode: t, clsContainerAnimation: e }) => t !== "push" && t !== "reveal" ? "" : e, transitionElement({ mode: t }) {
        return t === "reveal" ? it(this.panel) : this.panel;
      } }, observe: fo({ filter: ({ swiping: t }) => t }), update: { read() {
        this.isToggled() && !St(this.$el) && this.hide();
      }, events: ["resize"] }, events: [{ name: "touchmove", self: true, passive: false, filter: ({ overlay: t }) => t, handler(t) {
        t.cancelable && t.preventDefault();
      } }, { name: "show", self: true, handler() {
        this.mode === "reveal" && !W(it(this.panel), this.clsMode) && V(Ni(this.panel, "<div>"), this.clsMode);
        const { body: t, scrollingElement: e } = document;
        V(t, this.clsContainer, this.clsFlip), g(t, "touchAction", "pan-y pinch-zoom"), g(this.$el, "display", "block"), g(this.panel, "maxWidth", e.clientWidth), V(this.$el, this.clsOverlay), V(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode), Pt(t), V(t, this.clsContainerAnimation), this.clsContainerAnimation && Lu();
      } }, { name: "hide", self: true, handler() {
        ot(document.body, this.clsContainerAnimation), g(document.body, "touchAction", "");
      } }, { name: "hidden", self: true, handler() {
        this.clsContainerAnimation && Bu(), this.mode === "reveal" && W(it(this.panel), this.clsMode) && Li(this.panel), ot(this.panel, this.clsSidebarAnimation, this.clsMode), ot(this.$el, this.clsOverlay), g(this.$el, "display", ""), g(this.panel, "maxWidth", ""), ot(document.body, this.clsContainer, this.clsFlip);
      } }, { name: "swipeLeft swipeRight", handler(t) {
        this.isToggled() && C(t.type, "Left") ^ this.flip && this.hide();
      } }] };
      function Lu() {
        Ea().content += ",user-scalable=0";
      }
      function Bu() {
        const t = Ea();
        t.content = t.content.replace(/,user-scalable=0$/, "");
      }
      function Ea() {
        return F('meta[name="viewport"]', document.head) || $t(document.head, '<meta name="viewport">');
      }
      var ju = { mixins: [Lt], props: { selContainer: String, selContent: String, minHeight: Number }, data: { selContainer: ".uk-modal", selContent: ".uk-modal-dialog", minHeight: 150 }, computed: { container: ({ selContainer: t }, e) => e.closest(t), content: ({ selContent: t }, e) => e.closest(t) }, observe: pe({ target: ({ container: t, content: e }) => [t, e] }), update: { read() {
        return !this.content || !this.container || !St(this.$el) ? false : { max: Math.max(this.minHeight, Pt(this.container) - (H(this.content).height - Pt(this.$el))) };
      }, write({ max: t }) {
        g(this.$el, { minHeight: this.minHeight, maxHeight: t });
      }, events: ["resize"] } }, Ru = { props: ["width", "height"], connected() {
        V(this.$el, "uk-responsive-width"), g(this.$el, "aspectRatio", `${this.width}/${this.height}`);
      } }, zu = { props: { offset: Number }, data: { offset: 0 }, connected() {
        Uu(this);
      }, disconnected() {
        Fu(this);
      }, methods: { async scrollTo(t) {
        t = t && F(t) || document.body, M(this.$el, "beforescroll", [this, t]) && (await to(t, { offset: this.offset }), M(this.$el, "scrolled", [this, t]));
      } } };
      const Xi = new Set;
      function Uu(t) {
        Xi.size || J(document, "click", Ia), Xi.add(t);
      }
      function Fu(t) {
        Xi.delete(t), Xi.size || je(document, "click", Ia);
      }
      function Ia(t) {
        if (!t.defaultPrevented)
          for (const e of Xi)
            e.$el.contains(t.target) && ci(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(tn(e.$el)));
      }
      const Yn = "uk-scrollspy-inview";
      var Wu = { args: "cls", props: { cls: String, target: String, hidden: Boolean, margin: String, repeat: Boolean, delay: Number }, data: () => ({ cls: "", target: false, hidden: true, margin: "-1px", repeat: false, delay: 0 }), computed: { elements: ({ target: t }, e) => t ? ct(t, e) : [e] }, watch: { elements(t) {
        this.hidden && g(Di(t, `:not(.${Yn})`), "opacity", 0);
      } }, connected() {
        this.elementData = new Map;
      }, disconnected() {
        for (const [t, e] of this.elementData.entries())
          ot(t, Yn, (e == null ? undefined : e.cls) || "");
        delete this.elementData;
      }, observe: Ui({ target: ({ elements: t }) => t, handler(t) {
        const e = this.elementData;
        for (const { target: i, isIntersecting: s } of t) {
          e.has(i) || e.set(i, { cls: It(i, "uk-scrollspy-class") || this.cls });
          const r = e.get(i);
          !this.repeat && r.show || (r.show = s);
        }
        this.$emit();
      }, options: ({ margin: t }) => ({ rootMargin: t }), args: { intersecting: false } }), update: [{ write(t) {
        for (const [e, i] of this.elementData.entries())
          i.show && !i.inview && !i.queued ? (i.queued = true, t.promise = (t.promise || Promise.resolve()).then(() => new Promise((s) => setTimeout(s, this.delay))).then(() => {
            this.toggle(e, true), setTimeout(() => {
              i.queued = false, this.$emit();
            }, 300);
          })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, false);
      } }], methods: { toggle(t, e) {
        var i, s;
        const r = (i = this.elementData) == null ? undefined : i.get(t);
        if (!r)
          return;
        (s = r.off) == null || s.call(r), g(t, "opacity", !e && this.hidden ? 0 : ""), mt(t, Yn, e), mt(t, r.cls);
        let o;
        if (o = r.cls.match(/\buk-anmt-[\w-]+/g)) {
          const l = () => ot(t, o);
          e ? r.off = gt(t, "animationcancel animationend", l, { self: true }) : l();
        }
        M(t, e ? "inview" : "outview"), r.inview = e;
      } } }, qu = { props: { cls: String, closest: Boolean, scroll: Boolean, target: String, offset: Number }, data: { cls: "uk-active", closest: false, scroll: false, target: 'a[href]:not([role="button"])', offset: 0 }, computed: { links: ({ target: t }, e) => ct(t, e).filter((i) => ci(i)), elements({ closest: t }) {
        return this.links.map((e) => e.closest(t || "*"));
      } }, watch: { links(t) {
        this.scroll && this.$create("scroll", t, { offset: this.offset });
      } }, observe: [Ui(), Fi()], update: [{ read() {
        const t = this.links.map((d) => tn(d)).filter(Boolean), { length: e } = t;
        if (!e || !St(this.$el))
          return false;
        const i = ze(t, true), { scrollTop: s, scrollHeight: r } = i, o = Yt(i), l = r - o.height;
        let u = false;
        if (s >= l)
          u = e - 1;
        else {
          const d = this.offset + H(kn()).height + o.height * 0.1;
          for (let v = 0;v < t.length && !(G(t[v]).top - o.top - d > 0); v++)
            u = +v;
        }
        return { active: u };
      }, write({ active: t }) {
        const e = t !== false && !W(this.elements[t], this.cls);
        this.links.forEach((i) => i.blur());
        for (let i = 0;i < this.elements.length; i++)
          mt(this.elements[i], this.cls, +i === t);
        e && M(this.$el, "active", [t, this.elements[t]]);
      }, events: ["scroll", "resize"] }] }, Yu = { mixins: [Lt, Es], props: { position: String, top: null, bottom: null, start: null, end: null, offset: String, offsetEnd: String, overflowFlip: Boolean, animation: String, clsActive: String, clsInactive: String, clsFixed: String, clsBelow: String, selTarget: String, showOnUp: Boolean, targetOffset: Number }, data: { position: "top", top: false, bottom: false, start: false, end: false, offset: 0, offsetEnd: 0, overflowFlip: false, animation: "", clsActive: "uk-active", clsInactive: "", clsFixed: "uk-sticky-fixed", clsBelow: "uk-sticky-below", selTarget: "", showOnUp: false, targetOffset: false }, computed: { target: ({ selTarget: t }, e) => t && F(t, e) || e }, connected() {
        this.start = Ca(this.start || this.top), this.end = Ca(this.end || this.bottom), this.placeholder = F("+ .uk-sticky-placeholder", this.$el) || F('<div class="uk-sticky-placeholder"></div>'), this.isFixed = false, this.setActive(false);
      }, beforeDisconnect() {
        this.isFixed && (this.hide(), ot(this.target, this.clsInactive)), Ta(this.$el), Ct(this.placeholder), this.placeholder = null;
      }, observe: [uo(), Fi({ target: () => document.scrollingElement }), pe({ target: ({ $el: t }) => [t, Ms(t), document.scrollingElement], handler(t) {
        this.$emit(this._data.resized && t.some(({ target: e }) => e === Ms(this.$el)) ? "update" : "resize"), this._data.resized = true;
      } })], events: [{ name: "load hashchange popstate", el: () => window, filter: ({ targetOffset: t }) => t !== false, handler() {
        const { scrollingElement: t } = document;
        !location.hash || t.scrollTop === 0 || setTimeout(() => {
          const e = G(F(location.hash)), i = G(this.$el);
          this.isFixed && Kt(e, i) && (t.scrollTop = Math.ceil(e.top - i.height - At(this.targetOffset, "height", this.placeholder) - At(this.offset, "height", this.placeholder)));
        });
      } }], update: [{ read({ height: t, width: e, margin: i, sticky: s }, r) {
        if (this.inactive = !this.matchMedia || !St(this.$el) || !this.$el.offsetHeight, this.inactive)
          return;
        const o = Pt(window), l = Math.max(0, document.scrollingElement.scrollHeight - o);
        if (!l) {
          this.inactive = true;
          return;
        }
        const u = this.isFixed && r.has("update");
        u && (Kn(this.target), this.hide()), this.active || ({ height: t, width: e } = H(this.$el), i = g(this.$el, "margin")), u && this.show();
        const d = At("100vh", "height");
        let v = this.position;
        this.overflowFlip && t > d && (v = v === "top" ? "bottom" : "top");
        const $ = this.isFixed ? this.placeholder : this.$el;
        let [y, A] = [this.offset, this.offsetEnd].map((_e) => At(_e, "height", s ? this.$el : $));
        v === "bottom" && (t < o || this.overflowFlip) && (y += o - t);
        const D = t + y + A, B = this.overflowFlip ? 0 : Math.max(0, D - d), q = G($).top - new DOMMatrix(g($, "transform")).m42, Z = H(this.$el).height, jt = (this.start === false ? q : Vn(this.start, this.$el, q)) - y, me = this.end === false ? l : Math.min(l, Vn(this.end, this.$el, q + t, true) - Z - y + B);
        return s = !this.showOnUp && jt + y === q && me === Math.min(l, Vn(true, this.$el, 0, true) - Z - y + B) && g(Ms(this.$el), "overflowY") !== "hidden", { start: jt, end: me, offset: y, overflow: B, height: t, elHeight: Z, width: e, margin: i, top: Bi($)[0], sticky: s, viewport: d, maxScrollHeight: l };
      }, write({ height: t, width: e, margin: i, offset: s, sticky: r }) {
        if ((this.inactive || r || !this.isFixed) && Ta(this.$el), this.inactive)
          return;
        r && (t = e = i = 0, g(this.$el, { position: "sticky", top: s }));
        const { placeholder: o } = this;
        g(o, { height: t, width: e, margin: i }), (it(o) !== it(this.$el) || r ^ he(o) < he(this.$el)) && ((r ? ds : fs)(this.$el, o), o.hidden = true);
      }, events: ["resize"] }, { read({ scroll: t = 0, dir: e = "down", overflow: i, overflowScroll: s = 0, start: r, end: o, elHeight: l, height: u, sticky: d, maxScrollHeight: v }) {
        const $ = Math.min(document.scrollingElement.scrollTop, v), y = t <= $ ? "down" : "up", A = this.isFixed ? this.placeholder : this.$el;
        return { dir: y, prevDir: e, scroll: $, prevScroll: t, below: $ > G(A).top + (d ? Math.min(u, l) : u), offsetParentTop: G(A.offsetParent).top, overflowScroll: ft(s + ft($, r, o) - ft(t, r, o), 0, i) };
      }, write(t, e) {
        const i = e.has("scroll"), { initTimestamp: s = 0, dir: r, prevDir: o, scroll: l, prevScroll: u = 0, top: d, start: v, below: $ } = t;
        if (l < 0 || l === u && i || this.showOnUp && !i && !this.isFixed)
          return;
        const y = Date.now();
        if ((y - s > 300 || r !== o) && (t.initScroll = l, t.initTimestamp = y), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - l) <= 30 && Math.abs(u - l) <= 10))
          if (this.inactive || l < v || this.showOnUp && (l <= v || r === "down" && i || r === "up" && !this.isFixed && !$)) {
            if (!this.isFixed) {
              ye.inProgress(this.$el) && d > l && (ye.cancel(this.$el), this.hide());
              return;
            }
            if (this.animation && $) {
              if (W(this.$el, "uk-anmt-leave"))
                return;
              ye.out(this.$el, this.animation).then(() => this.hide(), ut);
            } else
              this.hide();
          } else
            this.isFixed ? this.update() : this.animation && $ ? (this.show(), ye.in(this.$el, this.animation).catch(ut)) : (Kn(this.target), this.show());
      }, events: ["resize", "resizeViewport", "scroll"] }], methods: { show() {
        this.isFixed = true, this.update(), this.placeholder.hidden = false;
      }, hide() {
        const { offset: t, sticky: e } = this._data;
        this.setActive(false), ot(this.$el, this.clsFixed, this.clsBelow), e ? g(this.$el, "top", t) : g(this.$el, { position: "", top: "", width: "", marginTop: "" }), this.placeholder.hidden = true, this.isFixed = false;
      }, update() {
        let { width: t, scroll: e = 0, overflow: i, overflowScroll: s = 0, start: r, end: o, offset: l, offsetParentTop: u, sticky: d, below: v } = this._data;
        const $ = r !== 0 || e > r;
        if (!d) {
          let y = "fixed";
          e > o && (l += o - u + s - i, y = "absolute"), g(this.$el, { position: y, width: t, marginTop: 0 }, "important");
        }
        g(this.$el, "top", l - s), this.setActive($), mt(this.$el, this.clsBelow, v), V(this.$el, this.clsFixed);
      }, setActive(t) {
        const e = this.active;
        this.active = t, t ? (Xs(this.target, this.clsInactive, this.clsActive), e !== t && M(this.$el, "active")) : (Xs(this.target, this.clsActive, this.clsInactive), e !== t && (Kn(this.target), M(this.$el, "inactive")));
      } } };
      function Vn(t, e, i, s) {
        if (!t)
          return 0;
        if (at(t) || ht(t) && t.match(/^-?\d/))
          return i + At(t, "height", e, true);
        {
          const r = t === true ? Ms(e) : qt(t, e);
          return G(r).bottom - (s && (r != null && r.contains(e)) ? x(g(r, "paddingBottom")) + x(g(r, "borderBottomWidth")) : 0);
        }
      }
      function Ca(t) {
        return t === "true" ? true : t === "false" ? false : t;
      }
      function Ta(t) {
        g(t, { position: "", top: "", marginTop: "", width: "" });
      }
      const Jn = "uk-transition-disable";
      function Kn(t) {
        W(t, Jn) || (V(t, Jn), requestAnimationFrame(() => ot(t, Jn)));
      }
      function Ms(t) {
        for (;t = it(t); )
          if (St(t))
            return t;
      }
      var Oa = { args: "src", props: { width: Number, height: Number, ratio: Number }, data: { ratio: 1 }, connected() {
        this.svg = this.getSvg().then((t) => {
          if (!this._connected)
            return;
          const e = Vu(t, this.$el);
          return this.svgEl && e !== this.svgEl && Ct(this.svgEl), Ju.call(this, e, t), this.svgEl = e;
        }, ut);
      }, disconnected() {
        this.svg.then((t) => {
          this._connected || (Qs(this.$el) && (this.$el.hidden = false), Ct(t), this.svgEl = null);
        }), this.svg = null;
      }, methods: { async getSvg() {
      } } };
      function Vu(t, e) {
        if (Qs(e) || pt(e, "canvas")) {
          e.hidden = true;
          const s = e.nextElementSibling;
          return Da(t, s) ? s : fs(e, t);
        }
        const i = e.lastElementChild;
        return Da(t, i) ? i : $t(e, t);
      }
      function Da(t, e) {
        return pt(t, "svg") && pt(e, "svg") && t.innerHTML === e.innerHTML;
      }
      function Ju(t, e) {
        const i = ["width", "height"];
        let s = i.map((o) => this[o]);
        s.some((o) => o) || (s = i.map((o) => O(e, o)));
        const r = O(e, "viewBox");
        r && !s.some((o) => o) && (s = r.split(" ").slice(2)), s.forEach((o, l) => O(t, i[l], x(o) * this.ratio || null));
      }
      function Pa(t, e) {
        return e && b(t, "<symbol") && (t = Ku(t)[e] || t), _(fe(t)).filter(zt)[0];
      }
      const Ma = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, Ku = Ft(function(t) {
        const e = {};
        Ma.lastIndex = 0;
        let i;
        for (;i = Ma.exec(t); )
          e[i[3]] = `<svg ${i[1]}svg>`;
        return e;
      });
      var Gu = { mixins: [Oa], args: "src", props: { src: String, icon: String, attributes: "list", strokeAnimation: Boolean }, data: { strokeAnimation: false }, observe: [In({ async handler() {
        const t = await this.svg;
        t && Ha.call(this, t);
      }, options: { attributes: true, attributeFilter: ["id", "class", "style"] } })], async connected() {
        b(this.src, "#") && ([this.src, this.icon] = this.src.split("#", 2));
        const t = await this.svg;
        t && (Ha.call(this, t), this.strokeAnimation && Xu(t));
      }, methods: { async getSvg() {
        return pt(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" && await new Promise((t) => gt(this.$el, "load", t)), Pa(await Zu(this.src), this.icon) || Promise.reject("SVG not found.");
      } } };
      function Ha(t) {
        const { $el: e } = this;
        V(t, O(e, "class"), "uk-svg");
        for (let i = 0;i < e.style.length; i++) {
          const s = e.style[i];
          g(t, s, g(e, s));
        }
        for (const i in this.attributes) {
          const [s, r] = this.attributes[i].split(":", 2);
          O(t, s, r);
        }
        this.$el.id || Ci(t, "id");
      }
      const Zu = Ft(async (t) => {
        if (t) {
          if (w(t, "data:"))
            return decodeURIComponent(t.split(",", 2)[1]);
          {
            const e = await fetch(t);
            if (e.headers.get("Content-Type") === "image/svg+xml")
              return e.text();
          }
        }
        return Promise.reject();
      });
      function Xu(t) {
        const e = Go(t);
        e && g(t, "--uk-anmt-stroke", e);
      }
      const Gn = ".uk-disabled *, .uk-disabled, [disabled]";
      var Na = { mixins: [Fe], args: "connect", props: { connect: String, toggle: String, itemNav: String, active: Number, followFocus: Boolean, swiping: Boolean }, data: { connect: "~.uk-switcher", toggle: "> * > :first-child", itemNav: false, active: 0, cls: "uk-active", attrItem: "uk-switcher-item", selVertical: ".uk-nav", followFocus: false, swiping: true }, computed: { connects: { get: ({ connect: t }, e) => Pi(t, e), observe: ({ connect: t }) => t }, connectChildren() {
        return this.connects.map((t) => st(t)).flat();
      }, toggles: ({ toggle: t }, e) => ct(t, e), children(t, e) {
        return st(e).filter((i) => this.toggles.some((s) => i.contains(s)));
      } }, watch: { connects(t) {
        this.swiping && g(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
      }, connectChildren() {
        let t = Math.max(0, this.index());
        for (const e of this.connects)
          st(e).forEach((i, s) => mt(i, this.cls, s === t));
        this.$emit();
      }, toggles(t) {
        this.$emit();
        const e = this.index();
        this.show(~e ? e : t[this.active] || t[0]);
      } }, connected() {
        O(this.$el, "role", "tablist");
      }, observe: [xs({ targets: ({ connectChildren: t }) => t }), fo({ target: ({ connects: t }) => t, filter: ({ swiping: t }) => t })], events: [{ name: "click keydown", delegate: ({ toggle: t }) => t, handler(t) {
        !tt(t.current, Gn) && (t.type === "click" || t.keyCode === et.SPACE) && (t.preventDefault(), this.show(t.current));
      } }, { name: "keydown", delegate: ({ toggle: t }) => t, handler(t) {
        const { current: e, keyCode: i } = t, s = tt(this.$el, this.selVertical);
        let r = i === et.HOME ? 0 : i === et.END ? "last" : i === et.LEFT && !s || i === et.UP && s ? "previous" : i === et.RIGHT && !s || i === et.DOWN && s ? "next" : -1;
        if (~r) {
          t.preventDefault();
          const o = this.toggles.filter((u) => !tt(u, Gn)), l = o[Ht(r, o, o.indexOf(e))];
          l.focus(), this.followFocus && this.show(l);
        }
      } }, { name: "click", el: ({ $el: t, connects: e, itemNav: i }) => e.concat(i ? Pi(i, t) : []), delegate: ({ attrItem: t }) => `[${t}],[data-${t}]`, handler(t) {
        t.target.closest("a,button") && (t.preventDefault(), this.show(It(t.current, this.attrItem)));
      } }, { name: "swipeRight swipeLeft", filter: ({ swiping: t }) => t, el: ({ connects: t }) => t, handler({ type: t }) {
        this.show(C(t, "Left") ? "next" : "previous");
      } }], update() {
        var t;
        for (const e of this.connects)
          pt(e, "ul") && O(e, "role", "presentation");
        O(st(this.$el), "role", "presentation");
        for (const e in this.toggles) {
          const i = this.toggles[e], s = (t = this.connects[0]) == null ? undefined : t.children[e];
          O(i, "role", "tab"), s && (i.id = Ye(this, i), s.id = Ye(this, s), O(i, "aria-controls", s.id), O(s, { role: "tabpanel", "aria-labelledby": i.id }));
        }
        O(this.$el, "aria-orientation", tt(this.$el, this.selVertical) ? "vertical" : null);
      }, methods: { index() {
        return I(this.children, (t) => W(t, this.cls));
      }, show(t) {
        const e = this.toggles.filter((l) => !tt(l, Gn)), i = this.index(), s = Ht(!He(t) || b(e, t) ? t : 0, e, Ht(this.toggles[i], e)), r = Ht(e[s], this.toggles);
        this.children.forEach((l, u) => {
          mt(l, this.cls, r === u), O(this.toggles[u], { "aria-selected": r === u, tabindex: r === u ? null : -1 });
        });
        const o = i >= 0 && i !== s;
        this.connects.forEach(async ({ children: l }) => {
          const u = N(l).filter((d, v) => v !== r && W(d, this.cls));
          await this.toggleElement(u, false, o) && await this.toggleElement(l[r], true, o);
        });
      } } }, Qu = { mixins: [Lt], extends: Na, props: { media: Boolean }, data: { media: 960, attrItem: "uk-tab-item", selVertical: ".uk-tab-left,.uk-tab-right" }, connected() {
        const t = W(this.$el, "uk-tab-left") ? "uk-tab-left" : W(this.$el, "uk-tab-right") ? "uk-tab-right" : false;
        t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media });
      } };
      const td = 32;
      var ed = { mixins: [Es, Fe], args: "target", props: { href: String, target: null, mode: "list", queued: Boolean }, data: { href: false, target: false, mode: "click", queued: true }, computed: { target: { get: ({ target: t }, e) => (t = Pi(t || e.hash, e), t.length ? t : [e]), observe: ({ target: t }) => t } }, connected() {
        b(this.mode, "media") || (cs(this.$el) || O(this.$el, "tabindex", "0"), !this.cls && pt(this.$el, "a") && O(this.$el, "role", "button"));
      }, observe: xs({ targets: ({ target: t }) => t }), events: [{ name: Wt, filter: ({ mode: t }) => b(t, "hover"), handler(t) {
        this._preventClick = null, !(!Gt(t) || ce(this._showState) || this.$el.disabled) && (M(this.$el, "focus"), gt(document, Wt, () => M(this.$el, "blur"), true, (e) => !this.$el.contains(e.target)), b(this.mode, "click") && (this._preventClick = true));
      } }, { name: `mouseenter mouseleave ${Be} ${ai} focus blur`, filter: ({ mode: t }) => b(t, "hover"), handler(t) {
        if (Gt(t) || this.$el.disabled || document.readyState === "loading")
          return;
        const e = b(["mouseenter", Be, "focus"], t.type), i = this.isToggled(this.target);
        if (!e && (!ce(this._showState) || t.type !== "blur" && tt(this.$el, ":focus") || t.type === "blur" && tt(this.$el, ":hover"))) {
          i === this._showState && (this._showState = null);
          return;
        }
        e && ce(this._showState) && i !== this._showState || (this._showState = e ? i : null, this.toggle(`toggle${e ? "show" : "hide"}`));
      } }, { name: "keydown", filter: ({ $el: t, mode: e }) => b(e, "click") && !pt(t, "input"), handler(t) {
        t.keyCode === td && (t.preventDefault(), this.$el.click());
      } }, { name: "click", filter: ({ mode: t }) => ["click", "hover"].some((e) => b(t, e)), handler(t) {
        let e;
        (this._preventClick || t.target.closest('a[href="#"], a[href=""]') || (e = t.target.closest("a[href]")) && (!this.isToggled(this.target) || e.hash && tt(this.target, e.hash))) && t.preventDefault(), !this._preventClick && b(this.mode, "click") && this.toggle();
      } }, { name: "mediachange", filter: ({ mode: t }) => b(t, "media"), el: ({ target: t }) => t, handler(t, e) {
        e.matches ^ this.isToggled(this.target) && this.toggle();
      } }], methods: { async toggle(t) {
        if (!M(this.target, t || "toggle", [this]))
          return;
        if ($e(this.$el, "aria-expanded") && O(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued)
          return this.toggleElement(this.target);
        const e = this.target.filter((s) => W(s, this.clsLeave));
        if (e.length) {
          for (const s of this.target) {
            const r = b(e, s);
            this.toggleElement(s, r, r);
          }
          return;
        }
        const i = this.target.filter(this.isToggled);
        await this.toggleElement(i, false) && await this.toggleElement(this.target.filter((s) => !b(i, s)), true);
      } } }, id = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>', sd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-x" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>', nd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-x" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>', rd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>', od = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-plus" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5v14"/></svg>', ad = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>', ld = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>', cd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>', hd = '<svg width="16" height="16" viewBox="0 0 20 20"><style>.uk-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect width="20" height="2" y="3" class="line-1" rx="1"/><rect width="20" height="2" y="9" class="line-2" rx="1"/><rect width="20" height="2" y="9" class="line-3" rx="1"/><rect width="20" height="2" y="15" class="line-4" rx="1"/></svg>', ud = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-plus" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5v14"/></svg>', dd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-right" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>', fd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-left" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>', La = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>', pd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>', md = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>', gd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>', vd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>', $d = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-arrow-left" viewBox="0 0 24 24"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>', bd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-arrow-left" viewBox="0 0 24 24"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>', yd = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', wd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-circle-chevron-up" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m8 14 4-4 4 4"/></svg>';
      const Hs = { spinner: yd, totop: wd, marker: od, check: id, "close-icon": sd, "close-large": nd, "drop-parent-icon": rd, "nav-parent-icon": ld, "nav-parent-icon-large": ad, "navbar-parent-icon": cd, "navbar-toggle-icon": hd, "overlay-icon": ud, "pgn-next": dd, "pgn-previous": fd, "search-icon": La, "search-medium": md, "search-large": pd, "search-toggle-icon": La, "slidenav-next": vd, "slidenav-next-large": gd, "slidenav-previous": bd, "slidenav-previous-large": $d }, Ba = { install: Dd, mixins: [Oa], args: "icon", props: { icon: String }, isIcon: true, beforeConnect() {
        V(this.$el, "uk-icon");
      }, methods: { async getSvg() {
        const t = Md(this.icon);
        if (!t)
          throw "Icon not found.";
        return t;
      } } }, Je = { args: false, extends: Ba, data: (t) => ({ icon: c(t.constructor.options.name) }), beforeConnect() {
        V(this.$el, this.$options.id);
      } }, kd = { extends: Je, beforeConnect() {
        const t = this.$props.icon;
        this.icon = this.$el.closest(".uk-nav-primary") ? `${t}-large` : t;
      } }, xd = { extends: Je, mixins: [jn], i18n: { toggle: "Open Search", submit: "Submit Search" }, beforeConnect() {
        const t = W(this.$el, "uk-search-toggle") || W(this.$el, "uk-navbar-toggle");
        if (this.icon = t ? "search-toggle-icon" : W(this.$el, "uk-search-icon") && this.$el.closest(".uk-search-large") ? "search-large" : this.$el.closest(".uk-search-medium") ? "search-medium" : this.$props.icon, !$e(this.$el, "aria-label"))
          if (t) {
            const e = this.t("toggle");
            O(this.$el, "aria-label", e);
          } else {
            const e = this.$el.closest("a,button");
            if (e) {
              const i = this.t("submit");
              O(e, "aria-label", i);
            }
          }
      } }, Sd = { extends: Je, beforeConnect() {
        O(this.$el, "role", "status");
      }, methods: { async getSvg() {
        const t = await Ba.methods.getSvg.call(this);
        return this.ratio !== 1 && g(F("circle", t), "strokeWidth", 1 / this.ratio), t;
      } } }, Se = { extends: Je, mixins: [jn], beforeConnect() {
        const t = this.$el.closest("a,button");
        O(t, "role", this.role !== null && pt(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !$e(t, "aria-label") && O(t, "aria-label", e);
      } }, ja = { extends: Se, beforeConnect() {
        V(this.$el, "uk-slidenav");
        const t = this.$props.icon;
        this.icon = W(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
      } }, _d = { extends: Se, i18n: { label: "Open menu" } }, Ad = { extends: Se, i18n: { label: "Close" }, beforeConnect() {
        this.icon = `close-${W(this.$el, "uk-close-large") ? "large" : "icon"}`;
      } }, Ed = { extends: Se, i18n: { label: "Open" } }, Id = { extends: Se, i18n: { label: "Back to top" } }, Cd = { extends: Se, i18n: { label: "Next page" }, data: { role: null } }, Td = { extends: Se, i18n: { label: "Previous page" }, data: { role: null } }, Od = { extends: Se, i18n: { label: "Check" }, data: { role: null } }, Ns = {};
      function Dd(t) {
        t.icon.add = (e, i) => {
          const s = ht(e) ? { [e]: i } : e;
          lt(s, (r, o) => {
            Hs[o] = r, delete Ns[o];
          }), t._initialized && we(document.body, (r) => lt(t.getComponents(r), (o) => {
            o.$options.isIcon && o.icon in s && o.$reset();
          }));
        };
      }
      const Pd = { twitter: "x" };
      function Md(t) {
        return t = Pd[t] || t, Hs[t] ? (Ns[t] || (Ns[t] = Pa(Hs[Hd(t)] || Hs[t])), Ns[t].cloneNode(true)) : null;
      }
      function Hd(t) {
        return xt ? U(U(t, "left", "right"), "previous", "next") : t;
      }
      var Nd = Object.freeze({ __proto__: null, Accordion: ya, Alert: gu, Check: Od, Close: Ad, Cover: bu, Drop: xa, DropParentIcon: Je, Dropdown: xa, Dropnav: Au, FormCustom: Eu, Grid: Iu, Img: Uc, Leader: Du, Marker: Ed, Modal: Pu, Nav: Hu, NavParentIcon: kd, NavbarParentIcon: Je, NavbarToggleIcon: _d, Offcanvas: Nu, OverflowAuto: ju, OverlayIcon: Je, PgnNext: Cd, PgnPrevious: Td, Responsive: Ru, Scroll: zu, Scrollspy: Wu, ScrollspyNav: qu, SearchIcon: xd, SlidenavNext: ja, SlidenavPrevious: ja, Spinner: Sd, Sticky: Yu, Svg: Gu, Switcher: Na, Tab: Qu, Toggle: ed, Totop: Id, Video: wa });
      return lt(Nd, (t, e) => Bt.component(e, t)), uu(Bt), lt(hu, (t, e) => Bt.component(e, t)), Bt;
    });
    function Xe(f) {
      if (f.startsWith("{"))
        try {
          return JSON.parse(f);
        } catch {
          return console.error("Error parsing", f), {};
        }
      if (f.includes(":"))
        try {
          const n = {};
          return f.replace(/[;\s]+$/, "").split(";").forEach((a) => {
            const h = a.trim().split(/:(.*)/);
            n[h[0].trim()] = h[1].trim();
          }), n;
        } catch {
          return console.error("Error parsing", f), {};
        }
      return f;
    }
    function Me(f) {
      if (/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2})?$/.test(f)) {
        let n = new Date(f);
        if (isNaN(n.getTime()))
          throw new Error("Invalid date");
        return n;
      }
      throw new Error("Invalid format");
    }
    function gl(f) {
      if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(f))
        throw new Error("Invalid time format. Use HH:MM (24-hour format)");
      return f;
    }
    function vl(f, n = false) {
      const a = [], h = {}, c = (m, p, k, w) => {
        const C = k.hasAttribute("value") ? k.getAttribute("value") : k.textContent, b = { keywords: [C] };
        Object.keys(k.dataset).forEach((P) => {
          P === "keywords" ? b.keywords = [C, ...k.dataset.keywords.split(",")] : b[P] = k.dataset[P];
        });
        const I = { group: m, value: C, text: k.textContent, disabled: w === true ? true : k.disabled, selected: k.hasAttribute("selected"), data: b };
        n ? a.push(I) : (h[m] || (h[m] = { text: p, options: [] }), h[m].options.push(I));
      };
      return Array.from(f.children).forEach((m) => {
        if (m.nodeName === "OPTGROUP") {
          const p = m, k = p.dataset.key || p.getAttribute("label"), w = p.getAttribute("label");
          Array.from(p.children).forEach((C) => {
            c(k, w, C, p.disabled);
          });
        } else
          m.nodeName === "OPTION" && c("__", "__", m);
      }), n ? a : h;
    }
    var Ir = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    function Cr(f) {
      return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
    }
    var Tr = { exports: {} };
    (function(f, n) {
      (function(a, h, c) {
        f.exports = c(), f.exports.default = c();
      })("slugify", Ir, function() {
        var a = JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`), h = JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');
        function c(m, p) {
          if (typeof m != "string")
            throw new Error("slugify: string argument expected");
          p = typeof p == "string" ? { replacement: p } : p || {};
          var k = h[p.locale] || {}, w = p.replacement === undefined ? "-" : p.replacement, C = p.trim === undefined ? true : p.trim, b = m.normalize().split("").reduce(function(I, P) {
            var N = k[P];
            return N === undefined && (N = a[P]), N === undefined && (N = P), N === w && (N = " "), I + N.replace(p.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "");
          }, "");
          return p.strict && (b = b.replace(/[^A-Za-z0-9\s]/g, "")), C && (b = b.trim()), b = b.replace(/\s+/g, w), p.lower && (b = b.toLowerCase()), b;
        }
        return c.extend = function(m) {
          Object.assign(a, m);
        }, c;
      });
    })(Tr);
    var $l = Tr.exports;
    const bl = Cr($l);
    var yl = Object.defineProperty, ss = (f, n, a, h) => {
      for (var c = undefined, m = f.length - 1, p;m >= 0; m--)
        (p = f[m]) && (c = p(n, a, c) || c);
      return c && yl(n, a, c), c;
    };

    class Qe extends Oe {
      constructor() {
        super(...arguments), this["cls-custom"] = "", this.i18n = "", this.$i18n = {}, this.$cls = {};
      }
      get $locales() {
        const n = {};
        return Object.keys(this.$i18n).forEach((a) => {
          n[a] = this.$i18n[a].includes(",") ? this.$i18n[a].split(",").map((h) => h.trim()) : this.$i18n[a];
        }), n;
      }
      initializeCls() {
        if (this["cls-custom"]) {
          const n = Xe(this["cls-custom"]);
          typeof n == "string" ? this.$cls[this["cls-default-element"]] = n : Object.keys(this.$cls).forEach((a) => {
            const h = a;
            n[h] && (this.$cls[h] = n[h]);
          });
        }
      }
      initializeI18n() {
        if (this.i18n) {
          const n = Xe(this.i18n);
          typeof n == "object" && (this.$i18n = Object.assign(this.$i18n, n));
        }
      }
      connectedCallback() {
        super.connectedCallback(), this.initializeCls(), this.initializeI18n();
      }
      createRenderRoot() {
        return this;
      }
    }
    ss([j({ type: String })], Qe.prototype, "cls-custom"), ss([j({ type: String })], Qe.prototype, "i18n"), ss([X()], Qe.prototype, "$i18n"), ss([X()], Qe.prototype, "$cls");
    var wl = Object.defineProperty, Ii = (f, n, a, h) => {
      for (var c = undefined, m = f.length - 1, p;m >= 0; m--)
        (p = f[m]) && (c = p(n, a, c) || c);
      return c && wl(n, a, c), c;
    };

    class ae extends Qe {
      constructor() {
        super(...arguments), this.disabled = false, this.name = "", this.placeholder = "", this.required = false, this.value = "";
      }
      renderHidden() {
        return typeof this.$value == "string" ? z`
          <input name="${this.name}" type="hidden" value="${this.$value}" />
        ` : this.$value.map((n) => z`<input name="${this.name}[]" type="hidden" value="${n}" />`);
      }
      emit() {
        this.dispatchEvent(new CustomEvent(this["input-event"], { detail: { value: this.$value }, bubbles: true, composed: true }));
      }
      connectedCallback() {
        super.connectedCallback(), this.initializeValue();
      }
    }
    Ii([j({ type: Boolean })], ae.prototype, "disabled"), Ii([j({ type: String })], ae.prototype, "name"), Ii([j({ type: String })], ae.prototype, "placeholder"), Ii([j({ type: Boolean })], ae.prototype, "required"), Ii([j({ type: String })], ae.prototype, "value");
    var { defineProperty: kl, getOwnPropertyDescriptor: xl } = Object, Zt = (f, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? xl(n, a) : n, m = f.length - 1, p;m >= 0; m--)
        (p = f[m]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && kl(n, a, c), c;
    };
    E.InputTag = class extends ae {
      constructor() {
        super(...arguments), this["cls-default-element"] = "div", this["input-event"] = "uk-input-tag:input", this.maxlength = 20, this.minlength = 1, this.slugify = false, this["slugify-options"] = "", this.state = "secondary", this.$cls = { div: "" }, this.$input = "", this.$slugOptions = { lower: true, strict: true }, this.$tags = [];
      }
      get $value() {
        return this.$tags;
      }
      get $text() {
        return "";
      }
      initializeValue() {
        if (this.$tags = this.value === "" ? [] : this.value.split(","), this["slugify-options"]) {
          const n = Xe(this["slugify-options"]);
          "replacement" in n && (this.$slugOptions.replacement = n.replacement), "remove" in n && (this.$slugOptions.remove = new RegExp(n.remove, "g")), "lower" in n && (this.$slugOptions.lower = n.lower === "true"), "strict" in n && (this.$slugOptions.strict = n.strict === "true"), "locale" in n && (this.$slugOptions.locale = n.locale), "trim" in n && (this.$slugOptions.trim = n.trim === "true");
        }
      }
      push() {
        let n = this.$input;
        this.slugify && (n = bl(this.$input, this.$slugOptions)), this.$input.length >= this.minlength && !this.$tags.includes(n) && (this.$tags.push(n), this.$input = ""), this.emit();
      }
      render() {
        return z`
      <div
        class="uk-input-tag ${this.disabled === true ? "uk-disabled" : ""} ${this.$cls.div}"
      >
        ${this.$tags.map((n, a) => z`
            <div class="uk-tag ${`uk-tag-${this.state}`}">
              <span
                @click=${() => {
          var h;
          this.disabled === false && (this.$input = this.$tags[a], this.$tags = this.$tags.filter((c, m) => m !== a), (h = this.renderRoot.querySelector("input")) == null || h.focus());
        }}
              >
                ${n}
              </span>
              <a
                @click="${() => {
          this.disabled === false && (this.$tags = this.$tags.filter((h, c) => c !== a));
        }}"
                uk-close
              ></a>
            </div>
          `)}

        <input
          .disabled=${this.disabled}
          autocomplete="off"
          type="text"
          placeholder="${this.placeholder}"
          @keydown=${(n) => {
          switch (n.key) {
            case "Backspace":
              this.$tags.length > 0 && this.$input.length === 0 && (n.preventDefault(), this.$input = this.$tags.slice(-1)[0], this.$tags.pop());
              break;
            case ",":
              n.preventDefault(), this.push();
              break;
            case "Enter":
              n.preventDefault(), this.push();
              break;
          }
        }}
          @input=${(n) => {
          const a = n.target;
          this.$input = a.value;
        }}
          .maxLength=${this.maxlength}
          .value=${this.$input}
        />
        ${this.renderHidden()}
      </div>
    `;
      }
    }, Zt([j({ type: Number })], E.InputTag.prototype, "maxlength", 2), Zt([j({ type: Number })], E.InputTag.prototype, "minlength", 2), Zt([j({ type: Boolean })], E.InputTag.prototype, "slugify", 2), Zt([j({ type: String })], E.InputTag.prototype, "slugify-options", 2), Zt([j({ type: String })], E.InputTag.prototype, "state", 2), Zt([X()], E.InputTag.prototype, "$cls", 2), Zt([X()], E.InputTag.prototype, "$input", 2), Zt([X()], E.InputTag.prototype, "$slugOptions", 2), Zt([X()], E.InputTag.prototype, "$tags", 2), E.InputTag = Zt([oe("uk-input-tag")], E.InputTag);
    var { defineProperty: Sl, getOwnPropertyDescriptor: _l } = Object, ti = (f, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? _l(n, a) : n, m = f.length - 1, p;m >= 0; m--)
        (p = f[m]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && Sl(n, a, c), c;
    };
    E.InputPin = class extends ae {
      constructor() {
        super(...arguments), this["cls-default-element"] = "div", this["input-event"] = "uk-input-pin:input", this.autofocus = false, this.length = 6, this.$cls = { div: "" }, this.$v = "";
      }
      get $value() {
        return this.$v;
      }
      get $text() {
        return "";
      }
      initializeValue() {
      }
      firstUpdated(n) {
        this.HTMLInputs = this.renderRoot.querySelectorAll('input[type="text"]'), this.HTMLInputs.forEach((a) => {
          a.addEventListener("paste", (h) => {
            h.preventDefault();
            const c = h.clipboardData;
            if (c) {
              const m = c.getData("Text").substring(0, this.length);
              if (this.$v = m, m.split("").forEach((p, k) => {
                const w = this.HTMLInputs[k];
                w.disabled = false, w.value = p;
              }), m.length < this.length) {
                const p = this.HTMLInputs[m.length];
                p.disabled = false, p.focus();
              } else
                this.HTMLInputs[this.$focus].blur();
            }
          });
        });
      }
      renderInput(n) {
        return z`
      <input
        type="text"
        maxlength="1"
        placeholder="○"
        .autofocus="${!!(this.autofocus && n === 0)}"
        .disabled="${n !== 0}"
        @keydown="${(a) => {
          const h = a.target;
          switch (a.key) {
            case "Backspace":
              this.$focus !== undefined && h.value.length === 0 && this.$focus > 0 && (a.preventDefault(), this.HTMLInputs[this.$focus - 1].focus(), h.disabled = true);
              break;
            case "Delete":
              if (this.$focus !== undefined && h.value.length === 0) {
                a.preventDefault();
                const c = this.HTMLInputs[this.$focus + 1];
                c && (c.focus(), c.setSelectionRange(0, 0));
              }
              break;
          }
        }}"
        @input="${(a) => {
          var m;
          const h = a.target;
          if (h.value.length === 1) {
            if (n < this.length - 1) {
              const p = this.HTMLInputs[n + 1];
              p.disabled = false, p.focus();
            }
            n === this.length - 1 && h.blur();
          }
          let c = "";
          (m = this.HTMLInputs) == null || m.forEach((p) => {
            c += p.value;
          }), this.$v = c, this.emit();
        }}"
        @focus="${() => this.$focus = n}"
        @blur="${() => this.$focus = undefined}"
      />
    `;
      }
      render() {
        return z`
      <div
        class="uk-input-pin ${this.disabled === true ? "uk-disabled" : ""} ${this.$cls.div}"
      >
        ${Array(this.length).fill("").map((n, a) => this.renderInput(a))}
      </div>
      ${this.renderHidden()}
    `;
      }
    }, ti([j({ type: Boolean })], E.InputPin.prototype, "autofocus", 2), ti([j({ type: Number })], E.InputPin.prototype, "length", 2), ti([X()], E.InputPin.prototype, "$cls", 2), ti([X()], E.InputPin.prototype, "$focus", 2), ti([X()], E.InputPin.prototype, "$v", 2), E.InputPin = ti([oe("uk-input-pin")], E.InputPin);
    var Al = Object.defineProperty, ns = (f, n, a, h) => {
      for (var c = undefined, m = f.length - 1, p;m >= 0; m--)
        (p = f[m]) && (c = p(n, a, c) || c);
      return c && Al(n, a, c), c;
    };

    class ei extends Oe {
      constructor() {
        super(...arguments), this.reactive = false, this.$term = "", this.$focused = -1, this.$open = false, this._options = [], this.HTMLSelect = null, this.HTMLRectParent = null, this.HTMLRectActive = null, this.observer = null, this._rendered = false;
      }
      get options() {
        return this.$term ? this._options.filter((n) => n.data.keywords.some((a) => a.toLowerCase().includes(this.$term.toLowerCase()))) : this._options;
      }
      get groupedOptions() {
        const n = {};
        for (const a of this.options)
          a.group = a.group, (n[a.group] = n[a.group] || []).push({ value: a.value, text: a.text, disabled: a.disabled, selected: a.selected, data: a.data });
        return n;
      }
      connectedCallback() {
        super.connectedCallback(), this.HTMLSelect = this.renderRoot.querySelector("select"), this.HTMLSelect && (this.createOptions(), this.reactive && (this.observer = new MutationObserver(() => {
          this.createOptions(), this.requestUpdate();
        }), this.observer.observe(this.HTMLSelect, { attributes: true, childList: true, characterData: true, subtree: true })));
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this.observer && (this.observer.disconnect(), this.observer = null);
      }
      updated(n) {
        var a, h;
        n.has("$term") && n.get("$term") !== undefined && (this.termUpdated(), this.updateComplete.then(() => {
          this.$focused = -1;
        })), n.has("$focused") && this.HTMLRectParent && ((a = this.HTMLRectParent.querySelector("li.uk-active")) == null || a.classList.remove("uk-active"), this.HTMLRectActive = this.HTMLRectParent.querySelectorAll("a")[this.$focused], this.HTMLRectActive && (this.focusActiveOption(), (h = this.HTMLRectActive.closest("li")) == null || h.classList.add("uk-active")));
      }
      termUpdated() {
      }
      createRenderRoot() {
        return this;
      }
      createOptions() {
        if (!(this.reactive === false && this._rendered === true) && this.HTMLSelect) {
          this._options = [];
          const n = (a, h, c) => {
            let m;
            h.hasAttribute("value") ? m = h.getAttribute("value") : m = h.textContent;
            const p = { keywords: [] };
            p.keywords = [m], Object.keys(h.dataset).forEach((k) => {
              k !== "keywords" ? p[k] = h.dataset[k] : p.keywords = [m, ...h.getAttribute("data-keywords").split(",")];
            }), this._options.push({ group: a, value: m, text: h.textContent, disabled: c === true ? true : h.disabled, selected: h.hasAttribute("selected"), data: p });
          };
          Array.from(this.HTMLSelect.children).map((a) => {
            if (a.nodeName === "OPTGROUP") {
              const h = a;
              Array.from(h.children).map((c) => {
                const m = c;
                n(h.getAttribute("label"), m, h.disabled);
              });
            }
            a.nodeName === "OPTION" && n("__", a);
          });
        }
      }
      navigate(n) {
        const a = this.options.length - 1;
        switch (n) {
          case "t":
            n === "t" && (this.$focused === 0 ? this.$focused = a : this.$focused--);
            break;
          case "d":
            this.$focused < a ? this.$focused++ : this.$focused = 0;
            break;
        }
      }
      focusActiveOption(n = "smooth") {
        if (this.HTMLRectParent && this.HTMLRectActive) {
          const a = { parent: this.HTMLRectParent.getBoundingClientRect(), active: this.HTMLRectActive.getBoundingClientRect() };
          this.HTMLRectParent.scrollTo({ top: this.HTMLRectActive.offsetTop - this.HTMLRectParent.offsetTop - a.parent.height / 2 + a.active.height / 2, behavior: n });
        }
      }
      _cls(n) {
        return { parent: "uk-nav", item: (n == null ? undefined : n.item.disabled) === true ? "uk-disabled opacity-50" : "", "item-header": "uk-nav-header", "item-link": "", "item-icon": "uk-flex-none uk-margin-small-right", "item-wrapper": "uk-flex-1 uk-flex uk-flex-middle", "item-text": "uk-flex-1" };
      }
      onClick(n) {
      }
      onKeydown(n) {
      }
      renderCheck(n) {
      }
      renderList() {
        const n = this._cls();
        return z`
      <ul class="${n.parent}" tabindex="-1" @keydown="${this.onKeydown}">
        ${Pe(Object.keys(this.groupedOptions), (a, h) => z`
            ${this.renderListHeader(a)}
            ${Pe(this.groupedOptions[a], (c, m) => this.renderListItem(c, m))}
          `)}
      </ul>
    `;
      }
      renderListHeader(n) {
        const a = this._cls();
        return n !== "__" ? z`<li class="${a["item-header"]}">${n}</li>` : "";
      }
      renderListItem(n, a) {
        const h = this._cls({ item: n, index: a });
        return z`
      <li class="${h.item}">
        <a
          @click="${() => this.onClick({ item: n, index: a })}"
          class="${h["item-link"]}"
          tabindex="-1"
        >
          <div class="${h["item-wrapper"]}">
            ${n.data.icon ? z`
                  <uk-icon
                    class="${h["item-icon"]}"
                    icon="${n.data.icon}"
                  ></uk-icon>
                ` : ""}
            ${n.data.description ? z`
                  <div>
                    <span class="${h["item-text"]}">${n.text}</span>
                    <div class="uk-nav-subtitle">${n.data.description}</div>
                  </div>
                ` : z`<span class="${h["item-text"]}">${n.text}</span>`}
          </div>
          ${this.renderCheck({ item: n, index: a })}
        </a>
      </li>
    `;
      }
    }
    ns([j({ type: Boolean })], ei.prototype, "reactive"), ns([X()], ei.prototype, "$term"), ns([X()], ei.prototype, "$focused"), ns([X()], ei.prototype, "$open");
    var { defineProperty: El, getOwnPropertyDescriptor: Il } = Object, rs = (f, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? Il(n, a) : n, m = f.length - 1, p;m >= 0; m--)
        (p = f[m]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && El(n, a, c), c;
    };
    E.Command = class extends ei {
      constructor() {
        super(), this.placeholder = "Search", this.toggle = "fkcmd", this.HTMLModal = null;
      }
      firstUpdated(n) {
        this.HTMLModal = this.renderRoot.querySelector(".uk-modal"), this.HTMLModal && (this.HTMLRectParent = this.renderRoot.querySelector("ul"), this.key !== undefined && document.addEventListener("keydown", (a) => {
          a.ctrlKey && a.key === this.key && (a.preventDefault(), window.UIkit.modal(this.HTMLModal).toggle());
        }), window.UIkit.util.on(this.HTMLModal, "hidden", () => {
          this.$focused = -1, this.$term = "";
        })), this._rendered = true;
      }
      onKeydown(n) {
        switch (n.key) {
          case "ArrowDown":
            n.preventDefault(), this.navigate("d");
            break;
          case "ArrowUp":
            n.preventDefault(), this.navigate("t");
            break;
          case "Enter":
            n.preventDefault(), this.select(this.$focused);
            break;
        }
      }
      _cls(n) {
        return { parent: "uk-overflow-auto uk-nav uk-nav-secondary uk-cmd-body", item: (n == null ? undefined : n.item.disabled) === true ? "uk-disabled opacity-50" : "", "item-header": "uk-nav-header", "item-link": (n == null ? undefined : n.item.disabled) === false ? "uk-modal-close" : "", "item-icon": "uk-cmd-item-icon", "item-wrapper": "uk-cmd-item-wrapper", "item-text": "uk-cmd-item-text" };
      }
      onClick(n) {
        const { item: a } = n, h = this.options.findIndex((c) => c.value === a.value);
        this.select(h);
      }
      select(n) {
        if (n === -1)
          return;
        let a = this.options[n];
        a.disabled || this.dispatchEvent(new CustomEvent("uk-command:click", { detail: { value: a }, bubbles: true, composed: true }));
      }
      renderSearch() {
        return z`
      <div class="uk-cmd-header">
        <div class="uk-cmd-header-icon">
          <span uk-search-icon></span>
        </div>
        <div class="uk-cmd-header-input">
          <input
            autofocus
            placeholder="${this.placeholder}"
            type="text"
            .value="${this.$term}"
            @keydown=${this.onKeydown}
            @input=${(n) => {
          const a = n.target;
          this.$term = a.value;
        }}
          />
        </div>
        <div class="uk-cmd-header-esc">
          <button class="uk-btn uk-btn-sm uk-btn-default uk-modal-close">
            Esc
          </button>
        </div>
      </div>
      ${Object.keys(this.groupedOptions).length > 0 ? z`<hr class="uk-hr" />` : ""}
    `;
      }
      render() {
        return z`
      <div class="uk-modal uk-flex-top" id="${this.toggle}" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical">
          ${this.renderSearch()} ${this.renderList()}
        </div>
      </div>
    `;
      }
    }, rs([j({ type: String })], E.Command.prototype, "key", 2), rs([j({ type: String })], E.Command.prototype, "placeholder", 2), rs([j({ type: String })], E.Command.prototype, "toggle", 2), E.Command = rs([oe("uk-command")], E.Command);
    var { defineProperty: Cl, getOwnPropertyDescriptor: Tl } = Object, Ks = (f, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? Tl(n, a) : n, m = f.length - 1, p;m >= 0; m--)
        (p = f[m]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && Cl(n, a, c), c;
    };
    E.ThemeSwitcher = class extends Qe {
      constructor() {
        super(...arguments), this["cls-default-element"] = "div", this.$config = {}, this.HTMLSelect = null, this.keys = {}, this.isRendered = false;
      }
      connectedCallback() {
        super.connectedCallback(), this.$config.mode = document.documentElement.classList.contains("dark") ? "dark" : "light";
        const n = JSON.parse(localStorage.getItem("__FRANKEN__") || "{}");
        Object.keys(n).forEach((a) => {
          this.$config[a] = n[a];
        }), this.HTMLSelect = this.renderRoot.querySelector("select"), this.HTMLSelect && this.isRendered === false && (this.keys = vl(this.HTMLSelect));
      }
      firstUpdated(n) {
        this.isRendered = true;
      }
      updated(n) {
        n.has("__FRANKEN__") && (localStorage.setItem("__FRANKEN__", JSON.stringify(this.$config)), this.dispatchEvent(new CustomEvent("uk-theme-switcher:change", { detail: { value: this.$config }, bubbles: true, composed: true })));
      }
      setKey(n, a) {
        const h = document.documentElement;
        if (this.$config[n] = a, n === "mode")
          this.$config.mode = a, a === "light" ? h.classList.remove("dark") : h.classList.add("dark");
        else {
          const c = Array.from(h.classList).find((m) => m.startsWith(`uk-${n}-`));
          c && h.classList.remove(c), h.classList.add(a);
        }
        this.__FRANKEN__ = JSON.stringify(this.$config);
      }
      renderKeys(n) {
        const a = n.group;
        return z`
      <button
        class="${this.$config[a] ? this.$config[a] === n.value ? "uk-active" : "" : n.selected === true ? "uk-active" : ""}"
        @click="${() => {
          this.setKey(n.group, n.value), this.$config[a] = n.value, this.requestUpdate();
        }}"
      >
        ${n.data.hex ? z`
              <span
                class="uk-ts-hex"
                style="${`background:${n.data.hex}`}"
              ></span>
            ` : n.data.icon ? z`<uk-icon icon=${n.data.icon}></uk-icon>` : ""}
        <span class="uk-ts-text">${n.text}</span>
      </button>
    `;
      }
      render() {
        return z`
      <div class="uk-ts ${this.$cls.div}">
        ${Object.keys(this.keys).map((n) => z`
            <div class="uk-ts-key">
              <div class="uk-form-label">${this.keys[n].text}</div>
              <div class="uk-ts-value">
                ${Pe(this.keys[n].options, (a) => a, (a) => this.renderKeys(a))}
              </div>
            </div>
          `)}
      </div>
    `;
      }
    }, Ks([X()], E.ThemeSwitcher.prototype, "$config", 2), Ks([X()], E.ThemeSwitcher.prototype, "__FRANKEN__", 2), E.ThemeSwitcher = Ks([oe("uk-theme-switcher")], E.ThemeSwitcher);
    var { defineProperty: Ol, getOwnPropertyDescriptor: Dl } = Object, Tt = (f, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? Dl(n, a) : n, m = f.length - 1, p;m >= 0; m--)
        (p = f[m]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && Ol(n, a, c), c;
    };
    E.Select = class extends ei {
      constructor() {
        super(...arguments), this.disabled = false, this.drop = "mode: click", this.searchable = false, this.multiple = false, this.placeholder = "Select an option", this.name = "", this["cls-custom"] = "", this.i18n = "", this.icon = "", this.value = "", this.$open = false, this.$selected = [], this.$i18n = { "search-placeholder": "Search", "selection-count": ":n: options selected" }, this.$cls = { button: "", icon: "", dropdown: "" }, this._icon = false, this.HTMLDrop = null;
      }
      get text() {
        var n, a;
        return this.$selected.length === 0 ? this.placeholder !== "" ? this.placeholder : "Select an option" : this.multiple === false ? (n = this._options.find((h) => h.value === this.$selected[0])) == null ? undefined : n.text : this.$selected.length === 1 ? (a = this._options.find((h) => h.value === this.$selected[0])) == null ? undefined : a.text : this.$i18n["selection-count"].replace(":n:", this.$selected.length.toString());
      }
      connectedCallback() {
        if (super.connectedCallback(), this.i18n) {
          const n = Xe(this.i18n);
          typeof n == "object" && (this.$i18n = Object.assign(this.$i18n, n));
        }
        if (this["cls-custom"]) {
          const n = Xe(this["cls-custom"]);
          typeof n == "string" ? this.$cls.button = n : Object.keys(this.$cls).forEach((a) => {
            const h = a;
            n[h] && (this.$cls[h] = n[h]);
          });
        }
        if (this.hasAttribute("icon")) {
          const n = this.getAttribute("icon");
          n === "" ? this._icon = true : this._icon = n;
        }
        this.hasAttribute("value") ? this.$selected = this.value.split(",") : (this.$selected = this.options.filter((n) => n.selected === true).map((n) => n.value), this.multiple === false && (this.$focused = this.options.findIndex((n) => n.value === this.$selected[0])));
      }
      firstUpdated(n) {
        this.HTMLDrop = this.renderRoot.querySelector(".uk-drop"), this.HTMLDrop && (this.HTMLRectParent = this.renderRoot.querySelector("ul"), window.UIkit.util.on(this.HTMLDrop, "hidden", () => {
          this.$open = false, this.$focused = -1, this.$term = "";
        }), window.UIkit.util.on(this.HTMLDrop, "shown", () => {
          this.$open = true;
        })), this._rendered = true;
      }
      select(n) {
        if (n === -1)
          return;
        let a = this.options[n];
        a.disabled || (this.multiple === false ? this.$selected = [a.value] : (this.$selected.findIndex((h) => h === (a == null ? undefined : a.value)) === -1 ? this.$selected.push(a == null ? undefined : a.value) : this.$selected = this.$selected.filter((h) => h !== (a == null ? undefined : a.value)), this.requestUpdate()), this.dispatchEvent(new CustomEvent("uk-select:input", { detail: { value: this.multiple === false ? this.$selected[0] : this.$selected }, bubbles: true, composed: true })));
      }
      termUpdated() {
        this.dispatchEvent(new CustomEvent("uk-select:search", { detail: { value: this.$term }, bubbles: true, composed: true }));
      }
      onKeydown(n) {
        if (this.$open === true)
          switch (n.key) {
            case "ArrowDown":
              n.preventDefault(), this.navigate("d");
              break;
            case "ArrowUp":
              n.preventDefault(), this.navigate("t");
              break;
            case "Enter":
              n.preventDefault(), this.select(this.$focused);
              break;
          }
      }
      onInputKeydown(n) {
        if (this.onKeydown(n), this.$open === true)
          switch (n.key) {
            case "Tab":
              !n.altKey && !n.shiftKey && !n.ctrlKey && !n.metaKey && n.preventDefault();
              break;
          }
      }
      _cls(n) {
        return { parent: "uk-nav uk-dropdown-nav uk-overflow-auto uk-cs-options", item: (n == null ? undefined : n.item.disabled) === true ? "uk-disabled opacity-50" : "", "item-header": "uk-nav-header", "item-link": this.multiple === false ? "uk-drop-close" : "", "item-icon": "uk-cs-item-icon", "item-wrapper": "uk-cs-item-wrapper", "item-text": "uk-cs-item-text" };
      }
      onClick(n) {
        const { item: a } = n, h = this.options.findIndex((c) => c.value === a.value);
        this.select(h);
      }
      renderCheck(n) {
        if (this.$selected.includes(n.item.value))
          return z`<span class="uk-cs-check" data-uk-check></span>`;
      }
      renderSearch() {
        return this.searchable === true ? z`
          <div class="uk-cs-search">
            <span uk-search-icon></span>
            <input
              placeholder=${this.$i18n["search-placeholder"]}
              type="text"
              .value="${this.$term}"
              @input="${(n) => {
          const a = n.target;
          this.$term = a.value;
        }}"
              @keydown="${this.onInputKeydown}"
            />
          </div>
          ${Object.keys(this.groupedOptions).length > 0 ? z`<hr class="uk-hr" />` : ""}
        ` : "";
      }
      renderHidden() {
        return this.name && this.$selected.length > 0 ? z`${this.multiple === false ? this.renderInput(this.name, this.$selected[0]) : this.$selected.map((n) => this.renderInput(`${this.name}[]`, n))}` : "";
      }
      renderInput(n, a) {
        return z`<input name="${n}" type="hidden" value="${a}" />`;
      }
      render() {
        return z`
      <div class="uk-position-relative">
        <button
          class="${this.$cls.button}"
          type="button"
          .disabled=${this.disabled}
          @keydown="${this.onKeydown}"
        >
          ${this.text}
          ${this._icon === true ? z`
                <span
                  class="${this.$cls.icon}"
                  data-uk-drop-parent-icon
                ></span>
              ` : this.icon !== "" ? z`
                  <uk-icon
                    class="${this.$cls.icon}"
                    icon="${this.icon}"
                  ></uk-icon>
                ` : ""}
        </button>
        <div
          class="${`uk-drop uk-dropdown ${this.$cls.dropdown}`}"
          uk-dropdown="${this.drop}"
        >
          ${this.renderSearch()} ${this.renderList()}
        </div>
        ${this.renderHidden()}
      </div>
    `;
      }
    }, Tt([j({ type: Boolean })], E.Select.prototype, "disabled", 2), Tt([j({ type: String })], E.Select.prototype, "drop", 2), Tt([j({ type: Boolean })], E.Select.prototype, "searchable", 2), Tt([j({ type: Boolean })], E.Select.prototype, "multiple", 2), Tt([j({ type: String })], E.Select.prototype, "placeholder", 2), Tt([j({ type: String })], E.Select.prototype, "name", 2), Tt([j({ type: String })], E.Select.prototype, "cls-custom", 2), Tt([j({ type: String })], E.Select.prototype, "i18n", 2), Tt([j({ type: String })], E.Select.prototype, "icon", 2), Tt([j({ type: String })], E.Select.prototype, "value", 2), Tt([X()], E.Select.prototype, "$open", 2), Tt([X()], E.Select.prototype, "$selected", 2), Tt([X()], E.Select.prototype, "$i18n", 2), Tt([X()], E.Select.prototype, "$cls", 2), E.Select = Tt([oe("uk-select")], E.Select);
    var Pl = Object.defineProperty, Xt = (f, n, a, h) => {
      for (var c = undefined, m = f.length - 1, p;m >= 0; m--)
        (p = f[m]) && (c = p(n, a, c) || c);
      return c && Pl(n, a, c), c;
    };

    class Rt extends ae {
      constructor() {
        super(...arguments), this.today = false, this.jumpable = false, this["starts-with"] = 0, this["disabled-dates"] = "", this["marked-dates"] = "", this["view-date"] = new Date().toISOString().split("T")[0], this.min = "", this.max = "", this.$viewDate = new Date, this.$i18n = { weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday", months: "January,February,March,April,May,June,July,August,September,October,November,December" }, this.isDirty = false;
      }
      getUTCDate(n) {
        return new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()));
      }
      isDateInRange(n) {
        if (!this.min && !this.max)
          return true;
        const a = new Date(n);
        if (this.min) {
          const h = Me(this.min);
          if (a < h)
            return false;
        }
        if (this.max) {
          const h = Me(this.max);
          if (a > h)
            return false;
        }
        return true;
      }
      parseDates(n) {
        return n.split(",").filter(Boolean).map((a) => {
          try {
            return Me(a.trim()).toISOString().slice(0, 10);
          } catch {
            return console.error(`${a} has an invalid format.`), "";
          }
        }).filter(Boolean);
      }
      getTimestampComponent(n) {
        return { year: n.getFullYear(), month: n.getMonth() + 1, monthName: this.$i18n.months.split(",")[n.getMonth()], day: n.getDate(), dayOfWeek: n.getDay(), dayName: this.$i18n.weekdays[n.getMonth()], ISOString: n.toISOString() };
      }
      connectedCallback() {
        if (super.connectedCallback(), this.i18n) {
          const n = Xe(this.i18n);
          typeof n == "object" && (this.$i18n = Object.assign(this.$i18n, n));
        }
        this["view-date"] && (this.$viewDate = new Date(this["view-date"])), this.initializeValue();
      }
    }
    Xt([j({ type: Boolean })], Rt.prototype, "today"), Xt([j({ type: Boolean })], Rt.prototype, "jumpable"), Xt([j({ type: Number })], Rt.prototype, "starts-with"), Xt([j({ type: String })], Rt.prototype, "disabled-dates"), Xt([j({ type: String })], Rt.prototype, "marked-dates"), Xt([j({ type: String })], Rt.prototype, "view-date"), Xt([j({ type: String })], Rt.prototype, "min"), Xt([j({ type: String })], Rt.prototype, "max"), Xt([X()], Rt.prototype, "$viewDate"), Xt([X()], Rt.prototype, "$i18n");
    var { defineProperty: Ml, getOwnPropertyDescriptor: Hl } = Object, Gs = (f, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? Hl(n, a) : n, m = f.length - 1, p;m >= 0; m--)
        (p = f[m]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && Ml(n, a, c), c;
    };
    E.Calendar = class extends Rt {
      constructor() {
        super(...arguments), this["cls-default-element"] = "calendar", this["input-event"] = "uk-calendar:change", this.$cls = { calendar: "" }, this.navigate = (n) => {
          const a = n.target;
          if (!(a != null && a.matches("button[data-iso]")))
            return;
          const h = Array.from(this.querySelectorAll("button[data-iso]")), c = h.indexOf(a), m = this.getGridPosition(a);
          if (!m)
            return;
          const { rowIndex: p, colIndex: k } = m;
          let w;
          const C = (I, P, N) => {
            let Y = P;
            for (;Y >= 0 && Y < I.length; ) {
              const rt = I[Y];
              if (!rt.disabled)
                return rt;
              Y += N;
            }
          }, b = { ArrowLeft: () => C(h, c - 1, -1), ArrowRight: () => C(h, c + 1, 1), ArrowUp: () => this.getNextEnabledInColumn(p - 1, k, -1), ArrowDown: () => this.getNextEnabledInColumn(p + 1, k, 1), Home: () => this.getRowFirstEnabledButton(p), End: () => this.getRowLastEnabledButton(p), PageUp: () => this.getNextEnabledInColumn(0, k, 1), PageDown: () => {
            const I = this.querySelectorAll("tr");
            return this.getNextEnabledInColumn(I.length - 1, k, -1);
          } };
          if (n.key in b)
            n.preventDefault(), w = b[n.key]();
          else if (n.key === "Enter" || n.key === " ") {
            n.preventDefault(), a.click();
            return;
          }
          w == null || w.focus();
        };
      }
      get $value() {
        return this.$active ? this.$active.slice(0, 10) : "";
      }
      get $text() {
        return "";
      }
      initializeValue() {
        if (this.value)
          try {
            const n = Me(this.value);
            this.$active = n.toISOString(), this.$viewDate = n;
          } catch {
            console.error(`${this.value} has an invalid format.`);
          }
        else
          this.today === true && (this.$active = this.getUTCDate(new Date).toISOString());
      }
      connectedCallback() {
        super.connectedCallback(), this.addEventListener("keydown", this.navigate);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this.removeEventListener("keydown", this.navigate);
      }
      getNextEnabledInColumn(n, a, h) {
        var p, k;
        const c = Array.from(this.querySelectorAll("tr"));
        let m = n;
        for (;m >= 0 && m < c.length; ) {
          const w = (k = (p = c[m]) == null ? undefined : p.children[a]) == null ? undefined : k.querySelector("button");
          if (w && !w.disabled)
            return w;
          m += h;
        }
      }
      getRowFirstEnabledButton(n) {
        const a = this.querySelectorAll("tr")[n];
        return Array.from((a == null ? undefined : a.querySelectorAll("button")) || []).find((c) => !c.disabled);
      }
      getRowLastEnabledButton(n) {
        const a = this.querySelectorAll("tr")[n];
        return Array.from((a == null ? undefined : a.querySelectorAll("button")) || []).reverse().find((c) => !c.disabled);
      }
      navigateMonth(n) {
        const a = new Date(this.$viewDate);
        if (n === "prev") {
          if (a.setMonth(a.getMonth() - 1), this.min && a < Me(this.min))
            return;
        } else if (a.setMonth(a.getMonth() + 1), this.max && a > Me(this.max))
          return;
        this.$viewDate = a;
      }
      selectMonth(n) {
        const a = new Date(this.$viewDate);
        a.setMonth(n), this.$viewDate = a;
      }
      setYear(n) {
        if (/^\d{4}$/.test(n)) {
          const a = new Date(this.$viewDate);
          a.setFullYear(parseInt(n)), this.$viewDate = a;
        }
      }
      getGridPosition(n) {
        const a = n.closest("td"), h = a == null ? undefined : a.closest("tr");
        return h ? { rowIndex: Array.from(this.querySelectorAll("tr")).indexOf(h), colIndex: Array.from(h.children).indexOf(a) } : null;
      }
      select(n) {
        this.$active = n.ISOString, n.month !== "current" && (this.$viewDate = new Date(n.ISOString)), this.isDirty === false && (this.isDirty = true);
      }
      isDisabled(n) {
        return this.parseDates(this["disabled-dates"]).includes(n.slice(0, 10)) || !this.isDateInRange(n);
      }
      getWeekdays() {
        const n = this.$locales.weekdays;
        return this["starts-with"] === 1 && n.push(n.shift()), n.map((a) => a.substring(0, 2));
      }
      get calendar() {
        const { year: n, month: a } = { year: this.$viewDate.getFullYear(), month: this.$viewDate.getMonth() + 1 }, { currentMonth: h, daysInCurrentMonth: c, daysInPrevMonth: m } = this.getMonthInfo(n, a), p = this.getStartingDay(h);
        return this.createGrid(n, a, { startingDay: p, daysInCurrentMonth: c, daysInPrevMonth: m });
      }
      getMonthInfo(n, a) {
        return { currentMonth: new Date(n, a - 1, 1), daysInCurrentMonth: new Date(n, a, 0).getDate(), daysInPrevMonth: new Date(n, a - 1, 0).getDate() };
      }
      getStartingDay(n) {
        return (n.getDay() - this["starts-with"] + 7) % 7;
      }
      createGrid(n, a, { startingDay: h, daysInCurrentMonth: c, daysInPrevMonth: m }) {
        const p = [];
        let k = 1, w = m - h + 1;
        for (let C = 0;C < 6; C++) {
          const b = [];
          for (let I = 0;I < 7; I++) {
            const P = this.getDayInfo(n, a, k, I, C, h, c, w);
            b.push(P.day), { date: k, prevMonthStartDate: w } = P;
          }
          if (p.push(b), k > c && b[6].month === "next")
            break;
        }
        return p;
      }
      getDayInfo(n, a, h, c, m, p, k, w) {
        let C, b;
        m === 0 && c < p ? (C = w++, b = -1) : h > k ? (C = h - k, b = 1, h++) : (C = h++, b = 0);
        const P = new Date(Date.UTC(n, a - 1 + b, C)).toISOString();
        return { day: { date: C, month: b === -1 ? "prev" : b === 1 ? "next" : "current", isCurrent: C === this.$viewDate.getDate() && b === 0, isDisabled: this.isDisabled(P), isMarked: this.parseDates(this["marked-dates"]).includes(P.slice(0, 10)), ISOString: P }, date: h, prevMonthStartDate: w };
      }
      updated(n) {
        n.has("$active") && (this.updateComplete.then(() => {
          const a = this.renderRoot.querySelector(`button[data-iso="${this.$active}"]`);
          a && this.isDirty === true && a.focus();
        }), this.emit());
      }
      renderWeek(n) {
        return z`
      <tr role="row">
        ${Pe(n, (a) => a.ISOString, this.renderDay.bind(this))}
      </tr>
    `;
      }
      renderDay(n) {
        const a = this.$active === n.ISOString, h = n.month === "current" ? "current month" : `${n.month} month`, c = !this.isDateInRange(n.ISOString), m = `${n.date} ${h}${a ? ", selected" : ""}${n.isDisabled ? ", disabled" : ""}${c ? ", out of allowed date range" : ""}`;
        return z`
      <td
        class="${n.month !== "current" ? "uk-cal-oom" : ""} ${a ? "uk-active" : ""} ${n.isMarked ? "uk-cal-marked" : ""}"
        role="gridcell"
      >
        <button
          type="button"
          data-iso="${n.ISOString}"
          @click="${() => this.select(n)}"
          aria-label="${m}"
          aria-selected="${a}"
          aria-disabled="${n.isDisabled}"
          .disabled="${n.isDisabled}"
        >
          ${n.date}
        </button>
      </td>
    `;
      }
      renderJumper() {
        const n = this.$locales.months, a = this.getTimestampComponent(this.$viewDate);
        return z`
      <div class="uk-inline uk-cal-month-dropdown">
        <button class="uk-input-fake uk-form-sm" type="button">
          ${a.monthName}
        </button>
        <div class="uk-drop uk-dropdown" data-uk-dropdown="mode: click;">
          <ul class="uk-dropdown-nav uk-nav">
            ${n.map((h, c) => z`
                <li
                  class="uk-cal-month-dropdown-item ${c + 1 === a.month ? "uk-active" : ""}"
                >
                  <a @click="${() => this.selectMonth(c)}">
                    ${n[c]}
                    ${c + 1 === a.month ? z`<span data-uk-check></span>` : ""}
                  </a>
                </li>
              `)}
          </ul>
        </div>
      </div>
      <input
        class="uk-input uk-form-sm"
        type="number"
        step="1"
        .value="${a.year.toString()}"
        min="1000"
        max="9999"
        @blur="${(h) => {
          const c = h.target;
          c.value = a.year.toString();
        }}"
        @input="${(h) => {
          const c = h.target;
          c.value = c.value.replace(/[^0-9]/g, "").substring(0, 4), c.value.length === 4 && this.setYear(c.value);
        }}"
        type="text"
      />
    `;
      }
      renderHeader() {
        const n = this.getTimestampComponent(this.$viewDate);
        return z`
      <div class="uk-cal-header">
        <button
          class="uk-btn uk-btn-default uk-btn-sm uk-btn-icon"
          @click=${() => this.navigateMonth("prev")}
          type="button"
          data-uk-pgn-previous
        ></button>
        <div class="uk-cal-jumper">
          ${this.jumpable && !this.min && !this.max ? this.renderJumper() : z`
                <div class="uk-cal-title uk-text-sm">
                  ${n.monthName} ${n.year}
                </div>
              `}
        </div>
        <button
          class="uk-btn uk-btn-default uk-btn-sm uk-btn-icon"
          @click=${() => this.navigateMonth("next")}
          type="button"
          data-uk-pgn-next
        ></button>
      </div>
    `;
      }
      render() {
        return z`
      <div class="uk-cal ${this.$cls.calendar}" role="application">
        ${this.renderHeader()}
        <table role="grid" aria-label="Calendar">
          <thead>
            <tr role="row">
              ${Pe(this.getWeekdays(), (n) => n, (n) => z`<th role="columnheader" scope="col">${n}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${Pe(this.calendar, (n) => n[0].ISOString, this.renderWeek.bind(this))}
          </tbody>
        </table>
        ${this.renderHidden()}
      </div>
    `;
      }
    }, Gs([X()], E.Calendar.prototype, "$active", 2), Gs([X()], E.Calendar.prototype, "$cls", 2), E.Calendar = Gs([oe("uk-calendar")], E.Calendar);
    var Or = { exports: {} };
    (function(f, n) {
      (function(a, h) {
        f.exports = h();
      })(Ir, function() {
        var a = 1000, h = 60000, c = 3600000, m = "millisecond", p = "second", k = "minute", w = "hour", C = "day", b = "week", I = "month", P = "quarter", N = "year", Y = "date", rt = "Invalid Date", Dt = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, te = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, ii = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(L) {
          var x = ["th", "st", "nd", "rd"], S = L % 100;
          return "[" + L + (x[(S - 20) % 10] || x[S] || x[0]) + "]";
        } }, le = function(L, x, S) {
          var _ = String(L);
          return !_ || _.length >= x ? L : "" + Array(x + 1 - _.length).join(S) + L;
        }, He = { s: le, z: function(L) {
          var x = -L.utcOffset(), S = Math.abs(x), _ = Math.floor(S / 60), T = S % 60;
          return (x <= 0 ? "+" : "-") + le(_, 2, "0") + ":" + le(T, 2, "0");
        }, m: function L(x, S) {
          if (x.date() < S.date())
            return -L(S, x);
          var _ = 12 * (S.year() - x.year()) + (S.month() - x.month()), T = x.clone().add(_, I), R = S - T < 0, U = x.clone().add(_ + (R ? -1 : 1), I);
          return +(-(_ + (S - T) / (R ? T - U : U - T)) || 0);
        }, a: function(L) {
          return L < 0 ? Math.ceil(L) || 0 : Math.floor(L);
        }, p: function(L) {
          return { M: I, y: N, w: b, d: C, D: Y, h: w, m: k, s: p, ms: m, Q: P }[L] || String(L || "").toLowerCase().replace(/s$/, "");
        }, u: function(L) {
          return L === undefined;
        } }, zt = "en", Jt = {};
        Jt[zt] = ii;
        var ce = "$isDayjsObject", ht = function(L) {
          return L instanceof vt || !(!L || !L[ce]);
        }, ee = function L(x, S, _) {
          var T;
          if (!x)
            return zt;
          if (typeof x == "string") {
            var R = x.toLowerCase();
            Jt[R] && (T = R), S && (Jt[R] = S, T = R);
            var U = x.split("-");
            if (!T && U.length > 1)
              return L(U[0]);
          } else {
            var K = x.name;
            Jt[K] = x, T = K;
          }
          return !_ && T && (zt = T), T || !_ && zt;
        }, at = function(L, x) {
          if (ht(L))
            return L.clone();
          var S = typeof x == "object" ? x : {};
          return S.date = L, S.args = arguments, new vt(S);
        }, Q = He;
        Q.l = ee, Q.i = ht, Q.w = function(L, x) {
          return at(L, { locale: x.$L, utc: x.$u, x: x.$x, $offset: x.$offset });
        };
        var vt = function() {
          function L(S) {
            this.$L = ee(S.locale, null, true), this.parse(S), this.$x = this.$x || S.x || {}, this[ce] = true;
          }
          var x = L.prototype;
          return x.parse = function(S) {
            this.$d = function(_) {
              var { date: T, utc: R } = _;
              if (T === null)
                return new Date(NaN);
              if (Q.u(T))
                return new Date;
              if (T instanceof Date)
                return new Date(T);
              if (typeof T == "string" && !/Z$/i.test(T)) {
                var U = T.match(Dt);
                if (U) {
                  var K = U[2] - 1 || 0, lt = (U[7] || "0").substring(0, 3);
                  return R ? new Date(Date.UTC(U[1], K, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, lt)) : new Date(U[1], K, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, lt);
                }
              }
              return new Date(T);
            }(S), this.init();
          }, x.init = function() {
            var S = this.$d;
            this.$y = S.getFullYear(), this.$M = S.getMonth(), this.$D = S.getDate(), this.$W = S.getDay(), this.$H = S.getHours(), this.$m = S.getMinutes(), this.$s = S.getSeconds(), this.$ms = S.getMilliseconds();
          }, x.$utils = function() {
            return Q;
          }, x.isValid = function() {
            return this.$d.toString() !== rt;
          }, x.isSame = function(S, _) {
            var T = at(S);
            return this.startOf(_) <= T && T <= this.endOf(_);
          }, x.isAfter = function(S, _) {
            return at(S) < this.startOf(_);
          }, x.isBefore = function(S, _) {
            return this.endOf(_) < at(S);
          }, x.$g = function(S, _, T) {
            return Q.u(S) ? this[_] : this.set(T, S);
          }, x.unix = function() {
            return Math.floor(this.valueOf() / 1000);
          }, x.valueOf = function() {
            return this.$d.getTime();
          }, x.startOf = function(S, _) {
            var T = this, R = !!Q.u(_) || _, U = Q.p(S), K = function(Kt, kt) {
              var Ut = Q.w(T.$u ? Date.UTC(T.$y, kt, Kt) : new Date(T.$y, kt, Kt), T);
              return R ? Ut : Ut.endOf(C);
            }, lt = function(Kt, kt) {
              return Q.w(T.toDate()[Kt].apply(T.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(kt)), T);
            }, wt = this.$W, dt = this.$M, Ot = this.$D, ie = "set" + (this.$u ? "UTC" : "");
            switch (U) {
              case N:
                return R ? K(1, 0) : K(31, 11);
              case I:
                return R ? K(1, dt) : K(0, dt + 1);
              case b:
                var ft = this.$locale().weekStart || 0, ut = (wt < ft ? wt + 7 : wt) - ft;
                return K(R ? Ot - ut : Ot + (6 - ut), dt);
              case C:
              case Y:
                return lt(ie + "Hours", 0);
              case w:
                return lt(ie + "Minutes", 1);
              case k:
                return lt(ie + "Seconds", 2);
              case p:
                return lt(ie + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, x.endOf = function(S) {
            return this.startOf(S, false);
          }, x.$set = function(S, _) {
            var T, R = Q.p(S), U = "set" + (this.$u ? "UTC" : ""), K = (T = {}, T[C] = U + "Date", T[Y] = U + "Date", T[I] = U + "Month", T[N] = U + "FullYear", T[w] = U + "Hours", T[k] = U + "Minutes", T[p] = U + "Seconds", T[m] = U + "Milliseconds", T)[R], lt = R === C ? this.$D + (_ - this.$W) : _;
            if (R === I || R === N) {
              var wt = this.clone().set(Y, 1);
              wt.$d[K](lt), wt.init(), this.$d = wt.set(Y, Math.min(this.$D, wt.daysInMonth())).$d;
            } else
              K && this.$d[K](lt);
            return this.init(), this;
          }, x.set = function(S, _) {
            return this.clone().$set(S, _);
          }, x.get = function(S) {
            return this[Q.p(S)]();
          }, x.add = function(S, _) {
            var T, R = this;
            S = Number(S);
            var U = Q.p(_), K = function(dt) {
              var Ot = at(R);
              return Q.w(Ot.date(Ot.date() + Math.round(dt * S)), R);
            };
            if (U === I)
              return this.set(I, this.$M + S);
            if (U === N)
              return this.set(N, this.$y + S);
            if (U === C)
              return K(1);
            if (U === b)
              return K(7);
            var lt = (T = {}, T[k] = h, T[w] = c, T[p] = a, T)[U] || 1, wt = this.$d.getTime() + S * lt;
            return Q.w(wt, this);
          }, x.subtract = function(S, _) {
            return this.add(-1 * S, _);
          }, x.format = function(S) {
            var _ = this, T = this.$locale();
            if (!this.isValid())
              return T.invalidDate || rt;
            var R = S || "YYYY-MM-DDTHH:mm:ssZ", U = Q.z(this), K = this.$H, lt = this.$m, wt = this.$M, dt = T.weekdays, Ot = T.months, ie = T.meridiem, ft = function(kt, Ut, ve, ni) {
              return kt && (kt[Ut] || kt(_, R)) || ve[Ut].slice(0, ni);
            }, ut = function(kt) {
              return Q.s(K % 12 || 12, kt, "0");
            }, Kt = ie || function(kt, Ut, ve) {
              var ni = kt < 12 ? "AM" : "PM";
              return ve ? ni.toLowerCase() : ni;
            };
            return R.replace(te, function(kt, Ut) {
              return Ut || function(ve) {
                switch (ve) {
                  case "YY":
                    return String(_.$y).slice(-2);
                  case "YYYY":
                    return Q.s(_.$y, 4, "0");
                  case "M":
                    return wt + 1;
                  case "MM":
                    return Q.s(wt + 1, 2, "0");
                  case "MMM":
                    return ft(T.monthsShort, wt, Ot, 3);
                  case "MMMM":
                    return ft(Ot, wt);
                  case "D":
                    return _.$D;
                  case "DD":
                    return Q.s(_.$D, 2, "0");
                  case "d":
                    return String(_.$W);
                  case "dd":
                    return ft(T.weekdaysMin, _.$W, dt, 2);
                  case "ddd":
                    return ft(T.weekdaysShort, _.$W, dt, 3);
                  case "dddd":
                    return dt[_.$W];
                  case "H":
                    return String(K);
                  case "HH":
                    return Q.s(K, 2, "0");
                  case "h":
                    return ut(1);
                  case "hh":
                    return ut(2);
                  case "a":
                    return Kt(K, lt, true);
                  case "A":
                    return Kt(K, lt, false);
                  case "m":
                    return String(lt);
                  case "mm":
                    return Q.s(lt, 2, "0");
                  case "s":
                    return String(_.$s);
                  case "ss":
                    return Q.s(_.$s, 2, "0");
                  case "SSS":
                    return Q.s(_.$ms, 3, "0");
                  case "Z":
                    return U;
                }
                return null;
              }(kt) || U.replace(":", "");
            });
          }, x.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, x.diff = function(S, _, T) {
            var R, U = this, K = Q.p(_), lt = at(S), wt = (lt.utcOffset() - this.utcOffset()) * h, dt = this - lt, Ot = function() {
              return Q.m(U, lt);
            };
            switch (K) {
              case N:
                R = Ot() / 12;
                break;
              case I:
                R = Ot();
                break;
              case P:
                R = Ot() / 3;
                break;
              case b:
                R = (dt - wt) / 604800000;
                break;
              case C:
                R = (dt - wt) / 86400000;
                break;
              case w:
                R = dt / c;
                break;
              case k:
                R = dt / h;
                break;
              case p:
                R = dt / a;
                break;
              default:
                R = dt;
            }
            return T ? R : Q.a(R);
          }, x.daysInMonth = function() {
            return this.endOf(I).$D;
          }, x.$locale = function() {
            return Jt[this.$L];
          }, x.locale = function(S, _) {
            if (!S)
              return this.$L;
            var T = this.clone(), R = ee(S, _, true);
            return R && (T.$L = R), T;
          }, x.clone = function() {
            return Q.w(this.$d, this);
          }, x.toDate = function() {
            return new Date(this.valueOf());
          }, x.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, x.toISOString = function() {
            return this.$d.toISOString();
          }, x.toString = function() {
            return this.$d.toUTCString();
          }, L;
        }(), si = vt.prototype;
        return at.prototype = si, [["$ms", m], ["$s", p], ["$m", k], ["$H", w], ["$W", C], ["$M", I], ["$y", N], ["$D", Y]].forEach(function(L) {
          si[L[1]] = function(x) {
            return this.$g(x, L[0], L[1]);
          };
        }), at.extend = function(L, x) {
          return L.$i || (L(x, vt, at), L.$i = true), at;
        }, at.locale = ee, at.isDayjs = ht, at.unix = function(L) {
          return at(1000 * L);
        }, at.en = Jt[zt], at.Ls = Jt, at.p = {}, at;
      });
    })(Or);
    var Nl = Or.exports;
    const Ll = Cr(Nl);
    var { defineProperty: Bl, getOwnPropertyDescriptor: jl } = Object, Vt = (f, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? jl(n, a) : n, m = f.length - 1, p;m >= 0; m--)
        (p = f[m]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && Bl(n, a, c), c;
    };
    E.InputDate = class extends Rt {
      constructor() {
        super(...arguments), this["cls-default-element"] = "button", this["input-event"] = "uk-input-date:input", this["display-format"] = "MMMM DD, YYYY", this["with-time"] = false, this["require-time"] = false, this.drop = "mode: click", this.icon = "", this.$cls = { button: "", icon: "", dropdown: "uk-datepicker-dropdown", calendar: "", time: "" }, this._icon = false;
      }
      initializeValue() {
        if (this.value)
          try {
            const n = Me(this.value), a = n.getHours(), h = n.getMinutes();
            this.$date = n.toISOString().slice(0, 10), this.$time = `${a.toString().padStart(2, "0")}:${h.toString().padStart(2, "0")}`;
          } catch (n) {
            console.error(n);
          }
      }
      get $value() {
        return this.$d && this.$t ? `${this.$d}T${this.$t}` : this.$d ? this.$d : "";
      }
      get $text() {
        if (this.$value !== "")
          return Ll(this.$value).format(this["display-format"]);
        if (this.placeholder)
          return this.placeholder;
        let n = "Select a date";
        return this["with-time"] === true && (n += " and time"), n;
      }
      connectedCallback() {
        if (super.connectedCallback(), this.hasAttribute("icon")) {
          const n = this.getAttribute("icon");
          n === "" ? this._icon = true : this._icon = n;
        }
      }
      firstUpdated(n) {
        var a, h;
        (a = this.renderRoot.querySelector("uk-calendar")) == null || a.addEventListener("uk-calendar:change", (c) => {
          this.$d = c.detail.value;
        }), this["with-time"] === true && ((h = this.renderRoot.querySelector("uk-input-time")) == null || h.addEventListener("uk-input-time:input", (c) => {
          this.$t = c.detail.value;
        }));
      }
      render() {
        return z`
      <div class="uk-datepicker">
        <div class="uk-position-relative">
          <button
            class="${this.$cls.button}"
            type="button"
            .disabled=${this.disabled}
          >
            ${this.$text}
            ${this._icon === true ? z`
                  <span class="${this.$cls.icon}" data-uk-calendar></span>
                ` : this.icon !== "" ? z`
                    <uk-icon
                      class="${this.$cls.icon}"
                      icon="${this.icon}"
                    ></uk-icon>
                  ` : ""}
          </button>
          <div
            class="uk-drop ${this.$cls.dropdown}"
            data-uk-dropdown="${this.drop}"
          >
            <uk-calendar
              .cls-custom="${this.$cls.calendar}"
              .starts-with="${this["starts-with"]}"
              .disabled-dates="${this["disabled-dates"]}"
              .marked-dates="${this["marked-dates"]}"
              .i18n="${JSON.stringify(this.$i18n)}"
              .view-date="${this["view-date"]}"
              .min="${this.min}"
              .max="${this.max}"
              .value="${this.$date}"
              .today="${this.today}"
              .jumpable="${this.jumpable}"
            ></uk-calendar>

            ${this["with-time"] ? z`
                  <div class="uk-datepicker-time">
                    <uk-input-time
                      now
                      .cls-custom="${this.$cls.time}"
                      .required=${this["require-time"]}
                      .i18n="${JSON.stringify(this.$i18n)}"
                      .value="${this.$time}"
                    ></uk-input-time>
                  </div>
                ` : ""}
          </div>
        </div>

        ${this.renderHidden()}
      </div>
    `;
      }
    }, Vt([j({ type: String })], E.InputDate.prototype, "display-format", 2), Vt([j({ type: Boolean })], E.InputDate.prototype, "with-time", 2), Vt([j({ type: Boolean })], E.InputDate.prototype, "require-time", 2), Vt([j({ type: String })], E.InputDate.prototype, "drop", 2), Vt([j({ type: String })], E.InputDate.prototype, "icon", 2), Vt([X()], E.InputDate.prototype, "$date", 2), Vt([X()], E.InputDate.prototype, "$time", 2), Vt([X()], E.InputDate.prototype, "$d", 2), Vt([X()], E.InputDate.prototype, "$t", 2), Vt([X()], E.InputDate.prototype, "$cls", 2), E.InputDate = Vt([oe("uk-input-date")], E.InputDate);
    var { defineProperty: Rl, getOwnPropertyDescriptor: zl } = Object, Qt = (f, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? zl(n, a) : n, m = f.length - 1, p;m >= 0; m--)
        (p = f[m]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && Rl(n, a, c), c;
    };
    return E.InputTime = class extends ae {
      constructor() {
        super(...arguments), this["cls-default-element"] = "input", this["input-event"] = "uk-input-time:input", this.autofocus = false, this.now = false, this.min = "", this.max = "", this.$i18n = { am: "am", pm: "pm" }, this.$cls = { input: "" }, this.$min = 0, this.$meridiem = "am";
      }
      initializeValue() {
        if (this.value)
          try {
            const n = gl(this.value), [a, h] = n.split(":").map(Number);
            this.$hour = a % 12 || 12, this.$min = h, this.$meridiem = a < 12 ? "am" : "pm";
          } catch (n) {
            console.error(n);
          }
        else if (this.now === true) {
          const n = new Date;
          this.$hour = n.getHours() % 12 || 12, this.$min = n.getMinutes(), this.$meridiem = n.getHours() < 12 ? "am" : "pm";
        }
      }
      get $HH() {
        return this.$hour ? this.$hour.toString().padStart(2, "0") : "00";
      }
      get $MM() {
        return this.$min >= 0 ? this.$min.toString().padStart(2, "0") : "00";
      }
      get $value() {
        let n = "";
        if (this.$hour) {
          let a = this.$hour;
          this.$meridiem === "pm" ? a = this.$hour === 12 ? 12 : this.$hour + 12 : a = this.$hour === 12 ? 0 : this.$hour, n = `${a.toString().padStart(2, "0")}:${this.$min.toString().padStart(2, "0")}`;
        }
        return n;
      }
      get $text() {
        return "";
      }
      createRenderRoot() {
        return this;
      }
      updated(n) {
        (n.has("$hour") || n.has("$min") || n.has("$meridiem")) && this.emit();
      }
      renderInput(n) {
        const { min: a, max: h, state: c, key: m } = n;
        let p;
        switch (c) {
          case "$hour":
            p = this.$hour !== undefined ? this.$hour.toString().padStart(2, "0") : "";
            break;
          case "$min":
            p = this.$hour === undefined ? "" : this.$min > 0 ? this.$min.toString().padStart(2, "0") : "00";
            break;
        }
        return z`
      <input
        data-key="${m}"
        class="uk-input ${this.$cls.input}"
        type="number"
        min="${a}"
        max="${h}"
        step="1"
        placeholder="${c === "$hour" ? "09" : "00"}"
        maxlength="2"
        value="${p}"
        .autofocus="${c === "$hour" && this.autofocus}"
        .disabled="${this.disabled || c !== "$hour" && this.$hour === undefined}"
        @keydown="${(k) => {
          switch (c) {
            case "$min":
              switch (k.key) {
                case "ArrowDown":
                  this.$min === 0 && k.preventDefault();
                  break;
              }
          }
        }}"
        @input="${(k) => {
          const w = k.target, C = w.value.replace(/[^0-9]/g, "").substring(0, 2), b = parseInt(C);
          switch (c) {
            case "$hour":
              b <= 12 && (this.$hour = b);
              break;
            case "$min":
              b <= 59 && (this.$min = b);
              break;
          }
          w.value = C;
        }}"
        @blur="${(k) => {
          const w = k.target, C = parseInt(w.value);
          switch (c) {
            case "$hour":
              if (w.value === "") {
                this.required === false ? this.$hour = undefined : w.value = this.$HH;
                return;
              }
              C > 12 ? (this.$hour = 12, w.value = "12") : w.value = this.$HH;
              break;
            case "$min":
              C > 59 && (this.$min = 59), w.value = this.$MM;
              break;
          }
        }}"
      />
    `;
      }
      render() {
        return z`
      <div class="uk-input-time">
        ${this.renderInput({ min: 1, max: 12, state: "$hour", key: "$HH" })}
        <span>&colon;</span>
        ${this.renderInput({ min: 0, max: 59, state: "$min", key: "$MM" })}
        <button
          data-key="meridiem"
          class="uk-input-fake ${this.$cls.input}"
          @click="${(n) => {
          n.preventDefault(), this.$meridiem = this.$meridiem === "am" ? "pm" : "am";
        }}"
          @keydown="${(n) => {
          (n.key === "ArrowUp" || n.key === "ArrowDown") && (n.preventDefault(), this.$meridiem = this.$meridiem === "am" ? "pm" : "am");
        }}"
          type="button"
          .disabled="${this.disabled || this.$hour === undefined}"
        >
          ${this.$locales[this.$meridiem]}
        </button>
        ${this.renderHidden()}
      </div>
    `;
      }
    }, Qt([j({ type: Boolean })], E.InputTime.prototype, "autofocus", 2), Qt([j({ type: Boolean })], E.InputTime.prototype, "now", 2), Qt([j({ type: String })], E.InputTime.prototype, "min", 2), Qt([j({ type: String })], E.InputTime.prototype, "max", 2), Qt([X()], E.InputTime.prototype, "$i18n", 2), Qt([X()], E.InputTime.prototype, "$cls", 2), Qt([X()], E.InputTime.prototype, "$hour", 2), Qt([X()], E.InputTime.prototype, "$min", 2), Qt([X()], E.InputTime.prototype, "$meridiem", 2), E.InputTime = Qt([oe("uk-input-time")], E.InputTime), window.Lit = el, window.LitDecorators = hl, window.LitRepeat = { repeat: Pe }, window.LitUnsafeHTML = { unsafeHTML: ml }, Object.defineProperty(E, Symbol.toStringTag, { value: "Module" }), E;
  }({});
});

// js/franken-ui.js
var import_core = __toESM(require_core_iife(), 1);

// node_modules/franken-ui/dist/js/icon.iife.js
var FRANKENUIICON = function(s, e, tm) {
  const $0 = (h, t, d = []) => {
    const c = document.createElementNS("http://www.w3.org/2000/svg", h);
    return Object.keys(t).forEach((p) => {
      c.setAttribute(p, String(t[p]));
    }), d.length && d.forEach((p) => {
      const M = $0(...p);
      c.appendChild(M);
    }), c;
  };
  var K0 = ([h, t, d]) => $0(h, t, d);
  const hm = (h) => Array.from(h.attributes).reduce((t, d) => (t[d.name] = d.value, t), {}), dm = (h) => typeof h == "string" ? h : !h || !h.class ? "" : h.class && typeof h.class == "string" ? h.class.split(" ") : h.class && Array.isArray(h.class) ? h.class : "", pm = (h) => h.flatMap(dm).map((d) => d.trim()).filter(Boolean).filter((d, c, p) => p.indexOf(d) === c).join(" "), cm = (h) => h.replace(/(\w)(\w*)(_|-|\s*)/g, (t, d, c) => d.toUpperCase() + c.toLowerCase()), J0 = (h, { nameAttr: t, icons: d, attrs: c }) => {
    var am;
    const p = h.getAttribute(t);
    if (p == null)
      return;
    const M = cm(p), r = d[M];
    if (!r)
      return console.warn(`${h.outerHTML} icon name was not found in the provided icons object.`);
    const v = hm(h), [om, nm, im] = r, _y = { ...nm, "data-lucide": p, ...c, ...v }, Yy = pm(["lucide", `lucide-${p}`, v, c]);
    Yy && Object.assign(_y, { class: Yy });
    const lm = K0([om, _y, im]);
    return (am = h.parentNode) == null ? undefined : am.replaceChild(lm, h);
  };
  const a = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };
  const j0 = ["svg", a, [["path", { d: "M3.5 13h6" }], ["path", { d: "m2 16 4.5-9 4.5 9" }], ["path", { d: "M18 7v9" }], ["path", { d: "m14 12 4 4 4-4" }]]];
  const Q0 = ["svg", a, [["path", { d: "M3.5 13h6" }], ["path", { d: "m2 16 4.5-9 4.5 9" }], ["path", { d: "M18 16V7" }], ["path", { d: "m14 11 4-4 4 4" }]]];
  const _0 = ["svg", a, [["path", { d: "M21 14h-5" }], ["path", { d: "M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" }], ["path", { d: "M4.5 13h6" }], ["path", { d: "m3 16 4.5-9 4.5 9" }]]];
  const Y0 = ["svg", a, [["circle", { cx: "16", cy: "4", r: "1" }], ["path", { d: "m18 19 1-7-6 1" }], ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5" }], ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6" }], ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6" }]]];
  const aa = ["svg", a, [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" }]]];
  const ta = ["svg", a, [["path", { d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }], ["path", { d: "M6 8h12" }], ["path", { d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" }], ["path", { d: "M6.6 15.6A2 2 0 1 0 10 17v-5" }]]];
  const ha = ["svg", a, [["path", { d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }], ["path", { d: "m12 15 5 6H7Z" }]]];
  const x = ["svg", a, [["circle", { cx: "12", cy: "13", r: "8" }], ["path", { d: "M5 3 2 6" }], ["path", { d: "m22 6-3-3" }], ["path", { d: "M6.38 18.7 4 21" }], ["path", { d: "M17.64 18.67 20 21" }], ["path", { d: "m9 13 2 2 4-4" }]]];
  const y = ["svg", a, [["circle", { cx: "12", cy: "13", r: "8" }], ["path", { d: "M5 3 2 6" }], ["path", { d: "m22 6-3-3" }], ["path", { d: "M6.38 18.7 4 21" }], ["path", { d: "M17.64 18.67 20 21" }], ["path", { d: "M9 13h6" }]]];
  const da = ["svg", a, [["path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26" }], ["path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15" }], ["path", { d: "m22 6-3-3" }], ["path", { d: "M6.26 18.67 4 21" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M4 4 2 6" }]]];
  const m = ["svg", a, [["circle", { cx: "12", cy: "13", r: "8" }], ["path", { d: "M5 3 2 6" }], ["path", { d: "m22 6-3-3" }], ["path", { d: "M6.38 18.7 4 21" }], ["path", { d: "M17.64 18.67 20 21" }], ["path", { d: "M12 10v6" }], ["path", { d: "M9 13h6" }]]];
  const pa = ["svg", a, [["circle", { cx: "12", cy: "13", r: "8" }], ["path", { d: "M12 9v4l2 2" }], ["path", { d: "M5 3 2 6" }], ["path", { d: "m22 6-3-3" }], ["path", { d: "M6.38 18.7 4 21" }], ["path", { d: "M17.64 18.67 20 21" }]]];
  const ca = ["svg", a, [["path", { d: "M11 21c0-2.5 2-2.5 2-5" }], ["path", { d: "M16 21c0-2.5 2-2.5 2-5" }], ["path", { d: "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" }], ["path", { d: "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" }], ["path", { d: "M6 21c0-2.5 2-2.5 2-5" }]]];
  const Ma = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["polyline", { points: "11 3 11 11 14 8 17 11 17 3" }]]];
  const sa = ["svg", a, [["path", { d: "M2 12h20" }], ["path", { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" }], ["path", { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" }], ["path", { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" }]]];
  const ea = ["svg", a, [["path", { d: "M12 2v20" }], ["path", { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" }], ["path", { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" }], ["path", { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" }], ["path", { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" }]]];
  const ra = ["svg", a, [["path", { d: "M17 12H7" }], ["path", { d: "M19 18H5" }], ["path", { d: "M21 6H3" }]]];
  const va = ["svg", a, [["rect", { width: "6", height: "16", x: "4", y: "2", rx: "2" }], ["rect", { width: "6", height: "9", x: "14", y: "9", rx: "2" }], ["path", { d: "M22 22H2" }]]];
  const oa = ["svg", a, [["rect", { width: "16", height: "6", x: "2", y: "4", rx: "2" }], ["rect", { width: "9", height: "6", x: "9", y: "14", rx: "2" }], ["path", { d: "M22 22V2" }]]];
  const na = ["svg", a, [["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }], ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }], ["path", { d: "M17 22v-5" }], ["path", { d: "M17 7V2" }], ["path", { d: "M7 22v-3" }], ["path", { d: "M7 5V2" }]]];
  const ia = ["svg", a, [["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }], ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }], ["path", { d: "M10 2v20" }], ["path", { d: "M20 2v20" }]]];
  const la = ["svg", a, [["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }], ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }], ["path", { d: "M4 2v20" }], ["path", { d: "M14 2v20" }]]];
  const ga = ["svg", a, [["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2" }], ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }], ["path", { d: "M12 2v20" }]]];
  const xa = ["svg", a, [["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2" }], ["rect", { width: "6", height: "10", x: "12", y: "7", rx: "2" }], ["path", { d: "M22 2v20" }]]];
  const ya = ["svg", a, [["rect", { width: "6", height: "14", x: "6", y: "5", rx: "2" }], ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }], ["path", { d: "M2 2v20" }]]];
  const ma = ["svg", a, [["rect", { width: "6", height: "10", x: "9", y: "7", rx: "2" }], ["path", { d: "M4 22V2" }], ["path", { d: "M20 22V2" }]]];
  const Ha = ["svg", a, [["rect", { width: "6", height: "14", x: "3", y: "5", rx: "2" }], ["rect", { width: "6", height: "10", x: "15", y: "7", rx: "2" }], ["path", { d: "M3 2v20" }], ["path", { d: "M21 2v20" }]]];
  const Va = ["svg", a, [["path", { d: "M3 12h18" }], ["path", { d: "M3 18h18" }], ["path", { d: "M3 6h18" }]]];
  const Ca = ["svg", a, [["path", { d: "M15 12H3" }], ["path", { d: "M17 18H3" }], ["path", { d: "M21 6H3" }]]];
  const ua = ["svg", a, [["path", { d: "M21 12H9" }], ["path", { d: "M21 18H7" }], ["path", { d: "M21 6H3" }]]];
  const wa = ["svg", a, [["rect", { width: "6", height: "16", x: "4", y: "6", rx: "2" }], ["rect", { width: "6", height: "9", x: "14", y: "6", rx: "2" }], ["path", { d: "M22 2H2" }]]];
  const Aa = ["svg", a, [["rect", { width: "9", height: "6", x: "6", y: "14", rx: "2" }], ["rect", { width: "16", height: "6", x: "6", y: "4", rx: "2" }], ["path", { d: "M2 2v20" }]]];
  const La = ["svg", a, [["path", { d: "M22 17h-3" }], ["path", { d: "M22 7h-5" }], ["path", { d: "M5 17H2" }], ["path", { d: "M7 7H2" }], ["rect", { x: "5", y: "14", width: "14", height: "6", rx: "2" }], ["rect", { x: "7", y: "4", width: "10", height: "6", rx: "2" }]]];
  const Sa = ["svg", a, [["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }], ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }], ["path", { d: "M2 20h20" }], ["path", { d: "M2 10h20" }]]];
  const fa = ["svg", a, [["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }], ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }], ["path", { d: "M2 14h20" }], ["path", { d: "M2 4h20" }]]];
  const Pa = ["svg", a, [["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2" }], ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2" }], ["path", { d: "M2 12h20" }]]];
  const Za = ["svg", a, [["rect", { width: "14", height: "6", x: "5", y: "12", rx: "2" }], ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2" }], ["path", { d: "M2 22h20" }]]];
  const za = ["svg", a, [["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2" }], ["rect", { width: "10", height: "6", x: "7", y: "6", rx: "2" }], ["path", { d: "M2 2h20" }]]];
  const ka = ["svg", a, [["rect", { width: "10", height: "6", x: "7", y: "9", rx: "2" }], ["path", { d: "M22 20H2" }], ["path", { d: "M22 4H2" }]]];
  const Ba = ["svg", a, [["rect", { width: "14", height: "6", x: "5", y: "15", rx: "2" }], ["rect", { width: "10", height: "6", x: "7", y: "3", rx: "2" }], ["path", { d: "M2 21h20" }], ["path", { d: "M2 3h20" }]]];
  const Da = ["svg", a, [["path", { d: "M10 10H6" }], ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }], ["path", { d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" }], ["path", { d: "M8 8v4" }], ["path", { d: "M9 18h6" }], ["circle", { cx: "17", cy: "18", r: "2" }], ["circle", { cx: "7", cy: "18", r: "2" }]]];
  const Fa = ["svg", a, [["path", { d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13" }], ["path", { d: "M16 12h3" }]]];
  const qa = ["svg", a, [["path", { d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }], ["path", { d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }]]];
  const Ra = ["svg", a, [["path", { d: "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" }], ["path", { d: "M10 5H8a2 2 0 0 0 0 4h.68" }], ["path", { d: "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" }], ["path", { d: "M14 5h2a2 2 0 0 1 0 4h-.68" }], ["path", { d: "M18 22H6" }], ["path", { d: "M9 2h6" }]]];
  const ba = ["svg", a, [["path", { d: "M12 22V8" }], ["path", { d: "M5 12H2a10 10 0 0 0 20 0h-3" }], ["circle", { cx: "12", cy: "5", r: "3" }]]];
  const Ta = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2" }], ["path", { d: "M7.5 8 10 9" }], ["path", { d: "m14 9 2.5-1" }], ["path", { d: "M9 10h.01" }], ["path", { d: "M15 10h.01" }]]];
  const Ua = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M8 15h8" }], ["path", { d: "M8 9h2" }], ["path", { d: "M14 9h2" }]]];
  const Oa = ["svg", a, [["path", { d: "M2 12 7 2" }], ["path", { d: "m7 12 5-10" }], ["path", { d: "m12 12 5-10" }], ["path", { d: "m17 12 5-10" }], ["path", { d: "M4.5 7h15" }], ["path", { d: "M12 16v6" }]]];
  const Ia = ["svg", a, [["path", { d: "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" }], ["path", { d: "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" }], ["path", { d: "M9 12v5" }], ["path", { d: "M15 12v5" }], ["path", { d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" }]]];
  const Ea = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m14.31 8 5.74 9.94" }], ["path", { d: "M9.69 8h11.48" }], ["path", { d: "m7.38 12 5.74-9.94" }], ["path", { d: "M9.69 16 3.95 6.06" }], ["path", { d: "M14.31 16H2.83" }], ["path", { d: "m16.62 12-5.74 9.94" }]]];
  const Ga = ["svg", a, [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["path", { d: "M6 8h.01" }], ["path", { d: "M10 8h.01" }], ["path", { d: "M14 8h.01" }]]];
  const Wa = ["svg", a, [["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }], ["path", { d: "M10 4v4" }], ["path", { d: "M2 8h20" }], ["path", { d: "M6 4v4" }]]];
  const Xa = ["svg", a, [["path", { d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" }], ["path", { d: "M10 2c1 .5 2 2 2 5" }]]];
  const Na = ["svg", a, [["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }], ["path", { d: "M4 8v11a2 2 0 0 0 2 2h2" }], ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-2" }], ["path", { d: "m9 15 3-3 3 3" }], ["path", { d: "M12 12v9" }]]];
  const Ka = ["svg", a, [["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }], ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }], ["path", { d: "m9.5 17 5-5" }], ["path", { d: "m9.5 12 5 5" }]]];
  const $a = ["svg", a, [["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }], ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }], ["path", { d: "M10 12h4" }]]];
  const Ja = ["svg", a, [["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" }], ["path", { d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" }], ["path", { d: "M5 18v2" }], ["path", { d: "M19 18v2" }]]];
  const ja = ["svg", a, [["path", { d: "M15 5H9" }], ["path", { d: "M15 9v3h4l-7 7-7-7h4V9z" }]]];
  const Qa = ["svg", a, [["path", { d: "M15 6v6h4l-7 7-7-7h4V6h6z" }]]];
  const _a = ["svg", a, [["path", { d: "M19 15V9" }], ["path", { d: "M15 15h-3v4l-7-7 7-7v4h3v6z" }]]];
  const Ya = ["svg", a, [["path", { d: "M18 15h-6v4l-7-7 7-7v4h6v6z" }]]];
  const at = ["svg", a, [["path", { d: "M5 9v6" }], ["path", { d: "M9 9h3V5l7 7-7 7v-4H9V9z" }]]];
  const tt = ["svg", a, [["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z" }]]];
  const ht = ["svg", a, [["path", { d: "M9 19h6" }], ["path", { d: "M9 15v-3H5l7-7 7 7h-4v3H9z" }]]];
  const dt = ["svg", a, [["path", { d: "M9 18v-6H5l7-7 7 7h-4v6H9z" }]]];
  const pt = ["svg", a, [["path", { d: "m3 16 4 4 4-4" }], ["path", { d: "M7 20V4" }], ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }], ["path", { d: "M17 20v-6h-2" }], ["path", { d: "M15 20h4" }]]];
  const ct = ["svg", a, [["path", { d: "m3 16 4 4 4-4" }], ["path", { d: "M7 20V4" }], ["path", { d: "M17 10V4h-2" }], ["path", { d: "M15 10h4" }], ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }]]];
  const H = ["svg", a, [["path", { d: "m3 16 4 4 4-4" }], ["path", { d: "M7 20V4" }], ["path", { d: "M20 8h-5" }], ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }], ["path", { d: "M15 14h5l-5 6h5" }]]];
  const Mt = ["svg", a, [["path", { d: "M19 3H5" }], ["path", { d: "M12 21V7" }], ["path", { d: "m6 15 6 6 6-6" }]]];
  const st = ["svg", a, [["path", { d: "M17 7 7 17" }], ["path", { d: "M17 17H7V7" }]]];
  const et = ["svg", a, [["path", { d: "m3 16 4 4 4-4" }], ["path", { d: "M7 20V4" }], ["path", { d: "M11 4h4" }], ["path", { d: "M11 8h7" }], ["path", { d: "M11 12h10" }]]];
  const rt = ["svg", a, [["path", { d: "m7 7 10 10" }], ["path", { d: "M17 7v10H7" }]]];
  const vt = ["svg", a, [["path", { d: "M12 2v14" }], ["path", { d: "m19 9-7 7-7-7" }], ["circle", { cx: "12", cy: "21", r: "1" }]]];
  const ot = ["svg", a, [["path", { d: "M12 17V3" }], ["path", { d: "m6 11 6 6 6-6" }], ["path", { d: "M19 21H5" }]]];
  const nt = ["svg", a, [["path", { d: "m3 16 4 4 4-4" }], ["path", { d: "M7 20V4" }], ["path", { d: "m21 8-4-4-4 4" }], ["path", { d: "M17 4v16" }]]];
  const V = ["svg", a, [["path", { d: "m3 16 4 4 4-4" }], ["path", { d: "M7 20V4" }], ["path", { d: "M11 4h10" }], ["path", { d: "M11 8h7" }], ["path", { d: "M11 12h4" }]]];
  const C = ["svg", a, [["path", { d: "m3 16 4 4 4-4" }], ["path", { d: "M7 4v16" }], ["path", { d: "M15 4h5l-5 6h5" }], ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }], ["path", { d: "M20 18h-5" }]]];
  const it = ["svg", a, [["path", { d: "M12 5v14" }], ["path", { d: "m19 12-7 7-7-7" }]]];
  const lt = ["svg", a, [["path", { d: "m9 6-6 6 6 6" }], ["path", { d: "M3 12h14" }], ["path", { d: "M21 19V5" }]]];
  const gt = ["svg", a, [["path", { d: "M8 3 4 7l4 4" }], ["path", { d: "M4 7h16" }], ["path", { d: "m16 21 4-4-4-4" }], ["path", { d: "M20 17H4" }]]];
  const xt = ["svg", a, [["path", { d: "M3 19V5" }], ["path", { d: "m13 6-6 6 6 6" }], ["path", { d: "M7 12h14" }]]];
  const yt = ["svg", a, [["path", { d: "m12 19-7-7 7-7" }], ["path", { d: "M19 12H5" }]]];
  const mt = ["svg", a, [["path", { d: "M3 5v14" }], ["path", { d: "M21 12H7" }], ["path", { d: "m15 18 6-6-6-6" }]]];
  const Ht = ["svg", a, [["path", { d: "m16 3 4 4-4 4" }], ["path", { d: "M20 7H4" }], ["path", { d: "m8 21-4-4 4-4" }], ["path", { d: "M4 17h16" }]]];
  const Vt = ["svg", a, [["path", { d: "M17 12H3" }], ["path", { d: "m11 18 6-6-6-6" }], ["path", { d: "M21 5v14" }]]];
  const Ct = ["svg", a, [["path", { d: "M5 12h14" }], ["path", { d: "m12 5 7 7-7 7" }]]];
  const ut = ["svg", a, [["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }], ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }], ["path", { d: "M17 20v-6h-2" }], ["path", { d: "M15 20h4" }]]];
  const wt = ["svg", a, [["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }], ["path", { d: "M17 10V4h-2" }], ["path", { d: "M15 10h4" }], ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }]]];
  const u = ["svg", a, [["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }], ["path", { d: "M20 8h-5" }], ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }], ["path", { d: "M15 14h5l-5 6h5" }]]];
  const At = ["svg", a, [["path", { d: "m21 16-4 4-4-4" }], ["path", { d: "M17 20V4" }], ["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }]]];
  const Lt = ["svg", a, [["path", { d: "m5 9 7-7 7 7" }], ["path", { d: "M12 16V2" }], ["circle", { cx: "12", cy: "21", r: "1" }]]];
  const St = ["svg", a, [["path", { d: "m18 9-6-6-6 6" }], ["path", { d: "M12 3v14" }], ["path", { d: "M5 21h14" }]]];
  const ft = ["svg", a, [["path", { d: "M7 17V7h10" }], ["path", { d: "M17 17 7 7" }]]];
  const w = ["svg", a, [["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }], ["path", { d: "M11 12h4" }], ["path", { d: "M11 16h7" }], ["path", { d: "M11 20h10" }]]];
  const Pt = ["svg", a, [["path", { d: "M7 7h10v10" }], ["path", { d: "M7 17 17 7" }]]];
  const Zt = ["svg", a, [["path", { d: "M5 3h14" }], ["path", { d: "m18 13-6-6-6 6" }], ["path", { d: "M12 7v14" }]]];
  const zt = ["svg", a, [["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }], ["path", { d: "M11 12h10" }], ["path", { d: "M11 16h7" }], ["path", { d: "M11 20h4" }]]];
  const A = ["svg", a, [["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }], ["path", { d: "M15 4h5l-5 6h5" }], ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }], ["path", { d: "M20 18h-5" }]]];
  const kt = ["svg", a, [["path", { d: "m5 12 7-7 7 7" }], ["path", { d: "M12 19V5" }]]];
  const Bt = ["svg", a, [["path", { d: "m4 6 3-3 3 3" }], ["path", { d: "M7 17V3" }], ["path", { d: "m14 6 3-3 3 3" }], ["path", { d: "M17 17V3" }], ["path", { d: "M4 21h16" }]]];
  const Dt = ["svg", a, [["path", { d: "M12 6v12" }], ["path", { d: "M17.196 9 6.804 15" }], ["path", { d: "m6.804 9 10.392 6" }]]];
  const Ft = ["svg", a, [["circle", { cx: "12", cy: "12", r: "4" }], ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }]]];
  const qt = ["svg", a, [["circle", { cx: "12", cy: "12", r: "1" }], ["path", { d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" }], ["path", { d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" }]]];
  const Rt = ["svg", a, [["path", { d: "M2 10v3" }], ["path", { d: "M6 6v11" }], ["path", { d: "M10 3v18" }], ["path", { d: "M14 8v7" }], ["path", { d: "M18 5v13" }], ["path", { d: "M22 10v3" }]]];
  const bt = ["svg", a, [["path", { d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" }]]];
  const Tt = ["svg", a, [["path", { d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" }], ["circle", { cx: "12", cy: "8", r: "6" }]]];
  const Ut = ["svg", a, [["path", { d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" }], ["path", { d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z" }]]];
  const L = ["svg", a, [["path", { d: "M4 4v16h16" }], ["path", { d: "m4 20 7-7" }]]];
  const Ot = ["svg", a, [["path", { d: "M9 12h.01" }], ["path", { d: "M15 12h.01" }], ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }], ["path", { d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }]]];
  const It = ["svg", a, [["path", { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }], ["path", { d: "M8 10h8" }], ["path", { d: "M8 18h8" }], ["path", { d: "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" }], ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" }]]];
  const Et = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]]];
  const Gt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M12 7v10" }], ["path", { d: "M15.4 10a4 4 0 1 0 0 4" }]]];
  const S = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "m9 12 2 2 4-4" }]]];
  const Wt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }], ["path", { d: "M12 18V6" }]]];
  const Xt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M7 12h5" }], ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2" }]]];
  const Nt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }], ["line", { x1: "12", x2: "12.01", y1: "17", y2: "17" }]]];
  const Kt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M8 8h8" }], ["path", { d: "M8 12h8" }], ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8" }]]];
  const $t = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["line", { x1: "12", x2: "12", y1: "16", y2: "12" }], ["line", { x1: "12", x2: "12.01", y1: "8", y2: "8" }]]];
  const Jt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "m9 8 3 3v7" }], ["path", { d: "m12 11 3-3" }], ["path", { d: "M9 12h6" }], ["path", { d: "M9 16h6" }]]];
  const jt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]]];
  const Qt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "m15 9-6 6" }], ["path", { d: "M9 9h.01" }], ["path", { d: "M15 15h.01" }]]];
  const _t = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "16" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]]];
  const Yt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M8 12h4" }], ["path", { d: "M10 16V9.5a2.5 2.5 0 0 1 5 0" }], ["path", { d: "M8 16h7" }]]];
  const ah = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M9 16h5" }], ["path", { d: "M9 12h5a2 2 0 1 0 0-4h-3v9" }]]];
  const th = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M11 17V8h4" }], ["path", { d: "M11 12h3" }], ["path", { d: "M9 16h4" }]]];
  const hh = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }], ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }]]];
  const dh = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }]]];
  const ph = ["svg", a, [["path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" }], ["path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" }], ["rect", { width: "13", height: "8", x: "8", y: "6", rx: "1" }], ["circle", { cx: "18", cy: "20", r: "2" }], ["circle", { cx: "9", cy: "20", r: "2" }]]];
  const ch = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m4.9 4.9 14.2 14.2" }]]];
  const Mh = ["svg", a, [["path", { d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" }], ["path", { d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z" }]]];
  const sh = ["svg", a, [["path", { d: "M10 10.01h.01" }], ["path", { d: "M10 14.01h.01" }], ["path", { d: "M14 10.01h.01" }], ["path", { d: "M14 14.01h.01" }], ["path", { d: "M18 6v11.5" }], ["path", { d: "M6 6v12" }], ["rect", { x: "2", y: "6", width: "20", height: "12", rx: "2" }]]];
  const eh = ["svg", a, [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }], ["circle", { cx: "12", cy: "12", r: "2" }], ["path", { d: "M6 12h.01M18 12h.01" }]]];
  const rh = ["svg", a, [["path", { d: "M3 5v14" }], ["path", { d: "M8 5v14" }], ["path", { d: "M12 5v14" }], ["path", { d: "M17 5v14" }], ["path", { d: "M21 5v14" }]]];
  const vh = ["svg", a, [["path", { d: "M4 20h16" }], ["path", { d: "m6 16 6-12 6 12" }], ["path", { d: "M8 12h8" }]]];
  const oh = ["svg", a, [["path", { d: "M10 4 8 6" }], ["path", { d: "M17 19v2" }], ["path", { d: "M2 12h20" }], ["path", { d: "M7 19v2" }], ["path", { d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" }]]];
  const nh = ["svg", a, [["path", { d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" }], ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" }], ["path", { d: "m11 7-3 5h4l-3 5" }], ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }]]];
  const ih = ["svg", a, [["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }], ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }], ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "13" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "13" }]]];
  const lh = ["svg", a, [["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }], ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }], ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }]]];
  const gh = ["svg", a, [["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }], ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }], ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "13" }]]];
  const xh = ["svg", a, [["path", { d: "M10 17h.01" }], ["path", { d: "M10 7v6" }], ["path", { d: "M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" }], ["path", { d: "M22 11v2" }], ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }]]];
  const yh = ["svg", a, [["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }], ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }]]];
  const mh = ["svg", a, [["path", { d: "M4.5 3h15" }], ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" }], ["path", { d: "M6 14h12" }]]];
  const Hh = ["svg", a, [["path", { d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1" }], ["path", { d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" }], ["path", { d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const Vh = ["svg", a, [["path", { d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z" }], ["path", { d: "M5.341 10.62a4 4 0 1 0 5.279-5.28" }]]];
  const Ch = ["svg", a, [["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }], ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }], ["path", { d: "M12 4v6" }], ["path", { d: "M2 18h20" }]]];
  const uh = ["svg", a, [["path", { d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" }], ["path", { d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" }], ["path", { d: "M3 18h18" }]]];
  const wh = ["svg", a, [["path", { d: "M2 4v16" }], ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10" }], ["path", { d: "M2 17h20" }], ["path", { d: "M6 8v9" }]]];
  const Ah = ["svg", a, [["circle", { cx: "12.5", cy: "8.5", r: "2.5" }], ["path", { d: "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z" }], ["path", { d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" }]]];
  const Lh = ["svg", a, [["path", { d: "M13 13v5" }], ["path", { d: "M17 11.47V8" }], ["path", { d: "M17 11h1a3 3 0 0 1 2.745 4.211" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" }], ["path", { d: "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268" }], ["path", { d: "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12" }], ["path", { d: "M9 14.6V18" }]]];
  const Sh = ["svg", a, [["path", { d: "M17 11h1a3 3 0 0 1 0 6h-1" }], ["path", { d: "M9 12v6" }], ["path", { d: "M13 12v6" }], ["path", { d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" }], ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" }]]];
  const fh = ["svg", a, [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }], ["path", { d: "M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665" }], ["circle", { cx: "18", cy: "8", r: "3" }]]];
  const Ph = ["svg", a, [["path", { d: "M18.8 4A6.3 8.7 0 0 1 20 9" }], ["path", { d: "M9 9h.01" }], ["circle", { cx: "9", cy: "9", r: "7" }], ["rect", { width: "10", height: "6", x: "4", y: "16", rx: "2" }], ["path", { d: "M14 19c3 0 4.6-1.6 4.6-1.6" }], ["circle", { cx: "20", cy: "16", r: "2" }]]];
  const Zh = ["svg", a, [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }], ["path", { d: "M15 8h6" }], ["path", { d: "M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12" }]]];
  const zh = ["svg", a, [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }], ["path", { d: "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" }]]];
  const kh = ["svg", a, [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }], ["path", { d: "M15 8h6" }], ["path", { d: "M18 5v6" }], ["path", { d: "M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332" }]]];
  const Bh = ["svg", a, [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }], ["path", { d: "M22 8c0-2.3-.8-4.3-2-6" }], ["path", { d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" }], ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8" }]]];
  const Dh = ["svg", a, [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }], ["path", { d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" }]]];
  const f = ["svg", a, [["rect", { width: "13", height: "7", x: "3", y: "3", rx: "1" }], ["path", { d: "m22 15-3-3 3-3" }], ["rect", { width: "13", height: "7", x: "3", y: "14", rx: "1" }]]];
  const P = ["svg", a, [["rect", { width: "13", height: "7", x: "8", y: "3", rx: "1" }], ["path", { d: "m2 9 3 3-3 3" }], ["rect", { width: "13", height: "7", x: "8", y: "14", rx: "1" }]]];
  const Fh = ["svg", a, [["rect", { width: "7", height: "13", x: "3", y: "3", rx: "1" }], ["path", { d: "m9 22 3-3 3 3" }], ["rect", { width: "7", height: "13", x: "14", y: "3", rx: "1" }]]];
  const qh = ["svg", a, [["rect", { width: "7", height: "13", x: "3", y: "8", rx: "1" }], ["path", { d: "m15 2-3 3-3-3" }], ["rect", { width: "7", height: "13", x: "14", y: "8", rx: "1" }]]];
  const Rh = ["svg", a, [["path", { d: "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" }], ["path", { d: "M15 14a5 5 0 0 0-7.584 2" }], ["path", { d: "M9.964 6.825C8.019 7.977 9.5 13 8 15" }]]];
  const bh = ["svg", a, [["circle", { cx: "18.5", cy: "17.5", r: "3.5" }], ["circle", { cx: "5.5", cy: "17.5", r: "3.5" }], ["circle", { cx: "15", cy: "5", r: "1" }], ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2" }]]];
  const Th = ["svg", a, [["rect", { x: "14", y: "14", width: "4", height: "6", rx: "2" }], ["rect", { x: "6", y: "4", width: "4", height: "6", rx: "2" }], ["path", { d: "M6 20h4" }], ["path", { d: "M14 10h4" }], ["path", { d: "M6 14h2v6" }], ["path", { d: "M14 4h2v6" }]]];
  const Uh = ["svg", a, [["path", { d: "M10 10h4" }], ["path", { d: "M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" }], ["path", { d: "M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" }], ["path", { d: "M 22 16 L 2 16" }], ["path", { d: "M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" }], ["path", { d: "M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" }]]];
  const Oh = ["svg", a, [["circle", { cx: "12", cy: "11.9", r: "2" }], ["path", { d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" }], ["path", { d: "m8.9 10.1 1.4.8" }], ["path", { d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" }], ["path", { d: "m15.1 10.1-1.4.8" }], ["path", { d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" }], ["path", { d: "M12 13.9v1.6" }], ["path", { d: "M13.5 5.4c-1-.2-2-.2-3 0" }], ["path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5" }], ["path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5" }]]];
  const Ih = ["svg", a, [["path", { d: "M16 7h.01" }], ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" }], ["path", { d: "m20 7 2 .5-2 .5" }], ["path", { d: "M10 18v3" }], ["path", { d: "M14 17.75V21" }], ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61" }]]];
  const Eh = ["svg", a, [["path", { d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" }]]];
  const Gh = ["svg", a, [["circle", { cx: "9", cy: "9", r: "7" }], ["circle", { cx: "15", cy: "15", r: "7" }]]];
  const Wh = ["svg", a, [["path", { d: "M3 3h18" }], ["path", { d: "M20 7H8" }], ["path", { d: "M20 11H8" }], ["path", { d: "M10 19h10" }], ["path", { d: "M8 15h12" }], ["path", { d: "M4 3v14" }], ["circle", { cx: "4", cy: "19", r: "2" }]]];
  const Xh = ["svg", a, [["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }], ["path", { d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" }]]];
  const Nh = ["svg", a, [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }], ["line", { x1: "18", x2: "21", y1: "12", y2: "12" }], ["line", { x1: "3", x2: "6", y1: "12", y2: "12" }]]];
  const Kh = ["svg", a, [["path", { d: "m17 17-5 5V12l-5 5" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M14.5 9.5 17 7l-5-5v4.5" }]]];
  const $h = ["svg", a, [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }], ["path", { d: "M20.83 14.83a4 4 0 0 0 0-5.66" }], ["path", { d: "M18 12h.01" }]]];
  const Jh = ["svg", a, [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }]]];
  const jh = ["svg", a, [["path", { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" }]]];
  const Qh = ["svg", a, [["path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }], ["circle", { cx: "12", cy: "12", r: "4" }]]];
  const _h = ["svg", a, [["circle", { cx: "11", cy: "13", r: "9" }], ["path", { d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" }], ["path", { d: "m22 2-1.5 1.5" }]]];
  const Yh = ["svg", a, [["path", { d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" }]]];
  const a4 = ["svg", a, [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "m8 13 4-7 4 7" }], ["path", { d: "M9.1 11h5.7" }]]];
  const t4 = ["svg", a, [["path", { d: "M12 6v7" }], ["path", { d: "M16 8v3" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M8 8v3" }]]];
  const h4 = ["svg", a, [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "m9 9.5 2 2 4-4" }]]];
  const d4 = ["svg", a, [["path", { d: "M2 16V4a2 2 0 0 1 2-2h11" }], ["path", { d: "M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12" }], ["path", { d: "M5 14H4a2 2 0 1 0 0 4h1" }]]];
  const Z = ["svg", a, [["path", { d: "M12 17h1.5" }], ["path", { d: "M12 22h1.5" }], ["path", { d: "M12 2h1.5" }], ["path", { d: "M17.5 22H19a1 1 0 0 0 1-1" }], ["path", { d: "M17.5 2H19a1 1 0 0 1 1 1v1.5" }], ["path", { d: "M20 14v3h-2.5" }], ["path", { d: "M20 8.5V10" }], ["path", { d: "M4 10V8.5" }], ["path", { d: "M4 19.5V14" }], ["path", { d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H8" }], ["path", { d: "M8 22H6.5a1 1 0 0 1 0-5H8" }]]];
  const p4 = ["svg", a, [["path", { d: "M12 13V7" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "m9 10 3 3 3-3" }]]];
  const c4 = ["svg", a, [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M8 12v-2a4 4 0 0 1 8 0v2" }], ["circle", { cx: "15", cy: "12", r: "1" }], ["circle", { cx: "9", cy: "12", r: "1" }]]];
  const M4 = ["svg", a, [["path", { d: "M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }]]];
  const s4 = ["svg", a, [["path", { d: "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["circle", { cx: "10", cy: "8", r: "2" }]]];
  const e4 = ["svg", a, [["path", { d: "m19 3 1 1" }], ["path", { d: "m20 2-4.5 4.5" }], ["path", { d: "M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14" }], ["circle", { cx: "14", cy: "8", r: "2" }]]];
  const r4 = ["svg", a, [["path", { d: "M18 6V4a2 2 0 1 0-4 0v2" }], ["path", { d: "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" }], ["rect", { x: "12", y: "6", width: "8", height: "5", rx: "1" }]]];
  const v4 = ["svg", a, [["path", { d: "M10 2v8l3-3 3 3V2" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }]]];
  const o4 = ["svg", a, [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M9 10h6" }]]];
  const n4 = ["svg", a, [["path", { d: "M12 21V7" }], ["path", { d: "m16 12 2 2 4-4" }], ["path", { d: "M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" }]]];
  const i4 = ["svg", a, [["path", { d: "M12 7v14" }], ["path", { d: "M16 12h2" }], ["path", { d: "M16 8h2" }], ["path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" }], ["path", { d: "M6 12h2" }], ["path", { d: "M6 8h2" }]]];
  const l4 = ["svg", a, [["path", { d: "M12 7v14" }], ["path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" }]]];
  const g4 = ["svg", a, [["path", { d: "M12 7v6" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M9 10h6" }]]];
  const x4 = ["svg", a, [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M8 11h8" }], ["path", { d: "M8 7h6" }]]];
  const y4 = ["svg", a, [["path", { d: "M10 13h4" }], ["path", { d: "M12 6v7" }], ["path", { d: "M16 8V6H8v2" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }]]];
  const m4 = ["svg", a, [["path", { d: "M12 13V7" }], ["path", { d: "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" }], ["path", { d: "m9 10 3-3 3 3" }], ["path", { d: "m9 5 3-3 3 3" }]]];
  const H4 = ["svg", a, [["path", { d: "M12 13V7" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "m9 10 3-3 3 3" }]]];
  const V4 = ["svg", a, [["path", { d: "M15 13a3 3 0 1 0-6 0" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["circle", { cx: "12", cy: "8", r: "2" }]]];
  const C4 = ["svg", a, [["path", { d: "m14.5 7-5 5" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "m9.5 7 5 5" }]]];
  const u4 = ["svg", a, [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }]]];
  const w4 = ["svg", a, [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }], ["path", { d: "m9 10 2 2 4-4" }]]];
  const A4 = ["svg", a, [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }], ["line", { x1: "15", x2: "9", y1: "10", y2: "10" }]]];
  const L4 = ["svg", a, [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }], ["line", { x1: "12", x2: "12", y1: "7", y2: "13" }], ["line", { x1: "15", x2: "9", y1: "10", y2: "10" }]]];
  const S4 = ["svg", a, [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }], ["path", { d: "m14.5 7.5-5 5" }], ["path", { d: "m9.5 7.5 5 5" }]]];
  const f4 = ["svg", a, [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }]]];
  const P4 = ["svg", a, [["path", { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }], ["path", { d: "M8 8v1" }], ["path", { d: "M12 8v1" }], ["path", { d: "M16 8v1" }], ["rect", { width: "20", height: "12", x: "2", y: "9", rx: "2" }], ["circle", { cx: "8", cy: "15", r: "2" }], ["circle", { cx: "16", cy: "15", r: "2" }]]];
  const Z4 = ["svg", a, [["path", { d: "M12 6V2H8" }], ["path", { d: "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" }], ["path", { d: "M2 12h2" }], ["path", { d: "M9 11v2" }], ["path", { d: "M15 11v2" }], ["path", { d: "M20 12h2" }]]];
  const z4 = ["svg", a, [["path", { d: "M13.67 8H18a2 2 0 0 1 2 2v4.33" }], ["path", { d: "M2 14h2" }], ["path", { d: "M20 14h2" }], ["path", { d: "M22 22 2 2" }], ["path", { d: "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" }], ["path", { d: "M9 13v2" }], ["path", { d: "M9.67 4H12v2.33" }]]];
  const k4 = ["svg", a, [["path", { d: "M12 8V4H8" }], ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }], ["path", { d: "M2 14h2" }], ["path", { d: "M20 14h2" }], ["path", { d: "M15 13v2" }], ["path", { d: "M9 13v2" }]]];
  const B4 = ["svg", a, [["path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }], ["path", { d: "m3.3 7 8.7 5 8.7-5" }], ["path", { d: "M12 22V12" }]]];
  const D4 = ["svg", a, [["path", { d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" }], ["path", { d: "m7 16.5-4.74-2.85" }], ["path", { d: "m7 16.5 5-3" }], ["path", { d: "M7 16.5v5.17" }], ["path", { d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" }], ["path", { d: "m17 16.5-5-3" }], ["path", { d: "m17 16.5 4.74-2.85" }], ["path", { d: "M17 16.5v5.17" }], ["path", { d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" }], ["path", { d: "M12 8 7.26 5.15" }], ["path", { d: "m12 8 4.74-2.85" }], ["path", { d: "M12 13.5V8" }]]];
  const z = ["svg", a, [["path", { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" }], ["path", { d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" }]]];
  const F4 = ["svg", a, [["path", { d: "M16 3h3v18h-3" }], ["path", { d: "M8 21H5V3h3" }]]];
  const q4 = ["svg", a, [["path", { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }], ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4" }], ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5" }], ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396" }], ["path", { d: "M6 18a4 4 0 0 1-1.967-.516" }], ["path", { d: "M12 13h4" }], ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1" }], ["path", { d: "M12 8h8" }], ["path", { d: "M16 8V5a2 2 0 0 1 2-2" }], ["circle", { cx: "16", cy: "13", r: ".5" }], ["circle", { cx: "18", cy: "3", r: ".5" }], ["circle", { cx: "20", cy: "21", r: ".5" }], ["circle", { cx: "20", cy: "8", r: ".5" }]]];
  const R4 = ["svg", a, [["path", { d: "M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5" }], ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375" }], ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5" }], ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396" }], ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396" }], ["path", { d: "M6 18a4 4 0 0 1-1.967-.516" }], ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18" }], ["circle", { cx: "12", cy: "12", r: "3" }], ["path", { d: "m15.7 10.4-.9.4" }], ["path", { d: "m9.2 13.2-.9.4" }], ["path", { d: "m13.6 15.7-.4-.9" }], ["path", { d: "m10.8 9.2-.4-.9" }], ["path", { d: "m15.7 13.5-.9-.4" }], ["path", { d: "m9.2 10.9-.9-.4" }], ["path", { d: "m10.5 15.7.4-.9" }], ["path", { d: "m13.1 9.2.4-.9" }]]];
  const b4 = ["svg", a, [["path", { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }], ["path", { d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" }], ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" }], ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375" }], ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5" }], ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396" }], ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396" }], ["path", { d: "M6 18a4 4 0 0 1-1.967-.516" }], ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18" }]]];
  const T4 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M12 9v6" }], ["path", { d: "M16 15v6" }], ["path", { d: "M16 3v6" }], ["path", { d: "M3 15h18" }], ["path", { d: "M3 9h18" }], ["path", { d: "M8 15v6" }], ["path", { d: "M8 3v6" }]]];
  const U4 = ["svg", a, [["path", { d: "M12 12h.01" }], ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }], ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]]];
  const O4 = ["svg", a, [["path", { d: "M10 20v2" }], ["path", { d: "M14 20v2" }], ["path", { d: "M18 20v2" }], ["path", { d: "M21 20H3" }], ["path", { d: "M6 20v2" }], ["path", { d: "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" }], ["rect", { x: "4", y: "6", width: "16", height: "10", rx: "2" }]]];
  const I4 = ["svg", a, [["path", { d: "M12 11v4" }], ["path", { d: "M14 13h-4" }], ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }], ["path", { d: "M18 6v14" }], ["path", { d: "M6 6v14" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]]];
  const E4 = ["svg", a, [["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]]];
  const G4 = ["svg", a, [["rect", { x: "8", y: "8", width: "8", height: "8", rx: "2" }], ["path", { d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" }], ["path", { d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" }]]];
  const W4 = ["svg", a, [["path", { d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" }], ["path", { d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" }]]];
  const X4 = ["svg", a, [["path", { d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" }], ["path", { d: "M14.12 3.88 16 2" }], ["path", { d: "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3" }], ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" }], ["path", { d: "M12 20v-8" }], ["path", { d: "M6 13H2" }], ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }]]];
  const N4 = ["svg", a, [["path", { d: "M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z" }], ["path", { d: "M14.12 3.88 16 2" }], ["path", { d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5" }], ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }], ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }], ["path", { d: "M6 13H2" }], ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5" }], ["path", { d: "m8 2 1.88 1.88" }], ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }]]];
  const K4 = ["svg", a, [["path", { d: "m8 2 1.88 1.88" }], ["path", { d: "M14.12 3.88 16 2" }], ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }], ["path", { d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" }], ["path", { d: "M12 20v-9" }], ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5" }], ["path", { d: "M6 13H2" }], ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }], ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }], ["path", { d: "M22 13h-4" }], ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4" }]]];
  const $4 = ["svg", a, [["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" }], ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }], ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" }], ["path", { d: "M10 6h4" }], ["path", { d: "M10 10h4" }], ["path", { d: "M10 14h4" }], ["path", { d: "M10 18h4" }]]];
  const J4 = ["svg", a, [["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }], ["path", { d: "M9 22v-4h6v4" }], ["path", { d: "M8 6h.01" }], ["path", { d: "M16 6h.01" }], ["path", { d: "M12 6h.01" }], ["path", { d: "M12 10h.01" }], ["path", { d: "M12 14h.01" }], ["path", { d: "M16 10h.01" }], ["path", { d: "M16 14h.01" }], ["path", { d: "M8 10h.01" }], ["path", { d: "M8 14h.01" }]]];
  const j4 = ["svg", a, [["path", { d: "M4 6 2 7" }], ["path", { d: "M10 6h4" }], ["path", { d: "m22 7-2-1" }], ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }], ["path", { d: "M4 11h16" }], ["path", { d: "M8 15h.01" }], ["path", { d: "M16 15h.01" }], ["path", { d: "M6 19v2" }], ["path", { d: "M18 21v-2" }]]];
  const Q4 = ["svg", a, [["path", { d: "M8 6v6" }], ["path", { d: "M15 6v6" }], ["path", { d: "M2 12h19.6" }], ["path", { d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" }], ["circle", { cx: "7", cy: "18", r: "2" }], ["path", { d: "M9 18h5" }], ["circle", { cx: "16", cy: "18", r: "2" }]]];
  const _4 = ["svg", a, [["path", { d: "M10 3h.01" }], ["path", { d: "M14 2h.01" }], ["path", { d: "m2 9 20-5" }], ["path", { d: "M12 12V6.5" }], ["rect", { width: "16", height: "10", x: "4", y: "12", rx: "3" }], ["path", { d: "M9 12v5" }], ["path", { d: "M15 12v5" }], ["path", { d: "M4 17h16" }]]];
  const Y4 = ["svg", a, [["path", { d: "M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" }], ["path", { d: "M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" }], ["path", { d: "M21 21v-2h-4" }], ["path", { d: "M3 5h4V3" }], ["path", { d: "M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" }]]];
  const a5 = ["svg", a, [["circle", { cx: "9", cy: "7", r: "2" }], ["path", { d: "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6" }], ["path", { d: "M16 13H3" }], ["path", { d: "M16 17H3" }]]];
  const t5 = ["svg", a, [["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" }], ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" }], ["path", { d: "M2 21h20" }], ["path", { d: "M7 8v3" }], ["path", { d: "M12 8v3" }], ["path", { d: "M17 8v3" }], ["path", { d: "M7 4h.01" }], ["path", { d: "M12 4h.01" }], ["path", { d: "M17 4h.01" }]]];
  const h5 = ["svg", a, [["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }], ["line", { x1: "8", x2: "16", y1: "6", y2: "6" }], ["line", { x1: "16", x2: "16", y1: "14", y2: "18" }], ["path", { d: "M16 10h.01" }], ["path", { d: "M12 10h.01" }], ["path", { d: "M8 10h.01" }], ["path", { d: "M12 14h.01" }], ["path", { d: "M8 14h.01" }], ["path", { d: "M12 18h.01" }], ["path", { d: "M8 18h.01" }]]];
  const d5 = ["svg", a, [["path", { d: "M11 14h1v4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M3 10h18" }], ["path", { d: "M8 2v4" }], ["rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }]]];
  const p5 = ["svg", a, [["path", { d: "m14 18 4 4 4-4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M18 14v8" }], ["path", { d: "M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343" }], ["path", { d: "M3 10h18" }], ["path", { d: "M8 2v4" }]]];
  const c5 = ["svg", a, [["path", { d: "m14 18 4-4 4 4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M18 22v-8" }], ["path", { d: "M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9" }], ["path", { d: "M3 10h18" }], ["path", { d: "M8 2v4" }]]];
  const M5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }], ["path", { d: "M3 10h18" }], ["path", { d: "m16 20 2 2 4-4" }]]];
  const s5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["path", { d: "M3 10h18" }], ["path", { d: "m9 16 2 2 4-4" }]]];
  const e5 = ["svg", a, [["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" }], ["path", { d: "M16 2v4" }], ["path", { d: "M8 2v4" }], ["path", { d: "M3 10h5" }], ["path", { d: "M17.5 17.5 16 16.3V14" }], ["circle", { cx: "16", cy: "16", r: "6" }]]];
  const r5 = ["svg", a, [["path", { d: "m15.2 16.9-.9-.4" }], ["path", { d: "m15.2 19.1-.9.4" }], ["path", { d: "M16 2v4" }], ["path", { d: "m16.9 15.2-.4-.9" }], ["path", { d: "m16.9 20.8-.4.9" }], ["path", { d: "m19.5 14.3-.4.9" }], ["path", { d: "m19.5 21.7-.4-.9" }], ["path", { d: "M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }], ["path", { d: "m21.7 16.5-.9.4" }], ["path", { d: "m21.7 19.5-.9-.4" }], ["path", { d: "M3 10h18" }], ["path", { d: "M8 2v4" }], ["circle", { cx: "18", cy: "18", r: "3" }]]];
  const v5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["path", { d: "M3 10h18" }], ["path", { d: "M8 14h.01" }], ["path", { d: "M12 14h.01" }], ["path", { d: "M16 14h.01" }], ["path", { d: "M8 18h.01" }], ["path", { d: "M12 18h.01" }], ["path", { d: "M16 18h.01" }]]];
  const o5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z" }], ["path", { d: "M3 10h18" }], ["path", { d: "M15 22v-4a2 2 0 0 1 2-2h4" }]]];
  const n5 = ["svg", a, [["path", { d: "M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" }], ["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z" }]]];
  const i5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["path", { d: "M3 10h18" }], ["path", { d: "M10 16h4" }]]];
  const l5 = ["svg", a, [["path", { d: "M16 19h6" }], ["path", { d: "M16 2v4" }], ["path", { d: "M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" }], ["path", { d: "M3 10h18" }], ["path", { d: "M8 2v4" }]]];
  const g5 = ["svg", a, [["path", { d: "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" }], ["path", { d: "M21 15.5V6a2 2 0 0 0-2-2H9.5" }], ["path", { d: "M16 2v4" }], ["path", { d: "M3 10h7" }], ["path", { d: "M21 10h-5.5" }], ["path", { d: "m2 2 20 20" }]]];
  const x5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["path", { d: "M3 10h18" }], ["path", { d: "M10 16h4" }], ["path", { d: "M12 14v4" }]]];
  const y5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }], ["path", { d: "M3 10h18" }], ["path", { d: "M16 19h6" }], ["path", { d: "M19 16v6" }]]];
  const m5 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["path", { d: "M16 2v4" }], ["path", { d: "M3 10h18" }], ["path", { d: "M8 2v4" }], ["path", { d: "M17 14h-6" }], ["path", { d: "M13 18H7" }], ["path", { d: "M7 14h.01" }], ["path", { d: "M17 18h.01" }]]];
  const H5 = ["svg", a, [["path", { d: "M16 2v4" }], ["path", { d: "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" }], ["path", { d: "m22 22-1.875-1.875" }], ["path", { d: "M3 10h18" }], ["path", { d: "M8 2v4" }], ["circle", { cx: "18", cy: "18", r: "3" }]]];
  const V5 = ["svg", a, [["path", { d: "M11 10v4h4" }], ["path", { d: "m11 14 1.535-1.605a5 5 0 0 1 8 1.5" }], ["path", { d: "M16 2v4" }], ["path", { d: "m21 18-1.535 1.605a5 5 0 0 1-8-1.5" }], ["path", { d: "M21 22v-4h-4" }], ["path", { d: "M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" }], ["path", { d: "M3 10h4" }], ["path", { d: "M8 2v4" }]]];
  const C5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }], ["path", { d: "M3 10h18" }], ["path", { d: "m17 22 5-5" }], ["path", { d: "m17 17 5 5" }]]];
  const u5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["path", { d: "M3 10h18" }], ["path", { d: "m14 14-4 4" }], ["path", { d: "m10 14 4 4" }]]];
  const w5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["path", { d: "M3 10h18" }]]];
  const A5 = ["svg", a, [["line", { x1: "2", x2: "22", y1: "2", y2: "22" }], ["path", { d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" }], ["path", { d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" }], ["path", { d: "M14.121 15.121A3 3 0 1 1 9.88 10.88" }]]];
  const L5 = ["svg", a, [["path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" }], ["circle", { cx: "12", cy: "13", r: "3" }]]];
  const S5 = ["svg", a, [["path", { d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" }], ["path", { d: "M17.75 7 15 2.1" }], ["path", { d: "M10.9 4.8 13 9" }], ["path", { d: "m7.9 9.7 2 4.4" }], ["path", { d: "M4.9 14.7 7 18.9" }]]];
  const f5 = ["svg", a, [["path", { d: "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1" }], ["path", { d: "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657" }], ["path", { d: "M14 16.5V14" }], ["path", { d: "M14 6.5v1.843" }], ["path", { d: "M10 10v7.5" }], ["path", { d: "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1" }], ["path", { d: "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const P5 = ["svg", a, [["path", { d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z" }], ["path", { d: "M14 6.5v10" }], ["path", { d: "M10 7.5v10" }], ["path", { d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1" }], ["path", { d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1" }]]];
  const Z5 = ["svg", a, [["path", { d: "M12 22v-4" }], ["path", { d: "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6" }]]];
  const z5 = ["svg", a, [["path", { d: "M10.5 5H19a2 2 0 0 1 2 2v8.5" }], ["path", { d: "M17 11h-.5" }], ["path", { d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M7 11h4" }], ["path", { d: "M7 15h2.5" }]]];
  const k = ["svg", a, [["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2" }], ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4" }]]];
  const k5 = ["svg", a, [["path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }], ["path", { d: "M7 14h.01" }], ["path", { d: "M17 14h.01" }], ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2" }], ["path", { d: "M5 18v2" }], ["path", { d: "M19 18v2" }]]];
  const B5 = ["svg", a, [["path", { d: "M10 2h4" }], ["path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }], ["path", { d: "M7 14h.01" }], ["path", { d: "M17 14h.01" }], ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2" }], ["path", { d: "M5 18v2" }], ["path", { d: "M19 18v2" }]]];
  const D5 = ["svg", a, [["path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }], ["circle", { cx: "7", cy: "17", r: "2" }], ["path", { d: "M9 17h6" }], ["circle", { cx: "17", cy: "17", r: "2" }]]];
  const F5 = ["svg", a, [["path", { d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" }], ["path", { d: "M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" }], ["path", { d: "M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9" }], ["circle", { cx: "8", cy: "19", r: "2" }]]];
  const q5 = ["svg", a, [["path", { d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" }], ["path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" }], ["path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" }]]];
  const R5 = ["svg", a, [["circle", { cx: "7", cy: "12", r: "3" }], ["path", { d: "M10 9v6" }], ["circle", { cx: "17", cy: "12", r: "3" }], ["path", { d: "M14 7v8" }]]];
  const b5 = ["svg", a, [["path", { d: "m3 15 4-8 4 8" }], ["path", { d: "M4 13h6" }], ["circle", { cx: "18", cy: "12", r: "3" }], ["path", { d: "M21 9v6" }]]];
  const T5 = ["svg", a, [["path", { d: "m3 15 4-8 4 8" }], ["path", { d: "M4 13h6" }], ["path", { d: "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4" }]]];
  const U5 = ["svg", a, [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["circle", { cx: "8", cy: "10", r: "2" }], ["path", { d: "M8 12h8" }], ["circle", { cx: "16", cy: "10", r: "2" }], ["path", { d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" }]]];
  const O5 = ["svg", a, [["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }], ["path", { d: "M2 12a9 9 0 0 1 8 8" }], ["path", { d: "M2 16a5 5 0 0 1 4 4" }], ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20" }]]];
  const I5 = ["svg", a, [["path", { d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" }], ["path", { d: "M18 11V4H6v7" }], ["path", { d: "M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4" }], ["path", { d: "M22 11V9" }], ["path", { d: "M2 11V9" }], ["path", { d: "M6 4V2" }], ["path", { d: "M18 4V2" }], ["path", { d: "M10 4V2" }], ["path", { d: "M14 4V2" }]]];
  const E5 = ["svg", a, [["path", { d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" }], ["path", { d: "M8 14v.5" }], ["path", { d: "M16 14v.5" }], ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z" }]]];
  const G5 = ["svg", a, [["path", { d: "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" }], ["path", { d: "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" }], ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" }], ["path", { d: "M2 21v-4" }], ["path", { d: "M7 9h.01" }]]];
  const B = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" }]]];
  const D = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1" }], ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1" }]]];
  const W5 = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M7 11h8" }], ["path", { d: "M7 16h3" }], ["path", { d: "M7 6h12" }]]];
  const X5 = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M7 11h8" }], ["path", { d: "M7 16h12" }], ["path", { d: "M7 6h3" }]]];
  const N5 = ["svg", a, [["path", { d: "M11 13v4" }], ["path", { d: "M15 5v4" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1" }], ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1" }]]];
  const F = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M7 16h8" }], ["path", { d: "M7 11h12" }], ["path", { d: "M7 6h3" }]]];
  const q = ["svg", a, [["path", { d: "M9 5v4" }], ["rect", { width: "4", height: "6", x: "7", y: "9", rx: "1" }], ["path", { d: "M9 15v2" }], ["path", { d: "M17 3v2" }], ["rect", { width: "4", height: "8", x: "15", y: "5", rx: "1" }], ["path", { d: "M17 13v3" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }]]];
  const R = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1" }], ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1" }]]];
  const K5 = ["svg", a, [["path", { d: "M13 17V9" }], ["path", { d: "M18 17v-3" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M8 17V5" }]]];
  const b = ["svg", a, [["path", { d: "M13 17V9" }], ["path", { d: "M18 17V5" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M8 17v-3" }]]];
  const $5 = ["svg", a, [["path", { d: "M11 13H7" }], ["path", { d: "M19 9h-4" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1" }], ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1" }]]];
  const T = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M18 17V9" }], ["path", { d: "M13 17V5" }], ["path", { d: "M8 17v-3" }]]];
  const J5 = ["svg", a, [["path", { d: "M10 6h8" }], ["path", { d: "M12 16h6" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M8 11h7" }]]];
  const U = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "m19 9-5 5-4-4-3 3" }]]];
  const j5 = ["svg", a, [["path", { d: "m13.11 7.664 1.78 2.672" }], ["path", { d: "m14.162 12.788-3.324 1.424" }], ["path", { d: "m20 4-6.06 1.515" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["circle", { cx: "12", cy: "6", r: "2" }], ["circle", { cx: "16", cy: "12", r: "2" }], ["circle", { cx: "9", cy: "15", r: "2" }]]];
  const Q5 = ["svg", a, [["path", { d: "M12 20V10" }], ["path", { d: "M18 20v-4" }], ["path", { d: "M6 20V4" }]]];
  const O = ["svg", a, [["line", { x1: "12", x2: "12", y1: "20", y2: "10" }], ["line", { x1: "18", x2: "18", y1: "20", y2: "4" }], ["line", { x1: "6", x2: "6", y1: "20", y2: "16" }]]];
  const I = ["svg", a, [["line", { x1: "18", x2: "18", y1: "20", y2: "10" }], ["line", { x1: "12", x2: "12", y1: "20", y2: "4" }], ["line", { x1: "6", x2: "6", y1: "20", y2: "14" }]]];
  const _5 = ["svg", a, [["path", { d: "M12 16v5" }], ["path", { d: "M16 14v7" }], ["path", { d: "M20 10v11" }], ["path", { d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" }], ["path", { d: "M4 18v3" }], ["path", { d: "M8 14v7" }]]];
  const E = ["svg", a, [["path", { d: "M8 6h10" }], ["path", { d: "M6 12h9" }], ["path", { d: "M11 18h7" }]]];
  const G = ["svg", a, [["path", { d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" }], ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }]]];
  const W = ["svg", a, [["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }], ["circle", { cx: "18.5", cy: "5.5", r: ".5", fill: "currentColor" }], ["circle", { cx: "11.5", cy: "11.5", r: ".5", fill: "currentColor" }], ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor" }], ["circle", { cx: "17.5", cy: "14.5", r: ".5", fill: "currentColor" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }]]];
  const Y5 = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" }]]];
  const a3 = ["svg", a, [["path", { d: "M18 6 7 17l-5-5" }], ["path", { d: "m22 10-7.5 7.5L13 16" }]]];
  const t3 = ["svg", a, [["path", { d: "M20 6 9 17l-5-5" }]]];
  const h3 = ["svg", a, [["path", { d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" }], ["path", { d: "M6 17h12" }]]];
  const d3 = ["svg", a, [["path", { d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }], ["path", { d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }], ["path", { d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" }], ["path", { d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" }]]];
  const p3 = ["svg", a, [["path", { d: "m6 9 6 6 6-6" }]]];
  const c3 = ["svg", a, [["path", { d: "m17 18-6-6 6-6" }], ["path", { d: "M7 6v12" }]]];
  const M3 = ["svg", a, [["path", { d: "m7 18 6-6-6-6" }], ["path", { d: "M17 6v12" }]]];
  const s3 = ["svg", a, [["path", { d: "m15 18-6-6 6-6" }]]];
  const e3 = ["svg", a, [["path", { d: "m9 18 6-6-6-6" }]]];
  const r3 = ["svg", a, [["path", { d: "m18 15-6-6-6 6" }]]];
  const v3 = ["svg", a, [["path", { d: "m7 20 5-5 5 5" }], ["path", { d: "m7 4 5 5 5-5" }]]];
  const o3 = ["svg", a, [["path", { d: "m7 6 5 5 5-5" }], ["path", { d: "m7 13 5 5 5-5" }]]];
  const n3 = ["svg", a, [["path", { d: "m18 8 4 4-4 4" }], ["path", { d: "m6 8-4 4 4 4" }], ["path", { d: "M8 12h.01" }], ["path", { d: "M12 12h.01" }], ["path", { d: "M16 12h.01" }]]];
  const i3 = ["svg", a, [["path", { d: "m9 7-5 5 5 5" }], ["path", { d: "m15 7 5 5-5 5" }]]];
  const l3 = ["svg", a, [["path", { d: "m11 17-5-5 5-5" }], ["path", { d: "m18 17-5-5 5-5" }]]];
  const g3 = ["svg", a, [["path", { d: "m20 17-5-5 5-5" }], ["path", { d: "m4 17 5-5-5-5" }]]];
  const x3 = ["svg", a, [["path", { d: "m6 17 5-5-5-5" }], ["path", { d: "m13 17 5-5-5-5" }]]];
  const y3 = ["svg", a, [["path", { d: "m7 15 5 5 5-5" }], ["path", { d: "m7 9 5-5 5 5" }]]];
  const m3 = ["svg", a, [["path", { d: "m17 11-5-5-5 5" }], ["path", { d: "m17 18-5-5-5 5" }]]];
  const H3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["circle", { cx: "12", cy: "12", r: "4" }], ["line", { x1: "21.17", x2: "12", y1: "8", y2: "8" }], ["line", { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14" }], ["line", { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14" }]]];
  const V3 = ["svg", a, [["path", { d: "M10 9h4" }], ["path", { d: "M12 7v5" }], ["path", { d: "M14 22v-4a2 2 0 0 0-4 0v4" }], ["path", { d: "M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22" }], ["path", { d: "m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7" }]]];
  const C3 = ["svg", a, [["path", { d: "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" }], ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" }], ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }], ["path", { d: "M7 12v4" }]]];
  const u3 = ["svg", a, [["path", { d: "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" }], ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }], ["path", { d: "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }], ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }], ["path", { d: "M7 12v4" }]]];
  const X = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]]];
  const N = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 8v8" }], ["path", { d: "m8 12 4 4 4-4" }]]];
  const K = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M16 12H8" }], ["path", { d: "m12 8-4 4 4 4" }]]];
  const $ = ["svg", a, [["path", { d: "M2 12a10 10 0 1 1 10 10" }], ["path", { d: "m2 22 10-10" }], ["path", { d: "M8 22H2v-6" }]]];
  const J = ["svg", a, [["path", { d: "M12 22a10 10 0 1 1 10-10" }], ["path", { d: "M22 22 12 12" }], ["path", { d: "M22 16v6h-6" }]]];
  const j = ["svg", a, [["path", { d: "M2 8V2h6" }], ["path", { d: "m2 2 10 10" }], ["path", { d: "M12 2A10 10 0 1 1 2 12" }]]];
  const Q = ["svg", a, [["path", { d: "M22 12A10 10 0 1 1 12 2" }], ["path", { d: "M22 2 12 12" }], ["path", { d: "M16 2h6v6" }]]];
  const _ = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M8 12h8" }], ["path", { d: "m12 16 4-4-4-4" }]]];
  const Y = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m16 12-4-4-4 4" }], ["path", { d: "M12 16V8" }]]];
  const a1 = ["svg", a, [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335" }], ["path", { d: "m9 11 3 3L22 4" }]]];
  const t1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m9 12 2 2 4-4" }]]];
  const h1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m16 10-4 4-4-4" }]]];
  const d1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m14 16-4-4 4-4" }]]];
  const p1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m10 8 4 4-4 4" }]]];
  const c1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m8 14 4-4 4 4" }]]];
  const w3 = ["svg", a, [["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0" }], ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0" }], ["path", { d: "M17.609 3.721a10 10 0 0 1 2.69 2.7" }], ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8" }], ["path", { d: "M20.279 17.609a10 10 0 0 1-2.7 2.69" }], ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8" }], ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69" }], ["path", { d: "M6.391 20.279a10 10 0 0 1-2.69-2.7" }]]];
  const M1 = ["svg", a, [["line", { x1: "8", x2: "16", y1: "12", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "16", y2: "16" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "8" }], ["circle", { cx: "12", cy: "12", r: "10" }]]];
  const A3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }], ["path", { d: "M12 18V6" }]]];
  const L3 = ["svg", a, [["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0" }], ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" }], ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8" }], ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" }], ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0" }], ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" }], ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8" }], ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" }], ["circle", { cx: "12", cy: "12", r: "1" }]]];
  const S3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["circle", { cx: "12", cy: "12", r: "1" }]]];
  const f3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M17 12h.01" }], ["path", { d: "M12 12h.01" }], ["path", { d: "M7 12h.01" }]]];
  const P3 = ["svg", a, [["path", { d: "M7 10h10" }], ["path", { d: "M7 14h10" }], ["circle", { cx: "12", cy: "12", r: "10" }]]];
  const Z3 = ["svg", a, [["path", { d: "M12 2a10 10 0 0 1 7.38 16.75" }], ["path", { d: "m16 12-4-4-4 4" }], ["path", { d: "M12 16V8" }], ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3" }], ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4" }], ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857" }], ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38" }]]];
  const z3 = ["svg", a, [["path", { d: "M12 2a10 10 0 0 1 7.38 16.75" }], ["path", { d: "M12 8v8" }], ["path", { d: "M16 12H8" }], ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3" }], ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4" }], ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857" }], ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38" }]]];
  const s1 = ["svg", a, [["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7" }], ["circle", { cx: "12", cy: "12", r: "2" }], ["path", { d: "M13.4 10.6 19 5" }]]];
  const e1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }], ["path", { d: "M12 17h.01" }]]];
  const r1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M8 12h8" }]]];
  const k3 = ["svg", a, [["path", { d: "m2 2 20 20" }], ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65" }], ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92" }]]];
  const v1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m5 5 14 14" }], ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2" }], ["path", { d: "M9 17v-2.34" }]]];
  const o1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9" }]]];
  const n1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["line", { x1: "10", x2: "10", y1: "15", y2: "9" }], ["line", { x1: "14", x2: "14", y1: "15", y2: "9" }]]];
  const i1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m15 9-6 6" }], ["path", { d: "M9 9h.01" }], ["path", { d: "M15 15h.01" }]]];
  const l1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polygon", { points: "10 8 16 12 10 16 10 8" }]]];
  const g1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M8 12h8" }], ["path", { d: "M12 8v8" }]]];
  const x1 = ["svg", a, [["path", { d: "M12 7v4" }], ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005" }], ["circle", { cx: "12", cy: "12", r: "10" }]]];
  const y1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M22 2 2 22" }]]];
  const B3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }]]];
  const m1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }]]];
  const H1 = ["svg", a, [["path", { d: "M18 20a6 6 0 0 0-12 0" }], ["circle", { cx: "12", cy: "10", r: "4" }], ["circle", { cx: "12", cy: "12", r: "10" }]]];
  const V1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" }]]];
  const C1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m15 9-6 6" }], ["path", { d: "m9 9 6 6" }]]];
  const D3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }]]];
  const F3 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3" }], ["circle", { cx: "9", cy: "9", r: "2" }], ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4" }], ["circle", { cx: "15", cy: "15", r: "2" }]]];
  const q3 = ["svg", a, [["path", { d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" }], ["path", { d: "M19.65 15.66A8 8 0 0 1 8.35 4.34" }], ["path", { d: "m14 10-5.5 5.5" }], ["path", { d: "M14 17.85V10H6.15" }]]];
  const R3 = ["svg", a, [["path", { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" }], ["path", { d: "m6.2 5.3 3.1 3.9" }], ["path", { d: "m12.4 3.4 3.1 4" }], ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" }]]];
  const b3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { d: "m9 14 2 2 4-4" }]]];
  const T3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4" }], ["path", { d: "M21 14H11" }], ["path", { d: "m15 10-4 4 4 4" }]]];
  const U3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { d: "M12 11h4" }], ["path", { d: "M12 16h4" }], ["path", { d: "M8 11h.01" }], ["path", { d: "M8 16h.01" }]]];
  const O3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { d: "M9 14h6" }]]];
  const I3 = ["svg", a, [["path", { d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z" }], ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10" }], ["path", { d: "m17 10 4 4-4 4" }]]];
  const u1 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1" }], ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" }], ["path", { d: "M16 4h2a2 2 0 0 1 1.73 1" }], ["path", { d: "M8 18h1" }], ["path", { d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }]]];
  const w1 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5" }], ["path", { d: "M4 13.5V6a2 2 0 0 1 2-2h2" }], ["path", { d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }]]];
  const E3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { d: "M9 14h6" }], ["path", { d: "M12 17v-6" }]]];
  const G3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { d: "M9 12v-1h6v1" }], ["path", { d: "M11 17h2" }], ["path", { d: "M12 11v6" }]]];
  const W3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { d: "m15 11-6 6" }], ["path", { d: "m9 11 6 6" }]]];
  const X3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }]]];
  const N3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 14.5 8" }]]];
  const K3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 8 10" }]]];
  const $3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 9.5 8" }]]];
  const J3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12" }]]];
  const j3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 16 10" }]]];
  const Q3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 16.5 12" }]]];
  const _3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 16 14" }]]];
  const Y3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 14.5 16" }]]];
  const ad = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 12 16.5" }]]];
  const td = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 9.5 16" }]]];
  const hd = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 8 14" }]]];
  const dd = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 7.5 12" }]]];
  const pd = ["svg", a, [["path", { d: "M12 6v6l4 2" }], ["path", { d: "M16 21.16a10 10 0 1 1 5-13.516" }], ["path", { d: "M20 11.5v6" }], ["path", { d: "M20 21.5h.01" }]]];
  const cd = ["svg", a, [["path", { d: "M12.338 21.994A10 10 0 1 1 21.925 13.227" }], ["path", { d: "M12 6v6l2 1" }], ["path", { d: "m14 18 4 4 4-4" }], ["path", { d: "M18 14v8" }]]];
  const Md = ["svg", a, [["path", { d: "M13.228 21.925A10 10 0 1 1 21.994 12.338" }], ["path", { d: "M12 6v6l1.562.781" }], ["path", { d: "m14 18 4-4 4 4" }], ["path", { d: "M18 22v-8" }]]];
  const sd = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 16 14" }]]];
  const ed = ["svg", a, [["path", { d: "M12 12v4" }], ["path", { d: "M12 20h.01" }], ["path", { d: "M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708" }]]];
  const rd = ["svg", a, [["circle", { cx: "12", cy: "17", r: "3" }], ["path", { d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }], ["path", { d: "m15.7 18.4-.9-.3" }], ["path", { d: "m9.2 15.9-.9-.3" }], ["path", { d: "m10.6 20.7.3-.9" }], ["path", { d: "m13.1 14.2.3-.9" }], ["path", { d: "m13.6 20.7-.4-1" }], ["path", { d: "m10.8 14.3-.4-1" }], ["path", { d: "m8.3 18.6 1-.4" }], ["path", { d: "m14.7 15.8 1-.4" }]]];
  const A1 = ["svg", a, [["path", { d: "M12 13v8l-4-4" }], ["path", { d: "m12 21 4-4" }], ["path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" }]]];
  const vd = ["svg", a, [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "M8 19v1" }], ["path", { d: "M8 14v1" }], ["path", { d: "M16 19v1" }], ["path", { d: "M16 14v1" }], ["path", { d: "M12 21v1" }], ["path", { d: "M12 16v1" }]]];
  const od = ["svg", a, [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "M16 17H7" }], ["path", { d: "M17 21H9" }]]];
  const nd = ["svg", a, [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "M16 14v2" }], ["path", { d: "M8 14v2" }], ["path", { d: "M16 20h.01" }], ["path", { d: "M8 20h.01" }], ["path", { d: "M12 16v2" }], ["path", { d: "M12 22h.01" }]]];
  const id = ["svg", a, [["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" }], ["path", { d: "m13 12-3 5h4l-3 5" }]]];
  const ld = ["svg", a, [["path", { d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197" }], ["path", { d: "M11 20v2" }], ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }], ["path", { d: "M7 19v2" }]]];
  const gd = ["svg", a, [["path", { d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197" }], ["path", { d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z" }]]];
  const xd = ["svg", a, [["path", { d: "m2 2 20 20" }], ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193" }], ["path", { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07" }]]];
  const yd = ["svg", a, [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "m9.2 22 3-7" }], ["path", { d: "m9 13-3 7" }], ["path", { d: "m17 13-3 7" }]]];
  const md = ["svg", a, [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "M16 14v6" }], ["path", { d: "M8 14v6" }], ["path", { d: "M12 16v6" }]]];
  const Hd = ["svg", a, [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "M8 15h.01" }], ["path", { d: "M8 19h.01" }], ["path", { d: "M12 17h.01" }], ["path", { d: "M12 21h.01" }], ["path", { d: "M16 15h.01" }], ["path", { d: "M16 19h.01" }]]];
  const Vd = ["svg", a, [["path", { d: "M12 2v2" }], ["path", { d: "m4.93 4.93 1.41 1.41" }], ["path", { d: "M20 12h2" }], ["path", { d: "m19.07 4.93-1.41 1.41" }], ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }], ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }], ["path", { d: "M11 20v2" }], ["path", { d: "M7 19v2" }]]];
  const Cd = ["svg", a, [["path", { d: "M12 2v2" }], ["path", { d: "m4.93 4.93 1.41 1.41" }], ["path", { d: "M20 12h2" }], ["path", { d: "m19.07 4.93-1.41 1.41" }], ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }], ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" }]]];
  const L1 = ["svg", a, [["path", { d: "M12 13v8" }], ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "m8 17 4-4 4 4" }]]];
  const ud = ["svg", a, [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }]]];
  const wd = ["svg", a, [["path", { d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }], ["path", { d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5" }]]];
  const Ad = ["svg", a, [["path", { d: "M16.17 7.83 2 22" }], ["path", { d: "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12" }], ["path", { d: "m7.83 7.83 8.34 8.34" }]]];
  const Ld = ["svg", a, [["path", { d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" }], ["path", { d: "M12 17.66L12 22" }]]];
  const S1 = ["svg", a, [["path", { d: "m18 16 4-4-4-4" }], ["path", { d: "m6 8-4 4 4 4" }], ["path", { d: "m14.5 4-5 16" }]]];
  const Sd = ["svg", a, [["polyline", { points: "16 18 22 12 16 6" }], ["polyline", { points: "8 6 2 12 8 18" }]]];
  const fd = ["svg", a, [["polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "15.5" }], ["polyline", { points: "22 8.5 12 15.5 2 8.5" }], ["polyline", { points: "2 15.5 12 8.5 22 15.5" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "8.5" }]]];
  const Pd = ["svg", a, [["path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }], ["polyline", { points: "7.5 4.21 12 6.81 16.5 4.21" }], ["polyline", { points: "7.5 19.79 7.5 14.6 3 12" }], ["polyline", { points: "21 12 16.5 14.6 16.5 19.79" }], ["polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }], ["line", { x1: "12", x2: "12", y1: "22.08", y2: "12" }]]];
  const Zd = ["svg", a, [["path", { d: "M10 2v2" }], ["path", { d: "M14 2v2" }], ["path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" }], ["path", { d: "M6 2v2" }]]];
  const zd = ["svg", a, [["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" }], ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }], ["path", { d: "M12 2v2" }], ["path", { d: "M12 22v-2" }], ["path", { d: "m17 20.66-1-1.73" }], ["path", { d: "M11 10.27 7 3.34" }], ["path", { d: "m20.66 17-1.73-1" }], ["path", { d: "m3.34 7 1.73 1" }], ["path", { d: "M14 12h8" }], ["path", { d: "M2 12h2" }], ["path", { d: "m20.66 7-1.73 1" }], ["path", { d: "m3.34 17 1.73-1" }], ["path", { d: "m17 3.34-1 1.73" }], ["path", { d: "m11 13.73-4 6.93" }]]];
  const kd = ["svg", a, [["circle", { cx: "8", cy: "8", r: "6" }], ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18" }], ["path", { d: "M7 6h1v4" }], ["path", { d: "m16.71 13.88.7.71-2.82 2.82" }]]];
  const f1 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M12 3v18" }]]];
  const P1 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 3v18" }], ["path", { d: "M15 3v18" }]]];
  const Bd = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M7.5 3v18" }], ["path", { d: "M12 3v18" }], ["path", { d: "M16.5 3v18" }]]];
  const Dd = ["svg", a, [["path", { d: "M10 18H5a3 3 0 0 1-3-3v-1" }], ["path", { d: "M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }], ["path", { d: "M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }], ["path", { d: "m7 21 3-3-3-3" }], ["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2" }], ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2" }]]];
  const Fd = ["svg", a, [["path", { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" }]]];
  const qd = ["svg", a, [["path", { d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" }], ["circle", { cx: "12", cy: "12", r: "10" }]]];
  const Rd = ["svg", a, [["path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }], ["path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }], ["path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }], ["path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }]]];
  const bd = ["svg", a, [["rect", { width: "14", height: "8", x: "5", y: "2", rx: "2" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }], ["path", { d: "M6 18h2" }], ["path", { d: "M12 18h6" }]]];
  const Td = ["svg", a, [["path", { d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" }], ["path", { d: "M20 16a8 8 0 1 0-16 0" }], ["path", { d: "M12 4v4" }], ["path", { d: "M10 4h4" }]]];
  const Ud = ["svg", a, [["path", { d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" }], ["ellipse", { cx: "12", cy: "19", rx: "9", ry: "3" }]]];
  const Od = ["svg", a, [["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1" }], ["path", { d: "M17 14v7" }], ["path", { d: "M7 14v7" }], ["path", { d: "M17 3v3" }], ["path", { d: "M7 3v3" }], ["path", { d: "M10 14 2.3 6.3" }], ["path", { d: "m14 6 7.7 7.7" }], ["path", { d: "m8 6 8 8" }]]];
  const Z1 = ["svg", a, [["path", { d: "M16 2v2" }], ["path", { d: "M17.915 22a6 6 0 0 0-12 0" }], ["path", { d: "M8 2v2" }], ["circle", { cx: "12", cy: "12", r: "4" }], ["rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }]]];
  const Id = ["svg", a, [["path", { d: "M16 2v2" }], ["path", { d: "M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }], ["path", { d: "M8 2v2" }], ["circle", { cx: "12", cy: "11", r: "3" }], ["rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }]]];
  const Ed = ["svg", a, [["path", { d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" }], ["path", { d: "M10 21.9V14L2.1 9.1" }], ["path", { d: "m10 14 11.9-6.9" }], ["path", { d: "M14 19.8v-8.1" }], ["path", { d: "M18 17.5V9.4" }]]];
  const Gd = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 18a6 6 0 0 0 0-12v12z" }]]];
  const Wd = ["svg", a, [["path", { d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" }], ["path", { d: "M8.5 8.5v.01" }], ["path", { d: "M16 15.5v.01" }], ["path", { d: "M12 12v.01" }], ["path", { d: "M11 17v.01" }], ["path", { d: "M7 14v.01" }]]];
  const Xd = ["svg", a, [["path", { d: "M2 12h20" }], ["path", { d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }], ["path", { d: "m4 8 16-4" }], ["path", { d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" }]]];
  const Nd = ["svg", a, [["path", { d: "m12 15 2 2 4-4" }], ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]];
  const Kd = ["svg", a, [["line", { x1: "12", x2: "18", y1: "15", y2: "15" }], ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]];
  const $d = ["svg", a, [["line", { x1: "15", x2: "15", y1: "12", y2: "18" }], ["line", { x1: "12", x2: "18", y1: "15", y2: "15" }], ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]];
  const Jd = ["svg", a, [["line", { x1: "12", x2: "18", y1: "18", y2: "12" }], ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]];
  const jd = ["svg", a, [["line", { x1: "12", x2: "18", y1: "12", y2: "18" }], ["line", { x1: "12", x2: "18", y1: "18", y2: "12" }], ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]];
  const Qd = ["svg", a, [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]];
  const _d = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M9.17 14.83a4 4 0 1 0 0-5.66" }]]];
  const Yd = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M14.83 14.83a4 4 0 1 1 0-5.66" }]]];
  const ap = ["svg", a, [["polyline", { points: "9 10 4 15 9 20" }], ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4" }]]];
  const tp = ["svg", a, [["polyline", { points: "15 10 20 15 15 20" }], ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12" }]]];
  const hp = ["svg", a, [["polyline", { points: "14 15 9 20 4 15" }], ["path", { d: "M20 4h-7a4 4 0 0 0-4 4v12" }]]];
  const dp = ["svg", a, [["polyline", { points: "14 9 9 4 4 9" }], ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4" }]]];
  const pp = ["svg", a, [["polyline", { points: "10 15 15 20 20 15" }], ["path", { d: "M4 4h7a4 4 0 0 1 4 4v12" }]]];
  const cp = ["svg", a, [["polyline", { points: "10 9 15 4 20 9" }], ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4" }]]];
  const Mp = ["svg", a, [["polyline", { points: "9 14 4 9 9 4" }], ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4" }]]];
  const sp = ["svg", a, [["polyline", { points: "15 14 20 9 15 4" }], ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12" }]]];
  const ep = ["svg", a, [["rect", { width: "16", height: "16", x: "4", y: "4", rx: "2" }], ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1" }], ["path", { d: "M15 2v2" }], ["path", { d: "M15 20v2" }], ["path", { d: "M2 15h2" }], ["path", { d: "M2 9h2" }], ["path", { d: "M20 15h2" }], ["path", { d: "M20 9h2" }], ["path", { d: "M9 2v2" }], ["path", { d: "M9 20v2" }]]];
  const rp = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }], ["path", { d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }]]];
  const vp = ["svg", a, [["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }], ["line", { x1: "2", x2: "22", y1: "10", y2: "10" }]]];
  const op = ["svg", a, [["path", { d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z" }], ["path", { d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83" }], ["path", { d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4" }], ["path", { d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2" }], ["path", { d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5" }]]];
  const np = ["svg", a, [["path", { d: "M6 2v14a2 2 0 0 0 2 2h14" }], ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2" }]]];
  const ip = ["svg", a, [["path", { d: "M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z" }]]];
  const lp = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["line", { x1: "22", x2: "18", y1: "12", y2: "12" }], ["line", { x1: "6", x2: "2", y1: "12", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "6", y2: "2" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "18" }]]];
  const gp = ["svg", a, [["path", { d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" }], ["path", { d: "M5 21h14" }]]];
  const xp = ["svg", a, [["path", { d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" }], ["path", { d: "M10 22v-8L2.25 9.15" }], ["path", { d: "m10 14 11.77-6.87" }]]];
  const yp = ["svg", a, [["path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" }], ["path", { d: "M5 8h14" }], ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }], ["path", { d: "m12 8 1-6h2" }]]];
  const mp = ["svg", a, [["circle", { cx: "12", cy: "12", r: "8" }], ["line", { x1: "3", x2: "6", y1: "3", y2: "6" }], ["line", { x1: "21", x2: "18", y1: "3", y2: "6" }], ["line", { x1: "3", x2: "6", y1: "21", y2: "18" }], ["line", { x1: "21", x2: "18", y1: "21", y2: "18" }]]];
  const Hp = ["svg", a, [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }], ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }]]];
  const Vp = ["svg", a, [["path", { d: "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }], ["path", { d: "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }], ["path", { d: "M2 10h4" }], ["path", { d: "M2 14h4" }], ["path", { d: "M2 18h4" }], ["path", { d: "M2 6h4" }], ["path", { d: "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" }]]];
  const Cp = ["svg", a, [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }], ["path", { d: "M3 12a9 3 0 0 0 5 2.69" }], ["path", { d: "M21 9.3V5" }], ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88" }], ["path", { d: "M12 12v4h4" }], ["path", { d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" }]]];
  const up = ["svg", a, [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }], ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84" }], ["path", { d: "M21 5V8" }], ["path", { d: "M21 12L18 17H22L19 22" }], ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87" }]]];
  const wp = ["svg", a, [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }], ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5" }], ["path", { d: "M3 12A9 3 0 0 0 21 12" }]]];
  const Ap = ["svg", a, [["path", { d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" }], ["path", { d: "m12 9 6 6" }], ["path", { d: "m18 9-6 6" }]]];
  const Lp = ["svg", a, [["circle", { cx: "12", cy: "4", r: "2" }], ["path", { d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8" }], ["path", { d: "M3.2 14.8a9 9 0 0 0 17.6 0" }]]];
  const Sp = ["svg", a, [["circle", { cx: "19", cy: "19", r: "2" }], ["circle", { cx: "5", cy: "5", r: "2" }], ["path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86" }], ["path", { d: "m6.41 6.41 11.18 11.18" }], ["path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86" }]]];
  const fp = ["svg", a, [["path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" }], ["path", { d: "M8 12h8" }]]];
  const z1 = ["svg", a, [["path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" }], ["path", { d: "M9.2 9.2h.01" }], ["path", { d: "m14.5 9.5-5 5" }], ["path", { d: "M14.7 14.8h.01" }]]];
  const Pp = ["svg", a, [["path", { d: "M12 8v8" }], ["path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" }], ["path", { d: "M8 12h8" }]]];
  const Zp = ["svg", a, [["path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" }]]];
  const zp = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "M12 12h.01" }]]];
  const kp = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "M15 9h.01" }], ["path", { d: "M9 15h.01" }]]];
  const Bp = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "M16 8h.01" }], ["path", { d: "M12 12h.01" }], ["path", { d: "M8 16h.01" }]]];
  const Dp = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "M16 8h.01" }], ["path", { d: "M8 8h.01" }], ["path", { d: "M8 16h.01" }], ["path", { d: "M16 16h.01" }]]];
  const Fp = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "M16 8h.01" }], ["path", { d: "M8 8h.01" }], ["path", { d: "M8 16h.01" }], ["path", { d: "M16 16h.01" }], ["path", { d: "M12 12h.01" }]]];
  const qp = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "M16 8h.01" }], ["path", { d: "M16 12h.01" }], ["path", { d: "M16 16h.01" }], ["path", { d: "M8 8h.01" }], ["path", { d: "M8 12h.01" }], ["path", { d: "M8 16h.01" }]]];
  const Rp = ["svg", a, [["rect", { width: "12", height: "12", x: "2", y: "10", rx: "2", ry: "2" }], ["path", { d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" }], ["path", { d: "M6 18h.01" }], ["path", { d: "M10 14h.01" }], ["path", { d: "M15 6h.01" }], ["path", { d: "M18 9h.01" }]]];
  const bp = ["svg", a, [["path", { d: "M12 3v14" }], ["path", { d: "M5 10h14" }], ["path", { d: "M5 21h14" }]]];
  const Tp = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["circle", { cx: "12", cy: "12", r: "4" }], ["path", { d: "M12 12h.01" }]]];
  const Up = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2" }], ["circle", { cx: "12", cy: "12", r: "2" }], ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2" }]]];
  const Op = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["circle", { cx: "12", cy: "12", r: "5" }], ["path", { d: "M12 12h.01" }]]];
  const Ip = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["circle", { cx: "12", cy: "12", r: "2" }]]];
  const Ep = ["svg", a, [["circle", { cx: "12", cy: "6", r: "1" }], ["line", { x1: "5", x2: "19", y1: "12", y2: "12" }], ["circle", { cx: "12", cy: "18", r: "1" }]]];
  const Gp = ["svg", a, [["path", { d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" }], ["path", { d: "m17 6-2.891-2.891" }], ["path", { d: "M2 15c3.333-3 6.667-3 10-3" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "m20 9 .891.891" }], ["path", { d: "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" }], ["path", { d: "M3.109 14.109 4 15" }], ["path", { d: "m6.5 12.5 1 1" }], ["path", { d: "m7 18 2.891 2.891" }], ["path", { d: "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" }]]];
  const Wp = ["svg", a, [["path", { d: "m10 16 1.5 1.5" }], ["path", { d: "m14 8-1.5-1.5" }], ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" }], ["path", { d: "m16.5 10.5 1 1" }], ["path", { d: "m17 6-2.891-2.891" }], ["path", { d: "M2 15c6.667-6 13.333 0 20-6" }], ["path", { d: "m20 9 .891.891" }], ["path", { d: "M3.109 14.109 4 15" }], ["path", { d: "m6.5 12.5 1 1" }], ["path", { d: "m7 18 2.891 2.891" }], ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993" }]]];
  const Xp = ["svg", a, [["path", { d: "M2 8h20" }], ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["path", { d: "M6 16h12" }]]];
  const Np = ["svg", a, [["path", { d: "M11.25 16.25h1.5L12 17z" }], ["path", { d: "M16 14v.5" }], ["path", { d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" }], ["path", { d: "M8 14v.5" }], ["path", { d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" }]]];
  const Kp = ["svg", a, [["line", { x1: "12", x2: "12", y1: "2", y2: "22" }], ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }]]];
  const $p = ["svg", a, [["path", { d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3" }], ["circle", { cx: "12", cy: "12", r: "3" }]]];
  const Jp = ["svg", a, [["path", { d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" }], ["path", { d: "M2 20h20" }], ["path", { d: "M14 12v.01" }]]];
  const jp = ["svg", a, [["path", { d: "M13 4h3a2 2 0 0 1 2 2v14" }], ["path", { d: "M2 20h3" }], ["path", { d: "M13 20h9" }], ["path", { d: "M10 12v.01" }], ["path", { d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" }]]];
  const Qp = ["svg", a, [["circle", { cx: "12.1", cy: "12.1", r: "1" }]]];
  const _p = ["svg", a, [["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }], ["polyline", { points: "7 10 12 15 17 10" }], ["line", { x1: "12", x2: "12", y1: "15", y2: "3" }]]];
  const Yp = ["svg", a, [["path", { d: "m12.99 6.74 1.93 3.44" }], ["path", { d: "M19.136 12a10 10 0 0 1-14.271 0" }], ["path", { d: "m21 21-2.16-3.84" }], ["path", { d: "m3 21 8.02-14.26" }], ["circle", { cx: "12", cy: "5", r: "2" }]]];
  const a6 = ["svg", a, [["path", { d: "M10 11h.01" }], ["path", { d: "M14 6h.01" }], ["path", { d: "M18 6h.01" }], ["path", { d: "M6.5 13.1h.01" }], ["path", { d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" }], ["path", { d: "M17.4 9.9c-.8.8-2 .8-2.8 0" }], ["path", { d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7" }], ["path", { d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" }]]];
  const t6 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" }], ["path", { d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" }], ["path", { d: "M8.56 2.75c4.37 6 6 9.42 8 17.72" }]]];
  const h6 = ["svg", a, [["path", { d: "M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z" }], ["path", { d: "M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8" }], ["path", { d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" }], ["path", { d: "M18 6h4" }], ["path", { d: "m5 10-2 8" }], ["path", { d: "m7 18 2-8" }]]];
  const d6 = ["svg", a, [["path", { d: "M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208" }]]];
  const p6 = ["svg", a, [["path", { d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" }]]];
  const c6 = ["svg", a, [["path", { d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" }], ["path", { d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" }]]];
  const M6 = ["svg", a, [["path", { d: "m2 2 8 8" }], ["path", { d: "m22 2-8 8" }], ["ellipse", { cx: "12", cy: "9", rx: "10", ry: "5" }], ["path", { d: "M7 13.4v7.9" }], ["path", { d: "M12 14v8" }], ["path", { d: "M17 13.4v7.9" }], ["path", { d: "M2 9v8a10 5 0 0 0 20 0V9" }]]];
  const s6 = ["svg", a, [["path", { d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" }], ["path", { d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" }]]];
  const e6 = ["svg", a, [["path", { d: "M14.4 14.4 9.6 9.6" }], ["path", { d: "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" }], ["path", { d: "m21.5 21.5-1.4-1.4" }], ["path", { d: "M3.9 3.9 2.5 2.5" }], ["path", { d: "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" }]]];
  const r6 = ["svg", a, [["path", { d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" }], ["path", { d: "M6 8.5c0-.75.13-1.47.36-2.14" }], ["path", { d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" }], ["path", { d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const v6 = ["svg", a, [["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" }], ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" }]]];
  const o6 = ["svg", a, [["path", { d: "M7 3.34V5a3 3 0 0 0 3 3" }], ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }], ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54" }], ["path", { d: "M12 2a10 10 0 1 0 9.54 13" }], ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2" }], ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1" }]]];
  const k1 = ["svg", a, [["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54" }], ["path", { d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" }], ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }], ["circle", { cx: "12", cy: "12", r: "10" }]]];
  const n6 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 2a7 7 0 1 0 10 10" }]]];
  const i6 = ["svg", a, [["circle", { cx: "11.5", cy: "12.5", r: "3.5" }], ["path", { d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z" }]]];
  const l6 = ["svg", a, [["path", { d: "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625" }], ["path", { d: "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const g6 = ["svg", a, [["path", { d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z" }]]];
  const B1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "1" }], ["circle", { cx: "12", cy: "5", r: "1" }], ["circle", { cx: "12", cy: "19", r: "1" }]]];
  const D1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "1" }], ["circle", { cx: "19", cy: "12", r: "1" }], ["circle", { cx: "5", cy: "12", r: "1" }]]];
  const x6 = ["svg", a, [["path", { d: "M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" }], ["path", { d: "M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" }]]];
  const y6 = ["svg", a, [["line", { x1: "5", x2: "19", y1: "9", y2: "9" }], ["line", { x1: "5", x2: "19", y1: "15", y2: "15" }], ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }]]];
  const m6 = ["svg", a, [["line", { x1: "5", x2: "19", y1: "9", y2: "9" }], ["line", { x1: "5", x2: "19", y1: "15", y2: "15" }]]];
  const H6 = ["svg", a, [["path", { d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" }], ["path", { d: "M22 21H7" }], ["path", { d: "m5 11 9 9" }]]];
  const V6 = ["svg", a, [["path", { d: "m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z" }], ["path", { d: "M6 8v1" }], ["path", { d: "M10 8v1" }], ["path", { d: "M14 8v1" }], ["path", { d: "M18 8v1" }]]];
  const C6 = ["svg", a, [["path", { d: "M4 10h12" }], ["path", { d: "M4 14h9" }], ["path", { d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" }]]];
  const u6 = ["svg", a, [["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8" }], ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6" }], ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6" }], ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6" }]]];
  const w6 = ["svg", a, [["path", { d: "M15 3h6v6" }], ["path", { d: "M10 14 21 3" }], ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]]];
  const A6 = ["svg", a, [["path", { d: "m15 18-.722-3.25" }], ["path", { d: "M2 8a10.645 10.645 0 0 0 20 0" }], ["path", { d: "m20 15-1.726-2.05" }], ["path", { d: "m4 15 1.726-2.05" }], ["path", { d: "m9 18 .722-3.25" }]]];
  const L6 = ["svg", a, [["path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" }], ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242" }], ["path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" }], ["path", { d: "m2 2 20 20" }]]];
  const S6 = ["svg", a, [["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }], ["circle", { cx: "12", cy: "12", r: "3" }]]];
  const f6 = ["svg", a, [["path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }]]];
  const P6 = ["svg", a, [["path", { d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "M17 18h1" }], ["path", { d: "M12 18h1" }], ["path", { d: "M7 18h1" }]]];
  const Z6 = ["svg", a, [["path", { d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" }], ["path", { d: "M12 12v.01" }]]];
  const z6 = ["svg", a, [["polygon", { points: "13 19 22 12 13 5 13 19" }], ["polygon", { points: "2 19 11 12 2 5 2 19" }]]];
  const k6 = ["svg", a, [["path", { d: "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" }], ["path", { d: "M16 8 2 22" }], ["path", { d: "M17.5 15H9" }]]];
  const B6 = ["svg", a, [["path", { d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }], ["path", { d: "M6 8h4" }], ["path", { d: "M6 18h4" }], ["path", { d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }], ["path", { d: "M14 8h4" }], ["path", { d: "M14 18h4" }], ["path", { d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }]]];
  const D6 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "2" }], ["path", { d: "M12 2v4" }], ["path", { d: "m6.8 15-3.5 2" }], ["path", { d: "m20.7 7-3.5 2" }], ["path", { d: "M6.8 9 3.3 7" }], ["path", { d: "m20.7 17-3.5-2" }], ["path", { d: "m9 22 3-8 3 8" }], ["path", { d: "M8 22h8" }], ["path", { d: "M18 18.7a9 9 0 1 0-12 0" }]]];
  const F6 = ["svg", a, [["path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" }], ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" }], ["path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" }], ["path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" }], ["path", { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" }]]];
  const q6 = ["svg", a, [["path", { d: "M10 12v-1" }], ["path", { d: "M10 18v-2" }], ["path", { d: "M10 7V6" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" }], ["circle", { cx: "10", cy: "20", r: "2" }]]];
  const R6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["circle", { cx: "3", cy: "17", r: "1" }], ["path", { d: "M2 17v-3a4 4 0 0 1 8 0v3" }], ["circle", { cx: "9", cy: "17", r: "1" }]]];
  const b6 = ["svg", a, [["path", { d: "M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0" }]]];
  const F1 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m8 18 4-4" }], ["path", { d: "M8 10v8h8" }]]];
  const T6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m14 12.5 1 5.5-3-1-3 1 1-5.5" }]]];
  const U6 = ["svg", a, [["path", { d: "M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }], ["path", { d: "M7 16.5 8 22l-3-1-3 1 1-5.5" }]]];
  const O6 = ["svg", a, [["path", { d: "M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z" }], ["path", { d: "M7 17v5" }], ["path", { d: "M11.7 14.2 7 17l-4.7-2.8" }]]];
  const q1 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M8 18v-2" }], ["path", { d: "M12 18v-4" }], ["path", { d: "M16 18v-6" }]]];
  const R1 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M8 18v-1" }], ["path", { d: "M12 18v-6" }], ["path", { d: "M16 18v-3" }]]];
  const b1 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m16 13-3.5 3.5-2-2L8 17" }]]];
  const T1 = ["svg", a, [["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5" }], ["path", { d: "M4.017 11.512a6 6 0 1 0 8.466 8.475" }], ["path", { d: "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z" }]]];
  const I6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m3 15 2 2 4-4" }]]];
  const E6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m9 15 2 2 4-4" }]]];
  const G6 = ["svg", a, [["path", { d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["circle", { cx: "8", cy: "16", r: "6" }], ["path", { d: "M9.5 17.5 8 16.25V14" }]]];
  const W6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m5 12-3 3 3 3" }], ["path", { d: "m9 18 3-3-3-3" }]]];
  const X6 = ["svg", a, [["path", { d: "M10 12.5 8 15l2 2.5" }], ["path", { d: "m14 12.5 2 2.5-2 2.5" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }]]];
  const U1 = ["svg", a, [["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m3.2 12.9-.9-.4" }], ["path", { d: "m3.2 15.1-.9.4" }], ["path", { d: "M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5" }], ["path", { d: "m4.9 11.2-.4-.9" }], ["path", { d: "m4.9 16.8-.4.9" }], ["path", { d: "m7.5 10.3-.4.9" }], ["path", { d: "m7.5 17.7-.4-.9" }], ["path", { d: "m9.7 12.5-.9.4" }], ["path", { d: "m9.7 15.5-.9-.4" }], ["circle", { cx: "6", cy: "14", r: "3" }]]];
  const N6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M9 10h6" }], ["path", { d: "M12 13V7" }], ["path", { d: "M9 17h6" }]]];
  const K6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["rect", { width: "4", height: "6", x: "2", y: "12", rx: "2" }], ["path", { d: "M10 12h2v6" }], ["path", { d: "M10 18h4" }]]];
  const $6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M12 18v-6" }], ["path", { d: "m9 15 3 3 3-3" }]]];
  const J6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z" }]]];
  const j6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["circle", { cx: "10", cy: "12", r: "2" }], ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" }]]];
  const Q6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M2 15h10" }], ["path", { d: "m9 18 3-3-3-3" }]]];
  const _6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" }], ["path", { d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" }]]];
  const Y6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" }], ["path", { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" }]]];
  const a8 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["circle", { cx: "4", cy: "16", r: "2" }], ["path", { d: "m10 10-4.5 4.5" }], ["path", { d: "m9 11 1 1" }]]];
  const t8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["circle", { cx: "10", cy: "16", r: "2" }], ["path", { d: "m16 10-4.5 4.5" }], ["path", { d: "m15 11 1 1" }]]];
  const h8 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["rect", { width: "8", height: "5", x: "2", y: "13", rx: "1" }], ["path", { d: "M8 13v-2a2 2 0 1 0-4 0v2" }]]];
  const d8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["rect", { width: "8", height: "6", x: "8", y: "12", rx: "1" }], ["path", { d: "M10 12v-2a2 2 0 1 1 4 0v2" }]]];
  const p8 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M3 15h6" }]]];
  const c8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M9 15h6" }]]];
  const M8 = ["svg", a, [["path", { d: "M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4" }], ["path", { d: "M8 18v-7.7L16 9v7" }], ["circle", { cx: "14", cy: "16", r: "2" }], ["circle", { cx: "6", cy: "18", r: "2" }]]];
  const s8 = ["svg", a, [["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2" }], ["path", { d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6" }], ["path", { d: "m5 11-3 3" }], ["path", { d: "m5 17-3-3h10" }]]];
  const O1 = ["svg", a, [["path", { d: "m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" }], ["path", { d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }], ["path", { d: "M8 18h1" }]]];
  const I1 = ["svg", a, [["path", { d: "M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }]]];
  const e8 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M3 15h6" }], ["path", { d: "M6 12v6" }]]];
  const r8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M9 15h6" }], ["path", { d: "M12 18v-6" }]]];
  const v8 = ["svg", a, [["path", { d: "M12 17h.01" }], ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }], ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }]]];
  const o8 = ["svg", a, [["path", { d: "M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M16 14a2 2 0 0 0-2 2" }], ["path", { d: "M20 14a2 2 0 0 1 2 2" }], ["path", { d: "M20 22a2 2 0 0 0 2-2" }], ["path", { d: "M16 22a2 2 0 0 1-2-2" }]]];
  const n8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["circle", { cx: "11.5", cy: "14.5", r: "2.5" }], ["path", { d: "M13.3 16.3 15 18" }]]];
  const i8 = ["svg", a, [["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }], ["path", { d: "m9 18-1.5-1.5" }], ["circle", { cx: "5", cy: "14", r: "3" }]]];
  const l8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M8 12h8" }], ["path", { d: "M10 11v2" }], ["path", { d: "M8 17h8" }], ["path", { d: "M14 16v2" }]]];
  const g8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M8 13h2" }], ["path", { d: "M14 13h2" }], ["path", { d: "M8 17h2" }], ["path", { d: "M14 17h2" }]]];
  const x8 = ["svg", a, [["path", { d: "M21 7h-3a2 2 0 0 1-2-2V2" }], ["path", { d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z" }], ["path", { d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" }], ["path", { d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11" }]]];
  const y8 = ["svg", a, [["path", { d: "m10 18 3-3-3-3" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" }]]];
  const m8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m8 16 2-2-2-2" }], ["path", { d: "M12 18h4" }]]];
  const H8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M10 9H8" }], ["path", { d: "M16 13H8" }], ["path", { d: "M16 17H8" }]]];
  const V8 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M2 13v-1h6v1" }], ["path", { d: "M5 12v6" }], ["path", { d: "M4 18h2" }]]];
  const C8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M9 13v-1h6v1" }], ["path", { d: "M12 12v6" }], ["path", { d: "M11 18h2" }]]];
  const u8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M12 12v6" }], ["path", { d: "m15 15-3-3-3 3" }]]];
  const w8 = ["svg", a, [["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M15 18a3 3 0 1 0-6 0" }], ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }], ["circle", { cx: "12", cy: "13", r: "2" }]]];
  const A8 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["rect", { width: "8", height: "6", x: "2", y: "12", rx: "1" }], ["path", { d: "m10 15.5 4 2.5v-6l-4 2.5" }]]];
  const L8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m10 11 5 3-5 3v-6Z" }]]];
  const S8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M8 15h.01" }], ["path", { d: "M11.5 13.5a2.5 2.5 0 0 1 0 3" }], ["path", { d: "M15 12a5 5 0 0 1 0 6" }]]];
  const f8 = ["svg", a, [["path", { d: "M11 11a5 5 0 0 1 0 6" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23" }], ["path", { d: "M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z" }]]];
  const P8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M12 9v4" }], ["path", { d: "M12 17h.01" }]]];
  const Z8 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m8 12.5-5 5" }], ["path", { d: "m3 12.5 5 5" }]]];
  const z8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m14.5 12.5-5 5" }], ["path", { d: "m9.5 12.5 5 5" }]]];
  const k8 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }]]];
  const B8 = ["svg", a, [["path", { d: "M20 7h-3a2 2 0 0 1-2-2V2" }], ["path", { d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" }], ["path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" }]]];
  const D8 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M7 3v18" }], ["path", { d: "M3 7.5h4" }], ["path", { d: "M3 12h18" }], ["path", { d: "M3 16.5h4" }], ["path", { d: "M17 3v18" }], ["path", { d: "M17 7.5h4" }], ["path", { d: "M17 16.5h4" }]]];
  const F8 = ["svg", a, [["path", { d: "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055" }], ["path", { d: "m22 3-5 5" }], ["path", { d: "m17 3 5 5" }]]];
  const q8 = ["svg", a, [["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }]]];
  const R8 = ["svg", a, [["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" }], ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88" }], ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02" }], ["path", { d: "M2 12a10 10 0 0 1 18-6" }], ["path", { d: "M2 16h.01" }], ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6" }], ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" }], ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2" }], ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2" }]]];
  const b8 = ["svg", a, [["path", { d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" }], ["path", { d: "M9 18h8" }], ["path", { d: "M18 3h-3" }], ["path", { d: "M11 3a6 6 0 0 0-6 6v11" }], ["path", { d: "M5 13h4" }], ["path", { d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" }]]];
  const T8 = ["svg", a, [["path", { d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058" }], ["path", { d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618" }], ["path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20" }]]];
  const U8 = ["svg", a, [["path", { d: "M2 16s9-15 20-4C11 23 2 8 2 8" }]]];
  const O8 = ["svg", a, [["path", { d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" }], ["path", { d: "M18 12v.5" }], ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86" }], ["path", { d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" }], ["path", { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" }], ["path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" }]]];
  const I8 = ["svg", a, [["path", { d: "M8 2c3 0 5 2 8 2s4-1 4-1v11" }], ["path", { d: "M4 22V4" }], ["path", { d: "M4 15s1-1 4-1 5 2 8 2" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const E8 = ["svg", a, [["path", { d: "M17 22V2L7 7l10 5" }]]];
  const G8 = ["svg", a, [["path", { d: "M7 22V2l10 5-10 5" }]]];
  const W8 = ["svg", a, [["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" }], ["line", { x1: "4", x2: "4", y1: "22", y2: "15" }]]];
  const X8 = ["svg", a, [["path", { d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z" }], ["path", { d: "m5 22 14-4" }], ["path", { d: "m5 18 14 4" }]]];
  const N8 = ["svg", a, [["path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" }]]];
  const K8 = ["svg", a, [["path", { d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4" }], ["path", { d: "M7 2h11v4c0 2-2 2-2 4v1" }], ["line", { x1: "11", x2: "18", y1: "6", y2: "6" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const $8 = ["svg", a, [["path", { d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z" }], ["line", { x1: "6", x2: "18", y1: "6", y2: "6" }], ["line", { x1: "12", x2: "12", y1: "12", y2: "12" }]]];
  const J8 = ["svg", a, [["path", { d: "M10 2v2.343" }], ["path", { d: "M14 2v6.343" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" }], ["path", { d: "M6.453 15H15" }], ["path", { d: "M8.5 2h7" }]]];
  const j8 = ["svg", a, [["path", { d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" }], ["path", { d: "M6.453 15h11.094" }], ["path", { d: "M8.5 2h7" }]]];
  const Q8 = ["svg", a, [["path", { d: "M10 2v6.292a7 7 0 1 0 4 0V2" }], ["path", { d: "M5 15h14" }], ["path", { d: "M8.5 2h7" }]]];
  const _8 = ["svg", a, [["path", { d: "m3 7 5 5-5 5V7" }], ["path", { d: "m21 7-5 5 5 5V7" }], ["path", { d: "M12 20v2" }], ["path", { d: "M12 14v2" }], ["path", { d: "M12 8v2" }], ["path", { d: "M12 2v2" }]]];
  const Y8 = ["svg", a, [["path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" }], ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }], ["path", { d: "M12 20v2" }], ["path", { d: "M12 14v2" }], ["path", { d: "M12 8v2" }], ["path", { d: "M12 2v2" }]]];
  const ac = ["svg", a, [["path", { d: "m17 3-5 5-5-5h10" }], ["path", { d: "m17 21-5-5-5 5h10" }], ["path", { d: "M4 12H2" }], ["path", { d: "M10 12H8" }], ["path", { d: "M16 12h-2" }], ["path", { d: "M22 12h-2" }]]];
  const tc = ["svg", a, [["path", { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" }], ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }], ["path", { d: "M4 12H2" }], ["path", { d: "M10 12H8" }], ["path", { d: "M16 12h-2" }], ["path", { d: "M22 12h-2" }]]];
  const hc = ["svg", a, [["path", { d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" }], ["circle", { cx: "12", cy: "8", r: "2" }], ["path", { d: "M12 10v12" }], ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" }], ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" }]]];
  const dc = ["svg", a, [["circle", { cx: "12", cy: "12", r: "3" }], ["path", { d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" }], ["path", { d: "M12 7.5V9" }], ["path", { d: "M7.5 12H9" }], ["path", { d: "M16.5 12H15" }], ["path", { d: "M12 16.5V15" }], ["path", { d: "m8 8 1.88 1.88" }], ["path", { d: "M14.12 9.88 16 8" }], ["path", { d: "m8 16 1.88-1.88" }], ["path", { d: "M14.12 14.12 16 16" }]]];
  const pc = ["svg", a, [["circle", { cx: "12", cy: "12", r: "3" }], ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]]];
  const cc = ["svg", a, [["path", { d: "M2 12h6" }], ["path", { d: "M22 12h-6" }], ["path", { d: "M12 2v2" }], ["path", { d: "M12 8v2" }], ["path", { d: "M12 14v2" }], ["path", { d: "M12 20v2" }], ["path", { d: "m19 9-3 3 3 3" }], ["path", { d: "m5 15 3-3-3-3" }]]];
  const Mc = ["svg", a, [["path", { d: "M12 22v-6" }], ["path", { d: "M12 8V2" }], ["path", { d: "M4 12H2" }], ["path", { d: "M10 12H8" }], ["path", { d: "M16 12h-2" }], ["path", { d: "M22 12h-2" }], ["path", { d: "m15 19-3-3-3 3" }], ["path", { d: "m15 5-3 3-3-3" }]]];
  const sc = ["svg", a, [["circle", { cx: "15", cy: "19", r: "2" }], ["path", { d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1" }], ["path", { d: "M15 11v-1" }], ["path", { d: "M15 17v-2" }]]];
  const ec = ["svg", a, [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { d: "m9 13 2 2 4-4" }]]];
  const rc = ["svg", a, [["circle", { cx: "16", cy: "16", r: "6" }], ["path", { d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2" }], ["path", { d: "M16 14v2l1 1" }]]];
  const vc = ["svg", a, [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { d: "M2 10h20" }]]];
  const oc = ["svg", a, [["path", { d: "M10 10.5 8 13l2 2.5" }], ["path", { d: "m14 10.5 2 2.5-2 2.5" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" }]]];
  const E1 = ["svg", a, [["circle", { cx: "18", cy: "18", r: "3" }], ["path", { d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3" }], ["path", { d: "m21.7 19.4-.9-.3" }], ["path", { d: "m15.2 16.9-.9-.3" }], ["path", { d: "m16.6 21.7.3-.9" }], ["path", { d: "m19.1 15.2.3-.9" }], ["path", { d: "m19.6 21.7-.4-1" }], ["path", { d: "m16.8 15.3-.4-1" }], ["path", { d: "m14.3 19.6 1-.4" }], ["path", { d: "m20.7 16.8 1-.4" }]]];
  const nc = ["svg", a, [["path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }], ["circle", { cx: "12", cy: "13", r: "1" }]]];
  const ic = ["svg", a, [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { d: "M12 10v6" }], ["path", { d: "m15 13-3 3-3-3" }]]];
  const lc = ["svg", a, [["path", { d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" }], ["circle", { cx: "13", cy: "12", r: "2" }], ["path", { d: "M18 19c-2.8 0-5-2.2-5-5v8" }], ["circle", { cx: "20", cy: "19", r: "2" }]]];
  const gc = ["svg", a, [["circle", { cx: "12", cy: "13", r: "2" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { d: "M14 13h3" }], ["path", { d: "M7 13h3" }]]];
  const xc = ["svg", a, [["path", { d: "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5" }], ["path", { d: "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z" }]]];
  const yc = ["svg", a, [["path", { d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" }], ["path", { d: "M2 13h10" }], ["path", { d: "m9 16 3-3-3-3" }]]];
  const mc = ["svg", a, [["path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }], ["path", { d: "M8 10v4" }], ["path", { d: "M12 10v2" }], ["path", { d: "M16 10v6" }]]];
  const Hc = ["svg", a, [["circle", { cx: "16", cy: "20", r: "2" }], ["path", { d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2" }], ["path", { d: "m22 14-4.5 4.5" }], ["path", { d: "m21 15 1 1" }]]];
  const Vc = ["svg", a, [["rect", { width: "8", height: "5", x: "14", y: "17", rx: "1" }], ["path", { d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5" }], ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2" }]]];
  const Cc = ["svg", a, [["path", { d: "M9 13h6" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }]]];
  const uc = ["svg", a, [["path", { d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" }], ["circle", { cx: "14", cy: "15", r: "1" }]]];
  const wc = ["svg", a, [["path", { d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" }]]];
  const Ac = ["svg", a, [["path", { d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5" }], ["path", { d: "M2 13h10" }], ["path", { d: "m5 10-3 3 3 3" }]]];
  const G1 = ["svg", a, [["path", { d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5" }], ["path", { d: "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }]]];
  const Lc = ["svg", a, [["path", { d: "M12 10v6" }], ["path", { d: "M9 13h6" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }]]];
  const Sc = ["svg", a, [["path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }], ["circle", { cx: "12", cy: "13", r: "2" }], ["path", { d: "M12 15v5" }]]];
  const fc = ["svg", a, [["circle", { cx: "11.5", cy: "12.5", r: "2.5" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { d: "M13.3 14.3 15 16" }]]];
  const Pc = ["svg", a, [["path", { d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1" }], ["path", { d: "m21 21-1.9-1.9" }], ["circle", { cx: "17", cy: "17", r: "3" }]]];
  const Zc = ["svg", a, [["path", { d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" }], ["path", { d: "m8 16 3-3-3-3" }]]];
  const zc = ["svg", a, [["path", { d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5" }], ["path", { d: "M12 10v4h4" }], ["path", { d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5" }], ["path", { d: "M22 22v-4h-4" }], ["path", { d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5" }]]];
  const kc = ["svg", a, [["path", { d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" }], ["path", { d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" }], ["path", { d: "M3 5a2 2 0 0 0 2 2h3" }], ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3" }]]];
  const Bc = ["svg", a, [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { d: "M12 10v6" }], ["path", { d: "m9 13 3-3 3 3" }]]];
  const Dc = ["svg", a, [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { d: "m9.5 10.5 5 5" }], ["path", { d: "m14.5 10.5-5 5" }]]];
  const Fc = ["svg", a, [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }]]];
  const qc = ["svg", a, [["path", { d: "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z" }], ["path", { d: "M2 8v11a2 2 0 0 0 2 2h14" }]]];
  const Rc = ["svg", a, [["path", { d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" }], ["path", { d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" }], ["path", { d: "M16 17h4" }], ["path", { d: "M4 13h4" }]]];
  const bc = ["svg", a, [["path", { d: "M12 12H5a2 2 0 0 0-2 2v5" }], ["circle", { cx: "13", cy: "19", r: "2" }], ["circle", { cx: "5", cy: "19", r: "2" }], ["path", { d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" }]]];
  const Tc = ["svg", a, [["polyline", { points: "15 17 20 12 15 7" }], ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12" }]]];
  const Uc = ["svg", a, [["line", { x1: "22", x2: "2", y1: "6", y2: "6" }], ["line", { x1: "22", x2: "2", y1: "18", y2: "18" }], ["line", { x1: "6", x2: "6", y1: "2", y2: "22" }], ["line", { x1: "18", x2: "18", y1: "2", y2: "22" }]]];
  const Oc = ["svg", a, [["path", { d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" }]]];
  const Ic = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2" }], ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }], ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]]];
  const Ec = ["svg", a, [["line", { x1: "3", x2: "15", y1: "22", y2: "22" }], ["line", { x1: "4", x2: "14", y1: "9", y2: "9" }], ["path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" }], ["path", { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" }]]];
  const Gc = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1" }]]];
  const Wc = ["svg", a, [["path", { d: "M2 7v10" }], ["path", { d: "M6 5v14" }], ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2" }]]];
  const Xc = ["svg", a, [["path", { d: "M2 3v18" }], ["rect", { width: "12", height: "18", x: "6", y: "3", rx: "2" }], ["path", { d: "M22 3v18" }]]];
  const Nc = ["svg", a, [["rect", { width: "18", height: "14", x: "3", y: "3", rx: "2" }], ["path", { d: "M4 21h1" }], ["path", { d: "M9 21h1" }], ["path", { d: "M14 21h1" }], ["path", { d: "M19 21h1" }]]];
  const Kc = ["svg", a, [["path", { d: "M7 2h10" }], ["path", { d: "M5 6h14" }], ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }]]];
  const $c = ["svg", a, [["path", { d: "M3 2h18" }], ["rect", { width: "18", height: "12", x: "3", y: "6", rx: "2" }], ["path", { d: "M3 22h18" }]]];
  const Jc = ["svg", a, [["line", { x1: "6", x2: "10", y1: "11", y2: "11" }], ["line", { x1: "8", x2: "8", y1: "9", y2: "13" }], ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12" }], ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10" }], ["path", { d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" }]]];
  const jc = ["svg", a, [["line", { x1: "6", x2: "10", y1: "12", y2: "12" }], ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }], ["line", { x1: "15", x2: "15.01", y1: "13", y2: "13" }], ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11" }], ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]]];
  const Qc = ["svg", a, [["path", { d: "m12 14 4-4" }], ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0" }]]];
  const _c = ["svg", a, [["path", { d: "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" }], ["path", { d: "m16 16 6-6" }], ["path", { d: "m8 8 6-6" }], ["path", { d: "m9 7 8 8" }], ["path", { d: "m21 11-8-8" }]]];
  const Yc = ["svg", a, [["path", { d: "M6 3h12l4 6-10 13L2 9Z" }], ["path", { d: "M11 3 8 9l4 13 4-13-3-6" }], ["path", { d: "M2 9h20" }]]];
  const a7 = ["svg", a, [["path", { d: "M9 10h.01" }], ["path", { d: "M15 10h.01" }], ["path", { d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" }]]];
  const t7 = ["svg", a, [["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1" }], ["path", { d: "M12 8v13" }], ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" }], ["path", { d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" }]]];
  const h7 = ["svg", a, [["path", { d: "M6 3v12" }], ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }], ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }], ["path", { d: "M15 6a9 9 0 0 0-9 9" }], ["path", { d: "M18 15v6" }], ["path", { d: "M21 18h-6" }]]];
  const d7 = ["svg", a, [["line", { x1: "6", x2: "6", y1: "3", y2: "15" }], ["circle", { cx: "18", cy: "6", r: "3" }], ["circle", { cx: "6", cy: "18", r: "3" }], ["path", { d: "M18 9a9 9 0 0 1-9 9" }]]];
  const W1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "3" }], ["line", { x1: "3", x2: "9", y1: "12", y2: "12" }], ["line", { x1: "15", x2: "21", y1: "12", y2: "12" }]]];
  const p7 = ["svg", a, [["path", { d: "M12 3v6" }], ["circle", { cx: "12", cy: "12", r: "3" }], ["path", { d: "M12 15v6" }]]];
  const c7 = ["svg", a, [["circle", { cx: "5", cy: "6", r: "3" }], ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }], ["path", { d: "m15 9-3-3 3-3" }], ["circle", { cx: "19", cy: "18", r: "3" }], ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9" }], ["path", { d: "m9 15 3 3-3 3" }]]];
  const M7 = ["svg", a, [["circle", { cx: "18", cy: "18", r: "3" }], ["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }], ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9" }]]];
  const s7 = ["svg", a, [["circle", { cx: "12", cy: "18", r: "3" }], ["circle", { cx: "6", cy: "6", r: "3" }], ["circle", { cx: "18", cy: "6", r: "3" }], ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" }], ["path", { d: "M12 12v3" }]]];
  const e7 = ["svg", a, [["circle", { cx: "5", cy: "6", r: "3" }], ["path", { d: "M5 9v6" }], ["circle", { cx: "5", cy: "18", r: "3" }], ["path", { d: "M12 3v18" }], ["circle", { cx: "19", cy: "6", r: "3" }], ["path", { d: "M16 15.7A9 9 0 0 0 19 9" }]]];
  const r7 = ["svg", a, [["circle", { cx: "18", cy: "18", r: "3" }], ["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M6 21V9a9 9 0 0 0 9 9" }]]];
  const v7 = ["svg", a, [["circle", { cx: "5", cy: "6", r: "3" }], ["path", { d: "M5 9v12" }], ["circle", { cx: "19", cy: "18", r: "3" }], ["path", { d: "m15 9-3-3 3-3" }], ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }]]];
  const o7 = ["svg", a, [["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M6 9v12" }], ["path", { d: "m21 3-6 6" }], ["path", { d: "m21 9-6-6" }], ["path", { d: "M18 11.5V15" }], ["circle", { cx: "18", cy: "18", r: "3" }]]];
  const n7 = ["svg", a, [["circle", { cx: "5", cy: "6", r: "3" }], ["path", { d: "M5 9v12" }], ["path", { d: "m15 9-3-3 3-3" }], ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3" }], ["path", { d: "M19 15v6" }], ["path", { d: "M22 18h-6" }]]];
  const i7 = ["svg", a, [["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M6 9v12" }], ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3" }], ["path", { d: "M18 15v6" }], ["path", { d: "M21 18h-6" }]]];
  const l7 = ["svg", a, [["circle", { cx: "18", cy: "18", r: "3" }], ["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M18 6V5" }], ["path", { d: "M18 11v-1" }], ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }]]];
  const g7 = ["svg", a, [["circle", { cx: "18", cy: "18", r: "3" }], ["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }], ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }]]];
  const x7 = ["svg", a, [["path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }], ["path", { d: "M9 18c-4.51 2-5-2-7-2" }]]];
  const y7 = ["svg", a, [["path", { d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" }]]];
  const m7 = ["svg", a, [["path", { d: "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z" }], ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" }]]];
  const H7 = ["svg", a, [["circle", { cx: "6", cy: "15", r: "4" }], ["circle", { cx: "18", cy: "15", r: "4" }], ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" }], ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2" }], ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2" }]]];
  const V7 = ["svg", a, [["path", { d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" }], ["path", { d: "M2 12h8.5" }], ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2" }], ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1" }]]];
  const C7 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }], ["path", { d: "M2 12h20" }]]];
  const u7 = ["svg", a, [["path", { d: "M12 13V2l8 4-8 4" }], ["path", { d: "M20.561 10.222a9 9 0 1 1-12.55-5.29" }], ["path", { d: "M8.002 9.997a5 5 0 1 0 8.9 2.02" }]]];
  const w7 = ["svg", a, [["path", { d: "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }], ["path", { d: "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }], ["path", { d: "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" }], ["path", { d: "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }], ["path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" }]]];
  const A7 = ["svg", a, [["path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" }], ["path", { d: "M22 10v6" }], ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }]]];
  const L7 = ["svg", a, [["path", { d: "M22 5V2l-5.89 5.89" }], ["circle", { cx: "16.6", cy: "15.89", r: "3" }], ["circle", { cx: "8.11", cy: "7.4", r: "3" }], ["circle", { cx: "12.35", cy: "11.65", r: "3" }], ["circle", { cx: "13.91", cy: "5.85", r: "3" }], ["circle", { cx: "18.15", cy: "10.09", r: "3" }], ["circle", { cx: "6.56", cy: "13.2", r: "3" }], ["circle", { cx: "10.8", cy: "17.44", r: "3" }], ["circle", { cx: "5", cy: "19", r: "3" }]]];
  const S7 = ["svg", a, [["path", { d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" }], ["path", { d: "m16 19 2 2 4-4" }]]];
  const X1 = ["svg", a, [["path", { d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" }], ["path", { d: "M16 19h6" }], ["path", { d: "M19 22v-6" }]]];
  const f7 = ["svg", a, [["path", { d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" }], ["path", { d: "m16 16 5 5" }], ["path", { d: "m16 21 5-5" }]]];
  const N1 = ["svg", a, [["path", { d: "M12 3v18" }], ["path", { d: "M3 12h18" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]]];
  const i = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18" }], ["path", { d: "M3 15h18" }], ["path", { d: "M9 3v18" }], ["path", { d: "M15 3v18" }]]];
  const P7 = ["svg", a, [["circle", { cx: "12", cy: "9", r: "1" }], ["circle", { cx: "19", cy: "9", r: "1" }], ["circle", { cx: "5", cy: "9", r: "1" }], ["circle", { cx: "12", cy: "15", r: "1" }], ["circle", { cx: "19", cy: "15", r: "1" }], ["circle", { cx: "5", cy: "15", r: "1" }]]];
  const Z7 = ["svg", a, [["circle", { cx: "9", cy: "12", r: "1" }], ["circle", { cx: "9", cy: "5", r: "1" }], ["circle", { cx: "9", cy: "19", r: "1" }], ["circle", { cx: "15", cy: "12", r: "1" }], ["circle", { cx: "15", cy: "5", r: "1" }], ["circle", { cx: "15", cy: "19", r: "1" }]]];
  const z7 = ["svg", a, [["circle", { cx: "12", cy: "5", r: "1" }], ["circle", { cx: "19", cy: "5", r: "1" }], ["circle", { cx: "5", cy: "5", r: "1" }], ["circle", { cx: "12", cy: "12", r: "1" }], ["circle", { cx: "19", cy: "12", r: "1" }], ["circle", { cx: "5", cy: "12", r: "1" }], ["circle", { cx: "12", cy: "19", r: "1" }], ["circle", { cx: "19", cy: "19", r: "1" }], ["circle", { cx: "5", cy: "19", r: "1" }]]];
  const k7 = ["svg", a, [["path", { d: "M3 7V5c0-1.1.9-2 2-2h2" }], ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2" }], ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2" }], ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2" }], ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1" }], ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1" }]]];
  const B7 = ["svg", a, [["path", { d: "m11.9 12.1 4.514-4.514" }], ["path", { d: "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z" }], ["path", { d: "m6 16 2 2" }], ["path", { d: "M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z" }], ["circle", { cx: "11.5", cy: "12.5", r: ".5", fill: "currentColor" }]]];
  const D7 = ["svg", a, [["path", { d: "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" }], ["path", { d: "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" }], ["path", { d: "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025" }], ["path", { d: "m8.5 16.5-1-1" }]]];
  const F7 = ["svg", a, [["path", { d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" }], ["path", { d: "m18 15 4-4" }], ["path", { d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" }]]];
  const q7 = ["svg", a, [["path", { d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" }], ["path", { d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" }], ["path", { d: "m2 16 6 6" }], ["circle", { cx: "16", cy: "9", r: "2.9" }], ["circle", { cx: "6", cy: "5", r: "3" }]]];
  const R7 = ["svg", a, [["path", { d: "M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" }], ["path", { d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" }], ["path", { d: "m2 15 6 6" }], ["path", { d: "M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" }]]];
  const K1 = ["svg", a, [["path", { d: "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" }], ["path", { d: "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" }], ["path", { d: "m2 13 6 6" }]]];
  const b7 = ["svg", a, [["path", { d: "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }], ["path", { d: "M14 11V9a2 2 0 1 0-4 0v2" }], ["path", { d: "M10 10.5V5a2 2 0 1 0-4 0v9" }], ["path", { d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" }]]];
  const T7 = ["svg", a, [["path", { d: "M12 3V2" }], ["path", { d: "m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5" }], ["path", { d: "M2 14h12a2 2 0 0 1 0 4h-2" }], ["path", { d: "M4 10h16" }], ["path", { d: "M5 10a7 7 0 0 1 14 0" }], ["path", { d: "M5 14v6a1 1 0 0 1-1 1H2" }]]];
  const U7 = ["svg", a, [["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }], ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }], ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" }], ["path", { d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" }]]];
  const O7 = ["svg", a, [["path", { d: "m11 17 2 2a1 1 0 1 0 3-3" }], ["path", { d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" }], ["path", { d: "m21 3 1 11h-2" }], ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" }], ["path", { d: "M3 4h8" }]]];
  const I7 = ["svg", a, [["path", { d: "M12 2v8" }], ["path", { d: "m16 6-4 4-4-4" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }], ["path", { d: "M6 18h.01" }], ["path", { d: "M10 18h.01" }]]];
  const E7 = ["svg", a, [["path", { d: "m16 6-4-4-4 4" }], ["path", { d: "M12 2v8" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }], ["path", { d: "M6 18h.01" }], ["path", { d: "M10 18h.01" }]]];
  const G7 = ["svg", a, [["line", { x1: "22", x2: "2", y1: "12", y2: "12" }], ["path", { d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }], ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16" }], ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16" }]]];
  const W7 = ["svg", a, [["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" }], ["path", { d: "M14 6a6 6 0 0 1 6 6v3" }], ["path", { d: "M4 15v-3a6 6 0 0 1 6-6" }], ["rect", { x: "2", y: "15", width: "20", height: "4", rx: "1" }]]];
  const X7 = ["svg", a, [["line", { x1: "4", x2: "20", y1: "9", y2: "9" }], ["line", { x1: "4", x2: "20", y1: "15", y2: "15" }], ["line", { x1: "10", x2: "8", y1: "3", y2: "21" }], ["line", { x1: "16", x2: "14", y1: "3", y2: "21" }]]];
  const N7 = ["svg", a, [["path", { d: "m5.2 6.2 1.4 1.4" }], ["path", { d: "M2 13h2" }], ["path", { d: "M20 13h2" }], ["path", { d: "m17.4 7.6 1.4-1.4" }], ["path", { d: "M22 17H2" }], ["path", { d: "M22 21H2" }], ["path", { d: "M16 13a4 4 0 0 0-8 0" }], ["path", { d: "M12 5V2.5" }]]];
  const K7 = ["svg", a, [["path", { d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z" }], ["path", { d: "M7.5 12h9" }]]];
  const $7 = ["svg", a, [["path", { d: "M4 12h8" }], ["path", { d: "M4 18V6" }], ["path", { d: "M12 18V6" }], ["path", { d: "m17 12 3-2v8" }]]];
  const J7 = ["svg", a, [["path", { d: "M4 12h8" }], ["path", { d: "M4 18V6" }], ["path", { d: "M12 18V6" }], ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" }]]];
  const j7 = ["svg", a, [["path", { d: "M4 12h8" }], ["path", { d: "M4 18V6" }], ["path", { d: "M12 18V6" }], ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" }], ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" }]]];
  const Q7 = ["svg", a, [["path", { d: "M12 18V6" }], ["path", { d: "M17 10v3a1 1 0 0 0 1 1h3" }], ["path", { d: "M21 10v8" }], ["path", { d: "M4 12h8" }], ["path", { d: "M4 18V6" }]]];
  const _7 = ["svg", a, [["path", { d: "M4 12h8" }], ["path", { d: "M4 18V6" }], ["path", { d: "M12 18V6" }], ["path", { d: "M17 13v-3h4" }], ["path", { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" }]]];
  const Y7 = ["svg", a, [["path", { d: "M4 12h8" }], ["path", { d: "M4 18V6" }], ["path", { d: "M12 18V6" }], ["circle", { cx: "19", cy: "16", r: "2" }], ["path", { d: "M20 10c-2 2-3 3.5-3 6" }]]];
  const aM = ["svg", a, [["path", { d: "M6 12h12" }], ["path", { d: "M6 20V4" }], ["path", { d: "M18 20V4" }]]];
  const tM = ["svg", a, [["path", { d: "M21 14h-1.343" }], ["path", { d: "M9.128 3.47A9 9 0 0 1 21 12v3.343" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" }], ["path", { d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" }]]];
  const hM = ["svg", a, [["path", { d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" }]]];
  const dM = ["svg", a, [["path", { d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" }], ["path", { d: "M21 16v2a4 4 0 0 1-4 4h-5" }]]];
  const pM = ["svg", a, [["path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }], ["path", { d: "m12 13-1-1 2-2-3-3 2-2" }]]];
  const cM = ["svg", a, [["path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }], ["path", { d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" }], ["path", { d: "m18 15-2-2" }], ["path", { d: "m15 18-2-2" }]]];
  const MM = ["svg", a, [["line", { x1: "2", y1: "2", x2: "22", y2: "22" }], ["path", { d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35" }], ["path", { d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17" }]]];
  const sM = ["svg", a, [["path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }], ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" }]]];
  const eM = ["svg", a, [["path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }]]];
  const rM = ["svg", a, [["path", { d: "M11 8c2-3-2-3 0-6" }], ["path", { d: "M15.5 8c2-3-2-3 0-6" }], ["path", { d: "M6 10h.01" }], ["path", { d: "M6 14h.01" }], ["path", { d: "M10 16v-4" }], ["path", { d: "M14 16v-4" }], ["path", { d: "M18 16v-4" }], ["path", { d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" }], ["path", { d: "M5 20v2" }], ["path", { d: "M19 20v2" }]]];
  const vM = ["svg", a, [["path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }]]];
  const oM = ["svg", a, [["path", { d: "m9 11-6 6v3h9l3-3" }], ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" }]]];
  const nM = ["svg", a, [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }], ["path", { d: "M3 3v5h5" }], ["path", { d: "M12 7v5l4 2" }]]];
  const iM = ["svg", a, [["path", { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27" }], ["path", { d: "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28" }], ["path", { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26" }], ["path", { d: "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25" }], ["path", { d: "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75" }], ["path", { d: "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24" }], ["path", { d: "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28" }], ["path", { d: "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05" }], ["path", { d: "m2 2 20 20" }]]];
  const lM = ["svg", a, [["path", { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18" }], ["path", { d: "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88" }], ["path", { d: "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36" }], ["path", { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87" }], ["path", { d: "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08" }], ["path", { d: "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57" }], ["path", { d: "M4.93 4.93 3 3a.7.7 0 0 1 0-1" }], ["path", { d: "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15" }]]];
  const gM = ["svg", a, [["path", { d: "M12 6v4" }], ["path", { d: "M14 14h-4" }], ["path", { d: "M14 18h-4" }], ["path", { d: "M14 8h-4" }], ["path", { d: "M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" }], ["path", { d: "M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" }]]];
  const xM = ["svg", a, [["path", { d: "M10 22v-6.57" }], ["path", { d: "M12 11h.01" }], ["path", { d: "M12 7h.01" }], ["path", { d: "M14 15.43V22" }], ["path", { d: "M15 16a5 5 0 0 0-6 0" }], ["path", { d: "M16 11h.01" }], ["path", { d: "M16 7h.01" }], ["path", { d: "M8 11h.01" }], ["path", { d: "M8 7h.01" }], ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }]]];
  const yM = ["svg", a, [["path", { d: "M5 22h14" }], ["path", { d: "M5 2h14" }], ["path", { d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" }], ["path", { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" }]]];
  const mM = ["svg", a, [["path", { d: "M10 12V8.964" }], ["path", { d: "M14 12V8.964" }], ["path", { d: "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" }], ["path", { d: "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2" }]]];
  const HM = ["svg", a, [["path", { d: "M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354" }], ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }], ["path", { d: "M15 6h6" }], ["path", { d: "M18 3v6" }]]];
  const $1 = ["svg", a, [["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }], ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }]]];
  const J1 = ["svg", a, [["path", { d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" }], ["path", { d: "M12.14 11a3.5 3.5 0 1 1 6.71 0" }], ["path", { d: "M15.5 6.5a3.5 3.5 0 1 0-7 0" }]]];
  const j1 = ["svg", a, [["path", { d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" }], ["path", { d: "M17 7A5 5 0 0 0 7 7" }], ["path", { d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" }]]];
  const VM = ["svg", a, [["path", { d: "M16 10h2" }], ["path", { d: "M16 14h2" }], ["path", { d: "M6.17 15a3 3 0 0 1 5.66 0" }], ["circle", { cx: "9", cy: "11", r: "2" }], ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }]]];
  const CM = ["svg", a, [["path", { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" }], ["path", { d: "m14 19 3 3v-5.5" }], ["path", { d: "m17 22 3-3" }], ["circle", { cx: "9", cy: "9", r: "2" }]]];
  const uM = ["svg", a, [["path", { d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }], ["line", { x1: "16", x2: "22", y1: "5", y2: "5" }], ["circle", { cx: "9", cy: "9", r: "2" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]]];
  const wM = ["svg", a, [["line", { x1: "2", x2: "22", y1: "2", y2: "22" }], ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83" }], ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21" }], ["line", { x1: "18", x2: "21", y1: "12", y2: "15" }], ["path", { d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" }], ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9" }]]];
  const AM = ["svg", a, [["path", { d: "m11 16-5 5" }], ["path", { d: "M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5" }], ["path", { d: "M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z" }], ["circle", { cx: "9", cy: "9", r: "2" }]]];
  const LM = ["svg", a, [["path", { d: "M16 5h6" }], ["path", { d: "M19 2v6" }], ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }], ["circle", { cx: "9", cy: "9", r: "2" }]]];
  const SM = ["svg", a, [["path", { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" }], ["path", { d: "m14 19.5 3-3 3 3" }], ["path", { d: "M17 22v-5.5" }], ["circle", { cx: "9", cy: "9", r: "2" }]]];
  const fM = ["svg", a, [["path", { d: "M16 3h5v5" }], ["path", { d: "M17 21h2a2 2 0 0 0 2-2" }], ["path", { d: "M21 12v3" }], ["path", { d: "m21 3-5 5" }], ["path", { d: "M3 7V5a2 2 0 0 1 2-2" }], ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" }], ["path", { d: "M9 3h3" }], ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1" }]]];
  const PM = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["circle", { cx: "9", cy: "9", r: "2" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]]];
  const ZM = ["svg", a, [["path", { d: "M18 22H4a2 2 0 0 1-2-2V6" }], ["path", { d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" }], ["circle", { cx: "12", cy: "8", r: "2" }], ["rect", { width: "16", height: "16", x: "6", y: "2", rx: "2" }]]];
  const zM = ["svg", a, [["path", { d: "M12 3v12" }], ["path", { d: "m8 11 4 4 4-4" }], ["path", { d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" }]]];
  const kM = ["svg", a, [["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12" }], ["path", { d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }]]];
  const Q1 = ["svg", a, [["path", { d: "M21 12H11" }], ["path", { d: "M21 18H11" }], ["path", { d: "M21 6H11" }], ["path", { d: "m7 8-4 4 4 4" }]]];
  const _1 = ["svg", a, [["path", { d: "M21 12H11" }], ["path", { d: "M21 18H11" }], ["path", { d: "M21 6H11" }], ["path", { d: "m3 8 4 4-4 4" }]]];
  const BM = ["svg", a, [["path", { d: "M6 3h12" }], ["path", { d: "M6 8h12" }], ["path", { d: "m6 13 8.5 8" }], ["path", { d: "M6 13h3" }], ["path", { d: "M9 13c6.667 0 6.667-10 0-10" }]]];
  const DM = ["svg", a, [["path", { d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" }]]];
  const FM = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 16v-4" }], ["path", { d: "M12 8h.01" }]]];
  const qM = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M7 7h.01" }], ["path", { d: "M17 7h.01" }], ["path", { d: "M7 17h.01" }], ["path", { d: "M17 17h.01" }]]];
  const RM = ["svg", a, [["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }], ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }], ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" }]]];
  const bM = ["svg", a, [["line", { x1: "19", x2: "10", y1: "4", y2: "4" }], ["line", { x1: "14", x2: "5", y1: "20", y2: "20" }], ["line", { x1: "15", x2: "9", y1: "4", y2: "20" }]]];
  const TM = ["svg", a, [["path", { d: "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8" }], ["polyline", { points: "16 14 20 18 16 22" }]]];
  const UM = ["svg", a, [["path", { d: "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4" }], ["polyline", { points: "8 22 4 18 8 14" }]]];
  const OM = ["svg", a, [["path", { d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3" }], ["path", { d: "M6 15h12" }], ["path", { d: "M6 11h12" }]]];
  const IM = ["svg", a, [["path", { d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" }], ["path", { d: "M6 15v-2" }], ["path", { d: "M12 15V9" }], ["circle", { cx: "12", cy: "6", r: "3" }]]];
  const EM = ["svg", a, [["path", { d: "M6 5v11" }], ["path", { d: "M12 5v6" }], ["path", { d: "M18 5v14" }]]];
  const GM = ["svg", a, [["path", { d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" }], ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor" }]]];
  const WM = ["svg", a, [["path", { d: "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z" }], ["path", { d: "m14 7 3 3" }], ["path", { d: "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814" }]]];
  const XM = ["svg", a, [["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" }], ["path", { d: "m21 2-9.6 9.6" }], ["circle", { cx: "7.5", cy: "15.5", r: "5.5" }]]];
  const NM = ["svg", a, [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["path", { d: "M6 8h4" }], ["path", { d: "M14 8h.01" }], ["path", { d: "M18 8h.01" }], ["path", { d: "M2 12h20" }], ["path", { d: "M6 12v4" }], ["path", { d: "M10 12v4" }], ["path", { d: "M14 12v4" }], ["path", { d: "M18 12v4" }]]];
  const KM = ["svg", a, [["path", { d: "M 20 4 A2 2 0 0 1 22 6" }], ["path", { d: "M 22 6 L 22 16.41" }], ["path", { d: "M 7 16 L 16 16" }], ["path", { d: "M 9.69 4 L 20 4" }], ["path", { d: "M14 8h.01" }], ["path", { d: "M18 8h.01" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" }], ["path", { d: "M6 8h.01" }], ["path", { d: "M8 12h.01" }]]];
  const $M = ["svg", a, [["path", { d: "M10 8h.01" }], ["path", { d: "M12 12h.01" }], ["path", { d: "M14 8h.01" }], ["path", { d: "M16 12h.01" }], ["path", { d: "M18 8h.01" }], ["path", { d: "M6 8h.01" }], ["path", { d: "M7 16h10" }], ["path", { d: "M8 12h.01" }], ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }]]];
  const JM = ["svg", a, [["path", { d: "M12 2v5" }], ["path", { d: "M6 7h12l4 9H2l4-9Z" }], ["path", { d: "M9.17 16a3 3 0 1 0 5.66 0" }]]];
  const jM = ["svg", a, [["path", { d: "m14 5-3 3 2 7 8-8-7-2Z" }], ["path", { d: "m14 5-3 3-3-3 3-3 3 3Z" }], ["path", { d: "M9.5 6.5 4 12l3 6" }], ["path", { d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z" }]]];
  const QM = ["svg", a, [["path", { d: "M9 2h6l3 7H6l3-7Z" }], ["path", { d: "M12 9v13" }], ["path", { d: "M9 22h6" }]]];
  const _M = ["svg", a, [["path", { d: "M11 13h6l3 7H8l3-7Z" }], ["path", { d: "M14 13V8a2 2 0 0 0-2-2H8" }], ["path", { d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z" }]]];
  const YM = ["svg", a, [["path", { d: "M11 4h6l3 7H8l3-7Z" }], ["path", { d: "M14 11v5a2 2 0 0 1-2 2H8" }], ["path", { d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z" }]]];
  const as = ["svg", a, [["path", { d: "M8 2h8l4 10H4L8 2Z" }], ["path", { d: "M12 12v6" }], ["path", { d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z" }]]];
  const ts = ["svg", a, [["path", { d: "m12 8 6-3-6-3v10" }], ["path", { d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" }], ["path", { d: "m6.49 12.85 11.02 6.3" }], ["path", { d: "M17.51 12.85 6.5 19.15" }]]];
  const hs = ["svg", a, [["line", { x1: "3", x2: "21", y1: "22", y2: "22" }], ["line", { x1: "6", x2: "6", y1: "18", y2: "11" }], ["line", { x1: "10", x2: "10", y1: "18", y2: "11" }], ["line", { x1: "14", x2: "14", y1: "18", y2: "11" }], ["line", { x1: "18", x2: "18", y1: "18", y2: "11" }], ["polygon", { points: "12 2 20 7 4 7" }]]];
  const ds = ["svg", a, [["path", { d: "m5 8 6 6" }], ["path", { d: "m4 14 6-6 2-3" }], ["path", { d: "M2 5h12" }], ["path", { d: "M7 2h1" }], ["path", { d: "m22 22-5-10-5 10" }], ["path", { d: "M14 18h6" }]]];
  const ps = ["svg", a, [["path", { d: "M2 20h20" }], ["path", { d: "m9 10 2 2 4-4" }], ["rect", { x: "3", y: "4", width: "18", height: "12", rx: "2" }]]];
  const Y1 = ["svg", a, [["rect", { width: "18", height: "12", x: "3", y: "4", rx: "2", ry: "2" }], ["line", { x1: "2", x2: "22", y1: "20", y2: "20" }]]];
  const cs = ["svg", a, [["path", { d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" }]]];
  const Ms = ["svg", a, [["path", { d: "M7 22a5 5 0 0 1-2-4" }], ["path", { d: "M7 16.93c.96.43 1.96.74 2.99.91" }], ["path", { d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" }], ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }], ["path", { d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z" }]]];
  const ss = ["svg", a, [["path", { d: "M7 22a5 5 0 0 1-2-4" }], ["path", { d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1" }], ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }]]];
  const es = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" }], ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }], ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]]];
  const rs = ["svg", a, [["path", { d: "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12" }], ["path", { d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z" }]]];
  const a2 = ["svg", a, [["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" }], ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }], ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" }]]];
  const vs = ["svg", a, [["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1" }], ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1" }], ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1" }], ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1" }]]];
  const os = ["svg", a, [["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }], ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }]]];
  const ns = ["svg", a, [["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }], ["path", { d: "M14 4h7" }], ["path", { d: "M14 9h7" }], ["path", { d: "M14 15h7" }], ["path", { d: "M14 20h7" }]]];
  const is = ["svg", a, [["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1" }], ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }]]];
  const ls = ["svg", a, [["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }]]];
  const gs = ["svg", a, [["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }], ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1" }], ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1" }]]];
  const xs = ["svg", a, [["path", { d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" }], ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" }]]];
  const ys = ["svg", a, [["path", { d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22" }], ["path", { d: "M2 22 17 7" }]]];
  const ms = ["svg", a, [["path", { d: "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3" }], ["path", { d: "M18 6V3a1 1 0 0 0-1-1h-3" }], ["rect", { width: "8", height: "12", x: "8", y: "10", rx: "1" }]]];
  const Hs = ["svg", a, [["path", { d: "M15 12h6" }], ["path", { d: "M15 6h6" }], ["path", { d: "m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13" }], ["path", { d: "M3 18h18" }], ["path", { d: "M4 11h6" }]]];
  const Vs = ["svg", a, [["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1" }], ["path", { d: "M7 3v18" }], ["path", { d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" }]]];
  const Cs = ["svg", a, [["path", { d: "m16 6 4 14" }], ["path", { d: "M12 6v14" }], ["path", { d: "M8 8v12" }], ["path", { d: "M4 4v16" }]]];
  const us = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m4.93 4.93 4.24 4.24" }], ["path", { d: "m14.83 9.17 4.24-4.24" }], ["path", { d: "m14.83 14.83 4.24 4.24" }], ["path", { d: "m9.17 14.83-4.24 4.24" }], ["circle", { cx: "12", cy: "12", r: "4" }]]];
  const ws = ["svg", a, [["path", { d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2" }], ["path", { d: "M6 12h4" }], ["path", { d: "M14 12h2v8" }], ["path", { d: "M6 20h4" }], ["path", { d: "M14 20h4" }]]];
  const As = ["svg", a, [["path", { d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" }], ["path", { d: "M9 18h6" }], ["path", { d: "M10 22h4" }]]];
  const Ls = ["svg", a, [["path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" }], ["path", { d: "M9 18h6" }], ["path", { d: "M10 22h4" }]]];
  const Ss = ["svg", a, [["path", { d: "M9 17H7A5 5 0 0 1 7 7" }], ["path", { d: "M15 7h2a5 5 0 0 1 4 8" }], ["line", { x1: "8", x2: "12", y1: "12", y2: "12" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const fs = ["svg", a, [["path", { d: "M9 17H7A5 5 0 0 1 7 7h2" }], ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]]];
  const Ps = ["svg", a, [["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }], ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }]]];
  const Zs = ["svg", a, [["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }], ["rect", { width: "4", height: "12", x: "2", y: "9" }], ["circle", { cx: "4", cy: "4", r: "2" }]]];
  const zs = ["svg", a, [["path", { d: "M11 18H3" }], ["path", { d: "m15 18 2 2 4-4" }], ["path", { d: "M16 12H3" }], ["path", { d: "M16 6H3" }]]];
  const ks = ["svg", a, [["path", { d: "m3 17 2 2 4-4" }], ["path", { d: "m3 7 2 2 4-4" }], ["path", { d: "M13 6h8" }], ["path", { d: "M13 12h8" }], ["path", { d: "M13 18h8" }]]];
  const Bs = ["svg", a, [["path", { d: "m3 10 2.5-2.5L3 5" }], ["path", { d: "m3 19 2.5-2.5L3 14" }], ["path", { d: "M10 6h11" }], ["path", { d: "M10 12h11" }], ["path", { d: "M10 18h11" }]]];
  const Ds = ["svg", a, [["path", { d: "M16 12H3" }], ["path", { d: "M16 6H3" }], ["path", { d: "M10 18H3" }], ["path", { d: "M21 6v10a2 2 0 0 1-2 2h-5" }], ["path", { d: "m16 16-2 2 2 2" }]]];
  const Fs = ["svg", a, [["path", { d: "M10 18h4" }], ["path", { d: "M11 6H3" }], ["path", { d: "M15 6h6" }], ["path", { d: "M18 9V3" }], ["path", { d: "M7 12h8" }]]];
  const qs = ["svg", a, [["path", { d: "M3 6h18" }], ["path", { d: "M7 12h10" }], ["path", { d: "M10 18h4" }]]];
  const Rs = ["svg", a, [["path", { d: "M11 12H3" }], ["path", { d: "M16 6H3" }], ["path", { d: "M16 18H3" }], ["path", { d: "M21 12h-6" }]]];
  const bs = ["svg", a, [["path", { d: "M21 15V6" }], ["path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }], ["path", { d: "M12 12H3" }], ["path", { d: "M16 6H3" }], ["path", { d: "M12 18H3" }]]];
  const Ts = ["svg", a, [["path", { d: "M10 12h11" }], ["path", { d: "M10 18h11" }], ["path", { d: "M10 6h11" }], ["path", { d: "M4 10h2" }], ["path", { d: "M4 6h1v4" }], ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" }]]];
  const Us = ["svg", a, [["path", { d: "M11 12H3" }], ["path", { d: "M16 6H3" }], ["path", { d: "M16 18H3" }], ["path", { d: "M18 9v6" }], ["path", { d: "M21 12h-6" }]]];
  const Os = ["svg", a, [["path", { d: "M21 6H3" }], ["path", { d: "M7 12H3" }], ["path", { d: "M7 18H3" }], ["path", { d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" }], ["path", { d: "M11 10v4h4" }]]];
  const Is = ["svg", a, [["path", { d: "M16 12H3" }], ["path", { d: "M16 18H3" }], ["path", { d: "M10 6H3" }], ["path", { d: "M21 18V8a2 2 0 0 0-2-2h-5" }], ["path", { d: "m16 8-2-2 2-2" }]]];
  const Es = ["svg", a, [["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1" }], ["path", { d: "m3 17 2 2 4-4" }], ["path", { d: "M13 6h8" }], ["path", { d: "M13 12h8" }], ["path", { d: "M13 18h8" }]]];
  const Gs = ["svg", a, [["path", { d: "M21 12h-8" }], ["path", { d: "M21 6H8" }], ["path", { d: "M21 18h-8" }], ["path", { d: "M3 6v4c0 1.1.9 2 2 2h3" }], ["path", { d: "M3 10v6c0 1.1.9 2 2 2h3" }]]];
  const Ws = ["svg", a, [["path", { d: "M12 12H3" }], ["path", { d: "M16 6H3" }], ["path", { d: "M12 18H3" }], ["path", { d: "m16 12 5 3-5 3v-6Z" }]]];
  const Xs = ["svg", a, [["path", { d: "M11 12H3" }], ["path", { d: "M16 6H3" }], ["path", { d: "M16 18H3" }], ["path", { d: "m19 10-4 4" }], ["path", { d: "m15 10 4 4" }]]];
  const Ns = ["svg", a, [["path", { d: "M3 12h.01" }], ["path", { d: "M3 18h.01" }], ["path", { d: "M3 6h.01" }], ["path", { d: "M8 12h13" }], ["path", { d: "M8 18h13" }], ["path", { d: "M8 6h13" }]]];
  const t2 = ["svg", a, [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }]]];
  const Ks = ["svg", a, [["path", { d: "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" }], ["path", { d: "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" }], ["path", { d: "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" }], ["circle", { cx: "12", cy: "12", r: "10" }]]];
  const $s = ["svg", a, [["path", { d: "M12 2v4" }], ["path", { d: "m16.2 7.8 2.9-2.9" }], ["path", { d: "M18 12h4" }], ["path", { d: "m16.2 16.2 2.9 2.9" }], ["path", { d: "M12 18v4" }], ["path", { d: "m4.9 19.1 2.9-2.9" }], ["path", { d: "M2 12h4" }], ["path", { d: "m4.9 4.9 2.9 2.9" }]]];
  const Js = ["svg", a, [["line", { x1: "2", x2: "5", y1: "12", y2: "12" }], ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }], ["circle", { cx: "12", cy: "12", r: "7" }], ["circle", { cx: "12", cy: "12", r: "3" }]]];
  const js = ["svg", a, [["line", { x1: "2", x2: "5", y1: "12", y2: "12" }], ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }], ["path", { d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11" }], ["path", { d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const Qs = ["svg", a, [["line", { x1: "2", x2: "5", y1: "12", y2: "12" }], ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }], ["circle", { cx: "12", cy: "12", r: "7" }]]];
  const h2 = ["svg", a, [["circle", { cx: "12", cy: "16", r: "1" }], ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }], ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5" }]]];
  const _s = ["svg", a, [["circle", { cx: "12", cy: "16", r: "1" }], ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2" }], ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3" }]]];
  const d2 = ["svg", a, [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }], ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1" }]]];
  const Ys = ["svg", a, [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }]]];
  const ae = ["svg", a, [["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }], ["polyline", { points: "10 17 15 12 10 7" }], ["line", { x1: "15", x2: "3", y1: "12", y2: "12" }]]];
  const te = ["svg", a, [["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }], ["polyline", { points: "16 17 21 12 16 7" }], ["line", { x1: "21", x2: "9", y1: "12", y2: "12" }]]];
  const he = ["svg", a, [["path", { d: "M13 12h8" }], ["path", { d: "M13 18h8" }], ["path", { d: "M13 6h8" }], ["path", { d: "M3 12h1" }], ["path", { d: "M3 18h1" }], ["path", { d: "M3 6h1" }], ["path", { d: "M8 12h1" }], ["path", { d: "M8 18h1" }], ["path", { d: "M8 6h1" }]]];
  const de = ["svg", a, [["circle", { cx: "11", cy: "11", r: "8" }], ["path", { d: "m21 21-4.3-4.3" }], ["path", { d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" }]]];
  const pe = ["svg", a, [["path", { d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" }], ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" }], ["path", { d: "M10 20h4" }], ["circle", { cx: "16", cy: "20", r: "2" }], ["circle", { cx: "8", cy: "20", r: "2" }]]];
  const ce = ["svg", a, [["path", { d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15" }], ["path", { d: "m5 8 4 4" }], ["path", { d: "m12 15 4 4" }]]];
  const Me = ["svg", a, [["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { d: "m16 19 2 2 4-4" }]]];
  const se = ["svg", a, [["path", { d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { d: "M16 19h6" }]]];
  const ee = ["svg", a, [["path", { d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" }], ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" }]]];
  const re = ["svg", a, [["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { d: "M19 16v6" }], ["path", { d: "M16 19h6" }]]];
  const ve = ["svg", a, [["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" }], ["path", { d: "M20 22v.01" }]]];
  const oe = ["svg", a, [["path", { d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }], ["circle", { cx: "18", cy: "18", r: "3" }], ["path", { d: "m22 22-1.5-1.5" }]]];
  const ne = ["svg", a, [["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { d: "M20 14v4" }], ["path", { d: "M20 22v.01" }]]];
  const ie = ["svg", a, [["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { d: "m17 17 4 4" }], ["path", { d: "m21 17-4 4" }]]];
  const le = ["svg", a, [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }]]];
  const ge = ["svg", a, [["path", { d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" }], ["polyline", { points: "15,9 18,9 18,11" }], ["path", { d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" }], ["line", { x1: "6", x2: "7", y1: "10", y2: "10" }]]];
  const xe = ["svg", a, [["rect", { width: "16", height: "13", x: "6", y: "4", rx: "2" }], ["path", { d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" }], ["path", { d: "M2 8v11c0 1.1.9 2 2 2h14" }]]];
  const ye = ["svg", a, [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["path", { d: "m9 10 2 2 4-4" }]]];
  const me = ["svg", a, [["path", { d: "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "m16 18 2 2 4-4" }]]];
  const He = ["svg", a, [["path", { d: "M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" }], ["path", { d: "M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" }], ["path", { d: "M18 22v-3" }], ["circle", { cx: "10", cy: "10", r: "3" }]]];
  const Ve = ["svg", a, [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["path", { d: "M9 10h6" }]]];
  const Ce = ["svg", a, [["path", { d: "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "M16 18h6" }]]];
  const ue = ["svg", a, [["path", { d: "M12.75 7.09a3 3 0 0 1 2.16 2.16" }], ["path", { d: "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533" }], ["path", { d: "M9.13 9.13a3 3 0 0 0 3.74 3.74" }]]];
  const we = ["svg", a, [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["path", { d: "M12 7v6" }], ["path", { d: "M9 10h6" }]]];
  const Ae = ["svg", a, [["path", { d: "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "M16 18h6" }], ["path", { d: "M19 15v6" }]]];
  const Le = ["svg", a, [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["path", { d: "m14.5 7.5-5 5" }], ["path", { d: "m9.5 7.5 5 5" }]]];
  const Se = ["svg", a, [["path", { d: "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "m21.5 15.5-5 5" }], ["path", { d: "m21.5 20.5-5-5" }]]];
  const fe = ["svg", a, [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["circle", { cx: "12", cy: "10", r: "3" }]]];
  const Pe = ["svg", a, [["path", { d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" }], ["circle", { cx: "12", cy: "8", r: "2" }], ["path", { d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" }]]];
  const Ze = ["svg", a, [["path", { d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" }], ["path", { d: "M15 5.764v15" }], ["path", { d: "M9 3.236v15" }]]];
  const ze = ["svg", a, [["path", { d: "M8 22h8" }], ["path", { d: "M12 11v11" }], ["path", { d: "m19 3-7 8-7-8Z" }]]];
  const ke = ["svg", a, [["polyline", { points: "15 3 21 3 21 9" }], ["polyline", { points: "9 21 3 21 3 15" }], ["line", { x1: "21", x2: "14", y1: "3", y2: "10" }], ["line", { x1: "3", x2: "10", y1: "21", y2: "14" }]]];
  const Be = ["svg", a, [["path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }], ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }], ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }], ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" }]]];
  const De = ["svg", a, [["path", { d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" }], ["path", { d: "M11 12 5.12 2.2" }], ["path", { d: "m13 12 5.88-9.8" }], ["path", { d: "M8 7h8" }], ["circle", { cx: "12", cy: "17", r: "5" }], ["path", { d: "M12 18v-2h-.5" }]]];
  const Fe = ["svg", a, [["path", { d: "M9.26 9.26 3 11v3l14.14 3.14" }], ["path", { d: "M21 15.34V6l-7.31 2.03" }], ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const qe = ["svg", a, [["path", { d: "m3 11 18-5v12L3 14v-3z" }], ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" }]]];
  const Re = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["line", { x1: "8", x2: "16", y1: "15", y2: "15" }], ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }], ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]]];
  const be = ["svg", a, [["path", { d: "M6 19v-3" }], ["path", { d: "M10 19v-3" }], ["path", { d: "M14 19v-3" }], ["path", { d: "M18 19v-3" }], ["path", { d: "M8 11V9" }], ["path", { d: "M16 11V9" }], ["path", { d: "M12 11V9" }], ["path", { d: "M2 15h20" }], ["path", { d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z" }]]];
  const Te = ["svg", a, [["line", { x1: "4", x2: "20", y1: "12", y2: "12" }], ["line", { x1: "4", x2: "20", y1: "6", y2: "6" }], ["line", { x1: "4", x2: "20", y1: "18", y2: "18" }]]];
  const Ue = ["svg", a, [["path", { d: "m8 6 4-4 4 4" }], ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" }], ["path", { d: "m20 22-5-5" }]]];
  const Oe = ["svg", a, [["path", { d: "M10 9.5 8 12l2 2.5" }], ["path", { d: "m14 9.5 2 2.5-2 2.5" }], ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22z" }]]];
  const Ie = ["svg", a, [["path", { d: "M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1" }], ["path", { d: "M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1" }], ["path", { d: "M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5" }], ["path", { d: "M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1" }], ["path", { d: "M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1" }], ["path", { d: "M3.5 17.5 2 22l4.5-1.5" }], ["path", { d: "M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5" }], ["path", { d: "M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1" }]]];
  const Ee = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }], ["path", { d: "M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7" }]]];
  const Ge = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }], ["path", { d: "M8 12h.01" }], ["path", { d: "M12 12h.01" }], ["path", { d: "M16 12h.01" }]]];
  const We = ["svg", a, [["path", { d: "M20.5 14.9A9 9 0 0 0 9.1 3.5" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7" }]]];
  const Xe = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }], ["path", { d: "M8 12h8" }], ["path", { d: "M12 8v8" }]]];
  const Ne = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }], ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }], ["path", { d: "M12 17h.01" }]]];
  const Ke = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }], ["path", { d: "m10 15-3-3 3-3" }], ["path", { d: "M7 12h7a2 2 0 0 1 2 2v1" }]]];
  const $e = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }], ["path", { d: "M12 8v4" }], ["path", { d: "M12 16h.01" }]]];
  const Je = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }], ["path", { d: "m15 9-6 6" }], ["path", { d: "m9 9 6 6" }]]];
  const je = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }]]];
  const Qe = ["svg", a, [["path", { d: "M10 7.5 8 10l2 2.5" }], ["path", { d: "m14 7.5 2 2.5-2 2.5" }], ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }]]];
  const _e = ["svg", a, [["path", { d: "M10 17H7l-4 4v-7" }], ["path", { d: "M14 17h1" }], ["path", { d: "M14 3h1" }], ["path", { d: "M19 3a2 2 0 0 1 2 2" }], ["path", { d: "M21 14v1a2 2 0 0 1-2 2" }], ["path", { d: "M21 9v1" }], ["path", { d: "M3 9v1" }], ["path", { d: "M5 3a2 2 0 0 0-2 2" }], ["path", { d: "M9 3h1" }]]];
  const Ye = ["svg", a, [["path", { d: "m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" }], ["path", { d: "M9 10h6" }], ["path", { d: "M12 7v6" }], ["path", { d: "M9 17h6" }]]];
  const a9 = ["svg", a, [["path", { d: "M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7" }], ["circle", { cx: "18", cy: "6", r: "3" }]]];
  const t9 = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8" }]]];
  const h9 = ["svg", a, [["path", { d: "M19 15v-2a2 2 0 1 0-4 0v2" }], ["path", { d: "M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5" }], ["rect", { x: "13", y: "15", width: "8", height: "5", rx: "1" }]]];
  const d9 = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "M8 10h.01" }], ["path", { d: "M12 10h.01" }], ["path", { d: "M16 10h.01" }]]];
  const p9 = ["svg", a, [["path", { d: "M21 15V5a2 2 0 0 0-2-2H9" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10" }]]];
  const c9 = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "M12 7v6" }], ["path", { d: "M9 10h6" }]]];
  const M9 = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "M8 12a2 2 0 0 0 2-2V8H8" }], ["path", { d: "M14 12a2 2 0 0 0 2-2V8h-2" }]]];
  const s9 = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "m10 7-3 3 3 3" }], ["path", { d: "M17 13v-1a2 2 0 0 0-2-2H7" }]]];
  const e9 = ["svg", a, [["path", { d: "M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7" }], ["path", { d: "M16 3h5v5" }], ["path", { d: "m16 8 5-5" }]]];
  const r9 = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "M13 8H7" }], ["path", { d: "M17 12H7" }]]];
  const v9 = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "M12 7v2" }], ["path", { d: "M12 13h.01" }]]];
  const o9 = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "m14.5 7.5-5 5" }], ["path", { d: "m9.5 7.5 5 5" }]]];
  const n9 = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }]]];
  const i9 = ["svg", a, [["path", { d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" }], ["path", { d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" }]]];
  const l9 = ["svg", a, [["line", { x1: "2", x2: "22", y1: "2", y2: "22" }], ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" }], ["path", { d: "M5 10v2a7 7 0 0 0 12 5" }], ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33" }], ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }]]];
  const p2 = ["svg", a, [["path", { d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" }], ["path", { d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5" }], ["circle", { cx: "16", cy: "7", r: "5" }]]];
  const g9 = ["svg", a, [["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }], ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }]]];
  const x9 = ["svg", a, [["path", { d: "M18 12h2" }], ["path", { d: "M18 16h2" }], ["path", { d: "M18 20h2" }], ["path", { d: "M18 4h2" }], ["path", { d: "M18 8h2" }], ["path", { d: "M4 12h2" }], ["path", { d: "M4 16h2" }], ["path", { d: "M4 20h2" }], ["path", { d: "M4 4h2" }], ["path", { d: "M4 8h2" }], ["path", { d: "M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z" }]]];
  const y9 = ["svg", a, [["path", { d: "M6 18h8" }], ["path", { d: "M3 22h18" }], ["path", { d: "M14 22a7 7 0 1 0 0-14h-1" }], ["path", { d: "M9 14h2" }], ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" }], ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }]]];
  const m9 = ["svg", a, [["rect", { width: "20", height: "15", x: "2", y: "4", rx: "2" }], ["rect", { width: "8", height: "7", x: "6", y: "8", rx: "1" }], ["path", { d: "M18 8v7" }], ["path", { d: "M6 19v2" }], ["path", { d: "M18 19v2" }]]];
  const H9 = ["svg", a, [["path", { d: "M12 13v8" }], ["path", { d: "M12 3v3" }], ["path", { d: "M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z" }]]];
  const V9 = ["svg", a, [["path", { d: "M8 2h8" }], ["path", { d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3" }], ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const C9 = ["svg", a, [["path", { d: "M8 2h8" }], ["path", { d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" }], ["path", { d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }]]];
  const u9 = ["svg", a, [["polyline", { points: "4 14 10 14 10 20" }], ["polyline", { points: "20 10 14 10 14 4" }], ["line", { x1: "14", x2: "21", y1: "10", y2: "3" }], ["line", { x1: "3", x2: "10", y1: "21", y2: "14" }]]];
  const w9 = ["svg", a, [["path", { d: "M8 3v3a2 2 0 0 1-2 2H3" }], ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3" }], ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3" }], ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3" }]]];
  const A9 = ["svg", a, [["path", { d: "M5 12h14" }]]];
  const L9 = ["svg", a, [["path", { d: "m9 10 2 2 4-4" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }], ["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }]]];
  const S9 = ["svg", a, [["path", { d: "M12 17v4" }], ["path", { d: "m15.2 4.9-.9-.4" }], ["path", { d: "m15.2 7.1-.9.4" }], ["path", { d: "m16.9 3.2-.4-.9" }], ["path", { d: "m16.9 8.8-.4.9" }], ["path", { d: "m19.5 2.3-.4.9" }], ["path", { d: "m19.5 9.7-.4-.9" }], ["path", { d: "m21.7 4.5-.9.4" }], ["path", { d: "m21.7 7.5-.9-.4" }], ["path", { d: "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }], ["path", { d: "M8 21h8" }], ["circle", { cx: "18", cy: "6", r: "3" }]]];
  const f9 = ["svg", a, [["circle", { cx: "19", cy: "6", r: "3" }], ["path", { d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" }], ["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }]]];
  const P9 = ["svg", a, [["path", { d: "M12 13V7" }], ["path", { d: "m15 10-3 3-3-3" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }], ["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }]]];
  const Z9 = ["svg", a, [["path", { d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" }], ["path", { d: "M22 15V5a2 2 0 0 0-2-2H9" }], ["path", { d: "M8 21h8" }], ["path", { d: "M12 17v4" }], ["path", { d: "m2 2 20 20" }]]];
  const z9 = ["svg", a, [["path", { d: "M10 13V7" }], ["path", { d: "M14 13V7" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }], ["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }]]];
  const k9 = ["svg", a, [["path", { d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" }], ["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }], ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }]]];
  const B9 = ["svg", a, [["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" }], ["path", { d: "M10 19v-3.96 3.15" }], ["path", { d: "M7 19h5" }], ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2" }]]];
  const D9 = ["svg", a, [["path", { d: "M5.5 20H8" }], ["path", { d: "M17 9h.01" }], ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2" }], ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" }], ["circle", { cx: "17", cy: "15", r: "1" }]]];
  const F9 = ["svg", a, [["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }], ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }], ["rect", { x: "9", y: "7", width: "6", height: "6", rx: "1" }]]];
  const q9 = ["svg", a, [["path", { d: "m9 10 3-3 3 3" }], ["path", { d: "M12 13V7" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }], ["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }]]];
  const R9 = ["svg", a, [["path", { d: "m14.5 12.5-5-5" }], ["path", { d: "m9.5 12.5 5-5" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }], ["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }]]];
  const b9 = ["svg", a, [["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }], ["line", { x1: "8", x2: "16", y1: "21", y2: "21" }], ["line", { x1: "12", x2: "12", y1: "17", y2: "21" }]]];
  const T9 = ["svg", a, [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" }], ["path", { d: "M20 3v4" }], ["path", { d: "M22 5h-4" }]]];
  const U9 = ["svg", a, [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }]]];
  const O9 = ["svg", a, [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }], ["path", { d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" }]]];
  const I9 = ["svg", a, [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }]]];
  const E9 = ["svg", a, [["path", { d: "M12 6v.343" }], ["path", { d: "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" }], ["path", { d: "M19 13.343V9A7 7 0 0 0 8.56 2.902" }], ["path", { d: "M22 22 2 2" }]]];
  const G9 = ["svg", a, [["path", { d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" }]]];
  const W9 = ["svg", a, [["path", { d: "M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z" }], ["circle", { cx: "16", cy: "16", r: "6" }], ["path", { d: "m11.8 11.8 8.4 8.4" }]]];
  const X9 = ["svg", a, [["path", { d: "M14 4.1 12 6" }], ["path", { d: "m5.1 8-2.9-.8" }], ["path", { d: "m6 12-1.9 2" }], ["path", { d: "M7.2 2.2 8 5.1" }], ["path", { d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" }]]];
  const N9 = ["svg", a, [["path", { d: "M12.586 12.586 19 19" }], ["path", { d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z" }]]];
  const K9 = ["svg", a, [["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7" }], ["path", { d: "M12 6v4" }]]];
  const c2 = ["svg", a, [["path", { d: "M5 3v16h16" }], ["path", { d: "m5 19 6-6" }], ["path", { d: "m2 6 3-3 3 3" }], ["path", { d: "m18 16 3 3-3 3" }]]];
  const $9 = ["svg", a, [["path", { d: "M19 13v6h-6" }], ["path", { d: "M5 11V5h6" }], ["path", { d: "m5 5 14 14" }]]];
  const J9 = ["svg", a, [["path", { d: "M11 19H5v-6" }], ["path", { d: "M13 5h6v6" }], ["path", { d: "M19 5 5 19" }]]];
  const j9 = ["svg", a, [["path", { d: "M11 19H5V13" }], ["path", { d: "M19 5L5 19" }]]];
  const Q9 = ["svg", a, [["path", { d: "M19 13V19H13" }], ["path", { d: "M5 5L19 19" }]]];
  const _9 = ["svg", a, [["path", { d: "M8 18L12 22L16 18" }], ["path", { d: "M12 2V22" }]]];
  const Y9 = ["svg", a, [["path", { d: "m18 8 4 4-4 4" }], ["path", { d: "M2 12h20" }], ["path", { d: "m6 8-4 4 4 4" }]]];
  const ar = ["svg", a, [["path", { d: "M6 8L2 12L6 16" }], ["path", { d: "M2 12H22" }]]];
  const tr = ["svg", a, [["path", { d: "M18 8L22 12L18 16" }], ["path", { d: "M2 12H22" }]]];
  const hr = ["svg", a, [["path", { d: "M5 11V5H11" }], ["path", { d: "M5 5L19 19" }]]];
  const dr = ["svg", a, [["path", { d: "M13 5H19V11" }], ["path", { d: "M19 5L5 19" }]]];
  const pr = ["svg", a, [["path", { d: "M8 6L12 2L16 6" }], ["path", { d: "M12 2V22" }]]];
  const cr = ["svg", a, [["path", { d: "M12 2v20" }], ["path", { d: "m8 18 4 4 4-4" }], ["path", { d: "m8 6 4-4 4 4" }]]];
  const Mr = ["svg", a, [["path", { d: "M12 2v20" }], ["path", { d: "m15 19-3 3-3-3" }], ["path", { d: "m19 9 3 3-3 3" }], ["path", { d: "M2 12h20" }], ["path", { d: "m5 9-3 3 3 3" }], ["path", { d: "m9 5 3-3 3 3" }]]];
  const sr = ["svg", a, [["circle", { cx: "8", cy: "18", r: "4" }], ["path", { d: "M12 18V2l7 4" }]]];
  const er = ["svg", a, [["circle", { cx: "12", cy: "18", r: "4" }], ["path", { d: "M16 18V2" }]]];
  const rr = ["svg", a, [["path", { d: "M9 18V5l12-2v13" }], ["path", { d: "m9 9 12-2" }], ["circle", { cx: "6", cy: "18", r: "3" }], ["circle", { cx: "18", cy: "16", r: "3" }]]];
  const vr = ["svg", a, [["path", { d: "M9 18V5l12-2v13" }], ["circle", { cx: "6", cy: "18", r: "3" }], ["circle", { cx: "18", cy: "16", r: "3" }]]];
  const or = ["svg", a, [["path", { d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17" }], ["path", { d: "M14.53 8.88 12 2l-1.17 3.17" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const nr = ["svg", a, [["polygon", { points: "12 2 19 21 12 17 5 21 12 2" }]]];
  const ir = ["svg", a, [["path", { d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43" }], ["path", { d: "M17.39 11.73 22 2l-9.73 4.61" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const lr = ["svg", a, [["polygon", { points: "3 11 22 2 13 21 11 13 3 11" }]]];
  const gr = ["svg", a, [["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1" }], ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1" }], ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1" }], ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" }], ["path", { d: "M12 12V8" }]]];
  const xr = ["svg", a, [["path", { d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" }], ["path", { d: "M18 14h-8" }], ["path", { d: "M15 18h-5" }], ["path", { d: "M10 6h8v4h-8V6Z" }]]];
  const yr = ["svg", a, [["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36" }], ["path", { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58" }], ["path", { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" }], ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20" }]]];
  const mr = ["svg", a, [["path", { d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" }], ["path", { d: "M2 6h4" }], ["path", { d: "M2 10h4" }], ["path", { d: "M2 14h4" }], ["path", { d: "M2 18h4" }], ["path", { d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }]]];
  const Hr = ["svg", a, [["path", { d: "M2 6h4" }], ["path", { d: "M2 10h4" }], ["path", { d: "M2 14h4" }], ["path", { d: "M2 18h4" }], ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }], ["path", { d: "M15 2v20" }], ["path", { d: "M15 7h5" }], ["path", { d: "M15 12h5" }], ["path", { d: "M15 17h5" }]]];
  const Vr = ["svg", a, [["path", { d: "M2 6h4" }], ["path", { d: "M2 10h4" }], ["path", { d: "M2 14h4" }], ["path", { d: "M2 18h4" }], ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }], ["path", { d: "M9.5 8h5" }], ["path", { d: "M9.5 12H16" }], ["path", { d: "M9.5 16H14" }]]];
  const Cr = ["svg", a, [["path", { d: "M2 6h4" }], ["path", { d: "M2 10h4" }], ["path", { d: "M2 14h4" }], ["path", { d: "M2 18h4" }], ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }], ["path", { d: "M16 2v20" }]]];
  const ur = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M12 2v4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M20 12v2" }], ["path", { d: "M20 18v2a2 2 0 0 1-2 2h-1" }], ["path", { d: "M13 22h-2" }], ["path", { d: "M7 22H6a2 2 0 0 1-2-2v-2" }], ["path", { d: "M4 14v-2" }], ["path", { d: "M4 8V6a2 2 0 0 1 2-2h2" }], ["path", { d: "M8 10h6" }], ["path", { d: "M8 14h8" }], ["path", { d: "M8 18h5" }]]];
  const wr = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M12 2v4" }], ["path", { d: "M16 2v4" }], ["rect", { width: "16", height: "18", x: "4", y: "4", rx: "2" }], ["path", { d: "M8 10h6" }], ["path", { d: "M8 14h8" }], ["path", { d: "M8 18h5" }]]];
  const Ar = ["svg", a, [["path", { d: "M12 4V2" }], ["path", { d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939" }], ["path", { d: "M19 10v3.343" }], ["path", { d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const Lr = ["svg", a, [["path", { d: "M12 4V2" }], ["path", { d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4" }], ["path", { d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z" }]]];
  const M2 = ["svg", a, [["path", { d: "M12 16h.01" }], ["path", { d: "M12 8v4" }], ["path", { d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" }]]];
  const Sr = ["svg", a, [["path", { d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }], ["path", { d: "M8 12h8" }]]];
  const s2 = ["svg", a, [["path", { d: "M10 15V9" }], ["path", { d: "M14 15V9" }], ["path", { d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }]]];
  const e2 = ["svg", a, [["path", { d: "m15 9-6 6" }], ["path", { d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }], ["path", { d: "m9 9 6 6" }]]];
  const fr = ["svg", a, [["path", { d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }]]];
  const Pr = ["svg", a, [["path", { d: "M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21" }]]];
  const Zr = ["svg", a, [["path", { d: "M3 3h6l6 18h6" }], ["path", { d: "M14 3h7" }]]];
  const zr = ["svg", a, [["circle", { cx: "12", cy: "12", r: "3" }], ["circle", { cx: "19", cy: "5", r: "2" }], ["circle", { cx: "5", cy: "19", r: "2" }], ["path", { d: "M10.4 21.9a10 10 0 0 0 9.941-15.416" }], ["path", { d: "M13.5 2.1a10 10 0 0 0-9.841 15.416" }]]];
  const kr = ["svg", a, [["path", { d: "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" }], ["path", { d: "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" }], ["path", { d: "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027" }]]];
  const Br = ["svg", a, [["path", { d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" }], ["path", { d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" }], ["path", { d: "M12 3v6" }]]];
  const Dr = ["svg", a, [["path", { d: "m16 16 2 2 4-4" }], ["path", { d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" }], ["path", { d: "m7.5 4.27 9 5.15" }], ["polyline", { points: "3.29 7 12 12 20.71 7" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]]];
  const Fr = ["svg", a, [["path", { d: "M16 16h6" }], ["path", { d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" }], ["path", { d: "m7.5 4.27 9 5.15" }], ["polyline", { points: "3.29 7 12 12 20.71 7" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]]];
  const qr = ["svg", a, [["path", { d: "M12 22v-9" }], ["path", { d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" }], ["path", { d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" }], ["path", { d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" }]]];
  const Rr = ["svg", a, [["path", { d: "M16 16h6" }], ["path", { d: "M19 13v6" }], ["path", { d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" }], ["path", { d: "m7.5 4.27 9 5.15" }], ["polyline", { points: "3.29 7 12 12 20.71 7" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]]];
  const br = ["svg", a, [["path", { d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" }], ["path", { d: "m7.5 4.27 9 5.15" }], ["polyline", { points: "3.29 7 12 12 20.71 7" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }], ["circle", { cx: "18.5", cy: "15.5", r: "2.5" }], ["path", { d: "M20.27 17.27 22 19" }]]];
  const Tr = ["svg", a, [["path", { d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" }], ["path", { d: "m7.5 4.27 9 5.15" }], ["polyline", { points: "3.29 7 12 12 20.71 7" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }], ["path", { d: "m17 13 5 5m-5 0 5-5" }]]];
  const Ur = ["svg", a, [["path", { d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" }], ["path", { d: "M12 22V12" }], ["path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7" }], ["path", { d: "m7.5 4.27 9 5.15" }]]];
  const Or = ["svg", a, [["path", { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" }], ["path", { d: "m5 2 5 5" }], ["path", { d: "M2 13h15" }], ["path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" }]]];
  const Ir = ["svg", a, [["rect", { width: "16", height: "6", x: "2", y: "2", rx: "2" }], ["path", { d: "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }], ["rect", { width: "4", height: "6", x: "8", y: "16", rx: "1" }]]];
  const r2 = ["svg", a, [["path", { d: "M10 2v2" }], ["path", { d: "M14 2v4" }], ["path", { d: "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" }], ["path", { d: "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1" }]]];
  const Er = ["svg", a, [["path", { d: "m14.622 17.897-10.68-2.913" }], ["path", { d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" }], ["path", { d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" }]]];
  const Gr = ["svg", a, [["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor" }], ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor" }], ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor" }], ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor" }], ["path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" }]]];
  const Wr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 15h18" }], ["path", { d: "m15 8-3 3-3-3" }]]];
  const v2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M14 15h1" }], ["path", { d: "M19 15h2" }], ["path", { d: "M3 15h2" }], ["path", { d: "M9 15h1" }]]];
  const Xr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 15h18" }], ["path", { d: "m9 10 3-3 3 3" }]]];
  const Nr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 15h18" }]]];
  const o2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 3v18" }], ["path", { d: "m16 15-3-3 3-3" }]]];
  const n2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 14v1" }], ["path", { d: "M9 19v2" }], ["path", { d: "M9 3v2" }], ["path", { d: "M9 9v1" }]]];
  const i2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 3v18" }], ["path", { d: "m14 9 3 3-3 3" }]]];
  const l2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 3v18" }]]];
  const Kr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M15 3v18" }], ["path", { d: "m8 9 3 3-3 3" }]]];
  const g2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M15 14v1" }], ["path", { d: "M15 19v2" }], ["path", { d: "M15 3v2" }], ["path", { d: "M15 9v1" }]]];
  const $r = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M15 3v18" }], ["path", { d: "m10 15-3-3 3-3" }]]];
  const Jr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M15 3v18" }]]];
  const jr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18" }], ["path", { d: "m9 16 3-3 3 3" }]]];
  const x2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M14 9h1" }], ["path", { d: "M19 9h2" }], ["path", { d: "M3 9h2" }], ["path", { d: "M9 9h1" }]]];
  const Qr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18" }], ["path", { d: "m15 14-3 3-3-3" }]]];
  const _r = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18" }]]];
  const Yr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 3v18" }], ["path", { d: "M9 15h12" }]]];
  const av = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 15h12" }], ["path", { d: "M15 3v18" }]]];
  const y2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18" }], ["path", { d: "M9 21V9" }]]];
  const tv = ["svg", a, [["path", { d: "M13.234 20.252 21 12.3" }], ["path", { d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486" }]]];
  const hv = ["svg", a, [["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }], ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }]]];
  const dv = ["svg", a, [["path", { d: "M11 15h2" }], ["path", { d: "M12 12v3" }], ["path", { d: "M12 19v3" }], ["path", { d: "M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z" }], ["path", { d: "M9 9a3 3 0 1 1 6 0" }]]];
  const pv = ["svg", a, [["path", { d: "M5.8 11.3 2 22l10.7-3.79" }], ["path", { d: "M4 3h.01" }], ["path", { d: "M22 8h.01" }], ["path", { d: "M15 2h.01" }], ["path", { d: "M22 20h.01" }], ["path", { d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" }], ["path", { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" }], ["path", { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" }], ["path", { d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" }]]];
  const cv = ["svg", a, [["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1" }], ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1" }]]];
  const Mv = ["svg", a, [["circle", { cx: "11", cy: "4", r: "2" }], ["circle", { cx: "18", cy: "8", r: "2" }], ["circle", { cx: "20", cy: "16", r: "2" }], ["path", { d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" }]]];
  const sv = ["svg", a, [["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2" }], ["path", { d: "M15 14h.01" }], ["path", { d: "M9 6h6" }], ["path", { d: "M9 10h6" }]]];
  const m2 = ["svg", a, [["path", { d: "M12 20h9" }], ["path", { d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" }]]];
  const ev = ["svg", a, [["path", { d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" }], ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }], ["path", { d: "m2 2 20 20" }]]];
  const rv = ["svg", a, [["path", { d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" }], ["path", { d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" }], ["path", { d: "m2.3 2.3 7.286 7.286" }], ["circle", { cx: "11", cy: "11", r: "2" }]]];
  const H2 = ["svg", a, [["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }]]];
  const vv = ["svg", a, [["path", { d: "M12 20h9" }], ["path", { d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" }], ["path", { d: "m15 5 3 3" }]]];
  const ov = ["svg", a, [["path", { d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" }], ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }], ["path", { d: "m15 5 4 4" }], ["path", { d: "m2 2 20 20" }]]];
  const nv = ["svg", a, [["path", { d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" }], ["path", { d: "m8 6 2-2" }], ["path", { d: "m18 16 2-2" }], ["path", { d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" }], ["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }], ["path", { d: "m15 5 4 4" }]]];
  const iv = ["svg", a, [["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }], ["path", { d: "m15 5 4 4" }]]];
  const lv = ["svg", a, [["path", { d: "M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z" }]]];
  const gv = ["svg", a, [["line", { x1: "19", x2: "5", y1: "5", y2: "19" }], ["circle", { cx: "6.5", cy: "6.5", r: "2.5" }], ["circle", { cx: "17.5", cy: "17.5", r: "2.5" }]]];
  const xv = ["svg", a, [["circle", { cx: "12", cy: "5", r: "1" }], ["path", { d: "m9 20 3-6 3 6" }], ["path", { d: "m6 8 6 2 6-2" }], ["path", { d: "M12 10v4" }]]];
  const yv = ["svg", a, [["path", { d: "M20 11H4" }], ["path", { d: "M20 7H4" }], ["path", { d: "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" }]]];
  const mv = ["svg", a, [["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }], ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94" }], ["path", { d: "M14.05 6A5 5 0 0 1 18 10" }]]];
  const Hv = ["svg", a, [["polyline", { points: "18 2 22 6 18 10" }], ["line", { x1: "14", x2: "22", y1: "6", y2: "6" }], ["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }]]];
  const Vv = ["svg", a, [["polyline", { points: "16 2 16 8 22 8" }], ["line", { x1: "22", x2: "16", y1: "2", y2: "8" }], ["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }]]];
  const Cv = ["svg", a, [["line", { x1: "22", x2: "16", y1: "2", y2: "8" }], ["line", { x1: "16", x2: "22", y1: "2", y2: "8" }], ["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }]]];
  const uv = ["svg", a, [["path", { d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" }], ["line", { x1: "22", x2: "2", y1: "2", y2: "22" }]]];
  const wv = ["svg", a, [["polyline", { points: "22 8 22 2 16 2" }], ["line", { x1: "16", x2: "22", y1: "8", y2: "2" }], ["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }]]];
  const Av = ["svg", a, [["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }]]];
  const Lv = ["svg", a, [["line", { x1: "9", x2: "9", y1: "4", y2: "20" }], ["path", { d: "M4 7c0-1.7 1.3-3 3-3h13" }], ["path", { d: "M18 20c-1.7 0-3-1.3-3-3V4" }]]];
  const Sv = ["svg", a, [["path", { d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8" }], ["path", { d: "M2 14h20" }], ["path", { d: "M6 14v4" }], ["path", { d: "M10 14v4" }], ["path", { d: "M14 14v4" }], ["path", { d: "M18 14v4" }]]];
  const fv = ["svg", a, [["path", { d: "M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912" }], ["path", { d: "M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393" }], ["path", { d: "M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z" }], ["path", { d: "M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319" }]]];
  const Pv = ["svg", a, [["path", { d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" }], ["rect", { width: "10", height: "7", x: "12", y: "13", rx: "2" }]]];
  const Zv = ["svg", a, [["path", { d: "M2 10h6V4" }], ["path", { d: "m2 4 6 6" }], ["path", { d: "M21 10V7a2 2 0 0 0-2-2h-7" }], ["path", { d: "M3 14v2a2 2 0 0 0 2 2h3" }], ["rect", { x: "12", y: "14", width: "10", height: "7", rx: "1" }]]];
  const zv = ["svg", a, [["path", { d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" }], ["path", { d: "M2 9v1c0 1.1.9 2 2 2h1" }], ["path", { d: "M16 11h.01" }]]];
  const kv = ["svg", a, [["path", { d: "M14 3v11" }], ["path", { d: "M14 9h-3a3 3 0 0 1 0-6h9" }], ["path", { d: "M18 3v11" }], ["path", { d: "M22 18H2l4-4" }], ["path", { d: "m6 22-4-4" }]]];
  const Bv = ["svg", a, [["path", { d: "M10 3v11" }], ["path", { d: "M10 9H7a1 1 0 0 1 0-6h8" }], ["path", { d: "M14 3v11" }], ["path", { d: "m18 14 4 4H2" }], ["path", { d: "m22 18-4 4" }]]];
  const Dv = ["svg", a, [["path", { d: "M13 4v16" }], ["path", { d: "M17 4v16" }], ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13" }]]];
  const Fv = ["svg", a, [["path", { d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" }], ["path", { d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" }], ["rect", { width: "16", height: "5", x: "4", y: "2", rx: "1" }]]];
  const qv = ["svg", a, [["path", { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" }], ["path", { d: "m8.5 8.5 7 7" }]]];
  const Rv = ["svg", a, [["path", { d: "M12 17v5" }], ["path", { d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11" }]]];
  const bv = ["svg", a, [["path", { d: "M12 17v5" }], ["path", { d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" }]]];
  const Tv = ["svg", a, [["path", { d: "m2 22 1-1h3l9-9" }], ["path", { d: "M3 21v-3l9-9" }], ["path", { d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" }]]];
  const Uv = ["svg", a, [["path", { d: "m12 14-1 1" }], ["path", { d: "m13.75 18.25-1.25 1.42" }], ["path", { d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" }], ["path", { d: "M18.8 9.3a1 1 0 0 0 2.1 7.7" }], ["path", { d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" }]]];
  const Ov = ["svg", a, [["path", { d: "M2 22h20" }], ["path", { d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" }]]];
  const Iv = ["svg", a, [["path", { d: "M2 22h20" }], ["path", { d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" }]]];
  const Ev = ["svg", a, [["path", { d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" }]]];
  const Gv = ["svg", a, [["polygon", { points: "6 3 20 12 6 21 6 3" }]]];
  const Wv = ["svg", a, [["path", { d: "M9 2v6" }], ["path", { d: "M15 2v6" }], ["path", { d: "M12 17v5" }], ["path", { d: "M5 8h14" }], ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0Z" }]]];
  const V2 = ["svg", a, [["path", { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }], ["path", { d: "m2 22 3-3" }], ["path", { d: "M7.5 13.5 10 11" }], ["path", { d: "M10.5 16.5 13 14" }], ["path", { d: "m18 3-4 4h6l-4 4" }]]];
  const Xv = ["svg", a, [["path", { d: "M12 22v-5" }], ["path", { d: "M9 8V2" }], ["path", { d: "M15 8V2" }], ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" }]]];
  const Nv = ["svg", a, [["path", { d: "M5 12h14" }], ["path", { d: "M12 5v14" }]]];
  const Kv = ["svg", a, [["path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" }], ["path", { d: "M18 6h.01" }], ["path", { d: "M6 18h.01" }], ["path", { d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }], ["path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" }]]];
  const $v = ["svg", a, [["path", { d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" }], ["polyline", { points: "8 10 12 14 16 10" }]]];
  const Jv = ["svg", a, [["path", { d: "M16.85 18.58a9 9 0 1 0-9.7 0" }], ["path", { d: "M8 14a5 5 0 1 1 8 0" }], ["circle", { cx: "12", cy: "11", r: "1" }], ["path", { d: "M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" }]]];
  const jv = ["svg", a, [["path", { d: "M10 4.5V4a2 2 0 0 0-2.41-1.957" }], ["path", { d: "M13.9 8.4a2 2 0 0 0-1.26-1.295" }], ["path", { d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" }], ["path", { d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343" }], ["path", { d: "M6 6v8" }], ["path", { d: "m2 2 20 20" }]]];
  const Qv = ["svg", a, [["path", { d: "M22 14a8 8 0 0 1-8 8" }], ["path", { d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }], ["path", { d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" }], ["path", { d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" }], ["path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" }]]];
  const _v = ["svg", a, [["path", { d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" }], ["path", { d: "M10 22 9 8" }], ["path", { d: "m14 22 1-14" }], ["path", { d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" }]]];
  const Yv = ["svg", a, [["path", { d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z" }], ["path", { d: "m22 22-5.5-5.5" }]]];
  const ao = ["svg", a, [["path", { d: "M18 7c0-5.333-8-5.333-8 0" }], ["path", { d: "M10 7v14" }], ["path", { d: "M6 21h12" }], ["path", { d: "M6 13h10" }]]];
  const to = ["svg", a, [["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15" }], ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68" }], ["path", { d: "M12 2v4" }], ["path", { d: "m2 2 20 20" }]]];
  const ho = ["svg", a, [["path", { d: "M12 2v10" }], ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04" }]]];
  const po = ["svg", a, [["path", { d: "M2 3h20" }], ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" }], ["path", { d: "m7 21 5-5 5 5" }]]];
  const co = ["svg", a, [["path", { d: "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5" }], ["path", { d: "m16 19 2 2 4-4" }], ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" }], ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }]]];
  const Mo = ["svg", a, [["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }], ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }], ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1" }]]];
  const so = ["svg", a, [["path", { d: "M5 7 3 5" }], ["path", { d: "M9 6V3" }], ["path", { d: "m13 7 2-2" }], ["circle", { cx: "9", cy: "13", r: "3" }], ["path", { d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" }], ["path", { d: "M16 16h2" }]]];
  const eo = ["svg", a, [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["path", { d: "M12 9v11" }], ["path", { d: "M2 9h13a2 2 0 0 1 2 2v9" }]]];
  const ro = ["svg", a, [["path", { d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" }]]];
  const vo = ["svg", a, [["path", { d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" }], ["path", { d: "M12 2v20" }]]];
  const oo = ["svg", a, [["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1" }], ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1" }], ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1" }], ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3" }], ["path", { d: "M21 21v.01" }], ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7" }], ["path", { d: "M3 12h.01" }], ["path", { d: "M12 3h.01" }], ["path", { d: "M12 16v.01" }], ["path", { d: "M16 12h1" }], ["path", { d: "M21 12v.01" }], ["path", { d: "M12 21v-1" }]]];
  const no = ["svg", a, [["path", { d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" }], ["path", { d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" }]]];
  const io = ["svg", a, [["path", { d: "M13 16a3 3 0 0 1 2.24 5" }], ["path", { d: "M18 12h.01" }], ["path", { d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" }], ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3" }], ["path", { d: "M7.612 12.524a3 3 0 1 0-1.6 4.3" }]]];
  const lo = ["svg", a, [["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34" }], ["path", { d: "M4 6h.01" }], ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35" }], ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67" }], ["path", { d: "M12 18h.01" }], ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67" }], ["circle", { cx: "12", cy: "12", r: "2" }], ["path", { d: "m13.41 10.59 5.66-5.66" }]]];
  const go = ["svg", a, [["path", { d: "M12 12h.01" }], ["path", { d: "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z" }], ["path", { d: "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z" }], ["path", { d: "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z" }]]];
  const xo = ["svg", a, [["path", { d: "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21" }]]];
  const yo = ["svg", a, [["path", { d: "M5 16v2" }], ["path", { d: "M19 16v2" }], ["rect", { width: "20", height: "8", x: "2", y: "8", rx: "2" }], ["path", { d: "M18 12h.01" }]]];
  const mo = ["svg", a, [["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9" }], ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" }], ["circle", { cx: "12", cy: "9", r: "2" }], ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47" }], ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1" }], ["path", { d: "M9.5 18h5" }], ["path", { d: "m8 22 4-11 4 11" }]]];
  const Ho = ["svg", a, [["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9" }], ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" }], ["circle", { cx: "12", cy: "12", r: "2" }], ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" }], ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19" }]]];
  const Vo = ["svg", a, [["path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82" }], ["circle", { cx: "19", cy: "19", r: "2" }], ["path", { d: "m13.41 13.41 4.18 4.18" }], ["circle", { cx: "12", cy: "12", r: "2" }]]];
  const Co = ["svg", a, [["path", { d: "M5 15h14" }], ["path", { d: "M5 9h14" }], ["path", { d: "m14 20-5-5 6-6-5-5" }]]];
  const uo = ["svg", a, [["path", { d: "M22 17a10 10 0 0 0-20 0" }], ["path", { d: "M6 17a6 6 0 0 1 12 0" }], ["path", { d: "M10 17a2 2 0 0 1 4 0" }]]];
  const wo = ["svg", a, [["path", { d: "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7c0 2.2 1.8 4 4 4" }], ["path", { d: "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3" }], ["path", { d: "M13.2 18a3 3 0 0 0-2.2-5" }], ["path", { d: "M13 22H4a2 2 0 0 1 0-4h12" }], ["path", { d: "M16 9h.01" }]]];
  const Ao = ["svg", a, [["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2" }], ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]]];
  const Lo = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M12 6.5v11" }], ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2" }]]];
  const So = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M8 12h5" }], ["path", { d: "M16 9.5a4 4 0 1 0 0 5.2" }]]];
  const fo = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M8 7h8" }], ["path", { d: "M12 17.5 8 15h1a4 4 0 0 0 0-8" }], ["path", { d: "M8 11h8" }]]];
  const Po = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "m12 10 3-3" }], ["path", { d: "m9 7 3 3v7.5" }], ["path", { d: "M9 11h6" }], ["path", { d: "M9 15h6" }]]];
  const Zo = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M8 13h5" }], ["path", { d: "M10 17V9.5a2.5 2.5 0 0 1 5 0" }], ["path", { d: "M8 17h7" }]]];
  const zo = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M8 15h5" }], ["path", { d: "M8 11h5a2 2 0 1 0 0-4h-3v10" }]]];
  const ko = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M10 17V7h5" }], ["path", { d: "M10 11h4" }], ["path", { d: "M8 15h5" }]]];
  const Bo = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M14 8H8" }], ["path", { d: "M16 12H8" }], ["path", { d: "M13 16H8" }]]];
  const Do = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }], ["path", { d: "M12 17.5v-11" }]]];
  const C2 = ["svg", a, [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }], ["path", { d: "M12 12h.01" }], ["path", { d: "M17 12h.01" }], ["path", { d: "M7 12h.01" }]]];
  const Fo = ["svg", a, [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]]];
  const qo = ["svg", a, [["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2" }]]];
  const Ro = ["svg", a, [["path", { d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" }], ["path", { d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" }], ["path", { d: "m14 16-3 3 3 3" }], ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598" }], ["path", { d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" }], ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096" }]]];
  const bo = ["svg", a, [["path", { d: "m15 14 5-5-5-5" }], ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" }]]];
  const To = ["svg", a, [["circle", { cx: "12", cy: "17", r: "1" }], ["path", { d: "M21 7v6h-6" }], ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]]];
  const Uo = ["svg", a, [["path", { d: "M21 7v6h-6" }], ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]]];
  const Oo = ["svg", a, [["path", { d: "M3 2v6h6" }], ["path", { d: "M21 12A9 9 0 0 0 6 5.3L3 8" }], ["path", { d: "M21 22v-6h-6" }], ["path", { d: "M3 12a9 9 0 0 0 15 6.7l3-2.7" }], ["circle", { cx: "12", cy: "12", r: "1" }]]];
  const Io = ["svg", a, [["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }], ["path", { d: "M3 3v5h5" }], ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" }], ["path", { d: "M16 16h5v5" }]]];
  const Eo = ["svg", a, [["path", { d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" }], ["path", { d: "M8 16H3v5" }], ["path", { d: "M3 12C3 9.51 4 7.26 5.64 5.64" }], ["path", { d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" }], ["path", { d: "M21 12c0 1-.16 1.97-.47 2.87" }], ["path", { d: "M21 3v5h-5" }], ["path", { d: "M22 22 2 2" }]]];
  const Go = ["svg", a, [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }], ["path", { d: "M21 3v5h-5" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }], ["path", { d: "M8 16H3v5" }]]];
  const Wo = ["svg", a, [["path", { d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" }], ["path", { d: "M5 10h14" }], ["path", { d: "M15 7v6" }]]];
  const Xo = ["svg", a, [["path", { d: "M17 3v10" }], ["path", { d: "m12.67 5.5 8.66 5" }], ["path", { d: "m12.67 10.5 8.66-5" }], ["path", { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" }]]];
  const No = ["svg", a, [["path", { d: "M4 7V4h16v3" }], ["path", { d: "M5 20h6" }], ["path", { d: "M13 4 8 20" }], ["path", { d: "m15 15 5 5" }], ["path", { d: "m20 15-5 5" }]]];
  const Ko = ["svg", a, [["path", { d: "m17 2 4 4-4 4" }], ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }], ["path", { d: "m7 22-4-4 4-4" }], ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }], ["path", { d: "M11 10h1v4" }]]];
  const $o = ["svg", a, [["path", { d: "m2 9 3-3 3 3" }], ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6" }], ["path", { d: "m22 15-3 3-3-3" }], ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10" }]]];
  const Jo = ["svg", a, [["path", { d: "m17 2 4 4-4 4" }], ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }], ["path", { d: "m7 22-4-4 4-4" }], ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }]]];
  const jo = ["svg", a, [["path", { d: "M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }], ["path", { d: "M14 4a2 2 0 0 1 2-2" }], ["path", { d: "M16 10a2 2 0 0 1-2-2" }], ["path", { d: "M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }], ["path", { d: "M20 2a2 2 0 0 1 2 2" }], ["path", { d: "M22 8a2 2 0 0 1-2 2" }], ["path", { d: "m3 7 3 3 3-3" }], ["path", { d: "M6 10V5a 3 3 0 0 1 3-3h1" }], ["rect", { x: "2", y: "14", width: "8", height: "8", rx: "2" }]]];
  const Qo = ["svg", a, [["path", { d: "M14 4a2 2 0 0 1 2-2" }], ["path", { d: "M16 10a2 2 0 0 1-2-2" }], ["path", { d: "M20 2a2 2 0 0 1 2 2" }], ["path", { d: "M22 8a2 2 0 0 1-2 2" }], ["path", { d: "m3 7 3 3 3-3" }], ["path", { d: "M6 10V5a3 3 0 0 1 3-3h1" }], ["rect", { x: "2", y: "14", width: "8", height: "8", rx: "2" }]]];
  const _o = ["svg", a, [["polyline", { points: "7 17 2 12 7 7" }], ["polyline", { points: "12 17 7 12 12 7" }], ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7" }]]];
  const Yo = ["svg", a, [["polyline", { points: "9 17 4 12 9 7" }], ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4" }]]];
  const an = ["svg", a, [["polygon", { points: "11 19 2 12 11 5 11 19" }], ["polygon", { points: "22 19 13 12 22 5 22 19" }]]];
  const tn = ["svg", a, [["path", { d: "M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22" }], ["path", { d: "m12 18 2.57-3.5" }], ["path", { d: "M6.243 9.016a7 7 0 0 1 11.507-.009" }], ["path", { d: "M9.35 14.53 12 11.22" }], ["path", { d: "M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z" }]]];
  const hn = ["svg", a, [["path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }], ["path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }], ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }], ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }]]];
  const dn = ["svg", a, [["polyline", { points: "3.5 2 6.5 12.5 18 12.5" }], ["line", { x1: "9.5", x2: "5.5", y1: "12.5", y2: "20" }], ["line", { x1: "15", x2: "18.5", y1: "12.5", y2: "20" }], ["path", { d: "M2.75 18a13 13 0 0 0 18.5 0" }]]];
  const pn = ["svg", a, [["path", { d: "M6 19V5" }], ["path", { d: "M10 19V6.8" }], ["path", { d: "M14 19v-7.8" }], ["path", { d: "M18 5v4" }], ["path", { d: "M18 19v-6" }], ["path", { d: "M22 19V9" }], ["path", { d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" }]]];
  const u2 = ["svg", a, [["path", { d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" }], ["path", { d: "m15.194 13.707 3.814 1.86-1.86 3.814" }], ["path", { d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" }]]];
  const cn = ["svg", a, [["path", { d: "M20 9V7a2 2 0 0 0-2-2h-6" }], ["path", { d: "m15 2-3 3 3 3" }], ["path", { d: "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" }]]];
  const Mn = ["svg", a, [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }], ["path", { d: "M3 3v5h5" }]]];
  const sn = ["svg", a, [["path", { d: "M12 5H6a2 2 0 0 0-2 2v3" }], ["path", { d: "m9 8 3-3-3-3" }], ["path", { d: "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }]]];
  const en = ["svg", a, [["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }], ["path", { d: "M21 3v5h-5" }]]];
  const rn = ["svg", a, [["circle", { cx: "6", cy: "19", r: "3" }], ["path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2" }], ["path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3" }], ["path", { d: "M15 5h-4.3" }], ["circle", { cx: "18", cy: "5", r: "3" }]]];
  const vn = ["svg", a, [["circle", { cx: "6", cy: "19", r: "3" }], ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }], ["circle", { cx: "18", cy: "5", r: "3" }]]];
  const on = ["svg", a, [["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }], ["path", { d: "M6.01 18H6" }], ["path", { d: "M10.01 18H10" }], ["path", { d: "M15 10v4" }], ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0" }], ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0" }]]];
  const w2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 12h18" }]]];
  const A2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M21 9H3" }], ["path", { d: "M21 15H3" }]]];
  const nn = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M21 7.5H3" }], ["path", { d: "M21 12H3" }], ["path", { d: "M21 16.5H3" }]]];
  const ln = ["svg", a, [["path", { d: "M4 11a9 9 0 0 1 9 9" }], ["path", { d: "M4 4a16 16 0 0 1 16 16" }], ["circle", { cx: "5", cy: "19", r: "1" }]]];
  const gn = ["svg", a, [["path", { d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" }], ["path", { d: "m14.5 12.5 2-2" }], ["path", { d: "m11.5 9.5 2-2" }], ["path", { d: "m8.5 6.5 2-2" }], ["path", { d: "m17.5 15.5 2-2" }]]];
  const xn = ["svg", a, [["path", { d: "M6 11h8a4 4 0 0 0 0-8H9v18" }], ["path", { d: "M6 15h8" }]]];
  const yn = ["svg", a, [["path", { d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" }], ["path", { d: "M21 14 10 2 3 14h18Z" }], ["path", { d: "M10 2v16" }]]];
  const mn = ["svg", a, [["path", { d: "M7 21h10" }], ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }], ["path", { d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" }], ["path", { d: "m13 12 4-4" }], ["path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" }]]];
  const Hn = ["svg", a, [["path", { d: "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" }], ["path", { d: "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" }], ["path", { d: "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" }], ["path", { d: "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }], ["rect", { width: "20", height: "4", x: "2", y: "11", rx: "1" }]]];
  const Vn = ["svg", a, [["path", { d: "M4 10a7.31 7.31 0 0 0 10 10Z" }], ["path", { d: "m9 15 3-3" }], ["path", { d: "M17 13a6 6 0 0 0-6-6" }], ["path", { d: "M21 13A10 10 0 0 0 11 3" }]]];
  const Cn = ["svg", a, [["path", { d: "M13 7 9 3 5 7l4 4" }], ["path", { d: "m17 11 4 4-4 4-4-4" }], ["path", { d: "m8 12 4 4 6-6-4-4Z" }], ["path", { d: "m16 8 3-3" }], ["path", { d: "M9 21a6 6 0 0 0-6-6" }]]];
  const un = ["svg", a, [["path", { d: "M10 2v3a1 1 0 0 0 1 1h5" }], ["path", { d: "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" }], ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6" }], ["path", { d: "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z" }]]];
  const wn = ["svg", a, [["path", { d: "M13 13H8a1 1 0 0 0-1 1v7" }], ["path", { d: "M14 8h1" }], ["path", { d: "M17 21v-4" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41" }], ["path", { d: "M29.5 11.5s5 5 4 5" }], ["path", { d: "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" }]]];
  const An = ["svg", a, [["path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }], ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }], ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }]]];
  const L2 = ["svg", a, [["path", { d: "M5 7v11a1 1 0 0 0 1 1h11" }], ["path", { d: "M5.293 18.707 11 13" }], ["circle", { cx: "19", cy: "19", r: "2" }], ["circle", { cx: "5", cy: "5", r: "2" }]]];
  const Ln = ["svg", a, [["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }], ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }], ["path", { d: "M7 21h10" }], ["path", { d: "M12 3v18" }], ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }]]];
  const Sn = ["svg", a, [["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }], ["path", { d: "M14 15H9v-5" }], ["path", { d: "M16 3h5v5" }], ["path", { d: "M21 3 9 15" }]]];
  const fn = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { d: "M8 7v10" }], ["path", { d: "M12 7v10" }], ["path", { d: "M17 7v10" }]]];
  const Pn = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["circle", { cx: "12", cy: "12", r: "1" }], ["path", { d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" }]]];
  const Zn = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }], ["path", { d: "M9 9h.01" }], ["path", { d: "M15 9h.01" }]]];
  const zn = ["svg", a, [["path", { d: "M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]]];
  const kn = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { d: "M7 12h10" }]]];
  const Bn = ["svg", a, [["path", { d: "M17 12v4a1 1 0 0 1-1 1h-4" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M17 8V7" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M7 17h.01" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["rect", { x: "7", y: "7", width: "5", height: "5", rx: "1" }]]];
  const Dn = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["circle", { cx: "12", cy: "12", r: "3" }], ["path", { d: "m16 16-1.9-1.9" }]]];
  const Fn = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { d: "M7 8h8" }], ["path", { d: "M7 12h10" }], ["path", { d: "M7 16h6" }]]];
  const qn = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]]];
  const Rn = ["svg", a, [["path", { d: "M14 22v-4a2 2 0 1 0-4 0v4" }], ["path", { d: "m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10" }], ["path", { d: "M18 5v17" }], ["path", { d: "m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6" }], ["path", { d: "M6 5v17" }], ["circle", { cx: "12", cy: "9", r: "2" }]]];
  const bn = ["svg", a, [["path", { d: "M5.42 9.42 8 12" }], ["circle", { cx: "4", cy: "8", r: "2" }], ["path", { d: "m14 6-8.58 8.58" }], ["circle", { cx: "4", cy: "16", r: "2" }], ["path", { d: "M10.8 14.8 14 18" }], ["path", { d: "M16 12h-2" }], ["path", { d: "M22 12h-2" }]]];
  const Tn = ["svg", a, [["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M8.12 8.12 12 12" }], ["path", { d: "M20 4 8.12 15.88" }], ["circle", { cx: "6", cy: "18", r: "3" }], ["path", { d: "M14.8 14.8 20 20" }]]];
  const Un = ["svg", a, [["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }], ["path", { d: "M8 21h8" }], ["path", { d: "M12 17v4" }], ["path", { d: "m22 3-5 5" }], ["path", { d: "m17 3 5 5" }]]];
  const On = ["svg", a, [["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }], ["path", { d: "M8 21h8" }], ["path", { d: "M12 17v4" }], ["path", { d: "m17 8 5-5" }], ["path", { d: "M17 3h5v5" }]]];
  const In = ["svg", a, [["path", { d: "M15 12h-5" }], ["path", { d: "M15 8h-5" }], ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }], ["path", { d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" }]]];
  const En = ["svg", a, [["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }], ["path", { d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" }]]];
  const Gn = ["svg", a, [["path", { d: "m8 11 2 2 4-4" }], ["circle", { cx: "11", cy: "11", r: "8" }], ["path", { d: "m21 21-4.3-4.3" }]]];
  const Wn = ["svg", a, [["path", { d: "m13 13.5 2-2.5-2-2.5" }], ["path", { d: "m21 21-4.3-4.3" }], ["path", { d: "M9 8.5 7 11l2 2.5" }], ["circle", { cx: "11", cy: "11", r: "8" }]]];
  const Xn = ["svg", a, [["path", { d: "m13.5 8.5-5 5" }], ["circle", { cx: "11", cy: "11", r: "8" }], ["path", { d: "m21 21-4.3-4.3" }]]];
  const Nn = ["svg", a, [["path", { d: "m13.5 8.5-5 5" }], ["path", { d: "m8.5 8.5 5 5" }], ["circle", { cx: "11", cy: "11", r: "8" }], ["path", { d: "m21 21-4.3-4.3" }]]];
  const Kn = ["svg", a, [["circle", { cx: "11", cy: "11", r: "8" }], ["path", { d: "m21 21-4.3-4.3" }]]];
  const $n = ["svg", a, [["path", { d: "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" }], ["path", { d: "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" }]]];
  const S2 = ["svg", a, [["path", { d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" }], ["path", { d: "M6 12h16" }]]];
  const Jn = ["svg", a, [["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2" }], ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2" }], ["path", { d: "M7 14v1a2 2 0 0 0 2 2h1" }], ["path", { d: "M14 7h1a2 2 0 0 1 2 2v1" }]]];
  const jn = ["svg", a, [["path", { d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" }], ["path", { d: "m21.854 2.147-10.94 10.939" }]]];
  const Qn = ["svg", a, [["line", { x1: "3", x2: "21", y1: "12", y2: "12" }], ["polyline", { points: "8 8 12 4 16 8" }], ["polyline", { points: "16 16 12 20 8 16" }]]];
  const _n = ["svg", a, [["line", { x1: "12", x2: "12", y1: "3", y2: "21" }], ["polyline", { points: "8 8 4 12 8 16" }], ["polyline", { points: "16 16 20 12 16 8" }]]];
  const Yn = ["svg", a, [["circle", { cx: "12", cy: "12", r: "3" }], ["path", { d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" }], ["path", { d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" }], ["path", { d: "M6 6h.01" }], ["path", { d: "M6 18h.01" }], ["path", { d: "m15.7 13.4-.9-.3" }], ["path", { d: "m9.2 10.9-.9-.3" }], ["path", { d: "m10.6 15.7.3-.9" }], ["path", { d: "m13.6 15.7-.4-1" }], ["path", { d: "m10.8 9.3-.4-1" }], ["path", { d: "m8.3 13.6 1-.4" }], ["path", { d: "m14.7 10.8 1-.4" }], ["path", { d: "m13.4 8.3-.3.9" }]]];
  const ai = ["svg", a, [["path", { d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" }], ["path", { d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" }], ["path", { d: "M6 6h.01" }], ["path", { d: "M6 18h.01" }], ["path", { d: "m13 6-4 6h6l-4 6" }]]];
  const ti = ["svg", a, [["path", { d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" }], ["path", { d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" }], ["path", { d: "M22 17v-1a2 2 0 0 0-2-2h-1" }], ["path", { d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" }], ["path", { d: "M6 18h.01" }], ["path", { d: "m2 2 20 20" }]]];
  const hi = ["svg", a, [["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2" }], ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6" }], ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18" }]]];
  const di = ["svg", a, [["path", { d: "M20 7h-9" }], ["path", { d: "M14 17H5" }], ["circle", { cx: "17", cy: "17", r: "3" }], ["circle", { cx: "7", cy: "7", r: "3" }]]];
  const pi = ["svg", a, [["path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }], ["circle", { cx: "12", cy: "12", r: "3" }]]];
  const ci = ["svg", a, [["path", { d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" }], ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }], ["circle", { cx: "17.5", cy: "17.5", r: "3.5" }]]];
  const Mi = ["svg", a, [["circle", { cx: "18", cy: "5", r: "3" }], ["circle", { cx: "6", cy: "12", r: "3" }], ["circle", { cx: "18", cy: "19", r: "3" }], ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49" }], ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49" }]]];
  const si = ["svg", a, [["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }], ["polyline", { points: "16 6 12 2 8 6" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "15" }]]];
  const ei = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["line", { x1: "3", x2: "21", y1: "9", y2: "9" }], ["line", { x1: "3", x2: "21", y1: "15", y2: "15" }], ["line", { x1: "9", x2: "9", y1: "9", y2: "21" }], ["line", { x1: "15", x2: "15", y1: "9", y2: "21" }]]];
  const ri = ["svg", a, [["path", { d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" }]]];
  const vi = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "M12 8v4" }], ["path", { d: "M12 16h.01" }]]];
  const oi = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "m4.243 5.21 14.39 12.472" }]]];
  const ni = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "m9 12 2 2 4-4" }]]];
  const ii = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "M8 12h.01" }], ["path", { d: "M12 12h.01" }], ["path", { d: "M16 12h.01" }]]];
  const li = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "M12 22V2" }]]];
  const gi = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "M9 12h6" }]]];
  const xi = ["svg", a, [["path", { d: "m2 2 20 20" }], ["path", { d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71" }], ["path", { d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264" }]]];
  const yi = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "M9 12h6" }], ["path", { d: "M12 9v6" }]]];
  const mi = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }], ["path", { d: "M12 17h.01" }]]];
  const f2 = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "m14.5 9.5-5 5" }], ["path", { d: "m9.5 9.5 5 5" }]]];
  const Hi = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }]]];
  const Vi = ["svg", a, [["circle", { cx: "12", cy: "12", r: "8" }], ["path", { d: "M12 2v7.5" }], ["path", { d: "m19 5-5.23 5.23" }], ["path", { d: "M22 12h-7.5" }], ["path", { d: "m19 19-5.23-5.23" }], ["path", { d: "M12 14.5V22" }], ["path", { d: "M10.23 13.77 5 19" }], ["path", { d: "M9.5 12H2" }], ["path", { d: "M10.23 10.23 5 5" }], ["circle", { cx: "12", cy: "12", r: "2.5" }]]];
  const Ci = ["svg", a, [["path", { d: "M12 10.189V14" }], ["path", { d: "M12 2v3" }], ["path", { d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" }], ["path", { d: "M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" }], ["path", { d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }]]];
  const ui = ["svg", a, [["path", { d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" }]]];
  const wi = ["svg", a, [["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }], ["path", { d: "M3 6h18" }], ["path", { d: "M16 10a4 4 0 0 1-8 0" }]]];
  const Ai = ["svg", a, [["path", { d: "m15 11-1 9" }], ["path", { d: "m19 11-4-7" }], ["path", { d: "M2 11h20" }], ["path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" }], ["path", { d: "M4.5 15.5h15" }], ["path", { d: "m5 11 4-7" }], ["path", { d: "m9 11 1 9" }]]];
  const Li = ["svg", a, [["circle", { cx: "8", cy: "21", r: "1" }], ["circle", { cx: "19", cy: "21", r: "1" }], ["path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" }]]];
  const Si = ["svg", a, [["path", { d: "M2 22v-5l5-5 5 5-5 5z" }], ["path", { d: "M9.5 14.5 16 8" }], ["path", { d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2" }]]];
  const fi = ["svg", a, [["path", { d: "m4 4 2.5 2.5" }], ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7" }], ["path", { d: "M15 5 5 15" }], ["path", { d: "M14 17v.01" }], ["path", { d: "M10 16v.01" }], ["path", { d: "M13 13v.01" }], ["path", { d: "M16 10v.01" }], ["path", { d: "M11 20v.01" }], ["path", { d: "M17 14v.01" }], ["path", { d: "M20 11v.01" }]]];
  const Pi = ["svg", a, [["path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8" }], ["path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6" }], ["path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6" }], ["path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3" }]]];
  const Zi = ["svg", a, [["path", { d: "M12 22v-7l-2-2" }], ["path", { d: "M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z" }], ["path", { d: "m14 14-2 2" }]]];
  const zi = ["svg", a, [["path", { d: "m18 14 4 4-4 4" }], ["path", { d: "m18 2 4 4-4 4" }], ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" }], ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2" }], ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" }]]];
  const ki = ["svg", a, [["path", { d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2" }]]];
  const Bi = ["svg", a, [["path", { d: "M2 20h.01" }], ["path", { d: "M7 20v-4" }], ["path", { d: "M12 20v-8" }], ["path", { d: "M17 20V8" }]]];
  const Di = ["svg", a, [["path", { d: "M2 20h.01" }], ["path", { d: "M7 20v-4" }]]];
  const Fi = ["svg", a, [["path", { d: "M2 20h.01" }], ["path", { d: "M7 20v-4" }], ["path", { d: "M12 20v-8" }]]];
  const qi = ["svg", a, [["path", { d: "M2 20h.01" }]]];
  const Ri = ["svg", a, [["path", { d: "M2 20h.01" }], ["path", { d: "M7 20v-4" }], ["path", { d: "M12 20v-8" }], ["path", { d: "M17 20V8" }], ["path", { d: "M22 4v16" }]]];
  const bi = ["svg", a, [["path", { d: "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" }], ["path", { d: "M3 21h18" }]]];
  const Ti = ["svg", a, [["path", { d: "M10 9H4L2 7l2-2h6" }], ["path", { d: "M14 5h6l2 2-2 2h-6" }], ["path", { d: "M10 22V4a2 2 0 1 1 4 0v18" }], ["path", { d: "M8 22h8" }]]];
  const Ui = ["svg", a, [["path", { d: "M12 13v8" }], ["path", { d: "M12 3v3" }], ["path", { d: "M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z" }]]];
  const Oi = ["svg", a, [["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6" }], ["path", { d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" }], ["path", { d: "M21 12h1" }], ["path", { d: "M18.5 4.5 18 5" }], ["path", { d: "M2 12h1" }], ["path", { d: "M12 2v1" }], ["path", { d: "m4.929 4.929.707.707" }], ["path", { d: "M12 12v6" }]]];
  const Ii = ["svg", a, [["polygon", { points: "19 20 9 12 19 4 19 20" }], ["line", { x1: "5", x2: "5", y1: "19", y2: "5" }]]];
  const Ei = ["svg", a, [["polygon", { points: "5 4 15 12 5 20 5 4" }], ["line", { x1: "19", x2: "19", y1: "5", y2: "19" }]]];
  const Gi = ["svg", a, [["path", { d: "m12.5 17-.5-1-.5 1h1z" }], ["path", { d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" }], ["circle", { cx: "15", cy: "12", r: "1" }], ["circle", { cx: "9", cy: "12", r: "1" }]]];
  const Wi = ["svg", a, [["rect", { width: "3", height: "8", x: "13", y: "2", rx: "1.5" }], ["path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" }], ["rect", { width: "3", height: "8", x: "8", y: "14", rx: "1.5" }], ["path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" }], ["rect", { width: "8", height: "3", x: "14", y: "13", rx: "1.5" }], ["path", { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" }], ["rect", { width: "8", height: "3", x: "2", y: "8", rx: "1.5" }], ["path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" }]]];
  const Xi = ["svg", a, [["path", { d: "M22 2 2 22" }]]];
  const Ni = ["svg", a, [["path", { d: "M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14" }]]];
  const Ki = ["svg", a, [["line", { x1: "21", x2: "14", y1: "4", y2: "4" }], ["line", { x1: "10", x2: "3", y1: "4", y2: "4" }], ["line", { x1: "21", x2: "12", y1: "12", y2: "12" }], ["line", { x1: "8", x2: "3", y1: "12", y2: "12" }], ["line", { x1: "21", x2: "16", y1: "20", y2: "20" }], ["line", { x1: "12", x2: "3", y1: "20", y2: "20" }], ["line", { x1: "14", x2: "14", y1: "2", y2: "6" }], ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }], ["line", { x1: "16", x2: "16", y1: "18", y2: "22" }]]];
  const P2 = ["svg", a, [["line", { x1: "4", x2: "4", y1: "21", y2: "14" }], ["line", { x1: "4", x2: "4", y1: "10", y2: "3" }], ["line", { x1: "12", x2: "12", y1: "21", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "3" }], ["line", { x1: "20", x2: "20", y1: "21", y2: "16" }], ["line", { x1: "20", x2: "20", y1: "12", y2: "3" }], ["line", { x1: "2", x2: "6", y1: "14", y2: "14" }], ["line", { x1: "10", x2: "14", y1: "8", y2: "8" }], ["line", { x1: "18", x2: "22", y1: "16", y2: "16" }]]];
  const $i = ["svg", a, [["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }], ["path", { d: "M12.667 8 10 12h4l-2.667 4" }]]];
  const Ji = ["svg", a, [["rect", { width: "7", height: "12", x: "2", y: "6", rx: "1" }], ["path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36" }], ["path", { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58" }], ["path", { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" }]]];
  const ji = ["svg", a, [["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }], ["path", { d: "M12 18h.01" }]]];
  const Qi = ["svg", a, [["path", { d: "M22 11v1a10 10 0 1 1-9-10" }], ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }], ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }], ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }], ["path", { d: "M16 5h6" }], ["path", { d: "M19 2v6" }]]];
  const _i = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }], ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }], ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]]];
  const Yi = ["svg", a, [["path", { d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" }], ["circle", { cx: "10", cy: "13", r: "8" }], ["path", { d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" }], ["path", { d: "M18 3 19.1 5.2" }], ["path", { d: "M22 3 20.9 5.2" }]]];
  const al = ["svg", a, [["path", { d: "m10 20-1.25-2.5L6 18" }], ["path", { d: "M10 4 8.75 6.5 6 6" }], ["path", { d: "m14 20 1.25-2.5L18 18" }], ["path", { d: "m14 4 1.25 2.5L18 6" }], ["path", { d: "m17 21-3-6h-4" }], ["path", { d: "m17 3-3 6 1.5 3" }], ["path", { d: "M2 12h6.5L10 9" }], ["path", { d: "m20 10-1.5 2 1.5 2" }], ["path", { d: "M22 12h-6.5L14 15" }], ["path", { d: "m4 10 1.5 2L4 14" }], ["path", { d: "m7 21 3-6-1.5-3" }], ["path", { d: "m7 3 3 6h4" }]]];
  const tl = ["svg", a, [["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }], ["path", { d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" }], ["path", { d: "M4 18v2" }], ["path", { d: "M20 18v2" }], ["path", { d: "M12 4v9" }]]];
  const hl = ["svg", a, [["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }], ["path", { d: "M7 21h10" }], ["path", { d: "M19.5 12 22 6" }], ["path", { d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" }], ["path", { d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" }], ["path", { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" }]]];
  const dl = ["svg", a, [["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]]];
  const pl = ["svg", a, [["path", { d: "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z" }], ["path", { d: "M12 18v4" }]]];
  const cl = ["svg", a, [["path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" }]]];
  const Z2 = ["svg", a, [["path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" }], ["path", { d: "M20 3v4" }], ["path", { d: "M22 5h-4" }], ["path", { d: "M4 17v2" }], ["path", { d: "M5 18H3" }]]];
  const Ml = ["svg", a, [["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }], ["path", { d: "M12 6h.01" }], ["circle", { cx: "12", cy: "14", r: "4" }], ["path", { d: "M12 14h.01" }]]];
  const sl = ["svg", a, [["path", { d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" }], ["path", { d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" }], ["path", { d: "M17 15a3.5 3.5 0 0 0-.025-4.975" }]]];
  const el = ["svg", a, [["path", { d: "m6 16 6-12 6 12" }], ["path", { d: "M8 12h8" }], ["path", { d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1" }]]];
  const rl = ["svg", a, [["path", { d: "m6 16 6-12 6 12" }], ["path", { d: "M8 12h8" }], ["path", { d: "m16 20 2 2 4-4" }]]];
  const vl = ["svg", a, [["circle", { cx: "19", cy: "5", r: "2" }], ["circle", { cx: "5", cy: "19", r: "2" }], ["path", { d: "M5 17A12 12 0 0 1 17 5" }]]];
  const ol = ["svg", a, [["path", { d: "M16 3h5v5" }], ["path", { d: "M8 3H3v5" }], ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" }], ["path", { d: "m15 9 6-6" }]]];
  const nl = ["svg", a, [["path", { d: "M3 3h.01" }], ["path", { d: "M7 5h.01" }], ["path", { d: "M11 7h.01" }], ["path", { d: "M3 7h.01" }], ["path", { d: "M7 9h.01" }], ["path", { d: "M3 11h.01" }], ["rect", { width: "4", height: "4", x: "15", y: "5" }], ["path", { d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" }], ["path", { d: "m13 14 8-2" }], ["path", { d: "m13 19 8-2" }]]];
  const il = ["svg", a, [["path", { d: "M7 20h10" }], ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10" }], ["path", { d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" }], ["path", { d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" }]]];
  const z2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M17 12h-2l-2 5-2-10-2 5H7" }]]];
  const k2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m16 8-8 8" }], ["path", { d: "M16 16H8V8" }]]];
  const B2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m8 8 8 8" }], ["path", { d: "M16 8v8H8" }]]];
  const D2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M12 8v8" }], ["path", { d: "m8 12 4 4 4-4" }]]];
  const F2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m12 8-4 4 4 4" }], ["path", { d: "M16 12H8" }]]];
  const q2 = ["svg", a, [["path", { d: "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" }], ["path", { d: "m3 21 9-9" }], ["path", { d: "M9 21H3v-6" }]]];
  const R2 = ["svg", a, [["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }], ["path", { d: "m21 21-9-9" }], ["path", { d: "M21 15v6h-6" }]]];
  const b2 = ["svg", a, [["path", { d: "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" }], ["path", { d: "m3 3 9 9" }], ["path", { d: "M3 9V3h6" }]]];
  const T2 = ["svg", a, [["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" }], ["path", { d: "m21 3-9 9" }], ["path", { d: "M15 3h6v6" }]]];
  const U2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M8 12h8" }], ["path", { d: "m12 16 4-4-4-4" }]]];
  const O2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M8 16V8h8" }], ["path", { d: "M16 16 8 8" }]]];
  const I2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M8 8h8v8" }], ["path", { d: "m8 16 8-8" }]]];
  const E2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m16 12-4-4-4 4" }], ["path", { d: "M12 16V8" }]]];
  const G2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M12 8v8" }], ["path", { d: "m8.5 14 7-4" }], ["path", { d: "m8.5 10 7 4" }]]];
  const W2 = ["svg", a, [["path", { d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2" }], ["path", { d: "M10 22H8" }], ["path", { d: "M16 22h-2" }], ["circle", { cx: "8", cy: "8", r: "2" }], ["path", { d: "M9.414 9.414 12 12" }], ["path", { d: "M14.8 14.8 18 18" }], ["circle", { cx: "8", cy: "16", r: "2" }], ["path", { d: "m18 6-8.586 8.586" }]]];
  const l = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 8h7" }], ["path", { d: "M8 12h6" }], ["path", { d: "M11 16h5" }]]];
  const X2 = ["svg", a, [["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5" }], ["path", { d: "m9 11 3 3L22 4" }]]];
  const N2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m9 12 2 2 4-4" }]]];
  const K2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m16 10-4 4-4-4" }]]];
  const $2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m14 16-4-4 4-4" }]]];
  const J2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m10 8 4 4-4 4" }]]];
  const j2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m8 14 4-4 4 4" }]]];
  const Q2 = ["svg", a, [["path", { d: "M10 9.5 8 12l2 2.5" }], ["path", { d: "m14 9.5 2 2.5-2 2.5" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]]];
  const ll = ["svg", a, [["path", { d: "M10 9.5 8 12l2 2.5" }], ["path", { d: "M14 21h1" }], ["path", { d: "m14 9.5 2 2.5-2 2.5" }], ["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }], ["path", { d: "M9 21h1" }]]];
  const gl = ["svg", a, [["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }], ["path", { d: "M9 21h1" }], ["path", { d: "M14 21h1" }]]];
  const _2 = ["svg", a, [["path", { d: "M8 7v7" }], ["path", { d: "M12 7v4" }], ["path", { d: "M16 7v9" }], ["path", { d: "M5 3a2 2 0 0 0-2 2" }], ["path", { d: "M9 3h1" }], ["path", { d: "M14 3h1" }], ["path", { d: "M19 3a2 2 0 0 1 2 2" }], ["path", { d: "M21 9v1" }], ["path", { d: "M21 14v1" }], ["path", { d: "M21 19a2 2 0 0 1-2 2" }], ["path", { d: "M14 21h1" }], ["path", { d: "M9 21h1" }], ["path", { d: "M5 21a2 2 0 0 1-2-2" }], ["path", { d: "M3 14v1" }], ["path", { d: "M3 9v1" }]]];
  const Y2 = ["svg", a, [["path", { d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" }], ["path", { d: "M5 3a2 2 0 0 0-2 2" }], ["path", { d: "M19 3a2 2 0 0 1 2 2" }], ["path", { d: "M5 21a2 2 0 0 1-2-2" }], ["path", { d: "M9 3h1" }], ["path", { d: "M9 21h2" }], ["path", { d: "M14 3h1" }], ["path", { d: "M3 9v1" }], ["path", { d: "M21 9v2" }], ["path", { d: "M3 14v1" }]]];
  const a0 = ["svg", a, [["path", { d: "M5 3a2 2 0 0 0-2 2" }], ["path", { d: "M19 3a2 2 0 0 1 2 2" }], ["path", { d: "M21 19a2 2 0 0 1-2 2" }], ["path", { d: "M5 21a2 2 0 0 1-2-2" }], ["path", { d: "M9 3h1" }], ["path", { d: "M9 21h1" }], ["path", { d: "M14 3h1" }], ["path", { d: "M14 21h1" }], ["path", { d: "M3 9v1" }], ["path", { d: "M21 9v1" }], ["path", { d: "M3 14v1" }], ["path", { d: "M21 14v1" }]]];
  const t0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "16", y2: "16" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "8" }]]];
  const h0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["circle", { cx: "12", cy: "12", r: "1" }]]];
  const d0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M7 10h10" }], ["path", { d: "M7 14h10" }]]];
  const p0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" }], ["path", { d: "M9 11.2h5.7" }]]];
  const c0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M8 7v7" }], ["path", { d: "M12 7v4" }], ["path", { d: "M16 7v9" }]]];
  const M0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M7 7v10" }], ["path", { d: "M11 7v10" }], ["path", { d: "m15 7 2 10" }]]];
  const s0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M8 16V8l4 4 4-4v8" }]]];
  const e0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M7 8h10" }], ["path", { d: "M7 12h10" }], ["path", { d: "M7 16h10" }]]];
  const r0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M8 12h8" }]]];
  const v0 = ["svg", a, [["path", { d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" }], ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }]]];
  const o0 = ["svg", a, [["path", { d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" }], ["path", { d: "M3 8.7V19a2 2 0 0 0 2 2h10.3" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2" }], ["path", { d: "M9 17v-2.3" }]]];
  const n0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9" }]]];
  const o = ["svg", a, [["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }], ["path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" }]]];
  const i0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m15 9-6 6" }], ["path", { d: "M9 9h.01" }], ["path", { d: "M15 15h.01" }]]];
  const l0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M7 7h10" }], ["path", { d: "M10 7v10" }], ["path", { d: "M16 17a2 2 0 0 1-2-2V7" }]]];
  const g0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17" }], ["path", { d: "M12 7v10" }], ["path", { d: "M16 7v10" }]]];
  const x0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m9 8 6 4-6 4Z" }]]];
  const y0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M8 12h8" }], ["path", { d: "M12 8v8" }]]];
  const m0 = ["svg", a, [["path", { d: "M12 7v4" }], ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]]];
  const xl = ["svg", a, [["path", { d: "M7 12h2l2 5 2-10h4" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]]];
  const H0 = ["svg", a, [["rect", { width: "20", height: "20", x: "2", y: "2", rx: "2" }], ["circle", { cx: "8", cy: "8", r: "2" }], ["path", { d: "M9.414 9.414 12 12" }], ["path", { d: "M14.8 14.8 18 18" }], ["circle", { cx: "8", cy: "16", r: "2" }], ["path", { d: "m18 6-8.586 8.586" }]]];
  const V0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M16 8.9V7H8l4 5-4 5h8v-1.9" }]]];
  const C0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }]]];
  const u0 = ["svg", a, [["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" }], ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" }], ["line", { x1: "12", x2: "12", y1: "4", y2: "20" }]]];
  const w0 = ["svg", a, [["path", { d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" }], ["path", { d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" }], ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }]]];
  const yl = ["svg", a, [["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }], ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1" }]]];
  const ml = ["svg", a, [["path", { d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }], ["path", { d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }], ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2" }]]];
  const A0 = ["svg", a, [["path", { d: "m7 11 2-2-2-2" }], ["path", { d: "M11 13h4" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }]]];
  const L0 = ["svg", a, [["path", { d: "M18 21a6 6 0 0 0-12 0" }], ["circle", { cx: "12", cy: "11", r: "4" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]]];
  const S0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }]]];
  const f0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "m15 9-6 6" }], ["path", { d: "m9 9 6 6" }]]];
  const Hl = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]]];
  const Vl = ["svg", a, [["path", { d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" }]]];
  const Cl = ["svg", a, [["path", { d: "M15.236 22a3 3 0 0 0-2.2-5" }], ["path", { d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" }], ["path", { d: "M18 13h.01" }], ["path", { d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" }]]];
  const ul = ["svg", a, [["path", { d: "M5 22h14" }], ["path", { d: "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z" }], ["path", { d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13" }]]];
  const wl = ["svg", a, [["path", { d: "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" }]]];
  const Al = ["svg", a, [["path", { d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43" }], ["path", { d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const Ll = ["svg", a, [["path", { d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" }]]];
  const Sl = ["svg", a, [["line", { x1: "18", x2: "18", y1: "20", y2: "4" }], ["polygon", { points: "14,20 4,12 14,4" }]]];
  const fl = ["svg", a, [["line", { x1: "6", x2: "6", y1: "4", y2: "20" }], ["polygon", { points: "10,4 20,12 10,20" }]]];
  const Pl = ["svg", a, [["path", { d: "M11 2v2" }], ["path", { d: "M5 2v2" }], ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" }], ["path", { d: "M8 15a6 6 0 0 0 12 0v-3" }], ["circle", { cx: "20", cy: "10", r: "2" }]]];
  const Zl = ["svg", a, [["path", { d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" }], ["path", { d: "M14 3v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M8 13h.01" }], ["path", { d: "M16 13h.01" }], ["path", { d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1" }]]];
  const zl = ["svg", a, [["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" }], ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4" }]]];
  const kl = ["svg", a, [["path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" }], ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }], ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" }], ["path", { d: "M2 7h20" }], ["path", { d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" }]]];
  const Bl = ["svg", a, [["rect", { width: "20", height: "6", x: "2", y: "4", rx: "2" }], ["rect", { width: "20", height: "6", x: "2", y: "14", rx: "2" }]]];
  const Dl = ["svg", a, [["rect", { width: "6", height: "20", x: "4", y: "2", rx: "2" }], ["rect", { width: "6", height: "20", x: "14", y: "2", rx: "2" }]]];
  const Fl = ["svg", a, [["path", { d: "M16 4H9a3 3 0 0 0-2.83 4" }], ["path", { d: "M14 12a4 4 0 0 1 0 8H6" }], ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }]]];
  const ql = ["svg", a, [["path", { d: "m4 5 8 8" }], ["path", { d: "m12 5-8 8" }], ["path", { d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" }]]];
  const Rl = ["svg", a, [["circle", { cx: "12", cy: "12", r: "4" }], ["path", { d: "M12 4h.01" }], ["path", { d: "M20 12h.01" }], ["path", { d: "M12 20h.01" }], ["path", { d: "M4 12h.01" }], ["path", { d: "M17.657 6.343h.01" }], ["path", { d: "M17.657 17.657h.01" }], ["path", { d: "M6.343 17.657h.01" }], ["path", { d: "M6.343 6.343h.01" }]]];
  const bl = ["svg", a, [["circle", { cx: "12", cy: "12", r: "4" }], ["path", { d: "M12 3v1" }], ["path", { d: "M12 20v1" }], ["path", { d: "M3 12h1" }], ["path", { d: "M20 12h1" }], ["path", { d: "m18.364 5.636-.707.707" }], ["path", { d: "m6.343 17.657-.707.707" }], ["path", { d: "m5.636 5.636.707.707" }], ["path", { d: "m17.657 17.657.707.707" }]]];
  const Tl = ["svg", a, [["path", { d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" }], ["path", { d: "M12 2v2" }], ["path", { d: "M12 20v2" }], ["path", { d: "m4.9 4.9 1.4 1.4" }], ["path", { d: "m17.7 17.7 1.4 1.4" }], ["path", { d: "M2 12h2" }], ["path", { d: "M20 12h2" }], ["path", { d: "m6.3 17.7-1.4 1.4" }], ["path", { d: "m19.1 4.9-1.4 1.4" }]]];
  const Ul = ["svg", a, [["path", { d: "M10 21v-1" }], ["path", { d: "M10 4V3" }], ["path", { d: "M10 9a3 3 0 0 0 0 6" }], ["path", { d: "m14 20 1.25-2.5L18 18" }], ["path", { d: "m14 4 1.25 2.5L18 6" }], ["path", { d: "m17 21-3-6 1.5-3H22" }], ["path", { d: "m17 3-3 6 1.5 3" }], ["path", { d: "M2 12h1" }], ["path", { d: "m20 10-1.5 2 1.5 2" }], ["path", { d: "m3.64 18.36.7-.7" }], ["path", { d: "m4.34 6.34-.7-.7" }]]];
  const Ol = ["svg", a, [["circle", { cx: "12", cy: "12", r: "4" }], ["path", { d: "M12 2v2" }], ["path", { d: "M12 20v2" }], ["path", { d: "m4.93 4.93 1.41 1.41" }], ["path", { d: "m17.66 17.66 1.41 1.41" }], ["path", { d: "M2 12h2" }], ["path", { d: "M20 12h2" }], ["path", { d: "m6.34 17.66-1.41 1.41" }], ["path", { d: "m19.07 4.93-1.41 1.41" }]]];
  const Il = ["svg", a, [["path", { d: "M12 2v8" }], ["path", { d: "m4.93 10.93 1.41 1.41" }], ["path", { d: "M2 18h2" }], ["path", { d: "M20 18h2" }], ["path", { d: "m19.07 10.93-1.41 1.41" }], ["path", { d: "M22 22H2" }], ["path", { d: "m8 6 4-4 4 4" }], ["path", { d: "M16 18a4 4 0 0 0-8 0" }]]];
  const El = ["svg", a, [["path", { d: "M12 10V2" }], ["path", { d: "m4.93 10.93 1.41 1.41" }], ["path", { d: "M2 18h2" }], ["path", { d: "M20 18h2" }], ["path", { d: "m19.07 10.93-1.41 1.41" }], ["path", { d: "M22 22H2" }], ["path", { d: "m16 6-4 4-4-4" }], ["path", { d: "M16 18a4 4 0 0 0-8 0" }]]];
  const Gl = ["svg", a, [["path", { d: "m4 19 8-8" }], ["path", { d: "m12 19-8-8" }], ["path", { d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" }]]];
  const Wl = ["svg", a, [["path", { d: "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" }], ["path", { d: "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" }], ["path", { d: "M 7 17h.01" }], ["path", { d: "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8" }]]];
  const Xl = ["svg", a, [["path", { d: "M10 21V3h8" }], ["path", { d: "M6 16h9" }], ["path", { d: "M10 9.5h7" }]]];
  const Nl = ["svg", a, [["path", { d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" }], ["path", { d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" }], ["circle", { cx: "12", cy: "12", r: "3" }], ["path", { d: "m18 22-3-3 3-3" }], ["path", { d: "m6 2 3 3-3 3" }]]];
  const Kl = ["svg", a, [["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }], ["line", { x1: "13", x2: "19", y1: "19", y2: "13" }], ["line", { x1: "16", x2: "20", y1: "16", y2: "20" }], ["line", { x1: "19", x2: "21", y1: "21", y2: "19" }]]];
  const $l = ["svg", a, [["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }], ["line", { x1: "13", x2: "19", y1: "19", y2: "13" }], ["line", { x1: "16", x2: "20", y1: "16", y2: "20" }], ["line", { x1: "19", x2: "21", y1: "21", y2: "19" }], ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5" }], ["line", { x1: "5", x2: "9", y1: "14", y2: "18" }], ["line", { x1: "7", x2: "4", y1: "17", y2: "20" }], ["line", { x1: "3", x2: "5", y1: "19", y2: "21" }]]];
  const Jl = ["svg", a, [["path", { d: "m18 2 4 4" }], ["path", { d: "m17 7 3-3" }], ["path", { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" }], ["path", { d: "m9 11 4 4" }], ["path", { d: "m5 19-3 3" }], ["path", { d: "m14 4 6 6" }]]];
  const jl = ["svg", a, [["path", { d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" }]]];
  const Ql = ["svg", a, [["path", { d: "M12 21v-6" }], ["path", { d: "M12 9V3" }], ["path", { d: "M3 15h18" }], ["path", { d: "M3 9h18" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]]];
  const _l = ["svg", a, [["path", { d: "M12 15V9" }], ["path", { d: "M3 15h18" }], ["path", { d: "M3 9h18" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]]];
  const Yl = ["svg", a, [["path", { d: "M14 14v2" }], ["path", { d: "M14 20v2" }], ["path", { d: "M14 2v2" }], ["path", { d: "M14 8v2" }], ["path", { d: "M2 15h8" }], ["path", { d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" }], ["path", { d: "M2 9h8" }], ["path", { d: "M22 15h-4" }], ["path", { d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }], ["path", { d: "M22 9h-4" }], ["path", { d: "M5 3v18" }]]];
  const ag = ["svg", a, [["path", { d: "M16 12H3" }], ["path", { d: "M16 18H3" }], ["path", { d: "M16 6H3" }], ["path", { d: "M21 12h.01" }], ["path", { d: "M21 18h.01" }], ["path", { d: "M21 6h.01" }]]];
  const tg = ["svg", a, [["path", { d: "M15 3v18" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M21 9H3" }], ["path", { d: "M21 15H3" }]]];
  const hg = ["svg", a, [["path", { d: "M14 10h2" }], ["path", { d: "M15 22v-8" }], ["path", { d: "M15 2v4" }], ["path", { d: "M2 10h2" }], ["path", { d: "M20 10h2" }], ["path", { d: "M3 19h18" }], ["path", { d: "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" }], ["path", { d: "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" }], ["path", { d: "M8 10h2" }], ["path", { d: "M9 22v-8" }], ["path", { d: "M9 2v4" }]]];
  const dg = ["svg", a, [["path", { d: "M12 3v18" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18" }], ["path", { d: "M3 15h18" }]]];
  const pg = ["svg", a, [["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2" }], ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" }], ["path", { d: "M8 18h.01" }]]];
  const cg = ["svg", a, [["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }], ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18" }]]];
  const Mg = ["svg", a, [["circle", { cx: "7", cy: "7", r: "5" }], ["circle", { cx: "17", cy: "17", r: "5" }], ["path", { d: "M12 17h10" }], ["path", { d: "m3.46 10.54 7.08-7.08" }]]];
  const sg = ["svg", a, [["path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }]]];
  const eg = ["svg", a, [["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" }], ["path", { d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" }], ["circle", { cx: "6.5", cy: "9.5", r: ".5", fill: "currentColor" }]]];
  const rg = ["svg", a, [["path", { d: "M4 4v16" }]]];
  const vg = ["svg", a, [["path", { d: "M4 4v16" }], ["path", { d: "M9 4v16" }]]];
  const og = ["svg", a, [["path", { d: "M4 4v16" }], ["path", { d: "M9 4v16" }], ["path", { d: "M14 4v16" }]]];
  const ng = ["svg", a, [["path", { d: "M4 4v16" }], ["path", { d: "M9 4v16" }], ["path", { d: "M14 4v16" }], ["path", { d: "M19 4v16" }]]];
  const ig = ["svg", a, [["path", { d: "M4 4v16" }], ["path", { d: "M9 4v16" }], ["path", { d: "M14 4v16" }], ["path", { d: "M19 4v16" }], ["path", { d: "M22 6 2 18" }]]];
  const lg = ["svg", a, [["circle", { cx: "17", cy: "4", r: "2" }], ["path", { d: "M15.59 5.41 5.41 15.59" }], ["circle", { cx: "4", cy: "17", r: "2" }], ["path", { d: "M12 22s-4-9-1.5-11.5S22 12 22 12" }]]];
  const gg = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["circle", { cx: "12", cy: "12", r: "6" }], ["circle", { cx: "12", cy: "12", r: "2" }]]];
  const xg = ["svg", a, [["path", { d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" }], ["path", { d: "m13.56 11.747 4.332-.924" }], ["path", { d: "m16 21-3.105-6.21" }], ["path", { d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" }], ["path", { d: "m6.158 8.633 1.114 4.456" }], ["path", { d: "m8 21 3.105-6.21" }], ["circle", { cx: "12", cy: "13", r: "2" }]]];
  const yg = ["svg", a, [["circle", { cx: "4", cy: "4", r: "2" }], ["path", { d: "m14 5 3-3 3 3" }], ["path", { d: "m14 10 3-3 3 3" }], ["path", { d: "M17 14V2" }], ["path", { d: "M17 14H7l-5 8h20Z" }], ["path", { d: "M8 14v8" }], ["path", { d: "m9 14 5 8" }]]];
  const mg = ["svg", a, [["path", { d: "M3.5 21 14 3" }], ["path", { d: "M20.5 21 10 3" }], ["path", { d: "M15.5 21 12 15l-3.5 6" }], ["path", { d: "M2 21h20" }]]];
  const Hg = ["svg", a, [["polyline", { points: "4 17 10 11 4 5" }], ["line", { x1: "12", x2: "20", y1: "19", y2: "19" }]]];
  const P0 = ["svg", a, [["path", { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" }], ["path", { d: "m16 2 6 6" }], ["path", { d: "M12 16H4" }]]];
  const Vg = ["svg", a, [["path", { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" }], ["path", { d: "M8.5 2h7" }], ["path", { d: "M14.5 16h-5" }]]];
  const Cg = ["svg", a, [["path", { d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" }], ["path", { d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" }], ["path", { d: "M3 2h7" }], ["path", { d: "M14 2h7" }], ["path", { d: "M9 16H4" }], ["path", { d: "M20 16h-5" }]]];
  const ug = ["svg", a, [["path", { d: "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1" }], ["path", { d: "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5" }], ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" }], ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" }], ["path", { d: "M9 7v10" }]]];
  const wg = ["svg", a, [["path", { d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" }], ["path", { d: "M7 22h1a4 4 0 0 0 4-4v-1" }], ["path", { d: "M7 2h1a4 4 0 0 1 4 4v1" }]]];
  const Ag = ["svg", a, [["path", { d: "M17 6H3" }], ["path", { d: "M21 12H8" }], ["path", { d: "M21 18H8" }], ["path", { d: "M3 12v6" }]]];
  const Lg = ["svg", a, [["path", { d: "M21 6H3" }], ["path", { d: "M10 12H3" }], ["path", { d: "M10 18H3" }], ["circle", { cx: "17", cy: "15", r: "3" }], ["path", { d: "m21 19-1.9-1.9" }]]];
  const Z0 = ["svg", a, [["path", { d: "M5 3a2 2 0 0 0-2 2" }], ["path", { d: "M19 3a2 2 0 0 1 2 2" }], ["path", { d: "M21 19a2 2 0 0 1-2 2" }], ["path", { d: "M5 21a2 2 0 0 1-2-2" }], ["path", { d: "M9 3h1" }], ["path", { d: "M9 21h1" }], ["path", { d: "M14 3h1" }], ["path", { d: "M14 21h1" }], ["path", { d: "M3 9v1" }], ["path", { d: "M21 9v1" }], ["path", { d: "M3 14v1" }], ["path", { d: "M21 14v1" }], ["line", { x1: "7", x2: "15", y1: "8", y2: "8" }], ["line", { x1: "7", x2: "17", y1: "12", y2: "12" }], ["line", { x1: "7", x2: "13", y1: "16", y2: "16" }]]];
  const Sg = ["svg", a, [["path", { d: "M17 6.1H3" }], ["path", { d: "M21 12.1H3" }], ["path", { d: "M15.1 18H3" }]]];
  const fg = ["svg", a, [["path", { d: "M2 10s3-3 3-8" }], ["path", { d: "M22 10s-3-3-3-8" }], ["path", { d: "M10 2c0 4.4-3.6 8-8 8" }], ["path", { d: "M14 2c0 4.4 3.6 8 8 8" }], ["path", { d: "M2 10s2 2 2 5" }], ["path", { d: "M22 10s-2 2-2 5" }], ["path", { d: "M8 15h8" }], ["path", { d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }], ["path", { d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }]]];
  const Pg = ["svg", a, [["path", { d: "m10 20-1.25-2.5L6 18" }], ["path", { d: "M10 4 8.75 6.5 6 6" }], ["path", { d: "M10.585 15H10" }], ["path", { d: "M2 12h6.5L10 9" }], ["path", { d: "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" }], ["path", { d: "m4 10 1.5 2L4 14" }], ["path", { d: "m7 21 3-6-1.5-3" }], ["path", { d: "m7 3 3 6h2" }]]];
  const Zg = ["svg", a, [["path", { d: "M12 9a4 4 0 0 0-2 7.5" }], ["path", { d: "M12 3v2" }], ["path", { d: "m6.6 18.4-1.4 1.4" }], ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }], ["path", { d: "M4 13H2" }], ["path", { d: "M6.34 7.34 4.93 5.93" }]]];
  const zg = ["svg", a, [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }]]];
  const kg = ["svg", a, [["path", { d: "M17 14V2" }], ["path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" }]]];
  const Bg = ["svg", a, [["path", { d: "M7 10v12" }], ["path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" }]]];
  const Dg = ["svg", a, [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "m9 12 2 2 4-4" }]]];
  const Fg = ["svg", a, [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "M9 12h6" }]]];
  const qg = ["svg", a, [["path", { d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "M9 9h.01" }], ["path", { d: "m15 9-6 6" }], ["path", { d: "M15 15h.01" }]]];
  const Rg = ["svg", a, [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "M9 12h6" }], ["path", { d: "M12 9v6" }]]];
  const bg = ["svg", a, [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "m9.5 14.5 5-5" }]]];
  const Tg = ["svg", a, [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "m9.5 14.5 5-5" }], ["path", { d: "m9.5 9.5 5 5" }]]];
  const Ug = ["svg", a, [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "M13 5v2" }], ["path", { d: "M13 17v2" }], ["path", { d: "M13 11v2" }]]];
  const Og = ["svg", a, [["path", { d: "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" }], ["path", { d: "m12 13.5 3.75.5" }], ["path", { d: "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" }], ["path", { d: "M6 10V8" }], ["path", { d: "M6 14v1" }], ["path", { d: "M6 19v2" }], ["rect", { x: "2", y: "8", width: "20", height: "13", rx: "2" }]]];
  const Ig = ["svg", a, [["path", { d: "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" }], ["path", { d: "M6 10V8" }], ["path", { d: "M6 14v1" }], ["path", { d: "M6 19v2" }], ["rect", { x: "2", y: "8", width: "20", height: "13", rx: "2" }]]];
  const Eg = ["svg", a, [["path", { d: "M10 2h4" }], ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" }], ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M12 12v-2" }]]];
  const Gg = ["svg", a, [["path", { d: "M10 2h4" }], ["path", { d: "M12 14v-4" }], ["path", { d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" }], ["path", { d: "M9 17H4v5" }]]];
  const Wg = ["svg", a, [["line", { x1: "10", x2: "14", y1: "2", y2: "2" }], ["line", { x1: "12", x2: "15", y1: "14", y2: "11" }], ["circle", { cx: "12", cy: "14", r: "8" }]]];
  const Xg = ["svg", a, [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6" }], ["circle", { cx: "8", cy: "12", r: "2" }]]];
  const Ng = ["svg", a, [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6" }], ["circle", { cx: "16", cy: "12", r: "2" }]]];
  const Kg = ["svg", a, [["path", { d: "M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18" }], ["path", { d: "M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" }]]];
  const $g = ["svg", a, [["path", { d: "M21 4H3" }], ["path", { d: "M18 8H6" }], ["path", { d: "M19 12H9" }], ["path", { d: "M16 16h-6" }], ["path", { d: "M11 20H9" }]]];
  const Jg = ["svg", a, [["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2" }], ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5" }]]];
  const jg = ["svg", a, [["path", { d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16" }], ["path", { d: "M2 14h12" }], ["path", { d: "M22 14h-2" }], ["path", { d: "M12 20v-6" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M22 16V6a2 2 0 0 0-2-2H10" }]]];
  const Qg = ["svg", a, [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["path", { d: "M2 14h20" }], ["path", { d: "M12 20v-6" }]]];
  const _g = ["svg", a, [["path", { d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" }], ["path", { d: "M8 13v9" }], ["path", { d: "M16 22v-9" }], ["path", { d: "m9 6 1 7" }], ["path", { d: "m15 6-1 7" }], ["path", { d: "M12 6V2" }], ["path", { d: "M13 2h-2" }]]];
  const Yg = ["svg", a, [["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1" }], ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" }], ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" }]]];
  const ax = ["svg", a, [["path", { d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" }], ["path", { d: "M16 18h-5" }], ["path", { d: "M18 5a1 1 0 0 0-1 1v5.573" }], ["path", { d: "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" }], ["path", { d: "M4 11V4" }], ["path", { d: "M7 15h.01" }], ["path", { d: "M8 10.1V4" }], ["circle", { cx: "18", cy: "18", r: "2" }], ["circle", { cx: "7", cy: "15", r: "5" }]]];
  const tx = ["svg", a, [["path", { d: "M9.3 6.2a4.55 4.55 0 0 0 5.4 0" }], ["path", { d: "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3" }], ["path", { d: "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z" }], ["path", { d: "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8" }]]];
  const hx = ["svg", a, [["path", { d: "M2 22V12a10 10 0 1 1 20 0v10" }], ["path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" }], ["path", { d: "M10 15h.01" }], ["path", { d: "M14 15h.01" }], ["path", { d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" }], ["path", { d: "m9 19-2 3" }], ["path", { d: "m15 19 2 3" }]]];
  const dx = ["svg", a, [["path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1" }], ["path", { d: "m9 15-1-1" }], ["path", { d: "m15 15 1-1" }], ["path", { d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" }], ["path", { d: "m8 19-2 3" }], ["path", { d: "m16 19 2 3" }]]];
  const px = ["svg", a, [["path", { d: "M2 17 17 2" }], ["path", { d: "m2 14 8 8" }], ["path", { d: "m5 11 8 8" }], ["path", { d: "m8 8 8 8" }], ["path", { d: "m11 5 8 8" }], ["path", { d: "m14 2 8 8" }], ["path", { d: "M7 22 22 7" }]]];
  const z0 = ["svg", a, [["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }], ["path", { d: "M4 11h16" }], ["path", { d: "M12 3v8" }], ["path", { d: "m8 19-2 3" }], ["path", { d: "m18 22-2-3" }], ["path", { d: "M8 15h.01" }], ["path", { d: "M16 15h.01" }]]];
  const cx = ["svg", a, [["path", { d: "M3 6h18" }], ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }], ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "17" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "17" }]]];
  const Mx = ["svg", a, [["path", { d: "M3 6h18" }], ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }], ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }]]];
  const sx = ["svg", a, [["path", { d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z" }], ["path", { d: "M12 19v3" }]]];
  const k0 = ["svg", a, [["path", { d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" }], ["path", { d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" }], ["path", { d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" }], ["path", { d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" }]]];
  const ex = ["svg", a, [["path", { d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z" }], ["path", { d: "M12 22v-3" }]]];
  const rx = ["svg", a, [["path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" }], ["path", { d: "M7 16v6" }], ["path", { d: "M13 19v3" }], ["path", { d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" }]]];
  const vx = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["rect", { width: "3", height: "9", x: "7", y: "7" }], ["rect", { width: "3", height: "5", x: "14", y: "7" }]]];
  const ox = ["svg", a, [["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7" }], ["polyline", { points: "16 17 22 17 22 11" }]]];
  const nx = ["svg", a, [["path", { d: "M14.828 14.828 21 21" }], ["path", { d: "M21 16v5h-5" }], ["path", { d: "m21 3-9 9-4-4-6 6" }], ["path", { d: "M21 8V3h-5" }]]];
  const ix = ["svg", a, [["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }], ["polyline", { points: "16 7 22 7 22 13" }]]];
  const B0 = ["svg", a, [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }], ["path", { d: "M12 9v4" }], ["path", { d: "M12 17h.01" }]]];
  const lx = ["svg", a, [["path", { d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z" }]]];
  const gx = ["svg", a, [["path", { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }]]];
  const xx = ["svg", a, [["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6" }], ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18" }], ["path", { d: "M4 22h16" }], ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" }], ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" }], ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z" }]]];
  const yx = ["svg", a, [["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }], ["path", { d: "M15 18H9" }], ["path", { d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" }], ["circle", { cx: "17", cy: "18", r: "2" }], ["circle", { cx: "7", cy: "18", r: "2" }]]];
  const mx = ["svg", a, [["path", { d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" }], ["path", { d: "M4.82 7.9 8 10" }], ["path", { d: "M15.18 7.9 12 10" }], ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2" }]]];
  const Hx = ["svg", a, [["path", { d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" }], ["path", { d: "M7 21h10" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }]]];
  const D0 = ["svg", a, [["path", { d: "M7 21h10" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }]]];
  const Vx = ["svg", a, [["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", ry: "2" }], ["polyline", { points: "17 2 12 7 7 2" }]]];
  const Cx = ["svg", a, [["path", { d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" }]]];
  const ux = ["svg", a, [["path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" }]]];
  const wx = ["svg", a, [["path", { d: "M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z" }]]];
  const Ax = ["svg", a, [["polyline", { points: "4 7 4 4 20 4 20 7" }], ["line", { x1: "9", x2: "15", y1: "20", y2: "20" }], ["line", { x1: "12", x2: "12", y1: "4", y2: "20" }]]];
  const Lx = ["svg", a, [["path", { d: "M12 2v1" }], ["path", { d: "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575" }], ["path", { d: "M17.5 12H22A10 10 0 0 0 9.004 3.455" }], ["path", { d: "m2 2 20 20" }]]];
  const Sx = ["svg", a, [["path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z" }], ["path", { d: "M12 12v8a2 2 0 0 0 4 0" }], ["path", { d: "M12 2v1" }]]];
  const fx = ["svg", a, [["path", { d: "M6 4v6a6 6 0 0 0 12 0V4" }], ["line", { x1: "4", x2: "20", y1: "20", y2: "20" }]]];
  const Px = ["svg", a, [["path", { d: "M9 14 4 9l5-5" }], ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" }]]];
  const Zx = ["svg", a, [["path", { d: "M21 17a9 9 0 0 0-15-6.7L3 13" }], ["path", { d: "M3 7v6h6" }], ["circle", { cx: "12", cy: "17", r: "1" }]]];
  const zx = ["svg", a, [["path", { d: "M3 7v6h6" }], ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }]]];
  const kx = ["svg", a, [["path", { d: "M16 12h6" }], ["path", { d: "M8 12H2" }], ["path", { d: "M12 2v2" }], ["path", { d: "M12 8v2" }], ["path", { d: "M12 14v2" }], ["path", { d: "M12 20v2" }], ["path", { d: "m19 15 3-3-3-3" }], ["path", { d: "m5 9-3 3 3 3" }]]];
  const Bx = ["svg", a, [["path", { d: "M12 22v-6" }], ["path", { d: "M12 8V2" }], ["path", { d: "M4 12H2" }], ["path", { d: "M10 12H8" }], ["path", { d: "M16 12h-2" }], ["path", { d: "M22 12h-2" }], ["path", { d: "m15 19-3 3-3-3" }], ["path", { d: "m15 5-3-3-3 3" }]]];
  const Dx = ["svg", a, [["rect", { width: "8", height: "6", x: "5", y: "4", rx: "1" }], ["rect", { width: "8", height: "6", x: "11", y: "14", rx: "1" }]]];
  const F0 = ["svg", a, [["circle", { cx: "12", cy: "10", r: "1" }], ["path", { d: "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" }], ["path", { d: "M6 17v.01" }], ["path", { d: "M6 13v.01" }], ["path", { d: "M18 17v.01" }], ["path", { d: "M18 13v.01" }], ["path", { d: "M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" }]]];
  const Fx = ["svg", a, [["path", { d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" }]]];
  const qx = ["svg", a, [["path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }], ["path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }], ["line", { x1: "8", x2: "8", y1: "2", y2: "5" }], ["line", { x1: "2", x2: "5", y1: "8", y2: "8" }], ["line", { x1: "16", x2: "16", y1: "19", y2: "22" }], ["line", { x1: "19", x2: "22", y1: "16", y2: "16" }]]];
  const Rx = ["svg", a, [["path", { d: "m19 5 3-3" }], ["path", { d: "m2 22 3-3" }], ["path", { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }], ["path", { d: "M7.5 13.5 10 11" }], ["path", { d: "M10.5 16.5 13 14" }], ["path", { d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" }]]];
  const bx = ["svg", a, [["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }], ["polyline", { points: "17 8 12 3 7 8" }], ["line", { x1: "12", x2: "12", y1: "3", y2: "15" }]]];
  const Tx = ["svg", a, [["circle", { cx: "10", cy: "7", r: "1" }], ["circle", { cx: "4", cy: "20", r: "1" }], ["path", { d: "M4.7 19.3 19 5" }], ["path", { d: "m21 3-3 1 2 2Z" }], ["path", { d: "M9.26 7.68 5 12l2 5" }], ["path", { d: "m10 14 5 2 3.5-3.5" }], ["path", { d: "m18 12 1-1 1 1-1 1Z" }]]];
  const Ux = ["svg", a, [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { cx: "9", cy: "7", r: "4" }], ["polyline", { points: "16 11 18 13 22 9" }]]];
  const Ox = ["svg", a, [["circle", { cx: "18", cy: "15", r: "3" }], ["circle", { cx: "9", cy: "7", r: "4" }], ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2" }], ["path", { d: "m21.7 16.4-.9-.3" }], ["path", { d: "m15.2 13.9-.9-.3" }], ["path", { d: "m16.6 18.7.3-.9" }], ["path", { d: "m19.1 12.2.3-.9" }], ["path", { d: "m19.6 18.7-.4-1" }], ["path", { d: "m16.8 12.3-.4-1" }], ["path", { d: "m14.3 16.6 1-.4" }], ["path", { d: "m20.7 13.8 1-.4" }]]];
  const Ix = ["svg", a, [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { cx: "9", cy: "7", r: "4" }], ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]]];
  const Ex = ["svg", a, [["path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2" }], ["path", { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }], ["circle", { cx: "10", cy: "7", r: "4" }]]];
  const Gx = ["svg", a, [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { cx: "9", cy: "7", r: "4" }], ["line", { x1: "19", x2: "19", y1: "8", y2: "14" }], ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]]];
  const q0 = ["svg", a, [["path", { d: "M2 21a8 8 0 0 1 13.292-6" }], ["circle", { cx: "10", cy: "8", r: "5" }], ["path", { d: "m16 19 2 2 4-4" }]]];
  const R0 = ["svg", a, [["path", { d: "M2 21a8 8 0 0 1 10.434-7.62" }], ["circle", { cx: "10", cy: "8", r: "5" }], ["circle", { cx: "18", cy: "18", r: "3" }], ["path", { d: "m19.5 14.3-.4.9" }], ["path", { d: "m16.9 20.8-.4.9" }], ["path", { d: "m21.7 19.5-.9-.4" }], ["path", { d: "m15.2 16.9-.9-.4" }], ["path", { d: "m21.7 16.5-.9.4" }], ["path", { d: "m15.2 19.1-.9.4" }], ["path", { d: "m19.5 21.7-.4-.9" }], ["path", { d: "m16.9 15.2-.4-.9" }]]];
  const b0 = ["svg", a, [["path", { d: "M2 21a8 8 0 0 1 13.292-6" }], ["circle", { cx: "10", cy: "8", r: "5" }], ["path", { d: "M22 19h-6" }]]];
  const Wx = ["svg", a, [["path", { d: "M2 21a8 8 0 0 1 10.821-7.487" }], ["path", { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }], ["circle", { cx: "10", cy: "8", r: "5" }]]];
  const T0 = ["svg", a, [["path", { d: "M2 21a8 8 0 0 1 13.292-6" }], ["circle", { cx: "10", cy: "8", r: "5" }], ["path", { d: "M19 16v6" }], ["path", { d: "M22 19h-6" }]]];
  const Xx = ["svg", a, [["circle", { cx: "10", cy: "8", r: "5" }], ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62" }], ["circle", { cx: "18", cy: "18", r: "3" }], ["path", { d: "m22 22-1.9-1.9" }]]];
  const U0 = ["svg", a, [["path", { d: "M2 21a8 8 0 0 1 11.873-7" }], ["circle", { cx: "10", cy: "8", r: "5" }], ["path", { d: "m17 17 5 5" }], ["path", { d: "m22 17-5 5" }]]];
  const O0 = ["svg", a, [["circle", { cx: "12", cy: "8", r: "5" }], ["path", { d: "M20 21a8 8 0 0 0-16 0" }]]];
  const Nx = ["svg", a, [["circle", { cx: "10", cy: "7", r: "4" }], ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2" }], ["circle", { cx: "17", cy: "17", r: "3" }], ["path", { d: "m21 21-1.9-1.9" }]]];
  const Kx = ["svg", a, [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { cx: "9", cy: "7", r: "4" }], ["line", { x1: "17", x2: "22", y1: "8", y2: "13" }], ["line", { x1: "22", x2: "17", y1: "8", y2: "13" }]]];
  const $x = ["svg", a, [["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }], ["circle", { cx: "12", cy: "7", r: "4" }]]];
  const I0 = ["svg", a, [["path", { d: "M18 21a8 8 0 0 0-16 0" }], ["circle", { cx: "10", cy: "8", r: "5" }], ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" }]]];
  const Jx = ["svg", a, [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { cx: "9", cy: "7", r: "4" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }], ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }]]];
  const E0 = ["svg", a, [["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" }], ["path", { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" }], ["path", { d: "m2.1 21.8 6.4-6.3" }], ["path", { d: "m19 5-7 7" }]]];
  const G0 = ["svg", a, [["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }], ["path", { d: "M7 2v20" }], ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" }]]];
  const jx = ["svg", a, [["path", { d: "M12 2v20" }], ["path", { d: "M2 5h20" }], ["path", { d: "M3 3v2" }], ["path", { d: "M7 3v2" }], ["path", { d: "M17 3v2" }], ["path", { d: "M21 3v2" }], ["path", { d: "m19 5-7 7-7-7" }]]];
  const Qx = ["svg", a, [["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }], ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }], ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }], ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }]]];
  const _x = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }], ["path", { d: "m7.9 7.9 2.7 2.7" }], ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor" }], ["path", { d: "m13.4 10.6 2.7-2.7" }], ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor" }], ["path", { d: "m7.9 16.1 2.7-2.7" }], ["circle", { cx: "16.5", cy: "16.5", r: ".5", fill: "currentColor" }], ["path", { d: "m13.4 13.4 2.7 2.7" }], ["circle", { cx: "12", cy: "12", r: "2" }]]];
  const Yx = ["svg", a, [["path", { d: "M16 8q6 0 6-6-6 0-6 6" }], ["path", { d: "M17.41 3.59a10 10 0 1 0 3 3" }], ["path", { d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" }]]];
  const ay = ["svg", a, [["path", { d: "M18 11c-1.5 0-2.5.5-3 2" }], ["path", { d: "M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" }], ["path", { d: "M6 11c1.5 0 2.5.5 3 2" }]]];
  const ty = ["svg", a, [["path", { d: "m2 8 2 2-2 2 2 2-2 2" }], ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }], ["path", { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" }], ["path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const hy = ["svg", a, [["path", { d: "m2 8 2 2-2 2 2 2-2 2" }], ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }], ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1" }]]];
  const dy = ["svg", a, [["path", { d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196" }], ["path", { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" }], ["path", { d: "m2 2 20 20" }]]];
  const py = ["svg", a, [["path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }], ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2" }]]];
  const cy = ["svg", a, [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["path", { d: "M2 8h20" }], ["circle", { cx: "8", cy: "14", r: "2" }], ["path", { d: "M8 12h8" }], ["circle", { cx: "16", cy: "14", r: "2" }]]];
  const My = ["svg", a, [["path", { d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" }], ["path", { d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" }], ["circle", { cx: "12", cy: "12", r: "1" }], ["path", { d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" }]]];
  const sy = ["svg", a, [["circle", { cx: "6", cy: "12", r: "4" }], ["circle", { cx: "18", cy: "12", r: "4" }], ["line", { x1: "6", x2: "18", y1: "16", y2: "16" }]]];
  const ey = ["svg", a, [["path", { d: "M11.1 7.1a16.55 16.55 0 0 1 10.9 4" }], ["path", { d: "M12 12a12.6 12.6 0 0 1-8.7 5" }], ["path", { d: "M16.8 13.6a16.55 16.55 0 0 1-9 7.5" }], ["path", { d: "M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" }], ["path", { d: "M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" }], ["circle", { cx: "12", cy: "12", r: "10" }]]];
  const ry = ["svg", a, [["path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" }], ["path", { d: "M16 9a5 5 0 0 1 0 6" }]]];
  const vy = ["svg", a, [["path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" }], ["path", { d: "M16 9a5 5 0 0 1 0 6" }], ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728" }]]];
  const oy = ["svg", a, [["path", { d: "M16 9a5 5 0 0 1 .95 2.293" }], ["path", { d: "M19.364 5.636a9 9 0 0 1 1.889 9.96" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" }], ["path", { d: "M9.828 4.172A.686.686 0 0 1 11 4.657v.686" }]]];
  const ny = ["svg", a, [["path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" }], ["line", { x1: "22", x2: "16", y1: "9", y2: "15" }], ["line", { x1: "16", x2: "22", y1: "9", y2: "15" }]]];
  const iy = ["svg", a, [["path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" }]]];
  const ly = ["svg", a, [["path", { d: "m9 12 2 2 4-4" }], ["path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }], ["path", { d: "M22 19H2" }]]];
  const gy = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" }], ["path", { d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" }]]];
  const W0 = ["svg", a, [["path", { d: "M17 14h.01" }], ["path", { d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" }]]];
  const xy = ["svg", a, [["path", { d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }], ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" }]]];
  const yy = ["svg", a, [["circle", { cx: "8", cy: "9", r: "2" }], ["path", { d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" }], ["path", { d: "M8 21h8" }], ["path", { d: "M12 17v4" }]]];
  const X0 = ["svg", a, [["path", { d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" }], ["path", { d: "m14 7 3 3" }], ["path", { d: "M5 6v4" }], ["path", { d: "M19 14v4" }], ["path", { d: "M10 2v2" }], ["path", { d: "M7 8H3" }], ["path", { d: "M21 16h-4" }], ["path", { d: "M11 3H9" }]]];
  const my = ["svg", a, [["path", { d: "M15 4V2" }], ["path", { d: "M15 16v-2" }], ["path", { d: "M8 9h2" }], ["path", { d: "M20 9h2" }], ["path", { d: "M17.8 11.8 19 13" }], ["path", { d: "M15 9h.01" }], ["path", { d: "M17.8 6.2 19 5" }], ["path", { d: "m3 21 9-9" }], ["path", { d: "M12.2 6.2 11 5" }]]];
  const Hy = ["svg", a, [["path", { d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" }], ["path", { d: "M6 18h12" }], ["path", { d: "M6 14h12" }], ["rect", { width: "12", height: "12", x: "6", y: "10" }]]];
  const Vy = ["svg", a, [["path", { d: "M3 6h3" }], ["path", { d: "M17 6h.01" }], ["rect", { width: "18", height: "20", x: "3", y: "2", rx: "2" }], ["circle", { cx: "12", cy: "13", r: "5" }], ["path", { d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" }]]];
  const Cy = ["svg", a, [["circle", { cx: "12", cy: "12", r: "6" }], ["polyline", { points: "12 10 12 12 13 13" }], ["path", { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" }], ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" }]]];
  const uy = ["svg", a, [["path", { d: "M19 5a2 2 0 0 0-2 2v11" }], ["path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }], ["path", { d: "M7 13h10" }], ["path", { d: "M7 9h10" }], ["path", { d: "M9 5a2 2 0 0 0-2 2v11" }]]];
  const wy = ["svg", a, [["path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }], ["path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }], ["path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }]]];
  const Ay = ["svg", a, [["circle", { cx: "12", cy: "4.5", r: "2.5" }], ["path", { d: "m10.2 6.3-3.9 3.9" }], ["circle", { cx: "4.5", cy: "12", r: "2.5" }], ["path", { d: "M7 12h10" }], ["circle", { cx: "19.5", cy: "12", r: "2.5" }], ["path", { d: "m13.8 17.7 3.9-3.9" }], ["circle", { cx: "12", cy: "19.5", r: "2.5" }]]];
  const Ly = ["svg", a, [["circle", { cx: "12", cy: "10", r: "8" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "M7 22h10" }], ["path", { d: "M12 22v-4" }]]];
  const Sy = ["svg", a, [["path", { d: "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" }], ["path", { d: "M9 3.4a4 4 0 0 1 6.52.66" }], ["path", { d: "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" }], ["path", { d: "M20.3 20.3a4 4 0 0 1-2.3.7" }], ["path", { d: "M18.6 13a4 4 0 0 1 3.357 3.414" }], ["path", { d: "m12 6 .6 1" }], ["path", { d: "m2 2 20 20" }]]];
  const fy = ["svg", a, [["path", { d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" }], ["path", { d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" }], ["path", { d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" }]]];
  const Py = ["svg", a, [["circle", { cx: "12", cy: "5", r: "3" }], ["path", { d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" }]]];
  const Zy = ["svg", a, [["path", { d: "m2 22 10-10" }], ["path", { d: "m16 8-1.17 1.17" }], ["path", { d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }], ["path", { d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97" }], ["path", { d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62" }], ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }], ["path", { d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }], ["path", { d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98" }], ["path", { d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const zy = ["svg", a, [["path", { d: "M2 22 16 8" }], ["path", { d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }], ["path", { d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }], ["path", { d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }], ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }], ["path", { d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }], ["path", { d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }], ["path", { d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }]]];
  const ky = ["svg", a, [["circle", { cx: "7", cy: "12", r: "3" }], ["path", { d: "M10 9v6" }], ["circle", { cx: "17", cy: "12", r: "3" }], ["path", { d: "M14 7v8" }], ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]]];
  const By = ["svg", a, [["path", { d: "M12 20h.01" }], ["path", { d: "M5 12.859a10 10 0 0 1 14 0" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]]];
  const Dy = ["svg", a, [["path", { d: "M12 20h.01" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]]];
  const Fy = ["svg", a, [["path", { d: "M12 20h.01" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }], ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69" }], ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523" }], ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643" }], ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764" }], ["path", { d: "m2 2 20 20" }]]];
  const qy = ["svg", a, [["path", { d: "M12 20h.01" }]]];
  const Ry = ["svg", a, [["path", { d: "M12 20h.01" }], ["path", { d: "M2 8.82a15 15 0 0 1 20 0" }], ["path", { d: "M5 12.859a10 10 0 0 1 14 0" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]]];
  const by = ["svg", a, [["path", { d: "M10 2v8" }], ["path", { d: "M12.8 21.6A2 2 0 1 0 14 18H2" }], ["path", { d: "M17.5 10a2.5 2.5 0 1 1 2 4H2" }], ["path", { d: "m6 6 4 4 4-4" }]]];
  const Ty = ["svg", a, [["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2" }], ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2" }], ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2" }]]];
  const Uy = ["svg", a, [["path", { d: "M8 22h8" }], ["path", { d: "M7 10h3m7 0h-1.343" }], ["path", { d: "M12 15v7" }], ["path", { d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const Oy = ["svg", a, [["path", { d: "M8 22h8" }], ["path", { d: "M7 10h10" }], ["path", { d: "M12 15v7" }], ["path", { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" }]]];
  const Iy = ["svg", a, [["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2" }], ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4" }], ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2" }]]];
  const Ey = ["svg", a, [["path", { d: "m19 12-1.5 3" }], ["path", { d: "M19.63 18.81 22 20" }], ["path", { d: "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z" }]]];
  const Gy = ["svg", a, [["line", { x1: "3", x2: "21", y1: "6", y2: "6" }], ["path", { d: "M3 12h15a3 3 0 1 1 0 6h-4" }], ["polyline", { points: "16 16 14 18 16 20" }], ["line", { x1: "3", x2: "10", y1: "18", y2: "18" }]]];
  const Wy = ["svg", a, [["path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }]]];
  const Xy = ["svg", a, [["path", { d: "M18 6 6 18" }], ["path", { d: "m6 6 12 12" }]]];
  const Ny = ["svg", a, [["path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }], ["path", { d: "m10 15 5-3-5-3z" }]]];
  const Ky = ["svg", a, [["path", { d: "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" }], ["path", { d: "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" }], ["path", { d: "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643" }], ["path", { d: "m2 2 20 20" }]]];
  const $y = ["svg", a, [["path", { d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" }]]];
  const Jy = ["svg", a, [["circle", { cx: "11", cy: "11", r: "8" }], ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }], ["line", { x1: "11", x2: "11", y1: "8", y2: "14" }], ["line", { x1: "8", x2: "14", y1: "11", y2: "11" }]]];
  const jy = ["svg", a, [["circle", { cx: "11", cy: "11", r: "8" }], ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }], ["line", { x1: "8", x2: "14", y1: "11", y2: "11" }]]];
  const Mm = Object.freeze(Object.defineProperty({ __proto__: null, AArrowDown: j0, AArrowUp: Q0, ALargeSmall: _0, Accessibility: Y0, Activity: aa, ActivitySquare: z2, AirVent: ta, Airplay: ha, AlarmCheck: x, AlarmClock: pa, AlarmClockCheck: x, AlarmClockMinus: y, AlarmClockOff: da, AlarmClockPlus: m, AlarmMinus: y, AlarmPlus: m, AlarmSmoke: ca, Album: Ma, AlertCircle: X, AlertOctagon: M2, AlertTriangle: B0, AlignCenter: ra, AlignCenterHorizontal: sa, AlignCenterVertical: ea, AlignEndHorizontal: va, AlignEndVertical: oa, AlignHorizontalDistributeCenter: na, AlignHorizontalDistributeEnd: ia, AlignHorizontalDistributeStart: la, AlignHorizontalJustifyCenter: ga, AlignHorizontalJustifyEnd: xa, AlignHorizontalJustifyStart: ya, AlignHorizontalSpaceAround: ma, AlignHorizontalSpaceBetween: Ha, AlignJustify: Va, AlignLeft: Ca, AlignRight: ua, AlignStartHorizontal: wa, AlignStartVertical: Aa, AlignVerticalDistributeCenter: La, AlignVerticalDistributeEnd: Sa, AlignVerticalDistributeStart: fa, AlignVerticalJustifyCenter: Pa, AlignVerticalJustifyEnd: Za, AlignVerticalJustifyStart: za, AlignVerticalSpaceAround: ka, AlignVerticalSpaceBetween: Ba, Ambulance: Da, Ampersand: Fa, Ampersands: qa, Amphora: Ra, Anchor: ba, Angry: Ta, Annoyed: Ua, Antenna: Oa, Anvil: Ia, Aperture: Ea, AppWindow: Wa, AppWindowMac: Ga, Apple: Xa, Archive: $a, ArchiveRestore: Na, ArchiveX: Ka, AreaChart: B, Armchair: Ja, ArrowBigDown: Qa, ArrowBigDownDash: ja, ArrowBigLeft: Ya, ArrowBigLeftDash: _a, ArrowBigRight: tt, ArrowBigRightDash: at, ArrowBigUp: dt, ArrowBigUpDash: ht, ArrowDown: it, ArrowDown01: pt, ArrowDown10: ct, ArrowDownAZ: H, ArrowDownAz: H, ArrowDownCircle: N, ArrowDownFromLine: Mt, ArrowDownLeft: st, ArrowDownLeftFromCircle: $, ArrowDownLeftFromSquare: q2, ArrowDownLeftSquare: k2, ArrowDownNarrowWide: et, ArrowDownRight: rt, ArrowDownRightFromCircle: J, ArrowDownRightFromSquare: R2, ArrowDownRightSquare: B2, ArrowDownSquare: D2, ArrowDownToDot: vt, ArrowDownToLine: ot, ArrowDownUp: nt, ArrowDownWideNarrow: V, ArrowDownZA: C, ArrowDownZa: C, ArrowLeft: yt, ArrowLeftCircle: K, ArrowLeftFromLine: lt, ArrowLeftRight: gt, ArrowLeftSquare: F2, ArrowLeftToLine: xt, ArrowRight: Ct, ArrowRightCircle: _, ArrowRightFromLine: mt, ArrowRightLeft: Ht, ArrowRightSquare: U2, ArrowRightToLine: Vt, ArrowUp: kt, ArrowUp01: ut, ArrowUp10: wt, ArrowUpAZ: u, ArrowUpAz: u, ArrowUpCircle: Y, ArrowUpDown: At, ArrowUpFromDot: Lt, ArrowUpFromLine: St, ArrowUpLeft: ft, ArrowUpLeftFromCircle: j, ArrowUpLeftFromSquare: b2, ArrowUpLeftSquare: O2, ArrowUpNarrowWide: w, ArrowUpRight: Pt, ArrowUpRightFromCircle: Q, ArrowUpRightFromSquare: T2, ArrowUpRightSquare: I2, ArrowUpSquare: E2, ArrowUpToLine: Zt, ArrowUpWideNarrow: zt, ArrowUpZA: A, ArrowUpZa: A, ArrowsUpFromLine: Bt, Asterisk: Dt, AsteriskSquare: G2, AtSign: Ft, Atom: qt, AudioLines: Rt, AudioWaveform: bt, Award: Tt, Axe: Ut, Axis3D: L, Axis3d: L, Baby: Ot, Backpack: It, Badge: dh, BadgeAlert: Et, BadgeCent: Gt, BadgeCheck: S, BadgeDollarSign: Wt, BadgeEuro: Xt, BadgeHelp: Nt, BadgeIndianRupee: Kt, BadgeInfo: $t, BadgeJapaneseYen: Jt, BadgeMinus: jt, BadgePercent: Qt, BadgePlus: _t, BadgePoundSterling: Yt, BadgeRussianRuble: ah, BadgeSwissFranc: th, BadgeX: hh, BaggageClaim: ph, Ban: ch, Banana: Mh, Bandage: sh, Banknote: eh, BarChart: O, BarChart2: I, BarChart3: T, BarChart4: b, BarChartBig: R, BarChartHorizontal: F, BarChartHorizontalBig: D, Barcode: rh, Baseline: vh, Bath: oh, Battery: yh, BatteryCharging: nh, BatteryFull: ih, BatteryLow: lh, BatteryMedium: gh, BatteryWarning: xh, Beaker: mh, Bean: Vh, BeanOff: Hh, Bed: wh, BedDouble: Ch, BedSingle: uh, Beef: Ah, Beer: Sh, BeerOff: Lh, Bell: Dh, BellDot: fh, BellElectric: Ph, BellMinus: Zh, BellOff: zh, BellPlus: kh, BellRing: Bh, BetweenHorizonalEnd: f, BetweenHorizonalStart: P, BetweenHorizontalEnd: f, BetweenHorizontalStart: P, BetweenVerticalEnd: Fh, BetweenVerticalStart: qh, BicepsFlexed: Rh, Bike: bh, Binary: Th, Binoculars: Uh, Biohazard: Oh, Bird: Ih, Bitcoin: Eh, Blend: Gh, Blinds: Wh, Blocks: Xh, Bluetooth: Jh, BluetoothConnected: Nh, BluetoothOff: Kh, BluetoothSearching: $h, Bold: jh, Bolt: Qh, Bomb: _h, Bone: Yh, Book: u4, BookA: a4, BookAudio: t4, BookCheck: h4, BookCopy: d4, BookDashed: Z, BookDown: p4, BookHeadphones: c4, BookHeart: M4, BookImage: s4, BookKey: e4, BookLock: r4, BookMarked: v4, BookMinus: o4, BookOpen: l4, BookOpenCheck: n4, BookOpenText: i4, BookPlus: g4, BookTemplate: Z, BookText: x4, BookType: y4, BookUp: H4, BookUp2: m4, BookUser: V4, BookX: C4, Bookmark: f4, BookmarkCheck: w4, BookmarkMinus: A4, BookmarkPlus: L4, BookmarkX: S4, BoomBox: P4, Bot: k4, BotMessageSquare: Z4, BotOff: z4, Box: B4, BoxSelect: a0, Boxes: D4, Braces: z, Brackets: F4, Brain: b4, BrainCircuit: q4, BrainCog: R4, BrickWall: T4, Briefcase: E4, BriefcaseBusiness: U4, BriefcaseConveyorBelt: O4, BriefcaseMedical: I4, BringToFront: G4, Brush: W4, Bug: K4, BugOff: X4, BugPlay: N4, Building: J4, Building2: $4, Bus: Q4, BusFront: j4, Cable: Y4, CableCar: _4, Cake: t5, CakeSlice: a5, Calculator: h5, Calendar: w5, Calendar1: d5, CalendarArrowDown: p5, CalendarArrowUp: c5, CalendarCheck: s5, CalendarCheck2: M5, CalendarClock: e5, CalendarCog: r5, CalendarDays: v5, CalendarFold: o5, CalendarHeart: n5, CalendarMinus: l5, CalendarMinus2: i5, CalendarOff: g5, CalendarPlus: y5, CalendarPlus2: x5, CalendarRange: m5, CalendarSearch: H5, CalendarSync: V5, CalendarX: u5, CalendarX2: C5, Camera: L5, CameraOff: A5, CandlestickChart: q, Candy: P5, CandyCane: S5, CandyOff: f5, Cannabis: Z5, Captions: k, CaptionsOff: z5, Car: D5, CarFront: k5, CarTaxiFront: B5, Caravan: F5, Carrot: q5, CaseLower: R5, CaseSensitive: b5, CaseUpper: T5, CassetteTape: U5, Cast: O5, Castle: I5, Cat: E5, Cctv: G5, ChartArea: B, ChartBar: F, ChartBarBig: D, ChartBarDecreasing: W5, ChartBarIncreasing: X5, ChartBarStacked: N5, ChartCandlestick: q, ChartColumn: T, ChartColumnBig: R, ChartColumnDecreasing: K5, ChartColumnIncreasing: b, ChartColumnStacked: $5, ChartGantt: J5, ChartLine: U, ChartNetwork: j5, ChartNoAxesColumn: I, ChartNoAxesColumnDecreasing: Q5, ChartNoAxesColumnIncreasing: O, ChartNoAxesCombined: _5, ChartNoAxesGantt: E, ChartPie: G, ChartScatter: W, ChartSpline: Y5, Check: t3, CheckCheck: a3, CheckCircle: a1, CheckCircle2: t1, CheckSquare: X2, CheckSquare2: N2, ChefHat: h3, Cherry: d3, ChevronDown: p3, ChevronDownCircle: h1, ChevronDownSquare: K2, ChevronFirst: c3, ChevronLast: M3, ChevronLeft: s3, ChevronLeftCircle: d1, ChevronLeftSquare: $2, ChevronRight: e3, ChevronRightCircle: p1, ChevronRightSquare: J2, ChevronUp: r3, ChevronUpCircle: c1, ChevronUpSquare: j2, ChevronsDown: o3, ChevronsDownUp: v3, ChevronsLeft: l3, ChevronsLeftRight: i3, ChevronsLeftRightEllipsis: n3, ChevronsRight: x3, ChevronsRightLeft: g3, ChevronsUp: m3, ChevronsUpDown: y3, Chrome: H3, Church: V3, Cigarette: u3, CigaretteOff: C3, Circle: D3, CircleAlert: X, CircleArrowDown: N, CircleArrowLeft: K, CircleArrowOutDownLeft: $, CircleArrowOutDownRight: J, CircleArrowOutUpLeft: j, CircleArrowOutUpRight: Q, CircleArrowRight: _, CircleArrowUp: Y, CircleCheck: t1, CircleCheckBig: a1, CircleChevronDown: h1, CircleChevronLeft: d1, CircleChevronRight: p1, CircleChevronUp: c1, CircleDashed: w3, CircleDivide: M1, CircleDollarSign: A3, CircleDot: S3, CircleDotDashed: L3, CircleEllipsis: f3, CircleEqual: P3, CircleFadingArrowUp: Z3, CircleFadingPlus: z3, CircleGauge: s1, CircleHelp: e1, CircleMinus: r1, CircleOff: k3, CircleParking: o1, CircleParkingOff: v1, CirclePause: n1, CirclePercent: i1, CirclePlay: l1, CirclePlus: g1, CirclePower: x1, CircleSlash: B3, CircleSlash2: y1, CircleSlashed: y1, CircleStop: m1, CircleUser: V1, CircleUserRound: H1, CircleX: C1, CircuitBoard: F3, Citrus: q3, Clapperboard: R3, Clipboard: X3, ClipboardCheck: b3, ClipboardCopy: T3, ClipboardEdit: w1, ClipboardList: U3, ClipboardMinus: O3, ClipboardPaste: I3, ClipboardPen: w1, ClipboardPenLine: u1, ClipboardPlus: E3, ClipboardSignature: u1, ClipboardType: G3, ClipboardX: W3, Clock: sd, Clock1: N3, Clock10: K3, Clock11: $3, Clock12: J3, Clock2: j3, Clock3: Q3, Clock4: _3, Clock5: Y3, Clock6: ad, Clock7: td, Clock8: hd, Clock9: dd, ClockAlert: pd, ClockArrowDown: cd, ClockArrowUp: Md, Cloud: ud, CloudAlert: ed, CloudCog: rd, CloudDownload: A1, CloudDrizzle: vd, CloudFog: od, CloudHail: nd, CloudLightning: id, CloudMoon: gd, CloudMoonRain: ld, CloudOff: xd, CloudRain: md, CloudRainWind: yd, CloudSnow: Hd, CloudSun: Cd, CloudSunRain: Vd, CloudUpload: L1, Cloudy: wd, Clover: Ad, Club: Ld, Code: Sd, Code2: S1, CodeSquare: Q2, CodeXml: S1, Codepen: fd, Codesandbox: Pd, Coffee: Zd, Cog: zd, Coins: kd, Columns: f1, Columns2: f1, Columns3: P1, Columns4: Bd, Combine: Dd, Command: Fd, Compass: qd, Component: Rd, Computer: bd, ConciergeBell: Td, Cone: Ud, Construction: Od, Contact: Id, Contact2: Z1, ContactRound: Z1, Container: Ed, Contrast: Gd, Cookie: Wd, CookingPot: Xd, Copy: Qd, CopyCheck: Nd, CopyMinus: Kd, CopyPlus: $d, CopySlash: Jd, CopyX: jd, Copyleft: _d, Copyright: Yd, CornerDownLeft: ap, CornerDownRight: tp, CornerLeftDown: hp, CornerLeftUp: dp, CornerRightDown: pp, CornerRightUp: cp, CornerUpLeft: Mp, CornerUpRight: sp, Cpu: ep, CreativeCommons: rp, CreditCard: vp, Croissant: op, Crop: np, Cross: ip, Crosshair: lp, Crown: gp, Cuboid: xp, CupSoda: yp, CurlyBraces: z, Currency: mp, Cylinder: Hp, Dam: Vp, Database: wp, DatabaseBackup: Cp, DatabaseZap: up, Delete: Ap, Dessert: Lp, Diameter: Sp, Diamond: Zp, DiamondMinus: fp, DiamondPercent: z1, DiamondPlus: Pp, Dice1: zp, Dice2: kp, Dice3: Bp, Dice4: Dp, Dice5: Fp, Dice6: qp, Dices: Rp, Diff: bp, Disc: Ip, Disc2: Tp, Disc3: Up, DiscAlbum: Op, Divide: Ep, DivideCircle: M1, DivideSquare: t0, Dna: Wp, DnaOff: Gp, Dock: Xp, Dog: Np, DollarSign: Kp, Donut: $p, DoorClosed: Jp, DoorOpen: jp, Dot: Qp, DotSquare: h0, Download: _p, DownloadCloud: A1, DraftingCompass: Yp, Drama: a6, Dribbble: t6, Drill: h6, Droplet: p6, DropletOff: d6, Droplets: c6, Drum: M6, Drumstick: s6, Dumbbell: e6, Ear: v6, EarOff: r6, Earth: k1, EarthLock: o6, Eclipse: n6, Edit: o, Edit2: H2, Edit3: m2, Egg: g6, EggFried: i6, EggOff: l6, Ellipsis: D1, EllipsisVertical: B1, Equal: m6, EqualApproximately: x6, EqualNot: y6, EqualSquare: d0, Eraser: H6, EthernetPort: V6, Euro: C6, Expand: u6, ExternalLink: w6, Eye: S6, EyeClosed: A6, EyeOff: L6, Facebook: f6, Factory: P6, Fan: Z6, FastForward: z6, Feather: k6, Fence: B6, FerrisWheel: D6, Figma: F6, File: k8, FileArchive: q6, FileAudio: b6, FileAudio2: R6, FileAxis3D: F1, FileAxis3d: F1, FileBadge: U6, FileBadge2: T6, FileBarChart: q1, FileBarChart2: R1, FileBox: O6, FileChartColumn: R1, FileChartColumnIncreasing: q1, FileChartLine: b1, FileChartPie: T1, FileCheck: E6, FileCheck2: I6, FileClock: G6, FileCode: X6, FileCode2: W6, FileCog: U1, FileCog2: U1, FileDiff: N6, FileDigit: K6, FileDown: $6, FileEdit: I1, FileHeart: J6, FileImage: j6, FileInput: Q6, FileJson: Y6, FileJson2: _6, FileKey: t8, FileKey2: a8, FileLineChart: b1, FileLock: d8, FileLock2: h8, FileMinus: c8, FileMinus2: p8, FileMusic: M8, FileOutput: s8, FilePen: I1, FilePenLine: O1, FilePieChart: T1, FilePlus: r8, FilePlus2: e8, FileQuestion: v8, FileScan: o8, FileSearch: i8, FileSearch2: n8, FileSignature: O1, FileSliders: l8, FileSpreadsheet: g8, FileStack: x8, FileSymlink: y8, FileTerminal: m8, FileText: H8, FileType: C8, FileType2: V8, FileUp: u8, FileUser: w8, FileVideo: L8, FileVideo2: A8, FileVolume: f8, FileVolume2: S8, FileWarning: P8, FileX: z8, FileX2: Z8, Files: B8, Film: D8, Filter: q8, FilterX: F8, Fingerprint: R8, FireExtinguisher: b8, Fish: O8, FishOff: T8, FishSymbol: U8, Flag: W8, FlagOff: I8, FlagTriangleLeft: E8, FlagTriangleRight: G8, Flame: N8, FlameKindling: X8, Flashlight: $8, FlashlightOff: K8, FlaskConical: j8, FlaskConicalOff: J8, FlaskRound: Q8, FlipHorizontal: Y8, FlipHorizontal2: _8, FlipVertical: tc, FlipVertical2: ac, Flower: dc, Flower2: hc, Focus: pc, FoldHorizontal: cc, FoldVertical: Mc, Folder: Fc, FolderArchive: sc, FolderCheck: ec, FolderClock: rc, FolderClosed: vc, FolderCode: oc, FolderCog: E1, FolderCog2: E1, FolderDot: nc, FolderDown: ic, FolderEdit: G1, FolderGit: gc, FolderGit2: lc, FolderHeart: xc, FolderInput: yc, FolderKanban: mc, FolderKey: Hc, FolderLock: Vc, FolderMinus: Cc, FolderOpen: wc, FolderOpenDot: uc, FolderOutput: Ac, FolderPen: G1, FolderPlus: Lc, FolderRoot: Sc, FolderSearch: Pc, FolderSearch2: fc, FolderSymlink: Zc, FolderSync: zc, FolderTree: kc, FolderUp: Bc, FolderX: Dc, Folders: qc, Footprints: Rc, ForkKnife: G0, ForkKnifeCrossed: E0, Forklift: bc, FormInput: C2, Forward: Tc, Frame: Uc, Framer: Oc, Frown: Ic, Fuel: Ec, Fullscreen: Gc, FunctionSquare: p0, GalleryHorizontal: Xc, GalleryHorizontalEnd: Wc, GalleryThumbnails: Nc, GalleryVertical: $c, GalleryVerticalEnd: Kc, Gamepad: jc, Gamepad2: Jc, GanttChart: E, GanttChartSquare: l, Gauge: Qc, GaugeCircle: s1, Gavel: _c, Gem: Yc, Ghost: a7, Gift: t7, GitBranch: d7, GitBranchPlus: h7, GitCommit: W1, GitCommitHorizontal: W1, GitCommitVertical: p7, GitCompare: M7, GitCompareArrows: c7, GitFork: s7, GitGraph: e7, GitMerge: r7, GitPullRequest: g7, GitPullRequestArrow: v7, GitPullRequestClosed: o7, GitPullRequestCreate: i7, GitPullRequestCreateArrow: n7, GitPullRequestDraft: l7, Github: x7, Gitlab: y7, GlassWater: m7, Glasses: H7, Globe: C7, Globe2: k1, GlobeLock: V7, Goal: u7, Grab: w7, GraduationCap: A7, Grape: L7, Grid: i, Grid2X2: N1, Grid2X2Plus: X1, Grid2x2: N1, Grid2x2Check: S7, Grid2x2Plus: X1, Grid2x2X: f7, Grid3X3: i, Grid3x3: i, Grip: z7, GripHorizontal: P7, GripVertical: Z7, Group: k7, Guitar: B7, Ham: D7, Hammer: F7, Hand: U7, HandCoins: q7, HandHeart: R7, HandHelping: K1, HandMetal: b7, HandPlatter: T7, Handshake: O7, HardDrive: G7, HardDriveDownload: I7, HardDriveUpload: E7, HardHat: W7, Hash: X7, Haze: N7, HdmiPort: K7, Heading: aM, Heading1: $7, Heading2: J7, Heading3: j7, Heading4: Q7, Heading5: _7, Heading6: Y7, HeadphoneOff: tM, Headphones: hM, Headset: dM, Heart: eM, HeartCrack: pM, HeartHandshake: cM, HeartOff: MM, HeartPulse: sM, Heater: rM, HelpCircle: e1, HelpingHand: K1, Hexagon: vM, Highlighter: oM, History: nM, Home: $1, Hop: lM, HopOff: iM, Hospital: gM, Hotel: xM, Hourglass: yM, House: $1, HousePlug: mM, HousePlus: HM, IceCream: j1, IceCream2: J1, IceCreamBowl: J1, IceCreamCone: j1, IdCard: VM, Image: PM, ImageDown: CM, ImageMinus: uM, ImageOff: wM, ImagePlay: AM, ImagePlus: LM, ImageUp: SM, ImageUpscale: fM, Images: ZM, Import: zM, Inbox: kM, Indent: _1, IndentDecrease: Q1, IndentIncrease: _1, IndianRupee: BM, Infinity: DM, Info: FM, Inspect: v0, InspectionPanel: qM, Instagram: RM, Italic: bM, IterationCcw: TM, IterationCw: UM, JapaneseYen: OM, Joystick: IM, Kanban: EM, KanbanSquare: c0, KanbanSquareDashed: _2, Key: XM, KeyRound: GM, KeySquare: WM, Keyboard: $M, KeyboardMusic: NM, KeyboardOff: KM, Lamp: as, LampCeiling: JM, LampDesk: jM, LampFloor: QM, LampWallDown: _M, LampWallUp: YM, LandPlot: ts, Landmark: hs, Languages: ds, Laptop: cs, Laptop2: Y1, LaptopMinimal: Y1, LaptopMinimalCheck: ps, Lasso: ss, LassoSelect: Ms, Laugh: es, Layers: a2, Layers2: rs, Layers3: a2, Layout: y2, LayoutDashboard: vs, LayoutGrid: os, LayoutList: ns, LayoutPanelLeft: is, LayoutPanelTop: ls, LayoutTemplate: gs, Leaf: xs, LeafyGreen: ys, Lectern: ms, LetterText: Hs, Library: Cs, LibraryBig: Vs, LibrarySquare: M0, LifeBuoy: us, Ligature: ws, Lightbulb: Ls, LightbulbOff: As, LineChart: U, Link: Ps, Link2: fs, Link2Off: Ss, Linkedin: Zs, List: Ns, ListCheck: zs, ListChecks: ks, ListCollapse: Bs, ListEnd: Ds, ListFilter: qs, ListFilterPlus: Fs, ListMinus: Rs, ListMusic: bs, ListOrdered: Ts, ListPlus: Us, ListRestart: Os, ListStart: Is, ListTodo: Es, ListTree: Gs, ListVideo: Ws, ListX: Xs, Loader: $s, Loader2: t2, LoaderCircle: t2, LoaderPinwheel: Ks, Locate: Qs, LocateFixed: Js, LocateOff: js, Lock: Ys, LockKeyhole: _s, LockKeyholeOpen: h2, LockOpen: d2, LogIn: ae, LogOut: te, Logs: he, Lollipop: de, Luggage: pe, MSquare: s0, Magnet: ce, Mail: le, MailCheck: Me, MailMinus: se, MailOpen: ee, MailPlus: re, MailQuestion: ve, MailSearch: oe, MailWarning: ne, MailX: ie, Mailbox: ge, Mails: xe, Map: Ze, MapPin: fe, MapPinCheck: me, MapPinCheckInside: ye, MapPinHouse: He, MapPinMinus: Ce, MapPinMinusInside: Ve, MapPinOff: ue, MapPinPlus: Ae, MapPinPlusInside: we, MapPinX: Se, MapPinXInside: Le, MapPinned: Pe, Martini: ze, Maximize: Be, Maximize2: ke, Medal: De, Megaphone: qe, MegaphoneOff: Fe, Meh: Re, MemoryStick: be, Menu: Te, MenuSquare: e0, Merge: Ue, MessageCircle: je, MessageCircleCode: Oe, MessageCircleDashed: Ie, MessageCircleHeart: Ee, MessageCircleMore: Ge, MessageCircleOff: We, MessageCirclePlus: Xe, MessageCircleQuestion: Ne, MessageCircleReply: Ke, MessageCircleWarning: $e, MessageCircleX: Je, MessageSquare: n9, MessageSquareCode: Qe, MessageSquareDashed: _e, MessageSquareDiff: Ye, MessageSquareDot: a9, MessageSquareHeart: t9, MessageSquareLock: h9, MessageSquareMore: d9, MessageSquareOff: p9, MessageSquarePlus: c9, MessageSquareQuote: M9, MessageSquareReply: s9, MessageSquareShare: e9, MessageSquareText: r9, MessageSquareWarning: v9, MessageSquareX: o9, MessagesSquare: i9, Mic: g9, Mic2: p2, MicOff: l9, MicVocal: p2, Microchip: x9, Microscope: y9, Microwave: m9, Milestone: H9, Milk: C9, MilkOff: V9, Minimize: w9, Minimize2: u9, Minus: A9, MinusCircle: r1, MinusSquare: r0, Monitor: b9, MonitorCheck: L9, MonitorCog: S9, MonitorDot: f9, MonitorDown: P9, MonitorOff: Z9, MonitorPause: z9, MonitorPlay: k9, MonitorSmartphone: B9, MonitorSpeaker: D9, MonitorStop: F9, MonitorUp: q9, MonitorX: R9, Moon: U9, MoonStar: T9, MoreHorizontal: D1, MoreVertical: B1, Mountain: I9, MountainSnow: O9, Mouse: K9, MouseOff: E9, MousePointer: N9, MousePointer2: G9, MousePointerBan: W9, MousePointerClick: X9, MousePointerSquareDashed: Y2, Move: Mr, Move3D: c2, Move3d: c2, MoveDiagonal: J9, MoveDiagonal2: $9, MoveDown: _9, MoveDownLeft: j9, MoveDownRight: Q9, MoveHorizontal: Y9, MoveLeft: ar, MoveRight: tr, MoveUp: pr, MoveUpLeft: hr, MoveUpRight: dr, MoveVertical: cr, Music: vr, Music2: sr, Music3: er, Music4: rr, Navigation: lr, Navigation2: nr, Navigation2Off: or, NavigationOff: ir, Network: gr, Newspaper: xr, Nfc: yr, Notebook: Cr, NotebookPen: mr, NotebookTabs: Hr, NotebookText: Vr, NotepadText: wr, NotepadTextDashed: ur, Nut: Lr, NutOff: Ar, Octagon: fr, OctagonAlert: M2, OctagonMinus: Sr, OctagonPause: s2, OctagonX: e2, Omega: Pr, Option: Zr, Orbit: zr, Origami: kr, Outdent: Q1, Package: Ur, Package2: Br, PackageCheck: Dr, PackageMinus: Fr, PackageOpen: qr, PackagePlus: Rr, PackageSearch: br, PackageX: Tr, PaintBucket: Or, PaintRoller: Ir, Paintbrush: Er, Paintbrush2: r2, PaintbrushVertical: r2, Palette: Gr, Palmtree: k0, PanelBottom: Nr, PanelBottomClose: Wr, PanelBottomDashed: v2, PanelBottomInactive: v2, PanelBottomOpen: Xr, PanelLeft: l2, PanelLeftClose: o2, PanelLeftDashed: n2, PanelLeftInactive: n2, PanelLeftOpen: i2, PanelRight: Jr, PanelRightClose: Kr, PanelRightDashed: g2, PanelRightInactive: g2, PanelRightOpen: $r, PanelTop: _r, PanelTopClose: jr, PanelTopDashed: x2, PanelTopInactive: x2, PanelTopOpen: Qr, PanelsLeftBottom: Yr, PanelsLeftRight: P1, PanelsRightBottom: av, PanelsTopBottom: A2, PanelsTopLeft: y2, Paperclip: tv, Parentheses: hv, ParkingCircle: o1, ParkingCircleOff: v1, ParkingMeter: dv, ParkingSquare: n0, ParkingSquareOff: o0, PartyPopper: pv, Pause: cv, PauseCircle: n1, PauseOctagon: s2, PawPrint: Mv, PcCase: sv, Pen: H2, PenBox: o, PenLine: m2, PenOff: ev, PenSquare: o, PenTool: rv, Pencil: iv, PencilLine: vv, PencilOff: ov, PencilRuler: nv, Pentagon: lv, Percent: gv, PercentCircle: i1, PercentDiamond: z1, PercentSquare: i0, PersonStanding: xv, PhilippinePeso: yv, Phone: Av, PhoneCall: mv, PhoneForwarded: Hv, PhoneIncoming: Vv, PhoneMissed: Cv, PhoneOff: uv, PhoneOutgoing: wv, Pi: Lv, PiSquare: l0, Piano: Sv, Pickaxe: fv, PictureInPicture: Zv, PictureInPicture2: Pv, PieChart: G, PiggyBank: zv, Pilcrow: Dv, PilcrowLeft: kv, PilcrowRight: Bv, PilcrowSquare: g0, Pill: qv, PillBottle: Fv, Pin: bv, PinOff: Rv, Pipette: Tv, Pizza: Uv, Plane: Ev, PlaneLanding: Ov, PlaneTakeoff: Iv, Play: Gv, PlayCircle: l1, PlaySquare: x0, Plug: Xv, Plug2: Wv, PlugZap: V2, PlugZap2: V2, Plus: Nv, PlusCircle: g1, PlusSquare: y0, Pocket: $v, PocketKnife: Kv, Podcast: Jv, Pointer: Qv, PointerOff: jv, Popcorn: _v, Popsicle: Yv, PoundSterling: ao, Power: ho, PowerCircle: x1, PowerOff: to, PowerSquare: m0, Presentation: po, Printer: Mo, PrinterCheck: co, Projector: so, Proportions: eo, Puzzle: ro, Pyramid: vo, QrCode: oo, Quote: no, Rabbit: io, Radar: lo, Radiation: go, Radical: xo, Radio: Ho, RadioReceiver: yo, RadioTower: mo, Radius: Vo, RailSymbol: Co, Rainbow: uo, Rat: wo, Ratio: Ao, Receipt: Do, ReceiptCent: Lo, ReceiptEuro: So, ReceiptIndianRupee: fo, ReceiptJapaneseYen: Po, ReceiptPoundSterling: Zo, ReceiptRussianRuble: zo, ReceiptSwissFranc: ko, ReceiptText: Bo, RectangleEllipsis: C2, RectangleHorizontal: Fo, RectangleVertical: qo, Recycle: Ro, Redo: Uo, Redo2: bo, RedoDot: To, RefreshCcw: Io, RefreshCcwDot: Oo, RefreshCw: Go, RefreshCwOff: Eo, Refrigerator: Wo, Regex: Xo, RemoveFormatting: No, Repeat: Jo, Repeat1: Ko, Repeat2: $o, Replace: Qo, ReplaceAll: jo, Reply: Yo, ReplyAll: _o, Rewind: an, Ribbon: tn, Rocket: hn, RockingChair: dn, RollerCoaster: pn, Rotate3D: u2, Rotate3d: u2, RotateCcw: Mn, RotateCcwSquare: cn, RotateCw: en, RotateCwSquare: sn, Route: vn, RouteOff: rn, Router: on, Rows: w2, Rows2: w2, Rows3: A2, Rows4: nn, Rss: ln, Ruler: gn, RussianRuble: xn, Sailboat: yn, Salad: mn, Sandwich: Hn, Satellite: Cn, SatelliteDish: Vn, Save: An, SaveAll: un, SaveOff: wn, Scale: Ln, Scale3D: L2, Scale3d: L2, Scaling: Sn, Scan: qn, ScanBarcode: fn, ScanEye: Pn, ScanFace: Zn, ScanHeart: zn, ScanLine: kn, ScanQrCode: Bn, ScanSearch: Dn, ScanText: Fn, ScatterChart: W, School: Rn, School2: F0, Scissors: Tn, ScissorsLineDashed: bn, ScissorsSquare: H0, ScissorsSquareDashedBottom: W2, ScreenShare: On, ScreenShareOff: Un, Scroll: En, ScrollText: In, Search: Kn, SearchCheck: Gn, SearchCode: Wn, SearchSlash: Xn, SearchX: Nn, Section: $n, Send: jn, SendHorizonal: S2, SendHorizontal: S2, SendToBack: Jn, SeparatorHorizontal: Qn, SeparatorVertical: _n, Server: hi, ServerCog: Yn, ServerCrash: ai, ServerOff: ti, Settings: pi, Settings2: di, Shapes: ci, Share: si, Share2: Mi, Sheet: ei, Shell: ri, Shield: Hi, ShieldAlert: vi, ShieldBan: oi, ShieldCheck: ni, ShieldClose: f2, ShieldEllipsis: ii, ShieldHalf: li, ShieldMinus: gi, ShieldOff: xi, ShieldPlus: yi, ShieldQuestion: mi, ShieldX: f2, Ship: Ci, ShipWheel: Vi, Shirt: ui, ShoppingBag: wi, ShoppingBasket: Ai, ShoppingCart: Li, Shovel: Si, ShowerHead: fi, Shrink: Pi, Shrub: Zi, Shuffle: zi, Sidebar: l2, SidebarClose: o2, SidebarOpen: i2, Sigma: ki, SigmaSquare: V0, Signal: Ri, SignalHigh: Bi, SignalLow: Di, SignalMedium: Fi, SignalZero: qi, Signature: bi, Signpost: Ui, SignpostBig: Ti, Siren: Oi, SkipBack: Ii, SkipForward: Ei, Skull: Gi, Slack: Wi, Slash: Xi, SlashSquare: C0, Slice: Ni, Sliders: P2, SlidersHorizontal: Ki, SlidersVertical: P2, Smartphone: ji, SmartphoneCharging: $i, SmartphoneNfc: Ji, Smile: _i, SmilePlus: Qi, Snail: Yi, Snowflake: al, Sofa: tl, SortAsc: w, SortDesc: V, Soup: hl, Space: dl, Spade: pl, Sparkle: cl, Sparkles: Z2, Speaker: Ml, Speech: sl, SpellCheck: rl, SpellCheck2: el, Spline: vl, Split: ol, SplitSquareHorizontal: u0, SplitSquareVertical: w0, SprayCan: nl, Sprout: il, Square: Hl, SquareActivity: z2, SquareArrowDown: D2, SquareArrowDownLeft: k2, SquareArrowDownRight: B2, SquareArrowLeft: F2, SquareArrowOutDownLeft: q2, SquareArrowOutDownRight: R2, SquareArrowOutUpLeft: b2, SquareArrowOutUpRight: T2, SquareArrowRight: U2, SquareArrowUp: E2, SquareArrowUpLeft: O2, SquareArrowUpRight: I2, SquareAsterisk: G2, SquareBottomDashedScissors: W2, SquareChartGantt: l, SquareCheck: N2, SquareCheckBig: X2, SquareChevronDown: K2, SquareChevronLeft: $2, SquareChevronRight: J2, SquareChevronUp: j2, SquareCode: Q2, SquareDashed: a0, SquareDashedBottom: gl, SquareDashedBottomCode: ll, SquareDashedKanban: _2, SquareDashedMousePointer: Y2, SquareDivide: t0, SquareDot: h0, SquareEqual: d0, SquareFunction: p0, SquareGanttChart: l, SquareKanban: c0, SquareLibrary: M0, SquareM: s0, SquareMenu: e0, SquareMinus: r0, SquareMousePointer: v0, SquareParking: n0, SquareParkingOff: o0, SquarePen: o, SquarePercent: i0, SquarePi: l0, SquarePilcrow: g0, SquarePlay: x0, SquarePlus: y0, SquarePower: m0, SquareRadical: xl, SquareScissors: H0, SquareSigma: V0, SquareSlash: C0, SquareSplitHorizontal: u0, SquareSplitVertical: w0, SquareSquare: yl, SquareStack: ml, SquareTerminal: A0, SquareUser: S0, SquareUserRound: L0, SquareX: f0, Squircle: Vl, Squirrel: Cl, Stamp: ul, Star: Ll, StarHalf: wl, StarOff: Al, Stars: Z2, StepBack: Sl, StepForward: fl, Stethoscope: Pl, Sticker: Zl, StickyNote: zl, StopCircle: m1, Store: kl, StretchHorizontal: Bl, StretchVertical: Dl, Strikethrough: Fl, Subscript: ql, Subtitles: k, Sun: Ol, SunDim: Rl, SunMedium: bl, SunMoon: Tl, SunSnow: Ul, Sunrise: Il, Sunset: El, Superscript: Gl, SwatchBook: Wl, SwissFranc: Xl, SwitchCamera: Nl, Sword: Kl, Swords: $l, Syringe: Jl, Table: dg, Table2: jl, TableCellsMerge: Ql, TableCellsSplit: _l, TableColumnsSplit: Yl, TableOfContents: ag, TableProperties: tg, TableRowsSplit: hg, Tablet: cg, TabletSmartphone: pg, Tablets: Mg, Tag: sg, Tags: eg, Tally1: rg, Tally2: vg, Tally3: og, Tally4: ng, Tally5: ig, Tangent: lg, Target: gg, Telescope: xg, Tent: mg, TentTree: yg, Terminal: Hg, TerminalSquare: A0, TestTube: Vg, TestTube2: P0, TestTubeDiagonal: P0, TestTubes: Cg, Text: Sg, TextCursor: wg, TextCursorInput: ug, TextQuote: Ag, TextSearch: Lg, TextSelect: Z0, TextSelection: Z0, Theater: fg, Thermometer: zg, ThermometerSnowflake: Pg, ThermometerSun: Zg, ThumbsDown: kg, ThumbsUp: Bg, Ticket: Ug, TicketCheck: Dg, TicketMinus: Fg, TicketPercent: qg, TicketPlus: Rg, TicketSlash: bg, TicketX: Tg, Tickets: Ig, TicketsPlane: Og, Timer: Wg, TimerOff: Eg, TimerReset: Gg, ToggleLeft: Xg, ToggleRight: Ng, Toilet: Kg, Tornado: $g, Torus: Jg, Touchpad: Qg, TouchpadOff: jg, TowerControl: _g, ToyBrick: Yg, Tractor: ax, TrafficCone: tx, Train: z0, TrainFront: dx, TrainFrontTunnel: hx, TrainTrack: px, TramFront: z0, Trash: Mx, Trash2: cx, TreeDeciduous: sx, TreePalm: k0, TreePine: ex, Trees: rx, Trello: vx, TrendingDown: ox, TrendingUp: ix, TrendingUpDown: nx, Triangle: gx, TriangleAlert: B0, TriangleRight: lx, Trophy: xx, Truck: yx, Turtle: mx, Tv: Vx, Tv2: D0, TvMinimal: D0, TvMinimalPlay: Hx, Twitch: Cx, Twitter: ux, Type: Ax, TypeOutline: wx, Umbrella: Sx, UmbrellaOff: Lx, Underline: fx, Undo: zx, Undo2: Px, UndoDot: Zx, UnfoldHorizontal: kx, UnfoldVertical: Bx, Ungroup: Dx, University: F0, Unlink: qx, Unlink2: Fx, Unlock: d2, UnlockKeyhole: h2, Unplug: Rx, Upload: bx, UploadCloud: L1, Usb: Tx, User: $x, User2: O0, UserCheck: Ux, UserCheck2: q0, UserCircle: V1, UserCircle2: H1, UserCog: Ox, UserCog2: R0, UserMinus: Ix, UserMinus2: b0, UserPen: Ex, UserPlus: Gx, UserPlus2: T0, UserRound: O0, UserRoundCheck: q0, UserRoundCog: R0, UserRoundMinus: b0, UserRoundPen: Wx, UserRoundPlus: T0, UserRoundSearch: Xx, UserRoundX: U0, UserSearch: Nx, UserSquare: S0, UserSquare2: L0, UserX: Kx, UserX2: U0, Users: Jx, Users2: I0, UsersRound: I0, Utensils: G0, UtensilsCrossed: E0, UtilityPole: jx, Variable: Qx, Vault: _x, Vegan: Yx, VenetianMask: ay, Verified: S, Vibrate: hy, VibrateOff: ty, Video: py, VideoOff: dy, Videotape: cy, View: My, Voicemail: sy, Volleyball: ey, Volume: iy, Volume1: ry, Volume2: vy, VolumeOff: oy, VolumeX: ny, Vote: ly, Wallet: xy, Wallet2: W0, WalletCards: gy, WalletMinimal: W0, Wallpaper: yy, Wand: my, Wand2: X0, WandSparkles: X0, Warehouse: Hy, WashingMachine: Vy, Watch: Cy, Waves: wy, WavesLadder: uy, Waypoints: Ay, Webcam: Ly, Webhook: fy, WebhookOff: Sy, Weight: Py, Wheat: zy, WheatOff: Zy, WholeWord: ky, Wifi: Ry, WifiHigh: By, WifiLow: Dy, WifiOff: Fy, WifiZero: qy, Wind: Ty, WindArrowDown: by, Wine: Oy, WineOff: Uy, Workflow: Iy, Worm: Ey, WrapText: Gy, Wrench: Wy, X: Xy, XCircle: C1, XOctagon: e2, XSquare: f0, Youtube: Ny, Zap: $y, ZapOff: Ky, ZoomIn: Jy, ZoomOut: jy }, Symbol.toStringTag, { value: "Module" }));
  const sm = Object.freeze(Object.defineProperty({ __proto__: null, AArrowDown: j0, AArrowUp: Q0, ALargeSmall: _0, Accessibility: Y0, Activity: aa, ActivitySquare: z2, AirVent: ta, Airplay: ha, AlarmCheck: x, AlarmClock: pa, AlarmClockCheck: x, AlarmClockMinus: y, AlarmClockOff: da, AlarmClockPlus: m, AlarmMinus: y, AlarmPlus: m, AlarmSmoke: ca, Album: Ma, AlertCircle: X, AlertOctagon: M2, AlertTriangle: B0, AlignCenter: ra, AlignCenterHorizontal: sa, AlignCenterVertical: ea, AlignEndHorizontal: va, AlignEndVertical: oa, AlignHorizontalDistributeCenter: na, AlignHorizontalDistributeEnd: ia, AlignHorizontalDistributeStart: la, AlignHorizontalJustifyCenter: ga, AlignHorizontalJustifyEnd: xa, AlignHorizontalJustifyStart: ya, AlignHorizontalSpaceAround: ma, AlignHorizontalSpaceBetween: Ha, AlignJustify: Va, AlignLeft: Ca, AlignRight: ua, AlignStartHorizontal: wa, AlignStartVertical: Aa, AlignVerticalDistributeCenter: La, AlignVerticalDistributeEnd: Sa, AlignVerticalDistributeStart: fa, AlignVerticalJustifyCenter: Pa, AlignVerticalJustifyEnd: Za, AlignVerticalJustifyStart: za, AlignVerticalSpaceAround: ka, AlignVerticalSpaceBetween: Ba, Ambulance: Da, Ampersand: Fa, Ampersands: qa, Amphora: Ra, Anchor: ba, Angry: Ta, Annoyed: Ua, Antenna: Oa, Anvil: Ia, Aperture: Ea, AppWindow: Wa, AppWindowMac: Ga, Apple: Xa, Archive: $a, ArchiveRestore: Na, ArchiveX: Ka, AreaChart: B, Armchair: Ja, ArrowBigDown: Qa, ArrowBigDownDash: ja, ArrowBigLeft: Ya, ArrowBigLeftDash: _a, ArrowBigRight: tt, ArrowBigRightDash: at, ArrowBigUp: dt, ArrowBigUpDash: ht, ArrowDown: it, ArrowDown01: pt, ArrowDown10: ct, ArrowDownAZ: H, ArrowDownAz: H, ArrowDownCircle: N, ArrowDownFromLine: Mt, ArrowDownLeft: st, ArrowDownLeftFromCircle: $, ArrowDownLeftFromSquare: q2, ArrowDownLeftSquare: k2, ArrowDownNarrowWide: et, ArrowDownRight: rt, ArrowDownRightFromCircle: J, ArrowDownRightFromSquare: R2, ArrowDownRightSquare: B2, ArrowDownSquare: D2, ArrowDownToDot: vt, ArrowDownToLine: ot, ArrowDownUp: nt, ArrowDownWideNarrow: V, ArrowDownZA: C, ArrowDownZa: C, ArrowLeft: yt, ArrowLeftCircle: K, ArrowLeftFromLine: lt, ArrowLeftRight: gt, ArrowLeftSquare: F2, ArrowLeftToLine: xt, ArrowRight: Ct, ArrowRightCircle: _, ArrowRightFromLine: mt, ArrowRightLeft: Ht, ArrowRightSquare: U2, ArrowRightToLine: Vt, ArrowUp: kt, ArrowUp01: ut, ArrowUp10: wt, ArrowUpAZ: u, ArrowUpAz: u, ArrowUpCircle: Y, ArrowUpDown: At, ArrowUpFromDot: Lt, ArrowUpFromLine: St, ArrowUpLeft: ft, ArrowUpLeftFromCircle: j, ArrowUpLeftFromSquare: b2, ArrowUpLeftSquare: O2, ArrowUpNarrowWide: w, ArrowUpRight: Pt, ArrowUpRightFromCircle: Q, ArrowUpRightFromSquare: T2, ArrowUpRightSquare: I2, ArrowUpSquare: E2, ArrowUpToLine: Zt, ArrowUpWideNarrow: zt, ArrowUpZA: A, ArrowUpZa: A, ArrowsUpFromLine: Bt, Asterisk: Dt, AsteriskSquare: G2, AtSign: Ft, Atom: qt, AudioLines: Rt, AudioWaveform: bt, Award: Tt, Axe: Ut, Axis3D: L, Axis3d: L, Baby: Ot, Backpack: It, Badge: dh, BadgeAlert: Et, BadgeCent: Gt, BadgeCheck: S, BadgeDollarSign: Wt, BadgeEuro: Xt, BadgeHelp: Nt, BadgeIndianRupee: Kt, BadgeInfo: $t, BadgeJapaneseYen: Jt, BadgeMinus: jt, BadgePercent: Qt, BadgePlus: _t, BadgePoundSterling: Yt, BadgeRussianRuble: ah, BadgeSwissFranc: th, BadgeX: hh, BaggageClaim: ph, Ban: ch, Banana: Mh, Bandage: sh, Banknote: eh, BarChart: O, BarChart2: I, BarChart3: T, BarChart4: b, BarChartBig: R, BarChartHorizontal: F, BarChartHorizontalBig: D, Barcode: rh, Baseline: vh, Bath: oh, Battery: yh, BatteryCharging: nh, BatteryFull: ih, BatteryLow: lh, BatteryMedium: gh, BatteryWarning: xh, Beaker: mh, Bean: Vh, BeanOff: Hh, Bed: wh, BedDouble: Ch, BedSingle: uh, Beef: Ah, Beer: Sh, BeerOff: Lh, Bell: Dh, BellDot: fh, BellElectric: Ph, BellMinus: Zh, BellOff: zh, BellPlus: kh, BellRing: Bh, BetweenHorizonalEnd: f, BetweenHorizonalStart: P, BetweenHorizontalEnd: f, BetweenHorizontalStart: P, BetweenVerticalEnd: Fh, BetweenVerticalStart: qh, BicepsFlexed: Rh, Bike: bh, Binary: Th, Binoculars: Uh, Biohazard: Oh, Bird: Ih, Bitcoin: Eh, Blend: Gh, Blinds: Wh, Blocks: Xh, Bluetooth: Jh, BluetoothConnected: Nh, BluetoothOff: Kh, BluetoothSearching: $h, Bold: jh, Bolt: Qh, Bomb: _h, Bone: Yh, Book: u4, BookA: a4, BookAudio: t4, BookCheck: h4, BookCopy: d4, BookDashed: Z, BookDown: p4, BookHeadphones: c4, BookHeart: M4, BookImage: s4, BookKey: e4, BookLock: r4, BookMarked: v4, BookMinus: o4, BookOpen: l4, BookOpenCheck: n4, BookOpenText: i4, BookPlus: g4, BookTemplate: Z, BookText: x4, BookType: y4, BookUp: H4, BookUp2: m4, BookUser: V4, BookX: C4, Bookmark: f4, BookmarkCheck: w4, BookmarkMinus: A4, BookmarkPlus: L4, BookmarkX: S4, BoomBox: P4, Bot: k4, BotMessageSquare: Z4, BotOff: z4, Box: B4, BoxSelect: a0, Boxes: D4, Braces: z, Brackets: F4, Brain: b4, BrainCircuit: q4, BrainCog: R4, BrickWall: T4, Briefcase: E4, BriefcaseBusiness: U4, BriefcaseConveyorBelt: O4, BriefcaseMedical: I4, BringToFront: G4, Brush: W4, Bug: K4, BugOff: X4, BugPlay: N4, Building: J4, Building2: $4, Bus: Q4, BusFront: j4, Cable: Y4, CableCar: _4, Cake: t5, CakeSlice: a5, Calculator: h5, Calendar: w5, Calendar1: d5, CalendarArrowDown: p5, CalendarArrowUp: c5, CalendarCheck: s5, CalendarCheck2: M5, CalendarClock: e5, CalendarCog: r5, CalendarDays: v5, CalendarFold: o5, CalendarHeart: n5, CalendarMinus: l5, CalendarMinus2: i5, CalendarOff: g5, CalendarPlus: y5, CalendarPlus2: x5, CalendarRange: m5, CalendarSearch: H5, CalendarSync: V5, CalendarX: u5, CalendarX2: C5, Camera: L5, CameraOff: A5, CandlestickChart: q, Candy: P5, CandyCane: S5, CandyOff: f5, Cannabis: Z5, Captions: k, CaptionsOff: z5, Car: D5, CarFront: k5, CarTaxiFront: B5, Caravan: F5, Carrot: q5, CaseLower: R5, CaseSensitive: b5, CaseUpper: T5, CassetteTape: U5, Cast: O5, Castle: I5, Cat: E5, Cctv: G5, ChartArea: B, ChartBar: F, ChartBarBig: D, ChartBarDecreasing: W5, ChartBarIncreasing: X5, ChartBarStacked: N5, ChartCandlestick: q, ChartColumn: T, ChartColumnBig: R, ChartColumnDecreasing: K5, ChartColumnIncreasing: b, ChartColumnStacked: $5, ChartGantt: J5, ChartLine: U, ChartNetwork: j5, ChartNoAxesColumn: I, ChartNoAxesColumnDecreasing: Q5, ChartNoAxesColumnIncreasing: O, ChartNoAxesCombined: _5, ChartNoAxesGantt: E, ChartPie: G, ChartScatter: W, ChartSpline: Y5, Check: t3, CheckCheck: a3, CheckCircle: a1, CheckCircle2: t1, CheckSquare: X2, CheckSquare2: N2, ChefHat: h3, Cherry: d3, ChevronDown: p3, ChevronDownCircle: h1, ChevronDownSquare: K2, ChevronFirst: c3, ChevronLast: M3, ChevronLeft: s3, ChevronLeftCircle: d1, ChevronLeftSquare: $2, ChevronRight: e3, ChevronRightCircle: p1, ChevronRightSquare: J2, ChevronUp: r3, ChevronUpCircle: c1, ChevronUpSquare: j2, ChevronsDown: o3, ChevronsDownUp: v3, ChevronsLeft: l3, ChevronsLeftRight: i3, ChevronsLeftRightEllipsis: n3, ChevronsRight: x3, ChevronsRightLeft: g3, ChevronsUp: m3, ChevronsUpDown: y3, Chrome: H3, Church: V3, Cigarette: u3, CigaretteOff: C3, Circle: D3, CircleAlert: X, CircleArrowDown: N, CircleArrowLeft: K, CircleArrowOutDownLeft: $, CircleArrowOutDownRight: J, CircleArrowOutUpLeft: j, CircleArrowOutUpRight: Q, CircleArrowRight: _, CircleArrowUp: Y, CircleCheck: t1, CircleCheckBig: a1, CircleChevronDown: h1, CircleChevronLeft: d1, CircleChevronRight: p1, CircleChevronUp: c1, CircleDashed: w3, CircleDivide: M1, CircleDollarSign: A3, CircleDot: S3, CircleDotDashed: L3, CircleEllipsis: f3, CircleEqual: P3, CircleFadingArrowUp: Z3, CircleFadingPlus: z3, CircleGauge: s1, CircleHelp: e1, CircleMinus: r1, CircleOff: k3, CircleParking: o1, CircleParkingOff: v1, CirclePause: n1, CirclePercent: i1, CirclePlay: l1, CirclePlus: g1, CirclePower: x1, CircleSlash: B3, CircleSlash2: y1, CircleSlashed: y1, CircleStop: m1, CircleUser: V1, CircleUserRound: H1, CircleX: C1, CircuitBoard: F3, Citrus: q3, Clapperboard: R3, Clipboard: X3, ClipboardCheck: b3, ClipboardCopy: T3, ClipboardEdit: w1, ClipboardList: U3, ClipboardMinus: O3, ClipboardPaste: I3, ClipboardPen: w1, ClipboardPenLine: u1, ClipboardPlus: E3, ClipboardSignature: u1, ClipboardType: G3, ClipboardX: W3, Clock: sd, Clock1: N3, Clock10: K3, Clock11: $3, Clock12: J3, Clock2: j3, Clock3: Q3, Clock4: _3, Clock5: Y3, Clock6: ad, Clock7: td, Clock8: hd, Clock9: dd, ClockAlert: pd, ClockArrowDown: cd, ClockArrowUp: Md, Cloud: ud, CloudAlert: ed, CloudCog: rd, CloudDownload: A1, CloudDrizzle: vd, CloudFog: od, CloudHail: nd, CloudLightning: id, CloudMoon: gd, CloudMoonRain: ld, CloudOff: xd, CloudRain: md, CloudRainWind: yd, CloudSnow: Hd, CloudSun: Cd, CloudSunRain: Vd, CloudUpload: L1, Cloudy: wd, Clover: Ad, Club: Ld, Code: Sd, Code2: S1, CodeSquare: Q2, CodeXml: S1, Codepen: fd, Codesandbox: Pd, Coffee: Zd, Cog: zd, Coins: kd, Columns: f1, Columns2: f1, Columns3: P1, Columns4: Bd, Combine: Dd, Command: Fd, Compass: qd, Component: Rd, Computer: bd, ConciergeBell: Td, Cone: Ud, Construction: Od, Contact: Id, Contact2: Z1, ContactRound: Z1, Container: Ed, Contrast: Gd, Cookie: Wd, CookingPot: Xd, Copy: Qd, CopyCheck: Nd, CopyMinus: Kd, CopyPlus: $d, CopySlash: Jd, CopyX: jd, Copyleft: _d, Copyright: Yd, CornerDownLeft: ap, CornerDownRight: tp, CornerLeftDown: hp, CornerLeftUp: dp, CornerRightDown: pp, CornerRightUp: cp, CornerUpLeft: Mp, CornerUpRight: sp, Cpu: ep, CreativeCommons: rp, CreditCard: vp, Croissant: op, Crop: np, Cross: ip, Crosshair: lp, Crown: gp, Cuboid: xp, CupSoda: yp, CurlyBraces: z, Currency: mp, Cylinder: Hp, Dam: Vp, Database: wp, DatabaseBackup: Cp, DatabaseZap: up, Delete: Ap, Dessert: Lp, Diameter: Sp, Diamond: Zp, DiamondMinus: fp, DiamondPercent: z1, DiamondPlus: Pp, Dice1: zp, Dice2: kp, Dice3: Bp, Dice4: Dp, Dice5: Fp, Dice6: qp, Dices: Rp, Diff: bp, Disc: Ip, Disc2: Tp, Disc3: Up, DiscAlbum: Op, Divide: Ep, DivideCircle: M1, DivideSquare: t0, Dna: Wp, DnaOff: Gp, Dock: Xp, Dog: Np, DollarSign: Kp, Donut: $p, DoorClosed: Jp, DoorOpen: jp, Dot: Qp, DotSquare: h0, Download: _p, DownloadCloud: A1, DraftingCompass: Yp, Drama: a6, Dribbble: t6, Drill: h6, Droplet: p6, DropletOff: d6, Droplets: c6, Drum: M6, Drumstick: s6, Dumbbell: e6, Ear: v6, EarOff: r6, Earth: k1, EarthLock: o6, Eclipse: n6, Edit: o, Edit2: H2, Edit3: m2, Egg: g6, EggFried: i6, EggOff: l6, Ellipsis: D1, EllipsisVertical: B1, Equal: m6, EqualApproximately: x6, EqualNot: y6, EqualSquare: d0, Eraser: H6, EthernetPort: V6, Euro: C6, Expand: u6, ExternalLink: w6, Eye: S6, EyeClosed: A6, EyeOff: L6, Facebook: f6, Factory: P6, Fan: Z6, FastForward: z6, Feather: k6, Fence: B6, FerrisWheel: D6, Figma: F6, File: k8, FileArchive: q6, FileAudio: b6, FileAudio2: R6, FileAxis3D: F1, FileAxis3d: F1, FileBadge: U6, FileBadge2: T6, FileBarChart: q1, FileBarChart2: R1, FileBox: O6, FileChartColumn: R1, FileChartColumnIncreasing: q1, FileChartLine: b1, FileChartPie: T1, FileCheck: E6, FileCheck2: I6, FileClock: G6, FileCode: X6, FileCode2: W6, FileCog: U1, FileCog2: U1, FileDiff: N6, FileDigit: K6, FileDown: $6, FileEdit: I1, FileHeart: J6, FileImage: j6, FileInput: Q6, FileJson: Y6, FileJson2: _6, FileKey: t8, FileKey2: a8, FileLineChart: b1, FileLock: d8, FileLock2: h8, FileMinus: c8, FileMinus2: p8, FileMusic: M8, FileOutput: s8, FilePen: I1, FilePenLine: O1, FilePieChart: T1, FilePlus: r8, FilePlus2: e8, FileQuestion: v8, FileScan: o8, FileSearch: i8, FileSearch2: n8, FileSignature: O1, FileSliders: l8, FileSpreadsheet: g8, FileStack: x8, FileSymlink: y8, FileTerminal: m8, FileText: H8, FileType: C8, FileType2: V8, FileUp: u8, FileUser: w8, FileVideo: L8, FileVideo2: A8, FileVolume: f8, FileVolume2: S8, FileWarning: P8, FileX: z8, FileX2: Z8, Files: B8, Film: D8, Filter: q8, FilterX: F8, Fingerprint: R8, FireExtinguisher: b8, Fish: O8, FishOff: T8, FishSymbol: U8, Flag: W8, FlagOff: I8, FlagTriangleLeft: E8, FlagTriangleRight: G8, Flame: N8, FlameKindling: X8, Flashlight: $8, FlashlightOff: K8, FlaskConical: j8, FlaskConicalOff: J8, FlaskRound: Q8, FlipHorizontal: Y8, FlipHorizontal2: _8, FlipVertical: tc, FlipVertical2: ac, Flower: dc, Flower2: hc, Focus: pc, FoldHorizontal: cc, FoldVertical: Mc, Folder: Fc, FolderArchive: sc, FolderCheck: ec, FolderClock: rc, FolderClosed: vc, FolderCode: oc, FolderCog: E1, FolderCog2: E1, FolderDot: nc, FolderDown: ic, FolderEdit: G1, FolderGit: gc, FolderGit2: lc, FolderHeart: xc, FolderInput: yc, FolderKanban: mc, FolderKey: Hc, FolderLock: Vc, FolderMinus: Cc, FolderOpen: wc, FolderOpenDot: uc, FolderOutput: Ac, FolderPen: G1, FolderPlus: Lc, FolderRoot: Sc, FolderSearch: Pc, FolderSearch2: fc, FolderSymlink: Zc, FolderSync: zc, FolderTree: kc, FolderUp: Bc, FolderX: Dc, Folders: qc, Footprints: Rc, ForkKnife: G0, ForkKnifeCrossed: E0, Forklift: bc, FormInput: C2, Forward: Tc, Frame: Uc, Framer: Oc, Frown: Ic, Fuel: Ec, Fullscreen: Gc, FunctionSquare: p0, GalleryHorizontal: Xc, GalleryHorizontalEnd: Wc, GalleryThumbnails: Nc, GalleryVertical: $c, GalleryVerticalEnd: Kc, Gamepad: jc, Gamepad2: Jc, GanttChart: E, GanttChartSquare: l, Gauge: Qc, GaugeCircle: s1, Gavel: _c, Gem: Yc, Ghost: a7, Gift: t7, GitBranch: d7, GitBranchPlus: h7, GitCommit: W1, GitCommitHorizontal: W1, GitCommitVertical: p7, GitCompare: M7, GitCompareArrows: c7, GitFork: s7, GitGraph: e7, GitMerge: r7, GitPullRequest: g7, GitPullRequestArrow: v7, GitPullRequestClosed: o7, GitPullRequestCreate: i7, GitPullRequestCreateArrow: n7, GitPullRequestDraft: l7, Github: x7, Gitlab: y7, GlassWater: m7, Glasses: H7, Globe: C7, Globe2: k1, GlobeLock: V7, Goal: u7, Grab: w7, GraduationCap: A7, Grape: L7, Grid: i, Grid2X2: N1, Grid2X2Plus: X1, Grid2x2: N1, Grid2x2Check: S7, Grid2x2Plus: X1, Grid2x2X: f7, Grid3X3: i, Grid3x3: i, Grip: z7, GripHorizontal: P7, GripVertical: Z7, Group: k7, Guitar: B7, Ham: D7, Hammer: F7, Hand: U7, HandCoins: q7, HandHeart: R7, HandHelping: K1, HandMetal: b7, HandPlatter: T7, Handshake: O7, HardDrive: G7, HardDriveDownload: I7, HardDriveUpload: E7, HardHat: W7, Hash: X7, Haze: N7, HdmiPort: K7, Heading: aM, Heading1: $7, Heading2: J7, Heading3: j7, Heading4: Q7, Heading5: _7, Heading6: Y7, HeadphoneOff: tM, Headphones: hM, Headset: dM, Heart: eM, HeartCrack: pM, HeartHandshake: cM, HeartOff: MM, HeartPulse: sM, Heater: rM, HelpCircle: e1, HelpingHand: K1, Hexagon: vM, Highlighter: oM, History: nM, Home: $1, Hop: lM, HopOff: iM, Hospital: gM, Hotel: xM, Hourglass: yM, House: $1, HousePlug: mM, HousePlus: HM, IceCream: j1, IceCream2: J1, IceCreamBowl: J1, IceCreamCone: j1, IdCard: VM, Image: PM, ImageDown: CM, ImageMinus: uM, ImageOff: wM, ImagePlay: AM, ImagePlus: LM, ImageUp: SM, ImageUpscale: fM, Images: ZM, Import: zM, Inbox: kM, Indent: _1, IndentDecrease: Q1, IndentIncrease: _1, IndianRupee: BM, Infinity: DM, Info: FM, Inspect: v0, InspectionPanel: qM, Instagram: RM, Italic: bM, IterationCcw: TM, IterationCw: UM, JapaneseYen: OM, Joystick: IM, Kanban: EM, KanbanSquare: c0, KanbanSquareDashed: _2, Key: XM, KeyRound: GM, KeySquare: WM, Keyboard: $M, KeyboardMusic: NM, KeyboardOff: KM, Lamp: as, LampCeiling: JM, LampDesk: jM, LampFloor: QM, LampWallDown: _M, LampWallUp: YM, LandPlot: ts, Landmark: hs, Languages: ds, Laptop: cs, Laptop2: Y1, LaptopMinimal: Y1, LaptopMinimalCheck: ps, Lasso: ss, LassoSelect: Ms, Laugh: es, Layers: a2, Layers2: rs, Layers3: a2, Layout: y2, LayoutDashboard: vs, LayoutGrid: os, LayoutList: ns, LayoutPanelLeft: is, LayoutPanelTop: ls, LayoutTemplate: gs, Leaf: xs, LeafyGreen: ys, Lectern: ms, LetterText: Hs, Library: Cs, LibraryBig: Vs, LibrarySquare: M0, LifeBuoy: us, Ligature: ws, Lightbulb: Ls, LightbulbOff: As, LineChart: U, Link: Ps, Link2: fs, Link2Off: Ss, Linkedin: Zs, List: Ns, ListCheck: zs, ListChecks: ks, ListCollapse: Bs, ListEnd: Ds, ListFilter: qs, ListFilterPlus: Fs, ListMinus: Rs, ListMusic: bs, ListOrdered: Ts, ListPlus: Us, ListRestart: Os, ListStart: Is, ListTodo: Es, ListTree: Gs, ListVideo: Ws, ListX: Xs, Loader: $s, Loader2: t2, LoaderCircle: t2, LoaderPinwheel: Ks, Locate: Qs, LocateFixed: Js, LocateOff: js, Lock: Ys, LockKeyhole: _s, LockKeyholeOpen: h2, LockOpen: d2, LogIn: ae, LogOut: te, Logs: he, Lollipop: de, Luggage: pe, MSquare: s0, Magnet: ce, Mail: le, MailCheck: Me, MailMinus: se, MailOpen: ee, MailPlus: re, MailQuestion: ve, MailSearch: oe, MailWarning: ne, MailX: ie, Mailbox: ge, Mails: xe, Map: Ze, MapPin: fe, MapPinCheck: me, MapPinCheckInside: ye, MapPinHouse: He, MapPinMinus: Ce, MapPinMinusInside: Ve, MapPinOff: ue, MapPinPlus: Ae, MapPinPlusInside: we, MapPinX: Se, MapPinXInside: Le, MapPinned: Pe, Martini: ze, Maximize: Be, Maximize2: ke, Medal: De, Megaphone: qe, MegaphoneOff: Fe, Meh: Re, MemoryStick: be, Menu: Te, MenuSquare: e0, Merge: Ue, MessageCircle: je, MessageCircleCode: Oe, MessageCircleDashed: Ie, MessageCircleHeart: Ee, MessageCircleMore: Ge, MessageCircleOff: We, MessageCirclePlus: Xe, MessageCircleQuestion: Ne, MessageCircleReply: Ke, MessageCircleWarning: $e, MessageCircleX: Je, MessageSquare: n9, MessageSquareCode: Qe, MessageSquareDashed: _e, MessageSquareDiff: Ye, MessageSquareDot: a9, MessageSquareHeart: t9, MessageSquareLock: h9, MessageSquareMore: d9, MessageSquareOff: p9, MessageSquarePlus: c9, MessageSquareQuote: M9, MessageSquareReply: s9, MessageSquareShare: e9, MessageSquareText: r9, MessageSquareWarning: v9, MessageSquareX: o9, MessagesSquare: i9, Mic: g9, Mic2: p2, MicOff: l9, MicVocal: p2, Microchip: x9, Microscope: y9, Microwave: m9, Milestone: H9, Milk: C9, MilkOff: V9, Minimize: w9, Minimize2: u9, Minus: A9, MinusCircle: r1, MinusSquare: r0, Monitor: b9, MonitorCheck: L9, MonitorCog: S9, MonitorDot: f9, MonitorDown: P9, MonitorOff: Z9, MonitorPause: z9, MonitorPlay: k9, MonitorSmartphone: B9, MonitorSpeaker: D9, MonitorStop: F9, MonitorUp: q9, MonitorX: R9, Moon: U9, MoonStar: T9, MoreHorizontal: D1, MoreVertical: B1, Mountain: I9, MountainSnow: O9, Mouse: K9, MouseOff: E9, MousePointer: N9, MousePointer2: G9, MousePointerBan: W9, MousePointerClick: X9, MousePointerSquareDashed: Y2, Move: Mr, Move3D: c2, Move3d: c2, MoveDiagonal: J9, MoveDiagonal2: $9, MoveDown: _9, MoveDownLeft: j9, MoveDownRight: Q9, MoveHorizontal: Y9, MoveLeft: ar, MoveRight: tr, MoveUp: pr, MoveUpLeft: hr, MoveUpRight: dr, MoveVertical: cr, Music: vr, Music2: sr, Music3: er, Music4: rr, Navigation: lr, Navigation2: nr, Navigation2Off: or, NavigationOff: ir, Network: gr, Newspaper: xr, Nfc: yr, Notebook: Cr, NotebookPen: mr, NotebookTabs: Hr, NotebookText: Vr, NotepadText: wr, NotepadTextDashed: ur, Nut: Lr, NutOff: Ar, Octagon: fr, OctagonAlert: M2, OctagonMinus: Sr, OctagonPause: s2, OctagonX: e2, Omega: Pr, Option: Zr, Orbit: zr, Origami: kr, Outdent: Q1, Package: Ur, Package2: Br, PackageCheck: Dr, PackageMinus: Fr, PackageOpen: qr, PackagePlus: Rr, PackageSearch: br, PackageX: Tr, PaintBucket: Or, PaintRoller: Ir, Paintbrush: Er, Paintbrush2: r2, PaintbrushVertical: r2, Palette: Gr, Palmtree: k0, PanelBottom: Nr, PanelBottomClose: Wr, PanelBottomDashed: v2, PanelBottomInactive: v2, PanelBottomOpen: Xr, PanelLeft: l2, PanelLeftClose: o2, PanelLeftDashed: n2, PanelLeftInactive: n2, PanelLeftOpen: i2, PanelRight: Jr, PanelRightClose: Kr, PanelRightDashed: g2, PanelRightInactive: g2, PanelRightOpen: $r, PanelTop: _r, PanelTopClose: jr, PanelTopDashed: x2, PanelTopInactive: x2, PanelTopOpen: Qr, PanelsLeftBottom: Yr, PanelsLeftRight: P1, PanelsRightBottom: av, PanelsTopBottom: A2, PanelsTopLeft: y2, Paperclip: tv, Parentheses: hv, ParkingCircle: o1, ParkingCircleOff: v1, ParkingMeter: dv, ParkingSquare: n0, ParkingSquareOff: o0, PartyPopper: pv, Pause: cv, PauseCircle: n1, PauseOctagon: s2, PawPrint: Mv, PcCase: sv, Pen: H2, PenBox: o, PenLine: m2, PenOff: ev, PenSquare: o, PenTool: rv, Pencil: iv, PencilLine: vv, PencilOff: ov, PencilRuler: nv, Pentagon: lv, Percent: gv, PercentCircle: i1, PercentDiamond: z1, PercentSquare: i0, PersonStanding: xv, PhilippinePeso: yv, Phone: Av, PhoneCall: mv, PhoneForwarded: Hv, PhoneIncoming: Vv, PhoneMissed: Cv, PhoneOff: uv, PhoneOutgoing: wv, Pi: Lv, PiSquare: l0, Piano: Sv, Pickaxe: fv, PictureInPicture: Zv, PictureInPicture2: Pv, PieChart: G, PiggyBank: zv, Pilcrow: Dv, PilcrowLeft: kv, PilcrowRight: Bv, PilcrowSquare: g0, Pill: qv, PillBottle: Fv, Pin: bv, PinOff: Rv, Pipette: Tv, Pizza: Uv, Plane: Ev, PlaneLanding: Ov, PlaneTakeoff: Iv, Play: Gv, PlayCircle: l1, PlaySquare: x0, Plug: Xv, Plug2: Wv, PlugZap: V2, PlugZap2: V2, Plus: Nv, PlusCircle: g1, PlusSquare: y0, Pocket: $v, PocketKnife: Kv, Podcast: Jv, Pointer: Qv, PointerOff: jv, Popcorn: _v, Popsicle: Yv, PoundSterling: ao, Power: ho, PowerCircle: x1, PowerOff: to, PowerSquare: m0, Presentation: po, Printer: Mo, PrinterCheck: co, Projector: so, Proportions: eo, Puzzle: ro, Pyramid: vo, QrCode: oo, Quote: no, Rabbit: io, Radar: lo, Radiation: go, Radical: xo, Radio: Ho, RadioReceiver: yo, RadioTower: mo, Radius: Vo, RailSymbol: Co, Rainbow: uo, Rat: wo, Ratio: Ao, Receipt: Do, ReceiptCent: Lo, ReceiptEuro: So, ReceiptIndianRupee: fo, ReceiptJapaneseYen: Po, ReceiptPoundSterling: Zo, ReceiptRussianRuble: zo, ReceiptSwissFranc: ko, ReceiptText: Bo, RectangleEllipsis: C2, RectangleHorizontal: Fo, RectangleVertical: qo, Recycle: Ro, Redo: Uo, Redo2: bo, RedoDot: To, RefreshCcw: Io, RefreshCcwDot: Oo, RefreshCw: Go, RefreshCwOff: Eo, Refrigerator: Wo, Regex: Xo, RemoveFormatting: No, Repeat: Jo, Repeat1: Ko, Repeat2: $o, Replace: Qo, ReplaceAll: jo, Reply: Yo, ReplyAll: _o, Rewind: an, Ribbon: tn, Rocket: hn, RockingChair: dn, RollerCoaster: pn, Rotate3D: u2, Rotate3d: u2, RotateCcw: Mn, RotateCcwSquare: cn, RotateCw: en, RotateCwSquare: sn, Route: vn, RouteOff: rn, Router: on, Rows: w2, Rows2: w2, Rows3: A2, Rows4: nn, Rss: ln, Ruler: gn, RussianRuble: xn, Sailboat: yn, Salad: mn, Sandwich: Hn, Satellite: Cn, SatelliteDish: Vn, Save: An, SaveAll: un, SaveOff: wn, Scale: Ln, Scale3D: L2, Scale3d: L2, Scaling: Sn, Scan: qn, ScanBarcode: fn, ScanEye: Pn, ScanFace: Zn, ScanHeart: zn, ScanLine: kn, ScanQrCode: Bn, ScanSearch: Dn, ScanText: Fn, ScatterChart: W, School: Rn, School2: F0, Scissors: Tn, ScissorsLineDashed: bn, ScissorsSquare: H0, ScissorsSquareDashedBottom: W2, ScreenShare: On, ScreenShareOff: Un, Scroll: En, ScrollText: In, Search: Kn, SearchCheck: Gn, SearchCode: Wn, SearchSlash: Xn, SearchX: Nn, Section: $n, Send: jn, SendHorizonal: S2, SendHorizontal: S2, SendToBack: Jn, SeparatorHorizontal: Qn, SeparatorVertical: _n, Server: hi, ServerCog: Yn, ServerCrash: ai, ServerOff: ti, Settings: pi, Settings2: di, Shapes: ci, Share: si, Share2: Mi, Sheet: ei, Shell: ri, Shield: Hi, ShieldAlert: vi, ShieldBan: oi, ShieldCheck: ni, ShieldClose: f2, ShieldEllipsis: ii, ShieldHalf: li, ShieldMinus: gi, ShieldOff: xi, ShieldPlus: yi, ShieldQuestion: mi, ShieldX: f2, Ship: Ci, ShipWheel: Vi, Shirt: ui, ShoppingBag: wi, ShoppingBasket: Ai, ShoppingCart: Li, Shovel: Si, ShowerHead: fi, Shrink: Pi, Shrub: Zi, Shuffle: zi, Sidebar: l2, SidebarClose: o2, SidebarOpen: i2, Sigma: ki, SigmaSquare: V0, Signal: Ri, SignalHigh: Bi, SignalLow: Di, SignalMedium: Fi, SignalZero: qi, Signature: bi, Signpost: Ui, SignpostBig: Ti, Siren: Oi, SkipBack: Ii, SkipForward: Ei, Skull: Gi, Slack: Wi, Slash: Xi, SlashSquare: C0, Slice: Ni, Sliders: P2, SlidersHorizontal: Ki, SlidersVertical: P2, Smartphone: ji, SmartphoneCharging: $i, SmartphoneNfc: Ji, Smile: _i, SmilePlus: Qi, Snail: Yi, Snowflake: al, Sofa: tl, SortAsc: w, SortDesc: V, Soup: hl, Space: dl, Spade: pl, Sparkle: cl, Sparkles: Z2, Speaker: Ml, Speech: sl, SpellCheck: rl, SpellCheck2: el, Spline: vl, Split: ol, SplitSquareHorizontal: u0, SplitSquareVertical: w0, SprayCan: nl, Sprout: il, Square: Hl, SquareActivity: z2, SquareArrowDown: D2, SquareArrowDownLeft: k2, SquareArrowDownRight: B2, SquareArrowLeft: F2, SquareArrowOutDownLeft: q2, SquareArrowOutDownRight: R2, SquareArrowOutUpLeft: b2, SquareArrowOutUpRight: T2, SquareArrowRight: U2, SquareArrowUp: E2, SquareArrowUpLeft: O2, SquareArrowUpRight: I2, SquareAsterisk: G2, SquareBottomDashedScissors: W2, SquareChartGantt: l, SquareCheck: N2, SquareCheckBig: X2, SquareChevronDown: K2, SquareChevronLeft: $2, SquareChevronRight: J2, SquareChevronUp: j2, SquareCode: Q2, SquareDashed: a0, SquareDashedBottom: gl, SquareDashedBottomCode: ll, SquareDashedKanban: _2, SquareDashedMousePointer: Y2, SquareDivide: t0, SquareDot: h0, SquareEqual: d0, SquareFunction: p0, SquareGanttChart: l, SquareKanban: c0, SquareLibrary: M0, SquareM: s0, SquareMenu: e0, SquareMinus: r0, SquareMousePointer: v0, SquareParking: n0, SquareParkingOff: o0, SquarePen: o, SquarePercent: i0, SquarePi: l0, SquarePilcrow: g0, SquarePlay: x0, SquarePlus: y0, SquarePower: m0, SquareRadical: xl, SquareScissors: H0, SquareSigma: V0, SquareSlash: C0, SquareSplitHorizontal: u0, SquareSplitVertical: w0, SquareSquare: yl, SquareStack: ml, SquareTerminal: A0, SquareUser: S0, SquareUserRound: L0, SquareX: f0, Squircle: Vl, Squirrel: Cl, Stamp: ul, Star: Ll, StarHalf: wl, StarOff: Al, Stars: Z2, StepBack: Sl, StepForward: fl, Stethoscope: Pl, Sticker: Zl, StickyNote: zl, StopCircle: m1, Store: kl, StretchHorizontal: Bl, StretchVertical: Dl, Strikethrough: Fl, Subscript: ql, Subtitles: k, Sun: Ol, SunDim: Rl, SunMedium: bl, SunMoon: Tl, SunSnow: Ul, Sunrise: Il, Sunset: El, Superscript: Gl, SwatchBook: Wl, SwissFranc: Xl, SwitchCamera: Nl, Sword: Kl, Swords: $l, Syringe: Jl, Table: dg, Table2: jl, TableCellsMerge: Ql, TableCellsSplit: _l, TableColumnsSplit: Yl, TableOfContents: ag, TableProperties: tg, TableRowsSplit: hg, Tablet: cg, TabletSmartphone: pg, Tablets: Mg, Tag: sg, Tags: eg, Tally1: rg, Tally2: vg, Tally3: og, Tally4: ng, Tally5: ig, Tangent: lg, Target: gg, Telescope: xg, Tent: mg, TentTree: yg, Terminal: Hg, TerminalSquare: A0, TestTube: Vg, TestTube2: P0, TestTubeDiagonal: P0, TestTubes: Cg, Text: Sg, TextCursor: wg, TextCursorInput: ug, TextQuote: Ag, TextSearch: Lg, TextSelect: Z0, TextSelection: Z0, Theater: fg, Thermometer: zg, ThermometerSnowflake: Pg, ThermometerSun: Zg, ThumbsDown: kg, ThumbsUp: Bg, Ticket: Ug, TicketCheck: Dg, TicketMinus: Fg, TicketPercent: qg, TicketPlus: Rg, TicketSlash: bg, TicketX: Tg, Tickets: Ig, TicketsPlane: Og, Timer: Wg, TimerOff: Eg, TimerReset: Gg, ToggleLeft: Xg, ToggleRight: Ng, Toilet: Kg, Tornado: $g, Torus: Jg, Touchpad: Qg, TouchpadOff: jg, TowerControl: _g, ToyBrick: Yg, Tractor: ax, TrafficCone: tx, Train: z0, TrainFront: dx, TrainFrontTunnel: hx, TrainTrack: px, TramFront: z0, Trash: Mx, Trash2: cx, TreeDeciduous: sx, TreePalm: k0, TreePine: ex, Trees: rx, Trello: vx, TrendingDown: ox, TrendingUp: ix, TrendingUpDown: nx, Triangle: gx, TriangleAlert: B0, TriangleRight: lx, Trophy: xx, Truck: yx, Turtle: mx, Tv: Vx, Tv2: D0, TvMinimal: D0, TvMinimalPlay: Hx, Twitch: Cx, Twitter: ux, Type: Ax, TypeOutline: wx, Umbrella: Sx, UmbrellaOff: Lx, Underline: fx, Undo: zx, Undo2: Px, UndoDot: Zx, UnfoldHorizontal: kx, UnfoldVertical: Bx, Ungroup: Dx, University: F0, Unlink: qx, Unlink2: Fx, Unlock: d2, UnlockKeyhole: h2, Unplug: Rx, Upload: bx, UploadCloud: L1, Usb: Tx, User: $x, User2: O0, UserCheck: Ux, UserCheck2: q0, UserCircle: V1, UserCircle2: H1, UserCog: Ox, UserCog2: R0, UserMinus: Ix, UserMinus2: b0, UserPen: Ex, UserPlus: Gx, UserPlus2: T0, UserRound: O0, UserRoundCheck: q0, UserRoundCog: R0, UserRoundMinus: b0, UserRoundPen: Wx, UserRoundPlus: T0, UserRoundSearch: Xx, UserRoundX: U0, UserSearch: Nx, UserSquare: S0, UserSquare2: L0, UserX: Kx, UserX2: U0, Users: Jx, Users2: I0, UsersRound: I0, Utensils: G0, UtensilsCrossed: E0, UtilityPole: jx, Variable: Qx, Vault: _x, Vegan: Yx, VenetianMask: ay, Verified: S, Vibrate: hy, VibrateOff: ty, Video: py, VideoOff: dy, Videotape: cy, View: My, Voicemail: sy, Volleyball: ey, Volume: iy, Volume1: ry, Volume2: vy, VolumeOff: oy, VolumeX: ny, Vote: ly, Wallet: xy, Wallet2: W0, WalletCards: gy, WalletMinimal: W0, Wallpaper: yy, Wand: my, Wand2: X0, WandSparkles: X0, Warehouse: Hy, WashingMachine: Vy, Watch: Cy, Waves: wy, WavesLadder: uy, Waypoints: Ay, Webcam: Ly, Webhook: fy, WebhookOff: Sy, Weight: Py, Wheat: zy, WheatOff: Zy, WholeWord: ky, Wifi: Ry, WifiHigh: By, WifiLow: Dy, WifiOff: Fy, WifiZero: qy, Wind: Ty, WindArrowDown: by, Wine: Oy, WineOff: Uy, Workflow: Iy, Worm: Ey, WrapText: Gy, Wrench: Wy, X: Xy, XCircle: C1, XOctagon: e2, XSquare: f0, Youtube: Ny, Zap: $y, ZapOff: Ky, ZoomIn: Jy, ZoomOut: jy, createElement: K0, createIcons: ({ icons: h = {}, nameAttr: t = "data-lucide", attrs: d = {} } = {}) => {
    if (!Object.values(h).length)
      throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);
    if (typeof document > "u")
      throw new Error("`createIcons()` only works in a browser environment.");
    const c = document.querySelectorAll(`[${t}]`);
    if (Array.from(c).forEach((p) => J0(p, { nameAttr: t, icons: h, attrs: d })), t === "data-lucide") {
      const p = document.querySelectorAll("[icon-name]");
      p.length > 0 && (console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"), Array.from(p).forEach((M) => J0(M, { nameAttr: "icon-name", icons: h, attrs: d })));
    }
  }, icons: Mm }, Symbol.toStringTag, { value: "Module" }));
  function Qy(h) {
    if (h.startsWith("{"))
      try {
        return JSON.parse(h);
      } catch {
        return console.error("Error parsing", h), {};
      }
    if (h.includes(":"))
      try {
        const t = {};
        return h.replace(/[;\s]+$/, "").split(";").forEach((d) => {
          const c = d.trim().split(/:(.*)/);
          t[c[0].trim()] = c[1].trim();
        }), t;
      } catch {
        return console.error("Error parsing", h), {};
      }
    return h;
  }
  var em = Object.defineProperty, N0 = (h, t, d, c) => {
    for (var p = undefined, M = h.length - 1, r;M >= 0; M--)
      (r = h[M]) && (p = r(t, d, p) || p);
    return p && em(t, d, p), p;
  };

  class g extends tm.LitElement {
    constructor() {
      super(...arguments), this["cls-custom"] = "", this.i18n = "", this.$i18n = {}, this.$cls = {};
    }
    get $locales() {
      const t = {};
      return Object.keys(this.$i18n).forEach((d) => {
        t[d] = this.$i18n[d].includes(",") ? this.$i18n[d].split(",").map((c) => c.trim()) : this.$i18n[d];
      }), t;
    }
    initializeCls() {
      if (this["cls-custom"]) {
        const t = Qy(this["cls-custom"]);
        typeof t == "string" ? this.$cls[this["cls-default-element"]] = t : Object.keys(this.$cls).forEach((d) => {
          const c = d;
          t[c] && (this.$cls[c] = t[c]);
        });
      }
    }
    initializeI18n() {
      if (this.i18n) {
        const t = Qy(this.i18n);
        typeof t == "object" && (this.$i18n = Object.assign(this.$i18n, t));
      }
    }
    connectedCallback() {
      super.connectedCallback(), this.initializeCls(), this.initializeI18n();
    }
    createRenderRoot() {
      return this;
    }
  }
  N0([e.property({ type: String })], g.prototype, "cls-custom"), N0([e.property({ type: String })], g.prototype, "i18n"), N0([e.state()], g.prototype, "$i18n"), N0([e.state()], g.prototype, "$cls");
  var { defineProperty: rm, getOwnPropertyDescriptor: vm } = Object, n = (h, t, d, c) => {
    for (var p = c > 1 ? undefined : c ? vm(t, d) : t, M = h.length - 1, r;M >= 0; M--)
      (r = h[M]) && (p = (c ? r(t, d, p) : r(p)) || p);
    return c && p && rm(t, d, p), p;
  };
  return s.Icon = class extends g {
    constructor() {
      super(...arguments), this["cls-default-element"] = "svg", this.icon = "", this["stroke-width"] = "2", this.height = "16", this.width = "16", this.$cls = { svg: "" };
    }
    get key() {
      return this.icon.trim().split("-").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join("");
    }
    updated(t) {
      (t.has("icon") || t.has("stroke-width") || t.has("height") || t.has("width")) && this.updateComplete.then(() => {
        this.svg = this.createSvg({ icon: this.key, cls: this.$cls.svg, height: this.height, width: this.width, strokeWidth: this["stroke-width"] });
      });
    }
    createSvg(t) {
      const { icon: d, cls: c, height: p, width: M, strokeWidth: r } = t;
      try {
        const v = K0(sm[d]);
        return v.setAttribute("class", c), v.setAttribute("height", p), v.setAttribute("stroke-width", r), v.setAttribute("width", M), v;
      } catch {
        return;
      }
    }
    render() {
      if (this.renderRoot.children.length === 0)
        return this.svg;
    }
  }, n([e.property({ type: String })], s.Icon.prototype, "icon", 2), n([e.property({ type: String })], s.Icon.prototype, "stroke-width", 2), n([e.property({ type: String })], s.Icon.prototype, "height", 2), n([e.property({ type: String })], s.Icon.prototype, "width", 2), n([e.state()], s.Icon.prototype, "svg", 2), n([e.state()], s.Icon.prototype, "$cls", 2), s.Icon = n([e.customElement("uk-icon")], s.Icon), Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), s;
}({}, LitDecorators, Lit);

// js/franken-ui.js
var htmlElement = document.documentElement;
var __FRANKEN__ = JSON.parse(localStorage.getItem("__FRANKEN__") || "{}");
if (__FRANKEN__.mode === "dark" || !__FRANKEN__.mode && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  htmlElement.classList.add("dark");
} else {
  htmlElement.classList.remove("dark");
}
htmlElement.classList.add(__FRANKEN__.theme || "uk-theme-blue");
htmlElement.classList.add(__FRANKEN__.radii || "uk-radii-md");
htmlElement.classList.add(__FRANKEN__.shadows || "uk-shadows-sm");
htmlElement.classList.add(__FRANKEN__.font || "uk-font-sm");
