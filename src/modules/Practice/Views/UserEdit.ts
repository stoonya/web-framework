import { User, UserProps } from "../Models/User";
import { UserDetails } from "./UserDetails";
import { UserForm } from "./UserForm";
import { View } from "../../Framework/Views/View";

export class UserEdit extends View<User, UserProps> {

  template(): string {
    return `
    <div>
      <div class="user-details"></div>
      <div class="user-form"></div>
    </div>
    `
  }

  regionsMap(): { [key: string]: string } {
    return {
      userDetails: '.user-details',
      userForm: '.user-form'
    };
  }

  onRender = (): void => {
    new UserDetails(this.regions.userDetails, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }
}