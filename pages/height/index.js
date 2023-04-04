import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/height/classesdoc';
import { ResponsiveDoc } from '../../components/doc/height/responsivedoc';
import { ExamplesDoc } from '../../components/doc/height/examples';
import { FixedHeightDoc } from '../../components/doc/height/fixedheightdoc';

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
            id: 'fixedheight',
            label: 'Fixed Height',
            component: FixedHeightDoc
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
                <title>Height - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Height defines the height of an element." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Height</h1>
                        <p>Defines the height of an element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
