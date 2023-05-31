import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ThemesDoc(props) {
    const code = `primeflex/themes/primeone-light.css   
primeflex/themes/primeone-dark.css   
            `;

    return (
        <>
            <DocSectionText {...props}>
                <p>PrimeFlex does not ship with a built-in color scheme by default as it is derived from the Prime UI library. In case you need to use it standalone without a Prime library, include one of the themes from the themes folder.</p>
            </DocSectionText>
            <DocSectionCode code={code} />
        </>
    );
}
