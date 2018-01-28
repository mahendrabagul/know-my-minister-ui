import { Minister } from './minister';

describe('Minister', () => {
  it('should create an instance', () => {
    expect(new Minister()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
    let minister = new Minister({
      title: 'Narendra Damodardas Modi',
      party: 'Bharatiya Janata Party'
    });
    expect(minister.fullName).toEqual('Narendra Damodardas Modi');
    expect(minister.party).toEqual('Bharatiya Janata Party');
  });
});
