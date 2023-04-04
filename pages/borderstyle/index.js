import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/borderstyle/classesdoc';
import { ResponsiveDoc } from '../../components/doc/borderstyle/responsivedoc';
import { ExamplesDoc } from '../../components/doc/borderstyle/examples';

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
                <title>Border Style - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Border Style controls the style of a border." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Border Style</h1>
                        <p>Controls the style of a border.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
