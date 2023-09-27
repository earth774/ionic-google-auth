import { Component } from '@angular/core';
import { GoogleAuth } from '@fmendoza/capacitor-google-auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    GoogleAuth.initialize({
      clientId: '824153985838-7k21i2oliaj1u2b396crr8h6ortef8p4.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
      grantOfflineAccess: true,
    });
  }
}
