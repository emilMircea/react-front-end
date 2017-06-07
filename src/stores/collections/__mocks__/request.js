const users = [
  1: {name: 'bruno'},
  2: {name: 'dodi' },
];

export default function request(url) {
  return new Promise((resolve, reject) => {
    const userId = parseInt(url.substr('/users/'.length), 10);
      process.nextTick(
        () => users[userId] ? resolve(users[userId]) : reject({
          error: 'User with ' + userId + ' not found!',
        })
      )
  })
}
