import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ExamplesDoc } from '../../components/doc/userselect/examples';
import { ThemesDoc } from '../../components/doc/theming/themesdoc';
import { ColorPaletteDoc } from '../../components/doc/theming/colorpalettedoc';
import { SurfaceColorPaletteDoc } from '../../components/doc/theming/surfacecolorsdoc';

const PositionPage = () => {
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
                <title>Theming - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Theming" />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Theming</h1>
                        <p>
                            PrimeFlex has exclusive integration with the Prime UI library theming being used including <a href="https://www.primefaces.org/showcase">PrimeFaces</a>, <a href="https://www.primefaces.org/primeng">PrimeNG</a>,
                            <a href="https://www.primefaces.org/primereact">PrimeReact</a> and <a href="https://www.primefaces.org/primevue">PrimeVue</a> by using the colors exported by the theme of the corresponding library. These colors are mainly
                            utilized in <i>background</i>, <i>text</i> and <i>border</i> classes.
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
