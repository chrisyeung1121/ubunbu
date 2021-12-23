function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}

    </ul >
  );
}

// export const getStaticPaths = async () => {


//   return {
//     paths: [],
//     fallback: false
//   }
// }

export const getStaticProps = async () => {

  const res = await fetch('https://0686w6jz49.execute-api.ap-southeast-1.amazonaws.com/posts')
  const posts = await res.json()

  return {
    props: { posts }
  }
}

export default Blog;
