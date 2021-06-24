import { User, UserProps } from "./modules/Models/User";
import { Collection } from "./modules/Models/Collection";
import { UserEdit } from "./modules/Views/UserEdit";

const userUrl = 'http://localhost:3000/users';

const user = User.buildApiUser({ name: 'Stan', age: 18 }, userUrl);

// user.on('save', () => {
//   console.log('User saved:');
//   console.log(user.getAll());
// });

// user.on('change', () => {
//   console.log('User changed:');
//   console.log(user.getAll());
// })

// user.save();

// console.log(user.get('name'));

// user.set({name: 'Stan3'});

// const userCollection = User.buildUserCollection(userUrl);

// userCollection.on('change', (): void => {
//   console.log(userCollection.models);
// });

// userCollection.fetch();


const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit.regions);
}



