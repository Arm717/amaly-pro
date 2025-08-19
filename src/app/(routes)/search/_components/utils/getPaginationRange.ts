function getPaginationRange(current: number, total: number): (number | string)[] {
  const delta = 2; // сколько показывать вокруг текущей
  const range: (number | string)[] = [];

  // если страниц мало — показываем все
  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      range.push(i);
    }
    return range;
  }

  // всегда первая
  range.push(1);

  // блок в начале
  if (current <= 3) {
    for (let i = 2; i <= 4; i++) {
      range.push(i);
    }
    range.push("...");
    range.push(total);
    return range;
  }

  // блок в конце
  if (current >= total - 2) {
    range.push("...");
    for (let i = total - 3; i < total; i++) {
      range.push(i);
    }
    range.push(total);
    return range;
  }

  // середина
  range.push("...");
  for (let i = current - 1; i <= current + 1; i++) {
    range.push(i);
  }
  range.push("...");
  range.push(total);

  return range;
}

export default getPaginationRange;