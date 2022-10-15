/* Composição */
//Associação é a mais fraca
//Agregação é a mediana
//Composição é um objeto possui o outro em sua composição
//Ex: Carro e motor

export class Carro {
  //É instanciado dentro da classe
  private readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  freiar(): void {
    this.motor.freiar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado');
  }

  acelerar(): void {
    console.log('Motor está acelerando');
  }

  freiar(): void {
    console.log('Motor está parando');
  }

  desligar(): void {
    console.log('Motor está desligado');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.freiar();
carro.desligar();
