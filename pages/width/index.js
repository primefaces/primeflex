import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/width/classesdoc';
import { ResponsiveDoc } from '../../components/doc/width/responsivedoc';
import { ExamplesDoc } from '../../components/doc/width/examples';
import { FixedWidthDoc } from '../../components/doc/width/fixedwidthdoc';
import { FluidWidthDoc } from '../../components/doc/width/fluidwidthdoc';

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
            id: 'fixedwidth',
            label: 'Fixed Width',
            component: FixedWidthDoc
        },
        {
            id: 'fluidwidth',
            label: 'Fluid Width',
            component: FluidWidthDoc
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
                <title>Width - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Width defines the width of an element." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Width</h1>
                        <p>Defines the width of an element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
