import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ResponsiveClassesDoc } from '../../components/doc/migration/responsiveclassesdoc';
import { GridDoc } from '../../components/doc/migration/griddoc';
import { SpacingDoc } from '../../components/doc/migration/spacingdoc';
import { ElevationDoc } from '../../components/doc/migration/elevationdoc';
import { DisplayDoc } from '../../components/doc/migration/displaydoc';
import { FlexBoxDoc } from '../../components/doc/migration/flexboxdoc';
import { TextDoc } from '../../components/doc/migration/textdoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'responsiveclasses',
            label: 'Responsive Classes',
            component: ResponsiveClassesDoc
        },
        {
            id: 'grid',
            label: 'Grid',
            component: GridDoc
        },
        {
            id: 'spacing',
            label: 'Spacing',
            component: SpacingDoc
        },
        {
            id: 'elevation',
            label: 'Elevation',
            component: ElevationDoc
        }, 
        {
            id: 'display',
            label: 'Display',
            component: DisplayDoc
        },
        {
            id: 'flexbox',
            label: 'Flexbox',
            component: FlexBoxDoc
        },
        {
            id: 'text',
            label: 'Text',
            component: TextDoc
        },
    ];

    return (
        <div>
            <Head>
                <title>Migration Guide - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Migration Guide" />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Migration Guide</h1>
                        <p>
                            PrimeFlex was initially designed to be a grid library. As of v3, it has evolved into a full-featured CSS utility library to become the foundation of the PrimeBlocks project. As as result, it had to be rewritten from ground
                            up.
                        </p>
                        <h2>p Prefix</h2>
                        <p>
                            <i>p</i> prefix is removed from all of the classes in favor of the readability.
                        </p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
