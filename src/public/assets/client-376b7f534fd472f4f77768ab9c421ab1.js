"use strict";define("client/adapters/application",["exports","ember-data"],function(e,t){e["default"]=t["default"].RESTAdapter.extend({host:"http://moviez.city",namespace:"api"})}),define("client/app",["exports","ember","ember/resolver","ember/load-initializers","client/config/environment"],function(e,t,n,a,l){var r;t["default"].MODEL_FACTORY_INJECTIONS=!0,r=t["default"].Application.extend({modulePrefix:l["default"].modulePrefix,podModulePrefix:l["default"].podModulePrefix,Resolver:n["default"]}),a["default"](r,l["default"].modulePrefix),e["default"]=r}),define("client/components/app-version",["exports","ember-cli-app-version/components/app-version","client/config/environment"],function(e,t,n){var a=n["default"].APP,l=a.name,r=a.version;e["default"]=t["default"].extend({version:r,name:l})}),define("client/components/fa-icon",["exports","ember-cli-font-awesome/components/fa-icon"],function(e,t){e["default"]=t["default"]}),define("client/components/fa-list-icon",["exports","ember-cli-font-awesome/components/fa-list-icon"],function(e,t){e["default"]=t["default"]}),define("client/components/fa-list",["exports","ember-cli-font-awesome/components/fa-list"],function(e,t){e["default"]=t["default"]}),define("client/components/fa-stack",["exports","ember-cli-font-awesome/components/fa-stack"],function(e,t){e["default"]=t["default"]}),define("client/components/infinity-loader",["exports","ember-infinity/components/infinity-loader"],function(e,t){e["default"]=t["default"]}),define("client/controllers/application",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({isMenuOpen:!1,init:function(){var e=this;t["default"].$("body").on("click",function(n){n.preventDefault(),e.isMenuOpen&&0===t["default"].$(n.target).parents(".st-menu").length&&(t["default"].$("#js-container").removeClass("st-menu-open"),e.isMenuOpen=!1)})},actions:{onMenuOpen:function(){t["default"].$("#js-container").addClass("st-effect-3 st-menu-open"),this.isMenuOpen=!0}}})}),define("client/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("client/controllers/lists/index",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({title:"Lists"})}),define("client/controllers/movies/index",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({title:"Home"})}),define("client/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("client/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","client/config/environment"],function(e,t,n){var a=n["default"].APP,l=a.name,r=a.version;e["default"]={name:"App Version",initialize:t["default"](l,r)}}),define("client/initializers/export-application-global",["exports","ember","client/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,l=n["default"].exportApplicationGlobal;a="string"==typeof l?l:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("client/models/category",["exports","ember-data"],function(e,t){e["default"]=t["default"].Model.extend({name:t["default"].attr("string")})}),define("client/models/list",["exports","ember-data"],function(e,t){e["default"]=t["default"].Model.extend({title:t["default"].attr("string"),image:t["default"].attr("string")})}),define("client/models/movie",["exports","ember-data"],function(e,t){e["default"]=t["default"].Model.extend({title:t["default"].attr("string"),poster_path:t["default"].attr("string"),backdrop_path:t["default"].attr("string"),original_language:t["default"].attr("string"),release_date:t["default"].attr("date"),created_at:t["default"].attr("date"),updated_at:t["default"].attr("date"),overview:t["default"].attr("string"),plot:t["default"].attr("string"),rated:t["default"].attr("string"),director:t["default"].attr("string"),runtime:t["default"].attr("string"),metacritic:t["default"].attr("number"),trailer:t["default"].attr("string"),imdb:t["default"].attr("raw"),awards:t["default"].attr("raw"),download:t["default"].attr("raw"),slug:Ember.computed("title",function(){return this.get("title").dasherize()})})}),define("client/router",["exports","ember","client/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("lists",function(){this.route("show",{path:":id"})}),this.route("movies",{path:"/"},function(){this.route("show",{path:"/movie/:id"}),this.route("category",{path:"/category/:name"})})}),e["default"]=a}),define("client/routes/application",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){return this.store.findAll("category")}})}),define("client/routes/lists/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){return this.store.findAll("list")}})}),define("client/routes/lists/show",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(e){return this.store.find("list",e.id)}})}),define("client/routes/movies/MoviesList",["exports","ember","ember-infinity/mixins/route"],function(e,t,n){e["default"]=t["default"].Route.extend(n["default"],{templateName:"movies/index",perPageParam:"limit",pageParam:"page",totalPagesParam:"meta.total",apiParams:{perPage:10,startingPage:1},model:function(e){return this.infinityModel("movie",this.apiParams)}})}),define("client/routes/movies/category",["exports","ember","client/routes/movies/MoviesList"],function(e,t,n){e["default"]=n["default"].extend({model:function(e){return this.apiParams.category=e.name,this.infinityModel("movie",this.apiParams)}})}),define("client/routes/movies/index",["exports","ember","client/routes/movies/MoviesList"],function(e,t,n){e["default"]=n["default"].extend({})}),define("client/routes/movies/show",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(e){return this.store.find("movie",e.id)}})}),define("client/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:10,column:6},end:{line:13,column:6}},moduleName:"client/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","title");var a=e.createTextNode("Home");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","fa-icon",[],["icon","home"],["loc",[null,[11,8],[11,31]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:14,column:6},end:{line:17,column:6}},moduleName:"client/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","title");var a=e.createTextNode("Lists");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","fa-icon",[],["icon","list"],["loc",[null,[15,8],[15,31]]]]],locals:[],templates:[]}}(),n=function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:27,column:8},end:{line:29,column:8}},moduleName:"client/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["content","category.name",["loc",[null,[28,10],[28,29]]]]],locals:[],templates:[]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:26,column:6},end:{line:30,column:6}},moduleName:"client/templates/application.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","link-to",["movies.category",["get","category.name",["loc",[null,[27,37],[27,50]]]]],["tagName","li","class","nav-list__item"],0,null,["loc",[null,[27,8],[29,20]]]]],locals:["category"],templates:[e]}}();return{meta:{topLevel:!1,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:37,column:6}},moduleName:"client/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","navbar");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","navbar__title");var l=e.createTextNode("\n    Moviez.city\n  ");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","sidebar");var l=e.createTextNode("\n    ");e.appendChild(a,l);var l=e.createElement("ul");e.setAttribute(l,"class","nav-list");var r=e.createTextNode("\n");e.appendChild(l,r);var r=e.createComment("");e.appendChild(l,r);var r=e.createComment("");e.appendChild(l,r);var r=e.createTextNode("    ");e.appendChild(l,r),e.appendChild(a,l);var l=e.createTextNode("\n\n    ");e.appendChild(a,l);var l=e.createElement("div");e.setAttribute(l,"class","nav-list__separator");var r=e.createTextNode("\n      ");e.appendChild(l,r);var r=e.createComment("");e.appendChild(l,r);var r=e.createTextNode("\n      ");e.appendChild(l,r);var r=e.createElement("span");e.setAttribute(r,"class","title");var i=e.createTextNode("Genres");e.appendChild(r,i),e.appendChild(l,r);var r=e.createTextNode("\n    ");e.appendChild(l,r),e.appendChild(a,l);var l=e.createTextNode("\n\n    ");e.appendChild(a,l);var l=e.createElement("ul");e.setAttribute(l,"class","nav-list padded");var r=e.createTextNode("\n");e.appendChild(l,r);var r=e.createComment("");e.appendChild(l,r);var r=e.createTextNode("    ");e.appendChild(l,r),e.appendChild(a,l);var l=e.createTextNode("\n  ");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","content");var l=e.createTextNode("\n    ");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("\n  ");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),l=e.childAt(a,[1]),r=e.childAt(l,[1]),i=new Array(5);return i[0]=e.createMorphAt(r,1,1),i[1]=e.createMorphAt(r,2,2),i[2]=e.createMorphAt(e.childAt(l,[3]),1,1),i[3]=e.createMorphAt(e.childAt(l,[5]),1,1),i[4]=e.createMorphAt(e.childAt(a,[3]),1,1),i},statements:[["block","link-to",["movies"],["tagName","li","class","nav-list__item","href",!1],0,null,["loc",[null,[10,6],[13,18]]]],["block","link-to",["lists"],["tagName","li","class","nav-list__item","href",!1],1,null,["loc",[null,[14,6],[17,18]]]],["inline","fa-icon",[],["icon","th-large"],["loc",[null,[21,6],[21,33]]]],["block","each",[["get","model",["loc",[null,[26,14],[26,19]]]]],[],2,null,["loc",[null,[26,6],[30,15]]]],["content","outlet",["loc",[null,[35,4],[35,14]]]]],locals:[],templates:[e,t,n]}}())}),define("client/templates/components/infinity-loader",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"client/templates/components/infinity-loader.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["content","yield",["loc",[null,[2,2],[2,11]]]]],locals:[],templates:[]}}(),t=function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:4,column:2},end:{line:6,column:2}},moduleName:"client/templates/components/infinity-loader.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("span"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),0,0),a},statements:[["content","loadedText",["loc",[null,[5,10],[5,24]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:6,column:2},end:{line:8,column:2}},moduleName:"client/templates/components/infinity-loader.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("span"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),0,0),a},statements:[["content","loadingText",["loc",[null,[7,10],[7,25]]]]],locals:[],templates:[]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:3,column:0},end:{line:9,column:0}},moduleName:"client/templates/components/infinity-loader.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","if",[["get","infinityModel.reachedInfinity",["loc",[null,[4,8],[4,37]]]]],[],0,1,["loc",[null,[4,2],[8,9]]]]],locals:[],templates:[e,t]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:10,column:0}},moduleName:"client/templates/components/infinity-loader.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","if",[["get","hasBlock",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[9,7]]]]],locals:[],templates:[e,t]}}())}),define("client/templates/lists/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:4,column:2},end:{line:6,column:2}},moduleName:"client/templates/lists/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","title");var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),0,0),a},statements:[["content","list.title",["loc",[null,[5,23],[5,37]]]]],locals:[],templates:[]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:3,column:0},end:{line:7,column:0}},moduleName:"client/templates/lists/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","link-to",["lists.show",["get","list",["loc",[null,[4,26],[4,30]]]]],["class","movies-container__item"],0,null,["loc",[null,[4,2],[6,14]]]]],locals:["list"],templates:[e]}}();return{meta:{topLevel:!1,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:7,column:9}},moduleName:"client/templates/lists/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(e.childAt(t,[0]),0,0),a[1]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),a},statements:[["content","title",["loc",[null,[1,4],[1,15]]]],["block","each",[["get","model",["loc",[null,[3,8],[3,13]]]]],[],0,null,["loc",[null,[3,0],[7,9]]]]],locals:[],templates:[e]}}())}),define("client/templates/lists/show",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:!1,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:3,column:15}},moduleName:"client/templates/lists/show.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),a=e.createTextNode("show list data");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),a},statements:[["content","model.title",["loc",[null,[3,0],[3,15]]]]],locals:[],templates:[]}}())}),define("client/templates/lists",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:1,column:10}},moduleName:"client/templates/lists.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("client/templates/movies/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:5,column:4},end:{line:9,column:4}},moduleName:"client/templates/movies/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("img");e.setAttribute(n,"alt","#"),e.appendChild(t,n);var n=e.createTextNode("\n      ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","title");var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n      ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","time");var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode(" min");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),l=new Array(3);return l[0]=e.createAttrMorph(a,"src"),l[1]=e.createMorphAt(e.childAt(t,[3]),0,0),l[2]=e.createMorphAt(e.childAt(t,[5]),0,0),l},statements:[["attribute","src",["concat",["http://image.tmdb.org/t/p/w342/",["get","movie.poster_path",["loc",[null,[6,49],[6,66]]]]]]],["content","movie.title",["loc",[null,[7,25],[7,40]]]],["content","movie.runtime",["loc",[null,[8,24],[8,41]]]]],locals:[],templates:[]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:4,column:2},end:{line:10,column:2}},moduleName:"client/templates/movies/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","link-to",["movies.show",["get","movie",["loc",[null,[5,29],[5,34]]]]],["class","movies-container__item"],0,null,["loc",[null,[5,4],[9,16]]]]],locals:["movie"],templates:[e]}}();return{meta:{topLevel:!1,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:14,column:0}},moduleName:"client/templates/movies/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","movies-container");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(3);return a[0]=e.createMorphAt(e.childAt(t,[0]),0,0),a[1]=e.createMorphAt(e.childAt(t,[2]),1,1),a[2]=e.createMorphAt(t,4,4,n),a},statements:[["content","title",["loc",[null,[1,4],[1,15]]]],["block","each",[["get","model",["loc",[null,[4,10],[4,15]]]]],[],0,null,["loc",[null,[4,2],[10,11]]]],["inline","infinity-loader",[],["infinityModel",["subexpr","@mut",[["get","model",["loc",[null,[13,32],[13,37]]]]],[],[]],"loadingText","Loading...","loadedText","Finished!"],["loc",[null,[13,0],[13,87]]]]],locals:[],templates:[e]}}())}),define("client/templates/movies/show",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:!1,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:3,column:15}},moduleName:"client/templates/movies/show.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),a=e.createTextNode("show movie data");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),a},statements:[["content","model.title",["loc",[null,[3,0],[3,15]]]]],locals:[],templates:[]}}())}),define("client/templates/movies",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:1,column:10}},moduleName:"client/templates/movies.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("client/transforms/raw",["exports","ember-data"],function(e,t){e["default"]=t["default"].Transform.extend({deserialize:function(e){return e},serialize:function(e){return e}})}),define("client/config/environment",["ember"],function(e){var t="client";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),l=JSON.parse(unescape(a));return{"default":l}}catch(r){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("client/tests/test-helper"):require("client/app")["default"].create({name:"client",version:"0.0.0+8de02f84"});