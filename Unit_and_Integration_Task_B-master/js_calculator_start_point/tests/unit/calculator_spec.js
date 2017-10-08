var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add number to previous total', function() {
    calculator.previousTotal = 1;
    calculator.add(10);

    const expected = 11;
    const result = calculator.runningTotal;
    assert.equal(expected, result);
  })

  it('can subtract number from previous total', function() {
    calculator.previousTotal = 1;
    calculator.subtract(10);

    const expected = -9;
    const result = calculator.runningTotal;
    assert.equal(expected, result);
  })
  
  it('can multiply number by previous total', function() {
    calculator.previousTotal = 2;
    calculator.multiply(2);

    const expected = 4;
    const result = calculator.runningTotal;
    assert.equal(expected,result);
  })

  it('can divide previous total by a number', function() {
    calculator.previousTotal = 100;
    calculator.divide(2);

    const expected = 50;
    const result = calculator.runningTotal;
    assert.equal(expected, result);
  })

  it('can click on number and display it', function() {
    calculator.numberClick(1);
    
    const expected = 1
    const result = calculator.runningTotal;
    assert.equal(expected, result);
  })

  it('can calculate previous operation on operatorClick', function() {
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick("/");
    
    const expected = 4;
    const result = calculator.runningTotal;
    assert.equal(expected, result);
  })

  it('can clear input on clearClick', function() {
    calculator.numberClick(10);
    calculator.operatorClick('+');
    calculator.numberClick(10);
    calculator.clearClick();

    const expected = 0;
    const result = calculator.runningTotal;
    assert.equal(expected, result);
  })

  it('can multiply 3 by 5 and get 15', function() {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');

    const expected = 15;
    const result = calculator.runningTotal;
    assert.equal(expected, result);
  })

  it('can divide 21 by 7 and get 3', function() {
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');

    const expected = 3;
    const result = calculator.runningTotal;
    assert.equal(expected, result);
  })

  it('can add 1 to 4 and get 5', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');

    const expected = 5;
    const result = calculator.runningTotal;
    assert.equal(expected, result);
  })

  it('can subtract 4 from 7 and get 3', function() {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');

    const expected = 3;
    const result = calculator.runningTotal;
    assert.equal(expected, result);
  })

  it('can concatenate multiple number button clicks', function() {
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.numberClick(1);
    calculator.numberClick(7);

    const expected = 2017;
    const result = calculator.runningTotal;
    assert.equal(expected, result);
  })

  it('can chain multiple operations together', function() {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');

    const expected = 14;
    const result = calculator.runningTotal;
    assert.equal(expected, result);
  })

  it('can clear the running total without affecting the calculation', function() {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick('=');

    const expected = 7;
    const result = calculator.runningTotal;
    assert.equal(expected, result);
  })


});
