const { User } = require('../src/models');
const sequelize = require('../src/database');

describe('User model', () => {
  // Ensure the User table is clean before each test
  beforeEach(() => User.destroy({ where: {}, truncate: true }));

  it('creates a user', async () => {
    const user = await User.create({ name: 'John' });
    expect(user).toBeDefined();
  });

  it('starts with empty database', async () => {
    const count = await User.count();
    expect(count).toBe(0);
  });
});
