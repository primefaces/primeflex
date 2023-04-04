import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/backgroundrepeat/classesdoc';
import { ResponsiveDoc } from '../../components/doc/backgroundrepeat/responsivedoc';
import { RepeatDoc } from '../../components/doc/backgroundrepeat/repeatdoc';
import { NoRepeatDoc } from '../../components/doc/backgroundrepeat/norepeatdoc';
import { RepeatHorizontallyDoc } from '../../components/doc/backgroundrepeat/repeathorizontallydoc';
import { RepeatVerticallyDoc } from '../../components/doc/backgroundrepeat/repeatverticallydoc';
import { RepeatRoundDoc } from '../../components/doc/backgroundrepeat/repeatrounddoc';
import { RepeatSpaceDoc } from '../../components/doc/backgroundrepeat/repeatspacedoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'repeat',
            label: 'Repeat',
            component: RepeatDoc
        },
        {
            id: 'norepeat',
            label: 'No Repeat',
            component: NoRepeatDoc
        },
        {
            id: 'repeathorizontally',
            label: 'Repeat Horizontally',
            component: RepeatHorizontallyDoc
        },
        {
            id: 'repeatvertically',
            label: 'Repeat Vertically',
            component: RepeatVerticallyDoc
        },
        {
            id: 'repeatround',
            label: 'Repeat Round',
            component: RepeatRoundDoc
        },
        {
            id: 'repeatspace',
            label: 'Repeat Space',
            component: RepeatSpaceDoc
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
                <title>Background Repeat - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Background Repeat controls how a background image is repeated." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Background Repeat</h1>
                        <p>Controls how a background image is repeated.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
