import { Component, ElementRef, AfterContentInit, Renderer, Input, ReflectiveInjector } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { BrowserXhr, XSRFStrategy, XHRBackend, RequestOptions, BaseRequestOptions, ResponseOptions, BaseResponseOptions } from '@angular/http';

function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
  return new Http(xhrBackend, requestOptions);
}
class FakeXSRFStrategy implements XSRFStrategy {
  public configureRequest(req: Request) { /* */ }
}

export class HttpFactory {
    static getHttp(): Http {
        let injector = ReflectiveInjector.resolveAndCreate([
            { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
            BrowserXhr,
            { provide: RequestOptions, useClass: BaseRequestOptions },
            { provide: ResponseOptions, useClass: BaseResponseOptions },
            XHRBackend,
            { provide: XSRFStrategy, useClass: FakeXSRFStrategy }
        ]);
        let http: Http = injector.get(Http);
        return http;
    }    
}