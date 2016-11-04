import { NgModule, ModuleWithProviders } from '@angular/core';
import { Ng2GetHTML } from './component/ng2-gethtml/ng2-gethtml.component';
import { Ng2Script } from './component/ng2-script/ng2-script.component';

export * from './component/ng2-gethtml/ng2-gethtml.component';
export * from './component/ng2-script/ng2-script.component';

@NgModule({
    declarations: [
        Ng2GetHTML,
        Ng2Script
    ],
    exports: [
        Ng2GetHTML,
        Ng2Script
    ],
    providers: [ ]
})
export class SharedModule {
}