(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02d8ad3f"],{"3e8f":function(e,t){},5118:function(e,t,n){(function(e){var i="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,o=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(o.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new a(o.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(e,t,n){(function(e,t){(function(e,n){"use strict";if(!e.setImmediate){var i,o=1,a={},s=!1,r=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?p():m()?h():e.MessageChannel?v():r&&"onreadystatechange"in r.createElement("script")?g():b(),c.setImmediate=l,c.clearImmediate=u}function l(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var s={callback:e,args:t};return a[o]=s,i(o),o++}function u(e){delete a[e]}function d(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(n,i);break}}function f(e){if(s)setTimeout(f,0,e);else{var t=a[e];if(t){s=!0;try{d(t)}finally{u(e),s=!1}}}}function p(){i=function(e){t.nextTick(function(){f(e)})}}function m(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function h(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&f(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),i=function(n){e.postMessage(t+n,"*")}}function v(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;f(t)},i=function(t){e.port2.postMessage(t)}}function g(){var e=r.documentElement;i=function(t){var n=r.createElement("script");n.onreadystatechange=function(){f(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function b(){i=function(e){setTimeout(f,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("c8ba"),n("f28c"))},a55b:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"logo"}),n("InputGroup",{attrs:{placeholder:"手机号",type:"number",disabled:e.disabled,btnTitle:e.btnTitle,error:e.errors.phone},on:{btnClick:function(t){return e.getVerityCode()}},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),n("InputGroup",{attrs:{placeholder:"验证码",type:"number",error:e.errors.code},model:{value:e.verifyCode,callback:function(t){e.verifyCode=t},expression:"verifyCode"}}),e._m(0),n("div",{staticClass:"login_btn"},[n("button",{attrs:{disabled:!e.isClick},on:{click:e.handleLogin}},[e._v("登录")])])],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login_des"},[n("p",[e._v("\n      新用户登录即自动注册，表示已同意\n      "),n("span",[e._v("《用户服务协议》")])])])}],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text_group"},[n("div",{staticClass:"input_group",class:{"is-invalid":e.error}},[n("input",{attrs:{type:e.type,placeholder:e.placeholder,name:e.name},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e.btnTitle?n("button",{attrs:{disabled:e.disabled},on:{click:function(t){return e.$emit("btnClick")}}},[e._v(e._s(e.btnTitle))]):e._e()]),n("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.error))])])},s=[],r={name:"inputGroup",props:{type:{type:String,default:"text"},value:String,placeholder:String,name:String,btnTitle:String,disabled:Boolean,error:String}},c=r,l=(n("aea7"),n("2877")),u=Object(l["a"])(c,a,s,!1,null,"7690b04f",null),d=u.exports,f=(n("3e8f"),n("5118")),p={name:"login",components:{InputGroup:d},data:function(){return{phone:"",verifyCode:"",errors:{phone:"",code:""},btnTitle:"获取验证码",disabled:!1}},computed:{isClick:function(){return!(!this.phone||!this.verifyCode)}},methods:{handleLogin:function(){var e=this;this.$axios.post("/api/posts/sms_back",{phone:this.phone,code:this.verifyCode}).then(function(t){console.log(t),localStorage.setItem("ele_login",!0),e.$router.push("/")}).catch(function(t){e.errors={code:t.response.data.msg}})},getVerityCode:function(){this.validatePhone()&&(this.validateBtn(),this.$axios.post("/api/posts/sms_send",{tpl_id:"166092",key:"453cdb34d18ad240f47400a6eccd6c5c",phone:this.phone}).then(function(e){console.log(e)}))},validateBtn:function(){var e=this,t=15,n=Object(f["setInterval"])(function(){0==t?(Object(f["clearInterval"])(n),e.btnTitle="重新获取验证码",e.disabled=!1):(e.btnTitle=t+"秒后重试",t--,e.disabled=!0)},1e3)},validatePhone:function(){return this.phone?/^1[3,4,5,7,8,9]\d{9}$/.test(this.phone)?(this.errors={},console.log("right"),!0):(this.errors={phone:"手机号格式不正确"},console.log("手机号格式不正确"),!1):(this.errors={phone:"输入的号码不能为空"},console.log("空"),!1)}}},m=p,h=(n("d6db"),Object(l["a"])(m,i,o,!1,null,null,null));t["default"]=h.exports},a9e7:function(e,t,n){},aea7:function(e,t,n){"use strict";var i=n("c3ca"),o=n.n(i);o.a},c3ca:function(e,t,n){},d6db:function(e,t,n){"use strict";var i=n("a9e7"),o=n.n(i);o.a}}]);
//# sourceMappingURL=chunk-02d8ad3f.9cb4c31b.js.map