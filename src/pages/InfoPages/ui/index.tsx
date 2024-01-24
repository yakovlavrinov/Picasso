import Heading from "../../../shared/ui/Heading";
import { api } from "../../../features/posts/api/api";
import Paragraph from "../../../shared/ui/Paragraph";
import Button from "../../../shared/ui/Button";
import styles from "./info.module.scss";
import { Link, useParams } from "react-router-dom";

const InfoPages = () => {
  const { id } = useParams();
  const postId = id ? parseInt(id, 10) : undefined;

  if (postId === undefined) {
    return <div>Неверный идентификатор поста</div>;
  }

  const { data: post, error, isLoading } = api.useGetPostByIdQuery(postId);

  if (isLoading) {
    return <div className={styles.container}>Загрузка...</div>;
  }

  if (error) {
    return (
      <div className={styles.container}>
        Ошибка при загрузке поста: {error.toString()}
      </div>
    );
  }

  if (!post) {
    return <div className={styles.container}>Данные недоступны</div>;
  }

  return (
    <div className={styles.container}>
      <h1>InfoPages</h1>
      <Heading title={post.title} />
      <Paragraph text={post.body} maxLength={1000} />
      <Link to="/">
        <Button label="Назад" />
      </Link>
    </div>
  );
};

export default InfoPages;
