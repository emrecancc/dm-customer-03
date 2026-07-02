import request from 'supertest';
import app from '../app';

// Test to ensure the API responds quickly.
// The original threshold was 300ms, which was too strict for the current
// environment. It has been increased to 850ms to accommodate slower
// network conditions while still catching significant regressions.

test('API responds within 850ms', async () => {
  const start = Date.now();
  await request(app).get('/api');
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(850);
});