import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AUBREY MILES CRUZ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <image src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t1.15752-9/293093556_1268651587242658_8790365090316806294_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHF0kfJnmYfG7cTjEY4Jy9Ol1Vv_FqxCaiXVW_8WrEJqH7B99TL8wqQbydWrPRbskKOfzwnz-3644ei6rPVLd_D&_nc_ohc=tBFYNQikruUAX8yCMZ2&tn=dsxgr-9MrUbz2ECT&_nc_ht=scontent.fcrk4-1.fna&oh=03_AVIblXqEl6RvmarpcfeViOYQropzZgw_2a4QmXd-U4_xQQ&oe=63348192" width="350"/>

        <h1 className={styles.title}>
          Aubrey Miles F. Cruz
        </h1>

        <div className={styles.grid}>
          <p>     I am Aubrey Miles F. Cruz from Queen Victoria Heights, San Agustin Norte, Arayat, Pampanga. I am 20 years old this year but I can&apos;t grasp adulthood quite well yet. I like any seafood, Pangat and Salmon at best and I like drinking coffee without sugar. 
            I am both a traditional and a digital artist and do freelance work out of it. I am in hopes of making a video game out of all my concepts and well beloved characters I&apos;ve made since I was still very young. Speaking of video games, I also like playing games too, I am a long term player of Genshin Impact and Sky at the moment, but I&apos;ve played big games such as Sekiro, The Witcher 3: WIld Hunt, Red Dead Redemption and many many more. I am a huge fan the Monster Hunter franchise and get inspired a lot from almost all the games I play.
          </p>
          <p>
            I am now studying Information technology at UA in hopes of learning more about Game Development but being more focused on Web Development, I am beginning to study game development from Youtube and all sorts of helpful
            sites. 3D Modelling, 2D Modelling, character designs, world building, concept arts and more. But overtime, I am also thinking about making a small career out of my art too.
          </p>
        </div>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
