import { PostType } from "../../types/collection";

const Post = ({ post }: { post: PostType }) => {
  return (
    <div
      style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      <h3>{post.title}</h3>
      <h5>{post.body}</h5>
    </div>
  );
};

export default Post;
