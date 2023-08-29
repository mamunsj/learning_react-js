// const BlogsList = (pops) => {
//   const blogs = pops.blogs;
//   const title = pops.title;

// But using destructuring method is easy;

const BlogsList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button onClick={() => handleDelete(blog.id)}>Delete It</button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogsList;
