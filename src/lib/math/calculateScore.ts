import type { Color } from "$lib/interfaces/Color";

export class Score {
  static calculateScore(real: Color, guess: Color){
    let rDifference = Math.abs(real.getR - guess.getR)
    let gDifference = Math.abs(real.getG - guess.getG)
    let bDifference = Math.abs(real.getB - guess.getB)

    let average = (rDifference + gDifference + bDifference) / 3

    let normalized_error = average/255

    let decimal_score = 1-normalized_error

    let percentage = decimal_score*100

    return (percentage.toPrecision(3))
  }
}

