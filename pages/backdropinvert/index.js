import Head from 'next/head';
import React from 'react';
import { ClassesDoc } from '../../components/doc/backdropinvert/classesdoc';
import { ExampleDoc } from '../../components/doc/backdropinvert/exampledoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

const BackdropInvertPage = () => {
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
                <title>Backdrop Invert - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Display defines how an element is displayed on a page." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Backdrop Invert</h1>
                        <p>Utilities for applying invert backdrop filters to an element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default BackdropInvertPage;
