import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Aubrey Miles F. Cruz from Queen Victoria Heights, San Agustin Norte, Arayat, Pampanga. I am 20 years old this year but I can't grasp adulthood quite well yet. I like any seafood, Pangat and Salmon at best and I like drinking coffee without sugar. I am both a traditional and a digital artist and do freelance work out of it. I am in hopes of making a video game out of all my concepts and well beloved characters I've made since I was still very young. Speaking of video games, I also like playing games too, I am a long term player of Genshin Impact and Sky at the moment, but I've played big games such as Sekiro, The Witcher 3: WIld Hunt, Red Dead Redemption and many many more. I am a huge fan the Monster Hunter franchise and get inspired a lot from almost all the games I play.</p>
        <p>
          I am now studying Information technology at UA in hopes of learning more about Game Development but being more focused on Web Development, I am beginning to study game development from Youtube and all sorts of helpful sites. 3D Modelling, 2D Modelling, character designs, world building, concept arts and more. But overtime, I am also thinking about making a small career out of my art too.
        </p>
      </section>
    </Layout>
  );
}
