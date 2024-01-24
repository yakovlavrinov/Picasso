import { FC } from "react";
import styles from "./heading.module.scss";
interface HeadingProps {
  title: string;
}

const Heading: FC<HeadingProps> = ({ title }) => {
  const firstWord = title.toUpperCase().split(" ")[0];
  return <h1 className={styles.heading}>{firstWord}</h1>;
};

export default Heading;
