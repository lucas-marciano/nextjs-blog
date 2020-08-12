import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getPostFromServer } from '../lib/posts'

export default function Home({ posts }) {
  console.log("posts", posts);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>Um detalhe qualquer</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        <ul className={utilStyles.list}>
          {posts.map(({ id, title  }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
          </li>

          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getPostFromServer()

  return {
    props: {
      posts
    }
  }
}


