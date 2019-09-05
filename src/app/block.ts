import {IMQItem} from './i-mq-item';
import { MessageService } from './message.service';

export class Block implements IMQItem {
  name;
  message;
  messageService;

  constructor(name: string, messageService: MessageService) {
    this.name = name;
    this.messageService = messageService;
    console.log('new block created with name: ', this.name);
  }

  subscribe(channelName: string): void {
      this.messageService.subscribe(channelName, this);
  }
  sendMessage(channelName: string, message: string): void {
      this.message = message;
      this.messageService.sendMessage(channelName, this);
  }
  unsubscribe(channelName: string): void {
      this.messageService.unsubscribe(channelName);
  }
}
