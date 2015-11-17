"use strict";define("client/adapters/application",["exports","ember-data"],function(e,t){e["default"]=t["default"].RESTAdapter.extend({host:"http://moviez.city",namespace:"api"})}),define("client/app",["exports","ember","ember/resolver","ember/load-initializers","client/config/environment"],function(e,t,n,a,r){var l;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](l,r["default"].modulePrefix),e["default"]=l}),define("client/components/app-version",["exports","ember-cli-app-version/components/app-version","client/config/environment"],function(e,t,n){var a=n["default"].APP,r=a.name,l=a.version;e["default"]=t["default"].extend({version:l,name:r})}),define("client/components/categories-list",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({tagName:"div",classNames:["categories-list"],elements:null,categories:function(){return _.map(this.get("elements"),function(e){return e.color=randomColor({luminosity:"light"}),e})}.property("elements")})}),define("client/components/fa-icon",["exports","ember-cli-font-awesome/components/fa-icon"],function(e,t){e["default"]=t["default"]}),define("client/components/fa-list-icon",["exports","ember-cli-font-awesome/components/fa-list-icon"],function(e,t){e["default"]=t["default"]}),define("client/components/fa-list",["exports","ember-cli-font-awesome/components/fa-list"],function(e,t){e["default"]=t["default"]}),define("client/components/fa-stack",["exports","ember-cli-font-awesome/components/fa-stack"],function(e,t){e["default"]=t["default"]}),define("client/components/infinity-loader",["exports","ember-infinity/components/infinity-loader"],function(e,t){e["default"]=t["default"]}),define("client/controllers/application",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({isMenuOpen:!1,init:function(){var e=this;t["default"].$("body").on("click",function(n){n.preventDefault(),e.isMenuOpen&&0===t["default"].$(n.target).parents(".st-menu").length&&(t["default"].$("#js-container").removeClass("st-menu-open"),e.isMenuOpen=!1)})},actions:{onMenuOpen:function(){t["default"].$("#js-container").addClass("st-effect-3 st-menu-open"),this.isMenuOpen=!0}}})}),define("client/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("client/controllers/lists/index",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({title:"Lists"})}),define("client/controllers/movies/index",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({title:"Home"})}),define("client/controllers/movies/show",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({init:function(){t["default"].$(".swipebox").swipebox({autoplayVideos:!0})},actions:{download:function(e){window.location.href=e}}})}),define("client/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("client/helpers/formatted-date",["exports","ember","client/utils/date-helpers"],function(e,t,n){function a(e){var t=r(e,2),a=t[0],l=t[1];return n.formatDate(a,l)}e.formattedDate=a;var r=function(){function e(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(d){r=!0,l=d}finally{try{!a&&o["return"]&&o["return"]()}finally{if(r)throw l}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e["default"]=t["default"].Helper.helper(a)}),define("client/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","client/config/environment"],function(e,t,n){var a=n["default"].APP,r=a.name,l=a.version;e["default"]={name:"App Version",initialize:t["default"](r,l)}}),define("client/initializers/export-application-global",["exports","ember","client/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("client/models/category",["exports","ember-data"],function(e,t){e["default"]=t["default"].Model.extend({name:t["default"].attr("string")})}),define("client/models/list",["exports","ember-data"],function(e,t){e["default"]=t["default"].Model.extend({title:t["default"].attr("string"),image:t["default"].attr("string")})}),define("client/models/movie",["exports","ember","ember-data"],function(e,t,n){e["default"]=n["default"].Model.extend({title:n["default"].attr("string"),poster_path:n["default"].attr("string"),backdrop_path:n["default"].attr("string"),original_language:n["default"].attr("string"),release_date:n["default"].attr("date"),created_at:n["default"].attr("date"),updated_at:n["default"].attr("date"),overview:n["default"].attr("string"),plot:n["default"].attr("string"),rated:n["default"].attr("string"),director:n["default"].attr("string"),runtime:n["default"].attr("string"),metacritic:n["default"].attr("number"),trailer:n["default"].attr("string"),imdb:n["default"].attr("raw"),awards:n["default"].attr("raw"),download:n["default"].attr("raw"),Categories:n["default"].attr("raw"),slug:t["default"].computed("title",function(){return this.get("title").dasherize()})})}),define("client/router",["exports","ember","client/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("lists",function(){this.route("show",{path:":id"})}),this.route("movies",{path:"/"},function(){this.route("show",{path:"/movie/:slug"}),this.route("category",{path:"/category/:name"})})}),e["default"]=a}),define("client/routes/application",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){return this.store.findAll("category")}})}),define("client/routes/lists/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){return this.store.findAll("list")}})}),define("client/routes/lists/show",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(e){return this.store.find("list",e.id)}})}),define("client/routes/movies/MoviesList",["exports","ember","ember-infinity/mixins/route"],function(e,t,n){e["default"]=t["default"].Route.extend(n["default"],{templateName:"movies/index",perPageParam:"limit",pageParam:"page",totalPagesParam:"meta.total",apiParams:{perPage:10,startingPage:1},model:function(){return this.infinityModel("movie",this.apiParams)}})}),define("client/routes/movies/category",["exports","client/routes/movies/MoviesList"],function(e,t){e["default"]=t["default"].extend({model:function(e){var t=Object.assign({},this.apiParams,{category:e.name});return this.infinityModel("movie",t)}})}),define("client/routes/movies/index",["exports","client/routes/movies/MoviesList"],function(e,t){e["default"]=t["default"].extend({})}),define("client/routes/movies/show",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(e){return this.store.find("movie",e.slug)}})}),define("client/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:10,column:6},end:{line:13,column:6}},moduleName:"client/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","title");var a=e.createTextNode("Home");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","fa-icon",[],["icon","home"],["loc",[null,[11,8],[11,31]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:14,column:6},end:{line:17,column:6}},moduleName:"client/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","title");var a=e.createTextNode("Lists");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","fa-icon",[],["icon","list"],["loc",[null,[15,8],[15,31]]]]],locals:[],templates:[]}}(),n=function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:27,column:8},end:{line:29,column:8}},moduleName:"client/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["content","category.name",["loc",[null,[28,10],[28,29]]]]],locals:[],templates:[]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:26,column:6},end:{line:30,column:6}},moduleName:"client/templates/application.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","link-to",["movies.category",["get","category.name",["loc",[null,[27,37],[27,50]]]]],["tagName","li","class","nav-list__item"],0,null,["loc",[null,[27,8],[29,20]]]]],locals:["category"],templates:[e]}}();return{meta:{topLevel:!1,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:35,column:6}},moduleName:"client/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","navbar");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","navbar__title");var r=e.createTextNode("\n    Moviez.city\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","sidebar");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("ul");e.setAttribute(r,"class","nav-list");var l=e.createTextNode("\n");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("    ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","nav-list__separator");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("span");e.setAttribute(l,"class","title");var i=e.createTextNode("Genres");e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n\n    ");e.appendChild(a,r);var r=e.createElement("ul");e.setAttribute(r,"class","nav-list padded");var l=e.createTextNode("\n");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("    ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),r=e.childAt(a,[1]),l=e.childAt(r,[1]),i=new Array(5);return i[0]=e.createMorphAt(l,1,1),i[1]=e.createMorphAt(l,2,2),i[2]=e.createMorphAt(e.childAt(r,[3]),1,1),i[3]=e.createMorphAt(e.childAt(r,[5]),1,1),i[4]=e.createMorphAt(a,3,3),i},statements:[["block","link-to",["movies"],["tagName","li","class","nav-list__item","href",!1],0,null,["loc",[null,[10,6],[13,18]]]],["block","link-to",["lists"],["tagName","li","class","nav-list__item","href",!1],1,null,["loc",[null,[14,6],[17,18]]]],["inline","fa-icon",[],["icon","th-large"],["loc",[null,[21,6],[21,33]]]],["block","each",[["get","model",["loc",[null,[26,14],[26,19]]]]],[],2,null,["loc",[null,[26,6],[30,15]]]],["content","outlet",["loc",[null,[34,2],[34,12]]]]],locals:[],templates:[e,t,n]}}())}),define("client/templates/components/categories-list",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"client/templates/components/categories-list.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","category-item");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(2);return r[0]=e.createAttrMorph(a,"style"),r[1]=e.createMorphAt(a,1,1),r},statements:[["attribute","style",["concat",["background-color: ",["get","category.color",["loc",[null,[2,57],[2,71]]]]]]],["content","category.name",["loc",[null,[3,4],[3,21]]]]],locals:["category"],templates:[]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:6,column:0}},moduleName:"client/templates/components/categories-list.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","each",[["get","categories",["loc",[null,[1,8],[1,18]]]]],[],0,null,["loc",[null,[1,0],[5,9]]]]],locals:[],templates:[e]}}())}),define("client/templates/components/infinity-loader",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"client/templates/components/infinity-loader.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["content","yield",["loc",[null,[2,2],[2,11]]]]],locals:[],templates:[]}}(),t=function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:4,column:2},end:{line:6,column:2}},moduleName:"client/templates/components/infinity-loader.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("span"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),0,0),a},statements:[["content","loadedText",["loc",[null,[5,10],[5,24]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:6,column:2},end:{line:8,column:2}},moduleName:"client/templates/components/infinity-loader.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("span"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),0,0),a},statements:[["content","loadingText",["loc",[null,[7,10],[7,25]]]]],locals:[],templates:[]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:3,column:0},end:{line:9,column:0}},moduleName:"client/templates/components/infinity-loader.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","if",[["get","infinityModel.reachedInfinity",["loc",[null,[4,8],[4,37]]]]],[],0,1,["loc",[null,[4,2],[8,9]]]]],locals:[],templates:[e,t]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:10,column:0}},moduleName:"client/templates/components/infinity-loader.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","if",[["get","hasBlock",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[9,7]]]]],locals:[],templates:[e,t]}}())}),define("client/templates/lists/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:4,column:2},end:{line:6,column:2}},moduleName:"client/templates/lists/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","title");var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),0,0),a},statements:[["content","list.title",["loc",[null,[5,23],[5,37]]]]],locals:[],templates:[]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:3,column:0},end:{line:7,column:0}},moduleName:"client/templates/lists/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","link-to",["lists.show",["get","list",["loc",[null,[4,26],[4,30]]]]],["class","movies-container__item"],0,null,["loc",[null,[4,2],[6,14]]]]],locals:["list"],templates:[e]}}();return{meta:{topLevel:!1,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:7,column:9}},moduleName:"client/templates/lists/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(e.childAt(t,[0]),0,0),a[1]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),a},statements:[["content","title",["loc",[null,[1,4],[1,15]]]],["block","each",[["get","model",["loc",[null,[3,8],[3,13]]]]],[],0,null,["loc",[null,[3,0],[7,9]]]]],locals:[],templates:[e]}}())}),define("client/templates/lists/show",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:!1,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:3,column:15}},moduleName:"client/templates/lists/show.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),a=e.createTextNode("show list data");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),a},statements:[["content","model.title",["loc",[null,[3,0],[3,15]]]]],locals:[],templates:[]}}())}),define("client/templates/lists",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:3,column:6}},moduleName:"client/templates/lists.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","content");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[0]),1,1),a},statements:[["content","outlet",["loc",[null,[2,2],[2,12]]]]],locals:[],templates:[]}}())}),define("client/templates/movies/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:7,column:6},end:{line:11,column:6}},moduleName:"client/templates/movies/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createElement("img");e.setAttribute(n,"alt","#"),e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","title");var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","time");var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode(" min");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(3);return r[0]=e.createAttrMorph(a,"src"),r[1]=e.createMorphAt(e.childAt(t,[3]),0,0),r[2]=e.createMorphAt(e.childAt(t,[5]),0,0),r},statements:[["attribute","src",["concat",["http://image.tmdb.org/t/p/w342/",["get","movie.poster_path",["loc",[null,[8,51],[8,68]]]]]]],["content","movie.title",["loc",[null,[9,27],[9,42]]]],["content","movie.runtime",["loc",[null,[10,26],[10,43]]]]],locals:[],templates:[]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:6,column:4},end:{line:12,column:4}},moduleName:"client/templates/movies/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","link-to",["movies.show",["get","movie",["loc",[null,[7,31],[7,36]]]]],["class","movies-container__item"],0,null,["loc",[null,[7,6],[11,18]]]]],locals:["movie"],templates:[e]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:16,column:6}},moduleName:"client/templates/movies/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","content");var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("h1"),r=e.createComment("");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","movies-container");var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=new Array(3);return r[0]=e.createMorphAt(e.childAt(a,[1]),0,0),r[1]=e.createMorphAt(e.childAt(a,[3]),1,1),r[2]=e.createMorphAt(a,5,5),r},statements:[["content","title",["loc",[null,[3,6],[3,17]]]],["block","each",[["get","model",["loc",[null,[6,12],[6,17]]]]],[],0,null,["loc",[null,[6,4],[12,13]]]],["inline","infinity-loader",[],["infinityModel",["subexpr","@mut",[["get","model",["loc",[null,[15,34],[15,39]]]]],[],[]],"loadingText","Loading...","loadedText","Finished!"],["loc",[null,[15,2],[15,89]]]]],locals:[],templates:[e]}}())}),define("client/templates/movies/show",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:52,column:0}},moduleName:"client/templates/movies/show.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","movie_container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","movie");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","movie__backdrop");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("a");e.setAttribute(l,"class","swipebox");var i=e.createTextNode("\n        ");e.appendChild(l,i);var i=e.createElement("div");e.setAttribute(i,"class","movie__backdrop__play"),e.appendChild(l,i);var i=e.createTextNode("\n      ");e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","movie__content");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","movie__data");var i=e.createTextNode("\n        ");e.appendChild(l,i);var i=e.createElement("div");e.setAttribute(i,"class","movie__details");var o=e.createTextNode("\n            ");e.appendChild(i,o);var o=e.createElement("a");e.setAttribute(o,"class","swipebox");var d=e.createTextNode("\n              ");e.appendChild(o,d);var d=e.createElement("img");e.setAttribute(d,"class","movie__poster"),e.appendChild(o,d);var d=e.createTextNode("\n            ");e.appendChild(o,d),e.appendChild(i,o);var o=e.createTextNode("\n\n            ");e.appendChild(i,o);var o=e.createElement("div");e.setAttribute(o,"class","movie__details__description");var d=e.createTextNode("\n              ");e.appendChild(o,d);var d=e.createElement("h1"),c=e.createComment("");e.appendChild(d,c),e.appendChild(o,d);var d=e.createTextNode("\n              ");e.appendChild(o,d);var d=e.createElement("h3"),c=e.createComment("");e.appendChild(d,c);var c=e.createTextNode("   (");e.appendChild(d,c);var c=e.createComment("");e.appendChild(d,c);var c=e.createTextNode(" min) ");e.appendChild(d,c);var c=e.createElement("span");e.setAttribute(c,"class","pg");var s=e.createComment("");e.appendChild(c,s),e.appendChild(d,c),e.appendChild(o,d);var d=e.createTextNode("\n              ");e.appendChild(o,d);var d=e.createComment("");e.appendChild(o,d);var d=e.createTextNode("\n              ");e.appendChild(o,d);var d=e.createElement("p"),c=e.createComment("");e.appendChild(d,c),e.appendChild(o,d);var d=e.createTextNode("\n            ");e.appendChild(o,d),e.appendChild(i,o);var o=e.createTextNode("\n        ");e.appendChild(i,o),e.appendChild(l,i);var i=e.createTextNode("\n        ");e.appendChild(l,i);var i=e.createElement("div");e.setAttribute(i,"class","movie__downloads");var o=e.createTextNode("\n          ");e.appendChild(i,o);var o=e.createElement("div");e.setAttribute(o,"class","movie__downloads__data");var d=e.createTextNode("\n            ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","table__row");var c=e.createTextNode("\n              ");e.appendChild(d,c);var c=e.createElement("span");e.setAttribute(c,"class","key");var s=e.createTextNode("Size:");e.appendChild(c,s),e.appendChild(d,c);var c=e.createTextNode(" ");e.appendChild(d,c);var c=e.createElement("span");e.setAttribute(c,"class","value");var s=e.createComment("");e.appendChild(c,s),e.appendChild(d,c);var c=e.createTextNode("\n            ");e.appendChild(d,c),e.appendChild(o,d);var d=e.createTextNode("\n            ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","table__row");var c=e.createTextNode("\n              ");e.appendChild(d,c);var c=e.createElement("span");e.setAttribute(c,"class","key");var s=e.createTextNode("Quality:");e.appendChild(c,s),e.appendChild(d,c);var c=e.createTextNode(" ");e.appendChild(d,c);var c=e.createElement("span");e.setAttribute(c,"class","value");var s=e.createComment("");e.appendChild(c,s),e.appendChild(d,c);var c=e.createTextNode("\n            ");e.appendChild(d,c),e.appendChild(o,d);var d=e.createTextNode("\n            ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","table__row");var c=e.createTextNode("\n              ");e.appendChild(d,c);var c=e.createElement("span");e.setAttribute(c,"class","key");var s=e.createTextNode("Seeders:");e.appendChild(c,s),e.appendChild(d,c);var c=e.createTextNode(" ");e.appendChild(d,c);var c=e.createElement("span");e.setAttribute(c,"class","value");var s=e.createComment("");e.appendChild(c,s),e.appendChild(d,c);var c=e.createTextNode("\n            ");e.appendChild(d,c),e.appendChild(o,d);var d=e.createTextNode("\n            ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","table__row");var c=e.createTextNode("\n              ");e.appendChild(d,c);var c=e.createElement("span");e.setAttribute(c,"class","key");var s=e.createTextNode("Leechers:");e.appendChild(c,s),e.appendChild(d,c);var c=e.createTextNode(" ");e.appendChild(d,c);var c=e.createElement("span");e.setAttribute(c,"class","value");var s=e.createComment("");e.appendChild(c,s),e.appendChild(d,c);var c=e.createTextNode("\n            ");e.appendChild(d,c),e.appendChild(o,d);var d=e.createTextNode("\n          ");
e.appendChild(o,d),e.appendChild(i,o);var o=e.createTextNode("\n          ");e.appendChild(i,o);var o=e.createElement("div");e.setAttribute(o,"class","movie__downloads__link");var d=e.createTextNode("\n            ");e.appendChild(o,d);var d=e.createElement("a");e.setAttribute(d,"class","download-btns--container");var c=e.createTextNode("\n              ");e.appendChild(d,c);var c=e.createElement("div");e.setAttribute(c,"class","download-btns");var s=e.createTextNode("\n                ");e.appendChild(c,s);var s=e.createElement("span");e.setAttribute(s,"class","download-text");var p=e.createElement("i");e.setAttribute(p,"class","fa fa-magnet");var u=e.createTextNode("  ");e.appendChild(p,u),e.appendChild(s,p);var p=e.createTextNode("Download");e.appendChild(s,p),e.appendChild(c,s);var s=e.createTextNode("\n              ");e.appendChild(c,s),e.appendChild(d,c);var c=e.createTextNode("\n            ");e.appendChild(d,c),e.appendChild(o,d);var d=e.createTextNode("\n          ");e.appendChild(o,d),e.appendChild(i,o);var o=e.createTextNode("\n        ");e.appendChild(i,o),e.appendChild(l,i);var i=e.createTextNode("\n      ");e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","movie__actors");var i=e.createTextNode("\n\n      ");e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0,1]),r=e.childAt(a,[1]),l=e.childAt(r,[1]),i=e.childAt(a,[3,1]),o=e.childAt(i,[1]),d=e.childAt(o,[1]),c=e.childAt(d,[1]),s=e.childAt(o,[3]),p=e.childAt(s,[3]),u=e.childAt(i,[3]),m=e.childAt(u,[1]),h=e.childAt(u,[3,1]),v=new Array(18);return v[0]=e.createAttrMorph(r,"style"),v[1]=e.createAttrMorph(l,"href"),v[2]=e.createAttrMorph(d,"href"),v[3]=e.createAttrMorph(d,"title"),v[4]=e.createAttrMorph(c,"src"),v[5]=e.createAttrMorph(c,"alt"),v[6]=e.createMorphAt(e.childAt(s,[1]),0,0),v[7]=e.createMorphAt(p,0,0),v[8]=e.createMorphAt(p,2,2),v[9]=e.createMorphAt(e.childAt(p,[4]),0,0),v[10]=e.createMorphAt(s,5,5),v[11]=e.createMorphAt(e.childAt(s,[7]),0,0),v[12]=e.createMorphAt(e.childAt(m,[1,3]),0,0),v[13]=e.createMorphAt(e.childAt(m,[3,3]),0,0),v[14]=e.createMorphAt(e.childAt(m,[5,3]),0,0),v[15]=e.createMorphAt(e.childAt(m,[7,3]),0,0),v[16]=e.createAttrMorph(h,"href"),v[17]=e.createElementMorph(h),v},statements:[["attribute","style",["concat",["background-image: url(https://image.tmdb.org/t/p/w1000",["get","model.backdrop_path",["loc",[null,[3,97],[3,116]]]],")"]]],["attribute","href",["concat",[["get","model.trailer",["loc",[null,[4,34],[4,47]]]]]]],["attribute","href",["concat",["http://image.tmdb.org/t/p/w780",["get","model.poster_path",["loc",[null,[11,70],[11,87]]]]]]],["attribute","title",["concat",[["get","model.title",["loc",[null,[11,101],[11,112]]]]]]],["attribute","src",["concat",["http://image.tmdb.org/t/p/w185",["get","model.poster_path",["loc",[null,[12,78],[12,95]]]]]]],["attribute","alt",["concat",[["get","model.title",["loc",[null,[12,106],[12,117]]]]]]],["content","model.title",["loc",[null,[16,18],[16,35]]]],["inline","formatted-date",[["get","model.release_date",["loc",[null,[17,35],[17,53]]]],"LL"],[],["loc",[null,[17,18],[17,60]]]],["content","model.runtime",["loc",[null,[17,69],[17,86]]]],["content","model.rated",["loc",[null,[17,109],[17,124]]]],["inline","categories-list",[],["elements",["subexpr","@mut",[["get","model.Categories",["loc",[null,[18,41],[18,57]]]]],[],[]]],["loc",[null,[18,14],[18,59]]]],["content","model.plot",["loc",[null,[19,17],[19,33]]]],["content","model.download.size",["loc",[null,[25,65],[25,88]]]],["content","model.download.type",["loc",[null,[28,68],[28,91]]]],["content","model.download.seeders",["loc",[null,[31,68],[31,94]]]],["content","model.download.leechers",["loc",[null,[34,69],[34,96]]]],["attribute","href",["concat",[["get","model.download.magnet",["loc",[null,[38,56],[38,77]]]]]]],["element","action",["download",["get","model.download.magnet",["loc",[null,[38,102],[38,123]]]]],[],["loc",[null,[38,81],[38,125]]]]],locals:[],templates:[]}}())}),define("client/templates/movies",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:1,column:10}},moduleName:"client/templates/movies.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("client/transforms/raw",["exports","ember-data"],function(e,t){e["default"]=t["default"].Transform.extend({deserialize:function(e){return e},serialize:function(e){return e}})}),define("client/utils/date-helpers",["exports"],function(e){function t(e,t){return window.moment(e).format(t)}e.formatDate=t}),define("client/config/environment",["ember"],function(e){var t="client";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("client/tests/test-helper"):require("client/app")["default"].create({name:"client",version:"0.0.0+cb1c9c60"});