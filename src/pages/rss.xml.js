import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('system-logs');
    return rss({
        title: 'Empower Automation | System Logs',
        description: 'Insights and logs from the automation frontier. We build bespoke Google Apps Scripts to streamline your business.',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            // Compute RSS link from post `slug`
            // This example assumes all posts are rendered as `/system-logs/[slug]` routes
            link: `/system-logs/${post.slug}/`,
        })),
        customData: `<language>en-gb</language>`,
    });
}
