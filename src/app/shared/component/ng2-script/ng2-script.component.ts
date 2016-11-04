import { Component, Injectable, Input, ElementRef, Renderer } from '@angular/core';

@Injectable()
@Component({
    selector: 'ng2-script',
    providers: [
    ],
    template: '<div style="display:none"><ng-content></ng-content></div>'
})
export class Ng2Script{
    @Input('src') src: string;

    constructor(private element: ElementRef, private renderer: Renderer) {  
    }

    public load(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (this.element.nativeElement.childNodes[0]) {
                let contentSource = this.element.nativeElement.childNodes[0].innerText;
                this.element.nativeElement.innerText = '';
                if (this.src !== undefined && contentSource === '') {
                    let scriptNode = this.renderer.createElement(this.element.nativeElement, 'script');
                    scriptNode.setAttribute('type', 'text/javascript');
                    scriptNode.setAttribute('src', this.src);
                    scriptNode.onload = function () {
                        scriptNode.onload = null;
                        resolve(true);
                    };
                } else {
                    eval(contentSource);
                    resolve(true);
                }
            } else {
                reject();
            }
        });
    }
}
