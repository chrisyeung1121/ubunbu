function Post({ post }) {
  return (
    <div>
      <p>{post.name}</p>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
  const post = await res.json()

  return { props: { post } }
}

export const getStaticPaths = async () => {

  // Call an external API endpoint to get posts
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json()
  const paths = data.results.map((character) => ({ params: { id: character.id.toString() } }))


  return {
    paths,
    fallback: false
  }
}

export default Post;