import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGooglePlus = faGooglePlus;
  faYoutube = faYoutube;
  faInstagram = faInstagram;

  constructor() {}

  ngOnInit(): void {}
}
