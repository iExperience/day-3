import { Component } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { NavController, NavParams } from "ionic-angular";
import { ProfilePage } from "../profile/profile";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public username: string;
  public password: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  login() {
    this.http
      .post("http://localhost:3000/login", {
        email: this.username,
        password: this.password
      })
      .subscribe(
        result => {
          console.log(result);

          // Our username and password (on this) should have data from the user
          this.navCtrl.push(ProfilePage, {
            username: this.username,
            password: this.password
          });
        },

        error => {
          console.log(error);
        }
      );
  }
}
