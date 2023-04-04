import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ClassesDoc } from '../../components/doc/order/classesdoc';
import { ResponsiveDoc } from '../../components/doc/order/responsivedoc';
import { OrderDoc } from '../../components/doc/order/orderdoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'order',
            label: 'Order',
            component: OrderDoc
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
                <title>Order - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Order controls the order of a flexible item relative to its container." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Order</h1>
                        <p>Controls the order of a flexible item relative to its container.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
