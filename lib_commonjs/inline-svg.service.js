"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineSVGService = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var InlineSVGService = (function () {
    function InlineSVGService(rendererFactory) {
        this._ranScripts = {};
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    InlineSVGService.prototype.insertEl = function (dir, parentEl, content, replaceContents, prepend) {
        if (replaceContents && !prepend) {
            var parentNode = dir._prevSVG && dir._prevSVG.parentNode;
            if (parentNode) {
                this._renderer.removeChild(parentNode, dir._prevSVG);
            }
            parentEl.innerHTML = '';
        }
        if (prepend) {
            this._renderer.insertBefore(parentEl, content, parentEl.firstChild);
        }
        else {
            this._renderer.appendChild(parentEl, content);
        }
        if (content.nodeName === 'svg') {
            dir._prevSVG = content;
        }
    };
    InlineSVGService.prototype.evalScripts = function (svg, url, evalMode) {
        var scripts = svg.querySelectorAll('script');
        var scriptsToEval = [];
        for (var i = 0; i < scripts.length; i++) {
            var scriptType = scripts[i].getAttribute('type');
            if (!scriptType || scriptType === 'application/ecmascript' || scriptType === 'application/javascript') {
                var script = scripts[i].innerText || scripts[i].textContent;
                scriptsToEval.push(script);
                this._renderer.removeChild(scripts[i].parentNode, scripts[i]);
            }
        }
        if (scriptsToEval.length > 0 && (evalMode === "always" ||
            (evalMode === "once" && !this._ranScripts[url]))) {
            for (var i = 0; i < scriptsToEval.length; i++) {
                new Function(scriptsToEval[i])(window);
            }
            this._ranScripts[url] = true;
        }
    };
    InlineSVGService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: InlineSVGService, deps: [{ token: i0.RendererFactory2 }], target: i0.ɵɵFactoryTarget.Injectable });
    InlineSVGService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: InlineSVGService, providedIn: 'root' });
    return InlineSVGService;
}());
exports.InlineSVGService = InlineSVGService;
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: InlineSVGService, decorators: [{
            type: core_1.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.RendererFactory2 }]; } });
