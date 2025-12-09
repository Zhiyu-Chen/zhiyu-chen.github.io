import Head from 'next/head';
import Layout from '../../components/Layout';
import { getAllPostSlugs, getPostData, PostData } from '../../lib/posts';
import { GetStaticProps, GetStaticPaths } from 'next';
import styles from '../../styles/BlogPost.module.css';

interface PostProps {
    postData: PostData;
}

export default function Post({ postData }: PostProps) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article className={styles.article}>
                <h1 className={styles.title}>{postData.title}</h1>
                <div className={styles.date}>
                    {new Date(postData.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </div>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostSlugs();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.slug as string);
    return {
        props: {
            postData,
        },
    };
};
