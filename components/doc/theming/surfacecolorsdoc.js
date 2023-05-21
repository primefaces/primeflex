import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import Head from 'next/head';

export function SurfaceColorPaletteDoc(props) {
    return (
        <>
            <Head>
                <style>
                    {`
           .theming-colors .color-box {
            display: flex;
            align-items: center;
            padding: 1rem;
            width: 250px;
            font-weight: bold;
        }
          `}
                </style>
            </Head>
            <DocSectionText {...props}>
                <p>
                    In addition, a theme brings a special palette called surfaces that can be used as the base when designing the surface layers and separators. Surfaces are also extremely handy when switching between light dark modes as they are in
                    reverse order.
                </p>
            </DocSectionText>
            <div className="card theming-colors">
                <div className="flex flex-wrap">
                    <div className="color-stack mb-6">
                        <div className="color-box" style={{ backgroundColor: 'var(--surface-0)', color: 'var(--surface-900)' }}>
                            surface-0
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--surface-50)', color: 'var(--surface-900)' }}>
                            surface-50
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--surface-100)', color: 'var(--surface-900)' }}>
                            surface-100
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--surface-200)', color: 'var(--surface-900)' }}>
                            surface-200
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--surface-300)', color: 'var(--surface-900)' }}>
                            surface-300
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--surface-400)', color: 'var(--surface-900)' }}>
                            surface-400
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--surface-500)', color: 'var(--surface-0)' }}>
                            surface-500
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--surface-600)', color: 'var(--surface-0)' }}>
                            surface-600
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--surface-700)', color: 'var(--surface-0)' }}>
                            surface-700
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--surface-800)', color: 'var(--surface-0)' }}>
                            surface-800
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--surface-900)', color: 'var(--surface-0)' }}>
                            surface-900
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
