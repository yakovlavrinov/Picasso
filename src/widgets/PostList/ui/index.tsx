import { FC, useState, useEffect } from "react";
import Post from "../../../entities/Post/ui";
import styles from "./postlist.module.scss";
import { api } from "../../../features/posts/api/api";

const PostList: FC = () => {
  const [currentPostStart, setCurrentPostStart] = useState(0);
  const {
    data: posts,
    error,
    isLoading,
  } = api.useGetPostsQuery({ limit: 30, start: currentPostStart });
  const [isMyFetching, setIsFetchingDown] = useState(false);
  const [isMyFetchingUp, setIsMyFetchingUp] = useState(false);
  useEffect(() => {
    if (isMyFetching) {
      setCurrentPostStart((prev) => {
        return prev < 93 ? prev + 5 : prev;
      });
      setIsFetchingDown(false);
    }
  }, [isMyFetching]);
  useEffect(() => {
    if (isMyFetchingUp) {
      setCurrentPostStart((prev) => {
        return prev > 0 ? prev - 5 : prev;
      });
      setIsMyFetchingUp(false);
    }
  }, [isMyFetchingUp]);
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const scrollHandler = (e: Event): void => {
    const targetElement = (e.target as Document)?.documentElement;

    if (targetElement && targetElement.scrollTop < 50) {
      setIsMyFetchingUp(true);
    }

    if (
      targetElement &&
      targetElement.scrollHeight -
        targetElement.scrollTop -
        window.innerHeight <
        50
    ) {
      setIsFetchingDown(true);
      window.scrollTo(0, targetElement.scrollHeight + targetElement.scrollTop);
    }
  };

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка при загрузке: {error.toString()}</div>;
  }

  return (
    <div className={styles.container}>
      {posts?.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
};

export default PostList;
