/**
 * Calculadora Científica
 *
 * Grupo:
 * - Gabrielly Baungartner
 * - Gabriel Petry
 * - Rafael Gomes
 * - Kamilly Freitas
 */

const CalculadoraCientifica = {

  /**
   * Soma dois números.
   * @param {number} a - primeiro número.
   * @param {number} b - segundo número.
   * @returns {number} resultado da soma de a e b.
   */
  somar(a, b) {
    return a + b;
  },

  /**
   * Subtrai dois números.
   * @param {number} a - minuendo.
   * @param {number} b - subtraendo.
   * @returns {number} resultado da subtração (a - b).
   */
  subtrair(a, b) {
    return a - b;
  },

  /**
   * Multiplica dois números.
   * @param {number} a - primeiro fator.
   * @param {number} b - segundo fator.
   * @returns {number} resultado da multiplicação de a e b.
   */
  multiplicar(a, b) {
    return a * b;
  },

  /**
   * Divide dois números.
   * @param {number} a - dividendo.
   * @param {number} b - divisor (não pode ser zero).
   * @returns {number} resultado da divisão (a / b).
   * @throws {Error} se b for igual a zero.
   */
  dividir(a, b) {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
  },

  /**
   * Calcula a potência de um número.
   * @param {number} base - base da potência.
   * @param {number} expoente - expoente da potência.
   * @returns {number} resultado de base elevado a expoente.
   */
  potencia(base, expoente) {
    return Math.pow(base, expoente);
  },

  /**
   * Calcula a raiz quadrada de um número.
   * @param {number} a - número não negativo.
   * @returns {number} raiz quadrada de a.
   * @throws {Error} se a for negativo.
   */
  raizQuadrada(a) {
    if (a < 0) {
      throw new Error("Não é possível calcular raiz quadrada de número negativo.");
    }
    return Math.sqrt(a);
  },

  /**
   * Calcula o fatorial de um número inteiro.
   * Decisão de projeto: implementado de forma recursiva por clareza,
   * já que não se espera entradas grandes o suficiente para causar
   * estouro de pilha nesse contexto de uso.
   * @param {number} n - número inteiro não negativo.
   * @returns {number} fatorial de n.
   * @throws {Error} se n for negativo ou não for um número inteiro.
   */
  fatorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
      throw new Error("Fatorial requer um número inteiro não negativo.");
    }
    return n <= 1 ? 1 : n * this.fatorial(n - 1);
  },

  /**
   * Calcula o seno de um ângulo.
   * Decisão não óbvia: o ângulo é recebido em graus (mais natural para o
   * usuário final), mas convertido para radianos antes de usar Math.sin,
   * pois as funções trigonométricas nativas do JavaScript trabalham em radianos.
   * @param {number} graus - ângulo em graus.
   * @returns {number} seno do ângulo informado.
   */
  seno(graus) {
    return Math.sin(this._paraRadianos(graus));
  },

  /**
   * Calcula o cosseno de um ângulo.
   * Mesma lógica de conversão graus -> radianos aplicada em seno().
   * @param {number} graus - ângulo em graus.
   * @returns {number} cosseno do ângulo informado.
   */
  cosseno(graus) {
    return Math.cos(this._paraRadianos(graus));
  },

  /**
   * Calcula a tangente de um ângulo.
   * Caso de borda conhecido (não tratado): ângulos próximos a 90°, 270° etc.
   * retornam valores extremamente grandes devido à imprecisão de ponto
   * flutuante, já que a tangente tende ao infinito nesses pontos.
   * @param {number} graus - ângulo em graus.
   * @returns {number} tangente do ângulo informado.
   */
  tangente(graus) {
    return Math.tan(this._paraRadianos(graus));
  },

  /**
   * Calcula o logaritmo de um número em uma base qualquer.
   * @param {number} a - número maior que zero.
   * @param {number} [base=10] - base do logaritmo.
   * @returns {number} logaritmo de a na base informada.
   * @throws {Error} se a for menor ou igual a zero.
   */
  logaritmo(a, base = 10) {
    if (a <= 0) {
      throw new Error("Logaritmo requer um número maior que zero.");
    }
    return Math.log(a) / Math.log(base);
  },

  /**
   * Calcula o logaritmo natural (base e) de um número.
   * @param {number} a - número maior que zero.
   * @returns {number} logaritmo natural de a.
   * @throws {Error} se a for menor ou igual a zero.
   */
  logaritmoNatural(a) {
    if (a <= 0) {
      throw new Error("Logaritmo natural requer um número maior que zero.");
    }
    return Math.log(a);
  },

  /**
   * Calcula uma porcentagem de um valor.
   * @param {number} valor - valor base.
   * @param {number} percentual - percentual a ser aplicado (ex.: 10 para 10%).
   * @returns {number} resultado do percentual aplicado sobre o valor.
   */
  porcentagem(valor, percentual) {
    return (valor * percentual) / 100;
  },

  /**
   * Converte um ângulo de graus para radianos.
   * Função interna (não exposta na interface do usuário), usada como
   * base para todas as funções trigonométricas.
   * @param {number} graus - ângulo em graus.
   * @returns {number} ângulo equivalente em radianos.
   */
  _paraRadianos(graus) {
    return (graus * Math.PI) / 180;
  },
};
