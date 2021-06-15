import { Attributes } from "./Attributes";

export class ModelAttributes<T> implements Attributes<T> {

  constructor(private data: T) {}
  
  get = <K extends keyof T>(key:K): T[K] => {
    return this.data[key];
  }

  getAll = (): T => {
    return this.data;
  }

  set = (newData: T): void => {
    Object.assign(this.data, newData);
  }
}