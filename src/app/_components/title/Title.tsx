import type { JSX } from "react";
import styles from "./title.module.css";

type ITitle = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Colors = "white" | "red" | "blue" | "black";

type TextProps = {
  as: ITitle;
  value: string | number;
  color?: Colors;
  className?: string;
} & JSX.IntrinsicElements[ITitle];

function Title({ as, value, color, className, ...rest }:TextProps) {
    const Component = as;
    return (
        <Component 
        className={`${styles.text} ${className ?? ""}`}
        style={{color}}
        {...rest}
        >
            {value}
        </Component>
    )
}

export default Title;
