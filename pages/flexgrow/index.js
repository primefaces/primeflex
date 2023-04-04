import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/flexgrow/classesdoc';
import { ResponsiveDoc } from '../../components/doc/flexgrow/responsivedoc';
import { GrowDoc } from '../../components/doc/flexgrow/grow';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'grow',
            label: 'Grow',
            component: GrowDoc
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
                <title>Flex Grow - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Flex Grow controls how much a flexible item grows." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Flex Grow</h1>
                        <p>Controls how much a flexible item grows.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
