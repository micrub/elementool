import chai from 'chai/register-expect';
require('mocha-sinon');

import utils from '../src/utils';

let {dbg, NS} = utils;

describe('utils test', function() {
  it('should have `dbg` Function property', function() {
    expect(dbg).to.be.an.instanceOf(Function);
  });
  it('should have `NS` property with value `elementool`', function() {
    expect(NS).to.be.eq('elementool');
  });
  xit('TODO : `dbg` should print messages in predefined namespace `DEBUG=elementool`', function() {});
});
