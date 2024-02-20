import { useEffect, useState } from "react";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";
import Search from "./Search";

const PostList = () => {
  const postList = useLoaderData();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postList);
  }, []);

  const searchTitle = async (title) => {
    console.log("Postsssssssss title ", title);
    const filterPostData = posts.filter((obj) =>
      JSON.stringify(obj).toLowerCase().includes(title.toString().toLowerCase())
    );
    setPosts(filterPostData);
  };

  return (
    <>
      <div className="search-post">
        <Search searchTitle={searchTitle} />
      </div>
      {posts.length === 0 && <WelcomeMessage />}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
