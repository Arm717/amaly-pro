import type { ElementType } from "react";


type TextSize = "sm" | "md" | "lg"
type Itext = 'p' | 'span';

type TextProps <T extends ElementType = Itext> = {
  as?:T;
  fontSize?: TextSize;
  value: string | number;
}  & React.ComponentPropsWithoutRef<T>

function Text({value, fontSize='sm', as='p', ...rest }: TextProps) {
  const Component = as;
  return <Component   {...rest} >{value}</Component>;
}

export default Text;
