class OldCalculator {
  operations(term1, term2, operation) {
    switch (operation) {
      case 'add':
        return term1 + term2
      case 'sub':
        return term1 - term2
      default:
        return Nan
    }
  }
}
class NewCalculator {
  add(term1, term2) {
    return term1 + term2
  }
  sub(term1, term2) {
    return term1 - term2
  }
}

class CalculatorAdapter {
  constructor() {
    this.calc = new NewCalculator();
  }
  operations(term1, term2, operation) {
    switch (operation) {
      case 'add':
        return this.calc.add(term1, term2)
      case 'sub':
        return this.calc.sub(term1, term2)
      default:
        return Nan
    }
  }
}
const oldCalc = new OldCalculator();
console.log(oldCalc.operations(1, 2, 'add'));

const newCalc = new NewCalculator();

console.log(newCalc.add(2, 4));

const adapterCalculator = new CalculatorAdapter();

console.log(adapterCalculator.operations(24, 30, 'add'))