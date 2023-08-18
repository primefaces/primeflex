import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ColorPaletteDoc } from '../../components/doc/configuration/colorpalettedoc';
import { SurfaceColorPaletteDoc } from '../../components/doc/configuration/surfacecolorsdoc';
import { ThemesDoc } from '../../components/doc/configuration/themesdoc';

const ConfigurationPage = () => {
    const docs = [
        {
            id: 'themes',
            label: 'Themes',
            component: ThemesDoc
        },
        {
            id: 'colorpalette',
            label: 'Color Palette',
            component: ColorPaletteDoc
        },
        {
            id: 'surfacecolorpalette',
            label: 'Surface Color Palette',
            component: SurfaceColorPaletteDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Configuration - PrimeFlex</title>
                <meta name="description" content="PrimeFlex is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <span>Customization</span>
                        <h1>Configuration</h1>
                        <p>PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.</p>
                        <p>
                            PrimeFlex is available for download at <a href="https://www.npmjs.com/package/primeflex">NPM</a> for usage with a module bundler such as webpack.
                        </p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ConfigurationPage;
