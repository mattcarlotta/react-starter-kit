!(function (e) { function t(t) { for (var n, u, c = t[0], i = t[1], l = t[2], f = 0, p = []; f < c.length; f++)u = c[f], o[u] && p.push(o[u][0]), o[u] = 0; for (n in i)Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]); for (s && s(t); p.length;)p.shift()(); return a.push.apply(a, l || []), r(); } function r() { for (var e, t = 0; t < a.length; t++) { for (var r = a[t], n = !0, c = 1; c < r.length; c++) { const i = r[c]; o[i] !== 0 && (n = !1); }n && (a.splice(t--, 1), e = u(u.s = r[0])); } return e; } const n = {}; var o = { 0: 0 }; var a = []; function u(t) { if (n[t]) return n[t].exports; const r = n[t] = { i: t, l: !1, exports: {} }; return e[t].call(r.exports, r, r.exports, u), r.l = !0, r.exports; }u.m = e, u.c = n, u.d = function (e, t, r) { u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }); }, u.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, u.t = function (e, t) { if (1 & t && (e = u(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; const r = Object.create(null); if (u.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (const n in e)u.d(r, n, (t => e[t]).bind(null, n)); return r; }, u.n = function (e) { const t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return u.d(t, 'a', t), t; }, u.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, u.p = '/assets/'; let c = window.webpackJsonp = window.webpackJsonp || []; const i = c.push.bind(c); c.push = t, c = c.slice(); for (let l = 0; l < c.length; l++)t(c[l]); var s = i; a.push([0, 1]), r(); }({
  '++QH': function (e, t, r) { e.exports = { Error: 'styles__Error--1_EQo' }; },
  0(e, t, r) { e.exports = r('ftlp'); },
  '0NJD': function (e, t, r) { e.exports = { UserCard: 'styles__UserCard--24o6v' }; },
  '0tbs': function (e, t, r) { e.exports = { Loading: 'styles__Loading--3KZIF' }; },
  '9At1': function (e, t, r) {
    const n = {}; r.r(n), r.d(n, 'fetchUser', () => c), r.d(n, 'fetchUserIfNeeded', () => i); r('VRzm'), r('ls82'); const o = r('vDqi'); const a = r.n(o); function u(e, t, r, n, o, a, u) { try { var c = e[a](u); var i = c.value; } catch (e) { return void r(e); }c.done ? t(i) : Promise.resolve(i).then(n, o); } var c = function (e) { const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'https://jsonplaceholder.typicode.com/users'; return (function () { let r; const n = (r = regeneratorRuntime.mark(function r(n) { let o; let u; return regeneratorRuntime.wrap((r) => { for (;;) switch (r.prev = r.next) { case 0: return n({ type: 'USER_REQUESTING', userId: e }), r.prev = 1, r.next = 4, a.a.get(''.concat(t, '/').concat(e)); case 4: o = r.sent, u = o.data, n({ type: 'USER_SUCCESS', userId: e, data: u }), r.next = 12; break; case 9: r.prev = 9, r.t0 = r.catch(1), n({ type: 'USER_FAILURE', userId: e, err: r.t0.message }); case 12: case 'end': return r.stop(); } }, r, this, [[1, 9]]); }), function () { const e = this; const t = arguments; return new Promise(((n, o) => { const a = r.apply(e, t); function c(e) { u(a, n, o, c, i, 'next', e); } function i(e) { u(a, n, o, c, i, 'throw', e); }c(void 0); })); }); return function (e) { return n.apply(this, arguments); }; }()); }; var i = function (e) { return function (t, r) { return (function (e, t) { const r = e.userInfo[t]; return !r || r.readyStatus !== 'USER_SUCCESS'; }(r(), e)) ? t(c(e)) : null; }; }; r.d(t, 'a', () => n);
  },
  P1qj(e, t, r) {
    r.r(t); const n = r('q1tI'); const o = r.n(n); const a = r('TJpk'); const u = r.n(a); const c = r('nRtY'); const i = r.n(c); const l = r('SWgT'); t.default = function () { return o.a.createElement('div', { className: l.homeContainer }, o.a.createElement(u.a, { title: 'Home' }), o.a.createElement('div', { className: l.logoContainer }, o.a.createElement('img', { className: l.logoStyle, src: i.a, alt: '' }), o.a.createElement('h1', { className: l.textInfo }, 'Webpack SSR Boilerplate'), o.a.createElement('h1', { className: l.textInfo }, 'Edit ./components and save to reload.'))); };
  },
  RH0N(e, t, r) {
    r.r(t); r('rE2o'), r('ioFf'), r('/SS/'), r('SRfc'); const n = r('q1tI'); const o = r.n(n); const a = r('ANjH'); const u = r('/MKj'); const c = r('Ty5D'); const i = r('TJpk'); const l = r.n(i); const s = r('9At1'); const f = (r('f3/d'), r('0NJD')); const p = r.n(f); const d = function (e) { const t = e.info; return o.a.createElement('div', { className: p.a.UserCard }, o.a.createElement('h4', null, 'User Card'), o.a.createElement('ul', null, o.a.createElement('li', null, 'Name: ', t.name), o.a.createElement('li', null, 'Phone: ', t.phone), o.a.createElement('li', null, 'Email: ', t.email), o.a.createElement('li', null, 'Website: ', t.website))); }; const m = r('vPZG'); const y = r.n(m); function b(e) { return (b = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; })(e); } function v(e, t) { for (let r = 0; r < t.length; r++) { const n = t[r]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n); } } function E(e) { return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e); })(e); } function S(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; } function h(e, t) { return (h = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e; })(e, t); }r.d(t, 'UserInfo', () => _); var _ = (function (e) {
      function t() {
        let e; let r; let n; let a; let u; let c; let i; !(function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }(this, t)); for (var l = arguments.length, s = new Array(l), f = 0; f < l; f++)s[f] = arguments[f]; return n = this, a = (e = E(t)).call.apply(e, [this].concat(s)), r = !a || b(a) !== 'object' && typeof a !== 'function' ? S(n) : a, u = S(r), i = function () { const e = r.props; const t = e.userInfo[e.match.params.id]; return t && t.readyStatus !== 'USER_REQUESTING' ? t.readyStatus === 'USER_FAILURE' ? o.a.createElement('p', null, 'Oops, Failed to load info!') : o.a.createElement(d, { info: t.info }) : o.a.createElement('p', null, 'Loading...'); }, (c = 'renderUserCard') in u ? Object.defineProperty(u, c, {
          value: i, enumerable: !0, configurable: !0, writable: !0,
        }) : u[c] = i, r;
      } let r; let a; let u; return (function (e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError('Super expression must either be null or a function'); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && h(e, t); }(t, n.PureComponent)), r = t, (a = [{ key: 'componentDidMount', value() { const e = this.props; (0, e.fetchUserIfNeeded)(e.match.params.id); } }, { key: 'render', value() { return o.a.createElement('div', { className: y.a.UserInfo }, o.a.createElement(l.a, { title: 'User Info' }), this.renderUserCard()); } }]) && v(r.prototype, a), u && v(r, u), t;
    }()); t.default = Object(a.compose)(c.f, Object(u.c)(e => ({ userInfo: e.userInfo }), e => ({ fetchUserIfNeeded(t) { return e(s.a.fetchUserIfNeeded(t)); } })))(_);
  },
  SWgT(e, t, r) {
    e.exports = {
      'clear-fix': 'Home__clear-fix--GYDG5', logoContainer: 'Home__logoContainer--1zypO', homeContainer: 'Home__homeContainer--1M1Er', logoStyle: 'Home__logoStyle--3kzGu', textInfo: 'Home__textInfo--3kTr-',
    };
  },
  Wabq(e, t, r) { e.exports = { 'clear-fix': 'styles__clear-fix--9JgJr', app: 'styles__app--1-d1D' }; },
  ftlp(e, t, r) {
    r.r(t); const n = r('q1tI'); const o = r.n(n); const a = r('i8i4'); const u = r('YHGo'); const c = r('0cfB'); const i = r('/MKj'); const l = r('u4tm'); const s = r('55Ip'); const f = r('V/vL'); const p = r('CnBM'); const d = r.n(p); const m = r('ANjH'); const y = r('tRgb'); const b = r('/TnQ'); const v = r('sINF'); const E = (r('rGqo'), r('yt8O'), r('RW0V'), { readyStatus: 'USERS_INVALID', err: null, list: [] }); const S = r('3OWR'); const h = r.n(S); function g(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r, enumerable: !0, configurable: !0, writable: !0,
      }) : e[t] = r, e;
    } function O(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r, enumerable: !0, configurable: !0, writable: !0,
      }) : e[t] = r, e;
    } const U = { home() { const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E; const t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case 'USERS_REQUESTING': return _.assign({}, e, { readyStatus: 'USERS_REQUESTING' }); case 'USERS_FAILURE': return _.assign({}, e, { readyStatus: 'USERS_FAILURE', err: t.err }); case 'USERS_SUCCESS': return _.assign({}, e, { readyStatus: 'USERS_SUCCESS', list: t.data }); default: return e; } }, userInfo() { const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; const t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case 'USER_REQUESTING': return h()({}, e, g({}, t.userId, { readyStatus: 'USER_REQUESTING' })); case 'USER_FAILURE': return h()({}, e, g({}, t.userId, { readyStatus: 'USER_FAILURE', err: t.err })); case 'USER_SUCCESS': return h()({}, e, g({}, t.userId, { readyStatus: 'USER_SUCCESS', info: t.data })); default: return e; } } }; const I = function (e) { return Object(m.combineReducers)(function (e) { for (let t = 1; t < arguments.length; t++) { var r = arguments[t] != null ? arguments[t] : {}; let n = Object.keys(r); typeof Object.getOwnPropertySymbols === 'function' && (n = n.concat(Object.getOwnPropertySymbols(r).filter(e => Object.getOwnPropertyDescriptor(r, e).enumerable))), n.forEach((t) => { O(e, t, r[t]); }); } return e; }({ router: Object(l.b)(e) }, U)); }; const j = r('9At1'); const R = r('TJpk'); const w = r.n(R); const N = (r('9d8Q'), r('Wabq')); const P = {
      htmlAttributes: { lang: 'en' }, title: 'Webpack-React-Boilerplate', titleTemplate: 'SSR - %s', meta: [{ name: 'description', content: 'The best react universal starter boilerplate in the world.' }],
    }; const C = function (e) { const t = e.route; return o.a.createElement('div', { className: N.app }, o.a.createElement(w.a, P), Object(f.a)(t.routes)); }; const x = (r('VRzm'), r('++QH')); const T = r.n(x); const k = function (e) { const t = e.error; return o.a.createElement('div', { className: T.a.Error }, o.a.createElement('p', null, 'Oops! ', t.message)); }; const F = r('0tbs'); const A = r.n(F); const D = function (e) { const t = e.pastDelay; return e.error ? o.a.createElement(k, { error: new Error('Failed to load component') }) : t ? o.a.createElement('div', { className: A.a.Loading }, o.a.createElement('p', null, 'Loading...')) : null; }; const H = d()({
      loader() { return Promise.resolve().then(() => (function (e) { if (e && e.__esModule) return e; const t = {}; if (e != null) for (const r in e) if (Object.prototype.hasOwnProperty.call(e, r)) { const n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {}; n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]; } return t.default = e, t; }(r('P1qj')))); }, modules: ['./Home'], webpack() { return ['P1qj']; }, loading: D,
    }); const L = d()({
      loader() { return Promise.resolve().then(() => (function (e) { if (e && e.__esModule) return e; const t = {}; if (e != null) for (const r in e) if (Object.prototype.hasOwnProperty.call(e, r)) { const n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {}; n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]; } return t.default = e, t; }(r('RH0N')))); }, modules: ['./UserInfo'], webpack() { return ['RH0N']; }, loading: D,
    }); const G = r('pk6I'); const M = [{ component: C, routes: [{ path: '/', exact: !0, component: H }, { path: '/UserInfo/:id', component: L, loadData(e) { const t = e.params; return [j.a.fetchUserIfNeeded(t.id)]; } }, { component() { return o.a.createElement('div', { className: G.notfoundContainer }, o.a.createElement(w.a, { title: 'Page Not Found' }), o.a.createElement('div', { className: G.notfound }, o.a.createElement('h1', null, '404 - Page Not Found!'), o.a.createElement(s.b, { to: '/' }, 'Go Back'))); } }] }]; const Q = Object(u.a)(); const W = window.__INITIAL_STATE__; const q = (function (e) { const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; const r = Object(m.applyMiddleware)(v.a, Object(y.a)(e)); return Object(m.createStore)(I(e), t, Object(b.composeWithDevTools)(r)); }(Q, W)); d.a.preloadReady().then(() => { return e = M, void Object(a.hydrate)(o.a.createElement(c.AppContainer, null, o.a.createElement(i.a, { store: q }, o.a.createElement(l.a, { history: Q }, o.a.createElement(s.a, null, Object(f.a)(e))))), document.getElementById('root')); let e; });
  },
  nRtY(e, t, r) { e.exports = `${r.p}mernLogoSSR3.0508a76a.png`; },
  pk6I(e, t, r) { e.exports = { 'clear-fix': 'NotFound__clear-fix--1IaFF', notfoundContainer: 'NotFound__notfoundContainer--2mUMN', notfound: 'NotFound__notfound--bScSR' }; },
  vPZG(e, t, r) { e.exports = { UserInfo: 'styles__UserInfo--2OzWK' }; },
}));
