import Head from 'next/head';
import React from 'react';
import { ClassesDoc } from '../../components/doc/backdropbrightness/classesdoc';
import { ExampleDoc } from '../../components/doc/backdropbrightness/exampledoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

const BackdropBrightnessPage = () => {
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
                <title>Backdrop Brightness - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Display defines how an element is displayed on a page." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Backdrop Brightness</h1>
                        <p>Utilities for applying brightness backdrop filters to an element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default BackdropBrightnessPage;
