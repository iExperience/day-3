import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { CharityListPage } from '../charity-list/charity-list';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public user: User;

  private token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = new User();
  }

  ionViewDidLoad() {
    this.user.firstname = "Miki";
    this.user.lastname = "von Ketelhodt";

    //this.user.email = this.navParams.get("username");
    //this.user.password = this.navParams.get("password");

    this.token = localStorage.getItem("TOKEN"); //this.navParams.get("token");
    console.log("profile token: ", this.token);
  }

  navToCharityList() {
    this.navCtrl.push(CharityListPage);
  }

}
