function getPaginationRange(current: number, total: number): (number | string)[] {
  const delta = 2; // inchqan cuyc tal nshvaci aranqum
  const range: (number | string)[] = [];

  // ete ejery qicha cuyc tal bolory 
  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      range.push(i);
    }
    return range;
  }

  // arajin ej
  range.push(1);

  // ketery skzbum
  if (current <= 3) {
    for (let i = 2; i <= 4; i++) {
      range.push(i);
    }
    range.push("...");
    range.push(total);
    return range;
  }

  // ketery verjum
  if (current >= total - 2) {
    range.push("...");
    for (let i = total - 3; i < total; i++) {
      range.push(i);
    }
    range.push(total);
    return range;
  }

  //mejtexi hamar
  range.push("...");
  for (let i = current - 1; i <= current + 1; i++) {
    range.push(i);
  }
  range.push("...");
  range.push(total);
  console.log(range);
  

  return range;
}

export default getPaginationRange;