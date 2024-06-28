import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 ? (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick}></WelcomeMessage>
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
};

export default PostList;

//  fetch('https://dummyjson.com/posts')
// .then(res => res.json())
// .then(data => {
//     const homes = Promise.resolve();
//     homes( data =>
//       {addInitialPosts(data.posts)});
