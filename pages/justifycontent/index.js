import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/justifycontent/classesdoc';
import { ResponsiveDoc } from '../../components/doc/justifycontent/responsivedoc';
import { StartDoc } from '../../components/doc/justifycontent/startdoc';
import { CenterDoc } from '../../components/doc/justifycontent/centerdoc';
import { EndDoc } from '../../components/doc/justifycontent/enddoc';
import { SpaceBetweenDoc } from '../../components/doc/justifycontent/spacebetweendoc';
import { SpaceAroundDoc } from '../../components/doc/justifycontent/spacearounddoc';
import { SpaceEvenlyDoc } from '../../components/doc/justifycontent/spaceevenlydoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'start',
            label: 'Start',
            component: StartDoc
        },
        {
            id: 'center',
            label: 'Center',
            component: CenterDoc
        },
        {
            id: 'end',
            label: 'End',
            component: EndDoc
        },
        {
            id: 'spacebetween',
            label: 'Space Between',
            component: SpaceBetweenDoc
        },
        {
            id: 'spacearound',
            label: 'Space Around',
            component: SpaceAroundDoc
        },
        {
            id: 'spaceevenly',
            label: 'Space Evenly',
            component: SpaceEvenlyDoc
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
                <title>Justify Content - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Justify Content defines the alignment on the main axis." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Justify Content</h1>
                        <p>Defines the alignment on the main axis.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
