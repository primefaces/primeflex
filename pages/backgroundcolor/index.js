import Head from 'next/head';
import React from 'react';
import { ClassesDoc } from '../../components/doc/backgroundcolor/classesdoc';
import { ExamplesDoc } from '../../components/doc/backgroundcolor/examples';
import { NamedThemeColorDoc } from '../../components/doc/backgroundcolor/namedthemecolordoc';
import { PseudoStatesDoc } from '../../components/doc/backgroundcolor/pseudostatesdoc';
import { RgbaDoc } from '../../components/doc/backgroundcolor/rgbadoc';
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
            label: 'RGBA',
            component: RgbaDoc
        },
        {
            id: 'pseudostates',
            label: 'Pseudo States',
            component: PseudoStatesDoc
        },
        {
            id: 'namedthemecolor',
            label: 'Named Theme Color',
            component: NamedThemeColorDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Background Color - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Background Color choose from a variety of colors for the background of an element." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Background Color</h1>
                        <p>Choose from a variety of colors for the background of an element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
