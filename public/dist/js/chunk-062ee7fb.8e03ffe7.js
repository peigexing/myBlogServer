(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-062ee7fb"],{"15bb":function(t,e,a){},"18d5":function(t,e,a){"use strict";var n=a("15bb"),i=a.n(n);i.a},"1f84":function(t,e,a){t.exports=a.p+"img/myqrcode.02a69146.png"},"42f7":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"statistic"},[a("div",{staticClass:"statistic-title"},[t._v("统计")]),a("p",[t._v("共有文章： "),a("span",[t._v(t._s(t.countOfAllArticle))]),t._v(" 篇")])])},i=[],s=(a("96cf"),a("1da1")),r=a("c685"),c={name:"Statistic",data:function(){return{countOfAllArticle:0}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get(r["a"]+"/api/article/getCountOfArticle");case 2:a=e.sent,n=a.data.count,t.countOfAllArticle=n;case 5:case"end":return e.stop()}}),e)})))()}},o=c,l=(a("a729"),a("2877")),u=Object(l["a"])(o,n,i,!1,null,"1cb004a6",null);e["a"]=u.exports},7578:function(t,e,a){"use strict";var n=a("b89d"),i=a.n(n);i.a},"787d":function(t,e,a){"use strict";var n=a("8328"),i=a.n(n);i.a},8328:function(t,e,a){},"83f3":function(t,e,a){"use strict";var n=a("c863"),i=a.n(n);i.a},"8fce":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content"},[a("Latest"),a("el-pagination",{staticStyle:{"margin-top":"20px"},attrs:{background:"","current-page":t.currentPage,"page-size":10,layout:"total, prev, pager, next",total:t.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1),a("div",{staticClass:"slider-bar"},[a("HotChater",{attrs:{articleOfHot:t.articleOfHot}}),a("Statistic"),a("Link"),a("Advertisement")],1)])])])},i=[],s=(a("96cf"),a("1da1")),r=a("c685"),c=a("a7e0"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hot-chater"},[a("h3",{staticClass:"hot-title"},[t._v("频道点击排行")]),a("ul",{staticClass:"latest-list"},t._l(t.articleOfHot,(function(e,n){return a("router-link",{key:n,staticClass:"list-item",attrs:{tag:"li",to:{name:"myarticle",query:{articleID:e._id}}}},[a("el-image",{staticStyle:{width:"100px",height:"63px"},attrs:{src:t.imgUrlFormat(e.cover),fit:"cover"}}),a("div",{staticClass:"content-wrapper"},[a("h3",{staticClass:"content-title"},[t._v(t._s(e.title))]),a("p",{staticClass:"content-info"},[a("span",{staticClass:"info-time"},[t._v(" "+t._s(t._f("formatTimeNoClock")(e.time)))]),a("span",{staticClass:"info-view"},[t._v(" "+t._s(e.pvcount)+"次浏览")])])])],1)})),1)])},l=[],u={name:"HotChater",props:["articleOfHot"]},f=u,d=(a("b6a9"),a("2877")),m=Object(d["a"])(f,o,l,!1,null,"44ca19f0",null),p=m.exports,g=a("42f7"),v=a("9e48"),h=a("cebe"),_={name:"category",components:{Latest:c["a"],Statistic:g["a"],Link:v["a"],Advertisement:h["a"],HotChater:p},data:function(){return{ArticleOfTag:"",count:0,articleOfHot:[]}},computed:{currentPage:{get:function(){return parseInt(this.$route.query.pageIndex)},set:function(){}}},watch:{},created:function(){this.getArticleByTagName()},methods:{getArticleByTagName:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,i,s,c,o,l,u,f,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$route.query.tagName){e.next=14;break}return e.next=3,t.$http.get(encodeURI(r["a"]+"/api/article/getArticleByTagName?tagName="+t.$route.query.tagName+"&pageIndex="+t.$route.query.pageIndex+"&size=10"));case 3:a=e.sent,a.status,n=a.data,i=n.article,s=n.count,c=n.articleOfHot,t.$store.commit("setLatestList",i),t.count=s,t.articleOfHot=c,e.next=25;break;case 14:return e.next=16,t.$http.get(encodeURI(r["a"]+"/api/article/getArticleByKeyWord?keyWord="+t.$route.query.keyWord+"&pageIndex="+t.$route.query.pageIndex+"&size=10"));case 16:o=e.sent,o.status,l=o.data,u=l.article,f=l.count,d=l.articleOfHot,t.$store.commit("setLatestList",u),t.count=f,t.articleOfHot=d;case 25:case"end":return e.stop()}}),e)})))()},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){var e=this;this.$router.push({name:"category",query:{pageIndex:t,tagName:e.$route.query.tagName,keyWord:e.$route.query.keyWord}}),console.log("当前页: ".concat(t))}}},C=_,y=(a("787d"),a("9205"),Object(d["a"])(C,n,i,!1,null,"5d45a1f3",null));e["default"]=y.exports},9205:function(t,e,a){"use strict";var n=a("d552"),i=a.n(n);i.a},"9e48":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"link"},[a("h4",{staticClass:"link-title"},[t._v("友情链接")]),a("ul",{staticClass:"link-list"},[a("a",{staticClass:"link-item",staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:"http://101.37.32.66:5000"}},[t._v("博客后台管理")]),a("a",{staticClass:"link-item",staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:"http://101.37.32.66:5002"}},[t._v("小羊商城（移动端）")]),a("a",{staticClass:"link-item",staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:"http://101.37.32.66:5002/small_route"}},[t._v("亦称家具(微信小程序)")])])])}],s={name:"Link"},r=s,c=(a("18d5"),a("2877")),o=Object(c["a"])(r,n,i,!1,null,"156d5b5e",null);e["a"]=o.exports},a729:function(t,e,a){"use strict";var n=a("dc07"),i=a.n(n);i.a},a7e0:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"latest"},[a("h4",{staticClass:"latest-title"},[t._v(t._s(t.$route.query.tagName?t.$route.query.tagName:"最新发布"))]),t.$store.state.LatestList.length>0?a("ul",{staticClass:"latest-list"},t._l(t.$store.state.LatestList,(function(e,n){return a("router-link",{key:n,staticClass:"list-item",attrs:{tag:"li",to:{name:"myarticle",query:{articleID:e._id}}}},[a("el-image",{staticStyle:{width:"220px",height:"150px","border-radius":"5px",cursor:"pointer"},attrs:{src:t.imgUrlFormat(e.cover),fit:"cover"}}),a("div",{staticClass:"content-wrapper",staticStyle:{"text-align":"center"}},[a("h3",{staticClass:"content-title"},[t._v(t._s(e.title))]),a("p",{staticClass:"content-detail"},[t._v(t._s(e.summary))]),a("p",{staticClass:"content-info"},[a("span",{staticClass:"el-icon-info"},[t._v(" "+t._s(e.username))]),a("span",{staticClass:"info-time el-icon-time"},[t._v(" "+t._s(t._f("formatTime")(e.time)))]),a("span",{staticClass:"info-view el-icon-view"},[t._v(" "+t._s(e.pvcount)+"次浏览")])])])],1)})),1):a("div",{staticStyle:{margin:"0 auto","text-align":"center"}},[a("img",{staticStyle:{width:"200px"},attrs:{src:"http://pic.90sjimg.com/design/00/93/88/11/5905a3b6cf4c4.png%21/fwfh/804x734/quality/90/unsharp/true/compress/true",alt:""}}),a("p",{staticStyle:{"font-weight":"bolder"}},[t._v("小羊提醒：暂时还没有评论哦，快来抢沙发吧！")])])])},i=[],s=(a("99af"),a("c685")),r={name:"Latest",data:function(){return{articleOfLatest:[]}},methods:{imgUrlFormat:function(t){return"".concat(s["a"],"/").concat(t)}},created:function(){}},c=r,o=(a("83f3"),a("2877")),l=Object(o["a"])(c,n,i,!1,null,"37538b5d",null);e["a"]=l.exports},b6a9:function(t,e,a){"use strict";var n=a("cd0f"),i=a.n(n);i.a},b89d:function(t,e,a){},c863:function(t,e,a){},cd0f:function(t,e,a){},cebe:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"advertisement"},[n("h4",{staticClass:"advertisement-title"},[t._v("联系方式")]),n("img",{staticClass:"advertisement-img",attrs:{src:a("1f84"),alt:""}})])}],s={name:"Advertisement"},r=s,c=(a("7578"),a("2877")),o=Object(c["a"])(r,n,i,!1,null,"410442d4",null);e["a"]=o.exports},d552:function(t,e,a){},dc07:function(t,e,a){}}]);
//# sourceMappingURL=chunk-062ee7fb.8e03ffe7.js.map