import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/textcolor/classesdoc';
import { ExamplesDoc } from '../../components/doc/textcolor/examples';
import { PseudoStatesDoc } from '../../components/doc/textcolor/pseudostatesdoc';
import { RgbaDoc } from '../../components/doc/textcolor/rgbadoc';

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
            label: 'RGBA Text Colors',
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
                <title>Text Color - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Text Color is a wide range of color palettes for the text of an element." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Text Color</h1>
                        <p>A wide range of color palettes for the text of an element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
