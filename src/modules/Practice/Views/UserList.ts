import { User, UserProps } from "../Models/User";
import { CollectionView } from "../../Framework/Views/CollectionView";
import { UserDetails } from "./UserDetails";

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element) {
    const userDetails = new UserDetails(itemParent, model);
    userDetails.render();
  }
}