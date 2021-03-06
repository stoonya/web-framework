import { ModelAttributes } from "../../Framework/Models/Attributes/ModelAttributes";
import { Collection } from "../../Framework/Models/Collection";
import { ModelEvents } from "../../Framework/Models/Events/ModelEvents";
import { Model } from "../../Framework/Models/Model";
import { ApiSync } from "../../Framework/Models/Sync/ApiSync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {

  static buildApiUser(attributes: UserProps, rootUrl: string) {
    return new User(
      new ModelEvents(),
      new ModelAttributes<UserProps>(attributes),
      new ApiSync<UserProps>(rootUrl));
  }

  static buildUserCollection(userUrl: string): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      userUrl,
      (props: UserProps) => {
        return User.buildApiUser(props, userUrl)
      });
  }

  setRandomAge = (maxAge: number): void => {
    const age = Math.round(Math.random() * maxAge)
    this.set({ age });
  }
}