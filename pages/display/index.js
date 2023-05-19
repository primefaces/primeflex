import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { BlockDoc } from '../../components/doc/display/blockdoc';
import { ClassesDoc } from '../../components/doc/display/classesdoc';
import { FlexDoc } from '../../components/doc/display/flexdoc';
import { HiddenDoc } from '../../components/doc/display/hiddendoc';
import { InlineBlockDoc } from '../../components/doc/display/inlineblockdoc';
import { InlineDoc } from '../../components/doc/display/inlinedoc';
import { InlineFlexDoc } from '../../components/doc/display/inlineflexdoc';
import { ResponsiveDoc } from '../../components/doc/display/responsivedoc';

const DisplayPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'hidden',
            label: 'Hidden',
            component: HiddenDoc
        },
        {
            id: 'block',
            label: 'Block',
            component: BlockDoc
        },
        {
            id: 'inline',
            label: 'Inline',
            component: InlineDoc
        },
        {
            id: 'inlineblock',
            label: 'Inline Block',
            component: InlineBlockDoc
        },
        {
            id: 'flex',
            label: 'Flex',
            component: FlexDoc
        },
        {
            id: 'inlineflex',
            label: 'Inline Flex',
            component: InlineFlexDoc
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
                <title>Display - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Display defines how an element is displayed on a page." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Display</h1>
                        <p>Defines how an element is displayed on a page.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DisplayPage;
