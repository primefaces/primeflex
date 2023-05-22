import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/flex/classesdoc';
import { ResponsiveDoc } from '../../components/doc/flex/responsivedoc';
import { InitialDoc } from '../../components/doc/flex/initialdoc';
import { Flex1Doc } from '../../components/doc/flex/flex1';
import { AutoDoc } from '../../components/doc/flex/autodoc';
import { NoneDoc } from '../../components/doc/flex/nonedoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'initial',
            label: 'Initial',
            component: InitialDoc
        },
        {
            id: 'flex1',
            label: 'Flex 1',
            component: Flex1Doc
        },
        {
            id: 'auto',
            label: 'Auto',
            component: AutoDoc
        },
        {
            id: 'none',
            label: 'None',
            component: NoneDoc
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
                <title>Flex - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Flex A shorthand property to define flex-grow, flex-shrink and flex-basis at once." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Flex</h1>
                        <p>
                            A shorthand property to define <i>flex-grow</i>, <i>flex-shrink</i> and <i>flex-basis</i> at once.
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
