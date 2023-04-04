import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/backgroundsize/classesdoc';
import { ResponsiveDoc } from '../../components/doc/backgroundsize/responsivedoc';
import { AutoDoc } from '../../components/doc/backgroundsize/autodoc';
import { CoverDoc } from '../../components/doc/backgroundsize/coverdoc';
import { ContainDoc } from '../../components/doc/backgroundsize/containdoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'auto',
            label: 'Auto',
            component: AutoDoc
        },
        {
            id: 'cover',
            label: 'Cover',
            component: CoverDoc
        },
        {
            id: 'contain',
            label: 'Contain',
            component: ContainDoc
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Background Size - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Background Size defines the size of a background image." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Background Size</h1>
                        <p>Defines the size of a background image.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
