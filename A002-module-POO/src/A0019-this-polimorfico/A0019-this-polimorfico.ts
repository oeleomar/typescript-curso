export class Calculadora {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  div(n: number): this {
    this.number /= n;
    return this;
  }

  mult(n: number): this {
    this.number *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    //This como tipo
    this.number **= n;
    return this;
  }
}

const calculadora = new SubCalculadora(10);
calculadora.add(10).mult(2).div(10); //Chamada em cadeia
console.log(calculadora);
