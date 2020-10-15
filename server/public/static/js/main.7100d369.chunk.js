(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){e.exports=n(54)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(17),c=n.n(i),u=n(21),o=n(1),s=n.n(o),m=n(3),f=n(4);n(28),n(29);function d(e){var t=e.emitConfirm;return a.a.createElement("button",{className:"AddButton",onClick:function(){return t()}},"Add City")}n(30);function l(e){var t=e.emitValue,n=e.emitEnter,r=e.value;return a.a.createElement("input",{type:"text",maxLength:"100",spellCheck:"false",onKeyDown:function(e){"Enter"===e.key&&n()},onChange:function(e){return t(e.target.value)},value:r})}n(31);var p=n(18),v=n(19),h=n(7),y=n.n(h),E=new(function(){function e(){Object(p.a)(this,e)}return Object(v.a)(e,[{key:"fetchCitiesWeather",value:function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()({url:"graphql/",method:"post",data:{query:"\n        query {\n          citiesWeather {\n            id\n            city\n            temperature\n            humidity\n            windspeed\n            unixtime\n          }\n        }"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"addCity",value:function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.trim(),e.next=3,y()({url:"graphql/",method:"post",data:{query:'mutation {\n            addCity(city: "'.concat(t,'") {\n              id\n              city\n              temperature\n              humidity\n              windspeed\n              unixtime\n            }\n          }')}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeCity",value:function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()({url:"graphql/",method:"post",data:{query:'mutation {\n            removeCity(city: "'.concat(t,'")\n          }')}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}());function b(e){var t=e.emitAdd,n=e.emitError,i=Object(r.useState)(""),c=Object(f.a)(i,2),u=c[0],o=c[1],p=function(){var e=Object(m.a)(s.a.mark((function e(){var r,a,i,c,m,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,E.addCity(u);case 4:if(r=e.sent,a=r.status,i=r.data.errors,200===a&&!i){e.next=9;break}return n("An error occurred while adding City"),e.abrupt("return");case 9:c=r.data.data,m=c.addCity,(f=c.addCity.city).includes("ERROR:")?n(f):(o(""),t(m));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:"AppHeader"},a.a.createElement(l,{value:u,emitValue:function(e){return o(e)},emitEnter:function(){return p()}}),a.a.createElement(d,{emitConfirm:function(){return p()}}))}n(49),n(50);var w=n(20),x=n.n(w);n(52);function C(e){var t=e.city,n=e.emitRemove,r=e.emitError,i=function(){var e=Object(m.a)(s.a.mark((function e(){var a,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.removeCity(t);case 2:if(a=e.sent,i=a.status,c=a.data.data.removeCity,200===i&&"DATABASE_ERROR"!==c){e.next=8;break}return r("An error occurred while removing City"),e.abrupt("return");case 8:n(c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("button",{onClick:function(){return i()},className:"RemoveButton"},"Remove")}function k(e){var t=e.cityWeather,n=t.city,r=t.temperature,i=t.windspeed,c=t.humidity,u=t.unixtime,o=e.emitRemove,s=e.emitError;return a.a.createElement("div",{className:"CityWeather"},a.a.createElement("div",{className:"CityHeader"},a.a.createElement("h1",null,n),a.a.createElement(C,{city:n,emitRemove:function(e){return o(e)},emitError:function(e){return s(e)}})),a.a.createElement("h2",null,"Temp: ",!r||r.toFixed(1),"\xb0C"),a.a.createElement("h2",null,"Wind: ",!i||i.toFixed(1),"m/s"),a.a.createElement("h2",null,"Humidity: ",!c||c.toFixed(0),"%"),a.a.createElement("h2",null,"Last Updated: ",x.a.unix(u).format("HH:mm")))}function O(e){var t=e.emitRemove,n=e.emitError,r=e.citiesWeather;return a.a.createElement("div",{className:"AppBody"},r.map((function(e){return a.a.createElement(k,{key:e.id,cityWeather:e,emitRemove:function(e){return t(e)},emitError:function(e){return n(e)}})})))}n(53);function j(e){var t=e.message;return a.a.createElement("div",{className:"ErrorMessage"},t)}var g=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(!1),o=Object(f.a)(c,2),d=o[0],l=o[1],p=Object(r.useState)("An error occurred"),v=Object(f.a)(p,2),h=v[0],y=v[1];Object(r.useEffect)((function(){!function(){var e=Object(m.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.fetchCitiesWeather();case 2:t=e.sent,n=t.data.errors,r=t.data.data.citiesWeather,n||!Array.isArray(r)?w("An error occurred while fetching data"):i(r.sort((function(e,t){return e.id>t.id?1:-1})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var w=function(e){y(e),l(!0),setTimeout((function(){l(!1)}),2e3)};return a.a.createElement("div",{className:"App"},!d||a.a.createElement(j,{message:h}),a.a.createElement(b,{emitAdd:function(e){return function(e){if(!n.some((function(t){return t.city===e.city}))){var t=[].concat(Object(u.a)(n),[e]);t.sort((function(e,t){return e.id>t.id?1:-1})),i(t)}}(e)},emitError:function(e){return w(e)}}),a.a.createElement(O,{citiesWeather:n,emitRemove:function(e){return function(e){var t=n.filter((function(t){return t.city!==e}));i(t)}(e)},emitError:function(e){return w(e)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.7100d369.chunk.js.map