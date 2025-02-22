// Q1 ) star pyramid pattern
// *
// **
// ***
// ****
// *****

function starPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
console.log(starPattern(5));
