import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/gridsystem/classesdoc';
import { ResponsiveDoc } from '../../components/doc/gridsystem/responsivedoc';
import { GettingStartedDoc } from '../../components/doc/gridsystem/gettingstarteddoc';
import { TwelweColumnGridDoc } from '../../components/doc/gridsystem/12columngriddoc';
import { MultilineDoc } from '../../components/doc/gridsystem/multilinedoc';
import { FixedWidthColumnDoc } from '../../components/doc/gridsystem/fixedwithcolumndoc';
import { OffsetDoc } from '../../components/doc/gridsystem/offsetdoc';
import { NestedDoc } from '../../components/doc/gridsystem/nesteddoc';
import { GutterDoc } from '../../components/doc/gridsystem/gutterdoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'gettingstarted',
            label: 'Getting Started',
            component: GettingStartedDoc
        },
        {
            id: 'twelwecolumngrid',
            label: '12 Column Grid',
            component: TwelweColumnGridDoc
        },
        {
            id: 'multiline',
            label: 'Multiline',
            component: MultilineDoc
        },
        {
            id: 'fixedwidthcolumn',
            label: 'Fixed Width Column',
            component: FixedWidthColumnDoc
        },
        {
            id: 'offset',
            label: 'Offset',
            component: OffsetDoc
        },
        {
            id: 'nested',
            label: 'Nested',
            component: NestedDoc
        },
        {
            id: 'gutter',
            label: 'Gutter',
            component: GutterDoc
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
                <title>Grid System - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Grid System is a lightweight flex based responsive layout utility optimized for mobile phones, tablets and desktops." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Grid System</h1>
                        <p>Grid is a lightweight flex based responsive layout utility optimized for mobile phones, tablets and desktops.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
