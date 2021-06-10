import { Events, CallBack } from './Events';

export class ModelEvents implements Events {

  events: { [key: string]: CallBack[] } = {}

  on = (eventName: string, callback: CallBack): void => {
    
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger = (eventName: string): void => {

    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    })
  }
}