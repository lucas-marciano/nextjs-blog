import fetch from 'node-fetch'

const API_URL = "https://jsonplaceholder.typicode.com"

export async function getPostIdsFromServer() {
    const res = await fetch(`${API_URL}/posts`)
    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getPostFromServerById(id) {
    const res = await fetch(`${API_URL}/posts/${id}`);
    const post = await res.json();
    return {
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body,
    };
}

export async function getPostFromServer() {
    const res = await fetch(`${API_URL}/posts`)
    const posts = await res.json()

    const response = posts.map((post) => ({
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body,
    }))

    return response
}
