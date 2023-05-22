import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/elevation/classesdoc';
import { ExamplesDoc } from '../../components/doc/elevation/examples';
import { PseudoStatesDoc } from '../../components/doc/elevation/pseudostatesdoc';
import { ResponsiveDoc } from '../../components/doc/elevation/responsivedoc';

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
            id: 'pseudostates',
            label: 'Pseudo States',
            component: PseudoStatesDoc
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
                <title>Elevation - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Elevation specifies the box-shadow of an element." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Elevation</h1>
                        <p>Specifies the box-shadow of an element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
