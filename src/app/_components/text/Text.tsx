import type { ElementType } from "react";

type TextSize = "sm" | "base" | "md" | "lg"| 'xlg';
type Itext = "p" | "span";

type TextProps<T extends ElementType = Itext> = {
  as?: T;
  fontSize?: TextSize;
  value: string | number;
} & React.ComponentPropsWithoutRef<T>;

const Text_Size = {
  sm: 'text-sm',
  base: 'text-base',
  md: 'text-2xl',
  lg: 'text-4xl',
  xlg: 'text-7xl'
} as const;

function Text({ value, fontSize = "base", as = "p", ...rest }: TextProps) {
  const Component = as;
  return <Component className={`${Text_Size[fontSize]}`} {...rest}>{value}</Component>;
}

export default Text;
