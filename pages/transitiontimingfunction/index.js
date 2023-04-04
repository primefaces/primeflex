import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/transitiontimingfunction/classesdoc';
import { ExamplesDoc } from '../../components/doc/transitiontimingfunction/examples';

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
        }
    ];

    return (
        <div>
            <Head>
                <title>Transition Timing Function - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Transition Timing Function specifies the speed curve of a transition." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Transition Timing Function</h1>
                        <p>Specifies the speed curve of a transition.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
