import { Role } from './role';

describe('Role', () => {
  it('should create an instance', () => {
    expect(new Role(0, '', '')).toBeTruthy();
  });
});
