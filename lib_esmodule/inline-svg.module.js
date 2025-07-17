import { NgModule } from '@angular/core';
import { InlineSVGComponent } from './inline-svg.component';
import { InlineSVGConfig } from './inline-svg.config';
import { InlineSVGDirective } from './inline-svg.directive';
import * as i0 from "@angular/core";
var InlineSVGModule = (function () {
    function InlineSVGModule() {
    }
    InlineSVGModule.forRoot = function (config) {
        return {
            ngModule: InlineSVGModule,
            providers: [
                { provide: InlineSVGConfig, useValue: config }
            ]
        };
    };
    InlineSVGModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: InlineSVGModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    InlineSVGModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.4", ngImport: i0, type: InlineSVGModule, imports: [InlineSVGDirective, InlineSVGComponent], exports: [InlineSVGDirective] });
    InlineSVGModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: InlineSVGModule, imports: [InlineSVGComponent] });
    return InlineSVGModule;
}());
export { InlineSVGModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: InlineSVGModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [InlineSVGDirective, InlineSVGComponent],
                    exports: [InlineSVGDirective],
                }]
        }] });
