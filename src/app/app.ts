import { NgModule, Component, ElementRef, ComponentFactoryResolver, OnInit, ViewContainerRef, AfterContentInit, Renderer, Input, Compiler, ModuleWithComponentFactories } from '@angular/core';
import { Http, Response, Request } from '@angular/http';



import { HttpFactory } from './get-html';

@Component({
  selector: 'app',
  template: `
  <p>Hello Angular Universal App</p>
  <router-outlet></router-outlet>
  `
})
export class App {

}

@Component({
  selector: 'home',
  template: `
  <p>Home component {{test}}</p>
  <ng2-gethtml>
  <div>12345</div>
  </ng2-gethtml>
  <div id="test"></div>
  `,
  
})
export class Home implements AfterContentInit {
  test: string = '123';
  src: string = '/data.json';

  constructor(private e: ElementRef, private render: Renderer, private http: Http) {
    this.http.get('/data.json').subscribe(data => {
      this.test = data.text();
    });
  }

  ngAfterContentInit() {
    let d = this.render.createElement(this.e.nativeElement, 'script');
    this.render.setElementAttribute(d, 'src', 'http://code.jquery.com/jquery-3.1.1.js');
    let d1 = this.render.createElement(this.e.nativeElement, 'script');
    this.render.createText(d1, '$("#test").html("1234")');
  }
}

@Component({
  selector: 'get-html',
  template: '<h4>Dynamic Components</h4><br>'
})
export class GetHTML implements OnInit {
  
  template: string;

  constructor(private http: Http, private viewContainer: ViewContainerRef, private componentfactoryResolver: ComponentFactoryResolver,private compiler: Compiler) {
    
  }

  ngOnInit() {
    this.http.get('/data.json').subscribe(data => {
      
      this.template = data.text().replace(/\\n/g, '');
      console.log(this.template);
      @Component({template: this.template})
      class TemplateComponent {}

      @NgModule({declarations: [TemplateComponent]})
      class TemplateModule {}

      let module =  this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
      let factory = module.componentFactories.find((comp) =>
          comp.componentType === TemplateComponent
      );
      this.viewContainer.createComponent(factory);
    });
    
  }
}



@Component({
  selector: 'get-html2',
})
export class GetHTML2 implements AfterContentInit {
  
  test: string = '123';
  src: string = '/data.json';

  constructor(private e: ElementRef, private render: Renderer, private http: Http) {
    this.http.get('/data.json').subscribe(data => {
      this.test = data.text();
    });
  }

  ngAfterContentInit() {
    let d = this.render.createElement(this.e.nativeElement, 'script');
    this.render.setElementAttribute(d, 'src', 'http://code.jquery.com/jquery-3.1.1.js');
    let d1 = this.render.createElement(this.e.nativeElement, 'script');
    this.render.createText(d1, '$("#test").html("1234")');
  }
}


