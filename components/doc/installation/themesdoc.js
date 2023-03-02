import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ThemesDoc(props) {
    const code = `
<link rel="stylesheet" href="https://unpkg.com/primeflex/themes/saga-blue.css">
<link rel="stylesheet" href="https://unpkg.com/primeflex/themes/arya-blue.css">
<link rel="stylesheet" href="https://unpkg.com/primeflex/themes/vela-blue.css">    
        `;

    return (
        <>
            <DocSectionText {...props}>
                <p>PrimeFlex does not ship with a built-in color scheme by default as it is derived from the Prime UI library. In case you need to use it standalone without a Prime library, include one of the themes from the themes folder.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Button label="Check" icon="pi pi-check" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
