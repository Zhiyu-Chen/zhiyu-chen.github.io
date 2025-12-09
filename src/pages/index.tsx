import Head from 'next/head';
import Layout from '../components/Layout';
import Introduction from '../components/Introduction';
import BlogList from '../components/BlogList';
import { getSortedPostsData, PostData } from '../lib/posts';
import { GetStaticProps } from 'next';

interface HomeProps {
  allPostsData: PostData[];
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>Zhiyu Chen</title>
      </Head>
      <Introduction />
      <BlogList posts={allPostsData} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
