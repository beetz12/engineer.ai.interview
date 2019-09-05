import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMQItem } from './i-mq-item';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor() { }
  messageChannels = {
    A: new Subject<string>(),
    B: new Subject<string>(),
    C: new Subject<string>(),
  };

  createItemObserver(channelName: string, item: IMQItem): object {
   return {
      next: msg => console.log(`Message: ${msg} received by ${item.name} on channel ${channelName}.`),
      error: err => console.log(`ERROR: ${err}`),
      complete: () => console.log(`All done!`)
    };
  }

  subscribe(channelName: string, item: IMQItem): void {
    if (!this.messageChannels[channelName]) {
      throw new Error(`channel ${channelName} not found`);
    }
    const itemObserver = this.createItemObserver(channelName, item);
    this.messageChannels[channelName].subscribe(itemObserver);
    console.log(`block ${item.name} subscribed to ${channelName}.`);
  }
  sendMessage(channelName: string, item: IMQItem): void {
    if (!this.messageChannels[channelName]) {
      throw new Error(`channel ${channelName} not found`);
    }
    console.log(`block ${item.name} is sending "${item.message}" to channel ${channelName}.`);
    this.messageChannels[channelName].next(item.message);
  }
}

