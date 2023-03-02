import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ModuleLoaderDoc } from '../../components/doc/installation/moduleloaderdoc';
import { VariablesDoc } from '../../components/doc/installation/variablesdoc';
import { LoadFromCDNDoc } from '../../components/doc/installation/loadfromcdndoc';
import { ReuseClassesDoc } from '../../components/doc/installation/reuseclassesdoc';
import { ThemesDoc } from '../../components/doc/installation/themesdoc';
import { ProductionSizeDoc } from '../../components/doc/installation/productionsizedoc';
import { VSCodeExtensionDoc } from '../../components/doc/installation/vscodeextensiondoc';

const InstallationPage = () => {
    const docs = [
        {
            id: 'moduleloader',
            label: 'Module Loader',
            component: ModuleLoaderDoc
        },
        {
            id: 'loadfromcdn',
            label: 'Load from CDN',
            component: LoadFromCDNDoc
        },
        {
            id: 'themes',
            label: 'Themes',
            component: ThemesDoc
        },
        {
            id: 'variables',
            label: 'Variables',
            component: VariablesDoc
        },
        {
            id: 'reuseclasses',
            label: 'Reuse Classes',
            component: ReuseClassesDoc
        },
        {
            id: 'productionsize',
            label: 'Production Size',
            component: ProductionSizeDoc
        },
        {
            id: 'vscodeextension',
            label: 'VSCode Extension',
            component: VSCodeExtensionDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Getting Started - PrimeFlex</title>
                <meta name="description" content="PrimeFlex is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Installation</h1>
                        <p>PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default InstallationPage;
