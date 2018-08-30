'use strict'

let symmetricMatrix: number[][] = [
  [1, 0, 1],
  [0, 2, 2],
  [2, 2, 5]
]

let sum: number = 0;

for ( let i: number = 0; i < symmetricMatrix.length; i++ ) {
  for ( let j: number = 0; j < symmetricMatrix.length; j++ ) {
    sum += symmetricMatrix[i][j]
    console.log(symmetricMatrix[i][j], sum)
  }
}

console.log(sum);