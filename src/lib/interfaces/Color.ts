
export class Color {
  r: number
  g: number
  b: number
  constructor(r: number, g: number, b: number){
    this.r = r
    this.g = g
    this.b = b
  }


  getRGBAsList(): number[]{
    return [
      this.r,
      this.g,
      this.b
    ]
  }

  public get getR() : number {
    return this.r
  }

  public get getG() : number {
    return this.g
  }

  public get getB() : number {
    return this.b
  }

  generateCssBgClassname(): string {
    return `background-color: rgb(${this.r}, ${this.g}, ${this.b})`
  }
}

