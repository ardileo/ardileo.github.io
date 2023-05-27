const getBreakPoint = (p: string) => {
  const convert = (em: number) => {
    return em / 0.0625;
  };
  switch (p) {
    case "2xl":
      return convert(96);
    case "xl":
      return convert(80);
    case "lg":
      return convert(62);
    case "md":
      return convert(48);
    case "sm":
    case "xs":
    default:
      return convert(30);
  }
};

export default getBreakPoint;
