import { Component } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { NavController, NavParams } from "ionic-angular";
import { ProfilePage } from "../profile/profile";
import { AuthService } from "../../auth.service";

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
    public authService: AuthService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  login() {
    let callback = (err) => {
      if (err) {
        // TODO: display error
        return;
      }

      this.navCtrl.push(ProfilePage);
    }

    this.authService.login(this.username, this.password, callback);
  }
}
