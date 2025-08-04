import type { ElementType } from "react";

type TextSize = "sm" | "base" | "md" | "lg" | "xlg";
type Itext = "p" | "span";

export type TextProps<T extends ElementType = Itext> = {
  as?: T;
  fontSize?: TextSize;
  value: string | number;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

const Text_Size = {
  sm: "text-sm",
  base: "text-base",
  md: "text-2xl",
  lg: "text-4xl",
  xlg: "text-7xl",
} as const;

function Text({ value, fontSize = "base", as = "p", className,...rest }: TextProps) {
  const Component = as;
  return (
    <Component className={`${Text_Size[fontSize]} ${className}`} {...rest}>
      {value}
    </Component>
  );
}

export default Text;
