import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/position/classesdoc';
import { ResponsiveDoc } from '../../components/doc/position/responsivedoc';
import { StaticDoc } from '../../components/doc/position/staticdoc';
import { FixedDoc } from '../../components/doc/position/fixeddoc';
import { RelativeDoc } from '../../components/doc/position/relativedoc';
import { AbsoluteDoc } from '../../components/doc/position/absolutedoc';
import { StickyDoc } from '../../components/doc/position/stickydoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'static',
            label: 'Static',
            component: StaticDoc
        },
        {
            id: 'fixed',
            label: 'Fixed',
            component: FixedDoc
        },
        {
            id: 'relative',
            label: 'Relative',
            component: RelativeDoc
        },
        {
            id: 'absolute',
            label: 'Absolute',
            component: AbsoluteDoc
        },
        {
            id: 'sticky',
            label: 'Sticky',
            component: StickyDoc
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
                <title>Position - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Position specifies how an element is positioned on the screen." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Position</h1>
                        <p>Specifies how an element is positioned on the screen.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
