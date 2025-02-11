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
  var FRANKENUICORE = function(S) {
    var So;
    const ji = globalThis, zi = ji.ShadowRoot && (ji.ShadyCSS === undefined || ji.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Cs = Symbol(), Kn = new WeakMap;
    let Ts = class {
      constructor(n, a, h) {
        if (this._$cssResult$ = true, h !== Cs)
          throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = n, this.t = a;
      }
      get styleSheet() {
        let n = this.o;
        const a = this.t;
        if (zi && n === undefined) {
          const h = a !== undefined && a.length === 1;
          h && (n = Kn.get(a)), n === undefined && ((this.o = n = new CSSStyleSheet).replaceSync(this.cssText), h && Kn.set(a, n));
        }
        return n;
      }
      toString() {
        return this.cssText;
      }
    };
    const Jn = (d) => new Ts(typeof d == "string" ? d : d + "", undefined, Cs), Ba = (d, ...n) => {
      const a = d.length === 1 ? d[0] : n.reduce((h, c, g) => h + ((p) => {
        if (p._$cssResult$ === true)
          return p.cssText;
        if (typeof p == "number")
          return p;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + p + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(c) + d[g + 1], d[0]);
      return new Ts(a, d, Cs);
    }, Gn = (d, n) => {
      if (zi)
        d.adoptedStyleSheets = n.map((a) => a instanceof CSSStyleSheet ? a : a.styleSheet);
      else
        for (const a of n) {
          const h = document.createElement("style"), c = ji.litNonce;
          c !== undefined && h.setAttribute("nonce", c), h.textContent = a.cssText, d.appendChild(h);
        }
    }, Ps = zi ? (d) => d : (d) => d instanceof CSSStyleSheet ? ((n) => {
      let a = "";
      for (const h of n.cssRules)
        a += h.cssText;
      return Jn(a);
    })(d) : d;
    const { is: Ra, defineProperty: ja, getOwnPropertyDescriptor: za, getOwnPropertyNames: Fa, getOwnPropertySymbols: Ua, getPrototypeOf: qa } = Object, Jt = globalThis, Xn = Jt.trustedTypes, Wa = Xn ? Xn.emptyScript : "", Os = Jt.reactiveElementPolyfillSupport, ei = (d, n) => d, ii = { toAttribute(d, n) {
      switch (n) {
        case Boolean:
          d = d ? Wa : null;
          break;
        case Object:
        case Array:
          d = d == null ? d : JSON.stringify(d);
      }
      return d;
    }, fromAttribute(d, n) {
      let a = d;
      switch (n) {
        case Boolean:
          a = d !== null;
          break;
        case Number:
          a = d === null ? null : Number(d);
          break;
        case Object:
        case Array:
          try {
            a = JSON.parse(d);
          } catch {
            a = null;
          }
      }
      return a;
    } }, Fi = (d, n) => !Ra(d, n), Zn = { attribute: true, type: String, converter: ii, reflect: false, hasChanged: Fi };
    Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Jt.litPropertyMetadata ?? (Jt.litPropertyMetadata = new WeakMap);
    let ae = class extends HTMLElement {
      static addInitializer(n) {
        this._$Ei(), (this.l ?? (this.l = [])).push(n);
      }
      static get observedAttributes() {
        return this.finalize(), this._$Eh && [...this._$Eh.keys()];
      }
      static createProperty(n, a = Zn) {
        if (a.state && (a.attribute = false), this._$Ei(), this.elementProperties.set(n, a), !a.noAccessor) {
          const h = Symbol(), c = this.getPropertyDescriptor(n, h, a);
          c !== undefined && ja(this.prototype, n, c);
        }
      }
      static getPropertyDescriptor(n, a, h) {
        const { get: c, set: g } = za(this.prototype, n) ?? { get() {
          return this[a];
        }, set(p) {
          this[a] = p;
        } };
        return { get() {
          return c == null ? undefined : c.call(this);
        }, set(p) {
          const k = c == null ? undefined : c.call(this);
          g.call(this, p), this.requestUpdate(n, k, h);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(n) {
        return this.elementProperties.get(n) ?? Zn;
      }
      static _$Ei() {
        if (this.hasOwnProperty(ei("elementProperties")))
          return;
        const n = qa(this);
        n.finalize(), n.l !== undefined && (this.l = [...n.l]), this.elementProperties = new Map(n.elementProperties);
      }
      static finalize() {
        if (this.hasOwnProperty(ei("finalized")))
          return;
        if (this.finalized = true, this._$Ei(), this.hasOwnProperty(ei("properties"))) {
          const a = this.properties, h = [...Fa(a), ...Ua(a)];
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
            a.unshift(Ps(c));
        } else
          n !== undefined && a.push(Ps(n));
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
        return Gn(n, this.constructor.elementStyles), n;
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
        var g;
        const h = this.constructor.elementProperties.get(n), c = this.constructor._$Eu(n, h);
        if (c !== undefined && h.reflect === true) {
          const p = (((g = h.converter) == null ? undefined : g.toAttribute) !== undefined ? h.converter : ii).toAttribute(a, h.type);
          this._$Em = n, p == null ? this.removeAttribute(c) : this.setAttribute(c, p), this._$Em = null;
        }
      }
      _$AK(n, a) {
        var g;
        const h = this.constructor, c = h._$Eh.get(n);
        if (c !== undefined && this._$Em !== c) {
          const p = h.getPropertyOptions(c), k = typeof p.converter == "function" ? { fromAttribute: p.converter } : ((g = p.converter) == null ? undefined : g.fromAttribute) !== undefined ? p.converter : ii;
          this._$Em = c, this[c] = k.fromAttribute(a, p.type), this._$Em = null;
        }
      }
      requestUpdate(n, a, h) {
        if (n !== undefined) {
          if (h ?? (h = this.constructor.getPropertyOptions(n)), !(h.hasChanged ?? Fi)(this[n], a))
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
            for (const [g, p] of this._$Ep)
              this[g] = p;
            this._$Ep = undefined;
          }
          const c = this.constructor.elementProperties;
          if (c.size > 0)
            for (const [g, p] of c)
              p.wrapped !== true || this._$AL.has(g) || this[g] === undefined || this.P(g, this[g], p);
        }
        let n = false;
        const a = this._$AL;
        try {
          n = this.shouldUpdate(a), n ? (this.willUpdate(a), (h = this._$EO) == null || h.forEach((c) => {
            var g;
            return (g = c.hostUpdate) == null ? undefined : g.call(c);
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
    ae.elementStyles = [], ae.shadowRootOptions = { mode: "open" }, ae[ei("elementProperties")] = new Map, ae[ei("finalized")] = new Map, Os == null || Os({ ReactiveElement: ae }), (Jt.reactiveElementVersions ?? (Jt.reactiveElementVersions = [])).push("2.0.4");
    const si = globalThis, Ui = si.trustedTypes, Qn = Ui ? Ui.createPolicy("lit-html", { createHTML: (d) => d }) : undefined, Ds = "$lit$", Bt = `lit$${Math.random().toFixed(9).slice(2)}$`, Ms = "?" + Bt, Va = `<${Ms}>`, le = document, ni = () => le.createComment(""), oi = (d) => d === null || typeof d != "object" && typeof d != "function", to = Array.isArray, eo = (d) => to(d) || typeof (d == null ? undefined : d[Symbol.iterator]) == "function", Hs = `[ 	
\f\r]`, ri = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, io = /-->/g, so = />/g, ce = RegExp(`>|${Hs}(?:([^\\s"'>=/]+)(${Hs}*=${Hs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), no = /'/g, oo = /"/g, ro = /^(?:script|style|textarea|title)$/i, ao = (d) => (n, ...a) => ({ _$litType$: d, strings: n, values: a }), D = ao(1), Ya = ao(2), Gt = Symbol.for("lit-noChange"), lt = Symbol.for("lit-nothing"), lo = new WeakMap, he = le.createTreeWalker(le, 129);
    function co(d, n) {
      if (!Array.isArray(d) || !d.hasOwnProperty("raw"))
        throw Error("invalid template strings array");
      return Qn !== undefined ? Qn.createHTML(n) : n;
    }
    const ho = (d, n) => {
      const a = d.length - 1, h = [];
      let c, g = n === 2 ? "<svg>" : "", p = ri;
      for (let k = 0;k < a; k++) {
        const y = d[k];
        let _, w, E = -1, P = 0;
        for (;P < y.length && (p.lastIndex = P, w = p.exec(y), w !== null); )
          P = p.lastIndex, p === ri ? w[1] === "!--" ? p = io : w[1] !== undefined ? p = so : w[2] !== undefined ? (ro.test(w[2]) && (c = RegExp("</" + w[2], "g")), p = ce) : w[3] !== undefined && (p = ce) : p === ce ? w[0] === ">" ? (p = c ?? ri, E = -1) : w[1] === undefined ? E = -2 : (E = p.lastIndex - w[2].length, _ = w[1], p = w[3] === undefined ? ce : w[3] === '"' ? oo : no) : p === oo || p === no ? p = ce : p === io || p === so ? p = ri : (p = ce, c = undefined);
        const M = p === ce && d[k + 1].startsWith("/>") ? " " : "";
        g += p === ri ? y + Va : E >= 0 ? (h.push(_), y.slice(0, E) + Ds + y.slice(E) + Bt + M) : y + Bt + (E === -2 ? k : M);
      }
      return [co(d, g + (d[a] || "<?>") + (n === 2 ? "</svg>" : "")), h];
    };

    class ai {
      constructor({ strings: n, _$litType$: a }, h) {
        let c;
        this.parts = [];
        let g = 0, p = 0;
        const k = n.length - 1, y = this.parts, [_, w] = ho(n, a);
        if (this.el = ai.createElement(_, h), he.currentNode = this.el.content, a === 2) {
          const E = this.el.content.firstChild;
          E.replaceWith(...E.childNodes);
        }
        for (;(c = he.nextNode()) !== null && y.length < k; ) {
          if (c.nodeType === 1) {
            if (c.hasAttributes())
              for (const E of c.getAttributeNames())
                if (E.endsWith(Ds)) {
                  const P = w[p++], M = c.getAttribute(E).split(Bt), V = /([.?@])?(.*)/.exec(P);
                  y.push({ type: 1, index: g, name: V[2], strings: M, ctor: V[1] === "." ? fo : V[1] === "?" ? po : V[1] === "@" ? go : li }), c.removeAttribute(E);
                } else
                  E.startsWith(Bt) && (y.push({ type: 6, index: g }), c.removeAttribute(E));
            if (ro.test(c.tagName)) {
              const E = c.textContent.split(Bt), P = E.length - 1;
              if (P > 0) {
                c.textContent = Ui ? Ui.emptyScript : "";
                for (let M = 0;M < P; M++)
                  c.append(E[M], ni()), he.nextNode(), y.push({ type: 2, index: ++g });
                c.append(E[P], ni());
              }
            }
          } else if (c.nodeType === 8)
            if (c.data === Ms)
              y.push({ type: 2, index: g });
            else {
              let E = -1;
              for (;(E = c.data.indexOf(Bt, E + 1)) !== -1; )
                y.push({ type: 7, index: g }), E += Bt.length - 1;
            }
          g++;
        }
      }
      static createElement(n, a) {
        const h = le.createElement("template");
        return h.innerHTML = n, h;
      }
    }
    function ue(d, n, a = d, h) {
      var p, k;
      if (n === Gt)
        return n;
      let c = h !== undefined ? (p = a._$Co) == null ? undefined : p[h] : a._$Cl;
      const g = oi(n) ? undefined : n._$litDirective$;
      return (c == null ? undefined : c.constructor) !== g && ((k = c == null ? undefined : c._$AO) == null || k.call(c, false), g === undefined ? c = undefined : (c = new g(d), c._$AT(d, a, h)), h !== undefined ? (a._$Co ?? (a._$Co = []))[h] = c : a._$Cl = c), c !== undefined && (n = ue(d, c._$AS(d, n.values), c, h)), n;
    }

    class uo {
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
        const { el: { content: a }, parts: h } = this._$AD, c = ((n == null ? undefined : n.creationScope) ?? le).importNode(a, true);
        he.currentNode = c;
        let g = he.nextNode(), p = 0, k = 0, y = h[0];
        for (;y !== undefined; ) {
          if (p === y.index) {
            let _;
            y.type === 2 ? _ = new Oe(g, g.nextSibling, this, n) : y.type === 1 ? _ = new y.ctor(g, y.name, y.strings, this, n) : y.type === 6 && (_ = new mo(g, this, n)), this._$AV.push(_), y = h[++k];
          }
          p !== (y == null ? undefined : y.index) && (g = he.nextNode(), p++);
        }
        return he.currentNode = le, c;
      }
      p(n) {
        let a = 0;
        for (const h of this._$AV)
          h !== undefined && (h.strings !== undefined ? (h._$AI(n, h, a), a += h.strings.length - 2) : h._$AI(n[a])), a++;
      }
    }

    class Oe {
      get _$AU() {
        var n;
        return ((n = this._$AM) == null ? undefined : n._$AU) ?? this._$Cv;
      }
      constructor(n, a, h, c) {
        this.type = 2, this._$AH = lt, this._$AN = undefined, this._$AA = n, this._$AB = a, this._$AM = h, this.options = c, this._$Cv = (c == null ? undefined : c.isConnected) ?? true;
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
        n = ue(this, n, a), oi(n) ? n === lt || n == null || n === "" ? (this._$AH !== lt && this._$AR(), this._$AH = lt) : n !== this._$AH && n !== Gt && this._(n) : n._$litType$ !== undefined ? this.$(n) : n.nodeType !== undefined ? this.T(n) : eo(n) ? this.k(n) : this._(n);
      }
      S(n) {
        return this._$AA.parentNode.insertBefore(n, this._$AB);
      }
      T(n) {
        this._$AH !== n && (this._$AR(), this._$AH = this.S(n));
      }
      _(n) {
        this._$AH !== lt && oi(this._$AH) ? this._$AA.nextSibling.data = n : this.T(le.createTextNode(n)), this._$AH = n;
      }
      $(n) {
        var g;
        const { values: a, _$litType$: h } = n, c = typeof h == "number" ? this._$AC(n) : (h.el === undefined && (h.el = ai.createElement(co(h.h, h.h[0]), this.options)), h);
        if (((g = this._$AH) == null ? undefined : g._$AD) === c)
          this._$AH.p(a);
        else {
          const p = new uo(c, this), k = p.u(this.options);
          p.p(a), this.T(k), this._$AH = p;
        }
      }
      _$AC(n) {
        let a = lo.get(n.strings);
        return a === undefined && lo.set(n.strings, a = new ai(n)), a;
      }
      k(n) {
        to(this._$AH) || (this._$AH = [], this._$AR());
        const a = this._$AH;
        let h, c = 0;
        for (const g of n)
          c === a.length ? a.push(h = new Oe(this.S(ni()), this.S(ni()), this, this.options)) : h = a[c], h._$AI(g), c++;
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

    class li {
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      constructor(n, a, h, c, g) {
        this.type = 1, this._$AH = lt, this._$AN = undefined, this.element = n, this.name = a, this._$AM = c, this.options = g, h.length > 2 || h[0] !== "" || h[1] !== "" ? (this._$AH = Array(h.length - 1).fill(new String), this.strings = h) : this._$AH = lt;
      }
      _$AI(n, a = this, h, c) {
        const g = this.strings;
        let p = false;
        if (g === undefined)
          n = ue(this, n, a, 0), p = !oi(n) || n !== this._$AH && n !== Gt, p && (this._$AH = n);
        else {
          const k = n;
          let y, _;
          for (n = g[0], y = 0;y < g.length - 1; y++)
            _ = ue(this, k[h + y], a, y), _ === Gt && (_ = this._$AH[y]), p || (p = !oi(_) || _ !== this._$AH[y]), _ === lt ? n = lt : n !== lt && (n += (_ ?? "") + g[y + 1]), this._$AH[y] = _;
        }
        p && !c && this.j(n);
      }
      j(n) {
        n === lt ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, n ?? "");
      }
    }

    class fo extends li {
      constructor() {
        super(...arguments), this.type = 3;
      }
      j(n) {
        this.element[this.name] = n === lt ? undefined : n;
      }
    }

    class po extends li {
      constructor() {
        super(...arguments), this.type = 4;
      }
      j(n) {
        this.element.toggleAttribute(this.name, !!n && n !== lt);
      }
    }

    class go extends li {
      constructor(n, a, h, c, g) {
        super(n, a, h, c, g), this.type = 5;
      }
      _$AI(n, a = this) {
        if ((n = ue(this, n, a, 0) ?? lt) === Gt)
          return;
        const h = this._$AH, c = n === lt && h !== lt || n.capture !== h.capture || n.once !== h.once || n.passive !== h.passive, g = n !== lt && (h === lt || c);
        c && this.element.removeEventListener(this.name, this, h), g && this.element.addEventListener(this.name, this, n), this._$AH = n;
      }
      handleEvent(n) {
        var a;
        typeof this._$AH == "function" ? this._$AH.call(((a = this.options) == null ? undefined : a.host) ?? this.element, n) : this._$AH.handleEvent(n);
      }
    }

    class mo {
      constructor(n, a, h) {
        this.element = n, this.type = 6, this._$AN = undefined, this._$AM = a, this.options = h;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(n) {
        ue(this, n);
      }
    }
    const vo = { P: Ds, A: Bt, C: Ms, M: 1, L: ho, R: uo, D: eo, V: ue, I: Oe, H: li, N: po, U: go, B: fo, F: mo }, Ns = si.litHtmlPolyfillSupport;
    Ns == null || Ns(ai, Oe), (si.litHtmlVersions ?? (si.litHtmlVersions = [])).push("3.1.4");
    const $o = (d, n, a) => {
      const h = (a == null ? undefined : a.renderBefore) ?? n;
      let c = h._$litPart$;
      if (c === undefined) {
        const g = (a == null ? undefined : a.renderBefore) ?? null;
        h._$litPart$ = c = new Oe(n.insertBefore(ni(), g), g, undefined, a ?? {});
      }
      return c._$AI(d), c;
    };
    let De = class extends ae {
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
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(n), this._$Do = $o(a, this.renderRoot, this.renderOptions);
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
        return Gt;
      }
    };
    De._$litElement$ = true, De.finalized = true, (So = globalThis.litElementHydrateSupport) == null || So.call(globalThis, { LitElement: De });
    const Ls = globalThis.litElementPolyfillSupport;
    Ls == null || Ls({ LitElement: De });
    const Ka = { _$AK: (d, n, a) => {
      d._$AK(n, a);
    }, _$AL: (d) => d._$AL };
    (globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.6");
    const Ja = Object.freeze(Object.defineProperty({ __proto__: null, CSSResult: Ts, LitElement: De, ReactiveElement: ae, _$LE: Ka, _$LH: vo, adoptStyles: Gn, css: Ba, defaultConverter: ii, getCompatibleStyle: Ps, html: D, isServer: false, noChange: Gt, notEqual: Fi, nothing: lt, render: $o, supportsAdoptingStyleSheets: zi, svg: Ya, unsafeCSS: Jn }, Symbol.toStringTag, { value: "Module" }));
    const Ht = (d) => (n, a) => {
      a !== undefined ? a.addInitializer(() => {
        customElements.define(d, n);
      }) : customElements.define(d, n);
    };
    const Ga = { attribute: true, type: String, converter: ii, reflect: false, hasChanged: Fi }, bo = (d = Ga, n, a) => {
      const { kind: h, metadata: c } = a;
      let g = globalThis.litPropertyMetadata.get(c);
      if (g === undefined && globalThis.litPropertyMetadata.set(c, g = new Map), g.set(a.name, d), h === "accessor") {
        const { name: p } = a;
        return { set(k) {
          const y = n.get.call(this);
          n.set.call(this, k), this.requestUpdate(p, y, d);
        }, init(k) {
          return k !== undefined && this.P(p, undefined, d), k;
        } };
      }
      if (h === "setter") {
        const { name: p } = a;
        return function(k) {
          const y = this[p];
          n.call(this, k), this.requestUpdate(p, y, d);
        };
      }
      throw Error("Unsupported decorator location: " + h);
    };
    function N(d) {
      return (n, a) => typeof a == "object" ? bo(d, n, a) : ((h, c, g) => {
        const p = c.hasOwnProperty(g);
        return c.constructor.createProperty(g, p ? { ...h, wrapped: true } : h), p ? Object.getOwnPropertyDescriptor(c, g) : undefined;
      })(d, n, a);
    }
    function W(d) {
      return N({ ...d, state: true, attribute: false });
    }
    function Xa(d) {
      return (n, a) => {
        const h = typeof n == "function" ? n : n[a];
        Object.assign(h, d);
      };
    }
    const Me = (d, n, a) => (a.configurable = true, a.enumerable = true, Reflect.decorate && typeof n != "object" && Object.defineProperty(d, n, a), a);
    function Za(d, n) {
      return (a, h, c) => {
        const g = (p) => {
          var k;
          return ((k = p.renderRoot) == null ? undefined : k.querySelector(d)) ?? null;
        };
        if (n) {
          const { get: p, set: k } = typeof h == "object" ? a : c ?? (() => {
            const y = Symbol();
            return { get() {
              return this[y];
            }, set(_) {
              this[y] = _;
            } };
          })();
          return Me(a, h, { get() {
            let y = p.call(this);
            return y === undefined && (y = g(this), (y !== null || this.hasUpdated) && k.call(this, y)), y;
          } });
        }
        return Me(a, h, { get() {
          return g(this);
        } });
      };
    }
    let Qa;
    function tl(d) {
      return (n, a) => Me(n, a, { get() {
        return (this.renderRoot ?? Qa ?? (Qa = document.createDocumentFragment())).querySelectorAll(d);
      } });
    }
    function el(d) {
      return (n, a) => Me(n, a, { async get() {
        var h;
        return await this.updateComplete, ((h = this.renderRoot) == null ? undefined : h.querySelector(d)) ?? null;
      } });
    }
    function il(d) {
      return (n, a) => {
        const { slot: h, selector: c } = d ?? {}, g = "slot" + (h ? `[name=${h}]` : ":not([name])");
        return Me(n, a, { get() {
          var y;
          const p = (y = this.renderRoot) == null ? undefined : y.querySelector(g), k = (p == null ? undefined : p.assignedElements(d)) ?? [];
          return c === undefined ? k : k.filter((_) => _.matches(c));
        } });
      };
    }
    function sl(d) {
      return (n, a) => {
        const { slot: h } = d ?? {}, c = "slot" + (h ? `[name=${h}]` : ":not([name])");
        return Me(n, a, { get() {
          var p;
          const g = (p = this.renderRoot) == null ? undefined : p.querySelector(c);
          return (g == null ? undefined : g.assignedNodes(d)) ?? [];
        } });
      };
    }
    const nl = Object.freeze(Object.defineProperty({ __proto__: null, customElement: Ht, eventOptions: Xa, property: N, query: Za, queryAll: tl, queryAssignedElements: il, queryAssignedNodes: sl, queryAsync: el, standardProperty: bo, state: W }, Symbol.toStringTag, { value: "Module" }));
    const ol = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, rl = (d) => (...n) => ({ _$litDirective$: d, values: n });

    class al {
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
    const { I: ll } = vo, wo = () => document.createComment(""), ci = (d, n, a) => {
      var g;
      const h = d._$AA.parentNode, c = n === undefined ? d._$AB : n._$AA;
      if (a === undefined) {
        const p = h.insertBefore(wo(), c), k = h.insertBefore(wo(), c);
        a = new ll(p, k, d, d.options);
      } else {
        const p = a._$AB.nextSibling, k = a._$AM, y = k !== d;
        if (y) {
          let _;
          (g = a._$AQ) == null || g.call(a, d), a._$AM = d, a._$AP !== undefined && (_ = d._$AU) !== k._$AU && a._$AP(_);
        }
        if (p !== c || y) {
          let _ = a._$AA;
          for (;_ !== p; ) {
            const w = _.nextSibling;
            h.insertBefore(_, c), _ = w;
          }
        }
      }
      return a;
    }, de = (d, n, a = d) => (d._$AI(n, a), d), cl = {}, hl = (d, n = cl) => d._$AH = n, ul = (d) => d._$AH, Bs = (d) => {
      var h;
      (h = d._$AP) == null || h.call(d, false, true);
      let n = d._$AA;
      const a = d._$AB.nextSibling;
      for (;n !== a; ) {
        const c = n.nextSibling;
        n.remove(), n = c;
      }
    };
    const yo = (d, n, a) => {
      const h = new Map;
      for (let c = n;c <= a; c++)
        h.set(d[c], c);
      return h;
    }, fe = rl(class extends al {
      constructor(d) {
        if (super(d), d.type !== ol.CHILD)
          throw Error("repeat() can only be used in text expressions");
      }
      dt(d, n, a) {
        let h;
        a === undefined ? a = n : n !== undefined && (h = n);
        const c = [], g = [];
        let p = 0;
        for (const k of d)
          c[p] = h ? h(k, p) : p, g[p] = a(k, p), p++;
        return { values: g, keys: c };
      }
      render(d, n, a) {
        return this.dt(d, n, a).values;
      }
      update(d, [n, a, h]) {
        const c = ul(d), { values: g, keys: p } = this.dt(n, a, h);
        if (!Array.isArray(c))
          return this.ut = p, g;
        const k = this.ut ?? (this.ut = []), y = [];
        let _, w, E = 0, P = c.length - 1, M = 0, V = g.length - 1;
        for (;E <= P && M <= V; )
          if (c[E] === null)
            E++;
          else if (c[P] === null)
            P--;
          else if (k[E] === p[M])
            y[M] = de(c[E], g[M]), E++, M++;
          else if (k[P] === p[V])
            y[V] = de(c[P], g[V]), P--, V--;
          else if (k[E] === p[V])
            y[V] = de(c[E], g[V]), ci(d, y[V + 1], c[E]), E++, V--;
          else if (k[P] === p[M])
            y[M] = de(c[P], g[M]), ci(d, c[E], c[P]), P--, M++;
          else if (_ === undefined && (_ = yo(p, M, V), w = yo(k, E, P)), _.has(k[E]))
            if (_.has(k[P])) {
              const tt = w.get(p[M]), At = tt !== undefined ? c[tt] : null;
              if (At === null) {
                const Qt = ci(d, c[E]);
                de(Qt, g[M]), y[M] = Qt;
              } else
                y[M] = de(At, g[M]), ci(d, c[E], At), c[tt] = null;
              M++;
            } else
              Bs(c[P]), P--;
          else
            Bs(c[E]), E++;
        for (;M <= V; ) {
          const tt = ci(d, y[V + 1]);
          de(tt, g[M]), y[M++] = tt;
        }
        for (;E <= P; ) {
          const tt = c[E++];
          tt !== null && Bs(tt);
        }
        return this.ut = p, hl(d, y), Gt;
      }
    });
    (function(d, n) {
      typeof S == "object" && typeof module < "u" ? module.exports = n() : typeof define == "function" && define.amd ? define("uikit", n) : (d = typeof globalThis < "u" ? globalThis : d || self, d.UIkit = n());
    })(undefined, function() {
      const { hasOwnProperty: d, toString: n } = Object.prototype;
      function a(t, e) {
        return d.call(t, e);
      }
      const h = /\B([A-Z])/g, c = Et((t) => t.replace(h, "-$1").toLowerCase()), g = /-(\w)/g, p = Et((t) => (t.charAt(0).toLowerCase() + t.slice(1)).replace(g, (e, i) => i.toUpperCase())), k = Et((t) => t.charAt(0).toUpperCase() + t.slice(1));
      function y(t, e) {
        var i;
        return (i = t == null ? undefined : t.startsWith) == null ? undefined : i.call(t, e);
      }
      function _(t, e) {
        var i;
        return (i = t == null ? undefined : t.endsWith) == null ? undefined : i.call(t, e);
      }
      function w(t, e) {
        var i;
        return (i = t == null ? undefined : t.includes) == null ? undefined : i.call(t, e);
      }
      function E(t, e) {
        var i;
        return (i = t == null ? undefined : t.findIndex) == null ? undefined : i.call(t, e);
      }
      const { isArray: P, from: M } = Array, { assign: V } = Object;
      function tt(t) {
        return typeof t == "function";
      }
      function At(t) {
        return t !== null && typeof t == "object";
      }
      function Qt(t) {
        return n.call(t) === "[object Object]";
      }
      function Ki(t) {
        return At(t) && t === t.window;
      }
      function di(t) {
        return zs(t) === 9;
      }
      function fi(t) {
        return zs(t) >= 1;
      }
      function Be(t) {
        return zs(t) === 1;
      }
      function zs(t) {
        return !Ki(t) && At(t) && t.nodeType;
      }
      function Re(t) {
        return typeof t == "boolean";
      }
      function nt(t) {
        return typeof t == "string";
      }
      function pi(t) {
        return typeof t == "number";
      }
      function jt(t) {
        return pi(t) || nt(t) && !isNaN(t - parseFloat(t));
      }
      function Ji(t) {
        return !(P(t) ? t.length : At(t) && Object.keys(t).length);
      }
      function pt(t) {
        return t === undefined;
      }
      function Fs(t) {
        return Re(t) ? t : t === "true" || t === "1" || t === "" ? true : t === "false" || t === "0" ? false : t;
      }
      function zt(t) {
        const e = Number(t);
        return isNaN(e) ? false : e;
      }
      function R(t) {
        return parseFloat(t) || 0;
      }
      function at(t) {
        return t && F(t)[0];
      }
      function F(t) {
        return fi(t) ? [t] : Array.from(t || []).filter(fi);
      }
      function ge(t) {
        if (Ki(t))
          return t;
        t = at(t);
        const e = di(t) ? t : t == null ? undefined : t.ownerDocument;
        return (e == null ? undefined : e.defaultView) || window;
      }
      function gi(t, e) {
        return t === e || At(t) && At(e) && Object.keys(t).length === Object.keys(e).length && je(t, (i, s) => i === e[s]);
      }
      function Us(t, e, i) {
        return t.replace(new RegExp(`${e}|${i}`, "g"), (s) => s === e ? i : e);
      }
      function me(t) {
        return t[t.length - 1];
      }
      function je(t, e) {
        for (const i in t)
          if (e(t[i], i) === false)
            return false;
        return true;
      }
      function _o(t, e) {
        return t.slice().sort(({ [e]: i = 0 }, { [e]: s = 0 }) => i > s ? 1 : s > i ? -1 : 0);
      }
      function ve(t, e) {
        return t.reduce((i, s) => i + R(tt(e) ? e(s) : s[e]), 0);
      }
      function Ao(t, e) {
        const i = new Set;
        return t.filter(({ [e]: s }) => i.has(s) ? false : i.add(s));
      }
      function qs(t, e) {
        return e.reduce((i, s) => ({ ...i, [s]: t[s] }), {});
      }
      function mt(t, e = 0, i = 1) {
        return Math.min(Math.max(zt(t) || 0, e), i);
      }
      function ct() {
      }
      function Ws(...t) {
        return [["bottom", "top"], ["right", "left"]].every(([e, i]) => Math.min(...t.map(({ [e]: s }) => s)) - Math.max(...t.map(({ [i]: s }) => s)) > 0);
      }
      function Gi(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
      }
      function Vs(t, e, i) {
        const s = e === "width" ? "height" : "width";
        return { [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s], [e]: i };
      }
      function Eo(t, e) {
        t = { ...t };
        for (const i in t)
          t = t[i] > e[i] ? Vs(t, i, e[i]) : t;
        return t;
      }
      function jl(t, e) {
        t = Eo(t, e);
        for (const i in t)
          t = t[i] < e[i] ? Vs(t, i, e[i]) : t;
        return t;
      }
      const Ys = { ratio: Vs, contain: Eo, cover: jl };
      function yt(t, e, i = 0, s = false) {
        e = F(e);
        const { length: o } = e;
        return o ? (t = jt(t) ? zt(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? o - 1 : e.indexOf(at(t)), s ? mt(t, 0, o - 1) : (t %= o, t < 0 ? t + o : t)) : -1;
      }
      function Et(t) {
        const e = Object.create(null);
        return (i, ...s) => e[i] || (e[i] = t(i, ...s));
      }
      function j(t, ...e) {
        for (const i of F(t)) {
          const s = $e(e).filter((o) => !L(i, o));
          s.length && i.classList.add(...s);
        }
      }
      function Z(t, ...e) {
        for (const i of F(t)) {
          const s = $e(e).filter((o) => L(i, o));
          s.length && i.classList.remove(...s);
        }
      }
      function Ks(t, e, i) {
        i = $e(i), e = $e(e).filter((s) => !w(i, s)), Z(t, e), j(t, i);
      }
      function L(t, e) {
        return [e] = $e(e), F(t).some((i) => i.classList.contains(e));
      }
      function it(t, e, i) {
        const s = $e(e);
        pt(i) || (i = !!i);
        for (const o of F(t))
          for (const r of s)
            o.classList.toggle(r, i);
      }
      function $e(t) {
        return t ? P(t) ? t.map($e).flat() : String(t).split(" ").filter(Boolean) : [];
      }
      function A(t, e, i) {
        var s;
        if (At(e)) {
          for (const o in e)
            A(t, o, e[o]);
          return;
        }
        if (pt(i))
          return (s = at(t)) == null ? undefined : s.getAttribute(e);
        for (const o of F(t))
          tt(i) && (i = i.call(o, A(o, e))), i === null ? mi(o, e) : o.setAttribute(e, i);
      }
      function te(t, e) {
        return F(t).some((i) => i.hasAttribute(e));
      }
      function mi(t, e) {
        F(t).forEach((i) => i.removeAttribute(e));
      }
      function vt(t, e) {
        for (const i of [e, `data-${e}`])
          if (te(t, i))
            return A(t, i);
      }
      const be = typeof window < "u", ht = be && document.dir === "rtl", ze = be && "ontouchstart" in window, Fe = be && window.PointerEvent, It = Fe ? "pointerdown" : ze ? "touchstart" : "mousedown", Xi = Fe ? "pointermove" : ze ? "touchmove" : "mousemove", ee = Fe ? "pointerup" : ze ? "touchend" : "mouseup", we = Fe ? "pointerenter" : ze ? "" : "mouseenter", Ue = Fe ? "pointerleave" : ze ? "" : "mouseleave", Zi = Fe ? "pointercancel" : "touchcancel", zl = { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
      function Js(t) {
        return F(t).some((e) => zl[e.tagName.toLowerCase()]);
      }
      const Fl = be && Element.prototype.checkVisibility || function() {
        return this.offsetWidth || this.offsetHeight || this.getClientRects().length;
      };
      function ut(t) {
        return F(t).some((e) => Fl.call(e));
      }
      const vi = "input,select,textarea,button";
      function Qi(t) {
        return F(t).some((e) => Y(e, vi));
      }
      const $i = `${vi},a[href],[tabindex]`;
      function ts(t) {
        return Y(t, $i);
      }
      function J(t) {
        var e;
        return (e = at(t)) == null ? undefined : e.parentElement;
      }
      function bi(t, e) {
        return F(t).filter((i) => Y(i, e));
      }
      function Y(t, e) {
        return F(t).some((i) => i.matches(e));
      }
      function qe(t, e) {
        const i = [];
        for (;t = J(t); )
          (!e || Y(t, e)) && i.push(t);
        return i;
      }
      function G(t, e) {
        t = at(t);
        const i = t ? M(t.children) : [];
        return e ? bi(i, e) : i;
      }
      function Ft(t, e) {
        return e ? F(t).indexOf(at(e)) : G(J(t)).indexOf(t);
      }
      function We(t) {
        return t = at(t), t && ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
      }
      function Gs(t) {
        if (We(t)) {
          const { hash: e, ownerDocument: i } = at(t), s = decodeURIComponent(e).slice(1);
          return s ? i.getElementById(s) || i.getElementsByName(s)[0] : i.documentElement;
        }
      }
      function Ct(t, e) {
        return Xs(t, Io(t, e));
      }
      function wi(t, e) {
        return yi(t, Io(t, e));
      }
      function Xs(t, e) {
        return at(Po(t, at(e), "querySelector"));
      }
      function yi(t, e) {
        return F(Po(t, at(e), "querySelectorAll"));
      }
      function Io(t, e = document) {
        return di(e) || Co(t).isContextSelector ? e : e.ownerDocument;
      }
      const Ul = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, ql = /(\([^)]*\)|[^,])+/g, Co = Et((t) => {
        let e = false;
        if (!t || !nt(t))
          return {};
        const i = [];
        for (let s of t.match(ql))
          s = s.trim().replace(Ul, "$1 *"), e || (e = ["!", "+", "~", "-", ">"].includes(s[0])), i.push(s);
        return { selector: i.join(","), selectors: i, isContextSelector: e };
      }), Wl = /(\([^)]*\)|\S)*/, To = Et((t) => {
        t = t.slice(1).trim();
        const [e] = t.match(Wl);
        return [e, t.slice(e.length + 1)];
      });
      function Po(t, e = document, i) {
        const s = Co(t);
        if (!s.isContextSelector)
          return s.selector ? Zs(e, i, s.selector) : t;
        t = "";
        const o = s.selectors.length === 1;
        for (let r of s.selectors) {
          let l, u = e;
          if (r[0] === "!" && ([l, r] = To(r), u = e.parentElement.closest(l), !r && o) || u && r[0] === "-" && ([l, r] = To(r), u = u.previousElementSibling, u = Y(u, l) ? u : null, !r && o))
            return u;
          if (u) {
            if (o)
              return r[0] === "~" || r[0] === "+" ? (r = `:scope > :nth-child(${Ft(u) + 1}) ${r}`, u = u.parentElement) : r[0] === ">" && (r = `:scope ${r}`), Zs(u, i, r);
            t += `${t ? "," : ""}${Vl(u)} ${r}`;
          }
        }
        return di(e) || (e = e.ownerDocument), Zs(e, i, t);
      }
      function Zs(t, e, i) {
        try {
          return t[e](i);
        } catch {
          return null;
        }
      }
      function Vl(t) {
        const e = [];
        for (;t.parentNode; ) {
          const i = A(t, "id");
          if (i) {
            e.unshift(`#${Qs(i)}`);
            break;
          } else {
            let { tagName: s } = t;
            s !== "HTML" && (s += `:nth-child(${Ft(t) + 1})`), e.unshift(s), t = t.parentNode;
          }
        }
        return e.join(" > ");
      }
      function Qs(t) {
        return nt(t) ? CSS.escape(t) : "";
      }
      function z(...t) {
        let [e, i, s, o, r = false] = tn(t);
        o.length > 1 && (o = Kl(o)), r != null && r.self && (o = Jl(o)), s && (o = Yl(s, o));
        for (const l of i)
          for (const u of e)
            u.addEventListener(l, o, r);
        return () => ye(e, i, o, r);
      }
      function ye(...t) {
        let [e, i, , s, o = false] = tn(t);
        for (const r of i)
          for (const l of e)
            l.removeEventListener(r, s, o);
      }
      function st(...t) {
        const [e, i, s, o, r = false, l] = tn(t), u = z(e, i, s, (f) => {
          const v = !l || l(f);
          v && (u(), o(f, v));
        }, r);
        return u;
      }
      function C(t, e, i) {
        return en(t).every((s) => s.dispatchEvent(Ve(e, true, true, i)));
      }
      function Ve(t, e = true, i = false, s) {
        return nt(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: i, detail: s })), t;
      }
      function tn(t) {
        return t[0] = en(t[0]), nt(t[1]) && (t[1] = t[1].split(" ")), tt(t[2]) && t.splice(2, 0, false), t;
      }
      function Yl(t, e) {
        return (i) => {
          const s = t[0] === ">" ? yi(t, i.currentTarget).reverse().find((o) => o.contains(i.target)) : i.target.closest(t);
          s && (i.current = s, e.call(this, i), delete i.current);
        };
      }
      function Kl(t) {
        return (e) => P(e.detail) ? t(e, ...e.detail) : t(e);
      }
      function Jl(t) {
        return function(e) {
          if (e.target === e.currentTarget || e.target === e.current)
            return t.call(null, e);
        };
      }
      function Oo(t) {
        return t && "addEventListener" in t;
      }
      function Gl(t) {
        return Oo(t) ? t : at(t);
      }
      function en(t) {
        return P(t) ? t.map(Gl).filter(Boolean) : nt(t) ? yi(t) : Oo(t) ? [t] : F(t);
      }
      function Mt(t) {
        return t.pointerType === "touch" || !!t.touches;
      }
      function Ut(t) {
        var e, i;
        const { clientX: s, clientY: o } = ((e = t.touches) == null ? undefined : e[0]) || ((i = t.changedTouches) == null ? undefined : i[0]) || t;
        return { x: s, y: o };
      }
      const Xl = { "animation-iteration-count": true, "column-count": true, "fill-opacity": true, "flex-grow": true, "flex-shrink": true, "font-weight": true, "line-height": true, opacity: true, order: true, orphans: true, "stroke-dasharray": true, "stroke-dashoffset": true, widows: true, "z-index": true, zoom: true };
      function m(t, e, i, s) {
        const o = F(t);
        for (const r of o)
          if (nt(e)) {
            if (e = es(e), pt(i))
              return getComputedStyle(r).getPropertyValue(e);
            r.style.setProperty(e, jt(i) && !Xl[e] ? `${i}px` : i || pi(i) ? i : "", s);
          } else if (P(e)) {
            const l = {};
            for (const u of e)
              l[u] = m(r, u);
            return l;
          } else if (At(e))
            for (const l in e)
              m(r, l, e[l], i);
        return o[0];
      }
      const es = Et((t) => {
        if (y(t, "--"))
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
      }), sn = "uk-transition", nn = "transitionend", on = "transitioncanceled";
      function Zl(t, e, i = 400, s = "linear") {
        return i = Math.round(i), Promise.all(F(t).map((o) => new Promise((r, l) => {
          for (const f in e)
            m(o, f);
          const u = setTimeout(() => C(o, nn), i);
          st(o, [nn, on], ({ type: f }) => {
            clearTimeout(u), Z(o, sn), m(o, { transitionProperty: "", transitionDuration: "", transitionTimingFunction: "" }), f === on ? l() : r(o);
          }, { self: true }), j(o, sn), m(o, { transitionProperty: Object.keys(e).map(es).join(","), transitionDuration: `${i}ms`, transitionTimingFunction: s, ...e });
        })));
      }
      const X = { start: Zl, async stop(t) {
        C(t, nn), await Promise.resolve();
      }, async cancel(t) {
        C(t, on), await Promise.resolve();
      }, inProgress(t) {
        return L(t, sn);
      } }, ki = "uk-anmt", Do = "animationend", is = "animationcanceled";
      function Mo(t, e, i = 200, s, o) {
        return Promise.all(F(t).map((r) => new Promise((l, u) => {
          L(r, ki) && C(r, is);
          const f = [e, ki, `${ki}-${o ? "leave" : "enter"}`, s && `uk-transform-origin-${s}`, o && `${ki}-reverse`], v = setTimeout(() => C(r, Do), i);
          st(r, [Do, is], ({ type: $ }) => {
            clearTimeout(v), $ === is ? u() : l(r), m(r, "animationDuration", ""), Z(r, f);
          }, { self: true }), m(r, "animationDuration", `${i}ms`), j(r, f);
        })));
      }
      const ie = { in: Mo, out(t, e, i, s) {
        return Mo(t, e, i, s, true);
      }, inProgress(t) {
        return L(t, ki);
      }, cancel(t) {
        C(t, is);
      } };
      function Ql(t) {
        if (document.readyState !== "loading") {
          t();
          return;
        }
        st(document, "DOMContentLoaded", t);
      }
      function et(t, ...e) {
        return e.some((i) => {
          var s;
          return ((s = t == null ? undefined : t.tagName) == null ? undefined : s.toLowerCase()) === i.toLowerCase();
        });
      }
      function Ho(t) {
        return t = H(t), t && (t.innerHTML = ""), t;
      }
      function qt(t, e) {
        return pt(e) ? H(t).innerHTML : ot(Ho(t), e);
      }
      const tc = os("prepend"), ot = os("append"), ss = os("before"), ns = os("after");
      function os(t) {
        return function(e, i) {
          var s;
          const o = F(nt(i) ? Wt(i) : i);
          return (s = H(e)) == null || s[t](...o), No(o);
        };
      }
      function $t(t) {
        F(t).forEach((e) => e.remove());
      }
      function xi(t, e) {
        for (e = at(ss(t, e));e.firstElementChild; )
          e = e.firstElementChild;
        return ot(e, t), e;
      }
      function rn(t, e) {
        return F(F(t).map((i) => i.hasChildNodes() ? xi(M(i.childNodes), e) : ot(i, e)));
      }
      function Si(t) {
        F(t).map(J).filter((e, i, s) => s.indexOf(e) === i).forEach((e) => e.replaceWith(...e.childNodes));
      }
      const ec = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
      function Wt(t) {
        const e = ec.exec(t);
        if (e)
          return document.createElement(e[1]);
        const i = document.createElement("template");
        return i.innerHTML = t.trim(), No(i.content.childNodes);
      }
      function No(t) {
        return t.length > 1 ? t : t[0];
      }
      function se(t, e) {
        if (Be(t))
          for (e(t), t = t.firstElementChild;t; )
            se(t, e), t = t.nextElementSibling;
      }
      function H(t, e) {
        return Lo(t) ? at(Wt(t)) : Xs(t, e);
      }
      function Q(t, e) {
        return Lo(t) ? F(Wt(t)) : yi(t, e);
      }
      function Lo(t) {
        return nt(t) && y(t.trim(), "<");
      }
      const ke = { width: ["left", "right"], height: ["top", "bottom"] };
      function T(t) {
        const e = Be(t) ? at(t).getBoundingClientRect() : { height: bt(t), width: rs(t), top: 0, left: 0 };
        return { height: e.height, width: e.width, top: e.top, left: e.left, bottom: e.top + e.height, right: e.left + e.width };
      }
      function U(t, e) {
        e && m(t, { left: 0, top: 0 });
        const i = T(t);
        if (t) {
          const { scrollY: s, scrollX: o } = ge(t), r = { height: s, width: o };
          for (const l in ke)
            for (const u of ke[l])
              i[u] += r[l];
        }
        if (!e)
          return i;
        for (const s of ["left", "top"])
          m(t, s, e[s] - i[s]);
      }
      function an(t) {
        let { top: e, left: i } = U(t);
        const { ownerDocument: { body: s, documentElement: o }, offsetParent: r } = at(t);
        let l = r || o;
        for (;l && (l === s || l === o) && m(l, "position") === "static"; )
          l = l.parentNode;
        if (Be(l)) {
          const u = U(l);
          e -= u.top + R(m(l, "borderTopWidth")), i -= u.left + R(m(l, "borderLeftWidth"));
        }
        return { top: e - R(m(t, "marginTop")), left: i - R(m(t, "marginLeft")) };
      }
      function _i(t) {
        t = at(t);
        const e = [t.offsetTop, t.offsetLeft];
        for (;t = t.offsetParent; )
          if (e[0] += t.offsetTop + R(m(t, "borderTopWidth")), e[1] += t.offsetLeft + R(m(t, "borderLeftWidth")), m(t, "position") === "fixed") {
            const i = ge(t);
            return e[0] += i.scrollY, e[1] += i.scrollX, e;
          }
        return e;
      }
      const bt = Bo("height"), rs = Bo("width");
      function Bo(t) {
        const e = k(t);
        return (i, s) => {
          if (pt(s)) {
            if (Ki(i))
              return i[`inner${e}`];
            if (di(i)) {
              const o = i.documentElement;
              return Math.max(o[`offset${e}`], o[`scroll${e}`]);
            }
            return i = at(i), s = m(i, t), s = s === "auto" ? i[`offset${e}`] : R(s) || 0, s - ln(i, t);
          } else
            return m(i, t, !s && s !== 0 ? "" : +s + ln(i, t) + "px");
        };
      }
      function ln(t, e, i = "border-box") {
        return m(t, "boxSizing") === i ? ve(ke[e], (s) => R(m(t, `padding-${s}`)) + R(m(t, `border-${s}-width`))) : 0;
      }
      function as(t) {
        for (const e in ke)
          for (const i in ke[e])
            if (ke[e][i] === t)
              return ke[e][1 - i];
        return t;
      }
      function ft(t, e = "width", i = window, s = false) {
        return nt(t) ? ve(sc(t), (o) => {
          const r = oc(o);
          return r ? rc(r === "vh" ? ac() : r === "vw" ? rs(ge(i)) : s ? i[`offset${k(e)}`] : T(i)[e], o) : o;
        }) : R(t);
      }
      const ic = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, sc = Et((t) => t.toString().replace(/\s/g, "").match(ic) || []), nc = /(?:v[hw]|%)$/, oc = Et((t) => (t.match(nc) || [])[0]);
      function rc(t, e) {
        return t * R(e) / 100;
      }
      let Ai, Ye;
      function ac() {
        return Ai || (Ye || (Ye = H("<div>"), m(Ye, { height: "100vh", position: "fixed" }), z(window, "resize", () => Ai = null)), ot(document.body, Ye), Ai = Ye.clientHeight, $t(Ye), Ai);
      }
      const ne = { read: lc, write: cc, clear: hc, flush: Ro }, ls = [], cs = [];
      function lc(t) {
        return ls.push(t), hn(), t;
      }
      function cc(t) {
        return cs.push(t), hn(), t;
      }
      function hc(t) {
        zo(ls, t), zo(cs, t);
      }
      let cn = false;
      function Ro() {
        jo(ls), jo(cs.splice(0)), cn = false, (ls.length || cs.length) && hn();
      }
      function hn() {
        cn || (cn = true, queueMicrotask(Ro));
      }
      function jo(t) {
        let e;
        for (;e = t.shift(); )
          try {
            e();
          } catch (i) {
            console.error(i);
          }
      }
      function zo(t, e) {
        const i = t.indexOf(e);
        return ~i && t.splice(i, 1);
      }

      class Fo {
        init() {
          this.positions = [];
          let e;
          this.unbind = z(document, "mousemove", (i) => e = Ut(i)), this.interval = setInterval(() => {
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
          const i = T(e), { left: s, right: o, top: r, bottom: l } = i, [u] = this.positions, f = me(this.positions), v = [u, f];
          return Gi(f, i) ? false : [[{ x: s, y: r }, { x: o, y: l }], [{ x: s, y: l }, { x: o, y: r }]].some((b) => {
            const x = uc(v, b);
            return x && Gi(x, i);
          });
        }
      }
      function uc([{ x: t, y: e }, { x: i, y: s }], [{ x: o, y: r }, { x: l, y: u }]) {
        const f = (u - r) * (i - t) - (l - o) * (s - e);
        if (f === 0)
          return false;
        const v = ((l - o) * (e - r) - (u - r) * (t - o)) / f;
        return v < 0 ? false : { x: t + v * (i - t), y: e + v * (s - e) };
      }
      function Uo(t, e, i = {}, { intersecting: s = true } = {}) {
        const o = new IntersectionObserver(s ? (r, l) => {
          r.some((u) => u.isIntersecting) && e(r, l);
        } : e, i);
        for (const r of F(t))
          o.observe(r);
        return o;
      }
      const dc = be && window.ResizeObserver;
      function hs(t, e, i = { box: "border-box" }) {
        if (dc)
          return qo(ResizeObserver, t, e, i);
        const s = [z(window, "load resize", e), z(document, "loadedmetadata load", e, true)];
        return { disconnect: () => s.map((o) => o()) };
      }
      function un(t) {
        return { disconnect: z([window, window.visualViewport], "resize", t) };
      }
      function dn(t, e, i) {
        return qo(MutationObserver, t, e, i);
      }
      function qo(t, e, i, s) {
        const o = new t(i);
        for (const r of F(e))
          o.observe(r, s);
        return o;
      }
      function fn(t) {
        gn(t) && mn(t, { func: "playVideo", method: "play" }), pn(t) && t.play().catch(ct);
      }
      function us(t) {
        gn(t) && mn(t, { func: "pauseVideo", method: "pause" }), pn(t) && t.pause();
      }
      function Wo(t) {
        gn(t) && mn(t, { func: "mute", method: "setVolume", value: 0 }), pn(t) && (t.muted = true);
      }
      function pn(t) {
        return et(t, "video");
      }
      function gn(t) {
        return et(t, "iframe") && (Vo(t) || Yo(t));
      }
      function Vo(t) {
        return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
      }
      function Yo(t) {
        return !!t.src.match(/vimeo\.com\/video\/.*/);
      }
      async function mn(t, e) {
        await pc(t), Ko(t, e);
      }
      function Ko(t, e) {
        t.contentWindow.postMessage(JSON.stringify({ event: "command", ...e }), "*");
      }
      const vn = "_ukPlayer";
      let fc = 0;
      function pc(t) {
        if (t[vn])
          return t[vn];
        const e = Vo(t), i = Yo(t), s = ++fc;
        let o;
        return t[vn] = new Promise((r) => {
          e && st(t, "load", () => {
            const l = () => Ko(t, { event: "listening", id: s });
            o = setInterval(l, 100), l();
          }), st(window, "message", r, false, ({ data: l }) => {
            try {
              return l = JSON.parse(l), e && (l == null ? undefined : l.id) === s && l.event === "onReady" || i && Number(l == null ? undefined : l.player_id) === s;
            } catch {
            }
          }), t.src = `${t.src}${w(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${s}`}`;
        }).then(() => clearInterval(o));
      }
      function gc(t, e = 0, i = 0) {
        return ut(t) ? Ws(...Se(t).map((s) => {
          const { top: o, left: r, bottom: l, right: u } = Tt(s);
          return { top: o - e, left: r - i, bottom: l + e, right: u + i };
        }).concat(U(t))) : false;
      }
      function Jo(t, { offset: e = 0 } = {}) {
        const i = ut(t) ? Ke(t, false, ["hidden"]) : [];
        return i.reduce((l, u, f) => {
          const { scrollTop: v, scrollHeight: $, offsetHeight: b } = u, x = Tt(u), I = $ - x.height, { height: O, top: B } = i[f - 1] ? Tt(i[f - 1]) : U(t);
          let q = Math.ceil(B - x.top - e + v);
          return e > 0 && b < O + e ? q += e : e = 0, q > I ? (e -= q - I, q = I) : q < 0 && (e -= q, q = 0), () => s(u, q - v, t, I).then(l);
        }, () => Promise.resolve())();
        function s(l, u, f, v) {
          return new Promise(($) => {
            const b = l.scrollTop, x = o(Math.abs(u)), I = Date.now(), O = wn(l) === l, B = U(f).top + (O ? 0 : b);
            let q = 0, _t = 15;
            (function Kt() {
              const re = r(mt((Date.now() - I) / x));
              let Lt = 0;
              i[0] === l && b + u < v && (Lt = U(f).top + (O ? 0 : l.scrollTop) - B - T($n(f)).height), m(l, "scrollBehavior") !== "auto" && m(l, "scrollBehavior", "auto"), l.scrollTop = b + (u + Lt) * re, m(l, "scrollBehavior", ""), re === 1 && (q === Lt || !_t--) ? $() : (q = Lt, requestAnimationFrame(Kt));
            })();
          });
        }
        function o(l) {
          return 40 * Math.pow(l, 0.375);
        }
        function r(l) {
          return 0.5 * (1 - Math.cos(Math.PI * l));
        }
      }
      function ds(t, e = 0, i = 0) {
        if (!ut(t))
          return 0;
        const s = xe(t, true), { scrollHeight: o, scrollTop: r } = s, { height: l } = Tt(s), u = o - l, f = _i(t)[0] - _i(s)[0], v = Math.max(0, f - l + e), $ = Math.min(u, f + t.offsetHeight - i);
        return v < $ ? mt((r - v) / ($ - v)) : 1;
      }
      function Ke(t, e = false, i = []) {
        const s = wn(t);
        let o = qe(t).reverse();
        o = o.slice(o.indexOf(s) + 1);
        const r = E(o, (l) => m(l, "position") === "fixed");
        return ~r && (o = o.slice(r)), [s].concat(o.filter((l) => m(l, "overflow").split(" ").some((u) => w(["auto", "scroll", ...i], u)) && (!e || l.scrollHeight > Tt(l).height))).reverse();
      }
      function xe(...t) {
        return Ke(...t)[0];
      }
      function Se(t) {
        return Ke(t, false, ["hidden", "clip"]);
      }
      function Tt(t) {
        const e = ge(t), i = wn(t), s = !fi(t) || t.contains(i);
        if (s && e.visualViewport) {
          let { height: f, width: v, scale: $, pageTop: b, pageLeft: x } = e.visualViewport;
          return f = Math.round(f * $), v = Math.round(v * $), { height: f, width: v, top: b, left: x, bottom: b + f, right: x + v };
        }
        let o = U(s ? e : t);
        if (m(t, "display") === "inline")
          return o;
        const { body: r, documentElement: l } = e.document, u = s ? i === l || i.clientHeight < r.clientHeight ? i : r : t;
        for (let [f, v, $, b] of [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]]) {
          const x = o[f] % 1;
          o[$] += R(m(u, `border-${$}-width`)), o[f] = o[v] = u[`client${k(f)}`] - (x ? x < 0.5 ? -x : 1 - x : 0), o[b] = o[f] + o[$];
        }
        return o;
      }
      function $n(t) {
        const { left: e, width: i, top: s } = T(t);
        for (const o of s ? [0, s] : [0]) {
          let r;
          for (const l of ge(t).document.elementsFromPoint(e + i / 2, o))
            !l.contains(t) && !L(l, "uk-togglable-leave") && (bn(l, "fixed") && Go(qe(t).reverse().find((u) => !u.contains(l) && !bn(u, "static"))) < Go(l) || bn(l, "sticky") && J(l).contains(t)) && (!r || T(r).height < T(l).height) && (r = l);
          if (r)
            return r;
        }
      }
      function Go(t) {
        return R(m(t, "zIndex"));
      }
      function bn(t, e) {
        return m(t, "position") === e;
      }
      function wn(t) {
        return ge(t).document.scrollingElement;
      }
      const kt = [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]];
      function Xo(t, e, i) {
        i = { attach: { element: ["left", "top"], target: ["left", "top"], ...i.attach }, offset: [0, 0], placement: [], ...i }, P(e) || (e = [e, e]), U(t, Zo(t, e, i));
      }
      function Zo(t, e, i) {
        const s = Qo(t, e, i), { boundary: o, viewportOffset: r = 0, placement: l } = i;
        let u = s;
        for (const [f, [v, , $, b]] of Object.entries(kt)) {
          const x = mc(t, e[f], r, o, f);
          if (fs(s, x, f))
            continue;
          let I = 0;
          if (l[f] === "flip") {
            const O = i.attach.target[f];
            if (O === b && s[b] <= x[b] || O === $ && s[$] >= x[$])
              continue;
            I = $c(t, e, i, f)[$] - s[$];
            const B = vc(t, e[f], r, f);
            if (!fs(yn(s, I, f), B, f)) {
              if (fs(s, B, f))
                continue;
              if (i.recursion)
                return false;
              const q = bc(t, e, i);
              if (q && fs(q, B, 1 - f))
                return q;
              continue;
            }
          } else if (l[f] === "shift") {
            const O = U(e[f]), { offset: B } = i;
            I = mt(mt(s[$], x[$], x[b] - s[v]), O[$] - s[v] + B[f], O[b] - B[f]) - s[$];
          }
          u = yn(u, I, f);
        }
        return u;
      }
      function Qo(t, e, i) {
        let { attach: s, offset: o } = { attach: { element: ["left", "top"], target: ["left", "top"], ...i.attach }, offset: [0, 0], ...i }, r = U(t);
        for (const [l, [u, , f, v]] of Object.entries(kt)) {
          const $ = s.target[l] === s.element[l] ? Tt(e[l]) : U(e[l]);
          r = yn(r, $[f] - r[f] + tr(s.target[l], v, $[u]) - tr(s.element[l], v, r[u]) + +o[l], l);
        }
        return r;
      }
      function yn(t, e, i) {
        const [, s, o, r] = kt[i], l = { ...t };
        return l[o] = t[s] = t[o] + e, l[r] += e, l;
      }
      function tr(t, e, i) {
        return t === "center" ? i / 2 : t === e ? i : 0;
      }
      function mc(t, e, i, s, o) {
        let r = ir(...er(t, e).map(Tt));
        return i && (r[kt[o][2]] += i, r[kt[o][3]] -= i), s && (r = ir(r, U(P(s) ? s[o] : s))), r;
      }
      function vc(t, e, i, s) {
        const [o, r, l, u] = kt[s], [f] = er(t, e), v = Tt(f);
        return ["auto", "scroll"].includes(m(f, `overflow-${r}`)) && (v[l] -= f[`scroll${k(l)}`], v[u] = v[l] + f[`scroll${k(o)}`]), v[l] += i, v[u] -= i, v;
      }
      function er(t, e) {
        return Se(e).filter((i) => i.contains(t));
      }
      function ir(...t) {
        let e = {};
        for (const i of t)
          for (const [, , s, o] of kt)
            e[s] = Math.max(e[s] || 0, i[s]), e[o] = Math.min(...[e[o], i[o]].filter(Boolean));
        return e;
      }
      function fs(t, e, i) {
        const [, , s, o] = kt[i];
        return t[s] >= e[s] && t[o] <= e[o];
      }
      function $c(t, e, { offset: i, attach: s }, o) {
        return Qo(t, e, { attach: { element: sr(s.element, o), target: sr(s.target, o) }, offset: wc(i, o) });
      }
      function bc(t, e, i) {
        return Zo(t, e, { ...i, attach: { element: i.attach.element.map(nr).reverse(), target: i.attach.target.map(nr).reverse() }, offset: i.offset.reverse(), placement: i.placement.reverse(), recursion: true });
      }
      function sr(t, e) {
        const i = [...t], s = kt[e].indexOf(t[e]);
        return ~s && (i[e] = kt[e][1 - s % 2 + 2]), i;
      }
      function nr(t) {
        for (let e = 0;e < kt.length; e++) {
          const i = kt[e].indexOf(t);
          if (~i)
            return kt[1 - e][i % 2 + 2];
        }
      }
      function wc(t, e) {
        return t = [...t], t[e] *= -1, t;
      }
      var yc = Object.freeze({ __proto__: null, $: H, $$: Q, Animation: ie, Dimensions: Ys, MouseTracker: Fo, Transition: X, addClass: j, after: ns, append: ot, apply: se, assign: V, attr: A, before: ss, boxModelAdjust: ln, camelize: p, children: G, clamp: mt, createEvent: Ve, css: m, data: vt, dimensions: T, each: je, empty: Ho, endsWith: _, escape: Qs, fastdom: ne, filter: bi, find: Xs, findAll: yi, findIndex: E, flipPosition: as, fragment: Wt, getCoveringElement: $n, getEventPos: Ut, getIndex: yt, getTargetedElement: Gs, hasAttr: te, hasClass: L, hasOwn: a, hasTouch: ze, height: bt, html: qt, hyphenate: c, inBrowser: be, includes: w, index: Ft, intersectRect: Ws, isArray: P, isBoolean: Re, isDocument: di, isElement: Be, isEmpty: Ji, isEqual: gi, isFocusable: ts, isFunction: tt, isInView: gc, isInput: Qi, isNode: fi, isNumber: pi, isNumeric: jt, isObject: At, isPlainObject: Qt, isRtl: ht, isSameSiteAnchor: We, isString: nt, isTag: et, isTouch: Mt, isUndefined: pt, isVisible: ut, isVoidElement: Js, isWindow: Ki, last: me, matches: Y, memoize: Et, mute: Wo, noop: ct, observeIntersection: Uo, observeMutation: dn, observeResize: hs, observeViewportResize: un, off: ye, offset: U, offsetPosition: _i, offsetViewport: Tt, on: z, once: st, overflowParents: Se, parent: J, parents: qe, pause: us, pick: qs, play: fn, pointInRect: Gi, pointerCancel: Zi, pointerDown: It, pointerEnter: we, pointerLeave: Ue, pointerMove: Xi, pointerUp: ee, position: an, positionAt: Xo, prepend: tc, propName: es, query: Ct, queryAll: wi, ready: Ql, remove: $t, removeAttr: mi, removeClass: Z, replaceClass: Ks, scrollIntoView: Jo, scrollParent: xe, scrollParents: Ke, scrolledOver: ds, selFocusable: $i, selInput: vi, sortBy: _o, startsWith: y, sumBy: ve, swap: Us, toArray: M, toBoolean: Fs, toEventTargets: en, toFloat: R, toNode: at, toNodes: F, toNumber: zt, toPx: ft, toWindow: ge, toggleClass: it, trigger: C, ucfirst: k, uniqueBy: Ao, unwrap: Si, width: rs, wrapAll: xi, wrapInner: rn });
      const dt = {};
      dt.events = dt.watch = dt.observe = dt.created = dt.beforeConnect = dt.connected = dt.beforeDisconnect = dt.disconnected = dt.destroy = kn, dt.args = function(t, e) {
        return e !== false && kn(e || t);
      }, dt.update = function(t, e) {
        return _o(kn(t, tt(e) ? { read: e } : e), "order");
      }, dt.props = function(t, e) {
        if (P(e)) {
          const i = {};
          for (const s of e)
            i[s] = String;
          e = i;
        }
        return dt.methods(t, e);
      }, dt.computed = dt.methods = function(t, e) {
        return e ? t ? { ...t, ...e } : e : t;
      }, dt.i18n = dt.data = function(t, e, i) {
        return i ? or(t, e, i) : e ? t ? function(s) {
          return or(t, e, s);
        } : e : t;
      };
      function or(t, e, i) {
        return dt.computed(tt(t) ? t.call(i, i) : t, tt(e) ? e.call(i, i) : e);
      }
      function kn(t, e) {
        return t = t && !P(t) ? [t] : t, e ? t ? t.concat(e) : P(e) ? e : [e] : t;
      }
      function kc(t, e) {
        return pt(e) ? t : e;
      }
      function Ei(t, e, i) {
        const s = {};
        if (tt(e) && (e = e.options), e.extends && (t = Ei(t, e.extends, i)), e.mixins)
          for (const r of e.mixins)
            t = Ei(t, r, i);
        for (const r in t)
          o(r);
        for (const r in e)
          a(t, r) || o(r);
        function o(r) {
          s[r] = (dt[r] || kc)(t[r], e[r], i);
        }
        return s;
      }
      function Je(t, e = []) {
        try {
          return t ? y(t, "{") ? JSON.parse(t) : e.length && !w(t, ":") ? { [e[0]]: t } : t.split(";").reduce((i, s) => {
            const [o, r] = s.split(/:(.*)/);
            return o && !pt(r) && (i[o.trim()] = r.trim()), i;
          }, {}) : {};
        } catch {
          return {};
        }
      }
      function xn(t, e) {
        return t === Boolean ? Fs(e) : t === Number ? zt(e) : t === "list" ? Sc(e) : t === Object && nt(e) ? Je(e) : t ? t(e) : e;
      }
      const xc = /,(?![^(]*\))/;
      function Sc(t) {
        return P(t) ? t : nt(t) ? t.split(xc).map((e) => jt(e) ? zt(e) : Fs(e.trim())) : [t];
      }
      function _c(t) {
        t._data = {}, t._updates = [...t.$options.update || []], t._disconnect.push(() => t._updates = t._data = null);
      }
      function Ac(t, e) {
        t._updates.unshift(e);
      }
      function Ii(t, e = "update") {
        t._connected && t._updates.length && (t._queued || (t._queued = new Set, ne.read(() => {
          t._connected && Ec(t, t._queued), t._queued = null;
        })), t._queued.add(e.type || e));
      }
      function Ec(t, e) {
        for (const { read: i, write: s, events: o = [] } of t._updates) {
          if (!e.has("update") && !o.some((l) => e.has(l)))
            continue;
          let r;
          i && (r = i.call(t, t._data, e), r && Qt(r) && V(t._data, r)), s && r !== false && ne.write(() => {
            t._connected && s.call(t, t._data, e);
          });
        }
      }
      function Vt(t) {
        return Pi(hs, t, "resize");
      }
      function Ci(t) {
        return Pi(Uo, t);
      }
      function Sn(t) {
        return Pi(dn, t);
      }
      function ps(t = {}) {
        return Ci({ handler: function(e, i) {
          const { targets: s = this.$el, preload: o = 5 } = t;
          for (const r of F(tt(s) ? s(this) : s))
            Q('[loading="lazy"]', r).slice(0, o - 1).forEach((l) => mi(l, "loading"));
          for (const r of e.filter(({ isIntersecting: l }) => l).map(({ target: l }) => l))
            i.unobserve(r);
        }, ...t });
      }
      function rr(t) {
        return Pi((e, i) => un(i), t, "resize");
      }
      function Ti(t) {
        return Pi((e, i) => ({ disconnect: z(Cc(e), "scroll", i, { passive: true }) }), t, "scroll");
      }
      function ar(t) {
        return { observe(e, i) {
          return { observe: ct, unobserve: ct, disconnect: z(e, It, i, { passive: true }) };
        }, handler(e) {
          if (!Mt(e))
            return;
          const i = Ut(e), s = "tagName" in e.target ? e.target : J(e.target);
          st(document, `${ee} ${Zi} scroll`, (o) => {
            const { x: r, y: l } = Ut(o);
            (o.type !== "scroll" && s && r && Math.abs(i.x - r) > 100 || l && Math.abs(i.y - l) > 100) && setTimeout(() => {
              C(s, "swipe"), C(s, `swipe${Ic(i.x, i.y, r, l)}`);
            });
          });
        }, ...t };
      }
      function Pi(t, e, i) {
        return { observe: t, handler() {
          Ii(this, i);
        }, ...e };
      }
      function Ic(t, e, i, s) {
        return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down";
      }
      function Cc(t) {
        return F(t).map((e) => {
          const { ownerDocument: i } = e, s = xe(e, true);
          return s === i.scrollingElement ? i : s;
        });
      }
      var Tc = { props: { margin: String, firstColumn: Boolean }, data: { margin: "uk-margin-small-top", firstColumn: "uk-first-column" }, observe: [Sn({ options: { childList: true } }), Sn({ options: { attributes: true, attributeFilter: ["style"] }, target: ({ $el: t }) => [t, ...G(t)] }), Vt({ target: ({ $el: t }) => [t, ...G(t)] })], update: { read() {
        return { rows: lr(G(this.$el)) };
      }, write({ rows: t }) {
        for (const e of t)
          for (const i of e)
            it(i, this.margin, t[0] !== e), it(i, this.firstColumn, e[ht ? e.length - 1 : 0] === i);
      }, events: ["resize"] } };
      function lr(t) {
        const e = [[]], i = t.some((s, o) => o && t[o - 1].offsetParent !== s.offsetParent);
        for (const s of t) {
          if (!ut(s))
            continue;
          const o = _n(s, i);
          for (let r = e.length - 1;r >= 0; r--) {
            const l = e[r];
            if (!l[0]) {
              l.push(s);
              break;
            }
            const u = _n(l[0], i);
            if (o.top >= u.bottom - 1 && o.top !== u.top) {
              e.push([s]);
              break;
            }
            if (o.bottom - 1 > u.top || o.top === u.top) {
              let f = l.length - 1;
              for (;f >= 0; f--) {
                const v = _n(l[f], i);
                if (o.left >= v.left)
                  break;
              }
              l.splice(f + 1, 0, s);
              break;
            }
            if (r === 0) {
              e.unshift([s]);
              break;
            }
          }
        }
        return e;
      }
      function _n(t, e = false) {
        let { offsetTop: i, offsetLeft: s, offsetHeight: o, offsetWidth: r } = t;
        return e && ([i, s] = _i(t)), { top: i, left: s, bottom: i + o, right: s + r };
      }
      async function Pc(t, e, i) {
        await An();
        let s = G(e);
        const o = s.map((I) => cr(I, true)), r = { ...m(e, ["height", "padding"]), display: "block" }, l = s.concat(e);
        await Promise.all(l.map(X.cancel)), m(l, "transitionProperty", "none"), await t(), s = s.concat(G(e).filter((I) => !w(s, I))), await Promise.resolve(), m(l, "transitionProperty", "");
        const u = A(e, "style"), f = m(e, ["height", "padding"]), [v, $] = Oc(e, s, o), b = s.map((I) => ({ style: A(I, "style") }));
        s.forEach((I, O) => $[O] && m(I, $[O])), m(e, r), C(e, "scroll"), await An();
        const x = s.map((I, O) => J(I) === e && X.start(I, v[O], i, "ease")).concat(X.start(e, f, i, "ease"));
        try {
          await Promise.all(x), s.forEach((I, O) => {
            A(I, b[O]), J(I) === e && m(I, "display", v[O].opacity === 0 ? "none" : "");
          }), A(e, "style", u);
        } catch {
          A(s, "style", ""), Dc(e, r);
        }
      }
      function cr(t, e) {
        const i = m(t, "zIndex");
        return ut(t) ? { display: "", opacity: e ? m(t, "opacity") : "0", pointerEvents: "none", position: "absolute", zIndex: i === "auto" ? Ft(t) : i, ...hr(t) } : false;
      }
      function Oc(t, e, i) {
        const s = e.map((r, l) => J(r) && (l in i) ? i[l] ? ut(r) ? hr(r) : { opacity: 0 } : { opacity: ut(r) ? 1 : 0 } : false), o = s.map((r, l) => {
          const u = J(e[l]) === t && (i[l] || cr(e[l]));
          if (!u)
            return false;
          if (!r)
            delete u.opacity;
          else if (!("opacity" in r)) {
            const { opacity: f } = u;
            f % 1 ? r.opacity = 1 : delete u.opacity;
          }
          return u;
        });
        return [s, o];
      }
      function Dc(t, e) {
        for (const i in e)
          m(t, i, "");
      }
      function hr(t) {
        const { height: e, width: i } = T(t);
        return { height: e, width: i, transform: "", ...an(t), ...m(t, ["marginTop", "marginLeft"]) };
      }
      function An() {
        return new Promise((t) => requestAnimationFrame(t));
      }
      const En = "uk-transition-leave", In = "uk-transition-enter";
      function ur(t, e, i, s = 0) {
        const o = gs(e, true), r = { opacity: 1 }, l = { opacity: 0 }, u = ($) => () => o === gs(e) ? $() : Promise.reject(), f = u(async () => {
          j(e, En), await Promise.all(fr(e).map(($, b) => new Promise((x) => setTimeout(() => X.start($, l, i / 2, "ease").then(x), b * s)))), Z(e, En);
        }), v = u(async () => {
          const $ = bt(e);
          j(e, In), t(), m(G(e), { opacity: 0 }), await An();
          const b = G(e), x = bt(e);
          m(e, "alignContent", "flex-start"), bt(e, $);
          const I = fr(e);
          m(b, l);
          const O = I.map(async (B, q) => {
            await Mc(q * s), await X.start(B, r, i / 2, "ease");
          });
          $ !== x && O.push(X.start(e, { height: x }, i / 2 + I.length * s, "ease")), await Promise.all(O).then(() => {
            Z(e, In), o === gs(e) && (m(e, { height: "", alignContent: "" }), m(b, { opacity: "" }), delete e.dataset.transition);
          });
        });
        return L(e, En) ? dr(e).then(v) : L(e, In) ? dr(e).then(f).then(v) : f().then(v);
      }
      function gs(t, e) {
        return e && (t.dataset.transition = 1 + gs(t)), zt(t.dataset.transition) || 0;
      }
      function dr(t) {
        return Promise.all(G(t).filter(X.inProgress).map((e) => new Promise((i) => st(e, "transitionend transitioncanceled", i))));
      }
      function fr(t) {
        return lr(G(t)).flat().filter(ut);
      }
      function Mc(t) {
        return new Promise((e) => setTimeout(e, t));
      }
      var pr = { props: { duration: Number, animation: Boolean }, data: { duration: 150, animation: "slide" }, methods: { animate(t, e = this.$el) {
        const i = this.animation;
        return (i === "fade" ? ur : i === "delayed-fade" ? (...o) => ur(...o, 40) : i ? Pc : () => (t(), Promise.resolve()))(t, e, this.duration).catch(ct);
      } } };
      const K = { TAB: 9, ESC: 27, SPACE: 32, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };
      var Hc = { mixins: [pr], args: "target", props: { target: String, selActive: Boolean }, data: { target: "", selActive: false, attrItem: "uk-filter-control", cls: "uk-active", duration: 250 }, computed: { children: ({ target: t }, e) => Q(`${t} > *`, e), toggles: ({ attrItem: t }, e) => Q(`[${t}],[data-${t}]`, e) }, watch: { toggles(t) {
        this.updateState();
        const e = Q(this.selActive, this.$el);
        for (const i of t) {
          this.selActive !== false && it(i, this.cls, w(e, i));
          const s = jc(i);
          et(s, "a") && A(s, "role", "button");
        }
      }, children(t, e) {
        e && this.updateState();
      } }, events: { name: "click keydown", delegate: ({ attrItem: t }) => `[${t}],[data-${t}]`, handler(t) {
        t.type === "keydown" && t.keyCode !== K.SPACE || t.target.closest("a,button") && (t.preventDefault(), this.apply(t.current));
      } }, methods: { apply(t) {
        const e = this.getState(), i = mr(t, this.attrItem, this.getState());
        Nc(e, i) || this.setState(i);
      }, getState() {
        return this.toggles.filter((t) => L(t, this.cls)).reduce((t, e) => mr(e, this.attrItem, t), { filter: { "": "" }, sort: [] });
      }, async setState(t, e = true) {
        t = { filter: { "": "" }, sort: [], ...t }, C(this.$el, "beforeFilter", [this, t]);
        for (const i of this.toggles)
          it(i, this.cls, Bc(i, this.attrItem, t));
        await Promise.all(Q(this.target, this.$el).map((i) => {
          const s = () => Lc(t, i, G(i));
          return e ? this.animate(s, i) : s();
        })), C(this.$el, "afterFilter", [this]);
      }, updateState() {
        ne.write(() => this.setState(this.getState(), false));
      } } };
      function gr(t, e) {
        return Je(vt(t, e), ["filter"]);
      }
      function Nc(t, e) {
        return ["filter", "sort"].every((i) => gi(t[i], e[i]));
      }
      function Lc(t, e, i) {
        for (const r of i)
          m(r, "display", Object.values(t.filter).every((l) => !l || Y(r, l)) ? "" : "none");
        const [s, o] = t.sort;
        if (s) {
          const r = Rc(i, s, o);
          gi(r, i) || ot(e, r);
        }
      }
      function mr(t, e, i) {
        const { filter: s, group: o, sort: r, order: l = "asc" } = gr(t, e);
        return (s || pt(r)) && (o ? s ? (delete i.filter[""], i.filter[o] = s) : (delete i.filter[o], (Ji(i.filter) || ("" in i.filter)) && (i.filter = { "": s || "" })) : i.filter = { "": s || "" }), pt(r) || (i.sort = [r, l]), i;
      }
      function Bc(t, e, { filter: i = { "": "" }, sort: [s, o] }) {
        const { filter: r = "", group: l = "", sort: u, order: f = "asc" } = gr(t, e);
        return pt(u) ? l in i && r === i[l] || !r && l && !(l in i) && !i[""] : s === u && o === f;
      }
      function Rc(t, e, i) {
        return [...t].sort((s, o) => vt(s, e).localeCompare(vt(o, e), undefined, { numeric: true }) * (i === "asc" || -1));
      }
      function jc(t) {
        return H("a,button", t) || t;
      }
      var zc = { args: "dataSrc", props: { dataSrc: String, sources: String, margin: String, target: String, loading: String }, data: { dataSrc: "", sources: false, margin: "50%", target: false, loading: "lazy" }, connected() {
        this.loading !== "lazy" ? this.load() : Tn(this.$el) && (this.$el.loading = "lazy", Cn(this.$el));
      }, disconnected() {
        this.img && (this.img.onload = ""), delete this.img;
      }, observe: Ci({ handler(t, e) {
        this.load(), e.disconnect();
      }, options: ({ margin: t }) => ({ rootMargin: t }), filter: ({ loading: t }) => t === "lazy", target: ({ $el: t, $props: e }) => e.target ? [t, ...wi(e.target, t)] : t }), methods: { load() {
        if (this.img)
          return this.img;
        const t = Tn(this.$el) ? this.$el : Uc(this.$el, this.dataSrc, this.sources);
        return mi(t, "loading"), Cn(this.$el, t.currentSrc), this.img = t;
      } } };
      function Cn(t, e) {
        if (Tn(t)) {
          const i = J(t);
          (et(i, "picture") ? G(i) : [t]).forEach((o) => vr(o, o));
        } else
          e && !w(t.style.backgroundImage, e) && (m(t, "backgroundImage", `url(${Qs(e)})`), C(t, Ve("load", false)));
      }
      const Fc = ["data-src", "data-srcset", "sizes"];
      function vr(t, e) {
        for (const i of Fc) {
          const s = vt(t, i);
          s && A(e, i.replace(/data-/g, ""), s);
        }
      }
      function Uc(t, e, i) {
        const s = new Image;
        return $r(s, i), vr(t, s), s.onload = () => Cn(t, s.currentSrc), A(s, "src", e), s;
      }
      function $r(t, e) {
        if (e = qc(e), e.length) {
          const i = Wt("<picture>");
          for (const s of e) {
            const o = Wt("<source>");
            A(o, s), ot(i, o);
          }
          ot(i, t);
        }
      }
      function qc(t) {
        if (!t)
          return [];
        if (y(t, "["))
          try {
            t = JSON.parse(t);
          } catch {
            t = [];
          }
        else
          t = Je(t);
        return P(t) || (t = [t]), t.filter((e) => !Ji(e));
      }
      function Tn(t) {
        return et(t, "img");
      }
      let Pn;
      function br(t) {
        const e = z(t, "touchstart", (s) => {
          if (s.targetTouches.length !== 1 || Y(s.target, 'input[type="range"'))
            return;
          let o = Ut(s).y;
          const r = z(t, "touchmove", (l) => {
            const u = Ut(l).y;
            u !== o && (o = u, Ke(l.target).some((f) => {
              if (!t.contains(f))
                return false;
              let { scrollHeight: v, clientHeight: $ } = f;
              return $ < v;
            }) || l.preventDefault());
          }, { passive: false });
          st(t, "scroll touchend touchcanel", r, { capture: true });
        }, { passive: true });
        if (Pn)
          return e;
        Pn = true;
        const { scrollingElement: i } = document;
        return m(i, { overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden", touchAction: "none", paddingRight: rs(window) - i.clientWidth || "" }), () => {
          Pn = false, e(), m(i, { overflowY: "", touchAction: "", paddingRight: "" });
        };
      }
      var xt = { connected() {
        j(this.$el, this.$options.id);
      } }, Oi = { props: { container: Boolean }, data: { container: true }, computed: { container({ container: t }) {
        return t === true && this.$container || t && H(t);
      } } }, wr = { props: { pos: String, offset: Boolean, flip: Boolean, shift: Boolean, inset: Boolean }, data: { pos: `bottom-${ht ? "right" : "left"}`, offset: false, flip: true, shift: true, inset: false }, connected() {
        this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = w(["top", "bottom"], this.dir) ? "y" : "x";
      }, methods: { positionAt(t, e, i) {
        let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
        const o = [this.flip && "flip", this.shift && "shift"], r = { element: [this.inset ? this.dir : as(this.dir), this.align], target: [this.dir, this.align] };
        if (this.axis === "y") {
          for (const f in r)
            r[f].reverse();
          s.reverse(), o.reverse();
        }
        const l = On(t), u = T(t);
        m(t, { top: -u.height, left: -u.width }), Xo(t, e, { attach: r, offset: s, boundary: i, placement: o, viewportOffset: this.getViewportOffset(t) }), l();
      }, getPositionOffset(t = this.$el) {
        return ft(this.offset === false ? m(t, "--uk-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (w(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
      }, getShiftOffset(t = this.$el) {
        return this.align === "center" ? 0 : ft(m(t, "--uk-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (w(["left", "top"], this.align) ? 1 : -1);
      }, getViewportOffset(t) {
        return ft(m(t, "--uk-position-viewport-offset"));
      } } };
      function On(t) {
        const e = xe(t), { scrollTop: i } = e;
        return () => {
          i !== e.scrollTop && (e.scrollTop = i);
        };
      }
      var _e = { props: { cls: Boolean, animation: "list", duration: Number, velocity: Number, origin: String, transition: String }, data: { cls: false, animation: [false], duration: 200, velocity: 0.2, origin: false, transition: "ease", clsEnter: "uk-togglable-enter", clsLeave: "uk-togglable-leave" }, computed: { hasAnimation: ({ animation: t }) => !!t[0], hasTransition: ({ animation: t }) => ["slide", "reveal"].some((e) => y(t[0], e)) }, methods: { async toggleElement(t, e, i) {
        try {
          return await Promise.all(F(t).map((s) => {
            const o = Re(e) ? e : !this.isToggled(s);
            if (!C(s, `before${o ? "show" : "hide"}`, [this]))
              return Promise.reject();
            const r = (tt(i) ? i : i === false || !this.hasAnimation ? Wc : this.hasTransition ? Vc : Yc)(s, o, this), l = o ? this.clsEnter : this.clsLeave;
            j(s, l), C(s, o ? "show" : "hide", [this]);
            const u = () => {
              var f;
              if (Z(s, l), C(s, o ? "shown" : "hidden", [this]), o) {
                const v = On(s);
                (f = Q("[autofocus]", s).find(ut)) == null || f.focus(), v();
              }
            };
            return r ? r.then(u, () => (Z(s, l), Promise.reject())) : u();
          })), true;
        } catch {
          return false;
        }
      }, isToggled(t = this.$el) {
        return t = at(t), L(t, this.clsEnter) ? true : L(t, this.clsLeave) ? false : this.cls ? L(t, this.cls.split(" ")[0]) : ut(t);
      }, _toggle(t, e) {
        if (!t)
          return;
        e = !!e;
        let i;
        this.cls ? (i = w(this.cls, " ") || e !== L(t, this.cls), i && it(t, this.cls, w(this.cls, " ") ? undefined : e)) : (i = e === t.hidden, i && (t.hidden = !e)), i && C(t, "toggled", [e, this]);
      } } };
      function Wc(t, e, { _toggle: i }) {
        return ie.cancel(t), X.cancel(t), i(t, e);
      }
      async function Vc(t, e, { animation: i, duration: s, velocity: o, transition: r, _toggle: l }) {
        var u;
        const [f = "reveal", v = "top"] = ((u = i[0]) == null ? undefined : u.split("-")) || [], $ = [["left", "right"], ["top", "bottom"]], b = $[w($[0], v) ? 0 : 1], x = b[1] === v, O = ["width", "height"][$.indexOf(b)], B = `margin-${b[0]}`, q = `margin-${v}`;
        let _t = T(t)[O];
        const Kt = X.inProgress(t);
        await X.cancel(t), e && l(t, true);
        const re = Object.fromEntries(["padding", "border", "width", "height", "minWidth", "minHeight", "overflowY", "overflowX", B, q].map((La) => [La, t.style[La]])), Lt = T(t), Yn = R(m(t, B)), Ma = R(m(t, q)), Pe = Lt[O] + Ma;
        !Kt && !e && (_t += Ma);
        const [Is] = rn(t, "<div>");
        m(Is, { boxSizing: "border-box", height: Lt.height, width: Lt.width, ...m(t, ["overflow", "padding", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderImage", q]) }), m(t, { padding: 0, border: 0, minWidth: 0, minHeight: 0, [q]: 0, width: Lt.width, height: Lt.height, overflow: "hidden", [O]: _t });
        const Ha = _t / Pe;
        s = (o * Pe + s) * (e ? 1 - Ha : Ha);
        const Na = { [O]: e ? Pe : 0 };
        x && (m(t, B, Pe - _t + Yn), Na[B] = e ? Yn : Pe + Yn), !x ^ f === "reveal" && (m(Is, B, -Pe + _t), X.start(Is, { [B]: e ? 0 : -Pe }, s, r));
        try {
          await X.start(t, Na, s, r);
        } finally {
          m(t, re), Si(Is.firstChild), e || l(t, false);
        }
      }
      function Yc(t, e, i) {
        const { animation: s, duration: o, _toggle: r } = i;
        return e ? (r(t, true), ie.in(t, s[0], o, i.origin)) : ie.out(t, s[1] || s[0], o, i.origin).then(() => r(t, false));
      }
      const wt = [];
      var Dn = { mixins: [xt, Oi, _e], props: { selPanel: String, selClose: String, escClose: Boolean, bgClose: Boolean, stack: Boolean, role: String }, data: { cls: "uk-open", escClose: true, bgClose: true, overlay: true, stack: false, role: "dialog" }, computed: { panel: ({ selPanel: t }, e) => H(t, e), transitionElement() {
        return this.panel;
      } }, connected() {
        A(this.panel || this.$el, "role", this.role), this.overlay && A(this.panel || this.$el, "aria-modal", true);
      }, beforeDisconnect() {
        w(wt, this) && this.toggleElement(this.$el, false, false);
      }, events: [{ name: "click", delegate: ({ selClose: t }) => `${t},a[href*="#"]`, handler(t) {
        const { current: e, defaultPrevented: i } = t, { hash: s } = e;
        !i && s && We(e) && !this.$el.contains(H(s)) ? this.hide() : Y(e, this.selClose) && (t.preventDefault(), this.hide());
      } }, { name: "toggle", self: true, handler(t) {
        t.defaultPrevented || (t.preventDefault(), this.isToggled() === w(wt, this) && this.toggle());
      } }, { name: "beforeshow", self: true, handler(t) {
        if (w(wt, this))
          return false;
        !this.stack && wt.length ? (Promise.all(wt.map((e) => e.hide())).then(this.show), t.preventDefault()) : wt.push(this);
      } }, { name: "show", self: true, handler() {
        this.stack && m(this.$el, "zIndex", R(m(this.$el, "zIndex")) + wt.length);
        const t = [this.overlay && Jc(this), this.overlay && br(this.$el), this.bgClose && Gc(this), this.escClose && Xc(this)];
        st(this.$el, "hidden", () => t.forEach((e) => e && e()), { self: true }), j(document.documentElement, this.clsPage);
      } }, { name: "shown", self: true, handler() {
        ts(this.$el) || A(this.$el, "tabindex", "-1"), Y(this.$el, ":focus-within") || this.$el.focus();
      } }, { name: "hidden", self: true, handler() {
        w(wt, this) && wt.splice(wt.indexOf(this), 1), m(this.$el, "zIndex", ""), wt.some((t) => t.clsPage === this.clsPage) || Z(document.documentElement, this.clsPage);
      } }], methods: { toggle() {
        return this.isToggled() ? this.hide() : this.show();
      }, show() {
        return this.container && J(this.$el) !== this.container ? (ot(this.container, this.$el), new Promise((t) => requestAnimationFrame(() => this.show().then(t)))) : this.toggleElement(this.$el, true, yr);
      }, hide() {
        return this.toggleElement(this.$el, false, yr);
      } } };
      function yr(t, e, { transitionElement: i, _toggle: s }) {
        return new Promise((o, r) => st(t, "show hide", () => {
          var l;
          (l = t._reject) == null || l.call(t), t._reject = r, s(t, e);
          const u = st(i, "transitionstart", () => {
            st(i, "transitionend transitioncancel", o, { self: true }), clearTimeout(f);
          }, { self: true }), f = setTimeout(() => {
            u(), o();
          }, Kc(m(i, "transitionDuration")));
        })).then(() => delete t._reject);
      }
      function Kc(t) {
        return t ? _(t, "ms") ? R(t) : R(t) * 1000 : 0;
      }
      function Jc(t) {
        return z(document, "focusin", (e) => {
          me(wt) === t && !t.$el.contains(e.target) && t.$el.focus();
        });
      }
      function Gc(t) {
        return z(document, It, ({ target: e }) => {
          me(wt) !== t || t.overlay && !t.$el.contains(e) || !t.panel || t.panel.contains(e) || st(document, `${ee} ${Zi} scroll`, ({ defaultPrevented: i, type: s, target: o }) => {
            !i && s === ee && e === o && t.hide();
          }, true);
        });
      }
      function Xc(t) {
        return z(document, "keydown", (e) => {
          e.keyCode === 27 && me(wt) === t && t.hide();
        });
      }
      var Mn = { slide: { show(t) {
        return [{ transform: rt(t * -100) }, { transform: rt() }];
      }, percent(t) {
        return Di(t);
      }, translate(t, e) {
        return [{ transform: rt(e * -100 * t) }, { transform: rt(e * 100 * (1 - t)) }];
      } } };
      function Di(t) {
        return Math.abs(new DOMMatrix(m(t, "transform")).m41 / t.offsetWidth);
      }
      function rt(t = 0, e = "%") {
        return t ? `translate3d(${t + e}, 0, 0)` : "";
      }
      function Zc(t, e, i, { animation: s, easing: o }) {
        const { percent: r, translate: l, show: u = ct } = s, f = u(i), { promise: v, resolve: $ } = kr();
        return { dir: i, show(b, x = 0, I) {
          const O = I ? "linear" : o;
          return b -= Math.round(b * mt(x, -1, 1)), this.translate(x), Ae(e, "itemin", { percent: x, duration: b, timing: O, dir: i }), Ae(t, "itemout", { percent: 1 - x, duration: b, timing: O, dir: i }), Promise.all([X.start(e, f[1], b, O), X.start(t, f[0], b, O)]).then(() => {
            this.reset(), $();
          }, ct), v;
        }, cancel() {
          return X.cancel([e, t]);
        }, reset() {
          for (const b in f[0])
            m([e, t], b, "");
        }, async forward(b, x = this.percent()) {
          return await this.cancel(), this.show(b, x, true);
        }, translate(b) {
          this.reset();
          const x = l(b, i);
          m(e, x[1]), m(t, x[0]), Ae(e, "itemtranslatein", { percent: b, dir: i }), Ae(t, "itemtranslateout", { percent: 1 - b, dir: i });
        }, percent() {
          return r(t || e, e, i);
        }, getDistance() {
          return t == null ? undefined : t.offsetWidth;
        } };
      }
      function Ae(t, e, i) {
        C(t, Ve(e, false, false, i));
      }
      function kr() {
        let t;
        return { promise: new Promise((e) => t = e), resolve: t };
      }
      var Hn = { props: { i18n: Object }, data: { i18n: null }, methods: { t(t, ...e) {
        var i, s, o;
        let r = 0;
        return ((o = ((i = this.i18n) == null ? undefined : i[t]) || ((s = this.$options.i18n) == null ? undefined : s[t])) == null ? undefined : o.replace(/%s/g, () => e[r++] || "")) || "";
      } } }, Qc = { props: { autoplay: Boolean, autoplayInterval: Number, pauseOnHover: Boolean }, data: { autoplay: false, autoplayInterval: 7000, pauseOnHover: true }, connected() {
        A(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay();
      }, disconnected() {
        this.stopAutoplay();
      }, update() {
        A(this.slides, "tabindex", "-1");
      }, events: [{ name: "visibilitychange", el: () => document, filter: ({ autoplay: t }) => t, handler() {
        document.hidden ? this.stopAutoplay() : this.startAutoplay();
      } }], methods: { startAutoplay() {
        this.stopAutoplay(), this.interval = setInterval(() => {
          this.stack.length || this.draggable && Y(this.$el, ":focus-within") && !Y(this.$el, ":focus") || this.pauseOnHover && Y(this.$el, ":hover") || this.show("next");
        }, this.autoplayInterval);
      }, stopAutoplay() {
        clearInterval(this.interval);
      } } };
      const ms = { passive: false, capture: true }, xr = { passive: true, capture: true }, th = "touchstart mousedown", Nn = "touchmove mousemove", Sr = "touchend touchcancel mouseup click input scroll";
      var eh = { props: { draggable: Boolean }, data: { draggable: true, threshold: 10 }, created() {
        for (const t of ["start", "move", "end"]) {
          const e = this[t];
          this[t] = (i) => {
            const s = Ut(i).x * (ht ? -1 : 1);
            this.prevPos = s === this.pos ? this.prevPos : this.pos, this.pos = s, e(i);
          };
        }
      }, events: [{ name: th, passive: true, delegate: ({ selList: t }) => `${t} > *`, handler(t) {
        !this.draggable || this.parallax || !Mt(t) && ih(t.target) || t.target.closest(vi) || t.button > 0 || this.length < 2 || this.start(t);
      } }, { name: "dragstart", handler(t) {
        t.preventDefault();
      } }, { name: Nn, el: ({ list: t }) => t, handler: ct, ...ms }], methods: { start() {
        this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = true, this.stack = []) : this.prevIndex = this.index, z(document, Nn, this.move, ms), z(document, Sr, this.end, xr), m(this.list, "userSelect", "none");
      }, move(t) {
        const e = this.pos - this.drag;
        if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
          return;
        t.cancelable && t.preventDefault(), this.dragging = true, this.dir = e < 0 ? 1 : -1;
        let { slides: i, prevIndex: s } = this, o = Math.abs(e), r = this.getIndex(s + this.dir), l = _r.call(this, s, r);
        for (;r !== s && o > l; )
          this.drag -= l * this.dir, s = r, o -= l, r = this.getIndex(s + this.dir), l = _r.call(this, s, r);
        this.percent = o / l;
        const u = i[s], f = i[r], v = this.index !== r, $ = s === r;
        let b;
        for (const x of [this.index, this.prevIndex])
          w([r, s], x) || (C(i[x], "itemhidden", [this]), $ && (b = true, this.prevIndex = s));
        (this.index === s && this.prevIndex !== s || b) && C(i[this.index], "itemshown", [this]), v && (this.prevIndex = s, this.index = r, $ || (C(u, "beforeitemhide", [this]), C(u, "itemhide", [this])), C(f, "beforeitemshow", [this]), C(f, "itemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), u, !$ && f);
      }, end() {
        if (ye(document, Nn, this.move, ms), ye(document, Sr, this.end, xr), this.dragging)
          if (setTimeout(z(this.list, "click", (t) => t.preventDefault(), ms)), this.dragging = null, this.index === this.prevIndex)
            this.percent = 1 - this.percent, this.dir *= -1, this._show(false, this.index, true), this._transitioner = null;
          else {
            const t = (ht ? this.dir * (ht ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
            this.index = t ? this.index : this.prevIndex, t && (C(this.slides[this.prevIndex], "itemhidden", [this]), C(this.slides[this.index], "itemshown", [this]), this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", true);
          }
        m(this.list, { userSelect: "" }), this.drag = this.percent = null;
      } } };
      function _r(t, e) {
        return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
      }
      function ih(t) {
        return m(t, "userSelect") !== "none" && M(t.childNodes).some((e) => e.nodeType === 3 && e.textContent.trim());
      }
      function sh(t) {
        t._watches = [];
        for (const e of t.$options.watch || [])
          for (const [i, s] of Object.entries(e))
            Ar(t, s, i);
        t._initial = true;
      }
      function Ar(t, e, i) {
        t._watches.push({ name: i, ...Qt(e) ? e : { handler: e } });
      }
      function nh(t, e) {
        for (const { name: i, handler: s, immediate: o = true } of t._watches)
          (t._initial && o || a(e, i) && !gi(e[i], t[i])) && s.call(t, t[i], e[i]);
        t._initial = false;
      }
      function oh(t) {
        const { computed: e } = t.$options;
        if (t._computed = {}, e)
          for (const i in e)
            Ir(t, i, e[i]);
      }
      const Er = { subtree: true, childList: true };
      function Ir(t, e, i) {
        t._hasComputed = true, Object.defineProperty(t, e, { enumerable: true, get() {
          const { _computed: s, $props: o, $el: r } = t;
          if (!a(s, e) && (s[e] = (i.get || i).call(t, o, r), i.observe && t._computedObserver)) {
            const l = i.observe.call(t, o);
            t._computedObserver.observe(["~", "+", "-"].includes(l[0]) ? r.parentElement : r.getRootNode(), Er);
          }
          return s[e];
        }, set(s) {
          const { _computed: o } = t;
          o[e] = i.set ? i.set.call(t, s) : s, pt(o[e]) && delete o[e];
        } });
      }
      function rh(t) {
        t._hasComputed && (Ac(t, { read: () => nh(t, Cr(t)), events: ["resize", "computed"] }), t._computedObserver = dn(t.$el, () => Ii(t, "computed"), Er), t._disconnect.push(() => {
          t._computedObserver.disconnect(), t._computedObserver = null, Cr(t);
        }));
      }
      function Cr(t) {
        const e = { ...t._computed };
        return t._computed = {}, e;
      }
      function ah(t) {
        for (const e of t.$options.events || [])
          if (a(e, "handler"))
            Tr(t, e);
          else
            for (const i in e)
              Tr(t, { name: i, handler: e[i] });
      }
      function Tr(t, { name: e, el: i, handler: s, capture: o, passive: r, delegate: l, filter: u, self: f }) {
        u && !u.call(t, t) || t._disconnect.push(z(i ? i.call(t, t) : t.$el, e, l == null ? undefined : l.call(t, t), s.bind(t), { passive: r, capture: o, self: f }));
      }
      function lh(t) {
        for (const e of t.$options.observe || [])
          ch(t, e);
      }
      function ch(t, e) {
        let { observe: i, target: s = t.$el, handler: o, options: r, filter: l, args: u } = e;
        if (l && !l.call(t, t))
          return;
        const f = `_observe${t._disconnect.length}`;
        tt(s) && !a(t, f) && Ir(t, f, () => {
          const b = s.call(t, t);
          return P(b) ? F(b) : b;
        }), o = nt(o) ? t[o] : o.bind(t), tt(r) && (r = r.call(t, t));
        const v = a(t, f) ? t[f] : s, $ = i(v, o, r, u);
        tt(s) && P(t[f]) && Ar(t, { handler: hh($, r), immediate: false }, f), t._disconnect.push(() => $.disconnect());
      }
      function hh(t, e) {
        return (i, s) => {
          for (const o of s)
            w(i, o) || (t.unobserve ? t.unobserve(o) : t.observe && t.disconnect());
          for (const o of i)
            (!w(s, o) || !t.unobserve) && t.observe(o, e);
        };
      }
      function uh(t) {
        const { $options: e, $props: i } = t, s = Pr(e);
        V(i, s);
        const { computed: o, methods: r } = e;
        for (let l in i)
          l in s && (!o || !a(o, l)) && (!r || !a(r, l)) && (t[l] = i[l]);
      }
      function Pr(t) {
        const e = {}, { args: i = [], props: s = {}, el: o, id: r } = t;
        if (!s)
          return e;
        for (const u in s) {
          const f = c(u);
          let v = vt(o, f);
          pt(v) || (v = s[u] === Boolean && v === "" ? true : xn(s[u], v), !(f === "target" && y(v, "_")) && (e[u] = v));
        }
        const l = Je(vt(o, r), i);
        for (const u in l) {
          const f = p(u);
          pt(s[f]) || (e[f] = xn(s[f], l[u]));
        }
        return e;
      }
      const dh = Et((t, e) => {
        const i = Object.keys(e), s = i.concat(t).map((o) => [c(o), `data-${c(o)}`]).flat();
        return { attributes: i, filter: s };
      });
      function fh(t) {
        const { $options: e, $props: i } = t, { id: s, props: o, el: r } = e;
        if (!o)
          return;
        const { attributes: l, filter: u } = dh(s, o), f = new MutationObserver((v) => {
          const $ = Pr(e);
          v.some(({ attributeName: b }) => {
            const x = b.replace("data-", "");
            return (x === s ? l : [p(x), p(b)]).some((I) => !pt($[I]) && $[I] !== i[I]);
          }) && t.$reset();
        });
        f.observe(r, { attributes: true, attributeFilter: u }), t._disconnect.push(() => f.disconnect());
      }
      function Ge(t, e) {
        var i;
        (i = t.$options[e]) == null || i.forEach((s) => s.call(t));
      }
      function Ln(t) {
        t._connected || (uh(t), Ge(t, "beforeConnect"), t._connected = true, t._disconnect = [], ah(t), _c(t), sh(t), lh(t), fh(t), rh(t), Ge(t, "connected"), Ii(t));
      }
      function Bn(t) {
        t._connected && (Ge(t, "beforeDisconnect"), t._disconnect.forEach((e) => e()), t._disconnect = null, Ge(t, "disconnected"), t._connected = false);
      }
      let ph = 0;
      function Or(t, e = {}) {
        e.data = vh(e, t.constructor.options), t.$options = Ei(t.constructor.options, e, t), t.$props = {}, t._uid = ph++, gh(t), mh(t), oh(t), Ge(t, "created"), e.el && t.$mount(e.el);
      }
      function gh(t) {
        const { data: e = {} } = t.$options;
        for (const i in e)
          t.$props[i] = t[i] = e[i];
      }
      function mh(t) {
        const { methods: e } = t.$options;
        if (e)
          for (const i in e)
            t[i] = e[i].bind(t);
      }
      function vh({ data: t = {} }, { args: e = [], props: i = {} }) {
        P(t) && (t = t.slice(0, e.length).reduce((s, o, r) => (Qt(o) ? V(s, o) : s[e[r]] = o, s), {}));
        for (const s in t)
          pt(t[s]) ? delete t[s] : i[s] && (t[s] = xn(i[s], t[s]));
        return t;
      }
      const St = function(t) {
        Or(this, t);
      };
      St.util = yc, St.options = {}, St.version = "3.22.2";
      const $h = "uk-", Ee = "__uikit__", Xe = {};
      function Dr(t, e) {
        var i, s;
        const o = $h + c(t);
        if (!e)
          return Xe[o].options || (Xe[o] = St.extend(Xe[o])), Xe[o];
        t = p(t), St[t] = (l, u) => Mi(t, l, u);
        const r = (i = e.options) != null ? i : { ...e };
        return r.id = o, r.name = t, (s = r.install) == null || s.call(r, St, r, t), St._initialized && !r.functional && requestAnimationFrame(() => Mi(t, `[${o}],[data-${o}]`)), Xe[o] = r;
      }
      function Mi(t, e, i, ...s) {
        const o = Dr(t);
        return o.options.functional ? new o({ data: Qt(e) ? e : [e, i, ...s] }) : e ? Q(e).map(r)[0] : r();
        function r(l) {
          const u = vs(l, t);
          if (u)
            if (i)
              u.$destroy();
            else
              return u;
          return new o({ el: l, data: i });
        }
      }
      function Hi(t) {
        return (t == null ? undefined : t[Ee]) || {};
      }
      function vs(t, e) {
        return Hi(t)[e];
      }
      function bh(t, e) {
        t[Ee] || (t[Ee] = {}), t[Ee][e.$options.name] = e;
      }
      function wh(t, e) {
        var i;
        (i = t[Ee]) == null || delete i[e.$options.name], Ji(t[Ee]) && delete t[Ee];
      }
      function yh(t) {
        t.component = Dr, t.getComponents = Hi, t.getComponent = vs, t.update = Mr, t.use = function(i) {
          if (!i.installed)
            return i.call(null, this), i.installed = true, this;
        }, t.mixin = function(i, s) {
          s = (nt(s) ? this.component(s) : s) || this, s.options = Ei(s.options, i);
        }, t.extend = function(i) {
          i || (i = {});
          const s = this, o = function(l) {
            Or(this, l);
          };
          return o.prototype = Object.create(s.prototype), o.prototype.constructor = o, o.options = Ei(s.options, i), o.super = s, o.extend = s.extend, o;
        };
        let e;
        Object.defineProperty(t, "container", { get() {
          return e || document.body;
        }, set(i) {
          e = H(i);
        } });
      }
      function Mr(t, e) {
        t = t ? at(t) : document.body;
        for (const i of qe(t).reverse())
          Hr(i, e);
        se(t, (i) => Hr(i, e));
      }
      function Hr(t, e) {
        const i = Hi(t);
        for (const s in i)
          Ii(i[s], e);
      }
      function kh(t) {
        t.prototype.$mount = function(e) {
          const i = this;
          bh(e, i), i.$options.el = e, e.isConnected && Ln(i);
        }, t.prototype.$destroy = function(e = false) {
          const i = this, { el: s } = i.$options;
          s && Bn(i), Ge(i, "destroy"), wh(s, i), e && $t(i.$el);
        }, t.prototype.$create = Mi, t.prototype.$emit = function(e) {
          Ii(this, e);
        }, t.prototype.$update = function(e = this.$el, i) {
          Mr(e, i);
        }, t.prototype.$reset = function() {
          Bn(this), Ln(this);
        }, t.prototype.$getComponent = vs, Object.defineProperties(t.prototype, { $el: { get() {
          return this.$options.el;
        } }, $container: Object.getOwnPropertyDescriptor(t, "container") });
      }
      let xh = 1;
      function Ie(t, e = null) {
        return (e == null ? undefined : e.id) || `${t.$options.id}-${xh++}`;
      }
      var Sh = { i18n: { next: "Next slide", previous: "Previous slide", slideX: "Slide %s", slideLabel: "%s of %s", role: "String" }, data: { selNav: false, role: "region" }, computed: { nav: ({ selNav: t }, e) => H(t, e), navChildren() {
        return G(this.nav);
      }, selNavItem: ({ attrItem: t }) => `[${t}],[data-${t}]`, navItems(t, e) {
        return Q(this.selNavItem, e);
      } }, watch: { nav(t, e) {
        A(t, "role", "tablist"), this.padNavitems(), e && this.$emit();
      }, list(t) {
        et(t, "ul") && A(t, "role", "presentation");
      }, navChildren(t) {
        A(t, "role", "presentation"), this.padNavitems(), this.updateNav();
      }, navItems(t) {
        for (const e of t) {
          const i = vt(e, this.attrItem), s = H("a,button", e) || e;
          let o, r = null;
          if (jt(i)) {
            const l = zt(i), u = this.slides[l];
            u && (u.id || (u.id = Ie(this, u)), r = u.id), o = this.t("slideX", R(i) + 1), A(s, "role", "tab");
          } else
            this.list && (this.list.id || (this.list.id = Ie(this, this.list)), r = this.list.id), o = this.t(i);
          A(s, { "aria-controls": r, "aria-label": A(s, "aria-label") || o });
        }
      }, slides(t) {
        t.forEach((e, i) => A(e, { role: this.nav ? "tabpanel" : "group", "aria-label": this.t("slideLabel", i + 1, this.length), "aria-roledescription": this.nav ? null : "slide" })), this.padNavitems();
      } }, connected() {
        A(this.$el, { role: this.role, "aria-roledescription": "carousel" });
      }, update: [{ write() {
        this.navItems.concat(this.nav).forEach((t) => t && (t.hidden = !this.maxIndex)), this.updateNav();
      }, events: ["resize"] }], events: [{ name: "click keydown", delegate: ({ selNavItem: t }) => t, filter: ({ parallax: t }) => !t, handler(t) {
        t.target.closest("a,button") && (t.type === "click" || t.keyCode === K.SPACE) && (t.preventDefault(), this.show(vt(t.current, this.attrItem)));
      } }, { name: "itemshow", handler() {
        this.updateNav();
      } }, { name: "keydown", delegate: ({ selNavItem: t }) => t, filter: ({ parallax: t }) => !t, handler(t) {
        const { current: e, keyCode: i } = t, s = vt(e, this.attrItem);
        if (!jt(s))
          return;
        let o = i === K.HOME ? 0 : i === K.END ? "last" : i === K.LEFT ? "previous" : i === K.RIGHT ? "next" : -1;
        ~o && (t.preventDefault(), this.show(o));
      } }], methods: { updateNav() {
        const t = this.getValidIndex();
        for (const e of this.navItems) {
          const i = vt(e, this.attrItem), s = H("a,button", e) || e;
          if (jt(i)) {
            const r = zt(i) === t;
            it(e, this.clsActive, r), it(s, "uk-disabled", !!this.parallax), A(s, { "aria-selected": r, tabindex: r && !this.parallax ? null : -1 }), r && s && Y(J(e), ":focus-within") && s.focus();
          } else
            it(e, "uk-invisible", this.finite && (i === "previous" && t === 0 || i === "next" && t >= this.maxIndex));
        }
      }, padNavitems() {
        if (!this.nav)
          return;
        const t = [];
        for (let e = 0;e < this.length; e++) {
          const i = `${this.attrItem}="${e}"`;
          t[e] = this.navChildren.findLast((s) => s.matches(`[${i}]`)) || H(`<li ${i}><a href></a></li>`);
        }
        gi(t, this.navChildren) || qt(this.nav, t);
      } } };
      const _h = "cubic-bezier(0.25, 0.46, 0.45, 0.94)", Ah = "cubic-bezier(0.165, 0.84, 0.44, 1)";
      var Nr = { mixins: [Qc, eh, Sh, Hn], props: { clsActivated: String, easing: String, index: Number, finite: Boolean, velocity: Number }, data: () => ({ easing: "ease", finite: false, velocity: 1, index: 0, prevIndex: -1, stack: [], percent: 0, clsActive: "uk-active", clsActivated: "", clsEnter: "uk-slide-enter", clsLeave: "uk-slide-leave", clsSlideActive: "uk-slide-active", Transitioner: false, transitionOptions: {} }), connected() {
        this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = [];
      }, disconnected() {
        Z(this.slides, this.clsActive);
      }, computed: { duration: ({ velocity: t }, e) => Lr(e.offsetWidth / t), list: ({ selList: t }, e) => H(t, e), maxIndex() {
        return this.length - 1;
      }, slides() {
        return G(this.list);
      }, length() {
        return this.slides.length;
      } }, watch: { slides(t, e) {
        e && this.$emit();
      } }, events: { itemshow({ target: t }) {
        j(t, this.clsEnter, this.clsSlideActive);
      }, itemshown({ target: t }) {
        Z(t, this.clsEnter);
      }, itemhide({ target: t }) {
        j(t, this.clsLeave);
      }, itemhidden({ target: t }) {
        Z(t, this.clsLeave, this.clsSlideActive);
      } }, methods: { async show(t, e = false) {
        var i;
        if (this.dragging || !this.length || this.parallax)
          return;
        const { stack: s } = this, o = e ? 0 : s.length, r = () => {
          s.splice(o, 1), s.length && this.show(s.shift(), true);
        };
        if (s[e ? "unshift" : "push"](t), !e && s.length > 1) {
          s.length === 2 && ((i = this._transitioner) == null || i.forward(Math.min(this.duration, 200)));
          return;
        }
        const l = this.getIndex(this.index), u = L(this.slides, this.clsActive) && this.slides[l], f = this.getIndex(t, this.index), v = this.slides[f];
        if (u === v) {
          r();
          return;
        }
        if (this.dir = Eh(t, l), this.prevIndex = l, this.index = f, u && !C(u, "beforeitemhide", [this]) || !C(v, "beforeitemshow", [this, u])) {
          this.index = this.prevIndex, r();
          return;
        }
        u && C(u, "itemhide", [this]), C(v, "itemshow", [this]), await this._show(u, v, e), u && C(u, "itemhidden", [this]), C(v, "itemshown", [this]), s.shift(), this._transitioner = null, s.length && requestAnimationFrame(() => s.length && this.show(s.shift(), true));
      }, getIndex(t = this.index, e = this.index) {
        return mt(yt(t, this.slides, e, this.finite), 0, Math.max(0, this.maxIndex));
      }, getValidIndex(t = this.index, e = this.prevIndex) {
        return this.getIndex(t, e);
      }, async _show(t, e, i) {
        if (this._transitioner = this._getTransitioner(t, e, this.dir, { easing: i ? e.offsetWidth < 600 ? _h : Ah : this.easing, ...this.transitionOptions }), !i && !t) {
          this._translate(1);
          return;
        }
        const { length: s } = this.stack;
        return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent);
      }, _translate(t, e = this.prevIndex, i = this.index) {
        const s = this._getTransitioner(e === i ? false : e, i);
        return s.translate(t), s;
      }, _getTransitioner(t = this.prevIndex, e = this.index, i = this.dir || 1, s = this.transitionOptions) {
        return new this.Transitioner(pi(t) ? this.slides[t] : t, pi(e) ? this.slides[e] : e, i * (ht ? -1 : 1), s);
      } } };
      function Eh(t, e) {
        return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
      }
      function Lr(t) {
        return 0.5 * t + 300;
      }
      var Br = { mixins: [Nr], props: { animation: String }, data: { animation: "slide", clsActivated: "uk-transition-active", Animations: Mn, Transitioner: Zc }, computed: { animation({ animation: t, Animations: e }) {
        return { ...e[t] || e.slide, name: t };
      }, transitionOptions() {
        return { animation: this.animation };
      } }, observe: Vt(), events: { itemshow({ target: t }) {
        j(t, this.clsActive);
      }, itemshown({ target: t }) {
        j(t, this.clsActivated);
      }, itemhidden({ target: t }) {
        Z(t, this.clsActive, this.clsActivated);
      } } }, Ih = { ...Mn, fade: { show() {
        return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
      }, percent(t) {
        return 1 - m(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
      } }, scale: { show() {
        return [{ opacity: 0, transform: Ze(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
      }, percent(t) {
        return 1 - m(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t, transform: Ze(1 + 0.5 * t), zIndex: 0 }, { zIndex: -1 }];
      } }, pull: { show(t) {
        return t < 0 ? [{ transform: rt(30), zIndex: -1 }, { transform: rt(), zIndex: 0 }] : [{ transform: rt(-100), zIndex: 0 }, { transform: rt(), zIndex: -1 }];
      }, percent(t, e, i) {
        return i < 0 ? 1 - Di(e) : Di(t);
      }, translate(t, e) {
        return e < 0 ? [{ transform: rt(30 * t), zIndex: -1 }, { transform: rt(-100 * (1 - t)), zIndex: 0 }] : [{ transform: rt(-t * 100), zIndex: 0 }, { transform: rt(30 * (1 - t)), zIndex: -1 }];
      } }, push: { show(t) {
        return t < 0 ? [{ transform: rt(100), zIndex: 0 }, { transform: rt(), zIndex: -1 }] : [{ transform: rt(-30), zIndex: -1 }, { transform: rt(), zIndex: 0 }];
      }, percent(t, e, i) {
        return i > 0 ? 1 - Di(e) : Di(t);
      }, translate(t, e) {
        return e < 0 ? [{ transform: rt(t * 100), zIndex: 0 }, { transform: rt(-30 * (1 - t)), zIndex: -1 }] : [{ transform: rt(-30 * t), zIndex: -1 }, { transform: rt(100 * (1 - t)), zIndex: 0 }];
      } } };
      function Ze(t) {
        return `scale3d(${t}, ${t}, 1)`;
      }
      var Rr = { ...Mn, fade: { show() {
        return [{ opacity: 0 }, { opacity: 1 }];
      }, percent(t) {
        return 1 - m(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t }, { opacity: t }];
      } }, scale: { show() {
        return [{ opacity: 0, transform: Ze(1 - 0.2) }, { opacity: 1, transform: Ze(1) }];
      }, percent(t) {
        return 1 - m(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t, transform: Ze(1 - 0.2 * t) }, { opacity: t, transform: Ze(1 - 0.2 + 0.2 * t) }];
      } } }, jr = { i18n: { counter: "%s / %s" }, mixins: [Dn, Br], functional: true, props: { counter: Boolean, preload: Number, nav: Boolean, slidenav: Boolean, delayControls: Number, videoAutoplay: Boolean, template: String }, data: () => ({ counter: false, preload: 1, nav: false, slidenav: true, delayControls: 3000, videoAutoplay: false, items: [], cls: "uk-open", clsPage: "uk-lightbox-page", clsFit: "uk-lightbox-items-fit", clsZoom: "uk-lightbox-zoom", attrItem: "uk-lightbox-item", selList: ".uk-lightbox-items", selClose: ".uk-close-large", selNav: ".uk-lightbox-thumbnav, .uk-lightbox-dotnav", selCaption: ".uk-lightbox-caption", selCounter: ".uk-lightbox-counter", pauseOnHover: false, velocity: 2, Animations: Rr, template: '<div class="uk-lightbox uk-overflow-hidden"> <div class="uk-lightbox-items"></div> <div class="uk-position-top-right uk-position-sm uk-transition-fade" uk-inverse> <button class="uk-lightbox-close uk-close-large" type="button" uk-close></button> </div> <div class="uk-lightbox-slidenav uk-position-center-left uk-position-sm uk-transition-fade" uk-inverse> <a href uk-slidenav-previous uk-lightbox-item="previous"></a> </div> <div class="uk-lightbox-slidenav uk-position-center-right uk-position-sm uk-transition-fade" uk-inverse> <a href uk-slidenav-next uk-lightbox-item="next"></a> </div> <div class="uk-position-center-right uk-position-sm uk-transition-fade" uk-inverse style="max-height: 90vh; overflow: auto;"> <ul class="uk-lightbox-thumbnav uk-lightbox-thumbnav-vertical uk-thumbnav uk-thumbnav-vertical"></ul> <ul class="uk-lightbox-dotnav uk-dotnav uk-dotnav-vertical"></ul> </div> <div class="uk-lightbox-counter text-lg uk-position-top-left uk-position-sm uk-transition-fade" uk-inverse></div> <div class="uk-lightbox-caption uk-position-bottom text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>' }), created() {
        let t = H(this.template);
        et(t, "template") && (t = Wt(qt(t)));
        const e = H(this.selList, t), i = this.$props.nav;
        $t(Q(this.selNav, t).filter((r) => !Y(r, `.uk-${i}`)));
        for (const [r, l] of this.items.entries())
          ot(e, "<div>"), i === "thumbnav" && xi(Ch(l, this.videoAutoplay), ot(H(this.selNav, t), `<li uk-lightbox-item="${r}"><a href></a></li>`));
        this.slidenav || $t(Q(".uk-lightbox-slidenav", t)), this.counter || $t(H(this.selCounter, t)), j(e, this.clsFit);
        const s = H("[uk-close]", t), o = this.t("close");
        s && o && (s.dataset.i18n = JSON.stringify({ label: o })), this.$mount(ot(this.container, t));
      }, events: [{ name: "click", self: true, filter: ({ bgClose: t }) => t, delegate: ({ selList: t }) => `${t} > *`, handler(t) {
        t.defaultPrevented || this.hide();
      } }, { name: "click", self: true, delegate: ({ clsZoom: t }) => `.${t}`, handler(t) {
        t.defaultPrevented || it(this.list, this.clsFit);
      } }, { name: `${Xi} ${It} keydown`, filter: ({ delayControls: t }) => t, handler() {
        this.showControls();
      } }, { name: "shown", self: true, handler() {
        this.showControls();
      } }, { name: "hide", self: true, handler() {
        this.hideControls(), Z(this.slides, this.clsActive), X.stop(this.slides);
      } }, { name: "hidden", self: true, handler() {
        this.$destroy(true);
      } }, { name: "keyup", el: () => document, handler({ keyCode: t }) {
        if (!this.isToggled(this.$el) || !this.draggable)
          return;
        let e = -1;
        t === K.LEFT ? e = "previous" : t === K.RIGHT ? e = "next" : t === K.HOME ? e = 0 : t === K.END && (e = "last"), ~e && this.show(e);
      } }, { name: "beforeitemshow", handler(t) {
        qt(H(this.selCaption, this.$el), this.getItem().caption || ""), qt(H(this.selCounter, this.$el), this.t("counter", this.index + 1, this.slides.length));
        for (let e = -this.preload;e <= this.preload; e++)
          this.loadItem(this.index + e);
        this.isToggled() || (this.draggable = false, t.preventDefault(), this.toggleElement(this.$el, true, false), this.animation = Rr.scale, Z(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
      } }, { name: "itemshown", handler() {
        this.draggable = this.$props.draggable;
      } }, { name: "itemload", async handler(t, e) {
        const { source: i, type: s, attrs: o = {} } = e;
        if (this.setItem(e, "<span uk-spinner uk-inverse></span>"), !i)
          return;
        let r;
        const l = { allowfullscreen: "", style: "max-width: 100%; box-sizing: border-box;", "uk-responsive": "", "uk-video": `${!!this.videoAutoplay}` };
        if (s === "image" || zr(i)) {
          const u = oe("img");
          $r(u, e.sources), A(u, { src: i, ...qs(e, ["alt", "srcset", "sizes"]), ...o }), z(u, "load", () => this.setItem(e, J(u) || u)), z(u, "error", () => this.setError(e));
        } else if (s === "video" || Fr(i)) {
          const u = this.videoAutoplay === "inline", f = oe("video", { src: i, playsinline: "", controls: u ? null : "", loop: u ? "" : null, poster: this.videoAutoplay ? null : e.poster, "uk-video": u ? "automute: true" : !!this.videoAutoplay, ...o });
          z(f, "loadedmetadata", () => this.setItem(e, f)), z(f, "error", () => this.setError(e));
        } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i))
          this.setItem(e, oe("iframe", { src: i, allowfullscreen: "", class: "uk-lightbox-iframe", ...o }));
        else if (r = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))
          this.setItem(e, oe("iframe", { src: `https://www.youtube${r[1] || ""}.com/embed/${r[2]}${r[3] ? `?${r[3]}` : ""}`, width: 1920, height: 1080, ...l, ...o }));
        else if (r = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))
          try {
            const { height: u, width: f } = await (await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`, { credentials: "omit" })).json();
            this.setItem(e, oe("iframe", { src: `https://player.vimeo.com/video/${r[1]}${r[2] ? `?${r[2]}` : ""}`, width: f, height: u, ...l, ...o }));
          } catch {
            this.setError(e);
          }
      } }, { name: "itemloaded", handler() {
        this.$emit("resize");
      } }], update: { read() {
        for (const t of Q(`${this.selList} :not([controls]):is(img,video)`, this.$el))
          it(t, this.clsZoom, (t.naturalHeight || t.videoHeight) - this.$el.offsetHeight > Math.max(0, (t.naturalWidth || t.videoWidth) - this.$el.offsetWidth));
      }, events: ["resize"] }, methods: { loadItem(t = this.index) {
        const e = this.getItem(t);
        this.getSlide(e).childElementCount || C(this.$el, "itemload", [e]);
      }, getItem(t = this.index) {
        return this.items[yt(t, this.slides)];
      }, setItem(t, e) {
        C(this.$el, "itemloaded", [this, qt(this.getSlide(t), e)]);
      }, getSlide(t) {
        return this.slides[this.items.indexOf(t)];
      }, setError(t) {
        this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2" uk-inverse></span>');
      }, showControls() {
        clearTimeout(this.controlsTimer), this.controlsTimer = this.delayControls && setTimeout(this.hideControls, this.delayControls), j(this.$el, "uk-active", "uk-transition-active");
      }, hideControls() {
        Z(this.$el, "uk-active", "uk-transition-active");
      } } };
      function oe(t, e) {
        const i = Wt(`<${t}>`);
        return A(i, e), i;
      }
      function Ch(t, e) {
        const i = t.poster || t.thumb && (t.type === "image" || zr(t.thumb)) ? oe("img", { src: t.poster || t.thumb, alt: "" }) : t.thumb && (t.type === "video" || Fr(t.thumb)) ? oe("video", { src: t.thumb, loop: "", playsinline: "", "uk-video": `autoplay: ${!!e}; automute: true` }) : oe("canvas");
        return t.thumbRatio && (i.style.aspectRatio = t.thumbRatio), i;
      }
      function zr(t) {
        return t == null ? undefined : t.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i);
      }
      function Fr(t) {
        return t == null ? undefined : t.match(/\.(mp4|webm|ogv)($|\?)/i);
      }
      const Th = ".uk-disabled *, .uk-disabled, [disabled]";
      var Ph = { install: Oh, props: { toggle: String }, data: { toggle: "a" }, computed: { toggles: ({ toggle: t }, e) => Q(t, e) }, watch: { toggles(t) {
        this.hide();
        for (const e of t)
          et(e, "a") && A(e, "role", "button");
      } }, disconnected() {
        this.hide();
      }, events: { name: "click", delegate: ({ toggle: t }) => t, handler(t) {
        t.defaultPrevented || (t.preventDefault(), Y(t.current, Th) || this.show(t.current));
      } }, methods: { show(t) {
        let e = this.toggles.map(Ur);
        if (this.nav === "thumbnav" && Dh.call(this, this.toggles, e), e = Ao(e, "source"), Be(t)) {
          const { source: i } = Ur(t);
          t = E(e, ({ source: s }) => i === s);
        }
        return this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props, items: e }), z(this.panel.$el, "hidden", () => this.panel = null), this.panel.show(t);
      }, hide() {
        var t;
        return (t = this.panel) == null ? undefined : t.hide();
      } } };
      function Oh(t, e) {
        t.lightboxPanel || t.component("lightboxPanel", jr), V(e.props, t.component("lightboxPanel").options.props);
      }
      function Dh(t, e) {
        for (const [i, s] of Object.entries(t)) {
          if (e[i].thumb)
            continue;
          const o = qe(s).reverse().concat(s).find((l) => this.$el.contains(l) && (l === s || Q(this.toggle, l).length === 1));
          if (!o)
            continue;
          const r = H("img,video", o);
          r && (e[i].thumb = r.currentSrc || r.poster || r.src, e[i].thumbRatio = (r.naturalWidth || r.videoWidth) / (r.naturalHeight || r.videoHeight));
        }
      }
      function Ur(t) {
        const e = {};
        for (const i of t.getAttributeNames()) {
          const s = i.replace(/^data-/, "");
          e[s === "href" ? "source" : s] = t.getAttribute(i);
        }
        return e.attrs = Je(e.attrs), e;
      }
      var Mh = { mixins: [Oi], functional: true, args: ["message", "status"], data: { message: "", status: "", timeout: 5000, group: "", pos: "top-center", clsContainer: "uk-notification", clsClose: "uk-notification-close", clsMsg: "uk-notification-message" }, install: Hh, computed: { marginProp: ({ pos: t }) => `margin-${t.match(/[a-z]+(?=-)/)[0]}`, startProps() {
        return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
      } }, created() {
        const t = `${this.clsContainer}-${this.pos}`, e = `data-${this.clsContainer}-container`, i = H(`.${t}[${e}]`, this.container) || ot(this.container, `<div class="${this.clsContainer} ${t}" ${e}></div>`);
        this.$mount(ot(i, `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`));
      }, async connected() {
        const t = R(m(this.$el, this.marginProp));
        await X.start(m(this.$el, this.startProps), { opacity: 1, [this.marginProp]: t }), this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      }, events: { click(t) {
        t.target.closest('a[href="#"],a[href=""]') && t.preventDefault(), this.close();
      }, [we]() {
        this.timer && clearTimeout(this.timer);
      }, [Ue]() {
        this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      } }, methods: { async close(t) {
        const e = (i) => {
          const s = J(i);
          C(i, "close", [this]), $t(i), s != null && s.hasChildNodes() || $t(s);
        };
        this.timer && clearTimeout(this.timer), t || await X.start(this.$el, this.startProps), e(this.$el);
      } } };
      function Hh(t) {
        t.notification.closeAll = function(e, i) {
          se(document.body, (s) => {
            const o = t.getComponent(s, "notification");
            o && (!e || e === o.group) && o.close(i);
          });
        };
      }
      var $s = { props: { media: Boolean }, data: { media: false }, connected() {
        const t = Nh(this.media, this.$el);
        if (this.matchMedia = true, t) {
          this.mediaObj = window.matchMedia(t);
          const e = () => {
            this.matchMedia = this.mediaObj.matches, C(this.$el, Ve("mediachange", false, true, [this.mediaObj]));
          };
          this.offMediaObj = z(this.mediaObj, "change", () => {
            e(), this.$emit("resize");
          }), e();
        }
      }, disconnected() {
        var t;
        (t = this.offMediaObj) == null || t.call(this);
      } };
      function Nh(t, e) {
        if (nt(t)) {
          if (y(t, "@"))
            t = R(m(e, `--uk-breakpoint-${t.slice(1)}`));
          else if (isNaN(t))
            return t;
        }
        return t && jt(t) ? `(min-width: ${t}px)` : "";
      }
      function qr(t) {
        return ut(t) ? Math.ceil(Math.max(0, ...Q("[stroke]", t).map((e) => {
          var i;
          return ((i = e.getTotalLength) == null ? undefined : i.call(e)) || 0;
        }))) : 0;
      }
      const bs = { x: ws, y: ws, rotate: ws, scale: ws, color: Rn, backgroundColor: Rn, borderColor: Rn, blur: Ce, hue: Ce, fopacity: Ce, grayscale: Ce, invert: Ce, saturate: Ce, sepia: Ce, opacity: Bh, stroke: Rh, bgx: Yr, bgy: Yr }, { keys: Wr } = Object;
      var Vr = { mixins: [$s], props: Zr(Wr(bs), "list"), data: Zr(Wr(bs), undefined), computed: { props(t, e) {
        const i = {};
        for (const o in t)
          o in bs && !pt(t[o]) && (i[o] = t[o].slice());
        const s = {};
        for (const o in i)
          s[o] = bs[o](o, e, i[o], i);
        return s;
      } }, events: { load() {
        this.$emit();
      } }, methods: { reset() {
        for (const t in this.getCss(0))
          m(this.$el, t, "");
      }, getCss(t) {
        const e = {};
        for (const i in this.props)
          this.props[i](e, mt(t));
        return e.willChange = Object.keys(e).map(es).join(","), e;
      } } };
      function ws(t, e, i) {
        let s = ks(i) || { x: "px", y: "px", rotate: "deg" }[t] || "", o;
        return t === "x" || t === "y" ? (t = `translate${k(t)}`, o = (r) => R(R(r).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "", o = (r) => {
          var l;
          return ks([r]) ? ft(r, "width", e, true) / e[`offset${(l = r.endsWith) != null && l.call(r, "vh") ? "Height" : "Width"}`] : R(r);
        }), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = Qe(i, o), (r, l) => {
          r.transform = `${r.transform || ""} ${t}(${Ni(i, l)}${s})`;
        };
      }
      function Rn(t, e, i) {
        return i.length === 1 && i.unshift(Li(e, t, "")), i = Qe(i, (s) => Lh(e, s)), (s, o) => {
          const [r, l, u] = Xr(i, o), f = r.map((v, $) => (v += u * (l[$] - v), $ === 3 ? R(v) : parseInt(v, 10))).join(",");
          s[t] = `rgba(${f})`;
        };
      }
      function Lh(t, e) {
        return Li(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(R);
      }
      function Ce(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = ks(i) || { blur: "px", hue: "deg" }[t] || "%";
        return t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t, i = Qe(i), (o, r) => {
          const l = Ni(i, r);
          o.filter = `${o.filter || ""} ${t}(${l + s})`;
        };
      }
      function Bh(t, e, i) {
        return i.length === 1 && i.unshift(Li(e, t, "")), i = Qe(i), (s, o) => {
          s[t] = Ni(i, o);
        };
      }
      function Rh(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = ks(i), o = qr(e);
        return i = Qe(i.reverse(), (r) => (r = R(r), s === "%" ? r * o / 100 : r)), i.some(([r]) => r) ? (m(e, "strokeDasharray", o), (r, l) => {
          r.strokeDashoffset = Ni(i, l);
        }) : ct;
      }
      function Yr(t, e, i, s) {
        i.length === 1 && i.unshift(0);
        const o = t === "bgy" ? "height" : "width";
        s[t] = Qe(i, (u) => ft(u, o, e));
        const r = ["bgx", "bgy"].filter((u) => (u in s));
        if (r.length === 2 && t === "bgx")
          return ct;
        if (Li(e, "backgroundSize", "") === "cover")
          return jh(t, e, i, s);
        const l = {};
        for (const u of r)
          l[u] = Kr(e, u);
        return Jr(r, l, s);
      }
      function jh(t, e, i, s) {
        const o = zh(e);
        if (!o.width)
          return ct;
        const r = { width: e.offsetWidth, height: e.offsetHeight }, l = ["bgx", "bgy"].filter(($) => ($ in s)), u = {};
        for (const $ of l) {
          const b = s[$].map(([q]) => q), x = Math.min(...b), I = Math.max(...b), O = b.indexOf(x) < b.indexOf(I), B = I - x;
          u[$] = `${(O ? -B : 0) - (O ? x : I)}px`, r[$ === "bgy" ? "height" : "width"] += B;
        }
        const f = Ys.cover(o, r);
        for (const $ of l) {
          const b = $ === "bgy" ? "height" : "width", x = f[b] - r[b];
          u[$] = `max(${Kr(e, $)},-${x}px) + ${u[$]}`;
        }
        const v = Jr(l, u, s);
        return ($, b) => {
          v($, b), $.backgroundSize = `${f.width}px ${f.height}px`, $.backgroundRepeat = "no-repeat";
        };
      }
      function Kr(t, e) {
        return Li(t, `background-position-${e.slice(-1)}`, "");
      }
      function Jr(t, e, i) {
        return function(s, o) {
          for (const r of t) {
            const l = Ni(i[r], o);
            s[`background-position-${r.slice(-1)}`] = `calc(${e[r]} + ${l}px)`;
          }
        };
      }
      const Gr = {}, ys = {};
      function zh(t) {
        const e = m(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
        if (ys[e])
          return ys[e];
        const i = new Image;
        return e && (i.src = e, !i.naturalWidth && !Gr[e]) ? (st(i, "error load", () => {
          ys[e] = jn(i), C(t, Ve("load", false));
        }), Gr[e] = true, jn(i)) : ys[e] = jn(i);
      }
      function jn(t) {
        return { width: t.naturalWidth, height: t.naturalHeight };
      }
      function Qe(t, e = R) {
        const i = [], { length: s } = t;
        let o = 0;
        for (let r = 0;r < s; r++) {
          let [l, u] = nt(t[r]) ? t[r].trim().split(/ (?![^(]*\))/) : [t[r]];
          if (l = e(l), u = u ? R(u) / 100 : null, r === 0 ? u === null ? u = 0 : u && i.push([l, 0]) : r === s - 1 && (u === null ? u = 1 : u !== 1 && (i.push([l, u]), u = 1)), i.push([l, u]), u === null)
            o++;
          else if (o) {
            const f = i[r - o - 1][1], v = (u - f) / (o + 1);
            for (let $ = o;$ > 0; $--)
              i[r - $][1] = f + v * (o - $ + 1);
            o = 0;
          }
        }
        return i;
      }
      function Xr(t, e) {
        const i = E(t.slice(1), ([, s]) => e <= s) + 1;
        return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])];
      }
      function Ni(t, e) {
        const [i, s, o] = Xr(t, e);
        return i + Math.abs(i - s) * o * (i < s ? 1 : -1);
      }
      const Fh = /^-?\d+(?:\.\d+)?(\S+)?/;
      function ks(t, e) {
        var i;
        for (const s of t) {
          const o = (i = s.match) == null ? undefined : i.call(s, Fh);
          if (o)
            return o[1];
        }
        return e;
      }
      function Li(t, e, i) {
        const s = t.style[e], o = m(m(t, e, i), e);
        return t.style[e] = s, o;
      }
      function Zr(t, e) {
        return t.reduce((i, s) => (i[s] = e, i), {});
      }
      function Qr(t, e) {
        return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
      }
      var Uh = { mixins: [Vr], props: { target: String, viewport: Number, easing: Number, start: String, end: String }, data: { target: false, viewport: 1, easing: 1, start: 0, end: 0 }, computed: { target: ({ target: t }, e) => ta(t && Ct(t, e) || e), start({ start: t }) {
        return ft(t, "height", this.target, true);
      }, end({ end: t, viewport: e }) {
        return ft(t || (e = (1 - e) * 100) && `${e}vh+${e}%`, "height", this.target, true);
      } }, observe: [rr(), Ti({ target: ({ target: t }) => t }), Vt({ target: ({ $el: t, target: e }) => [t, e, xe(e, true)] })], update: { read({ percent: t }, e) {
        if (e.has("scroll") || (t = false), !ut(this.$el))
          return false;
        if (!this.matchMedia)
          return;
        const i = t;
        return t = Qr(ds(this.target, this.start, this.end), this.easing), { percent: t, style: i === t ? false : this.getCss(t) };
      }, write({ style: t }) {
        if (!this.matchMedia) {
          this.reset();
          return;
        }
        t && m(this.$el, t);
      }, events: ["scroll", "resize"] } };
      function ta(t) {
        return t ? "offsetTop" in t ? t : ta(J(t)) : document.documentElement;
      }
      var ea = { props: { parallax: Boolean, parallaxTarget: Boolean, parallaxStart: String, parallaxEnd: String, parallaxEasing: Number }, data: { parallax: false, parallaxTarget: false, parallaxStart: 0, parallaxEnd: 0, parallaxEasing: 0 }, observe: [Vt({ target: ({ $el: t, parallaxTarget: e }) => [t, e], filter: ({ parallax: t }) => t }), Ti({ filter: ({ parallax: t }) => t })], computed: { parallaxTarget({ parallaxTarget: t }, e) {
        return t && Ct(t, e) || this.list;
      } }, update: { read() {
        if (!this.parallax)
          return false;
        const t = this.parallaxTarget;
        if (!t)
          return false;
        const e = ft(this.parallaxStart, "height", t, true), i = ft(this.parallaxEnd, "height", t, true), s = Qr(ds(t, e, i), this.parallaxEasing);
        return { parallax: this.getIndexAt(s) };
      }, write({ parallax: t }) {
        const [e, i] = t, s = this.getValidIndex(e + Math.ceil(i)), o = this.slides[e], r = this.slides[s], { triggerShow: l, triggerShown: u, triggerHide: f, triggerHidden: v } = qh(this);
        if (~this.prevIndex)
          for (const b of new Set([this.index, this.prevIndex]))
            w([s, e], b) || (f(this.slides[b]), v(this.slides[b]));
        const $ = this.prevIndex !== e || this.index !== s;
        this.dir = 1, this.prevIndex = e, this.index = s, o !== r && f(o), l(r), $ && u(o), this._translate(o === r ? 1 : i, o, r);
      }, events: ["scroll", "resize"] }, methods: { getIndexAt(t) {
        const e = t * (this.length - 1);
        return [Math.floor(e), e % 1];
      } } };
      function qh(t) {
        const { clsSlideActive: e, clsEnter: i, clsLeave: s } = t;
        return { triggerShow: o, triggerShown: r, triggerHide: l, triggerHidden: u };
        function o(f) {
          L(f, s) && (l(f), u(f)), L(f, e) || (C(f, "beforeitemshow", [t]), C(f, "itemshow", [t]));
        }
        function r(f) {
          L(f, i) && C(f, "itemshown", [t]);
        }
        function l(f) {
          L(f, e) || o(f), L(f, i) && r(f), L(f, s) || (C(f, "beforeitemhide", [t]), C(f, "itemhide", [t]));
        }
        function u(f) {
          L(f, s) && C(f, "itemhidden", [t]);
        }
      }
      var ia = { update: { write() {
        if (this.stack.length || this.dragging || this.parallax)
          return;
        const t = this.getValidIndex();
        !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1);
      }, events: ["resize"] } }, sa = { observe: ps({ target: ({ slides: t }) => t, targets: (t) => t.getAdjacentSlides() }), methods: { getAdjacentSlides() {
        return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
      } } };
      function Wh(t, e, i, { center: s, easing: o, list: r }) {
        const l = t ? Bi(t, r, s) : Bi(e, r, s) + T(e).width * i, u = e ? Bi(e, r, s) : l + T(t).width * i * (ht ? -1 : 1), { promise: f, resolve: v } = kr();
        return { dir: i, show($, b = 0, x) {
          const I = x ? "linear" : o;
          return $ -= Math.round($ * mt(b, -1, 1)), m(r, "transitionProperty", "none"), this.translate(b), m(r, "transitionProperty", ""), b = t ? b : mt(b, 0, 1), Ae(this.getItemIn(), "itemin", { percent: b, duration: $, timing: I, dir: i }), t && Ae(this.getItemIn(true), "itemout", { percent: 1 - b, duration: $, timing: I, dir: i }), X.start(r, { transform: rt(-u * (ht ? -1 : 1), "px") }, $, I).then(v, ct), f;
        }, cancel() {
          return X.cancel(r);
        }, reset() {
          m(r, "transform", "");
        }, async forward($, b = this.percent()) {
          return await this.cancel(), this.show($, b, true);
        }, translate($) {
          if ($ === this.percent())
            return;
          const b = this.getDistance() * i * (ht ? -1 : 1);
          m(r, "transform", rt(mt(-u + (b - b * $), -ti(r), T(r).width) * (ht ? -1 : 1), "px"));
          const x = this.getActives(), I = this.getItemIn(), O = this.getItemIn(true);
          $ = t ? mt($, -1, 1) : 0;
          for (const B of G(r)) {
            const q = w(x, B), _t = B === I, Kt = B === O, re = _t || !Kt && (q || i * (ht ? -1 : 1) === -1 ^ xs(B, r) > xs(t || e));
            Ae(B, `itemtranslate${re ? "in" : "out"}`, { dir: i, percent: Kt ? 1 - $ : _t ? $ : q ? 1 : 0 });
          }
        }, percent() {
          return Math.abs((new DOMMatrix(m(r, "transform")).m41 * (ht ? -1 : 1) + l) / (u - l));
        }, getDistance() {
          return Math.abs(u - l);
        }, getItemIn($ = false) {
          let b = this.getActives(), x = oa(r, Bi(e || t, r, s));
          if ($) {
            const I = b;
            b = x, x = I;
          }
          return x[E(x, (I) => !w(b, I))];
        }, getActives() {
          return oa(r, Bi(t || e, r, s));
        } };
      }
      function Bi(t, e, i) {
        const s = xs(t, e);
        return i ? s - Vh(t, e) : Math.min(s, na(e));
      }
      function na(t) {
        return Math.max(0, ti(t) - T(t).width);
      }
      function ti(t, e) {
        return ve(G(t).slice(0, e), (i) => T(i).width);
      }
      function Vh(t, e) {
        return T(e).width / 2 - T(t).width / 2;
      }
      function xs(t, e) {
        return t && (an(t).left + (ht ? T(t).width - T(e).width : 0)) * (ht ? -1 : 1) || 0;
      }
      function oa(t, e) {
        e -= 1;
        const i = T(t).width, s = e + i + 2;
        return G(t).filter((o) => {
          const r = xs(o, t), l = r + Math.min(T(o).width, i);
          return r >= e && l <= s;
        });
      }
      var Yh = { mixins: [xt, Nr, ia, ea, sa], props: { center: Boolean, sets: Boolean, active: String }, data: { center: false, sets: false, attrItem: "uk-slider-item", selList: ".uk-slider-items", selNav: ".uk-slider-nav", clsContainer: "uk-slider-container", active: "all", Transitioner: Wh }, computed: { finite({ finite: t }) {
        return t || Kh(this.list, this.center);
      }, maxIndex() {
        if (!this.finite || this.center && !this.sets)
          return this.length - 1;
        if (this.center)
          return me(this.sets);
        let t = 0;
        const e = na(this.list), i = E(this.slides, (s) => {
          if (t >= e - 0.005)
            return true;
          t += T(s).width;
        });
        return ~i ? i : this.length - 1;
      }, sets({ sets: t }) {
        if (!t || this.parallax)
          return;
        let e = 0;
        const i = [], s = T(this.list).width;
        for (let o = 0;o < this.length; o++) {
          const r = T(this.slides[o]).width;
          e + r > s && (e = 0), this.center ? e < s / 2 && e + r + T(this.slides[yt(o + 1, this.slides)]).width / 2 > s / 2 && (i.push(o), e = s / 2 - r / 2) : e === 0 && i.push(Math.min(o, this.maxIndex)), e += r;
        }
        if (i.length)
          return i;
      }, transitionOptions() {
        return { center: this.center, list: this.list };
      }, slides() {
        return G(this.list).filter(ut);
      } }, connected() {
        it(this.$el, this.clsContainer, !H(`.${this.clsContainer}`, this.$el));
      }, observe: Vt({ target: ({ slides: t, $el: e }) => [e, ...t] }), update: { write() {
        for (const t of this.navItems) {
          const e = zt(vt(t, this.attrItem));
          e !== false && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !w(this.sets, e));
        }
        this.reorder(), this.parallax || this._translate(1), this.updateActiveClasses();
      }, events: ["resize"] }, events: { beforeitemshow(t) {
        !this.dragging && this.sets && this.stack.length < 2 && !w(this.sets, this.index) && (this.index = this.getValidIndex());
        const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
        if (!this.dragging && e > 1) {
          for (let o = 0;o < e; o++)
            this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
          t.preventDefault();
          return;
        }
        const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex, s = ti(this.list) / this.length;
        this.duration = Lr(s / this.velocity) * (T(this.slides[i]).width / s), this.reorder();
      }, itemshow() {
        ~this.prevIndex && j(this._getTransitioner().getItemIn(), this.clsActive), this.updateActiveClasses(this.prevIndex);
      }, itemshown() {
        this.updateActiveClasses();
      } }, methods: { reorder() {
        if (this.finite) {
          m(this.slides, "order", "");
          return;
        }
        const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
        if (this.slides.forEach((o, r) => m(o, "order", this.dir > 0 && r < t ? 1 : this.dir < 0 && r >= this.index ? -1 : "")), !this.center || !this.length)
          return;
        const e = this.slides[t];
        let i = T(this.list).width / 2 - T(e).width / 2, s = 0;
        for (;i > 0; ) {
          const o = this.getIndex(--s + t, t), r = this.slides[o];
          m(r, "order", o > t ? -2 : -1), i -= T(r).width;
        }
      }, updateActiveClasses(t = this.index) {
        let e = this._getTransitioner(t).getActives();
        this.active !== "all" && (e = [this.slides[this.getValidIndex(t)]]);
        const i = [this.clsActive, !this.sets || w(this.sets, R(this.index)) ? this.clsActivated : ""];
        for (const s of this.slides) {
          const o = w(e, s);
          it(s, i, o), A(s, "aria-hidden", !o);
          for (const r of Q($i, s))
            a(r, "_tabindex") || (r._tabindex = A(r, "tabindex")), A(r, "tabindex", o ? r._tabindex : -1);
        }
      }, getValidIndex(t = this.index, e = this.prevIndex) {
        if (t = this.getIndex(t, e), !this.sets)
          return t;
        let i;
        do {
          if (w(this.sets, t))
            return t;
          i = t, t = this.getIndex(t + this.dir, e);
        } while (t !== i);
        return t;
      }, getAdjacentSlides() {
        const { width: t } = T(this.list), e = -t, i = t * 2, s = T(this.slides[this.index]).width, o = this.center ? t / 2 - s / 2 : 0, r = new Set;
        for (const l of [-1, 1]) {
          let u = o + (l > 0 ? s : 0), f = 0;
          do {
            const v = this.slides[this.getIndex(this.index + l + f++ * l)];
            u += T(v).width * l, r.add(v);
          } while (this.length > f && u > e && u < i);
        }
        return Array.from(r);
      }, getIndexAt(t) {
        let e = -1;
        const i = this.center ? ti(this.list) - (T(this.slides[0]).width / 2 + T(me(this.slides)).width / 2) : ti(this.list, this.maxIndex);
        let s = t * i, o = 0;
        do {
          const r = T(this.slides[++e]).width, l = this.center ? r / 2 + T(this.slides[e + 1]).width / 2 : r;
          o = s / l % 1, s -= l;
        } while (s >= 0 && e < this.maxIndex);
        return [e, o];
      } } };
      function Kh(t, e) {
        if (!t || t.length < 2)
          return true;
        const { width: i } = T(t);
        if (!e)
          return Math.ceil(ti(t)) < Math.trunc(i + Jh(t));
        const s = G(t), o = Math.trunc(i / 2);
        for (const r in s) {
          const l = s[r], u = T(l).width, f = new Set([l]);
          let v = 0;
          for (const $ of [-1, 1]) {
            let b = u / 2, x = 0;
            for (;b < o; ) {
              const I = s[yt(+r + $ + x++ * $, s)];
              if (f.has(I))
                return true;
              b += T(I).width, f.add(I);
            }
            v = Math.max(v, u / 2 + T(s[yt(+r + $, s)]).width / 2 - (b - o));
          }
          if (Math.trunc(v) > ve(s.filter(($) => !f.has($)), ($) => T($).width))
            return true;
        }
        return false;
      }
      function Jh(t) {
        return Math.max(0, ...G(t).map((e) => T(e).width));
      }
      var ra = { mixins: [Vr], beforeConnect() {
        this.item = this.$el.closest(`.${this.$options.id.replace("parallax", "items")} > *`);
      }, disconnected() {
        this.item = null;
      }, events: [{ name: "itemin itemout", self: true, el: ({ item: t }) => t, handler({ type: t, detail: { percent: e, duration: i, timing: s, dir: o } }) {
        ne.read(() => {
          if (!this.matchMedia)
            return;
          const r = this.getCss(la(t, o, e)), l = this.getCss(aa(t) ? 0.5 : o > 0 ? 1 : 0);
          ne.write(() => {
            m(this.$el, r), X.start(this.$el, l, i, s).catch(ct);
          });
        });
      } }, { name: "transitioncanceled transitionend", self: true, el: ({ item: t }) => t, handler() {
        X.cancel(this.$el);
      } }, { name: "itemtranslatein itemtranslateout", self: true, el: ({ item: t }) => t, handler({ type: t, detail: { percent: e, dir: i } }) {
        ne.read(() => {
          if (!this.matchMedia) {
            this.reset();
            return;
          }
          const s = this.getCss(la(t, i, e));
          ne.write(() => m(this.$el, s));
        });
      } }] };
      function aa(t) {
        return _(t, "in");
      }
      function la(t, e, i) {
        return i /= 2, aa(t) ^ e < 0 ? i : 1 - i;
      }
      var Gh = { mixins: [xt, Br, ia, ea, sa], props: { ratio: String, minHeight: String, maxHeight: String }, data: { ratio: "16:9", minHeight: undefined, maxHeight: undefined, selList: ".uk-slideshow-items", attrItem: "uk-slideshow-item", selNav: ".uk-slideshow-nav", Animations: Ih }, watch: { list(t) {
        m(t, { aspectRatio: this.ratio ? this.ratio.replace(":", "/") : undefined, minHeight: this.minHeight, maxHeight: this.maxHeight, width: "100%" });
      } }, methods: { getAdjacentSlides() {
        return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
      } } }, Xh = { mixins: [xt, pr], props: { group: String, threshold: Number, clsItem: String, clsPlaceholder: String, clsDrag: String, clsDragState: String, clsBase: String, clsNoDrag: String, clsEmpty: String, clsCustom: String, handle: String }, data: { group: false, threshold: 5, clsItem: "uk-sortable-item", clsPlaceholder: "uk-sortable-placeholder", clsDrag: "uk-sortable-drag", clsDragState: "uk-drag", clsBase: "uk-sortable", clsNoDrag: "uk-sortable-nodrag", clsEmpty: "uk-sortable-empty", clsCustom: "", handle: false, pos: {} }, events: { name: It, passive: false, handler(t) {
        this.init(t);
      } }, computed: { target: (t, e) => (e.tBodies || [e])[0], items() {
        return G(this.target);
      }, isEmpty() {
        return !this.items.length;
      }, handles({ handle: t }, e) {
        return t ? Q(t, e) : this.items;
      } }, watch: { isEmpty(t) {
        it(this.target, this.clsEmpty, t);
      }, handles(t, e) {
        m(e, { touchAction: "", userSelect: "" }), m(t, { touchAction: "none", userSelect: "none" });
      } }, update: { write(t) {
        if (!this.drag || !J(this.placeholder))
          return;
        const { pos: { x: e, y: i }, origin: { offsetTop: s, offsetLeft: o }, placeholder: r } = this;
        m(this.drag, { top: i - s, left: e - o });
        const l = this.getSortable(document.elementFromPoint(e, i));
        if (!l)
          return;
        const { items: u } = l;
        if (u.some(X.inProgress))
          return;
        const f = eu(u, { x: e, y: i });
        if (u.length && (!f || f === r))
          return;
        const v = this.getSortable(r), $ = iu(l.target, f, r, e, i, l === v && t.moved !== f);
        $ !== false && ($ && r === $ || (l !== v ? (v.remove(r), t.moved = f) : delete t.moved, l.insert(r, $), this.touched.add(l)));
      }, events: ["move"] }, methods: { init(t) {
        const { target: e, button: i, defaultPrevented: s } = t, [o] = this.items.filter((r) => r.contains(e));
        !o || s || i > 0 || Qi(e) || e.closest(`.${this.clsNoDrag}`) || this.handle && !e.closest(this.handle) || (t.preventDefault(), this.pos = Ut(t), this.touched = new Set([this]), this.placeholder = o, this.origin = { target: e, index: Ft(o), ...this.pos }, z(document, Xi, this.move), z(document, ee, this.end), this.threshold || this.start(t));
      }, start(t) {
        this.drag = tu(this.$container, this.placeholder);
        const { left: e, top: i } = T(this.placeholder);
        V(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - i }), j(this.drag, this.clsDrag, this.clsCustom), j(this.placeholder, this.clsPlaceholder), j(this.items, this.clsItem), j(document.documentElement, this.clsDragState), C(this.$el, "start", [this, this.placeholder]), Zh(this.pos), this.move(t);
      }, move: nu(function(t) {
        V(this.pos, Ut(t)), !this.drag && (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t), this.$emit("move");
      }), end() {
        if (ye(document, Xi, this.move), ye(document, ee, this.end), !this.drag)
          return;
        Qh();
        const t = this.getSortable(this.placeholder);
        this === t ? this.origin.index !== Ft(this.placeholder) && C(this.$el, "moved", [this, this.placeholder]) : (C(t.$el, "added", [t, this.placeholder]), C(this.$el, "removed", [this, this.placeholder])), C(this.$el, "stop", [this, this.placeholder]), $t(this.drag), this.drag = null;
        for (const { clsPlaceholder: e, clsItem: i } of this.touched)
          for (const s of this.touched)
            Z(s.items, e, i);
        this.touched = null, Z(document.documentElement, this.clsDragState);
      }, insert(t, e) {
        j(this.items, this.clsItem), e && e.previousElementSibling !== t ? this.animate(() => ss(e, t)) : !e && this.target.lastElementChild !== t && this.animate(() => ot(this.target, t));
      }, remove(t) {
        this.target.contains(t) && this.animate(() => $t(t));
      }, getSortable(t) {
        do {
          const e = this.$getComponent(t, "sortable");
          if (e && (e === this || this.group !== false && e.group === this.group))
            return e;
        } while (t = J(t));
      } } };
      let ca;
      function Zh(t) {
        let e = Date.now();
        ca = setInterval(() => {
          let { x: i, y: s } = t;
          s += document.scrollingElement.scrollTop;
          const o = (Date.now() - e) * 0.3;
          e = Date.now(), Ke(document.elementFromPoint(i, t.y)).reverse().some((r) => {
            let { scrollTop: l, scrollHeight: u } = r;
            const { top: f, bottom: v, height: $ } = Tt(r);
            if (f < s && f + 35 > s)
              l -= o;
            else if (v > s && v - 35 < s)
              l += o;
            else
              return;
            if (l > 0 && l < u - $)
              return r.scrollTop = l, true;
          });
        }, 15);
      }
      function Qh() {
        clearInterval(ca);
      }
      function tu(t, e) {
        let i;
        if (et(e, "li", "tr")) {
          i = H("<div>"), ot(i, e.cloneNode(true).children);
          for (const s of e.getAttributeNames())
            A(i, s, e.getAttribute(s));
        } else
          i = e.cloneNode(true);
        return ot(t, i), m(i, "margin", "0", "important"), m(i, { boxSizing: "border-box", width: e.offsetWidth, height: e.offsetHeight, padding: m(e, "padding") }), bt(i.firstElementChild, bt(e.firstElementChild)), i;
      }
      function eu(t, e) {
        return t[E(t, (i) => Gi(e, T(i)))];
      }
      function iu(t, e, i, s, o, r) {
        if (!G(t).length)
          return;
        const l = T(e);
        if (!r)
          return su(t, i) || o < l.top + l.height / 2 ? e : e.nextElementSibling;
        const u = T(i), f = ha([l.top, l.bottom], [u.top, u.bottom]), [v, $, b, x] = f ? [s, "width", "left", "right"] : [o, "height", "top", "bottom"], I = u[$] < l[$] ? l[$] - u[$] : 0;
        return u[b] < l[b] ? I && v < l[b] + I ? false : e.nextElementSibling : I && v > l[x] - I ? false : e;
      }
      function su(t, e) {
        const i = G(t).length === 1;
        i && ot(t, e);
        const s = G(t), o = s.some((r, l) => {
          const u = T(r);
          return s.slice(l + 1).some((f) => {
            const v = T(f);
            return !ha([u.left, u.right], [v.left, v.right]);
          });
        });
        return i && $t(e), o;
      }
      function ha(t, e) {
        return t[1] > e[0] && e[1] > t[0];
      }
      function nu(t) {
        let e;
        return function(...i) {
          e || (e = true, t.call(this, ...i), requestAnimationFrame(() => e = false));
        };
      }
      var ou = { mixins: [Oi, _e, wr], data: { pos: "top", animation: ["uk-anmt-scale-up"], duration: 100, cls: "uk-active" }, connected() {
        ru(this.$el);
      }, disconnected() {
        this.hide();
      }, methods: { show() {
        if (this.isToggled(this.tooltip || null))
          return;
        const { delay: t = 0, title: e } = lu(this.$options);
        if (!e)
          return;
        const i = A(this.$el, "title"), s = z(this.$el, ["blur", Ue], (r) => !Mt(r) && this.hide());
        this.reset = () => {
          A(this.$el, { title: i, "aria-describedby": null }), s();
        };
        const o = Ie(this);
        A(this.$el, { title: null, "aria-describedby": o }), clearTimeout(this.showTimer), this.showTimer = setTimeout(() => this._show(e, o), t);
      }, async hide() {
        var t;
        Y(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, false, false), (t = this.reset) == null || t.call(this), $t(this.tooltip), this.tooltip = null);
      }, async _show(t, e) {
        this.tooltip = ot(this.container, `<div id="${e}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${t}</div> </div>`), z(this.tooltip, "toggled", (i, s) => {
          if (!s)
            return;
          const o = () => this.positionAt(this.tooltip, this.$el);
          o();
          const [r, l] = au(this.tooltip, this.$el, this.pos);
          this.origin = this.axis === "y" ? `${as(r)}-${l}` : `${l}-${as(r)}`;
          const u = [st(document, `keydown ${It}`, this.hide, false, (f) => f.type === It && !this.$el.contains(f.target) || f.type === "keydown" && f.keyCode === K.ESC), z([document, ...Se(this.$el)], "scroll", o, { passive: true })];
          st(this.tooltip, "hide", () => u.forEach((f) => f()), { self: true });
        }), await this.toggleElement(this.tooltip, true) || this.hide();
      } }, events: { [`focus ${we} ${It}`](t) {
        (!Mt(t) || t.type === It) && document.readyState !== "loading" && this.show();
      } } };
      function ru(t) {
        ts(t) || A(t, "tabindex", "0");
      }
      function au(t, e, [i, s]) {
        const o = U(t), r = U(e), l = [["left", "right"], ["top", "bottom"]];
        for (const f of l) {
          if (o[f[0]] >= r[f[1]]) {
            i = f[1];
            break;
          }
          if (o[f[1]] <= r[f[0]]) {
            i = f[0];
            break;
          }
        }
        return s = (w(l[0], i) ? l[1] : l[0]).find((f) => o[f] === r[f]) || "center", [i, s];
      }
      function lu(t) {
        const { el: e, id: i, data: s } = t;
        return ["delay", "title"].reduce((o, r) => ({ [r]: vt(e, r), ...o }), { ...Je(vt(e, i), ["title"]), ...s });
      }
      var cu = Object.freeze({ __proto__: null, Filter: Hc, Lightbox: Ph, LightboxPanel: jr, Notification: Mh, Parallax: Uh, Slider: Yh, SliderParallax: ra, Slideshow: Gh, SlideshowParallax: ra, Sortable: Xh, Tooltip: ou });
      function hu(t) {
        be && window.MutationObserver && (document.body ? requestAnimationFrame(() => ua(t)) : new MutationObserver((e, i) => {
          document.body && (ua(t), i.disconnect());
        }).observe(document.documentElement, { childList: true }));
      }
      function ua(t) {
        C(document, "uikit:init", t), document.body && se(document.body, da), new MutationObserver(uu).observe(document, { subtree: true, childList: true, attributes: true }), t._initialized = true;
      }
      function uu(t) {
        var e;
        for (const { addedNodes: i, removedNodes: s, target: o, attributeName: r } of t) {
          for (const u of i)
            se(u, da);
          for (const u of s)
            se(u, du);
          const l = r && fa(r);
          l && (te(o, r) ? Mi(l, o) : (e = vs(o, l)) == null || e.$destroy());
        }
      }
      function da(t) {
        const e = Hi(t);
        for (const i in e)
          Ln(e[i]);
        for (const i of t.getAttributeNames()) {
          const s = fa(i);
          s && Mi(s, t);
        }
      }
      function du(t) {
        const e = Hi(t);
        for (const i in e)
          Bn(e[i]);
      }
      function fa(t) {
        y(t, "data-") && (t = t.slice(5));
        const e = Xe[t];
        return e && (e.options || e).name;
      }
      yh(St), kh(St);
      var pa = { mixins: [xt, _e], props: { animation: Boolean, targets: String, active: null, collapsible: Boolean, multiple: Boolean, toggle: String, content: String, offset: Number }, data: { targets: "> *", active: false, animation: true, collapsible: true, multiple: false, clsOpen: "uk-open", toggle: "> .uk-accordion-title", content: "> .uk-accordion-content", offset: 0 }, computed: { items: ({ targets: t }, e) => Q(t, e), toggles({ toggle: t }) {
        return this.items.map((e) => H(t, e));
      }, contents({ content: t }) {
        return this.items.map((e) => {
          var i;
          return ((i = e._wrapper) == null ? undefined : i.firstElementChild) || H(t, e);
        });
      } }, watch: { items(t, e) {
        if (e || L(t, this.clsOpen))
          return;
        const i = this.active !== false && t[Number(this.active)] || !this.collapsible && t[0];
        i && this.toggle(i, false);
      }, toggles() {
        this.$emit();
      }, contents(t) {
        for (const e of t) {
          const i = L(this.items.find((s) => s.contains(e)), this.clsOpen);
          Ss(e, !i);
        }
        this.$emit();
      } }, observe: ps(), events: [{ name: "click keydown", delegate: ({ targets: t, $props: e }) => `${t} ${e.toggle}`, async handler(t) {
        var e;
        t.type === "keydown" && t.keyCode !== K.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = pu(t.target), await this.toggle(Ft(this.toggles, t.current)), this._off());
      } }, { name: "shown hidden", self: true, delegate: ({ targets: t }) => t, handler() {
        this.$emit();
      } }], update() {
        const t = bi(this.items, `.${this.clsOpen}`);
        for (const e in this.items) {
          const i = this.toggles[e], s = this.contents[e];
          if (!i || !s)
            continue;
          i.id = Ie(this, i), s.id = Ie(this, s);
          const o = w(t, this.items[e]);
          A(i, { role: et(i, "a") ? "button" : null, "aria-controls": s.id, "aria-expanded": o, "aria-disabled": !this.collapsible && t.length < 2 && o }), A(s, { role: "region", "aria-labelledby": i.id }), et(s, "ul") && A(G(s), "role", "presentation");
        }
      }, methods: { toggle(t, e) {
        t = this.items[yt(t, this.items)];
        let i = [t];
        const s = bi(this.items, `.${this.clsOpen}`);
        if (!this.multiple && !w(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && w(s, t)))
          return Promise.all(i.map((o) => this.toggleElement(o, !w(s, o), (r, l) => {
            if (it(r, this.clsOpen, l), e === false || !this.animation) {
              Ss(H(this.content, r), !l);
              return;
            }
            return fu(r, l, this);
          })));
      } } };
      function Ss(t, e) {
        t && (t.hidden = e);
      }
      async function fu(t, e, { content: i, duration: s, velocity: o, transition: r }) {
        var l;
        i = ((l = t._wrapper) == null ? undefined : l.firstElementChild) || H(i, t), t._wrapper || (t._wrapper = xi(i, "<div>"));
        const u = t._wrapper;
        m(u, "overflow", "hidden");
        const f = R(m(u, "height"));
        await X.cancel(u), Ss(i, false);
        const v = ve(["marginTop", "marginBottom"], (b) => m(i, b)) + T(i).height, $ = f / v;
        s = (o * v + s) * (e ? 1 - $ : $), m(u, "height", f), await X.start(u, { height: e ? v : 0 }, s, r), Si(i), delete t._wrapper, e || Ss(i, true);
      }
      function pu(t) {
        const e = xe(t, true);
        let i;
        return function s() {
          i = requestAnimationFrame(() => {
            const { top: o } = T(t);
            o < 0 && (e.scrollTop += o), s();
          });
        }(), () => requestAnimationFrame(() => cancelAnimationFrame(i));
      }
      var gu = { mixins: [xt, _e], args: "animation", props: { animation: Boolean, close: String }, data: { animation: true, selClose: ".uk-alert-close", duration: 150 }, events: { name: "click", delegate: ({ selClose: t }) => t, handler(t) {
        t.preventDefault(), this.close();
      } }, methods: { async close() {
        await this.toggleElement(this.$el, false, mu), this.$destroy(true);
      } } };
      function mu(t, e, { duration: i, transition: s, velocity: o }) {
        const r = R(m(t, "height"));
        return m(t, "height", r), X.start(t, { height: 0, marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0, borderTop: 0, borderBottom: 0, opacity: 0 }, o * r + i, s);
      }
      var ga = { args: "autoplay", props: { automute: Boolean, autoplay: Boolean }, data: { automute: false, autoplay: true }, beforeConnect() {
        this.autoplay === "inview" && !te(this.$el, "preload") && (this.$el.preload = "none"), et(this.$el, "iframe") && !te(this.$el, "allow") && (this.$el.allow = "autoplay"), this.autoplay === "hover" && (et(this.$el, "video") ? this.$el.tabindex = 0 : this.autoplay = true), this.automute && Wo(this.$el);
      }, events: [{ name: `${we} focusin`, filter: ({ autoplay: t }) => w(t, "hover"), handler(t) {
        !Mt(t) || !vu(this.$el) ? fn(this.$el) : us(this.$el);
      } }, { name: `${Ue} focusout`, filter: ({ autoplay: t }) => w(t, "hover"), handler(t) {
        Mt(t) || us(this.$el);
      } }], observe: [Ci({ filter: ({ autoplay: t }) => t !== "hover", handler([{ isIntersecting: t }]) {
        document.fullscreenElement || (t ? this.autoplay && fn(this.$el) : us(this.$el));
      }, args: { intersecting: false }, options: ({ $el: t, autoplay: e }) => ({ root: e === "inview" ? null : J(t).closest(":not(a)") }) })] };
      function vu(t) {
        return !t.paused && !t.ended;
      }
      var $u = { mixins: [ga], props: { width: Number, height: Number }, data: { automute: true }, created() {
        this.useObjectFit = et(this.$el, "img", "video");
      }, observe: Vt({ target: ({ $el: t }) => ma(t) || J(t), filter: ({ useObjectFit: t }) => !t }), update: { read() {
        if (this.useObjectFit)
          return false;
        const { ratio: t, cover: e } = Ys, { $el: i, width: s, height: o } = this;
        let r = { width: s, height: o };
        if (!s || !o) {
          const v = { width: i.naturalWidth || i.videoWidth || i.clientWidth, height: i.naturalHeight || i.videoHeight || i.clientHeight };
          s ? r = t(v, "width", s) : o ? r = t(v, "height", o) : r = v;
        }
        const { offsetHeight: l, offsetWidth: u } = ma(i) || J(i), f = e(r, { width: u, height: l });
        return !f.width || !f.height ? false : f;
      }, write({ height: t, width: e }) {
        m(this.$el, { height: t, width: e });
      }, events: ["resize"] } };
      function ma(t) {
        for (;t = J(t); )
          if (m(t, "position") !== "static")
            return t;
      }
      let gt;
      var va = { mixins: [Oi, wr, _e], args: "pos", props: { mode: "list", toggle: Boolean, boundary: Boolean, boundaryX: Boolean, boundaryY: Boolean, target: Boolean, targetX: Boolean, targetY: Boolean, stretch: Boolean, delayShow: Number, delayHide: Number, autoUpdate: Boolean, clsDrop: String, animateOut: Boolean, bgScroll: Boolean, closeOnScroll: Boolean }, data: { mode: ["click", "hover"], toggle: "- *", boundary: false, boundaryX: false, boundaryY: false, target: false, targetX: false, targetY: false, stretch: false, delayShow: 0, delayHide: 800, autoUpdate: true, clsDrop: false, animateOut: false, bgScroll: true, animation: ["uk-anmt-fade"], cls: "uk-open", container: false, closeOnScroll: false }, computed: { boundary({ boundary: t, boundaryX: e, boundaryY: i }, s) {
        return [Ct(e || t, s) || window, Ct(i || t, s) || window];
      }, target({ target: t, targetX: e, targetY: i }, s) {
        return e || (e = t || this.targetEl), i || (i = t || this.targetEl), [e === true ? window : Ct(e, s), i === true ? window : Ct(i, s)];
      } }, created() {
        this.tracker = new Fo;
      }, beforeConnect() {
        this.clsDrop = this.$props.clsDrop || this.$options.id;
      }, connected() {
        j(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = wu(this)), this._style = qs(this.$el.style, ["width", "height"]);
      }, disconnected() {
        this.isActive() && (this.hide(false), gt = null), m(this.$el, this._style);
      }, events: [{ name: "click", delegate: () => ".uk-drop-close", handler(t) {
        t.preventDefault(), this.hide(false);
      } }, { name: "click", delegate: () => 'a[href*="#"]', handler({ defaultPrevented: t, current: e }) {
        const { hash: i } = e;
        !t && i && We(e) && !this.$el.contains(H(i)) && this.hide(false);
      } }, { name: "beforescroll", handler() {
        this.hide(false);
      } }, { name: "toggle", self: true, handler(t, e) {
        t.preventDefault(), this.isToggled() ? this.hide(false) : this.show(e == null ? undefined : e.$el, false);
      } }, { name: "toggleshow", self: true, handler(t, e) {
        t.preventDefault(), this.show(e == null ? undefined : e.$el);
      } }, { name: "togglehide", self: true, handler(t) {
        t.preventDefault(), Y(this.$el, ":focus,:hover") || this.hide();
      } }, { name: `${we} focusin`, filter: ({ mode: t }) => w(t, "hover"), handler(t) {
        Mt(t) || this.clearTimers();
      } }, { name: `${Ue} focusout`, filter: ({ mode: t }) => w(t, "hover"), handler(t) {
        !Mt(t) && t.relatedTarget && this.hide();
      } }, { name: "toggled", self: true, handler(t, e) {
        e && (this.clearTimers(), this.position());
      } }, { name: "show", self: true, handler() {
        gt = this, this.tracker.init(), A(this.targetEl, "aria-expanded", true);
        const t = [yu(this), ku(this), Su(this), this.autoUpdate && $a(this), this.closeOnScroll && xu(this)];
        st(this.$el, "hide", () => t.forEach((e) => e && e()), { self: true }), this.bgScroll || st(this.$el, "hidden", br(this.$el), { self: true });
      } }, { name: "beforehide", self: true, handler() {
        this.clearTimers();
      } }, { name: "hide", handler({ target: t }) {
        if (this.$el !== t) {
          gt = gt === null && this.$el.contains(t) && this.isToggled() ? this : gt;
          return;
        }
        gt = this.isActive() ? null : gt, this.tracker.cancel(), A(this.targetEl, "aria-expanded", null);
      } }], update: { write() {
        this.isToggled() && !L(this.$el, this.clsEnter) && this.position();
      } }, methods: { show(t = this.targetEl, e = true) {
        if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(false, false), this.targetEl = t, this.clearTimers(), !this.isActive()) {
          if (gt) {
            if (e && gt.isDelaying()) {
              this.showTimer = setTimeout(() => Y(t, ":hover") && this.show(), 10);
              return;
            }
            let i;
            for (;gt && i !== gt && !gt.$el.contains(this.$el); )
              i = gt, gt.hide(false, false);
          }
          this.container && J(this.$el) !== this.container && ot(this.container, this.$el), this.showTimer = setTimeout(() => this.toggleElement(this.$el, true), e && this.delayShow || 0);
        }
      }, hide(t = true, e = true) {
        const i = () => this.toggleElement(this.$el, false, this.animateOut && e);
        this.clearTimers(), this.isDelayedHide = t, t && this.isDelaying() ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i();
      }, clearTimers() {
        clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null;
      }, isActive() {
        return gt === this;
      }, isDelaying() {
        return [this.$el, ...Q(".uk-drop", this.$el)].some((t) => this.tracker.movesTo(t));
      }, position() {
        const t = On(this.$el);
        Z(this.$el, "uk-drop-stack"), m(this.$el, this._style), this.$el.hidden = true;
        const e = this.target.map((r) => bu(this.$el, r)), i = this.getViewportOffset(this.$el), s = [[0, ["x", "width", "left", "right"]], [1, ["y", "height", "top", "bottom"]]];
        for (const [r, [l, u]] of s)
          this.axis !== l && w([l, true], this.stretch) && m(this.$el, { [u]: Math.min(U(this.boundary[r])[u], e[r][u] - 2 * i), [`overflow-${l}`]: "auto" });
        const o = e[0].width - 2 * i;
        this.$el.hidden = false, m(this.$el, "maxWidth", ""), this.$el.offsetWidth > o && j(this.$el, "uk-drop-stack"), m(this.$el, "maxWidth", o), this.positionAt(this.$el, this.target, this.boundary);
        for (const [r, [l, u, f, v]] of s)
          if (this.axis === l && w([l, true], this.stretch)) {
            const $ = Math.abs(this.getPositionOffset()), b = U(this.target[r]), x = U(this.$el);
            m(this.$el, { [u]: (b[f] > x[f] ? b[this.inset ? v : f] - Math.max(U(this.boundary[r])[f], e[r][f] + i) : Math.min(U(this.boundary[r])[v], e[r][v] - i) - b[this.inset ? f : v]) - $, [`overflow-${l}`]: "auto" }), this.positionAt(this.$el, this.target, this.boundary);
          }
        t();
      } } };
      function bu(t, e) {
        return Tt(Se(e).find((i) => i.contains(t)));
      }
      function wu(t) {
        const { $el: e } = t.$create("toggle", Ct(t.toggle, t.$el), { target: t.$el, mode: t.mode });
        return A(e, "aria-haspopup", true), e;
      }
      function yu(t) {
        const e = () => t.$emit(), i = [un(e), hs(Se(t.$el).concat(t.target), e)];
        return () => i.map((s) => s.disconnect());
      }
      function $a(t, e = () => t.$emit()) {
        return z([document, ...Se(t.$el)], "scroll", e, { passive: true });
      }
      function ku(t) {
        return z(document, "keydown", (e) => {
          e.keyCode === K.ESC && t.hide(false);
        });
      }
      function xu(t) {
        return $a(t, () => t.hide(false));
      }
      function Su(t) {
        return z(document, It, ({ target: e }) => {
          t.$el.contains(e) || st(document, `${ee} ${Zi} scroll`, ({ defaultPrevented: i, type: s, target: o }) => {
            var r;
            !i && s === ee && e === o && !((r = t.targetEl) != null && r.contains(e)) && t.hide(false);
          }, true);
        });
      }
      var _u = { mixins: [xt, Oi], props: { align: String, clsDrop: String, boundary: Boolean, dropbar: Boolean, dropbarAnchor: Boolean, duration: Number, mode: Boolean, offset: Boolean, stretch: Boolean, delayShow: Boolean, delayHide: Boolean, target: Boolean, targetX: Boolean, targetY: Boolean, animation: Boolean, animateOut: Boolean, closeOnScroll: Boolean }, data: { align: ht ? "right" : "left", clsDrop: "uk-dropdown", clsDropbar: "uk-dropnav-dropbar", boundary: true, dropbar: false, dropbarAnchor: false, duration: 200, container: false, selNavItem: "> li > a, > ul > li > a" }, computed: { dropbarAnchor: ({ dropbarAnchor: t }, e) => Ct(t, e) || e, dropbar({ dropbar: t }) {
        return t ? (t = this._dropbar || Ct(t, this.$el) || H(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = H("<div></div>"))) : null;
      }, dropContainer(t, e) {
        return this.container || e;
      }, dropdowns({ clsDrop: t }, e) {
        var i;
        const s = Q(`.${t}`, e);
        if (this.dropContainer !== e)
          for (const o of Q(`.${t}`, this.dropContainer)) {
            const r = (i = this.getDropdown(o)) == null ? undefined : i.targetEl;
            !w(s, o) && r && this.$el.contains(r) && s.push(o);
          }
        return s;
      }, items({ selNavItem: t }, e) {
        return Q(t, e);
      } }, watch: { dropbar(t) {
        j(t, "uk-dropbar", "uk-dropbar-top", this.clsDropbar, `uk-${this.$options.name}-dropbar`);
      }, dropdowns() {
        this.initializeDropdowns();
      } }, connected() {
        this.initializeDropdowns();
      }, disconnected() {
        $t(this._dropbar), delete this._dropbar;
      }, events: [{ name: "mouseover focusin", delegate: ({ selNavItem: t }) => t, handler({ current: t }) {
        const e = this.getActive();
        e && w(e.mode, "hover") && e.targetEl && !t.contains(e.targetEl) && !e.isDelaying() && e.hide(false);
      } }, { name: "keydown", self: true, delegate: ({ selNavItem: t }) => t, handler(t) {
        var e;
        const { current: i, keyCode: s } = t, o = this.getActive();
        s === K.DOWN && (o == null ? undefined : o.targetEl) === i && (t.preventDefault(), (e = H($i, o.$el)) == null || e.focus()), ba(t, this.items, o);
      } }, { name: "keydown", el: ({ dropContainer: t }) => t, delegate: ({ clsDrop: t }) => `.${t}`, handler(t) {
        var e;
        const { current: i, keyCode: s, target: o } = t;
        if (Qi(o) || !w(this.dropdowns, i))
          return;
        const r = this.getActive();
        let l = -1;
        if (s === K.HOME ? l = 0 : s === K.END ? l = "last" : s === K.UP ? l = "previous" : s === K.DOWN ? l = "next" : s === K.ESC && ((e = r.targetEl) == null || e.focus()), ~l) {
          t.preventDefault();
          const u = Q($i, i);
          u[yt(l, u, E(u, (f) => Y(f, ":focus")))].focus();
        }
        ba(t, this.items, r);
      } }, { name: "mouseleave", el: ({ dropbar: t }) => t, filter: ({ dropbar: t }) => t, handler() {
        const t = this.getActive();
        t && w(t.mode, "hover") && !this.dropdowns.some((e) => Y(e, ":hover")) && t.hide();
      } }, { name: "beforeshow", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler({ target: t }) {
        this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && ns(this.dropbarAnchor, this.dropbar), j(t, `${this.clsDrop}-dropbar`));
      } }, { name: "show", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler({ target: t }) {
        if (!this.isDropbarDrop(t))
          return;
        const e = this.getDropdown(t), i = () => {
          const s = Math.max(...qe(t, `.${this.clsDrop}`).concat(t).map((o) => U(o).bottom));
          U(this.dropbar, { left: U(this.dropbar).left, top: this.getDropbarOffset(e.getPositionOffset()) }), this.transitionTo(s - U(this.dropbar).top + R(m(t, "marginBottom")), t);
        };
        this._observer = hs([e.$el, ...e.target], i), i();
      } }, { name: "beforehide", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler(t) {
        const e = this.getActive();
        Y(this.dropbar, ":hover") && e.$el === t.target && this.isDropbarDrop(e.$el) && w(e.mode, "hover") && e.isDelayedHide && !this.items.some((i) => e.targetEl !== i && Y(i, ":focus")) && t.preventDefault();
      } }, { name: "hide", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler({ target: t }) {
        var e;
        if (!this.isDropbarDrop(t))
          return;
        (e = this._observer) == null || e.disconnect();
        const i = this.getActive();
        (!i || i.$el === t) && this.transitionTo(0);
      } }], methods: { getActive() {
        var t;
        return w(this.dropdowns, (t = gt) == null ? undefined : t.$el) && gt;
      }, async transitionTo(t, e) {
        const { dropbar: i } = this, s = bt(i);
        if (e = s < t && e, await X.cancel([e, i]), e) {
          const o = U(e).top - U(i).top - s;
          o > 0 && m(e, "transitionDelay", `${o / t * this.duration}ms`);
        }
        m(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`), bt(i, s), await Promise.all([X.start(i, { height: t }, this.duration), X.start(e, { clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)` }, this.duration).finally(() => m(e, { clipPath: "", transitionDelay: "" }))]).catch(ct);
      }, getDropdown(t) {
        return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
      }, isDropbarDrop(t) {
        return w(this.dropdowns, t) && L(t, this.clsDrop);
      }, getDropbarOffset(t) {
        const { $el: e, target: i, targetY: s } = this, { top: o, height: r } = U(Ct(s || i || e, e));
        return o + r + t;
      }, initializeDropdowns() {
        this.$create("drop", this.dropdowns.filter((t) => !this.getDropdown(t)), { ...this.$props, flip: false, shift: true, pos: `bottom-${this.align}`, boundary: this.boundary === true ? this.$el : this.boundary });
      } } };
      function ba(t, e, i) {
        var s, o, r;
        const { current: l, keyCode: u } = t;
        let f = -1;
        u === K.HOME ? f = 0 : u === K.END ? f = "last" : u === K.LEFT ? f = "previous" : u === K.RIGHT ? f = "next" : u === K.TAB && ((s = i.targetEl) == null || s.focus(), (o = i.hide) == null || o.call(i, false)), ~f && (t.preventDefault(), (r = i.hide) == null || r.call(i, false), e[yt(f, e, e.indexOf(i.targetEl || l))].focus());
      }
      var Au = { mixins: [xt], args: "target", props: { target: Boolean }, data: { target: false }, computed: { input: (t, e) => H(vi, e), state() {
        return this.input.nextElementSibling;
      }, target({ target: t }, e) {
        return t && (t === true && J(this.input) === e && this.input.nextElementSibling || H(t, e));
      } }, update() {
        var t;
        const { target: e, input: i } = this;
        if (!e)
          return;
        let s;
        const o = Qi(e) ? "value" : "textContent", r = e[o], l = (t = i.files) != null && t[0] ? i.files[0].name : Y(i, "select") && (s = Q("option", i).filter((u) => u.selected)[0]) ? s.textContent : i.value;
        r !== l && (e[o] = l);
      }, events: [{ name: "change", handler() {
        this.$emit();
      } }, { name: "reset", el: ({ $el: t }) => t.closest("form"), handler() {
        this.$emit();
      } }] }, Eu = { extends: Tc, mixins: [xt], name: "grid", props: { masonry: Boolean, parallax: String, parallaxStart: String, parallaxEnd: String, parallaxJustify: Boolean }, data: { margin: "uk-grid-margin", clsStack: "uk-grid-stack", masonry: false, parallax: 0, parallaxStart: 0, parallaxEnd: 0, parallaxJustify: false }, connected() {
        this.masonry && j(this.$el, "uk-flex-top", "uk-flex-wrap-top");
      }, observe: Ti({ filter: ({ parallax: t, parallaxJustify: e }) => t || e }), update: [{ write({ rows: t }) {
        it(this.$el, this.clsStack, !t.some((e) => e.length > 1));
      }, events: ["resize"] }, { read(t) {
        const { rows: e } = t;
        let { masonry: i, parallax: s, parallaxJustify: o, margin: r } = this;
        if (s = Math.max(0, ft(s)), !(i || s || o) || wa(e) || e[0].some((O, B) => e.some((q) => q[B] && q[B].offsetWidth !== O.offsetWidth)))
          return t.translates = t.scrollColumns = false;
        let l = Cu(e, r), u, f;
        i ? [u, f] = Iu(e, l, i === "next") : u = Tu(e);
        const v = u.map((O) => ve(O, "offsetHeight") + l * (O.length - 1)), $ = Math.max(0, ...v);
        let b, x, I;
        return (s || o) && (b = v.map((O, B) => o ? $ - O + s : s / (B % 2 || 8)), o || (s = Math.max(...v.map((O, B) => O + b[B] - $))), x = ft(this.parallaxStart, "height", this.$el, true), I = ft(this.parallaxEnd, "height", this.$el, true)), { columns: u, translates: f, scrollColumns: b, parallaxStart: x, parallaxEnd: I, padding: s, height: f ? $ : "" };
      }, write({ height: t, padding: e }) {
        m(this.$el, "paddingBottom", e || ""), t !== false && m(this.$el, "height", t);
      }, events: ["resize"] }, { read({ rows: t, scrollColumns: e, parallaxStart: i, parallaxEnd: s }) {
        return { scrolled: e && !wa(t) ? ds(this.$el, i, s) : false };
      }, write({ columns: t, scrolled: e, scrollColumns: i, translates: s }) {
        !e && !s || t.forEach((o, r) => o.forEach((l, u) => {
          let [f, v] = s && s[r][u] || [0, 0];
          e && (v += e * i[r]), m(l, "transform", `translate(${f}px, ${v}px)`);
        }));
      }, events: ["scroll", "resize"] }] };
      function wa(t) {
        return t.flat().some((e) => m(e, "position") === "absolute");
      }
      function Iu(t, e, i) {
        const s = [], o = [], r = Array(t[0].length).fill(0);
        let l = 0;
        for (let u of t) {
          ht && u.reverse();
          let f = 0;
          for (const v in u) {
            const { offsetWidth: $, offsetHeight: b } = u[v], x = i ? v : r.indexOf(Math.min(...r));
            zn(s, x, u[v]), zn(o, x, [(x - v) * $ * (ht ? -1 : 1), r[x] - l]), r[x] += b + e, f = Math.max(f, b);
          }
          l += f + e;
        }
        return [s, o];
      }
      function Cu(t, e) {
        const i = t.flat().find((s) => L(s, e));
        return R(i ? m(i, "marginTop") : m(t[0][0], "paddingLeft"));
      }
      function Tu(t) {
        const e = [];
        for (const i of t)
          for (const s in i)
            zn(e, s, i[s]);
        return e;
      }
      function zn(t, e, i) {
        t[e] || (t[e] = []), t[e].push(i);
      }
      var Pu = { mixins: [xt, $s], props: { fill: String }, data: { fill: "", clsWrapper: "uk-leader-fill", clsHide: "uk-leader-hide", attrFill: "data-fill" }, computed: { fill: ({ fill: t }, e) => t || m(e, "--uk-leader-fill-content") }, connected() {
        [this.wrapper] = rn(this.$el, `<span class="${this.clsWrapper}">`);
      }, disconnected() {
        Si(this.wrapper.childNodes);
      }, observe: Vt(), update: { read() {
        return { width: Math.trunc(this.$el.offsetWidth / 2), fill: this.fill, hide: !this.matchMedia };
      }, write({ width: t, fill: e, hide: i }) {
        it(this.wrapper, this.clsHide, i), A(this.wrapper, this.attrFill, new Array(t).join(e));
      }, events: ["resize"] } }, Ou = { install: Du, mixins: [Dn], data: { clsPage: "uk-modal-page", selPanel: ".uk-modal-dialog", selClose: '[class*="uk-modal-close"]' }, events: [{ name: "fullscreenchange webkitendfullscreen", capture: true, handler(t) {
        et(t.target, "video") && this.isToggled() && !document.fullscreenElement && this.hide();
      } }, { name: "show", self: true, handler() {
        L(this.panel, "uk-margin-auto-vertical") ? j(this.$el, "uk-flex") : m(this.$el, "display", "block"), bt(this.$el);
      } }, { name: "hidden", self: true, handler() {
        m(this.$el, "display", ""), Z(this.$el, "uk-flex");
      } }] };
      function Du({ modal: t }) {
        t.dialog = function(i, s) {
          const o = t(H(`<div><div class="uk-modal-dialog">${i}</div></div>`), { stack: true, role: "alertdialog", ...s });
          return o.show(), z(o.$el, "hidden", async () => {
            await Promise.resolve(), o.$destroy(true);
          }, { self: true }), o;
        }, t.alert = function(i, s) {
          return e(({ i18n: o }) => `<div class="uk-modal-body">${nt(i) ? i : qt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-btn uk-btn-primary uk-modal-close" autofocus>${o.ok}</button> </div>`, s);
        }, t.confirm = function(i, s) {
          return e(({ i18n: o }) => `<form> <div class="uk-modal-body">${nt(i) ? i : qt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-btn uk-btn-default uk-modal-close mr-2" type="button">${o.cancel}</button> <button class="uk-btn uk-btn-primary" autofocus>${o.ok}</button> </div> </form>`, s, () => Promise.reject());
        }, t.prompt = function(i, s, o) {
          const r = e(({ i18n: f }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label class="uk-form-label">${nt(i) ? i : qt(i)}</label> <input class="uk-input mt-2" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-btn uk-btn-default uk-modal-close mr-2" type="button">${f.cancel}</button> <button class="uk-btn uk-btn-primary">${f.ok}</button> </div> </form>`, o, () => null, () => u.value), { $el: l } = r.dialog, u = H("input", l);
          return u.value = s || "", z(l, "show", () => u.select()), r;
        }, t.i18n = { ok: "Ok", cancel: "Cancel" };
        function e(i, s, o = ct, r = ct) {
          s = { bgClose: false, escClose: true, ...s, i18n: { ...t.i18n, ...s == null ? undefined : s.i18n } };
          const l = t.dialog(i(s), s);
          return V(new Promise((u) => {
            const f = z(l.$el, "hide", () => u(o()));
            z(l.$el, "submit", "form", (v) => {
              v.preventDefault(), u(r(l)), f(), l.hide();
            });
          }), { dialog: l });
        }
      }
      var Mu = { extends: pa, data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" } }, Hu = { mixins: [Dn], args: "mode", props: { mode: String, flip: Boolean, overlay: Boolean, swiping: Boolean }, data: { mode: "slide", flip: false, overlay: false, clsPage: "uk-offcanvas-page", clsContainer: "uk-offcanvas-container", selPanel: ".uk-offcanvas-bar", clsFlip: "uk-offcanvas-flip", clsContainerAnimation: "uk-offcanvas-container-animation", clsSidebarAnimation: "uk-offcanvas-bar-animation", clsMode: "uk-offcanvas", clsOverlay: "uk-offcanvas-overlay", selClose: ".uk-offcanvas-close", container: false, swiping: true }, computed: { clsFlip: ({ flip: t, clsFlip: e }) => t ? e : "", clsOverlay: ({ overlay: t, clsOverlay: e }) => t ? e : "", clsMode: ({ mode: t, clsMode: e }) => `${e}-${t}`, clsSidebarAnimation: ({ mode: t, clsSidebarAnimation: e }) => t === "none" || t === "reveal" ? "" : e, clsContainerAnimation: ({ mode: t, clsContainerAnimation: e }) => t !== "push" && t !== "reveal" ? "" : e, transitionElement({ mode: t }) {
        return t === "reveal" ? J(this.panel) : this.panel;
      } }, observe: ar({ filter: ({ swiping: t }) => t }), update: { read() {
        this.isToggled() && !ut(this.$el) && this.hide();
      }, events: ["resize"] }, events: [{ name: "touchmove", self: true, passive: false, filter: ({ overlay: t }) => t, handler(t) {
        t.cancelable && t.preventDefault();
      } }, { name: "show", self: true, handler() {
        this.mode === "reveal" && !L(J(this.panel), this.clsMode) && j(xi(this.panel, "<div>"), this.clsMode);
        const { body: t, scrollingElement: e } = document;
        j(t, this.clsContainer, this.clsFlip), m(t, "touchAction", "pan-y pinch-zoom"), m(this.$el, "display", "block"), m(this.panel, "maxWidth", e.clientWidth), j(this.$el, this.clsOverlay), j(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode), bt(t), j(t, this.clsContainerAnimation), this.clsContainerAnimation && Nu();
      } }, { name: "hide", self: true, handler() {
        Z(document.body, this.clsContainerAnimation), m(document.body, "touchAction", "");
      } }, { name: "hidden", self: true, handler() {
        this.clsContainerAnimation && Lu(), this.mode === "reveal" && L(J(this.panel), this.clsMode) && Si(this.panel), Z(this.panel, this.clsSidebarAnimation, this.clsMode), Z(this.$el, this.clsOverlay), m(this.$el, "display", ""), m(this.panel, "maxWidth", ""), Z(document.body, this.clsContainer, this.clsFlip);
      } }, { name: "swipeLeft swipeRight", handler(t) {
        this.isToggled() && _(t.type, "Left") ^ this.flip && this.hide();
      } }] };
      function Nu() {
        ya().content += ",user-scalable=0";
      }
      function Lu() {
        const t = ya();
        t.content = t.content.replace(/,user-scalable=0$/, "");
      }
      function ya() {
        return H('meta[name="viewport"]', document.head) || ot(document.head, '<meta name="viewport">');
      }
      var Bu = { mixins: [xt], props: { selContainer: String, selContent: String, minHeight: Number }, data: { selContainer: ".uk-modal", selContent: ".uk-modal-dialog", minHeight: 150 }, computed: { container: ({ selContainer: t }, e) => e.closest(t), content: ({ selContent: t }, e) => e.closest(t) }, observe: Vt({ target: ({ container: t, content: e }) => [t, e] }), update: { read() {
        return !this.content || !this.container || !ut(this.$el) ? false : { max: Math.max(this.minHeight, bt(this.container) - (T(this.content).height - bt(this.$el))) };
      }, write({ max: t }) {
        m(this.$el, { minHeight: this.minHeight, maxHeight: t });
      }, events: ["resize"] } }, Ru = { props: ["width", "height"], connected() {
        j(this.$el, "uk-responsive-width"), m(this.$el, "aspectRatio", `${this.width}/${this.height}`);
      } }, ju = { props: { offset: Number }, data: { offset: 0 }, connected() {
        zu(this);
      }, disconnected() {
        Fu(this);
      }, methods: { async scrollTo(t) {
        t = t && H(t) || document.body, C(this.$el, "beforescroll", [this, t]) && (await Jo(t, { offset: this.offset }), C(this.$el, "scrolled", [this, t]));
      } } };
      const Ri = new Set;
      function zu(t) {
        Ri.size || z(document, "click", ka), Ri.add(t);
      }
      function Fu(t) {
        Ri.delete(t), Ri.size || ye(document, "click", ka);
      }
      function ka(t) {
        if (!t.defaultPrevented)
          for (const e of Ri)
            e.$el.contains(t.target) && We(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(Gs(e.$el)));
      }
      const Fn = "uk-scrollspy-inview";
      var Uu = { args: "cls", props: { cls: String, target: String, hidden: Boolean, margin: String, repeat: Boolean, delay: Number }, data: () => ({ cls: "", target: false, hidden: true, margin: "-1px", repeat: false, delay: 0 }), computed: { elements: ({ target: t }, e) => t ? Q(t, e) : [e] }, watch: { elements(t) {
        this.hidden && m(bi(t, `:not(.${Fn})`), "opacity", 0);
      } }, connected() {
        this.elementData = new Map;
      }, disconnected() {
        for (const [t, e] of this.elementData.entries())
          Z(t, Fn, (e == null ? undefined : e.cls) || "");
        delete this.elementData;
      }, observe: Ci({ target: ({ elements: t }) => t, handler(t) {
        const e = this.elementData;
        for (const { target: i, isIntersecting: s } of t) {
          e.has(i) || e.set(i, { cls: vt(i, "uk-scrollspy-class") || this.cls });
          const o = e.get(i);
          !this.repeat && o.show || (o.show = s);
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
        const o = (i = this.elementData) == null ? undefined : i.get(t);
        if (!o)
          return;
        (s = o.off) == null || s.call(o), m(t, "opacity", !e && this.hidden ? 0 : ""), it(t, Fn, e), it(t, o.cls);
        let r;
        if (r = o.cls.match(/\buk-anmt-[\w-]+/g)) {
          const l = () => Z(t, r);
          e ? o.off = st(t, "animationcancel animationend", l, { self: true }) : l();
        }
        C(t, e ? "inview" : "outview"), o.inview = e;
      } } }, qu = { props: { cls: String, closest: Boolean, scroll: Boolean, target: String, offset: Number }, data: { cls: "uk-active", closest: false, scroll: false, target: 'a[href]:not([role="button"])', offset: 0 }, computed: { links: ({ target: t }, e) => Q(t, e).filter((i) => We(i)), elements({ closest: t }) {
        return this.links.map((e) => e.closest(t || "*"));
      } }, watch: { links(t) {
        this.scroll && this.$create("scroll", t, { offset: this.offset });
      } }, observe: [Ci(), Ti()], update: [{ read() {
        const t = this.links.map((f) => Gs(f)).filter(Boolean), { length: e } = t;
        if (!e || !ut(this.$el))
          return false;
        const i = xe(t, true), { scrollTop: s, scrollHeight: o } = i, r = Tt(i), l = o - r.height;
        let u = false;
        if (s >= l)
          u = e - 1;
        else {
          const f = this.offset + T($n()).height + r.height * 0.1;
          for (let v = 0;v < t.length && !(U(t[v]).top - r.top - f > 0); v++)
            u = +v;
        }
        return { active: u };
      }, write({ active: t }) {
        const e = t !== false && !L(this.elements[t], this.cls);
        this.links.forEach((i) => i.blur());
        for (let i = 0;i < this.elements.length; i++)
          it(this.elements[i], this.cls, +i === t);
        e && C(this.$el, "active", [t, this.elements[t]]);
      }, events: ["scroll", "resize"] }] }, Wu = { mixins: [xt, $s], props: { position: String, top: null, bottom: null, start: null, end: null, offset: String, offsetEnd: String, overflowFlip: Boolean, animation: String, clsActive: String, clsInactive: String, clsFixed: String, clsBelow: String, selTarget: String, showOnUp: Boolean, targetOffset: Number }, data: { position: "top", top: false, bottom: false, start: false, end: false, offset: 0, offsetEnd: 0, overflowFlip: false, animation: "", clsActive: "uk-active", clsInactive: "", clsFixed: "uk-sticky-fixed", clsBelow: "uk-sticky-below", selTarget: "", showOnUp: false, targetOffset: false }, computed: { target: ({ selTarget: t }, e) => t && H(t, e) || e }, connected() {
        this.start = xa(this.start || this.top), this.end = xa(this.end || this.bottom), this.placeholder = H("+ .uk-sticky-placeholder", this.$el) || H('<div class="uk-sticky-placeholder"></div>'), this.isFixed = false, this.setActive(false);
      }, beforeDisconnect() {
        this.isFixed && (this.hide(), Z(this.target, this.clsInactive)), Sa(this.$el), $t(this.placeholder), this.placeholder = null;
      }, observe: [rr(), Ti({ target: () => document.scrollingElement }), Vt({ target: ({ $el: t }) => [t, _s(t), document.scrollingElement], handler(t) {
        this.$emit(this._data.resized && t.some(({ target: e }) => e === _s(this.$el)) ? "update" : "resize"), this._data.resized = true;
      } })], events: [{ name: "load hashchange popstate", el: () => window, filter: ({ targetOffset: t }) => t !== false, handler() {
        const { scrollingElement: t } = document;
        !location.hash || t.scrollTop === 0 || setTimeout(() => {
          const e = U(H(location.hash)), i = U(this.$el);
          this.isFixed && Ws(e, i) && (t.scrollTop = Math.ceil(e.top - i.height - ft(this.targetOffset, "height", this.placeholder) - ft(this.offset, "height", this.placeholder)));
        });
      } }], update: [{ read({ height: t, width: e, margin: i, sticky: s }, o) {
        if (this.inactive = !this.matchMedia || !ut(this.$el) || !this.$el.offsetHeight, this.inactive)
          return;
        const r = bt(window), l = Math.max(0, document.scrollingElement.scrollHeight - r);
        if (!l) {
          this.inactive = true;
          return;
        }
        const u = this.isFixed && o.has("update");
        u && (Wn(this.target), this.hide()), this.active || ({ height: t, width: e } = T(this.$el), i = m(this.$el, "margin")), u && this.show();
        const f = ft("100vh", "height");
        let v = this.position;
        this.overflowFlip && t > f && (v = v === "top" ? "bottom" : "top");
        const $ = this.isFixed ? this.placeholder : this.$el;
        let [b, x] = [this.offset, this.offsetEnd].map((re) => ft(re, "height", s ? this.$el : $));
        v === "bottom" && (t < r || this.overflowFlip) && (b += r - t);
        const I = t + b + x, O = this.overflowFlip ? 0 : Math.max(0, I - f), B = U($).top - new DOMMatrix(m($, "transform")).m42, q = T(this.$el).height, _t = (this.start === false ? B : Un(this.start, this.$el, B)) - b, Kt = this.end === false ? l : Math.min(l, Un(this.end, this.$el, B + t, true) - q - b + O);
        return s = !this.showOnUp && _t + b === B && Kt === Math.min(l, Un(true, this.$el, 0, true) - q - b + O) && m(_s(this.$el), "overflowY") !== "hidden", { start: _t, end: Kt, offset: b, overflow: O, height: t, elHeight: q, width: e, margin: i, top: _i($)[0], sticky: s, viewport: f, maxScrollHeight: l };
      }, write({ height: t, width: e, margin: i, offset: s, sticky: o }) {
        if ((this.inactive || o || !this.isFixed) && Sa(this.$el), this.inactive)
          return;
        o && (t = e = i = 0, m(this.$el, { position: "sticky", top: s }));
        const { placeholder: r } = this;
        m(r, { height: t, width: e, margin: i }), (J(r) !== J(this.$el) || o ^ Ft(r) < Ft(this.$el)) && ((o ? ss : ns)(this.$el, r), r.hidden = true);
      }, events: ["resize"] }, { read({ scroll: t = 0, dir: e = "down", overflow: i, overflowScroll: s = 0, start: o, end: r, elHeight: l, height: u, sticky: f, maxScrollHeight: v }) {
        const $ = Math.min(document.scrollingElement.scrollTop, v), b = t <= $ ? "down" : "up", x = this.isFixed ? this.placeholder : this.$el;
        return { dir: b, prevDir: e, scroll: $, prevScroll: t, below: $ > U(x).top + (f ? Math.min(u, l) : u), offsetParentTop: U(x.offsetParent).top, overflowScroll: mt(s + mt($, o, r) - mt(t, o, r), 0, i) };
      }, write(t, e) {
        const i = e.has("scroll"), { initTimestamp: s = 0, dir: o, prevDir: r, scroll: l, prevScroll: u = 0, top: f, start: v, below: $ } = t;
        if (l < 0 || l === u && i || this.showOnUp && !i && !this.isFixed)
          return;
        const b = Date.now();
        if ((b - s > 300 || o !== r) && (t.initScroll = l, t.initTimestamp = b), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - l) <= 30 && Math.abs(u - l) <= 10))
          if (this.inactive || l < v || this.showOnUp && (l <= v || o === "down" && i || o === "up" && !this.isFixed && !$)) {
            if (!this.isFixed) {
              ie.inProgress(this.$el) && f > l && (ie.cancel(this.$el), this.hide());
              return;
            }
            if (this.animation && $) {
              if (L(this.$el, "uk-anmt-leave"))
                return;
              ie.out(this.$el, this.animation).then(() => this.hide(), ct);
            } else
              this.hide();
          } else
            this.isFixed ? this.update() : this.animation && $ ? (this.show(), ie.in(this.$el, this.animation).catch(ct)) : (Wn(this.target), this.show());
      }, events: ["resize", "resizeViewport", "scroll"] }], methods: { show() {
        this.isFixed = true, this.update(), this.placeholder.hidden = false;
      }, hide() {
        const { offset: t, sticky: e } = this._data;
        this.setActive(false), Z(this.$el, this.clsFixed, this.clsBelow), e ? m(this.$el, "top", t) : m(this.$el, { position: "", top: "", width: "", marginTop: "" }), this.placeholder.hidden = true, this.isFixed = false;
      }, update() {
        let { width: t, scroll: e = 0, overflow: i, overflowScroll: s = 0, start: o, end: r, offset: l, offsetParentTop: u, sticky: f, below: v } = this._data;
        const $ = o !== 0 || e > o;
        if (!f) {
          let b = "fixed";
          e > r && (l += r - u + s - i, b = "absolute"), m(this.$el, { position: b, width: t, marginTop: 0 }, "important");
        }
        m(this.$el, "top", l - s), this.setActive($), it(this.$el, this.clsBelow, v), j(this.$el, this.clsFixed);
      }, setActive(t) {
        const e = this.active;
        this.active = t, t ? (Ks(this.target, this.clsInactive, this.clsActive), e !== t && C(this.$el, "active")) : (Ks(this.target, this.clsActive, this.clsInactive), e !== t && (Wn(this.target), C(this.$el, "inactive")));
      } } };
      function Un(t, e, i, s) {
        if (!t)
          return 0;
        if (jt(t) || nt(t) && t.match(/^-?\d/))
          return i + ft(t, "height", e, true);
        {
          const o = t === true ? _s(e) : Ct(t, e);
          return U(o).bottom - (s && (o != null && o.contains(e)) ? R(m(o, "paddingBottom")) + R(m(o, "borderBottomWidth")) : 0);
        }
      }
      function xa(t) {
        return t === "true" ? true : t === "false" ? false : t;
      }
      function Sa(t) {
        m(t, { position: "", top: "", marginTop: "", width: "" });
      }
      const qn = "uk-transition-disable";
      function Wn(t) {
        L(t, qn) || (j(t, qn), requestAnimationFrame(() => Z(t, qn)));
      }
      function _s(t) {
        for (;t = J(t); )
          if (ut(t))
            return t;
      }
      var _a = { args: "src", props: { width: Number, height: Number, ratio: Number }, data: { ratio: 1 }, connected() {
        this.svg = this.getSvg().then((t) => {
          if (!this._connected)
            return;
          const e = Vu(t, this.$el);
          return this.svgEl && e !== this.svgEl && $t(this.svgEl), Yu.call(this, e, t), this.svgEl = e;
        }, ct);
      }, disconnected() {
        this.svg.then((t) => {
          this._connected || (Js(this.$el) && (this.$el.hidden = false), $t(t), this.svgEl = null);
        }), this.svg = null;
      }, methods: { async getSvg() {
      } } };
      function Vu(t, e) {
        if (Js(e) || et(e, "canvas")) {
          e.hidden = true;
          const s = e.nextElementSibling;
          return Aa(t, s) ? s : ns(e, t);
        }
        const i = e.lastElementChild;
        return Aa(t, i) ? i : ot(e, t);
      }
      function Aa(t, e) {
        return et(t, "svg") && et(e, "svg") && t.innerHTML === e.innerHTML;
      }
      function Yu(t, e) {
        const i = ["width", "height"];
        let s = i.map((r) => this[r]);
        s.some((r) => r) || (s = i.map((r) => A(e, r)));
        const o = A(e, "viewBox");
        o && !s.some((r) => r) && (s = o.split(" ").slice(2)), s.forEach((r, l) => A(t, i[l], R(r) * this.ratio || null));
      }
      function Ea(t, e) {
        return e && w(t, "<symbol") && (t = Ku(t)[e] || t), F(Wt(t)).filter(Be)[0];
      }
      const Ia = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, Ku = Et(function(t) {
        const e = {};
        Ia.lastIndex = 0;
        let i;
        for (;i = Ia.exec(t); )
          e[i[3]] = `<svg ${i[1]}svg>`;
        return e;
      });
      var Ju = { mixins: [_a], args: "src", props: { src: String, icon: String, attributes: "list", strokeAnimation: Boolean }, data: { strokeAnimation: false }, observe: [Sn({ async handler() {
        const t = await this.svg;
        t && Ca.call(this, t);
      }, options: { attributes: true, attributeFilter: ["id", "class", "style"] } })], async connected() {
        w(this.src, "#") && ([this.src, this.icon] = this.src.split("#", 2));
        const t = await this.svg;
        t && (Ca.call(this, t), this.strokeAnimation && Xu(t));
      }, methods: { async getSvg() {
        return et(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" && await new Promise((t) => st(this.$el, "load", t)), Ea(await Gu(this.src), this.icon) || Promise.reject("SVG not found.");
      } } };
      function Ca(t) {
        const { $el: e } = this;
        j(t, A(e, "class"), "uk-svg");
        for (let i = 0;i < e.style.length; i++) {
          const s = e.style[i];
          m(t, s, m(e, s));
        }
        for (const i in this.attributes) {
          const [s, o] = this.attributes[i].split(":", 2);
          A(t, s, o);
        }
        this.$el.id || mi(t, "id");
      }
      const Gu = Et(async (t) => {
        if (t) {
          if (y(t, "data:"))
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
        const e = qr(t);
        e && m(t, "--uk-anmt-stroke", e);
      }
      const Vn = ".uk-disabled *, .uk-disabled, [disabled]";
      var Ta = { mixins: [_e], args: "connect", props: { connect: String, toggle: String, itemNav: String, active: Number, followFocus: Boolean, swiping: Boolean }, data: { connect: "~.uk-switcher", toggle: "> * > :first-child", itemNav: false, active: 0, cls: "uk-active", attrItem: "uk-switcher-item", selVertical: ".uk-nav", followFocus: false, swiping: true }, computed: { connects: { get: ({ connect: t }, e) => wi(t, e), observe: ({ connect: t }) => t }, connectChildren() {
        return this.connects.map((t) => G(t)).flat();
      }, toggles: ({ toggle: t }, e) => Q(t, e), children(t, e) {
        return G(e).filter((i) => this.toggles.some((s) => i.contains(s)));
      } }, watch: { connects(t) {
        this.swiping && m(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
      }, connectChildren() {
        let t = Math.max(0, this.index());
        for (const e of this.connects)
          G(e).forEach((i, s) => it(i, this.cls, s === t));
        this.$emit();
      }, toggles(t) {
        this.$emit();
        const e = this.index();
        this.show(~e ? e : t[this.active] || t[0]);
      } }, connected() {
        A(this.$el, "role", "tablist");
      }, observe: [ps({ targets: ({ connectChildren: t }) => t }), ar({ target: ({ connects: t }) => t, filter: ({ swiping: t }) => t })], events: [{ name: "click keydown", delegate: ({ toggle: t }) => t, handler(t) {
        !Y(t.current, Vn) && (t.type === "click" || t.keyCode === K.SPACE) && (t.preventDefault(), this.show(t.current));
      } }, { name: "keydown", delegate: ({ toggle: t }) => t, handler(t) {
        const { current: e, keyCode: i } = t, s = Y(this.$el, this.selVertical);
        let o = i === K.HOME ? 0 : i === K.END ? "last" : i === K.LEFT && !s || i === K.UP && s ? "previous" : i === K.RIGHT && !s || i === K.DOWN && s ? "next" : -1;
        if (~o) {
          t.preventDefault();
          const r = this.toggles.filter((u) => !Y(u, Vn)), l = r[yt(o, r, r.indexOf(e))];
          l.focus(), this.followFocus && this.show(l);
        }
      } }, { name: "click", el: ({ $el: t, connects: e, itemNav: i }) => e.concat(i ? wi(i, t) : []), delegate: ({ attrItem: t }) => `[${t}],[data-${t}]`, handler(t) {
        t.target.closest("a,button") && (t.preventDefault(), this.show(vt(t.current, this.attrItem)));
      } }, { name: "swipeRight swipeLeft", filter: ({ swiping: t }) => t, el: ({ connects: t }) => t, handler({ type: t }) {
        this.show(_(t, "Left") ? "next" : "previous");
      } }], update() {
        var t;
        for (const e of this.connects)
          et(e, "ul") && A(e, "role", "presentation");
        A(G(this.$el), "role", "presentation");
        for (const e in this.toggles) {
          const i = this.toggles[e], s = (t = this.connects[0]) == null ? undefined : t.children[e];
          A(i, "role", "tab"), s && (i.id = Ie(this, i), s.id = Ie(this, s), A(i, "aria-controls", s.id), A(s, { role: "tabpanel", "aria-labelledby": i.id }));
        }
        A(this.$el, "aria-orientation", Y(this.$el, this.selVertical) ? "vertical" : null);
      }, methods: { index() {
        return E(this.children, (t) => L(t, this.cls));
      }, show(t) {
        const e = this.toggles.filter((l) => !Y(l, Vn)), i = this.index(), s = yt(!fi(t) || w(e, t) ? t : 0, e, yt(this.toggles[i], e)), o = yt(e[s], this.toggles);
        this.children.forEach((l, u) => {
          it(l, this.cls, o === u), A(this.toggles[u], { "aria-selected": o === u, tabindex: o === u ? null : -1 });
        });
        const r = i >= 0 && i !== s;
        this.connects.forEach(async ({ children: l }) => {
          const u = M(l).filter((f, v) => v !== o && L(f, this.cls));
          await this.toggleElement(u, false, r) && await this.toggleElement(l[o], true, r);
        });
      } } }, Zu = { mixins: [xt], extends: Ta, props: { media: Boolean }, data: { media: 960, attrItem: "uk-tab-item", selVertical: ".uk-tab-left,.uk-tab-right" }, connected() {
        const t = L(this.$el, "uk-tab-left") ? "uk-tab-left" : L(this.$el, "uk-tab-right") ? "uk-tab-right" : false;
        t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media });
      } };
      const Qu = 32;
      var td = { mixins: [$s, _e], args: "target", props: { href: String, target: null, mode: "list", queued: Boolean }, data: { href: false, target: false, mode: "click", queued: true }, computed: { target: { get: ({ target: t }, e) => (t = wi(t || e.hash, e), t.length ? t : [e]), observe: ({ target: t }) => t } }, connected() {
        w(this.mode, "media") || (ts(this.$el) || A(this.$el, "tabindex", "0"), !this.cls && et(this.$el, "a") && A(this.$el, "role", "button"));
      }, observe: ps({ targets: ({ target: t }) => t }), events: [{ name: It, filter: ({ mode: t }) => w(t, "hover"), handler(t) {
        this._preventClick = null, !(!Mt(t) || Re(this._showState) || this.$el.disabled) && (C(this.$el, "focus"), st(document, It, () => C(this.$el, "blur"), true, (e) => !this.$el.contains(e.target)), w(this.mode, "click") && (this._preventClick = true));
      } }, { name: `mouseenter mouseleave ${we} ${Ue} focus blur`, filter: ({ mode: t }) => w(t, "hover"), handler(t) {
        if (Mt(t) || this.$el.disabled || document.readyState === "loading")
          return;
        const e = w(["mouseenter", we, "focus"], t.type), i = this.isToggled(this.target);
        if (!e && (!Re(this._showState) || t.type !== "blur" && Y(this.$el, ":focus") || t.type === "blur" && Y(this.$el, ":hover"))) {
          i === this._showState && (this._showState = null);
          return;
        }
        e && Re(this._showState) && i !== this._showState || (this._showState = e ? i : null, this.toggle(`toggle${e ? "show" : "hide"}`));
      } }, { name: "keydown", filter: ({ $el: t, mode: e }) => w(e, "click") && !et(t, "input"), handler(t) {
        t.keyCode === Qu && (t.preventDefault(), this.$el.click());
      } }, { name: "click", filter: ({ mode: t }) => ["click", "hover"].some((e) => w(t, e)), handler(t) {
        let e;
        (this._preventClick || t.target.closest('a[href="#"], a[href=""]') || (e = t.target.closest("a[href]")) && (!this.isToggled(this.target) || e.hash && Y(this.target, e.hash))) && t.preventDefault(), !this._preventClick && w(this.mode, "click") && this.toggle();
      } }, { name: "mediachange", filter: ({ mode: t }) => w(t, "media"), el: ({ target: t }) => t, handler(t, e) {
        e.matches ^ this.isToggled(this.target) && this.toggle();
      } }], methods: { async toggle(t) {
        if (!C(this.target, t || "toggle", [this]))
          return;
        if (te(this.$el, "aria-expanded") && A(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued)
          return this.toggleElement(this.target);
        const e = this.target.filter((s) => L(s, this.clsLeave));
        if (e.length) {
          for (const s of this.target) {
            const o = w(e, s);
            this.toggleElement(s, o, o);
          }
          return;
        }
        const i = this.target.filter(this.isToggled);
        await this.toggleElement(i, false) && await this.toggleElement(this.target.filter((s) => !w(i, s)), true);
      } } }, ed = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-calendar" viewBox="0 0 24 24"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>', id = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>', sd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-x" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>', nd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-x" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>', od = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>', rd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-plus" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5v14"/></svg>', ad = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>', ld = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>', cd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>', hd = '<svg width="16" height="16" viewBox="0 0 20 20"><style>.uk-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect width="20" height="2" y="3" class="line-1" rx="1"/><rect width="20" height="2" y="9" class="line-2" rx="1"/><rect width="20" height="2" y="9" class="line-3" rx="1"/><rect width="20" height="2" y="15" class="line-4" rx="1"/></svg>', ud = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-plus" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5v14"/></svg>', dd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-right" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>', fd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-left" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>', Pa = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>', pd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>', gd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>', md = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>', vd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>', $d = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-arrow-left" viewBox="0 0 24 24"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>', bd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-arrow-left" viewBox="0 0 24 24"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>', wd = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', yd = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-circle-chevron-up" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m8 14 4-4 4 4"/></svg>';
      const As = { spinner: wd, totop: yd, marker: rd, "calendar-icon": ed, check: id, "close-icon": sd, "close-large": nd, "drop-parent-icon": od, "nav-parent-icon": ld, "nav-parent-icon-large": ad, "navbar-parent-icon": cd, "navbar-toggle-icon": hd, "overlay-icon": ud, "pgn-next": dd, "pgn-previous": fd, "search-icon": Pa, "search-medium": gd, "search-large": pd, "search-toggle-icon": Pa, "slidenav-next": vd, "slidenav-next-large": md, "slidenav-previous": bd, "slidenav-previous-large": $d }, Oa = { install: Dd, mixins: [_a], args: "icon", props: { icon: String }, isIcon: true, beforeConnect() {
        j(this.$el, "uk-icon");
      }, methods: { async getSvg() {
        const t = Hd(this.icon);
        if (!t)
          throw "Icon not found.";
        return t;
      } } }, Te = { args: false, extends: Oa, data: (t) => ({ icon: c(t.constructor.options.name) }), beforeConnect() {
        j(this.$el, this.$options.id);
      } }, kd = { extends: Te, beforeConnect() {
        const t = this.$props.icon;
        this.icon = this.$el.closest(".uk-nav-primary") ? `${t}-large` : t;
      } }, xd = { extends: Te, mixins: [Hn], i18n: { toggle: "Open Search", submit: "Submit Search" }, beforeConnect() {
        const t = L(this.$el, "uk-search-toggle") || L(this.$el, "uk-navbar-toggle");
        if (this.icon = t ? "search-toggle-icon" : L(this.$el, "uk-search-icon") && this.$el.closest(".uk-search-large") ? "search-large" : this.$el.closest(".uk-search-medium") ? "search-medium" : this.$props.icon, !te(this.$el, "aria-label"))
          if (t) {
            const e = this.t("toggle");
            A(this.$el, "aria-label", e);
          } else {
            const e = this.$el.closest("a,button");
            if (e) {
              const i = this.t("submit");
              A(e, "aria-label", i);
            }
          }
      } }, Sd = { extends: Te, beforeConnect() {
        A(this.$el, "role", "status");
      }, methods: { async getSvg() {
        const t = await Oa.methods.getSvg.call(this);
        return this.ratio !== 1 && m(H("circle", t), "strokeWidth", 1 / this.ratio), t;
      } } }, Yt = { extends: Te, mixins: [Hn], beforeConnect() {
        const t = this.$el.closest("a,button");
        A(t, "role", this.role !== null && et(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !te(t, "aria-label") && A(t, "aria-label", e);
      } }, Da = { extends: Yt, beforeConnect() {
        j(this.$el, "uk-slidenav");
        const t = this.$props.icon;
        this.icon = L(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
      } }, _d = { extends: Yt, i18n: { label: "Open menu" } }, Ad = { extends: Yt, i18n: { label: "Close" }, beforeConnect() {
        this.icon = `close-${L(this.$el, "uk-close-large") ? "large" : "icon"}`;
      } }, Ed = { extends: Yt, i18n: { label: "Open" } }, Id = { extends: Yt, i18n: { label: "Back to top" } }, Cd = { extends: Yt, i18n: { label: "Next page" }, data: { role: null } }, Td = { extends: Yt, i18n: { label: "Previous page" }, data: { role: null } }, Pd = { extends: Yt, i18n: { label: "Calendar" }, data: { role: null } }, Od = { extends: Yt, i18n: { label: "Check" }, data: { role: null } }, Es = {};
      function Dd(t) {
        t.icon.add = (e, i) => {
          const s = nt(e) ? { [e]: i } : e;
          je(s, (o, r) => {
            As[r] = o, delete Es[r];
          }), t._initialized && se(document.body, (o) => je(t.getComponents(o), (r) => {
            r.$options.isIcon && r.icon in s && r.$reset();
          }));
        };
      }
      const Md = { twitter: "x" };
      function Hd(t) {
        return t = Md[t] || t, As[t] ? (Es[t] || (Es[t] = Ea(As[Nd(t)] || As[t])), Es[t].cloneNode(true)) : null;
      }
      function Nd(t) {
        return ht ? Us(Us(t, "left", "right"), "previous", "next") : t;
      }
      var Ld = Object.freeze({ __proto__: null, Accordion: pa, Alert: gu, CalendarIcon: Pd, Check: Od, Close: Ad, Cover: $u, Drop: va, DropParentIcon: Te, Dropdown: va, Dropnav: _u, FormCustom: Au, Grid: Eu, Img: zc, Leader: Pu, Marker: Ed, Modal: Ou, Nav: Mu, NavParentIcon: kd, NavbarParentIcon: Te, NavbarToggleIcon: _d, Offcanvas: Hu, OverflowAuto: Bu, OverlayIcon: Te, PgnNext: Cd, PgnPrevious: Td, Responsive: Ru, Scroll: ju, Scrollspy: Uu, ScrollspyNav: qu, SearchIcon: xd, SlidenavNext: Da, SlidenavPrevious: Da, Spinner: Sd, Sticky: Wu, Svg: Ju, Switcher: Ta, Tab: Zu, Toggle: td, Totop: Id, Video: ga });
      return je(Ld, (t, e) => St.component(e, t)), hu(St), je(cu, (t, e) => St.component(e, t)), St;
    });
    function qi(d) {
      if (d.startsWith("{"))
        try {
          return JSON.parse(d);
        } catch {
          return console.error("Error parsing", d), {};
        }
      if (d.includes(":"))
        try {
          const n = {};
          return d.replace(/[;\s]+$/, "").split(";").forEach((a) => {
            const h = a.trim().split(/:(.*)/);
            n[h[0].trim()] = h[1].trim();
          }), n;
        } catch {
          return console.error("Error parsing", d), {};
        }
      return d;
    }
    function hi(d) {
      if (/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2})?$/.test(d)) {
        let n = new Date(d);
        if (isNaN(n.getTime()))
          throw new Error("Invalid date");
        return n;
      }
      throw new Error("Invalid format");
    }
    function dl(d) {
      if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(d))
        throw new Error("Invalid time format. Use HH:MM (24-hour format)");
      return d;
    }
    function fl(d, n, a) {
      const h = { YYYY: () => d.getFullYear().toString(), YY: () => (d.getFullYear() % 100).toString().padStart(2, "0"), MMMM: () => a.months[d.getMonth()], MMM: () => a.months[d.getMonth()].substring(0, 3), MM: () => (d.getMonth() + 1).toString().padStart(2, "0"), M: () => (d.getMonth() + 1).toString(), dddd: () => a.weekdays[d.getDay()], ddd: () => a.weekdays[d.getDay()].substring(0, 3), Do: () => {
        const p = d.getDate(), k = p % 10 === 1 && p !== 11 ? "st" : p % 10 === 2 && p !== 12 ? "nd" : p % 10 === 3 && p !== 13 ? "rd" : "th";
        return p + k;
      }, DD: () => d.getDate().toString().padStart(2, "0"), D: () => d.getDate().toString(), HH: () => d.getHours().toString().padStart(2, "0"), H: () => d.getHours().toString(), hh: () => (d.getHours() % 12 || 12).toString().padStart(2, "0"), h: () => (d.getHours() % 12 || 12).toString(), mm: () => d.getMinutes().toString().padStart(2, "0"), m: () => d.getMinutes().toString(), A: () => d.getHours() >= 12 ? "PM" : "AM", a: () => d.getHours() >= 12 ? "pm" : "am" }, c = Object.keys(h).sort((p, k) => k.length - p.length), g = new RegExp(c.join("|"), "g");
      return n.replace(g, (p) => h[p]());
    }
    var pl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    function gl(d) {
      return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
    }
    var ko = { exports: {} };
    (function(d, n) {
      (function(a, h, c) {
        d.exports = c(), d.exports.default = c();
      })("slugify", pl, function() {
        var a = JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`), h = JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');
        function c(g, p) {
          if (typeof g != "string")
            throw new Error("slugify: string argument expected");
          p = typeof p == "string" ? { replacement: p } : p || {};
          var k = h[p.locale] || {}, y = p.replacement === undefined ? "-" : p.replacement, _ = p.trim === undefined ? true : p.trim, w = g.normalize().split("").reduce(function(E, P) {
            var M = k[P];
            return M === undefined && (M = a[P]), M === undefined && (M = P), M === y && (M = " "), E + M.replace(p.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "");
          }, "");
          return p.strict && (w = w.replace(/[^A-Za-z0-9\s]/g, "")), _ && (w = w.trim()), w = w.replace(/\s+/g, y), p.lower && (w = w.toLowerCase()), w;
        }
        return c.extend = function(g) {
          Object.assign(a, g);
        }, c;
      });
    })(ko);
    var ml = ko.exports;
    const vl = gl(ml);
    var $l = Object.defineProperty, Wi = (d, n, a, h) => {
      for (var c = undefined, g = d.length - 1, p;g >= 0; g--)
        (p = d[g]) && (c = p(n, a, c) || c);
      return c && $l(n, a, c), c;
    };

    class He extends De {
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
          const n = qi(this["cls-custom"]);
          typeof n == "string" ? this.$cls[this["cls-default-element"]] = n : Object.keys(this.$cls).forEach((a) => {
            const h = a;
            n[h] && (this.$cls[h] = n[h]);
          });
        }
      }
      initializeI18n() {
        if (this.i18n) {
          const n = qi(this.i18n);
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
    Wi([N({ type: String })], He.prototype, "cls-custom"), Wi([N({ type: String })], He.prototype, "i18n"), Wi([W()], He.prototype, "$i18n"), Wi([W()], He.prototype, "$cls");
    var bl = Object.defineProperty, ui = (d, n, a, h) => {
      for (var c = undefined, g = d.length - 1, p;g >= 0; g--)
        (p = d[g]) && (c = p(n, a, c) || c);
      return c && bl(n, a, c), c;
    };

    class Pt extends He {
      constructor() {
        super(...arguments), this.disabled = false, this.name = "", this.placeholder = "", this.required = false, this.value = "";
      }
      renderHidden() {
        return typeof this.$value == "string" ? D`
          <input name="${this.name}" type="hidden" value="${this.$value}" />
        ` : this.$value.map((n) => D`<input name="${this.name}[]" type="hidden" value="${n}" />`);
      }
      emit() {
        this.dispatchEvent(new CustomEvent(this["input-event"], { detail: { value: this.$value }, bubbles: true, composed: true }));
      }
      connectedCallback() {
        super.connectedCallback(), this.initializeValue();
      }
    }
    ui([N({ type: Boolean })], Pt.prototype, "disabled"), ui([N({ type: String })], Pt.prototype, "name"), ui([N({ type: String })], Pt.prototype, "placeholder"), ui([N({ type: Boolean })], Pt.prototype, "required"), ui([N({ type: String })], Pt.prototype, "value");
    var { defineProperty: wl, getOwnPropertyDescriptor: yl } = Object, Nt = (d, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? yl(n, a) : n, g = d.length - 1, p;g >= 0; g--)
        (p = d[g]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && wl(n, a, c), c;
    };
    S.InputTag = class extends Pt {
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
          const n = qi(this["slugify-options"]);
          "replacement" in n && (this.$slugOptions.replacement = n.replacement), "remove" in n && (this.$slugOptions.remove = new RegExp(n.remove, "g")), "lower" in n && (this.$slugOptions.lower = n.lower === "true"), "strict" in n && (this.$slugOptions.strict = n.strict === "true"), "locale" in n && (this.$slugOptions.locale = n.locale), "trim" in n && (this.$slugOptions.trim = n.trim === "true");
        }
      }
      push() {
        let n = this.$input;
        this.slugify && (n = vl(this.$input, this.$slugOptions)), this.$input.length >= this.minlength && !this.$tags.includes(n) && (this.$tags.push(n), this.$input = ""), this.emit();
      }
      render() {
        return D`
      <div
        class="uk-input-tag ${this.disabled === true ? "uk-disabled" : ""} ${this.$cls.div}"
      >
        ${this.$tags.map((n, a) => D`
            <div class="uk-tag ${`uk-tag-${this.state}`}">
              <span
                @click=${() => {
          var h;
          this.disabled === false && (this.$input = this.$tags[a], this.$tags = this.$tags.filter((c, g) => g !== a), (h = this.renderRoot.querySelector("input")) == null || h.focus());
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
    }, Nt([N({ type: Number })], S.InputTag.prototype, "maxlength", 2), Nt([N({ type: Number })], S.InputTag.prototype, "minlength", 2), Nt([N({ type: Boolean })], S.InputTag.prototype, "slugify", 2), Nt([N({ type: String })], S.InputTag.prototype, "slugify-options", 2), Nt([N({ type: String })], S.InputTag.prototype, "state", 2), Nt([W()], S.InputTag.prototype, "$cls", 2), Nt([W()], S.InputTag.prototype, "$input", 2), Nt([W()], S.InputTag.prototype, "$slugOptions", 2), Nt([W()], S.InputTag.prototype, "$tags", 2), S.InputTag = Nt([Ht("uk-input-tag")], S.InputTag);
    var { defineProperty: kl, getOwnPropertyDescriptor: xl } = Object, Ne = (d, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? xl(n, a) : n, g = d.length - 1, p;g >= 0; g--)
        (p = d[g]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && kl(n, a, c), c;
    };
    S.InputPin = class extends Pt {
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
              const g = c.getData("Text").substring(0, this.length);
              if (this.$v = g, g.split("").forEach((p, k) => {
                const y = this.HTMLInputs[k];
                y.disabled = false, y.value = p;
              }), g.length < this.length) {
                const p = this.HTMLInputs[g.length];
                p.disabled = false, p.focus();
              } else
                this.HTMLInputs[this.$focus].blur();
            }
          });
        });
      }
      renderInput(n) {
        return D`
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
          var g;
          const h = a.target;
          if (h.value.length === 1) {
            if (n < this.length - 1) {
              const p = this.HTMLInputs[n + 1];
              p.disabled = false, p.focus();
            }
            n === this.length - 1 && h.blur();
          }
          let c = "";
          (g = this.HTMLInputs) == null || g.forEach((p) => {
            c += p.value;
          }), this.$v = c, this.emit();
        }}"
        @focus="${() => this.$focus = n}"
        @blur="${() => this.$focus = undefined}"
      />
    `;
      }
      render() {
        return D`
      <div
        class="uk-input-pin ${this.disabled === true ? "uk-disabled" : ""} ${this.$cls.div}"
      >
        ${Array(this.length).fill("").map((n, a) => this.renderInput(a))}
      </div>
      ${this.renderHidden()}
    `;
      }
    }, Ne([N({ type: Boolean })], S.InputPin.prototype, "autofocus", 2), Ne([N({ type: Number })], S.InputPin.prototype, "length", 2), Ne([W()], S.InputPin.prototype, "$cls", 2), Ne([W()], S.InputPin.prototype, "$focus", 2), Ne([W()], S.InputPin.prototype, "$v", 2), S.InputPin = Ne([Ht("uk-input-pin")], S.InputPin);
    function xo(d) {
      const n = {}, a = (h, c, g, p) => {
        const k = g.hasAttribute("value") ? g.getAttribute("value") : g.textContent, y = { keywords: [k] };
        Object.keys(g.dataset).forEach((_) => {
          _ === "keywords" ? y.keywords = [k, ...g.dataset.keywords.split(",")] : y[_] = g.dataset[_];
        }), n[h] || (n[h] = { text: c, options: [] }), n[h].options.push({ group: h, value: k, text: g.textContent, disabled: p === true ? true : g.disabled, selected: g.hasAttribute("selected"), data: y });
      };
      return Array.from(d.children).forEach((h) => {
        if (h.nodeName === "OPTGROUP") {
          const c = h, g = c.dataset.key || c.getAttribute("label"), p = c.getAttribute("label");
          Array.from(c.children).forEach((k) => {
            a(g, p, k, c.disabled);
          });
        } else
          h.nodeName === "OPTION" && a("__", "__", h);
      }), n;
    }
    var Sl = Object.defineProperty, Vi = (d, n, a, h) => {
      for (var c = undefined, g = d.length - 1, p;g >= 0; g--)
        (p = d[g]) && (c = p(n, a, c) || c);
      return c && Sl(n, a, c), c;
    };

    class Le extends Pt {
      constructor() {
        super(...arguments), this.reactive = false, this.$term = "", this.$focused = -1, this.$open = false, this.HTMLSelect = null, this.HTMLRectParent = null, this.HTMLRectActive = null, this.observer = null, this.isRendered = false, this._options = {}, this.selected = null;
      }
      get options() {
        const n = {};
        return Object.entries(this._options).forEach(([a, h]) => {
          const c = h.options.filter((g) => {
            var p;
            return (p = g.data.keywords) == null ? undefined : p.some((k) => k.toLowerCase().includes(this.$term.toLowerCase()));
          });
          c.length > 0 && (n[a] = { text: h.text, options: c });
        }), n;
      }
      get count() {
        let n = 0;
        for (const a in this.options) {
          const h = this.options[a].options.length;
          n += h;
        }
        return n - 1;
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
        n.has("$term") && n.get("$term") !== undefined && (this.dispatchEvent(new CustomEvent(this["search-event"], { detail: { value: this.$term }, bubbles: true, composed: true })), this.updateComplete.then(() => {
          this.$focused = -1;
        })), n.has("$focused") && this.HTMLRectParent && ((a = this.HTMLRectParent.querySelector("li.uk-active")) == null || a.classList.remove("uk-active"), this.HTMLRectActive = this.HTMLRectParent.querySelectorAll("a")[this.$focused], this.HTMLRectActive && (this.focusActiveOption(), (h = this.HTMLRectActive.closest("li")) == null || h.classList.add("uk-active")));
      }
      createOptions() {
        this.reactive === false && this.isRendered === true || this.HTMLSelect && (this._options = xo(this.HTMLSelect));
      }
      navigate(n) {
        switch (n) {
          case "t":
            n === "t" && (this.$focused <= 0 ? this.$focused = this.count : this.$focused--);
            break;
          case "d":
            this.$focused < this.count ? this.$focused++ : this.$focused = 0;
            break;
        }
      }
      focusActiveOption(n = "smooth") {
        if (this.HTMLRectParent && this.HTMLRectActive) {
          const a = { parent: this.HTMLRectParent.getBoundingClientRect(), active: this.HTMLRectActive.getBoundingClientRect() };
          this.HTMLRectParent.scrollTo({ top: this.HTMLRectActive.offsetTop - this.HTMLRectParent.offsetTop - a.parent.height / 2 + a.active.height / 2, behavior: n });
        }
      }
      onKeydown(n) {
        var a;
        if (this.$open === true)
          switch (n.key) {
            case "ArrowDown":
              n.preventDefault(), this.navigate("d");
              break;
            case "ArrowUp":
              n.preventDefault(), this.navigate("t");
              break;
            case "Enter":
              if (n.preventDefault(), this.$focused === -1)
                return;
              const h = (a = this.HTMLRectActive) == null ? undefined : a.dataset;
              if (h) {
                const { key: c, index: g } = h;
                this.select(this.options[c].options[g]);
              }
              break;
          }
      }
      renderList() {
        const n = this._cls();
        return D`
      <ul class="${n.parent}" tabindex="-1" @keydown="${this.onKeydown}">
        ${fe(Object.keys(this.options), (a, h) => D`
            ${this.renderListHeader(a)}
            ${fe(this.options[a].options, (c, g) => this.renderListItem(a, c, g))}
          `)}
      </ul>
    `;
      }
      renderListHeader(n) {
        const a = this._cls();
        return n !== "__" ? D`<li class="${a["item-header"]}">${n}</li>` : "";
      }
      renderListItem(n, a, h) {
        const c = this._cls({ item: a, index: h });
        return D`
      <li class="${c.item}">
        <a
          data-key="${n}"
          data-index="${h}"
          @click="${() => this.onClick({ item: a, index: h })}"
          class="${c["item-link"]}"
          tabindex="-1"
        >
          <div class="${c["item-wrapper"]}">
            ${a.data.icon ? D`
                  <uk-icon
                    class="${c["item-icon"]}"
                    icon="${a.data.icon}"
                  ></uk-icon>
                ` : ""}
            ${a.data.description ? D`
                  <div>
                    <span class="${c["item-text"]}">${a.text}</span>
                    <div class="${c["item-subtitle"]}">
                      ${a.data.description}
                    </div>
                  </div>
                ` : D`<span class="${c["item-text"]}">${a.text}</span>`}
          </div>
          ${this.renderCheck({ item: a, index: h })}
        </a>
      </li>
    `;
      }
    }
    Vi([N({ type: Boolean })], Le.prototype, "reactive"), Vi([W()], Le.prototype, "$term"), Vi([W()], Le.prototype, "$focused"), Vi([W()], Le.prototype, "$open");
    var { defineProperty: _l, getOwnPropertyDescriptor: Al } = Object, Yi = (d, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? Al(n, a) : n, g = d.length - 1, p;g >= 0; g--)
        (p = d[g]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && _l(n, a, c), c;
    };
    S.Command = class extends Le {
      constructor() {
        super(...arguments), this.toggle = "", this.$open = true, this.HTMLModal = null, this["search-event"] = "uk-command:search", this["input-event"] = "", this["cls-default-element"] = "";
      }
      firstUpdated(n) {
        this.HTMLModal = this.renderRoot.querySelector(".uk-modal"), this.HTMLModal && (this.HTMLRectParent = this.renderRoot.querySelector("ul"), this.key !== undefined && document.addEventListener("keydown", (a) => {
          a.ctrlKey && a.key === this.key && (a.preventDefault(), window.UIkit.modal(this.HTMLModal).toggle());
        }), window.UIkit.util.on(this.HTMLModal, "hidden", () => {
          this.$focused = -1, this.$term = "";
        })), this.isRendered = true;
      }
      _cls(n) {
        return { parent: "uk-overflow-auto uk-nav uk-nav-secondary uk-cmd-body", item: (n == null ? undefined : n.item.disabled) === true ? "uk-disabled opacity-50" : "", "item-header": "uk-nav-header", "item-link": (n == null ? undefined : n.item.disabled) === false ? "uk-modal-close" : "", "item-icon": "uk-cmd-item-icon", "item-wrapper": "uk-cmd-item-wrapper", "item-text": "uk-cmd-item-text", "item-subtitle": "uk-nav-subtitle" };
      }
      onClick(n) {
        const { item: a } = n;
        this.select(a);
      }
      select(n) {
        n.disabled || (window.UIkit.modal(this.HTMLModal).hide(), this.dispatchEvent(new CustomEvent("uk-command:click", { detail: { value: n }, bubbles: true, composed: true })));
      }
      renderCheck(n) {
      }
      get $value() {
        return "";
      }
      get $text() {
        return "";
      }
      initializeValue() {
      }
      renderSearch() {
        return D`
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
      ${Object.keys(this.options).length > 0 ? D`<hr class="uk-hr" />` : ""}
    `;
      }
      render() {
        return D`
      <div class="uk-modal uk-flex-top" id="${this.toggle}" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical">
          ${this.renderSearch()} ${this.renderList()}
        </div>
      </div>
    `;
      }
    }, Yi([N({ type: String })], S.Command.prototype, "key", 2), Yi([N({ type: String })], S.Command.prototype, "toggle", 2), Yi([W()], S.Command.prototype, "$open", 2), S.Command = Yi([Ht("uk-command")], S.Command);
    var { defineProperty: El, getOwnPropertyDescriptor: Il } = Object, Rs = (d, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? Il(n, a) : n, g = d.length - 1, p;g >= 0; g--)
        (p = d[g]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && El(n, a, c), c;
    };
    S.ThemeSwitcher = class extends He {
      constructor() {
        super(...arguments), this["cls-default-element"] = "div", this.$config = {}, this.HTMLSelect = null, this.keys = {}, this.isRendered = false;
      }
      connectedCallback() {
        super.connectedCallback(), this.$config.mode = document.documentElement.classList.contains("dark") ? "dark" : "light";
        const n = JSON.parse(localStorage.getItem("__FRANKEN__") || "{}");
        Object.keys(n).forEach((a) => {
          this.$config[a] = n[a];
        }), this.HTMLSelect = this.renderRoot.querySelector("select"), this.HTMLSelect && this.isRendered === false && (this.keys = xo(this.HTMLSelect));
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
          const c = Array.from(h.classList).find((g) => g.startsWith(`uk-${n}-`));
          c && h.classList.remove(c), h.classList.add(a);
        }
        this.__FRANKEN__ = JSON.stringify(this.$config);
      }
      renderKeys(n) {
        const a = n.group;
        return D`
      <button
        class="${this.$config[a] ? this.$config[a] === n.value ? "uk-active" : "" : n.selected === true ? "uk-active" : ""}"
        @click="${() => {
          this.setKey(n.group, n.value), this.$config[a] = n.value, this.requestUpdate();
        }}"
      >
        ${n.data.hex ? D`
              <span
                class="uk-ts-hex"
                style="${`background:${n.data.hex}`}"
              ></span>
            ` : n.data.icon ? D`<uk-icon icon=${n.data.icon}></uk-icon>` : ""}
        <span class="uk-ts-text">${n.text}</span>
      </button>
    `;
      }
      render() {
        return D`
      <div class="uk-ts ${this.$cls.div}">
        ${Object.keys(this.keys).map((n) => D`
            <div class="uk-ts-key">
              <div class="uk-form-label">${this.keys[n].text}</div>
              <div class="uk-ts-value">
                ${fe(this.keys[n].options, (a) => a, (a) => this.renderKeys(a))}
              </div>
            </div>
          `)}
      </div>
    `;
      }
    }, Rs([W()], S.ThemeSwitcher.prototype, "$config", 2), Rs([W()], S.ThemeSwitcher.prototype, "__FRANKEN__", 2), S.ThemeSwitcher = Rs([Ht("uk-theme-switcher")], S.ThemeSwitcher);
    var { defineProperty: Cl, getOwnPropertyDescriptor: Tl } = Object, Xt = (d, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? Tl(n, a) : n, g = d.length - 1, p;g >= 0; g--)
        (p = d[g]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && Cl(n, a, c), c;
    };
    S.Select = class extends Le {
      constructor() {
        super(...arguments), this.drop = "mode: click", this.searchable = false, this.multiple = false, this.icon = "", this.$selected = [], this.$i18n = { "search-placeholder": "Search", "selection-count": ":n: options selected" }, this.$cls = { button: "", icon: "", dropdown: "" }, this._icon = false, this.HTMLDrop = null, this["cls-default-element"] = "button", this["input-event"] = "uk-select:input", this["search-event"] = "uk-select:search";
      }
      get $text() {
        return this.$selected.length === 0 ? this.placeholder !== "" ? this.placeholder : "Select an option" : this.multiple === false && this.selected ? this.selected.text : this.$selected.length === 1 && this.selected ? this.selected.text : this.$i18n["selection-count"].replace(":n:", this.$selected.length.toString());
      }
      connectedCallback() {
        if (super.connectedCallback(), this.hasAttribute("icon")) {
          const n = this.getAttribute("icon");
          this._icon = n === "" ? true : n;
        }
        if (this.hasAttribute("value"))
          this.$selected = this.value.split(",").map((n) => n.trim()), this.multiple || (this.$selected = this.$selected.slice(-1)), this.updateSelectedFromValues();
        else {
          let n = [];
          for (const a in this._options) {
            const h = this._options[a].options;
            if (this.multiple)
              h.forEach((c) => {
                c.selected && n.push(c.value);
              });
            else {
              const c = [...h].reverse().find((g) => g.selected);
              if (c) {
                n = [c.value], this.selected = c;
                break;
              }
            }
          }
          this.$selected = n, this.multiple && this.updateSelectedFromValues();
        }
      }
      firstUpdated(n) {
        this.HTMLDrop = this.renderRoot.querySelector(".uk-drop"), this.HTMLDrop && (this.HTMLRectParent = this.renderRoot.querySelector("ul"), window.UIkit.util.on(this.HTMLDrop, "hidden", () => {
          this.$open = false, this.$focused = -1, this.$term = "";
        }), window.UIkit.util.on(this.HTMLDrop, "shown", () => {
          this.$open = true;
        })), this.isRendered = true;
      }
      select(n) {
        n.disabled || (this.multiple ? (this.$selected.findIndex((h) => h === (n == null ? undefined : n.value)) === -1 ? this.$selected.push(n.value) : this.$selected = this.$selected.filter((h) => h !== n.value), this.$selected.length > 0 && this.updateSelectedFromValues(), this.requestUpdate()) : (this.$selected = [n.value], this.selected = n), this.emit());
      }
      updateSelectedFromValues() {
        if (this.$selected.length > 0) {
          const n = this.$selected[this.$selected.length - 1];
          for (const a in this._options) {
            const h = this._options[a].options.find((c) => c.value === n);
            if (h) {
              this.selected = h;
              break;
            }
          }
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
        return { parent: "uk-nav uk-dropdown-nav uk-overflow-auto uk-cs-options", item: (n == null ? undefined : n.item.disabled) === true ? "uk-disabled opacity-50" : "", "item-header": "uk-nav-header", "item-link": this.multiple === false ? "uk-drop-close" : "", "item-icon": "uk-cs-item-icon", "item-wrapper": "uk-cs-item-wrapper", "item-text": "uk-cs-item-text", "item-subtitle": "uk-nav-subtitle" };
      }
      onClick(n) {
        const { item: a } = n;
        this.select(a);
      }
      renderCheck(n) {
        if (this.$selected.includes(n.item.value))
          return D`<span class="uk-cs-check" data-uk-check></span>`;
      }
      renderSearch() {
        return this.searchable === true ? D`
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
          ${Object.keys(this.options).length > 0 ? D`<hr class="uk-hr" />` : ""}
        ` : "";
      }
      get $value() {
        return this.multiple ? this.$selected : this.$selected.length === 1 ? this.$selected[0] : "";
      }
      initializeValue() {
      }
      render() {
        return D`
      <div class="uk-position-relative">
        <button
          class="${this.$cls.button}"
          type="button"
          .disabled=${this.disabled}
          @keydown="${this.onKeydown}"
        >
          ${this.$text}
          ${this._icon === true ? D`
                <span
                  class="${this.$cls.icon}"
                  data-uk-drop-parent-icon
                ></span>
              ` : this.icon !== "" ? D`
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
    }, Xt([N({ type: String })], S.Select.prototype, "drop", 2), Xt([N({ type: Boolean })], S.Select.prototype, "searchable", 2), Xt([N({ type: Boolean })], S.Select.prototype, "multiple", 2), Xt([N({ type: String })], S.Select.prototype, "icon", 2), Xt([W()], S.Select.prototype, "$selected", 2), Xt([W()], S.Select.prototype, "$i18n", 2), Xt([W()], S.Select.prototype, "$cls", 2), S.Select = Xt([Ht("uk-select")], S.Select);
    var Pl = Object.defineProperty, Rt = (d, n, a, h) => {
      for (var c = undefined, g = d.length - 1, p;g >= 0; g--)
        (p = d[g]) && (c = p(n, a, c) || c);
      return c && Pl(n, a, c), c;
    };

    class Ot extends Pt {
      constructor() {
        super(...arguments), this.today = false, this.jumpable = false, this["starts-with"] = 0, this["disabled-dates"] = "", this["marked-dates"] = "", this["view-date"] = new Date().toISOString().split("T")[0], this.min = "", this.max = "", this.$i18n = { weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday", months: "January,February,March,April,May,June,July,August,September,October,November,December" }, this.isDirty = false;
      }
      get $viewDate() {
        const n = new Date(this["view-date"]);
        return n.getDate() !== 1 && n.setDate(1), n;
      }
      getUTCDate(n) {
        return new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()));
      }
      isDateInRange(n) {
        if (!this.min && !this.max)
          return true;
        const a = new Date(n);
        if (this.min) {
          const h = hi(this.min);
          if (a < h)
            return false;
        }
        if (this.max) {
          const h = hi(this.max);
          if (a > h)
            return false;
        }
        return true;
      }
      parseDates(n) {
        return n.split(",").filter(Boolean).map((a) => {
          try {
            return hi(a.trim()).toISOString().slice(0, 10);
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
          const n = qi(this.i18n);
          typeof n == "object" && (this.$i18n = Object.assign(this.$i18n, n));
        }
        this.initializeValue();
      }
    }
    Rt([N({ type: Boolean })], Ot.prototype, "today"), Rt([N({ type: Boolean })], Ot.prototype, "jumpable"), Rt([N({ type: Number })], Ot.prototype, "starts-with"), Rt([N({ type: String })], Ot.prototype, "disabled-dates"), Rt([N({ type: String })], Ot.prototype, "marked-dates"), Rt([N({ type: String })], Ot.prototype, "view-date"), Rt([N({ type: String })], Ot.prototype, "min"), Rt([N({ type: String })], Ot.prototype, "max"), Rt([W()], Ot.prototype, "$i18n");
    var { defineProperty: Ol, getOwnPropertyDescriptor: Dl } = Object, js = (d, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? Dl(n, a) : n, g = d.length - 1, p;g >= 0; g--)
        (p = d[g]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && Ol(n, a, c), c;
    };
    S.Calendar = class extends Ot {
      constructor() {
        super(...arguments), this["cls-default-element"] = "calendar", this["input-event"] = "uk-calendar:change", this.$cls = { calendar: "" }, this.navigate = (n) => {
          const a = n.target;
          if (!(a != null && a.matches("button[data-iso]")))
            return;
          const h = Array.from(this.querySelectorAll("button[data-iso]")), c = h.indexOf(a), g = this.getGridPosition(a);
          if (!g)
            return;
          const { rowIndex: p, colIndex: k } = g;
          let y;
          const _ = (E, P, M) => {
            let V = P;
            for (;V >= 0 && V < E.length; ) {
              const tt = E[V];
              if (!tt.disabled)
                return tt;
              V += M;
            }
          }, w = { ArrowLeft: () => _(h, c - 1, -1), ArrowRight: () => _(h, c + 1, 1), ArrowUp: () => this.getNextEnabledInColumn(p - 1, k, -1), ArrowDown: () => this.getNextEnabledInColumn(p + 1, k, 1), Home: () => this.getRowFirstEnabledButton(p), End: () => this.getRowLastEnabledButton(p), PageUp: () => this.getNextEnabledInColumn(0, k, 1), PageDown: () => {
            const E = this.querySelectorAll("tr");
            return this.getNextEnabledInColumn(E.length - 1, k, -1);
          } };
          if (n.key in w)
            n.preventDefault(), y = w[n.key]();
          else if (n.key === "Enter" || n.key === " ") {
            n.preventDefault(), a.click();
            return;
          }
          y == null || y.focus();
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
            const n = hi(this.value);
            this.$active = n.toISOString(), this["view-date"] = n.toISOString().slice(0, 10);
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
        let g = n;
        for (;g >= 0 && g < c.length; ) {
          const y = (k = (p = c[g]) == null ? undefined : p.children[a]) == null ? undefined : k.querySelector("button");
          if (y && !y.disabled)
            return y;
          g += h;
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
        let a = this.$viewDate.getMonth(), h = this.$viewDate.getFullYear();
        n === "prev" ? a === 0 ? (a = 11, h -= 1) : a -= 1 : a === 11 ? (a = 0, h += 1) : a += 1, this["view-date"] = `${h.toString()}-${(a + 1).toString().padStart(2, "0")}-01`;
      }
      selectMonth(n) {
        const a = this["view-date"];
        this["view-date"] = a.substring(0, 5) + (n + 1).toString().padStart(2, "0") + a.substring(7);
      }
      setYear(n) {
        /^\d{4}$/.test(n) && (this["view-date"] = n.toString() + this["view-date"].substring(4));
      }
      getGridPosition(n) {
        const a = n.closest("td"), h = a == null ? undefined : a.closest("tr");
        return h ? { rowIndex: Array.from(this.querySelectorAll("tr")).indexOf(h), colIndex: Array.from(h.children).indexOf(a) } : null;
      }
      select(n) {
        this.$active = n.ISOString, n.month !== "current" && (this["view-date"] = n.ISOString.slice(0, 10)), this.isDirty === false && (this.isDirty = true);
      }
      isDisabled(n) {
        return this.parseDates(this["disabled-dates"]).includes(n.slice(0, 10)) || !this.isDateInRange(n);
      }
      getWeekdays() {
        const n = this.$locales.weekdays;
        return this["starts-with"] === 1 && n.push(n.shift()), n.map((a) => a.substring(0, 2));
      }
      get calendar() {
        const { year: n, month: a } = { year: this.$viewDate.getFullYear(), month: this.$viewDate.getMonth() + 1 }, { currentMonth: h, daysInCurrentMonth: c, daysInPrevMonth: g } = this.getMonthInfo(n, a), p = this.getStartingDay(h);
        return this.createGrid(n, a, { startingDay: p, daysInCurrentMonth: c, daysInPrevMonth: g });
      }
      getMonthInfo(n, a) {
        return { currentMonth: new Date(n, a - 1, 1), daysInCurrentMonth: new Date(n, a, 0).getDate(), daysInPrevMonth: new Date(n, a - 1, 0).getDate() };
      }
      getStartingDay(n) {
        return (n.getDay() - this["starts-with"] + 7) % 7;
      }
      createGrid(n, a, { startingDay: h, daysInCurrentMonth: c, daysInPrevMonth: g }) {
        const p = [];
        let k = 1, y = g - h + 1;
        for (let _ = 0;_ < 6; _++) {
          const w = [];
          for (let E = 0;E < 7; E++) {
            const P = this.getDayInfo(n, a, k, E, _, h, c, y);
            w.push(P.day), { date: k, prevMonthStartDate: y } = P;
          }
          if (p.push(w), k > c && w[6].month === "next")
            break;
        }
        return p;
      }
      getDayInfo(n, a, h, c, g, p, k, y) {
        let _, w;
        g === 0 && c < p ? (_ = y++, w = -1) : h > k ? (_ = h - k, w = 1, h++) : (_ = h++, w = 0);
        const P = new Date(Date.UTC(n, a - 1 + w, _)).toISOString();
        return { day: { date: _, month: w === -1 ? "prev" : w === 1 ? "next" : "current", isCurrent: _ === this.$viewDate.getDate() && w === 0, isDisabled: this.isDisabled(P), isMarked: this.parseDates(this["marked-dates"]).includes(P.slice(0, 10)), ISOString: P }, date: h, prevMonthStartDate: y };
      }
      updated(n) {
        n.has("$active") && (this.updateComplete.then(() => {
          const a = this.renderRoot.querySelector(`button[data-iso="${this.$active}"]`);
          a && this.isDirty === true && a.focus();
        }), this.emit());
      }
      renderWeek(n) {
        return D`
      <tr role="row">
        ${fe(n, (a) => a.ISOString, this.renderDay.bind(this))}
      </tr>
    `;
      }
      renderDay(n) {
        const a = this.$active === n.ISOString, h = n.month === "current" ? "current month" : `${n.month} month`, c = !this.isDateInRange(n.ISOString), g = `${n.date} ${h}${a ? ", selected" : ""}${n.isDisabled ? ", disabled" : ""}${c ? ", out of allowed date range" : ""}`;
        return D`
      <td
        class="${n.month !== "current" ? "uk-cal-oom" : ""} ${a ? "uk-active" : ""} ${n.isMarked ? "uk-cal-marked" : ""}"
        role="gridcell"
      >
        <button
          type="button"
          data-iso="${n.ISOString}"
          @click="${() => this.select(n)}"
          aria-label="${g}"
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
        return D`
      <div class="uk-inline uk-cal-month-dropdown">
        <button class="uk-input-fake uk-form-sm" type="button">
          ${a.monthName}
        </button>
        <div class="uk-drop uk-dropdown" data-uk-dropdown="mode: click;">
          <ul class="uk-dropdown-nav uk-nav">
            ${n.map((h, c) => D`
                <li
                  class="uk-cal-month-dropdown-item ${c + 1 === a.month ? "uk-active" : ""}"
                >
                  <a @click="${() => this.selectMonth(c)}">
                    ${n[c]}
                    ${c + 1 === a.month ? D`<span data-uk-check></span>` : ""}
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
        return D`
      <div class="uk-cal-header">
        <button
          class="uk-btn uk-btn-default uk-btn-sm uk-btn-icon"
          @click=${() => this.navigateMonth("prev")}
          type="button"
          data-uk-pgn-previous
        ></button>
        <div class="uk-cal-jumper">
          ${this.jumpable ? this.renderJumper() : D`
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
        return D`
      <div class="uk-cal ${this.$cls.calendar}" role="application">
        ${this.renderHeader()}
        <table role="grid" aria-label="Calendar">
          <thead>
            <tr role="row">
              ${fe(this.getWeekdays(), (n) => n, (n) => D`<th role="columnheader" scope="col">${n}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${fe(this.calendar, (n) => n[0].ISOString, this.renderWeek.bind(this))}
          </tbody>
        </table>
        ${this.renderHidden()}
      </div>
    `;
      }
    }, js([W()], S.Calendar.prototype, "$active", 2), js([W()], S.Calendar.prototype, "$cls", 2), S.Calendar = js([Ht("uk-calendar")], S.Calendar);
    var { defineProperty: Ml, getOwnPropertyDescriptor: Hl } = Object, Dt = (d, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? Hl(n, a) : n, g = d.length - 1, p;g >= 0; g--)
        (p = d[g]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && Ml(n, a, c), c;
    };
    S.InputDate = class extends Ot {
      constructor() {
        super(...arguments), this["cls-default-element"] = "button", this["input-event"] = "uk-input-date:input", this["display-format"] = "MMMM DD, YYYY", this["with-time"] = false, this["require-time"] = false, this.drop = "mode: click", this.icon = "", this.$cls = { button: "", icon: "", dropdown: "uk-datepicker-dropdown", calendar: "", time: "" }, this._icon = false;
      }
      initializeValue() {
        if (this.value)
          try {
            const n = hi(this.value), a = n.getHours(), h = n.getMinutes();
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
          return fl(new Date(this.$value), this["display-format"], this.$locales);
        if (this.placeholder)
          return this.placeholder;
        let n = "Select a date";
        return this["with-time"] === true && (n += " and time"), n;
      }
      connectedCallback() {
        if (super.connectedCallback(), this.hasAttribute("icon")) {
          const n = this.getAttribute("icon");
          this._icon = n === "" ? true : n;
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
        return D`
      <div class="uk-datepicker">
        <div class="uk-position-relative">
          <button
            class="${this.$cls.button}"
            type="button"
            .disabled=${this.disabled}
          >
            ${this.$text}
            ${this._icon === true ? D`
                  <span
                    class="${this.$cls.icon}"
                    data-uk-calendar-icon
                  ></span>
                ` : this.icon !== "" ? D`
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

            ${this["with-time"] ? D`
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
    }, Dt([N({ type: String })], S.InputDate.prototype, "display-format", 2), Dt([N({ type: Boolean })], S.InputDate.prototype, "with-time", 2), Dt([N({ type: Boolean })], S.InputDate.prototype, "require-time", 2), Dt([N({ type: String })], S.InputDate.prototype, "drop", 2), Dt([N({ type: String })], S.InputDate.prototype, "icon", 2), Dt([W()], S.InputDate.prototype, "$date", 2), Dt([W()], S.InputDate.prototype, "$time", 2), Dt([W()], S.InputDate.prototype, "$d", 2), Dt([W()], S.InputDate.prototype, "$t", 2), Dt([W()], S.InputDate.prototype, "$cls", 2), S.InputDate = Dt([Ht("uk-input-date")], S.InputDate);
    var { defineProperty: Nl, getOwnPropertyDescriptor: Ll } = Object, Zt = (d, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? Ll(n, a) : n, g = d.length - 1, p;g >= 0; g--)
        (p = d[g]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && Nl(n, a, c), c;
    };
    S.InputTime = class extends Pt {
      constructor() {
        super(...arguments), this["cls-default-element"] = "input", this["input-event"] = "uk-input-time:input", this.autofocus = false, this.now = false, this.$i18n = { am: "am", pm: "pm" }, this.$cls = { input: "" }, this.$min = 0, this.$meridiem = "am";
      }
      initializeValue() {
        if (this.value)
          try {
            const n = dl(this.value), [a, h] = n.split(":").map(Number);
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
        const { min: a, max: h, state: c, key: g } = n;
        let p;
        switch (c) {
          case "$hour":
            p = this.$hour !== undefined ? this.$hour.toString().padStart(2, "0") : "";
            break;
          case "$min":
            p = this.$hour === undefined ? "" : this.$min > 0 ? this.$min.toString().padStart(2, "0") : "00";
            break;
        }
        return D`
      <input
        data-key="${g}"
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
          const y = k.target, _ = y.value.replace(/[^0-9]/g, "").substring(0, 2), w = parseInt(_);
          switch (c) {
            case "$hour":
              w <= 12 && (this.$hour = w);
              break;
            case "$min":
              w <= 59 && (this.$min = w);
              break;
          }
          y.value = _;
        }}"
        @blur="${(k) => {
          const y = k.target, _ = parseInt(y.value);
          switch (c) {
            case "$hour":
              if (y.value === "") {
                this.required === false ? this.$hour = undefined : y.value = this.$HH;
                return;
              }
              _ > 12 ? (this.$hour = 12, y.value = "12") : y.value = this.$HH;
              break;
            case "$min":
              _ > 59 && (this.$min = 59), y.value = this.$MM;
              break;
          }
        }}"
      />
    `;
      }
      render() {
        return D`
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
    }, Zt([N({ type: Boolean })], S.InputTime.prototype, "autofocus", 2), Zt([N({ type: Boolean })], S.InputTime.prototype, "now", 2), Zt([W()], S.InputTime.prototype, "$i18n", 2), Zt([W()], S.InputTime.prototype, "$cls", 2), Zt([W()], S.InputTime.prototype, "$hour", 2), Zt([W()], S.InputTime.prototype, "$min", 2), Zt([W()], S.InputTime.prototype, "$meridiem", 2), S.InputTime = Zt([Ht("uk-input-time")], S.InputTime);
    var { defineProperty: Bl, getOwnPropertyDescriptor: Rl } = Object, pe = (d, n, a, h) => {
      for (var c = h > 1 ? undefined : h ? Rl(n, a) : n, g = d.length - 1, p;g >= 0; g--)
        (p = d[g]) && (c = (h ? p(n, a, c) : p(c)) || c);
      return h && c && Bl(n, a, c), c;
    };
    return S.InputRange = class extends Pt {
      constructor() {
        super(...arguments), this["cls-default-element"] = "div", this["input-event"] = "uk-input-range:input", this.multiple = false, this.min = 0, this.max = 100, this.step = 1, this.label = false, this["label-position"] = "top", this.activeKnobElement = null, this._lowValue = this.min, this._highValue = this.max, this._label = false, this.focused = null, this.onPointerMove = (n) => {
          if (this.disabled || !this.focused)
            return;
          const a = this.getBoundingClientRect(), h = (n.clientX - a.left) / a.width, c = this.min + h * (this.max - this.min);
          this.handleValueChange(this.focused, c);
        }, this.onPointerUp = (n) => {
          this.activeKnobElement && (this.activeKnobElement.releasePointerCapture(n.pointerId), this.activeKnobElement = null), this.focused = null, this.removeEventListener("pointermove", this.onPointerMove), this.removeEventListener("pointerup", this.onPointerUp), this.removeEventListener("pointercancel", this.onPointerUp);
        };
      }
      get $text() {
        return "";
      }
      get $value() {
        return this.multiple ? this.value.split(",").map((n) => n.trim()) : this.value;
      }
      createRenderRoot() {
        return this;
      }
      connectedCallback() {
        super.connectedCallback();
        const n = this.getAttribute("label");
        this._label = n === "" ? true : n || false;
      }
      initializeValue() {
        this.value ? this.parseValue() : (this._lowValue = this.min, this._highValue = this.max, this.value = this.multiple ? `${this.formatValue(this._lowValue)},${this.formatValue(this._highValue)}` : this.formatValue(this._lowValue));
      }
      formatValue(n) {
        const a = n.toFixed(2);
        return a.endsWith(".00") ? a.slice(0, -3) : a;
      }
      parseValue() {
        if (this.multiple) {
          const [n, a] = this.value.split(",").map((h) => parseFloat(h));
          n !== undefined && a !== undefined && (this._lowValue = this.clamp(n), this._highValue = this.clamp(a));
        } else
          this._lowValue = this.clamp(parseFloat(this.value));
      }
      clamp(n) {
        return parseFloat(Math.min(Math.max(n, this.min), this.max).toFixed(2));
      }
      valueToPercent(n) {
        return (n - this.min) / (this.max - this.min) * 100;
      }
      updateValue() {
        this.value = this.multiple ? `${this.formatValue(this._lowValue)},${this.formatValue(this._highValue)}` : this.formatValue(this._lowValue), this.emit();
      }
      handleValueChange(n, a) {
        a = this.clamp(Math.round(a / this.step) * this.step), n === "low" ? this._lowValue = this.multiple ? Math.min(a, this._highValue) : a : this._highValue = Math.max(a, this._lowValue), this.updateValue(), this.requestUpdate();
      }
      onPointerDown(n, a) {
        this.disabled || (n.preventDefault(), this.activeKnobElement = n.currentTarget, this.focused = a, this.activeKnobElement.setPointerCapture(n.pointerId), n.currentTarget.focus(), this.addEventListener("pointermove", this.onPointerMove), this.addEventListener("pointerup", this.onPointerUp), this.addEventListener("pointercancel", this.onPointerUp));
      }
      onKeyDown(n, a) {
        if (this.disabled)
          return;
        const h = n.key === "ArrowRight" || n.key === "ArrowUp" ? this.step : n.key === "ArrowLeft" || n.key === "ArrowDown" ? -this.step : 0;
        if (h) {
          n.preventDefault();
          const c = a === "low" ? this._lowValue : this._highValue;
          this.handleValueChange(a, c + h);
        }
      }
      render() {
        const n = this.valueToPercent(this._lowValue), a = this.multiple ? this.valueToPercent(this._highValue) : n, h = `left: ${this.multiple ? n : 0}%; width: ${this.multiple ? a - n : n}%`, c = (g) => {
          const p = g === "low" ? this._lowValue : this._highValue, k = g === "low" ? n : a, y = g === "low" ? this.min : this._lowValue, _ = g === "low" ? this.multiple ? this._highValue : this.max : this.max;
          return D`
        <button
          type="button"
          class="uk-input-range-knob ${g}"
          role="slider"
          aria-valuemin="${y}"
          aria-valuemax="${_}"
          aria-valuenow="${p}"
          ?disabled=${this.disabled}
          style="left: ${k}%"
          @pointerdown=${(w) => this.onPointerDown(w, g)}
          @keydown=${(w) => this.onKeyDown(w, g)}
        >
          ${this._label ? D`
                <span class="uk-input-range-label ${this["label-position"]}">
                  ${g === "low" ? this.formatValue(p) : ""}
                  ${typeof this.label == "string" ? this.label : ""}
                  ${g === "high" ? this.formatValue(p) : ""}
                </span>
              ` : ""}
        </button>
      `;
        };
        return D`
      <div class="uk-input-range">
        <div class="uk-input-range-runnable-track"></div>
        <div class="uk-input-range-track" style="${h}"></div>
        ${c("low")} ${this.multiple ? c("high") : ""}
        ${this.renderHidden()}
      </div>
    `;
      }
      updated(n) {
        (n.has("value") || n.has("multiple")) && this.parseValue();
      }
    }, pe([N({ type: Boolean })], S.InputRange.prototype, "multiple", 2), pe([N({ type: Number })], S.InputRange.prototype, "min", 2), pe([N({ type: Number })], S.InputRange.prototype, "max", 2), pe([N({ type: Number })], S.InputRange.prototype, "step", 2), pe([N({ type: String })], S.InputRange.prototype, "label", 2), pe([N({ type: String })], S.InputRange.prototype, "label-position", 2), S.InputRange = pe([Ht("uk-input-range")], S.InputRange), window.Lit = Ja, window.LitDecorators = nl, window.LitRepeat = { repeat: fe }, Object.defineProperty(S, Symbol.toStringTag, { value: "Module" }), S;
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

// js/nayuki-qrcodegen-v1.8.0.js
var qrcodegen;
(function(qrcodegen2) {

  class QrCode {
    constructor(version, errorCorrectionLevel, dataCodewords, msk) {
      this.version = version;
      this.errorCorrectionLevel = errorCorrectionLevel;
      this.modules = [];
      this.isFunction = [];
      if (version < QrCode.MIN_VERSION || version > QrCode.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (msk < -1 || msk > 7)
        throw new RangeError("Mask value out of range");
      this.size = version * 4 + 17;
      let row = [];
      for (let i = 0;i < this.size; i++)
        row.push(false);
      for (let i = 0;i < this.size; i++) {
        this.modules.push(row.slice());
        this.isFunction.push(row.slice());
      }
      this.drawFunctionPatterns();
      const allCodewords = this.addEccAndInterleave(dataCodewords);
      this.drawCodewords(allCodewords);
      if (msk == -1) {
        let minPenalty = 1e9;
        for (let i = 0;i < 8; i++) {
          this.applyMask(i);
          this.drawFormatBits(i);
          const penalty = this.getPenaltyScore();
          if (penalty < minPenalty) {
            msk = i;
            minPenalty = penalty;
          }
          this.applyMask(i);
        }
      }
      assert(0 <= msk && msk <= 7);
      this.mask = msk;
      this.applyMask(msk);
      this.drawFormatBits(msk);
      this.isFunction = [];
    }
    static encodeText(text, ecl) {
      const segs = qrcodegen2.QrSegment.makeSegments(text);
      return QrCode.encodeSegments(segs, ecl);
    }
    static encodeBinary(data, ecl) {
      const seg = qrcodegen2.QrSegment.makeBytes(data);
      return QrCode.encodeSegments([seg], ecl);
    }
    static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
      if (!(QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= QrCode.MAX_VERSION) || mask < -1 || mask > 7)
        throw new RangeError("Invalid value");
      let version;
      let dataUsedBits;
      for (version = minVersion;; version++) {
        const dataCapacityBits2 = QrCode.getNumDataCodewords(version, ecl) * 8;
        const usedBits = QrSegment.getTotalBits(segs, version);
        if (usedBits <= dataCapacityBits2) {
          dataUsedBits = usedBits;
          break;
        }
        if (version >= maxVersion)
          throw new RangeError("Data too long");
      }
      for (const newEcl of [QrCode.Ecc.MEDIUM, QrCode.Ecc.QUARTILE, QrCode.Ecc.HIGH]) {
        if (boostEcl && dataUsedBits <= QrCode.getNumDataCodewords(version, newEcl) * 8)
          ecl = newEcl;
      }
      let bb = [];
      for (const seg of segs) {
        appendBits(seg.mode.modeBits, 4, bb);
        appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
        for (const b of seg.getData())
          bb.push(b);
      }
      assert(bb.length == dataUsedBits);
      const dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8;
      assert(bb.length <= dataCapacityBits);
      appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
      appendBits(0, (8 - bb.length % 8) % 8, bb);
      assert(bb.length % 8 == 0);
      for (let padByte = 236;bb.length < dataCapacityBits; padByte ^= 236 ^ 17)
        appendBits(padByte, 8, bb);
      let dataCodewords = [];
      while (dataCodewords.length * 8 < bb.length)
        dataCodewords.push(0);
      bb.forEach((b, i) => dataCodewords[i >>> 3] |= b << 7 - (i & 7));
      return new QrCode(version, ecl, dataCodewords, mask);
    }
    getModule(x, y) {
      return 0 <= x && x < this.size && 0 <= y && y < this.size && this.modules[y][x];
    }
    drawFunctionPatterns() {
      for (let i = 0;i < this.size; i++) {
        this.setFunctionModule(6, i, i % 2 == 0);
        this.setFunctionModule(i, 6, i % 2 == 0);
      }
      this.drawFinderPattern(3, 3);
      this.drawFinderPattern(this.size - 4, 3);
      this.drawFinderPattern(3, this.size - 4);
      const alignPatPos = this.getAlignmentPatternPositions();
      const numAlign = alignPatPos.length;
      for (let i = 0;i < numAlign; i++) {
        for (let j = 0;j < numAlign; j++) {
          if (!(i == 0 && j == 0 || i == 0 && j == numAlign - 1 || i == numAlign - 1 && j == 0))
            this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
        }
      }
      this.drawFormatBits(0);
      this.drawVersion();
    }
    drawFormatBits(mask) {
      const data = this.errorCorrectionLevel.formatBits << 3 | mask;
      let rem = data;
      for (let i = 0;i < 10; i++)
        rem = rem << 1 ^ (rem >>> 9) * 1335;
      const bits = (data << 10 | rem) ^ 21522;
      assert(bits >>> 15 == 0);
      for (let i = 0;i <= 5; i++)
        this.setFunctionModule(8, i, getBit(bits, i));
      this.setFunctionModule(8, 7, getBit(bits, 6));
      this.setFunctionModule(8, 8, getBit(bits, 7));
      this.setFunctionModule(7, 8, getBit(bits, 8));
      for (let i = 9;i < 15; i++)
        this.setFunctionModule(14 - i, 8, getBit(bits, i));
      for (let i = 0;i < 8; i++)
        this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
      for (let i = 8;i < 15; i++)
        this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
      this.setFunctionModule(8, this.size - 8, true);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let rem = this.version;
      for (let i = 0;i < 12; i++)
        rem = rem << 1 ^ (rem >>> 11) * 7973;
      const bits = this.version << 12 | rem;
      assert(bits >>> 18 == 0);
      for (let i = 0;i < 18; i++) {
        const color = getBit(bits, i);
        const a = this.size - 11 + i % 3;
        const b = Math.floor(i / 3);
        this.setFunctionModule(a, b, color);
        this.setFunctionModule(b, a, color);
      }
    }
    drawFinderPattern(x, y) {
      for (let dy = -4;dy <= 4; dy++) {
        for (let dx = -4;dx <= 4; dx++) {
          const dist = Math.max(Math.abs(dx), Math.abs(dy));
          const xx = x + dx;
          const yy = y + dy;
          if (0 <= xx && xx < this.size && 0 <= yy && yy < this.size)
            this.setFunctionModule(xx, yy, dist != 2 && dist != 4);
        }
      }
    }
    drawAlignmentPattern(x, y) {
      for (let dy = -2;dy <= 2; dy++) {
        for (let dx = -2;dx <= 2; dx++)
          this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
      }
    }
    setFunctionModule(x, y, isDark) {
      this.modules[y][x] = isDark;
      this.isFunction[y][x] = true;
    }
    addEccAndInterleave(data) {
      const ver = this.version;
      const ecl = this.errorCorrectionLevel;
      if (data.length != QrCode.getNumDataCodewords(ver, ecl))
        throw new RangeError("Invalid argument");
      const numBlocks = QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
      const blockEccLen = QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
      const rawCodewords = Math.floor(QrCode.getNumRawDataModules(ver) / 8);
      const numShortBlocks = numBlocks - rawCodewords % numBlocks;
      const shortBlockLen = Math.floor(rawCodewords / numBlocks);
      let blocks = [];
      const rsDiv = QrCode.reedSolomonComputeDivisor(blockEccLen);
      for (let i = 0, k = 0;i < numBlocks; i++) {
        let dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
        k += dat.length;
        const ecc = QrCode.reedSolomonComputeRemainder(dat, rsDiv);
        if (i < numShortBlocks)
          dat.push(0);
        blocks.push(dat.concat(ecc));
      }
      let result = [];
      for (let i = 0;i < blocks[0].length; i++) {
        blocks.forEach((block, j) => {
          if (i != shortBlockLen - blockEccLen || j >= numShortBlocks)
            result.push(block[i]);
        });
      }
      assert(result.length == rawCodewords);
      return result;
    }
    drawCodewords(data) {
      if (data.length != Math.floor(QrCode.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let i = 0;
      for (let right = this.size - 1;right >= 1; right -= 2) {
        if (right == 6)
          right = 5;
        for (let vert = 0;vert < this.size; vert++) {
          for (let j = 0;j < 2; j++) {
            const x = right - j;
            const upward = (right + 1 & 2) == 0;
            const y = upward ? this.size - 1 - vert : vert;
            if (!this.isFunction[y][x] && i < data.length * 8) {
              this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
              i++;
            }
          }
        }
      }
      assert(i == data.length * 8);
    }
    applyMask(mask) {
      if (mask < 0 || mask > 7)
        throw new RangeError("Mask value out of range");
      for (let y = 0;y < this.size; y++) {
        for (let x = 0;x < this.size; x++) {
          let invert;
          switch (mask) {
            case 0:
              invert = (x + y) % 2 == 0;
              break;
            case 1:
              invert = y % 2 == 0;
              break;
            case 2:
              invert = x % 3 == 0;
              break;
            case 3:
              invert = (x + y) % 3 == 0;
              break;
            case 4:
              invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;
              break;
            case 5:
              invert = x * y % 2 + x * y % 3 == 0;
              break;
            case 6:
              invert = (x * y % 2 + x * y % 3) % 2 == 0;
              break;
            case 7:
              invert = ((x + y) % 2 + x * y % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          if (!this.isFunction[y][x] && invert)
            this.modules[y][x] = !this.modules[y][x];
        }
      }
    }
    getPenaltyScore() {
      let result = 0;
      for (let y = 0;y < this.size; y++) {
        let runColor = false;
        let runX = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0;x < this.size; x++) {
          if (this.modules[y][x] == runColor) {
            runX++;
            if (runX == 5)
              result += QrCode.PENALTY_N1;
            else if (runX > 5)
              result++;
          } else {
            this.finderPenaltyAddHistory(runX, runHistory);
            if (!runColor)
              result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
            runColor = this.modules[y][x];
            runX = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * QrCode.PENALTY_N3;
      }
      for (let x = 0;x < this.size; x++) {
        let runColor = false;
        let runY = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0;y < this.size; y++) {
          if (this.modules[y][x] == runColor) {
            runY++;
            if (runY == 5)
              result += QrCode.PENALTY_N1;
            else if (runY > 5)
              result++;
          } else {
            this.finderPenaltyAddHistory(runY, runHistory);
            if (!runColor)
              result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
            runColor = this.modules[y][x];
            runY = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * QrCode.PENALTY_N3;
      }
      for (let y = 0;y < this.size - 1; y++) {
        for (let x = 0;x < this.size - 1; x++) {
          const color = this.modules[y][x];
          if (color == this.modules[y][x + 1] && color == this.modules[y + 1][x] && color == this.modules[y + 1][x + 1])
            result += QrCode.PENALTY_N2;
        }
      }
      let dark = 0;
      for (const row of this.modules)
        dark = row.reduce((sum, color) => sum + (color ? 1 : 0), dark);
      const total = this.size * this.size;
      const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
      assert(0 <= k && k <= 9);
      result += k * QrCode.PENALTY_N4;
      assert(0 <= result && result <= 2568888);
      return result;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      else {
        const numAlign = Math.floor(this.version / 7) + 2;
        const step = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
        let result = [6];
        for (let pos = this.size - 7;result.length < numAlign; pos -= step)
          result.splice(1, 0, pos);
        return result;
      }
    }
    static getNumRawDataModules(ver) {
      if (ver < QrCode.MIN_VERSION || ver > QrCode.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let result = (16 * ver + 128) * ver + 64;
      if (ver >= 2) {
        const numAlign = Math.floor(ver / 7) + 2;
        result -= (25 * numAlign - 10) * numAlign - 55;
        if (ver >= 7)
          result -= 36;
      }
      assert(208 <= result && result <= 29648);
      return result;
    }
    static getNumDataCodewords(ver, ecl) {
      return Math.floor(QrCode.getNumRawDataModules(ver) / 8) - QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
    }
    static reedSolomonComputeDivisor(degree) {
      if (degree < 1 || degree > 255)
        throw new RangeError("Degree out of range");
      let result = [];
      for (let i = 0;i < degree - 1; i++)
        result.push(0);
      result.push(1);
      let root = 1;
      for (let i = 0;i < degree; i++) {
        for (let j = 0;j < result.length; j++) {
          result[j] = QrCode.reedSolomonMultiply(result[j], root);
          if (j + 1 < result.length)
            result[j] ^= result[j + 1];
        }
        root = QrCode.reedSolomonMultiply(root, 2);
      }
      return result;
    }
    static reedSolomonComputeRemainder(data, divisor) {
      let result = divisor.map((_) => 0);
      for (const b of data) {
        const factor = b ^ result.shift();
        result.push(0);
        divisor.forEach((coef, i) => result[i] ^= QrCode.reedSolomonMultiply(coef, factor));
      }
      return result;
    }
    static reedSolomonMultiply(x, y) {
      if (x >>> 8 != 0 || y >>> 8 != 0)
        throw new RangeError("Byte out of range");
      let z = 0;
      for (let i = 7;i >= 0; i--) {
        z = z << 1 ^ (z >>> 7) * 285;
        z ^= (y >>> i & 1) * x;
      }
      assert(z >>> 8 == 0);
      return z;
    }
    finderPenaltyCountPatterns(runHistory) {
      const n = runHistory[1];
      assert(n <= this.size * 3);
      const core = n > 0 && runHistory[2] == n && runHistory[3] == n * 3 && runHistory[4] == n && runHistory[5] == n;
      return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
      if (currentRunColor) {
        this.finderPenaltyAddHistory(currentRunLength, runHistory);
        currentRunLength = 0;
      }
      currentRunLength += this.size;
      this.finderPenaltyAddHistory(currentRunLength, runHistory);
      return this.finderPenaltyCountPatterns(runHistory);
    }
    finderPenaltyAddHistory(currentRunLength, runHistory) {
      if (runHistory[0] == 0)
        currentRunLength += this.size;
      runHistory.pop();
      runHistory.unshift(currentRunLength);
    }
  }
  QrCode.MIN_VERSION = 1;
  QrCode.MAX_VERSION = 40;
  QrCode.PENALTY_N1 = 3;
  QrCode.PENALTY_N2 = 3;
  QrCode.PENALTY_N3 = 40;
  QrCode.PENALTY_N4 = 10;
  QrCode.ECC_CODEWORDS_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ];
  QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ];
  qrcodegen2.QrCode = QrCode;
  function appendBits(val, len, bb) {
    if (len < 0 || len > 31 || val >>> len != 0)
      throw new RangeError("Value out of range");
    for (let i = len - 1;i >= 0; i--)
      bb.push(val >>> i & 1);
  }
  function getBit(x, i) {
    return (x >>> i & 1) != 0;
  }
  function assert(cond) {
    if (!cond)
      throw new Error("Assertion error");
  }

  class QrSegment {
    constructor(mode, numChars, bitData) {
      this.mode = mode;
      this.numChars = numChars;
      this.bitData = bitData;
      if (numChars < 0)
        throw new RangeError("Invalid argument");
      this.bitData = bitData.slice();
    }
    static makeBytes(data) {
      let bb = [];
      for (const b of data)
        appendBits(b, 8, bb);
      return new QrSegment(QrSegment.Mode.BYTE, data.length, bb);
    }
    static makeNumeric(digits) {
      if (!QrSegment.isNumeric(digits))
        throw new RangeError("String contains non-numeric characters");
      let bb = [];
      for (let i = 0;i < digits.length; ) {
        const n = Math.min(digits.length - i, 3);
        appendBits(parseInt(digits.substr(i, n), 10), n * 3 + 1, bb);
        i += n;
      }
      return new QrSegment(QrSegment.Mode.NUMERIC, digits.length, bb);
    }
    static makeAlphanumeric(text) {
      if (!QrSegment.isAlphanumeric(text))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let bb = [];
      let i;
      for (i = 0;i + 2 <= text.length; i += 2) {
        let temp = QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
        temp += QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
        appendBits(temp, 11, bb);
      }
      if (i < text.length)
        appendBits(QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
      return new QrSegment(QrSegment.Mode.ALPHANUMERIC, text.length, bb);
    }
    static makeSegments(text) {
      if (text == "")
        return [];
      else if (QrSegment.isNumeric(text))
        return [QrSegment.makeNumeric(text)];
      else if (QrSegment.isAlphanumeric(text))
        return [QrSegment.makeAlphanumeric(text)];
      else
        return [QrSegment.makeBytes(QrSegment.toUtf8ByteArray(text))];
    }
    static makeEci(assignVal) {
      let bb = [];
      if (assignVal < 0)
        throw new RangeError("ECI assignment value out of range");
      else if (assignVal < 1 << 7)
        appendBits(assignVal, 8, bb);
      else if (assignVal < 1 << 14) {
        appendBits(2, 2, bb);
        appendBits(assignVal, 14, bb);
      } else if (assignVal < 1e6) {
        appendBits(6, 3, bb);
        appendBits(assignVal, 21, bb);
      } else
        throw new RangeError("ECI assignment value out of range");
      return new QrSegment(QrSegment.Mode.ECI, 0, bb);
    }
    static isNumeric(text) {
      return QrSegment.NUMERIC_REGEX.test(text);
    }
    static isAlphanumeric(text) {
      return QrSegment.ALPHANUMERIC_REGEX.test(text);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(segs, version) {
      let result = 0;
      for (const seg of segs) {
        const ccbits = seg.mode.numCharCountBits(version);
        if (seg.numChars >= 1 << ccbits)
          return Infinity;
        result += 4 + ccbits + seg.bitData.length;
      }
      return result;
    }
    static toUtf8ByteArray(str) {
      str = encodeURI(str);
      let result = [];
      for (let i = 0;i < str.length; i++) {
        if (str.charAt(i) != "%")
          result.push(str.charCodeAt(i));
        else {
          result.push(parseInt(str.substr(i + 1, 2), 16));
          i += 2;
        }
      }
      return result;
    }
  }
  QrSegment.NUMERIC_REGEX = /^[0-9]*$/;
  QrSegment.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
  QrSegment.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  qrcodegen2.QrSegment = QrSegment;
})(qrcodegen || (qrcodegen = {}));
(function(qrcodegen2) {
  var QrCode;
  (function(QrCode2) {

    class Ecc {
      constructor(ordinal, formatBits) {
        this.ordinal = ordinal;
        this.formatBits = formatBits;
      }
    }
    Ecc.LOW = new Ecc(0, 1);
    Ecc.MEDIUM = new Ecc(1, 0);
    Ecc.QUARTILE = new Ecc(2, 3);
    Ecc.HIGH = new Ecc(3, 2);
    QrCode2.Ecc = Ecc;
  })(QrCode = qrcodegen2.QrCode || (qrcodegen2.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
(function(qrcodegen2) {
  var QrSegment;
  (function(QrSegment2) {

    class Mode {
      constructor(modeBits, numBitsCharCount) {
        this.modeBits = modeBits;
        this.numBitsCharCount = numBitsCharCount;
      }
      numCharCountBits(ver) {
        return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
      }
    }
    Mode.NUMERIC = new Mode(1, [10, 12, 14]);
    Mode.ALPHANUMERIC = new Mode(2, [9, 11, 13]);
    Mode.BYTE = new Mode(4, [8, 16, 16]);
    Mode.KANJI = new Mode(8, [8, 10, 12]);
    Mode.ECI = new Mode(7, [0, 0, 0]);
    QrSegment2.Mode = Mode;
  })(QrSegment = qrcodegen2.QrSegment || (qrcodegen2.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));

// js/landing-qrcode.js
function toSvgString(qr, border, lightColor, darkColor) {
  if (border < 0)
    throw new RangeError("Border must be non-negative");
  let parts = [];
  for (let y = 0;y < qr.size; y++) {
    for (let x = 0;x < qr.size; x++) {
      if (qr.getModule(x, y))
        parts.push(`M${x + border},${y + border}h1v1h-1z`);
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ${qr.size + border * 2} ${qr.size + border * 2}" stroke="none" style="width: 100%;" class="object-fit"><rect width="100%" height="100%" fill="${lightColor}"/><path d="${parts.join(" ")}" fill="${darkColor}"/></svg>
`;
}
function generateQrCode(text) {
  return toSvgString(qrcodegen.QrCode.encodeText(text, qrcodegen.QrCode.Ecc.MEDIUM), 3, "#ffffff", "#000000");
}
var svg = generateQrCode(window.location.origin + "/signup.html");
document.getElementById("hero-svg").innerHTML = svg;
document.getElementById("hero-svg").classList.remove("uk-placeholder");
