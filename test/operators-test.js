/*global describe, equal, it */

const assert = require('assert')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('operators', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'operators.js'), 'utf-8')
  })

  it('1 === 1', () => {
    assert(equal)
  })

  it('(5 / 2) !== [literally anything else]', () => {
    assert(notEqual)
  })

  it('6 < [a number greater than 6]', () => {
    assert(lessThan)
  })

  it('7 > [a number less than 7]', () => {
    assert(greaterThan)
  })

  it('true || false OR false || true', () => {
    assert(or)
  })

  it('true && true OR true && false', () => {
    assert(and)
  })

  it('!false', () => {
    assert(not)
  })
})
