import { Sync } from './Sync';
import axios from 'axios';
import { AxiosPromise } from 'axios';
import { HasId } from '../Model';

export class ApiSync<T extends HasId> implements Sync<T> {
  
  usersUrl: string;

  constructor (public rootUrl: string) {
    this.usersUrl = `${this.rootUrl}/users`;
  }

  fetch = (id: number): AxiosPromise => {
    return axios.get(`${this.usersUrl}/${id}`);
  }

  save = (data: T): AxiosPromise => {
    
    const { id } = data;

    if (id) {
      return axios.put(`${this.usersUrl}/${id}`, data);
    } else {
      return axios.post(this.usersUrl, data);
    }
  }
}