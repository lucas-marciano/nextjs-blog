import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function BodyPost() {
  return (
    <Layout>
      <Head>
        <title>Name Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
