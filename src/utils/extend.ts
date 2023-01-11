/* eslint-disable @typescript-eslint/no-explicit-any */
const extend = (a: { [key: string]: any }, b: { [key: string]: any }) => {
  for (const key in b) {
    if (Object.prototype.hasOwnProperty.call(b, key)) {
      a[key] = b[key];
    }
  }
  return a;
};

export default extend;
