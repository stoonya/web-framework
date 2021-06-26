import { User, UserProps } from "./modules/Practice/Models/User";
import { Collection } from "./modules/Framework/Models/Collection";
import { UserEdit } from "./modules/Practice/Views/UserEdit";
import { UserList } from "./modules/Practice/Views/UserList";

const userUrl = 'http://localhost:3000/users';

const root = document.getElementById('root');

// ~~~ build and render one user ~~~
//
//
// const user = User.buildApiUser({ name: 'Stan', age: 18 }, userUrl);
// if (root) {
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
//   console.log(userEdit.regions);
// }



//~~~ build and render user collection ~~~
//
//
// const userCollection = User.buildUserCollection(userUrl);
// userCollection.fetch();
//
// userCollection.on('change', (): void => {
//   console.log('change');
//   if (root) {
//     const userList = new UserList(userCollection, root);
//     userList.render();
//   }
// });