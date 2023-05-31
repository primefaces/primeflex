import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/toprightbottomleft/classesdoc';
import { ResponsiveDoc } from '../../components/doc/toprightbottomleft/responsivedoc';
import { ExamplesDoc } from '../../components/doc/toprightbottomleft/examplesdoc';

const PlacementPage = () => {
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
                <title>Top / Right / Bottom / Left - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Top / Right / Bottom / Left controls the vertical and horizontal position of a positioned element." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Top / Right / Bottom / Left</h1>
                        <p>Controls the vertical and horizontal position of a positioned element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PlacementPage;
