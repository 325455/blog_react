export function sleep(timer: number) {
  const start = +new Date();
  while (Date.now() - start < timer) {}
}
