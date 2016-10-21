import { Component, ElementRef, AfterContentInit, Renderer } from '@angular/core';
import { Http, Response } from '@angular/http';

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
  template: 'Home component {{test}} <div id="test"></div>'
})
export class Home implements AfterContentInit{
  test: string = '123';
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
