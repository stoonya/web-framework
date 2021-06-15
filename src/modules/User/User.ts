import { ModelAttributes } from "../Model/Attributes/ModelAttributes";
import { Collection } from "../Model/Collection";
import { ModelEvents } from "../Model/Events/ModelEvents";
import { Model } from "../Model/Model";
import { ApiSync } from "../Model/Sync/ApiSync";

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
    return new Collection<User, UserProps> (
      userUrl,
      (props: UserProps) => {
        return User.buildApiUser(props, userUrl) });
  }
}