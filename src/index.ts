import { User } from "./modules/User";

const user = User.buildApiUser({name: 'Stan', age: 18});

user.on('save', () => {
  console.log('User saved:');
  console.log(user.getAll());
});

user.on('change', () => {
  console.log('User changed:');
  console.log(user.getAll());
})

user.save();

console.log(user.get('name'));

user.set({name: 'Stan2'});


