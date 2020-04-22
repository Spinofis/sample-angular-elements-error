import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';

import { AppComponent } from './app.component';

import { LazyElementsModule } from '@angular-extensions/elements';

import { createCustomElement } from '@angular/elements';
import { CaseDataComponent } from './case/case-data/case-data.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    CaseDataComponent
  ],
  imports: [
    BrowserModule,
    LazyElementsModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [CaseDataComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const caseDataElement = createCustomElement(CaseDataComponent, { injector: this.injector });
    customElements.define('app-case-data', caseDataElement);
  }
}
