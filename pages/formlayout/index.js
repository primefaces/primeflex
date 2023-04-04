import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { VerticalDoc } from '../../components/doc/formlayout/verticaldoc';
import { VerticalAndGridDoc } from '../../components/doc/formlayout/verticalandgriddoc';
import { HorizontalAndFixedWidthDoc } from '../../components/doc/formlayout/horizontalandfixwidthdoc';
import { HorizontalDoc } from '../../components/doc/formlayout/horizontaldoc';
import { InlineDoc } from '../../components/doc/formlayout/inlinedoc';
import { VerticalAndHorizontalCheckboxDoc } from '../../components/doc/formlayout/verticalandhorizontalcheckboxdoc';
import { VerticalAndHorizontalRadioButtonDoc } from '../../components/doc/formlayout/verticalandhorizontalradiobtndoc';
import { HelpDoc } from '../../components/doc/formlayout/helpdoc';
import { AdvancedDoc } from '../../components/doc/formlayout/advanceddoc';

const PositionPage = () => {
    const docs = [
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'verticalandgrid',
            label: 'Vertical & Grid',
            component: VerticalAndGridDoc
        },
        {
            id: 'horizontalandfixedwidth',
            label: 'Horizontal & Fixed Width',
            component: HorizontalAndFixedWidthDoc
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
        },
        {
            id: 'inline',
            label: 'Inline',
            component: InlineDoc
        },
        {
            id: 'verticalandhorizontalchbox',
            label: 'Vertical & Horizontal Checkbox',
            component: VerticalAndHorizontalCheckboxDoc
        },
        {
            id: 'verticalandhorizontalrdbttn',
            label: 'Vertical & Horizontal Radio Button',
            component: VerticalAndHorizontalRadioButtonDoc
        },
        {
            id: 'helptext',
            label: 'Help Text',
            component: HelpDoc
        },
        {
            id: 'advanced',
            label: 'Advanced',
            component: AdvancedDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>FormLayout - PrimeFlex</title>
                <meta name="description" content="PrimeFlex FormLayout an extension to Grid System with fine tuning to create forms." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>FormLayout</h1>
                        <p>An extension to Grid System with fine tuning to create forms.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
