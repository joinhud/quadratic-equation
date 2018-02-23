module.exports = function solveEquation(equation) {
  let matches = equation.match(/^(-?\d+) \* x\^2 ([-\+]{1}) (\d+) \* x ([-\+]{1}) (\d+)$/);
  let a = +matches[1];
  let b = +(matches[2] + matches[3]);
  let c = +(matches[4] + matches[5]);
  let discriminant = (b * b) - 4 * (a * c);
  let sqrtDiscriminant = Math.sqrt(discriminant);
  let x1 = Math.round((- b - sqrtDiscriminant) / (2 * a));
  let x2 = Math.round((- b + sqrtDiscriminant) / (2 * a));

  return a < 0 ? [x2, x1] : [x1, x2];
}
