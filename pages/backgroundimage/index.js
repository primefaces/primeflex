import Head from 'next/head';
import React from 'react';
import { ClassesDoc } from '../../components/doc/backgroundimage/classesdoc';
import { ColorClassesDoc } from '../../components/doc/backgroundimage/colorclasses';
import { gradientStopsDoc } from '../../components/doc/backgroundimage/gradientstopsdoc';
import { LinearDoc } from '../../components/doc/backgroundimage/lineardoc';
import { RadialDoc } from '../../components/doc/backgroundimage/radialdoc';
import { ResponsiveDoc } from '../../components/doc/backgroundimage/responsivedoc';
import { viaDoc } from '../../components/doc/backgroundimage/viadoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

const BackgroundImagePage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'lineardoc',
            label: 'Linear Gradient',
            component: LinearDoc
        },
        {
            id: 'radialdoc',
            label: 'Radial Gradient',
            component: RadialDoc
        },
        {
            id: 'viadoc',
            label: 'Via',
            component: viaDoc
        },
        {
            id: 'colorstopsdoc',
            label: 'Color Stops',
            component: ColorClassesDoc
        },
        {
            id: 'gradientstopsdoc',
            label: 'Gradient Stops',
            component: gradientStopsDoc
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Background Image - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Background Repeat controls how a background image is repeated." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Background Image</h1>
                        <p>Controls how a background image is repeated.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default BackgroundImagePage;
