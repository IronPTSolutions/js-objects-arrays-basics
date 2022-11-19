console.log('Main JS loaded');

const user = {
  name: 'Carlos',
  sureName: 'del Prado',
  age: 32,
  isDeveloper: true,
  skills: [
    'js',
    'css'
  ],
  address: {
    name: 'C/ Falsa 123',
    zipcode: 12345
  }
}

user.name = 'Julio';
if (!user.legs) {
  user.legs = 2
}
delete user.isDeveloper
console.log(user);

const char = user['name'][0]
const skill = user.skills[0]
const property = 'address';
const addressName = user[property]['name'] // user['address']['name']
const addressName2 = user.address.name

for (let prop in user) {
  console.log(`${prop}: ${user[prop]}`)
}

const keys = Object.keys(user);
const values = Object.values(user);
console.log(keys, values);


const users = [
  {
    name: 'Carlos',
    sureName: 'del Prado',
    age: 32,
    isDeveloper: true,
    skills: [
      'js',
      'css'
    ],
    address: {
      name: 'C/ Falsa 123',
      zipcode: 12345
    }
  },
  {
    name: 'Julio',
    sureName: 'García',
    age: 30,
    isDeveloper: true,
    skills: [
      'css'
    ],
    address: {
      name: 'C/ Falsa 123',
      zipcode: 12345
    }
  },
  {
    name: 'María',
    sureName: 'del Prado',
    age: 32,
    isDeveloper: true,
    skills: [
      'js'
    ],
    address: {
      name: 'C/ Falsa 123',
      zipcode: 1234
    }
  },
]

function filterBySkill(users, skill) {
  const filteredUsers = [];
  for (let user of users) {
    if (user.skills.includes(skill)) {
      filteredUsers.push(user);
    }
  }
  return filteredUsers;
}

const jsUsers = filterBySkill(users, 'js');
console.log('js', jsUsers)
const cssUsers = filterBySkill(users, 'css');
console.log('css', cssUsers)

function addSkillByZipcode(users, skill, zipcode) {
  const mutated = [];
  for (let user of users) {
    if (user.address.zipcode === zipcode) {
      user.skills.push(skill);
    }
    mutated.push(user);
  }
  return mutated;
}

const mutatedUsers = addSkillByZipcode(users, 'bash', 1234);
console.log('user', users)
console.log('mutated users', mutatedUsers)
console.log('arrays are equals', mutatedUsers === users)
console.log('users are equals', mutatedUsers[0] === users[0])
