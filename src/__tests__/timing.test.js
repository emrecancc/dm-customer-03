import { fetchData } from '../api';

test('API responds within 50ms', async () => {
  const start = Date.now();
  await fetchData();
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(300);
});