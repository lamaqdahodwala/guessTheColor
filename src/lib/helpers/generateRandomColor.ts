import { Color } from "$lib/interfaces/Color";

export class RandomColorFactory {

  static generateRandomColor(): Color {
    let generateRandomNumber = () => Math.floor(Math.random() * 255)

    let r = generateRandomNumber()
    let g = generateRandomNumber()
    let b = generateRandomNumber()

    return new Color(r, g, b)
  }

}
