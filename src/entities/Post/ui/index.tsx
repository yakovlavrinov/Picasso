import { FC } from "react";
import styles from "./post.module.scss";
import Heading from "../../../shared/ui/Heading";
import Paragraph from "../../../shared/ui/Paragraph";
import Button from "../../../shared/ui/Button";
import { PostType } from "../../../features/posts/api/type";
import { Link } from "react-router-dom";

interface PostProps {
  data: PostType;
}
const Post: FC<PostProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Paragraph text={data.id} num="true" />
      <Heading title={data.title} />
      <Paragraph text={data.body} maxLength={30} />
      <Link to={`/info/${data.id}`}>
        <Button label="Подробно" />
      </Link>
    </div>
  );
};

export default Post;
