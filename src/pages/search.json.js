import { getCollection } from 'astro:content';

export async function GET({ site }) {
    const posts = await getCollection('system-logs');
    return new Response(
        JSON.stringify(
            posts.map((post) => ({
                title: post.data.title,
                description: post.data.description,
                slug: post.slug,
                tags: post.data.tags,
                date: post.data.pubDate,
            }))
        ),
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
}
