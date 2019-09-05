import { Component } from '@angular/core';
import {Block} from './block';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-interview';
  messageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }
  ngOnInit() {
    const b1 = new Block('b1', this.messageService);
    const b2 = new Block('b2', this.messageService);
    const b3 = new Block('b3', this.messageService);


    b1.subscribe('A');
    b2.subscribe('B');
    b3.sendMessage('B', 'hello engineer.ai!');



  }
}
