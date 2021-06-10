import { ModelAttributes } from "./Attributes/ModelAttributes";
import { ModelEvents } from "./Events/ModelEvents";
import { Model } from "./Model";
import { ApiSync } from "./Sync/ApiSync";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000';

export class User extends Model<UserProps> {

  static buildApiUser(attributes: UserProps) {
    return new User(
      new ModelEvents(), 
      new ModelAttributes<UserProps>(attributes), 
      new ApiSync<UserProps>(rootUrl));
  }
}