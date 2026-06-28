import Head from 'next/head';
import Layout from '../components/Layout';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Publications from '../components/Publications';
import Services from '../components/Services';
import Awards from '../components/Awards';
import Hobbies from '../components/Hobbies';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Zhiyu Chen — Senior Applied Scientist</title>
      </Head>
      <About />
      <Education />
      <Experience />
      <Publications />
      <Services />
      <Awards />
      <Hobbies />
    </Layout>
  );
}
