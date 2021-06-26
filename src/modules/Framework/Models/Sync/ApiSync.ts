import { Sync } from './Sync';
import axios from 'axios';
import { AxiosPromise } from 'axios';
import { HasId } from '../Model';

export class ApiSync<T extends HasId> implements Sync<T> {

  constructor(private url: string) { }

  fetch = (id: number): AxiosPromise => {
    return axios.get(`${this.url}/${id}`);
  }

  save = (data: T): AxiosPromise => {

    const { id } = data;

    if (id) {
      return axios.put(`${this.url}/${id}`, data);
    } else {
      return axios.post(this.url, data);
    }
  }
}