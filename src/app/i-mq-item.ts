import {Observable} from 'rxjs';

export interface IMQItem {
  name: string;
  message: string;
  subscribe(channelName: string, observer: any): void;
  sendMessage(channelName: string, message: string): void;
  unsubscribe(channelName: string): void;
}
