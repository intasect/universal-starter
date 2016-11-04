import { Component, AfterViewInit, ContentChildren, QueryList } from '@angular/core';

import { Ng2Script } from '../ng2-script/ng2-script.component';

@Component({
    selector: 'ng2-gethtml',
    entryComponents: [Ng2Script],
    providers: [
    ],
    template: `
        <ng-content></ng-content>
    `
})
export class Ng2GetHTML implements AfterViewInit{
    @ContentChildren(Ng2Script) childrens: QueryList<Ng2Script>;

    constructor() {
    }

    ngAfterViewInit() {
        let result: Promise<boolean> = Promise.resolve(true);
        this.childrens.forEach((children: Ng2Script) => {
            result = result.then(() => {
                return children.load();
            });
        });
    }
}
