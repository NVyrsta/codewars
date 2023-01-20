declare var ICuboid: {
  new (length: number): ICuboid;
};

interface ICuboid {
  /** Length of the cube */
  length: number;
  /** Surface area of the cube */
  surfaceArea: number;
  /** Volume of the cube */
  volume: number;
}

export class Cube implements ICuboid {
  public length: number;

  constructor(length: number) {
    this.length = length;
  }

  get surfaceArea(): number {
    return 6 * Math.pow(this.length, 2);
  }

  get volume(): number {
    return this.length * this.length * this.length;
  }

  set surfaceArea(sA: number) {
    this.length = Math.pow(sA / 6, 1 / 2);
  }
  
  set volume(v: number) {
    this.length = Math.pow(v, 1 / 3);
  }
}
