/*
  Não podemos forçar um atributo que não será utilizado na classe.
  incluso: type, interface e classe abstrata.
  Precisa-se criar uma interface para EnterPriseCustomer e uma para IndividualCustomer.
*/

import {
  CustomerOrder,
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
} from "./interfaces/customer-protocol";

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  constructor(
    public firstName: string,
    public lastName: string,
    public cpf: string
  ) {}

  getName(): string {
    return this.firstName + " " + this.lastName;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder
{
  constructor(public cnpj: string, public name: string) {}

  getName(): string {
    return this.name;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
