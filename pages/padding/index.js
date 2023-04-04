import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/padding/classesdoc';
import { ResponsiveDoc } from '../../components/doc/padding/responsivedoc';
import { SingleSidePaddingDoc } from '../../components/doc/padding/singlesidepaddingdoc';
import { HorizontalPaddingDoc } from '../../components/doc/padding/horizontalpaddingdoc';
import { VerticalPaddingDoc } from '../../components/doc/padding/verticalpaddingdoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'singlesidepadding',
            label: 'Single Side Padding',
            component: SingleSidePaddingDoc
        },
        {
            id: 'horizontalpadding',
            label: 'Horizontal Padding',
            component: HorizontalPaddingDoc
        },
        {
            id: 'verticalpadding',
            label: 'Vertical Padding',
            component: VerticalPaddingDoc
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
                <title>Padding - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Padding specifies the space between the content and its border." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Padding</h1>
                        <p>Specifies the space between the content and its border.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
