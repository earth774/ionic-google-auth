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
      clientId: '824153985838-ng4e3ig620o55bb40j7ak1ooscclhjeb.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
      grantOfflineAccess: true,
    });
  }
}
