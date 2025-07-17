"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineSVGComponent = void 0;
var core_1 = require("@angular/core");
var inline_svg_directive_1 = require("./inline-svg.directive");
var inline_svg_service_1 = require("./inline-svg.service");
var i0 = require("@angular/core");
var i1 = require("./inline-svg.service");
var InlineSVGComponent = (function () {
    function InlineSVGComponent(_inlineSVGService, el) {
        this._inlineSVGService = _inlineSVGService;
        this._el = el;
    }
    InlineSVGComponent.prototype.ngAfterViewInit = function () {
        this._updateContent();
    };
    InlineSVGComponent.prototype.ngOnChanges = function (changes) {
        if (changes['content']) {
            this._updateContent();
        }
    };
    InlineSVGComponent.prototype._updateContent = function () {
        this._inlineSVGService.insertEl(this.context, this._el.nativeElement, this.content, this.replaceContents, this.prepend);
    };
    InlineSVGComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: InlineSVGComponent, deps: [{ token: i1.InlineSVGService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    InlineSVGComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.4", type: InlineSVGComponent, isStandalone: true, selector: "inline-svg", inputs: { context: "context", content: "content", replaceContents: "replaceContents", prepend: "prepend" }, usesOnChanges: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
    return InlineSVGComponent;
}());
exports.InlineSVGComponent = InlineSVGComponent;
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: InlineSVGComponent, decorators: [{
            type: core_1.Component,
            args: [{
                    selector: 'inline-svg',
                    template: '',
                    standalone: true,
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.InlineSVGService }, { type: i0.ElementRef }]; }, propDecorators: { context: [{
                type: core_1.Input
            }], content: [{
                type: core_1.Input
            }], replaceContents: [{
                type: core_1.Input
            }], prepend: [{
                type: core_1.Input
            }] } });
