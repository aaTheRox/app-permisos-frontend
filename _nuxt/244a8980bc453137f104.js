(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{178:function(t,e,r){var content=r(180);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("e611ed62",content,!0,{sourceMap:!1})},179:function(t,e,r){"use strict";var n=r(178);r.n(n).a},180:function(t,e,r){(e=r(40)(!1)).push([t.i,"li{cursor:pointer}",""]),t.exports=e},181:function(t,e,r){"use strict";var n={name:"navbar"},o=(r(179),r(19)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gray-800 py-2 text-white  fixed w-full flex"},[r("ul",{staticClass:"px-10 flex"},[r("li",{staticClass:"mr-10",on:{click:function(e){return t.$router.push("/manage")}}},[t._v("Usuarios")]),t._v(" "),r("li",{staticClass:"mr-10",on:{click:function(e){return t.$router.push("/manage/uuaa")}}},[t._v("UUAAs")]),t._v(" "),r("li",{staticClass:"mr-10",on:{click:function(e){return t.$router.push("/manage/roles")}}},[t._v("Roles")]),t._v(" "),r("li",{staticClass:"mr-5",on:{click:function(e){return t.$router.push("/")}}},[t._v("Cerrar sesión")])])])}),[],!1,null,null,null);e.a=component.exports},182:function(t,e,r){"use strict";var n=r(7),o=r(183)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),n(n.P+n.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(73)("find")},183:function(t,e,r){var n=r(27),o=r(72),c=r(28),l=r(20),d=r(184);t.exports=function(t,e){var r=1==t,h=2==t,f=3==t,v=4==t,m=6==t,x=5==t||m,_=e||d;return function(e,d,k){for(var A,y,w=c(e),C=o(w),R=n(d,k,3),N=l(C.length),U=0,E=r?_(e,N):h?_(e,0):void 0;N>U;U++)if((x||U in C)&&(y=R(A=C[U],U,w),t))if(r)E[U]=y;else if(y)switch(t){case 3:return!0;case 5:return A;case 6:return U;case 2:E.push(A)}else if(v)return!1;return m?-1:f||v?v:E}}},184:function(t,e,r){var n=r(185);t.exports=function(t,e){return new(n(t))(e)}},185:function(t,e,r){var n=r(10),o=r(110),c=r(2)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},186:function(t,e,r){var content=r(189);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("01055931",content,!0,{sourceMap:!1})},188:function(t,e,r){"use strict";var n=r(186);r.n(n).a},189:function(t,e,r){(e=r(40)(!1)).push([t.i,"a{color:#3c5a7f}",""]),t.exports=e},194:function(t,e,r){"use strict";r.r(e);r(182),r(42),r(39);var n,o,c,l,d=r(5),h=r(29),f=r.n(h),v={components:{navbar:r(181).a},data:function(){return{editMode:!1,roles:[],isLoading:!1,addNewRole:!0,roleName:"",roleID:"",uuaas:[],uuaasToAdd:[],roleData:[]}},mounted:function(){this.getRoles(),this.getUUAAs()},methods:{getUUAAs:(l=Object(d.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!1,t.prev=1,t.next=4,f.a.post("".concat("https://api-permisos.herokuapp.com/","getUUAAs"),{}).then((function(t){t.data&&(e.uuaas=t.data)}));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),this.message="",this.$toast.error("El servidor no responde");case 10:return t.prev=10,this.isLoading=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,this,[[1,6,10,13]])}))),function(){return l.apply(this,arguments)}),addRole:(c=Object(d.a)(regeneratorRuntime.mark((function t(){var e,i,r,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.uuaasToAdd=[],e=document.querySelectorAll("#uuaa"),i=0;i<e.length;i++)e[i].checked&&(console.log(e[i].getAttribute("data-uuaa")),this.uuaasToAdd.push(e[i].getAttribute("data-uuaa")));return r={},r=this.editMode?{data:{_id:this.roleID,roleName:this.roleName,editMode:!0,uuaas:this.uuaasToAdd}}:{data:{roleName:this.roleName,editMode:!1,uuaas:this.uuaasToAdd}},this.isLoading=!1,t.prev=6,t.next=9,f.a.post("".concat("https://api-permisos.herokuapp.com/","addRole"),r).then((function(t){var e;"ROLE_EXISTS"==t.data.status?n.$toast.error("Este rol ya existe",{duration:5e3,position:"top-center"}):(n.getRoles(),e=n.editMode?"Rol modificado con éxito":"Se ha añadido el rol ".concat(n.roleName," con éxito"),n.$toast.success(e,{duration:5e3,position:"top-center"}),n.roleName="",n.editMode=!1,n.uncheckAll())}));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(6),this.$toast.error("El servidor no responde",{duration:5e3,position:"top-center"});case 14:return t.prev=14,this.isLoading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[6,11,14,17]])}))),function(){return c.apply(this,arguments)}),deleteRole:(o=Object(d.a)(regeneratorRuntime.mark((function t(e){var r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!1,t.prev=1,t.next=4,f.a.post("".concat("https://api-permisos.herokuapp.com/","deleteRole"),{data:{_id:e}}).then((function(t){"ROLE_NOT_FOUND"==t.data.status?r.$toast.error("Este rol no existe.",{duration:5e3,position:"top-center"}):(r.roleName="",r.getRoles(),r.editMode,r.$toast.success("Se ha eliminado el rol con éxito",{duration:5e3,position:"top-center"}),r.uncheckAll())}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),this.$toast.error("El servidor no responde",{duration:5e3,position:"top-center"});case 9:return t.prev=9,this.isLoading=!1,t.finish(9);case 12:case"end":return t.stop()}}),t,this,[[1,6,9,12]])}))),function(t){return o.apply(this,arguments)}),getRoles:(n=Object(d.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!1,t.prev=1,t.next=4,f.a.post("".concat("https://api-permisos.herokuapp.com/","getRoles"),{}).then((function(t){t.data&&(e.roles=t.data)}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),this.$toast.error("El servidor no responde");case 9:return t.prev=9,this.isLoading=!1,t.finish(9);case 12:case"end":return t.stop()}}),t,this,[[1,6,9,12]])}))),function(){return n.apply(this,arguments)}),cancel:function(){this.roleName="",this.editMode=!1,this.uncheckAll()},editRole:function(t){this.roleData=t,this.roleName=t.name,this.editMode=!0,this.roleID=t._id},checkHasUUAA:function(t,e){var r=!1;return null!=e&&e.find((function(e){e==t&&(r=!0)})),r},uncheckAll:function(){}}},m=(r(188),r(19)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("navbar"),t._v(" "),r("div",{staticClass:"bg-grey-100 h-screen flex "},[t.isLoading?r("div",{staticClass:"mt-10"},[t._v("\n    Loading.........\n")]):r("div",{staticClass:"w-full md:flex py-5 px-20 mt-10"},[r("div",{staticClass:"mt-3 w-full mr-5"},[t.editMode?r("h2",{staticClass:"text-xl mb-2"},[t._v("Editar rol")]):r("h2",{staticClass:"text-xl mb-2"},[t._v("Añadir un nuevo rol")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.roleName,expression:"roleName"}],staticClass:"appearance-none bg-gray-200 focus:outline-none py-2 px-2 w-full",attrs:{placeholder:"Nombre del rol...",spellcheck:"false",autofocus:"",autocomplete:"off",type:"text"},domProps:{value:t.roleName},on:{input:function(e){e.target.composing||(t.roleName=e.target.value)}}}),t._v(" "),r("ul",[r("strong",[t._v("Asociar UUAA(s) a este Rol:")]),t._v(" "),t._l(t.uuaas,(function(e){return r("li",[t._v("\n                "+t._s(e.name)+"\n\n                 "),r("input",{staticClass:"form-checkbox",attrs:{id:"uuaa","data-uuaa":e.name,type:"checkbox"},domProps:{checked:t.checkHasUUAA(e.name,t.roleData.uuaas)}})])}))],2),t._v(" "),r("button",{staticClass:"bg-blue-600 px-5 text-white py-2 text-sm mt-3 w-full focus:outline-none",attrs:{disabled:""==t.roleName},on:{click:t.addRole}},[t._v("Guardar")]),t._v(" "),r("button",{staticClass:"bg-gray-400 px-5 text-white py-2 text-sm mt-3 w-full focus:outline-none",on:{click:t.cancel}},[t._v("Cancelar")])]),t._v(" "),r("div",{staticClass:"mt-3 md:w-2/3"},[0==t.roles.length?r("p",{staticClass:"bg-orange-100 py-3 px-3 text-center"},[r("i",[t._v("No hay registros en la base de datos.")])]):r("table",{staticClass:"table-auto w-full"},[r("tbody",[r("h2",{staticClass:"text-xl mb-2"},[t._v("Gestión de roles")]),t._v(" "),t._l(t.roles,(function(e){return r("tr",[r("td",{staticClass:"border px-4 py-2"},[t._v(t._s(e.name))]),t._v(" "),r("td",{staticClass:"border px-4 py-2 text-center"},[r("a",{staticClass:"cursor-pointer",on:{click:function(r){return t.editRole(e)}}},[t._v("Editar")])]),t._v(" "),r("td",{staticClass:"border px-4 py-2 text-center"},[r("a",{staticClass:"cursor-pointer text-red-500",on:{click:function(r){return t.deleteRole(e._id)}}},[t._v("Eliminar")])])])}))],2)])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);