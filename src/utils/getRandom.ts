export function getRandom(length: number) {
  let str = "";
  for (let i = 0; i < length; i++) {
    str += Math.floor(Math.random() * 10);
  }
  return str;
}
