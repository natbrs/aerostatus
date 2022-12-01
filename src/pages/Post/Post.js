// CSS
import styles from "./Post.module.css";

// hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_container}>
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} />
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
          <select>
            <option selected>{post.role}</option>
          </select>
        </>
      )}
    </div>
  );
};

export default Post;
