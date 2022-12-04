import Image from "next/image";
import { client } from "../../libs/client";
import { BLOG } from "../../typs/BLOG";

// SSG
export const getStaticProps = async (context: { params: { id: string; }; }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });
  console.log(data);
  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content: { id: string; })=>`/blogs/${content.id}`)
  return {
    paths,
    fallback: false,
  }
}

export const BlogId = ({ blog }: { blog: BLOG }) => {
  return (
    <main>
      <Image src={ blog.image.url } alt="" width={400}/>
      <h1>{ blog.title }</h1>
      <p>{ blog.description }</p>
      <p>{ blog.publishedAt }</p>
      <p>{blog.categories.map((category) => (
        <li key={category.id}>{ category.name }</li>
      )) }</p>
      <div>{ blog.body }</div>
    </main>
  )
}

export default BlogId