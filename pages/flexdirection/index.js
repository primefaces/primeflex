import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/flexdirection/classesdoc';
import { ResponsiveDoc } from '../../components/doc/flexdirection/responsivedoc';
import { RowDoc } from '../../components/doc/flexdirection/rowdoc';
import { RowReverseDoc } from '../../components/doc/flexdirection/rowreversedoc';
import { ColumnDoc } from '../../components/doc/flexdirection/columndoc';
import { ColumnReverseDoc } from '../../components/doc/flexdirection/columnreverse';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'row',
            label: 'Row',
            component: RowDoc
        },
        {
            id: 'rowreverse',
            label: 'Row Reverse',
            component: RowReverseDoc
        },
        {
            id: 'column',
            label: 'Column',
            component: ColumnDoc
        },
        {
            id: 'columnreverse',
            label: 'Column Reverse',
            component: ColumnReverseDoc
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
                <title>Flex Direction - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Flex Direction sets the direction of flexible items." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Flex Direction</h1>
                        <p>Sets the direction of flexible items.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
