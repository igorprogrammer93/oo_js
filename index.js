// Classe base (abstração)
class Veiculo {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    obterDetalhes() {
      return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
  }
  
  // Classe herdeira 1
  class Carro extends Veiculo {
    constructor(marca, modelo, ano, numeroDePortas) {
      super(marca, modelo, ano);
      this.numeroDePortas = numeroDePortas;
    }
  
    obterDetalhes() {
      return `${super.obterDetalhes()}, Portas: ${this.numeroDePortas}`;
    }
  }
  
  // Classe herdeira 2
  class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
      super(marca, modelo, ano);
      this.cilindradas = cilindradas;
    }
  
    obterDetalhes() {
      return `${super.obterDetalhes()}, Cilindradas: ${this.cilindradas}`;
    }
  }
  
  // Criando instâncias
  const carro1 = new Carro('Toyota', 'Corolla', 2020, 4);
  const carro2 = new Carro('Honda', 'Civic', 2019, 4);
  const moto1 = new Moto('Yamaha', 'MT-07', 2021, 689);
  
  // Exibindo detalhes das instâncias
  console.log(carro1.obterDetalhes()); // Toyota Corolla, Ano: 2020, Portas: 4
  console.log(carro2.obterDetalhes()); // Honda Civic, Ano: 2019, Portas: 4
  console.log(moto1.obterDetalhes());  // Yamaha MT-07, Ano: 2021, Cilindradas: 689
  
  
