let fact = n => {
  if (n === 0 || n === 1) return 1;
  return n * fact(n - 1);
};

let factIter = n => {
  if (n === 0 || n === 1) return 1;
  let f = 1;

  for (let i = 2; i <= n; i++) {
    f *= i;
  }

  return f;
};

module.exports = { fact, factIter };
