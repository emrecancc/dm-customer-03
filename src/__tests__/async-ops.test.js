const { batchProcess } = require('../src/batchProcess');

describe('batch processing', () => {
  test('processes all items', async () => {
    const items = Array.from({ length: 10 }, (_, i) => i + 1);
    const promises = items.map(item => batchProcess(item));
    const results = await Promise.all(promises);
    expect(results).toHaveLength(10);
  });
});