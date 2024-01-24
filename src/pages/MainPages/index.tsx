import PostList from "../../widgets/PostList/ui";
import styles from "./main.module.scss";
const MainPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MainPage</h1>
      <PostList />
    </div>
  );
};

export default MainPage;
