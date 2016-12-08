var ac_main =
webpackJsonpac__name_([3],{

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppState);
    return AppState;
}());
exports.AppState = AppState;


/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Angular 2
// rc2 workaround
var platform_browser_1 = __webpack_require__(71);
var core_1 = __webpack_require__(0);
// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function identity(value) { return value; };
if (false) {
    core_1.enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        platform_browser_1.disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(core_1.ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        platform_browser_1.enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
exports.decorateModuleRef = _decorateModuleRef;
exports.ENV_PROVIDERS = PROVIDERS.slice();


/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(501));


/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(506));


/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(511));


/***/ },

/***/ 364:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// App
__export(__webpack_require__(503));


/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(134);
var AboutComponent = (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .data
            .subscribe(function (data) {
            // your resolved data from route
            _this.localState = data.yourData;
        });
        console.log('hello `About` component');
        // static data that is bundled
        // var mockData = require('assets/mock-data/mock-data.json');
        // console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        this.asyncDataWithWebpack();
    };
    AboutComponent.prototype.asyncDataWithWebpack = function () {
        var _this = this;
        // you can also async load mock data with 'es6-promise-loader'
        // you would do this if you don't want the mock-data bundled
        // remember that 'es6-promise-loader' is a promise
        setTimeout(function () {
            __webpack_require__.e/* System.import */(1).then(__webpack_require__.bind(null, 683))
                .then(function (json) {
                console.log('async mockData', json);
                _this.localState = json;
            });
        });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about',
            styles: ["\n  "],
            template: "\n    <h1>About</h1>\n    <div>\n      For hot module reloading run\n      <pre>npm run start:hmr</pre>\n    </div>\n    <div>\n      <h3>\n        patrick@AngularClass.com\n      </h3>\n    </div>\n    <pre>this.localState = {{ localState | json }}</pre>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a;
}());
exports.AboutComponent = AboutComponent;


/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular 2 decorators and services
 */
var core_1 = __webpack_require__(0);
var app_service_1 = __webpack_require__(208);
/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(appState) {
        this.appState = appState;
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.name = 'Angular 2 Webpack Starter';
        this.url = 'https://twitter.com/AngularClass';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [
                __webpack_require__(677)
            ],
            template: "\n    <nav>\n      <span>\n        <a [routerLink]=\" ['./'] \">\n          Index\n        </a>\n      </span>\n      |\n      <span>\n        <a [routerLink]=\" ['./home'] \">\n          Home\n        </a>\n      </span>\n      |\n      <span>\n        <a [routerLink]=\" ['./detail'] \">\n          Detail\n        </a>\n      </span>\n      |\n      <span>\n        <a [routerLink]=\" ['./about'] \">\n          About\n        </a>\n      </span>\n    </nav>\n\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n\n    <pre class=\"app-state\">this.appState.state = {{ appState.state | json }}</pre>\n\n    <footer>\n      <span>WebPack Angular 2 Starter by <a [href]=\"url\">@AngularClass</a></span>\n      <div>\n        <a [href]=\"url\">\n          <img [src]=\"angularclassLogo\" width=\"25%\">\n        </a>\n      </div>\n    </footer>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof app_service_1.AppState !== 'undefined' && app_service_1.AppState) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
exports.AppComponent = AppComponent;
/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */


/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(71);
var forms_1 = __webpack_require__(187);
var http_1 = __webpack_require__(148);
var router_1 = __webpack_require__(134);
var hmr_1 = __webpack_require__(103);
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = __webpack_require__(242);
var app_routes_1 = __webpack_require__(505);
// App is our top level component
var app_component_1 = __webpack_require__(502);
var app_resolver_1 = __webpack_require__(504);
var app_service_1 = __webpack_require__(208);
var home_1 = __webpack_require__(327);
var about_1 = __webpack_require__(326);
var no_content_1 = __webpack_require__(328);
var x_large_1 = __webpack_require__(509);
// Application wide providers
var APP_PROVIDERS = app_resolver_1.APP_RESOLVER_PROVIDERS.concat([
    app_service_1.AppState
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state)
            return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = hmr_1.createInputTransfer();
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [
                app_component_1.AppComponent,
                about_1.AboutComponent,
                home_1.HomeComponent,
                no_content_1.NoContentComponent,
                x_large_1.XLarge
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true, preloadingStrategy: router_1.PreloadAllModules })
            ],
            providers: [
                environment_1.ENV_PROVIDERS,
                APP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ApplicationRef !== 'undefined' && core_1.ApplicationRef) === 'function' && _a) || Object, (typeof (_b = typeof app_service_1.AppState !== 'undefined' && app_service_1.AppState) === 'function' && _b) || Object])
    ], AppModule);
    return AppModule;
    var _a, _b;
}());
exports.AppModule = AppModule;


/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(10);
__webpack_require__(663);
var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.of({ res: 'I am data' });
    };
    DataResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataResolver);
    return DataResolver;
}());
exports.DataResolver = DataResolver;
// an array of services to resolve routes with data
exports.APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var home_1 = __webpack_require__(327);
var about_1 = __webpack_require__(326);
var no_content_1 = __webpack_require__(328);
exports.ROUTES = [
    { path: '', component: home_1.HomeComponent },
    { path: 'home', component: home_1.HomeComponent },
    { path: 'about', component: about_1.AboutComponent },
    {
        path: 'detail', loadChildren: function () { return __webpack_require__.e/* System.import */(0).then(__webpack_require__.bind(null, 682))
            .then(function (comp) { return comp.default; }); },
    },
    { path: '**', component: no_content_1.NoContentComponent },
];


/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var app_service_1 = __webpack_require__(208);
var title_1 = __webpack_require__(507);
var HomeComponent = (function () {
    // TypeScript public modifiers
    function HomeComponent(appState, title) {
        this.appState = appState;
        this.title = title;
        // Set our default values
        this.localState = { value: '' };
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('hello `Home` component');
        // this.title.getData().subscribe(data => this.data = data);
    };
    HomeComponent.prototype.submitState = function (value) {
        console.log('submitState', value);
        this.appState.set('value', value);
        this.localState.value = '';
    };
    HomeComponent = __decorate([
        core_1.Component({
            // The selector is what angular internally uses
            // for `document.querySelectorAll(selector)` in our index.html
            // where, in this case, selector is the string 'home'
            selector: 'home',
            // We need to tell Angular's Dependency Injection which providers are in our app.
            providers: [
                title_1.Title
            ],
            // Our list of styles in our component. We may add more to compose many styles together
            styles: [__webpack_require__(678)],
            // Every Angular template is first compiled by the browser before Angular runs it's compiler
            template: __webpack_require__(658)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof app_service_1.AppState !== 'undefined' && app_service_1.AppState) === 'function' && _a) || Object, (typeof (_b = typeof title_1.Title !== 'undefined' && title_1.Title) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
exports.HomeComponent = HomeComponent;


/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(508));


/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(148);
var Title = (function () {
    function Title(http) {
        this.http = http;
        this.value = 'Angular 2';
    }
    Title.prototype.getData = function () {
        console.log('Title#getData(): Get Data');
        // return this.http.get('/assets/data.json')
        // .map(res => res.json());
        return {
            value: 'AngularClass'
        };
    };
    Title = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], Title);
    return Title;
    var _a;
}());
exports.Title = Title;


/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(510));


/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
/*
 * Directive
 * XLarge is a simple directive to show how one is made
 */
var XLarge = (function () {
    function XLarge(element, renderer) {
        // simple DOM manipulation to set font size to x-large
        // `nativeElement` is the direct reference to the DOM element
        // element.nativeElement.style.fontSize = 'x-large';
        // for server/webworker support use the renderer
        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    }
    XLarge = __decorate([
        core_1.Directive({
            selector: '[x-large]' // using [ ] means selecting attributes
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _b) || Object])
    ], XLarge);
    return XLarge;
    var _a, _b;
}());
exports.XLarge = XLarge;


/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    NoContentComponent = __decorate([
        core_1.Component({
            selector: 'no-content',
            template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NoContentComponent);
    return NoContentComponent;
}());
exports.NoContentComponent = NoContentComponent;


/***/ },

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)();
// imports


// module
exports.push([module.i, "html, body{\r\n  height: 100%;\r\n  font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\nspan.active {\r\n  background-color: gray;\r\n}\r\n", ""]);

// exports


/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)();
// imports


// module
exports.push([module.i, "/*styles for home content only*/", ""]);

// exports


/***/ },

/***/ 658:
/***/ function(module, exports) {

module.exports = "<div class=\"card-container\">\r\n  <h1 x-large class=\"sample-content\">Your Content Here</h1>\r\n\r\n  <div>\r\n    For material design components use the <a href=\"https://github.com/AngularClass/angular2-webpack-starter/tree/material2\"><b>material2</b></a> branch\r\n  </div>\r\n\r\n  <hr>\r\n\r\n  <div>\r\n    For hot module reloading run\r\n    <pre>npm run start:hmr</pre>\r\n  </div>\r\n\r\n  <hr>\r\n\r\n  <div>\r\n    <h4>Local State</h4>\r\n\r\n    <form (ngSubmit)=\"submitState(localState.value)\" autocomplete=\"off\">\r\n\r\n      <input\r\n        [value]=\"localState.value\"\r\n        (input)=\"localState.value = $event.target.value\"\r\n        placeholder=\"Submit Local State to App State\"\r\n        autofocus>\r\n\r\n      <button md-raised-button color=\"primary\">Submit Value</button>\r\n    </form>\r\n    <!--\r\n        <input type=\"text\" [value]=\"localState.value\" (input)=\"localState.value = $event.target.value\" autofocus>\r\n        Rather than wiring up two-way data-binding ourselves with [value] and (input)\r\n        we can use Angular's [(ngModel)] syntax\r\n        <input type=\"text\" name=\"textInput\" [(ngModel)]=\"localState.value\" autofocus>\r\n      -->\r\n\r\n    <pre>this.localState = {{ localState | json }}</pre>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ },

/***/ 663:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(10);
var of_1 = __webpack_require__(70);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(655);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(656);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular bootstraping
 */
var platform_browser_dynamic_1 = __webpack_require__(149);
var environment_1 = __webpack_require__(242);
var hmr_1 = __webpack_require__(103);
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_1 = __webpack_require__(379);
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_1.AppModule).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
// needed for hmr
// in prod this is replace for document ready
hmr_1.bootloader(main);


/***/ }

},[679]);
//# sourceMappingURL=main.map