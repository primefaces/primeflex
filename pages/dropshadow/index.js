import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/dropshadow/classesdoc';
import { ExamplesDoc } from '../../components/doc/dropshadow/examples';
import { ResponsiveDoc } from '../../components/doc/dropshadow/responsivedoc';

const DropShadowPage = () => {
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
                <title>Drop Shadow - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Drop Shadow specifies the Drop Shadow of an element." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Drop Shadow</h1>
                        <p>Specifies the Drop Shadow of an element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DropShadowPage;
