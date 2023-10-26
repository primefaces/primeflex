import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/scale/classesdoc';
import { ExampleDoc } from '../../components/doc/scale/exampledoc';

const ScalePage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },

        {
            id: 'example',
            label: 'Example',
            component: ExampleDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Scale - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Scale defines how an element is scaled on a page." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Scale</h1>
                        <p>Utilities for applying scale to an element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ScalePage;
