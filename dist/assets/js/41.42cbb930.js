(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{628:function(t,i,a){},739:function(t,i,a){"use strict";a(628)},829:function(t,i,a){"use strict";a.r(i);a(181),a(299);var o=a(539),c=a.n(o),n={name:"hollow-compose-three-circles",data:function(){return{width:300,height:100,radio:10,dashed:!0,position:"horizontal",distance:60,positions:["horizontal","vertical"],color1:"#00adb5",color2:"#eeeeee",shadow:!0,composePositionH:"right",composePositionV:"bottom",composePositionsHorizontal:["left","right"],composePositionsVertical:["top","bottom"]}},computed:{style:function(){var t="";switch(this.position){case"horizontal":switch(this.composePositionH){case"right":t="background: radial-gradient(circle at right top, transparent ".concat(this.radio,"px, ").concat(this.color1," 0) top left / ").concat(this.distance,"px 51% no-repeat,\n    radial-gradient(circle at right bottom, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) bottom left /").concat(this.distance,"px 51% no-repeat,\n    radial-gradient(circle at left top, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) ").concat(this.distance,"px 0/").concat(this.width-this.distance-this.radio,"px 51% no-repeat,\n    radial-gradient(circle at left bottom, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) ").concat(this.distance,"px ").concat(this.height/2,"px /").concat(this.width-this.distance-this.radio,"px 51% no-repeat,\n    radial-gradient(circle at ").concat(this.radio,"px ").concat(this.height/2,"px, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) ").concat(this.width-this.radio,"px 0/").concat(this.radio,"px ").concat(this.height,"px no-repeat;");break;case"left":t="background: radial-gradient(circle at right top, transparent ".concat(this.radio,"px, ").concat(this.color1," 0) ").concat(this.radio,"px 0 / ").concat(this.distance,"px 51% no-repeat,\n    radial-gradient(circle at right bottom, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) ").concat(this.radio,"px ").concat(this.height/2,"px /").concat(this.distance,"px 51% no-repeat,\n    radial-gradient(circle at left top, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) top right/").concat(this.width-this.distance-this.radio,"px 51% no-repeat,\n    radial-gradient(circle at left bottom, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) bottom right /").concat(this.width-this.distance-this.radio,"px 51% no-repeat,\n    radial-gradient(circle at 0 ").concat(this.height/2,"px, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) top left/").concat(this.radio,"px ").concat(this.height,"px no-repeat;")}return".hollow-compose-three-circles {\n  width: ".concat(this.width,"px;\n  height: ").concat(this.height,"px;\n  position: relative;\n  ").concat(t,"\n   ").concat(this.shadow?"filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));":"","\n}\n\n").concat(this.dashed?".hollow-compose-three-circles::after {\n  content: '';\n  height: ".concat(this.height-2*this.radio,"px;\n  border: 1px dashed #fff;\n  position: absolute;\n  left: ").concat("left"===this.composePositionH?this.distance+this.radio:this.distance,"px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}"):"","\n");case"vertical":switch(this.composePositionV){case"top":t="background: radial-gradient(circle at right bottom, transparent ".concat(this.radio,"px, ").concat(this.color1," 0) ").concat(this.width/2,"px ").concat(this.radio,"px / 51% ").concat(this.distance,"px no-repeat,\n    radial-gradient(circle at left bottom, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) 0 ").concat(this.radio,"px / 51% ").concat(this.distance,"px no-repeat,\n    radial-gradient(circle at right top, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) bottom right / 51% ").concat(this.height-this.distance-this.radio,"px no-repeat,\n    radial-gradient(circle at left top, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) bottom left / 51% ").concat(this.height-this.distance-this.radio,"px no-repeat,\n    radial-gradient(circle at ").concat(this.width/2,"px 0, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) top left/").concat(this.width,"px ").concat(this.radio,"px no-repeat;");break;case"bottom":t="background: radial-gradient(circle at right bottom, transparent ".concat(this.radio,"px, ").concat(this.color1," 0) ").concat(this.width/2-2,"px 0 / ").concat(this.width/2+2,"px ").concat(this.distance,"px no-repeat,\n    radial-gradient(circle at left bottom, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) top left / ").concat(this.width/2,"px ").concat(this.distance,"px no-repeat,\n    radial-gradient(circle at right top, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) ").concat(this.width/2-2,"px ").concat(this.distance,"px / ").concat(this.width/2+2,"px ").concat(this.height-this.distance-this.radio,"px no-repeat,\n    radial-gradient(circle at left top, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) 0 ").concat(this.distance,"px / ").concat(this.width/2,"px ").concat(this.height-this.distance-this.radio,"px no-repeat,\n    radial-gradient(circle at ").concat(this.width/2,"px ").concat(this.radio,"px, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) bottom left/").concat(this.width,"px ").concat(this.radio,"px no-repeat;")}return".hollow-compose-three-circles {\n  width: ".concat(this.width,"px;\n  height: ").concat(this.height,"px;\n  position: relative;\n  ").concat(t,"\n   ").concat(this.shadow?"filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));":"","\n}\n\n").concat(this.dashed?".hollow-compose-three-circles::after {\n  content: '';\n  width: ".concat(this.width-2*this.radio,"px;\n  border: 1px dashed #fff;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: ").concat("top"===this.composePositionV?this.distance+this.radio:this.distance,"px;\n  margin: auto;\n}"):"","\n")}}},watch:{style:function(){this.setStyle(),this.setStyleToBody()}},methods:{setStyle:function(){this.$refs.css.innerHTML=c.a.highlight(this.style,c.a.languages.css)},setStyleToBody:function(){document.querySelector("#hollow-compose1").innerHTML=this.style}},mounted:function(){var t=this,i=document.createElement("style");i.setAttribute("id","hollow-compose1"),document.head.appendChild(i),setTimeout((function(){t.setStyle(),t.setStyleToBody()}))}},s=(a(739),a(41)),e=Object(s.a)(n,(function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("位置：")]),t._v(" "),t._l(t.positions,(function(i,o){return a("el-radio",{key:o,attrs:{label:i},model:{value:t.position,callback:function(i){t.position=i},expression:"position"}})}))],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("组合位置：")]),t._v(" "),t._l(t.composePositionsHorizontal,(function(i,o){return"horizontal"===t.position?a("el-radio",{key:o,attrs:{label:i},model:{value:t.composePositionH,callback:function(i){t.composePositionH=i},expression:"composePositionH"}}):t._e()})),t._v(" "),t._l(t.composePositionsVertical,(function(i,o){return"vertical"===t.position?a("el-radio",{key:o,attrs:{label:i},model:{value:t.composePositionV,callback:function(i){t.composePositionV=i},expression:"composePositionV"}}):t._e()}))],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("宽度：")]),t._v(" "),a("el-input-number",{attrs:{size:"mini",min:100,max:500,label:"宽度"},model:{value:t.width,callback:function(i){t.width=i},expression:"width"}})],1),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("长度：")]),t._v(" "),a("el-input-number",{attrs:{size:"mini",min:50,max:500,label:"长度"},model:{value:t.height,callback:function(i){t.height=i},expression:"height"}})],1),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("距离：")]),t._v(" "),a("el-input-number",{attrs:{size:"mini",min:40,max:200,label:"距离"},model:{value:t.distance,callback:function(i){t.distance=i},expression:"distance"}})],1),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("半径：")]),t._v(" "),a("el-input-number",{attrs:{size:"mini",min:1,max:20,label:"半径"},model:{value:t.radio,callback:function(i){t.radio=i},expression:"radio"}})],1),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("虚线：")]),t._v(" "),a("el-switch",{attrs:{"active-color":"#00adb5"},model:{value:t.dashed,callback:function(i){t.dashed=i},expression:"dashed"}}),t._v(" "),a("span",{staticStyle:{width:"100px"}}),t._v(" "),a("span",{staticClass:"key"},[t._v("阴影：")]),t._v(" "),a("el-switch",{attrs:{"active-color":"#00adb5"},model:{value:t.shadow,callback:function(i){t.shadow=i},expression:"shadow"}})],1),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{staticClass:"language-css"},[a("code",{ref:"css"})])])])}),[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"warpper"},[i("div",{staticClass:"hollow-compose-three-circles"})])}],!1,null,"15baa41c",null);i.default=e.exports}}]);