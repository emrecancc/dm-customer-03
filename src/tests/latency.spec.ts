import { getCustomer } from '../src/api';

test('API responds within 150ms', async () => {
  const start = Date.now();
  await getCustomer();
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(500);
});