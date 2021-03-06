import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  twitterFollowUrl: string = "https://twitter.com/knowmyminister?ref_src=twsrc%5Etfw";
  facebookShareUrl: string = "https://www.facebook.com/knowmyminister";
  whatsAppShareUrl: string = "whatsapp://send?text=http://www.knowmyminister.com";
  constructor() { }

  ngOnInit() {
  }

}
