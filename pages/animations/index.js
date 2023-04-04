import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/animations/classesdoc';
import { FadeinleftDoc } from '../../components/doc/animations/fadeinleftdoc';
import { FadeoutleftDoc } from '../../components/doc/animations/fadeoutleftdoc';
import { ScaleinDoc } from '../../components/doc/animations/scaleindoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'fadeinleft',
            label: 'fadeinleft',
            component: FadeinleftDoc
        },
        {
            id: 'fadeoutleft',
            label: 'fadeoutleft',
            component: FadeoutleftDoc
        },
        {
            id: 'scalein',
            label: 'scalein',
            component: ScaleinDoc
        },
    ];

    return (
        <div>
            <Head>
                <title>Animations - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Animations a variety of animations are available to be used when an element enters or leaves." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Animations</h1>
                        <p>A variety of animations are available to be used when an element enters or leaves.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
