import { AxiosPromise, AxiosResponse } from 'axios';
import { Attributes } from "./Attributes/Attributes";
import { Events } from "./Events/Events";
import { Sync } from "./Sync/Sync";

export interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
   
  constructor(private events: Events, private attributes: Attributes<T>, private sync: Sync<T>) {}

  get = this.attributes.get;
  getAll = this.attributes.getAll;
  on = this.events.on;
  trigger = this.events.trigger;
  
  set(newData: T): void {
    this.attributes.set(newData);
    this.events.trigger('change');
  }

  fetch(): void {
    
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch user without an id');
    }

    this.sync.fetch(id)
    .then((response: AxiosResponse) => {
      this.attributes.set(response.data);
    });
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
    .then((response: AxiosResponse) => {
      this.events.trigger('save');
    })
    .catch(() => {
      this.events.trigger('error');
    })
  }
 }