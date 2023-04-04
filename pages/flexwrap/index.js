import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/flexwrap/classesdoc';
import { ResponsiveDoc } from '../../components/doc/flexwrap/responsivedoc';
import { WrapDoc } from '../../components/doc/flexwrap/wrapdoc';
import { WrapReverseDoc } from '../../components/doc/flexwrap/wrapreverse';
import { NoWrapDoc } from '../../components/doc/flexwrap/nowrapdoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'wrap',
            label: 'Wrap',
            component: WrapDoc
        },
        {
            id: 'wrapreverse',
            label: 'Wrap-Reverse',
            component: WrapReverseDoc
        },
        {
            id: 'nowrap',
            label: 'Nowrap',
            component: NoWrapDoc
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
                <title>Flex Wrap - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Flex Wrap sets the direction of flexible items." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Flex Wrap</h1>
                        <p>Defines whether the flexible items should wrap or not.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
