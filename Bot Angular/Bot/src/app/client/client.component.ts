import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  isChatboxOpen: boolean = false;
constructor(private route: Router){}
  openChatbox() {
    this.isChatboxOpen = true;
  }

  OpenChat(){
    console.log("inside");
    this.route.navigate(['/chatbot']);

  }
}
