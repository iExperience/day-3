import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';

/**
 * Generated class for the CharityProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-charity-profile',
  templateUrl: 'charity-profile.html',
})
export class CharityProfilePage {

  public charity: Charity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charity = this.navParams.get("charity");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityProfilePage');
  }

}
