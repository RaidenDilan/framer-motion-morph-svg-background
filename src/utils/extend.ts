const extend = (
  a: { [key: string]: unknown },
  b: { [key: string]: unknown },
): { [key: string]: unknown } => {
  for (const key in b) {
    if (Object.prototype.hasOwnProperty.call(b, key)) {
      a[key] = b[key];
    }
  }
  return a;
};

export default extend;
