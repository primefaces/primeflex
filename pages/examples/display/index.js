import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

const PositionPage = () => {
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
                        <p>A shorthand property to define <i>flex-grow</i>, <i>flex-shrink</i> and <i>flex-basis</i> at once.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
