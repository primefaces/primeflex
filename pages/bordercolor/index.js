import Head from 'next/head';
import React from 'react';
import { ClassesDoc } from '../../components/doc/bordercolor/classesdoc';
import { ExamplesDoc } from '../../components/doc/bordercolor/examples';
import { PseudoStatesDoc } from '../../components/doc/bordercolor/pseudostatesdoc';
import { RgbaDoc } from '../../components/doc/bordercolor/rgbadoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

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
            id: 'rgbadoc',
            label: 'RGBA Border Colors',
            component: RgbaDoc
        },
        {
            id: 'pseudostates',
            label: 'Pseudo States',
            component: PseudoStatesDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Border Color - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Border Color is a wide range of color palettes for the border of an element." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Border Color</h1>
                        <p>A wide range of color palettes for the border of an element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
