import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/flexshrink/classesdoc';
import { ResponsiveDoc } from '../../components/doc/flexshrink/responsivedoc';
import { ShrinkDoc } from '../../components/doc/flexshrink/shrink';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'shrink',
            label: 'Shrink',
            component: ShrinkDoc
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
                <title>Flex Shrink - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Flex Shrink controls how much a flexible item shrinks." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Flex Shrink</h1>
                        <p>Controls how much a flexible item shrinks.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
