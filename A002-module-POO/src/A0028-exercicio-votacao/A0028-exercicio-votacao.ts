interface VotationOption {
  numberOfVotes: number;
  option: string;
}

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votatioOption: VotationOption): void {
    this._votationOptions.push(votatioOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);

      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log('####');
      console.log('');
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');
votation1.addVotationOption({ option: 'python', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'java', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'Javascript', numberOfVotes: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);
votation1.vote(2);
votation1.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

const votation2 = new Votation('Qual sua cor favorita?');
votation2.addVotationOption({ option: 'Vermelho', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Rosa', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Azul', numberOfVotes: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);
votation1.vote(2);
votation1.vote(2);

const votationApp1 = new VotationApp();
votationApp1.addVotation(votation2);

votationApp1.showVotations();
