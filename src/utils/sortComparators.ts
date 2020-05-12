export const compareStringsAsc = (a: string, b: string): number => {
  if (a < b){
    return -1;
  }
  if (a > b){
    return 1;
  }
  return 0;
}

export const compareDatesAsc = (a: Date, b: Date): number => {
  if (a < b){
    return -1;
  }
  if (a > b){
    return 1;
  }
  return 0;
}