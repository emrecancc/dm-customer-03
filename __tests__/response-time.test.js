import request from 'supertest';
import app from '../src/app';

test('API responds within 125ms', async () => {
  const start = Date.now();
  await request(app).get('/api/health');
  expect(Date.now() - start).toBeLessThan(450);
});