webpackJsonp([1],{0:function(t,e,n){(function(t,e){"use strict";function r(t){return{todos:t.todo,data:t.data}}function o(t){return{actions:i(u,t)}}var i=n(24).bindActionCreators,s=n(55).connect,u=n(97),a=n(99),c=n(55).Provider;n(101);var p=a({a:123}),f=t.createClass({getInitialState:function(){return{filter:"123"}},click:function(){var t=this.props.actions;t.getAll()},render:function(){this.props.todos,this.props.actions;return React.createElement("div",null,React.createElement("button",{type:"button",style:{marginTop:20},onClick:this.click},"点击获取全部"))}}),d=s(r,o)(f);e.render(React.createElement(c,{store:p},React.createElement(d,null)),document.getElementById("app"))}).call(e,n(23),n(54))},24:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0,e.compose=e.applyMiddleware=e.bindActionCreators=e.combineReducers=e.createStore=void 0;var o=n(93),i=r(o),s=n(183),u=r(s),a=n(182),c=r(a),p=n(181),f=r(p),d=n(92),l=r(d),h=n(94);r(h);e.createStore=i["default"],e.combineReducers=u["default"],e.bindActionCreators=c["default"],e.applyMiddleware=f["default"],e.compose=l["default"]},53:function(t,e){"use strict";t.exports={ADD_TODO:"ADD_TODO",DELETE_TODO:"DELETE_TODO",EDIT_TODO:"EDIT_TODO",COMPLETE_TODO:"COMPLETE_TODO",COMPLETE_ALL:"COMPLETE_ALL",CLEAR_COMPLETED:"CLEAR_COMPLETED",GET_ALL:"GET_ALL"}},55:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0,e.connect=e.Provider=void 0;var o=n(103),i=r(o),s=n(104),u=r(s);e.Provider=i["default"],e.connect=u["default"]},56:function(t,e,n){"use strict";e.__esModule=!0;var r=n(23);e["default"]=r.PropTypes.shape({subscribe:r.PropTypes.func.isRequired,dispatch:r.PropTypes.func.isRequired,getState:r.PropTypes.func.isRequired})},57:function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error;try{throw new Error(t)}catch(e){}}e.__esModule=!0,e["default"]=n},92:function(t,e){"use strict";function n(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};var r=function(){var t=e[e.length-1],n=e.slice(0,-1);return{v:function(){return n.reduceRight(function(t,e){return e(t)},t.apply(void 0,arguments))}}}();return"object"==typeof r?r.v:void 0}e.__esModule=!0,e["default"]=n},93:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e,n){function r(){b===v&&(b=v.slice())}function i(){return y}function u(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var e=!0;return r(),b.push(t),function(){if(e){e=!1,r();var n=b.indexOf(t);b.splice(n,1)}}}function p(t){if(!(0,s["default"])(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(P)throw new Error("Reducers may not dispatch actions.");try{P=!0,y=h(y,t)}finally{P=!1}for(var e=v=b,n=0;n<e.length;n++)e[n]();return t}function f(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");h=t,p({type:c.INIT})}function d(){var t,e=u;return t={subscribe:function(t){function n(){t.next&&t.next(i())}if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");n();var r=e(n);return{unsubscribe:r}}},t[a["default"]]=function(){return this},t}var l;if("function"==typeof e&&"undefined"==typeof n&&(n=e,e=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var h=t,y=e,v=[],b=v,P=!1;return p({type:c.INIT}),l={dispatch:p,subscribe:u,getState:i,replaceReducer:f},l[a["default"]]=d,l}e.__esModule=!0,e.ActionTypes=void 0,e["default"]=o;var i=n(95),s=r(i),u=n(187),a=r(u),c=e.ActionTypes={INIT:"@@redux/INIT"}},94:function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error;try{throw new Error(t)}catch(e){}}e.__esModule=!0,e["default"]=n},95:[190,184,185,186],97:function(t,e,n){"use strict";var r=n(53);t.exports={addTodo:function(t){return{type:r.ADD_TODO,text:t}},deleteTodo:function(t){return{type:r.DELETE_TODO,id:t}},editTodo:function(t,e){return{type:r.EDIT_TODO,id:t,text:e}},completeTodo:function(t){return{type:r.COMPLETE_TODO,id:t}},completeAll:function(t){return{type:r.COMPLETE_ALL}},clearCompleted:function(t){return{type:r.CLEAR_COMPLETED}},getAll:function(){return{type:r.GET_ALL}}}},98:function(t,e,n){"use strict";var r=n(24).combineReducers,o=n(53),i=[{text:"Use Redux",completed:!1,id:0}],s=function(){var t=arguments.length<=0||void 0===arguments[0]?i:arguments[0],e=arguments[1];switch(e.type){case o.ADD_TODO:return[{id:t.reduce(function(t,e){return Math.max(e.id,t)},-1)+1,completed:!1,text:e.text}].concat(t);case o.DELETE_TODO:return t.filter(function(t){return t.id!==e.id});case o.EDIT_TODO:return t.map(function(t){return t.id===e.id?Object.assign({},t,{text:e.text}):t});case o.COMPLETE_TODO:return t.map(function(t){return t.id===e.id?Object.assign({},t,{completed:!t.completed}):t});case o.COMPLETE_ALL:var n=t.every(function(t){return t.completed});return t.map(function(t){return Object.assign({},t,{completed:!n})});case o.CLEAR_COMPLETED:return t.filter(function(t){return t.completed===!1});case o.GET_ALL:return e;default:return t}},u=r({todo:s});t.exports=u},99:function(t,e,n){"use strict";var r=n(24).createStore,o=n(98),i=n(24).applyMiddleware,s=n(180)["default"];t.exports=function(t){var e=i(s)(r);return e(o,t)}},101:100,103:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e["default"]=void 0;var u=n(23),a=n(56),c=r(a),p=n(57),f=(r(p),function(t){function e(n,r){o(this,e);var s=i(this,t.call(this,n,r));return s.store=n.store,s}return s(e,t),e.prototype.getChildContext=function(){return{store:this.store}},e.prototype.render=function(){var t=this.props.children;return u.Children.only(t)},e}(u.Component));e["default"]=f,f.propTypes={store:c["default"].isRequired,children:u.PropTypes.element.isRequired},f.childContextTypes={store:c["default"].isRequired}},104:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t){return t.displayName||t.name||"Component"}function a(t,e){try{return t.apply(e)}catch(n){return S.value=n,S}}function c(t,e,n){var r=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],c=Boolean(t),d=t||w,h=void 0;h="function"==typeof e?e:e?(0,b["default"])(e):_;var v=n||D,P=r.pure,O=void 0===P?!0:P,m=r.withRef,T=void 0===m?!1:m,C=O&&v!==D,x=M++;return function(t){function e(t,e,n){var r=v(t,e,n);return r}var n="Connect("+u(t)+")",r=function(r){function u(t,e){o(this,u);var s=i(this,r.call(this,t,e));s.version=x,s.store=t.store||e.store,(0,g["default"])(s.store,'Could not find "store" in either the context or '+('props of "'+n+'". ')+"Either wrap the root component in a <Provider>, "+('or explicitly pass "store" as a prop to "'+n+'".'));var a=s.store.getState();return s.state={storeState:a},s.clearCache(),s}return s(u,r),u.prototype.shouldComponentUpdate=function(){return!O||this.haveOwnPropsChanged||this.hasStoreStateChanged},u.prototype.computeStateProps=function(t,e){if(!this.finalMapStateToProps)return this.configureFinalMapState(t,e);var n=t.getState(),r=this.doStatePropsDependOnOwnProps?this.finalMapStateToProps(n,e):this.finalMapStateToProps(n);return r},u.prototype.configureFinalMapState=function(t,e){var n=d(t.getState(),e),r="function"==typeof n;return this.finalMapStateToProps=r?n:d,this.doStatePropsDependOnOwnProps=1!==this.finalMapStateToProps.length,r?this.computeStateProps(t,e):n},u.prototype.computeDispatchProps=function(t,e){if(!this.finalMapDispatchToProps)return this.configureFinalMapDispatch(t,e);var n=t.dispatch,r=this.doDispatchPropsDependOnOwnProps?this.finalMapDispatchToProps(n,e):this.finalMapDispatchToProps(n);return r},u.prototype.configureFinalMapDispatch=function(t,e){var n=h(t.dispatch,e),r="function"==typeof n;return this.finalMapDispatchToProps=r?n:h,this.doDispatchPropsDependOnOwnProps=1!==this.finalMapDispatchToProps.length,r?this.computeDispatchProps(t,e):n},u.prototype.updateStatePropsIfNeeded=function(){var t=this.computeStateProps(this.store,this.props);return this.stateProps&&(0,y["default"])(t,this.stateProps)?!1:(this.stateProps=t,!0)},u.prototype.updateDispatchPropsIfNeeded=function(){var t=this.computeDispatchProps(this.store,this.props);return this.dispatchProps&&(0,y["default"])(t,this.dispatchProps)?!1:(this.dispatchProps=t,!0)},u.prototype.updateMergedPropsIfNeeded=function(){var t=e(this.stateProps,this.dispatchProps,this.props);return this.mergedProps&&C&&(0,y["default"])(t,this.mergedProps)?!1:(this.mergedProps=t,!0)},u.prototype.isSubscribed=function(){return"function"==typeof this.unsubscribe},u.prototype.trySubscribe=function(){c&&!this.unsubscribe&&(this.unsubscribe=this.store.subscribe(this.handleChange.bind(this)),this.handleChange())},u.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},u.prototype.componentDidMount=function(){this.trySubscribe()},u.prototype.componentWillReceiveProps=function(t){O&&(0,y["default"])(t,this.props)||(this.haveOwnPropsChanged=!0)},u.prototype.componentWillUnmount=function(){this.tryUnsubscribe(),this.clearCache()},u.prototype.clearCache=function(){this.dispatchProps=null,this.stateProps=null,this.mergedProps=null,this.haveOwnPropsChanged=!0,this.hasStoreStateChanged=!0,this.haveStatePropsBeenPrecalculated=!1,this.statePropsPrecalculationError=null,this.renderedElement=null,this.finalMapDispatchToProps=null,this.finalMapStateToProps=null},u.prototype.handleChange=function(){if(this.unsubscribe){var t=this.store.getState(),e=this.state.storeState;if(!O||e!==t){if(O&&!this.doStatePropsDependOnOwnProps){var n=a(this.updateStatePropsIfNeeded,this);if(!n)return;n===S&&(this.statePropsPrecalculationError=S.value),this.haveStatePropsBeenPrecalculated=!0}this.hasStoreStateChanged=!0,this.setState({storeState:t})}}},u.prototype.getWrappedInstance=function(){return(0,g["default"])(T,"To access the wrapped instance, you need to specify { withRef: true } as the fourth argument of the connect() call."),this.refs.wrappedInstance},u.prototype.render=function(){var e=this.haveOwnPropsChanged,n=this.hasStoreStateChanged,r=this.haveStatePropsBeenPrecalculated,o=this.statePropsPrecalculationError,i=this.renderedElement;if(this.haveOwnPropsChanged=!1,this.hasStoreStateChanged=!1,this.haveStatePropsBeenPrecalculated=!1,this.statePropsPrecalculationError=null,o)throw o;var s=!0,u=!0;O&&i&&(s=n||e&&this.doStatePropsDependOnOwnProps,u=e&&this.doDispatchPropsDependOnOwnProps);var a=!1,c=!1;r?a=!0:s&&(a=this.updateStatePropsIfNeeded()),u&&(c=this.updateDispatchPropsIfNeeded());var d=!0;return d=a||c||e?this.updateMergedPropsIfNeeded():!1,!d&&i?i:(T?this.renderedElement=(0,f.createElement)(t,p({},this.mergedProps,{ref:"wrappedInstance"})):this.renderedElement=(0,f.createElement)(t,this.mergedProps),this.renderedElement)},u}(f.Component);return r.displayName=n,r.WrappedComponent=t,r.contextTypes={store:l["default"]},r.propTypes={store:l["default"]},(0,E["default"])(r,t)}}var p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.__esModule=!0,e["default"]=c;var f=n(23),d=n(56),l=r(d),h=n(105),y=r(h),v=n(106),b=r(v),P=n(57),O=(r(P),n(112)),m=(r(O),n(107)),E=r(m),T=n(108),g=r(T),w=function(t){return{}},_=function(t){return{dispatch:t}},D=function(t,e,n){return p({},n,t,e)},S={value:null},M=0},105:function(t,e){"use strict";function n(t,e){if(t===e)return!0;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var o=Object.prototype.hasOwnProperty,i=0;i<n.length;i++)if(!o.call(e,n[i])||t[n[i]]!==e[n[i]])return!1;return!0}e.__esModule=!0,e["default"]=n},106:function(t,e,n){"use strict";function r(t){return function(e){return(0,o.bindActionCreators)(t,e)}}e.__esModule=!0,e["default"]=r;var o=n(24)},107:function(t,e){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0};t.exports=function(t,e){for(var o=Object.getOwnPropertyNames(e),i=0;i<o.length;++i)if(!n[o[i]]&&!r[o[i]])try{t[o[i]]=e[o[i]]}catch(s){}return t}},108:function(t,e,n){"use strict";var r=function(t,e,n,r,o,i,s,u){if(!t){var a;if(void 0===e)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,s,u],p=0;a=new Error(e.replace(/%s/g,function(){return c[p++]})),a.name="Invariant Violation"}throw a.framesToPop=1,a}};t.exports=r},109:function(t,e){function n(t){return r(Object(t))}var r=Object.getPrototypeOf;t.exports=n},110:function(t,e){function n(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}t.exports=n},111:function(t,e){function n(t){return!!t&&"object"==typeof t}t.exports=n},112:[190,109,110,111],180:function(t,e){"use strict";function n(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(o){return"function"==typeof o?o(n,r,t):e(o)}}}}e.__esModule=!0;var r=n();r.withExtraArgument=n,e["default"]=r},181:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];return function(t){return function(n,r,o){var s=t(n,r,o),a=s.dispatch,c=[],p={getState:s.getState,dispatch:function(t){return a(t)}};return c=e.map(function(t){return t(p)}),a=u["default"].apply(void 0,c)(s.dispatch),i({},s,{dispatch:a})}}}e.__esModule=!0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e["default"]=o;var s=n(92),u=r(s)},182:function(t,e){"use strict";function n(t,e){return function(){return e(t.apply(void 0,arguments))}}function r(t,e){if("function"==typeof t)return n(t,e);if("object"!=typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(t),o={},i=0;i<r.length;i++){var s=r[i],u=t[s];"function"==typeof u&&(o[s]=n(u,e))}return o}e.__esModule=!0,e["default"]=r},183:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){var n=e&&e.type,r=n&&'"'+n.toString()+'"'||"an action";return"Given action "+r+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function i(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:u.ActionTypes.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+u.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function s(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var s=e[r];"function"==typeof t[s]&&(n[s]=t[s])}var u,a=Object.keys(n);try{i(n)}catch(c){u=c}return function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];if(u)throw u;for(var r=!1,i={},s=0;s<a.length;s++){var c=a[s],p=n[c],f=t[c],d=p(f,e);if("undefined"==typeof d){var l=o(c,e);throw new Error(l)}i[c]=d,r=r||d!==f}return r?i:t}}e.__esModule=!0,e["default"]=s;var u=n(93),a=n(95),c=(r(a),n(94));r(c)},184:109,185:110,186:111,187:function(t,e,n){(function(e){"use strict";t.exports=n(188)(e||window||this)}).call(e,function(){return this}())},188:function(t,e){"use strict";t.exports=function(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}},190:function(t,e,n,r,o,i){function s(t){if(!c(t)||y.call(t)!=p||a(t))return!1;var e=u(t);if(null===e)return!0;var n=l.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&d.call(n)==h}var u=n(r),a=n(o),c=n(i),p="[object Object]",f=Object.prototype,d=Function.prototype.toString,l=f.hasOwnProperty,h=d.call(Object),y=f.toString;t.exports=s},191:[190]});