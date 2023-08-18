import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { FrameworkGuidesDoc } from '../../components/doc/installation/frameworkguides.doc';

const InstallationPage = () => {
    const docs = [
        {
            id: 'moduleloader',
            label: 'Framework Guides',
            component: FrameworkGuidesDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Getting Started - PrimeFlex</title>
                <meta name="description" content="PrimeFlex is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <span>Installation</span>
                        <h1>Getting Started with PrimeFlex</h1>
                        <p>PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.</p>
                        <p>
                            PrimeFlex is available for download at <a href="https://www.npmjs.com/package/primeflex">NPM</a> for usage with a module bundler such as webpack.
                        </p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default InstallationPage;
