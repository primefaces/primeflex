import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/outlinecolor/classesdoc';
import { ExamplesDoc } from '../../components/doc/outlinecolor/examples';

const OutlineColorPage = () => {
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
        }
    ];

    return (
        <div>
            <Head>
                <title>Outline Color - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Outline defines the style to display when an element receives focus." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Outline Color</h1>
                        <p>Defines the style to display when an element receives focus.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default OutlineColorPage;
