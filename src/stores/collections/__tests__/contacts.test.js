// jest.mock('../__mocks__/request');

const users = [
  {
	id: 2,
	name: 'mara'
  },
  {
		id: 3,
		name: 'bruno'
	}
]

// The promise that is being tested should be returned.
it('works with async/await', async () => {
  const userName = await users[1].name;
  expect(userName).toEqual('bruno');
});
