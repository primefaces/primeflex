import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/margin/classesdoc';
import { HorizontalMarginDoc } from '../../components/doc/margin/horizontalmargindoc';
import { NegativeMarginDoc } from '../../components/doc/margin/negativemargindoc';
import { ResponsiveDoc } from '../../components/doc/margin/responsivedoc';
import { SingleSideMarginDoc } from '../../components/doc/margin/singlesidemargindoc';
import { VerticalMarginDoc } from '../../components/doc/margin/verticalmargindoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'singlesidemargin',
            label: 'Single Side Margin',
            component: SingleSideMarginDoc
        },
        {
            id: 'horizontalmargin',
            label: 'Horizontal Margin',
            component: HorizontalMarginDoc
        },
        {
            id: 'verticalmargin',
            label: 'Vertical Margin',
            component: VerticalMarginDoc
        },
        {
            id: 'negativemargin',
            label: 'Negative Margin',
            component: NegativeMarginDoc
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
                <title>Margin - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Margin controls the space around an element." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Margin</h1>
                        <p>Controls the space around an element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
