import Head from 'next/head';
import { classNames } from 'primereact/utils';
import { DocSectionNav } from './docsectionnav';
import { DocSections } from './docsections';

export function DocComponent(props) {
    return (
        <div className={classNames(props.className, 'doc-component')}>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
            </Head>
            <div className="doc-main">
                <div className="doc-intro">
                    <h1>{props.header}</h1>
                    <p>{props.description}</p>
                </div>
                <DocSections docs={props.componentDocs} />
            </div>
            <DocSectionNav docs={props.componentDocs} />
        </div>
    );
}
