import { Component } from '@angular/core';

@Component({
  selector: 'pm-root', // product management root Component
  template: `
    <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
    `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
