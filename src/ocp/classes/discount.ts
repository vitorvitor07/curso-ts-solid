export abstract class Discount {
  abstract calculate(value: number): number;
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount = 0.5;

  calculate(price: number): number {
    return price - price * 0.5;
  }
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 0.5;

  calculate(price: number): number {
    return price - price * 0.1;
  }
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
