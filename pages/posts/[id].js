import Head from 'next/head'
import Layout from '../../components/layout'
import { getPostFromServerById, getPostIdsFromServer } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.scss'

export default function Post({ post }) {
    return (
        <Layout>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{post.title}</h1>
                <p>
                    {post.body}
                </p>
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const response = getPostIdsFromServer()
    return response
}

export async function getStaticProps({ params }) {
    const post = await getPostFromServerById(params.id)
    return {
        props: {
            post
        }
    }
}
