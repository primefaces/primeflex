import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/borderwidth/classesdoc';
import { ResponsiveDoc } from '../../components/doc/borderwidth/responsivedoc';
import { AllSidesDoc } from '../../components/doc/borderwidth/allsidesdoc';
import { SpecificSidesDoc } from '../../components/doc/borderwidth/specificsidesdoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'allsides',
            label: 'All Sides',
            component: AllSidesDoc
        },
        {
            id: 'specificsides',
            label: 'Sepecific Sides',
            component: SpecificSidesDoc
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
                <title>Border Width - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Width Radius specifies the border width of an element." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Border Width</h1>
                        <p>DSpecifies the border width of an element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
