import { Component } from '@angular/core';
import { GoogleAuth } from '@fmendoza/capacitor-google-auth';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  object:any="";
  constructor() {

  }

  async googleSignIn() {
    const response = await GoogleAuth.signIn();
    this.object= JSON.stringify(response);
  }

}
