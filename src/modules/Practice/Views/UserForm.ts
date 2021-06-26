import { User, UserProps } from "../Models/User";
import { View } from "../../Framework/Views/View";

export class UserForm extends View<User, UserProps> {

  template(): string {
    return `
    <div>
      <div>
        <input placeholder="Enter new name..."/>
        <button class="set-name">Change name</button>
      </div>
      <div>
        <button class="set-random-age">Set random age</button>
      </div>
      <div>
        <button class="save">Save</button>
      </div>
    </div>`
  }

  eventsMap = (): { [key: string]: () => void } => {
    return {
      'click:.set-name': this.onSetNameButtonClick,
      'click:.set-random-age': this.onGetRandomAgeButtonClick,
      'click:.save': this.onSaveButtonClick
    }
  }

  onSetNameButtonClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  }

  onGetRandomAgeButtonClick = (): void => {
    const maxRandomAge = 100;
    this.model.setRandomAge(maxRandomAge);
  }

  onSaveButtonClick = (): void => {
    this.model.save();
  }
}