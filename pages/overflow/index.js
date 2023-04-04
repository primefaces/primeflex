import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/overflow/classesdoc';
import { AutoDoc } from '../../components/doc/overflow/autodoc';
import { HiddenDoc } from '../../components/doc/overflow/hiddendoc';
import { VisibleDoc } from '../../components/doc/overflow/visibledoc';
import { ScrollDoc } from '../../components/doc/overflow/scrolldoc';
import { ResponsiveDoc } from '../../components/doc/overflow/responsivedoc';

const OverflowPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'auto',
            label: 'Auto',
            component: AutoDoc
        },
        {
            id: 'hidden',
            label: 'Hidden',
            component: HiddenDoc
        },
        {
            id: 'visible',
            label: 'Visible',
            component: VisibleDoc
        },
        {
            id: 'scroll',
            label: 'Scroll',
            component: ScrollDoc
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
                <title>Overflow - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Overflow controls the behavior when content exceeds the area of its container." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Overflow</h1>
                        <p>Controls the behavior when content exceeds the area of its container.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default OverflowPage;
