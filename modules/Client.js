class Client {
  constructor(name, cpf) {
    this._name = name;
    this._cpf = cpf;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get cpf() {
    return this._cpf;
  }

  set cpf(value) {
    this._cpf = value;
  }
}

export { Client };
