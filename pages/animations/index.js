import Head from 'next/head';
import React from 'react';
import { AnimateWidthDoc } from '../../components/doc/animations/animatewidthdoc';
import { ClassesDoc } from '../../components/doc/animations/classesdoc';
import { FadeinDoc } from '../../components/doc/animations/fadeindoc';
import { FadeindownDoc } from '../../components/doc/animations/fadeindowndoc';
import { FadeinleftDoc } from '../../components/doc/animations/fadeinleftdoc';
import { FadeinrightDoc } from '../../components/doc/animations/fadeinrightdoc';
import { FadeinupDoc } from '../../components/doc/animations/fadeinupdoc';
import { FadeoutDoc } from '../../components/doc/animations/fadeoutdoc';
import { FadeoutdownDoc } from '../../components/doc/animations/fadeoutdowndoc';
import { FadeoutleftDoc } from '../../components/doc/animations/fadeoutleftdoc';
import { FadeoutrightDoc } from '../../components/doc/animations/fadeoutrightdoc';
import { FadeoutupDoc } from '../../components/doc/animations/fadeoutupdoc';
import { FlipDoc } from '../../components/doc/animations/flipdoc';
import { FlipleftDoc } from '../../components/doc/animations/flipleftdoc';
import { FliprightDoc } from '../../components/doc/animations/fliprightdoc';
import { FlipupDoc } from '../../components/doc/animations/flipupdoc';
import { ScaleinDoc } from '../../components/doc/animations/scaleindoc';
import { SlidedownDoc } from '../../components/doc/animations/slidedowndoc';
import { SlideupDoc } from '../../components/doc/animations/slideupdoc';
import { ZoominDoc } from '../../components/doc/animations/zoomindoc';
import { ZoomindownDoc } from '../../components/doc/animations/zoomindowndoc';
import { ZoominleftDoc } from '../../components/doc/animations/zoominleftdoc';
import { ZoominupDoc } from '../../components/doc/animations/zoominupdoc';
import { ZoomninrightDoc } from '../../components/doc/animations/zoomninrightdoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

const PositionPage = () => {
    const docs = [
        {
            id: 'classes',
            label: 'Classes',
            component: ClassesDoc
        },
        {
            id: 'fadein',
            label: 'fadein',
            component: FadeinDoc
        },
        {
            id: 'fadeout',
            label: 'fadeout',
            component: FadeoutDoc
        },
        {
            id: 'slidedown',
            label: 'slidedown',
            component: SlidedownDoc
        },
        {
            id: 'slideup',
            label: 'slideup',
            component: SlideupDoc
        },
        {
            id: 'scalein',
            label: 'scalein',
            component: ScaleinDoc
        },
        {
            id: 'fadeinleft',
            label: 'fadeinleft',
            component: FadeinleftDoc
        },
        {
            id: 'fadeinright',
            label: 'fadeinright',
            component: FadeinrightDoc
        },
        {
            id: 'fadeoutleft',
            label: 'fadeoutleft',
            component: FadeoutleftDoc
        },
        {
            id: 'fadeoutright',
            label: 'fadeoutright',
            component: FadeoutrightDoc
        },
        {
            id: 'fadeinup',
            label: 'fadeinup',
            component: FadeinupDoc
        },
        {
            id: 'fadeoutup',
            label: 'fadeoutup',
            component: FadeoutupDoc
        },
        {
            id: 'fadeindown',
            label: 'fadeindown',
            component: FadeindownDoc
        },
        {
            id: 'fadeoutdown',
            label: 'fadeoutdown',
            component: FadeoutdownDoc
        },
        {
            id: 'animate-width',
            label: 'animate-width',
            component: AnimateWidthDoc
        },
        {
            id: 'flip',
            label: 'flip',
            component: FlipDoc
        },
        {
            id: 'flipleft',
            label: 'flipleft',
            component: FlipleftDoc
        },
        {
            id: 'flipright',
            label: 'flipright',
            component: FliprightDoc
        },
        {
            id: 'flipup',
            label: 'flipup',
            component: FlipupDoc
        },
        {
            id: 'zoomin',
            label: 'zoomin',
            component: ZoominDoc
        },
        {
            id: 'zoomindown',
            label: 'zoomindown',
            component: ZoomindownDoc
        },
        {
            id: 'zoominleft',
            label: 'zoominleft',
            component: ZoominleftDoc
        },
        {
            id: 'zoomninright',
            label: 'zoomninright',
            component: ZoomninrightDoc
        },
        {
            id: 'zoominup',
            label: 'zoominup',
            component: ZoominupDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Animations - PrimeFlex</title>
                <meta name="description" content="PrimeFlex Animations a variety of animations are available to be used when an element enters or leaves." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Animations</h1>
                        <p>A variety of animations are available to be used when an element enters or leaves.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PositionPage;
