export function sleep(msec: number): Promise<void> {
  return new Promise((res) => setTimeout(res, msec));
}
