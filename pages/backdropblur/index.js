import Head from 'next/head';
import React from 'react';
import { ClassesDoc } from '../../components/doc/backdropblur/classesdoc';
import { ExampleDoc } from '../../components/doc/backdropblur/exampledoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

const BackdropBlurPage = () => {
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
                <title>Backdrop Blur - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Display defines how an element is displayed on a page." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Backdrop Blur</h1>
                        <p>Utilities for applying blur backdrop filters to an element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default BackdropBlurPage;
