import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Janford';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}

export default function HeroSection({ name, role }) {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight">{name}</h1>
      <p className="mt-4 text-lg text-gray-600">{role}</p>
    </section>
  );
}

export default function AboutSection({ summary, interests }) {
  return (
    <section className="max-w-3xl mx-auto py-16">
      <h2 className="text-2xl font-semibold mb-6">About Me</h2>

      <div className="space-y-4 text-gray-700">
        {summary.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-medium mb-2">Interests</h3>
        <ul className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <li
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 rounded-full"
            >
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ProjectsSection({ projects }) {
  return (
    <section className="max-w-4xl mx-auto py-16">
      <h2 className="text-2xl font-semibold mb-8">Projects & Ideas</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-sm transition"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">{project.title}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                {project.status}
              </span>
            </div>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

