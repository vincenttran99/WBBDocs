import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const APPS: { id: string; name: string; description: string }[] = [
  { id: 'app1', name: 'App 1', description: 'Documentation for App 1' },
  { id: 'app2', name: 'App 2', description: 'Documentation for App 2' },
  // Add more apps here as you create them
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.hero}>
        <div className="container">
          <Heading as="h1">{siteConfig.title}</Heading>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
        </div>
      </header>
      <main className="container">
        <div className={styles.appGrid}>
          {APPS.map((app) => (
            <a
              key={app.id}
              href={`/WBBDocs/${app.id}/`}
              className={styles.appCard}
            >
              <Heading as="h2">{app.name}</Heading>
              <p>{app.description}</p>
              <span className={styles.readMore}>Read docs →</span>
            </a>
          ))}
        </div>
      </main>
    </Layout>
  );
}
