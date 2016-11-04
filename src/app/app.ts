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

