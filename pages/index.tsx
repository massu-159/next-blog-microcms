import type { NextPage } from 'next'
import Link from 'next/link';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { client } from '../libs/client'
import styles from '../styles/Home.module.css'
import { BLOG } from '../typs/BLOG';


// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  return {
    props: {
      blogs: data.contents,
    }
  }
}

const Home: NextPage = ({ blogs }:any):JSX.Element => {
  return (
    <div>
      {blogs && blogs.map((blog: BLOG) => (
        <li key={blog.id}>
          <Link href={`/blogs/${blog.id}`}>
            { blog.title }
          </Link>
        </li>
      ))}
    </div>
  )
}

export default Home
