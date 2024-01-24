import styles from "./paragraph.module.scss";
import { FC } from "react";
interface Props {
  text: string;
  maxLength?: number;
  num?: string;
}

const Paragraph: FC<Props> = ({ num, text, maxLength }) => {
  if (!num) {
    const truncatedText = maxLength
      ? text.slice(0, maxLength) + (text.length > maxLength ? "..." : "")
      : text;
    return <p className={styles.para}>{truncatedText}</p>;
  } else {
    return <p className={styles.para}>{`№${text}`}</p>;
  }
};

export default Paragraph;
