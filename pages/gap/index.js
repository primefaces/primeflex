import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/gap/classesdoc';
import { ResponsiveDoc } from '../../components/doc/gap/responsivedoc';
import { ExamplesDoc } from '../../components/doc/gap/examples';

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
                <title>Gap - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Gap defines the size of the gap between the rows and columns. It is a shorthand for column-gap and row-gap." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Gap</h1>
                        <p>Defines the size of the gap between the rows and columns. It is a shorthand for column-gap and row-gap.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
