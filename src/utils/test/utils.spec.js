import utils from '../src/utils';

let {dbg} = utils;

describe('utils test', function() {
  it('should have `dbg` Function property', function() {
    expect(dbg).to.be.an.instanceOf(Function);
  });
});
