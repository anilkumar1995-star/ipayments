/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: 'Easy to Use',
        imageUrl: 'img/dash1.svg',
        description: (
            <>
                IPAYMENT means Secure electronic payment processing system which is easy to use. We provide API solutions that are easy to integrate and developer friendly. It is simple, reliable, and understandable.
            </>
        ),
    },
    {
        title: 'Focus on What Matters',
        imageUrl: 'img/dash2.svg',
        description: (
            <>
                We always focus on an accurate workflow API. We provide fast and robust solutions for payments. We do regular checks and improvements to get the best results.
            </>
        ),
    },
    {
        title: 'Powered by Latest Technology',
        imageUrl: 'img/dash3.svg',
        description: (
            <>
                We have concerns about customer security. There are a lot of technologies available today. However, we have selected the newest, fastest, and safest technology to meet the needs of both our clients and ourselves.
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`${siteConfig.title} API Docs`}
            description="Description will go into a meta tag in <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/v1')}>
                            View API Docs &gt;
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map(({ title, imageUrl, description }) => (
                                    <Feature
                                        key={title}
                                        title={title}
                                        imageUrl={imageUrl}
                                        description={description}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}
