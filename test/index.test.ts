import * as index from '../lib/index';

describe('Index', () => {
  test('export Resource class', () => {
    const classes = Object.keys(index);
    expect(classes).toContain('Resource');
  });

  test('export StackManager interface', () => {
    const classes = Object.keys(index);
    expect(classes).toContain('StackManager');
  });
});
