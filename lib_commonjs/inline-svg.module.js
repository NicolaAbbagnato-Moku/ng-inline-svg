"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineSVGModule = void 0;
var core_1 = require("@angular/core");
var inline_svg_component_1 = require("./inline-svg.component");
var inline_svg_config_1 = require("./inline-svg.config");
var inline_svg_directive_1 = require("./inline-svg.directive");
var i0 = require("@angular/core");
var InlineSVGModule = (function () {
    function InlineSVGModule() {
    }
    InlineSVGModule.forRoot = function (config) {
        return {
            ngModule: InlineSVGModule,
            providers: [
                { provide: inline_svg_config_1.InlineSVGConfig, useValue: config }
            ]
        };
    };
    InlineSVGModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: InlineSVGModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    InlineSVGModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.4", ngImport: i0, type: InlineSVGModule, imports: [inline_svg_directive_1.InlineSVGDirective, inline_svg_component_1.InlineSVGComponent], exports: [inline_svg_directive_1.InlineSVGDirective] });
    InlineSVGModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: InlineSVGModule, imports: [inline_svg_component_1.InlineSVGComponent] });
    return InlineSVGModule;
}());
exports.InlineSVGModule = InlineSVGModule;
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: InlineSVGModule, decorators: [{
            type: core_1.NgModule,
            args: [{
                    imports: [inline_svg_directive_1.InlineSVGDirective, inline_svg_component_1.InlineSVGComponent],
                    exports: [inline_svg_directive_1.InlineSVGDirective],
                }]
        }] });
