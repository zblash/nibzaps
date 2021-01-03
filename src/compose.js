export const compose = function (funcs) {
  funcs = Array.prototype.slice.call(arguments, 0);
  return function (arg) {
    return funcs.reduceRight(function (a, b) {
      a = a === null ? (a = b(arg)) : (a = b(a));
      return a;
    }, null);
  };
};
