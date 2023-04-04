import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/aligncontent/classesdoc';
import { ResponsiveDoc } from '../../components/doc/aligncontent/responsivedoc';
import { StartDoc } from '../../components/doc/aligncontent/startdoc';
import { CenterDoc } from '../../components/doc/aligncontent/centerdoc';
import { EndDoc } from '../../components/doc/aligncontent/enddoc';
import { SpaceBetweenDoc } from '../../components/doc/aligncontent/spacebetweendoc';
import { SpaceAroundDoc } from '../../components/doc/aligncontent/spacearounddoc';
import { SpaceEvenlyDoc } from '../../components/doc/aligncontent/spaceevenlydoc';

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
                <title>Align Content - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Align Content controls the distribution of flex lines between and around items." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Align Content</h1>
                        <p>Controls the distribution of flex lines between and around items.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
