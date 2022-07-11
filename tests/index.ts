import { expect } from 'chai';
import { test } from '../src/index'

describe('make simple test', () => {
 it('test function', () => {
   const data = test()
   expect(data).to.equals('hello test');
 })
})