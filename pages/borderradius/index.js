import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/borderradius/classesdoc';
import { ResponsiveDoc } from '../../components/doc/borderradius/responsivedoc';
import { ExamplesDoc } from '../../components/doc/borderradius/examples';
import { NoRoundingDoc } from '../../components/doc/borderradius/noroundingdoc';

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
            id: 'norounding',
            label: 'No Rounding',
            component: NoRoundingDoc
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
                <title>Border Radius - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Border Radius defines the radius of an element's corners." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Border Radius</h1>
                        <p>Defines the radius of an element's corners.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
