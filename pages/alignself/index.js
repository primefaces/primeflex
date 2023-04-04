import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/alignself/classesdoc';
import { ResponsiveDoc } from '../../components/doc/alignself/responsivedoc';
import { StretchDoc } from '../../components/doc/alignself/stretchdoc';
import { StartDoc } from '../../components/doc/alignself/startdoc';
import { CenterDoc } from '../../components/doc/alignself/centerdoc';
import { EndDoc } from '../../components/doc/alignself/enddoc';
import { BaselineDoc } from '../../components/doc/alignself/baselinedoc';
import { AutoDoc } from '../../components/doc/alignself/autodoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'auto',
            label: 'Auto',
            component: AutoDoc
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
            id: 'stretch',
            label: 'Stretch',
            component: StretchDoc
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
                <title>Align Self - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Align Self defines the alignment for a particular element on the cross axis." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Align Self</h1>
                        <p>Defines the alignment for a particular element on the cross axis.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
