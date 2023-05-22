import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ModuleLoaderDoc(props) {
    const code1 = {
        basic: `
npm install primeflex --save
            `
    };

    const code2 = {
        basic: `
/node_modules/primeflex/primeflex.css
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeFlex is available for download at <a href="https://www.npmjs.com/package/primeflex">NPM</a> for usage with a module bundler such as webpack.
                </p>
            </DocSectionText>
            <DocSectionCode code={code1} import />
            <DocSectionText>
                <p>After installation you may include the library by importing from node_modules.</p>
            </DocSectionText>

            <DocSectionCode code={code2} import />
        </>
    );
}
