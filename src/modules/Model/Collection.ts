import axios, { AxiosResponse } from 'axios';
import { Events } from "./Events/Events";
import { ModelEvents } from "./Events/ModelEvents";

export class Collection <T, K> {
  models: T[] = [];
  events: Events = new ModelEvents();

  constructor(
    private url: string,
    private deserialize: (json: K) => T
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
  
  fetch(): void {
    axios.get(this.url)
    .then((response: AxiosResponse): void => {
      response.data.forEach((model: K) => {
        this.models.push(this.deserialize(model));
      });
    });

    this.trigger('change');
  }
}