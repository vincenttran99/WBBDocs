import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const APPS: { id: string; name: string; description: string }[] = [
  { id: 'focus-timer', name: 'Focus Timer Desk Clock', description: 'Support, Privacy Policy & Terms of Use' },
  { id: 'noise-complaint', name: 'Noise Complaint: dB Meter Log', description: 'Support, Privacy Policy & Terms of Use' },
  { id: 'psychic-ai', name: 'Psychic AI', description: 'Support & Privacy Policy' },
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
