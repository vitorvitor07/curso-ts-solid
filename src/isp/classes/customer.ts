/*
  Não podemos forçar um atributo que não será utilizado na classe.
  incluso: type, interface e classe abstrata.
  Precisa-se criar uma interface para InterPriseCustomer e uma para IndividualCustomer.
*/

import { CustomerProtocol } from "./interfaces/customer-protocol";

export class IndividualCustomer implements CustomerProtocol {
  cnpj = "";
  constructor(
    public firstName: string,
    public lastName: string,
    public cpf: string
  ) {}
}

export class InterpriseCustomer implements CustomerProtocol {
  cpf = "";
  constructor(
    public firstName: string,
    public lastName: string,
    public cnpj: string
  ) {}
}
