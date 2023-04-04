import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/alignitems/classesdoc';
import { ResponsiveDoc } from '../../components/doc/alignitems/responsivedoc';
import { StretchDoc } from '../../components/doc/alignitems/stretchdoc';
import { StartDoc } from '../../components/doc/alignitems/startdoc';
import { CenterDoc } from '../../components/doc/alignitems/centerdoc';
import { EndDoc } from '../../components/doc/alignitems/enddoc';
import { BaselineDoc } from '../../components/doc/alignitems/baselinedoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'stretch',
            label: 'Stretch',
            component: StretchDoc
        },
        {
            id: 'start',
            label: 'Start',
            component: StartDoc
        },
        {
            id: 'center',
            label: 'Center',
            component: CenterDoc
        },
        {
            id: 'end',
            label: 'End',
            component: EndDoc
        },
        {
            id: 'baseline',
            label: 'Baseline',
            component: BaselineDoc
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
                <title>Align Items - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Align Items defines the size of the gap between the rows and columns. It is a shorthand for column-gap and row-gap." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Align Items</h1>
                        <p>Defines the alignment on the cross axis.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
