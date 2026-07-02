// src/__tests__/async-ops.test.js
const asyncOps = require('../async-ops');

describe('batch processing', () => {
  it('processes all items', async () => {
    const promises = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => asyncOps.process(i));
    const results = await Promise.all(promises);
    expect(results).toHaveLength(10);
  });
});