import { server } from '../src/server';
import request from 'supertest';

describe('Server', () => {
  let serverInstance;

  beforeAll(() => {
    // Use a dynamic port to avoid address conflicts
    serverInstance = server.listen(0);
  });

  afterAll(() => {
    // Ensure the server is closed after all tests
    serverInstance.close();
  });

  test('GET /', async () => {
    const res = await request(serverInstance).get('/');
    expect(res.status).toBe(200);
  });
});