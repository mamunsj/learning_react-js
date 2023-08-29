import { useState } from "react";
import BlogsList from "./Blogs";

const Home = () => {
  const [name, setName] = useState("Ujjal");
  const [age, setAge] = useState(24);
  const [blogs, setBlogs] = useState([
    {
      title: "My favourite Websites",
      body: "Lorem ispum.....",
      author: "Mamun Ujjal",
      id: 1,
    },
    {
      title: "My favourite Pet",
      body: "Lorem ispum.....",
      author: "Tareq Monwer",
      id: 2,
    },
    {
      title: "My favourite Game",
      body: "Lorem ispum.....",
      author: "Mamun Ujjal",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
    console.log(newBlog);
  };
  return (
    <div className="home">
      <BlogsList
        blogs={blogs}
        title="All the Blogs Post"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
