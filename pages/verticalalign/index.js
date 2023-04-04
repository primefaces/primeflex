import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/verticalalign/classesdoc';
import { ResponsiveDoc } from '../../components/doc/verticalalign/responsivedoc';
import { ExamplesDoc } from '../../components/doc/verticalalign/examples';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'examples',
            label: 'Examples',
            component: ExamplesDoc
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
                <title>Vertical Align - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Vertical Align sets vertical alignment of an inline, inline-block or table-cell box." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Vertical Align</h1>
                        <p>Sets vertical alignment of an inline, inline-block or table-cell box.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
