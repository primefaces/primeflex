import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function LoadFromCDNDoc(props) {
    const code = {
        basic: `<link rel="stylesheet" href="https://unpkg.com/primeflex@^3/primeflex.css">                                         
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>PrimeFlex can also be loaded from a CDN using a link tag.</p>
            </DocSectionText>
            <DocSectionCode code={code} />
        </>
    );
}
