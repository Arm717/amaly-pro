import type { JSX } from "react";

type ITitle = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TextProps = {
  as: ITitle;
  value: string | number;
  className?: string;
} & JSX.IntrinsicElements[ITitle];

function Title({ as, value, className, ...rest }: TextProps) {
  const Component = as;

  return (
    <Component className={className} {...rest}>
      {value}
    </Component>
  );
}

export default Title;
