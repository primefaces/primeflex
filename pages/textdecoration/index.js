import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/textdecoration/classesdoc';
import { ExamplesDoc } from '../../components/doc/textdecoration/examples';
import { PseudoStatesDoc } from '../../components/doc/textdecoration/pseudostatesdoc';

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
            id: 'pseudostates',
            label: 'Pseudo States',
            component: PseudoStatesDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Text Decoration - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Text Decoration specifies the text decoration of the text inside an element." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Text Decoration</h1>
                        <p>Specifies the text decoration of the text inside an element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
