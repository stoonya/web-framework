import { User, UserProps } from "../Models/User";
import { View } from "./View";

export class UserDetails extends View<User, UserProps> {

  template(): string {
    return `
    <div>
      <h1>User form</h1>
      <div>User name: ${this.model.get('name')}</div>
      <div>User age: ${this.model.get('age')}</div>
    </div>
    `
  }
}