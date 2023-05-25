import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ReuseClassesDoc(props) {
    const code1 = `@import 'primeflex/primeflex.scss';

.mybutton {
    @include styleclass('bg-blue-500 hover:bg-blue-600 border-round transition-colors transition-duration-150 p-3 border-none');
}
            `;

    const code2 = `<button type="button" class="mybutton">My Button</button>
    `;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Commonly used class blocks can be merged as a single class to be reused using the <i>styleclass</i> mixin. Import the utils from <i>primeflex/utils</i> to be able to create your own classes based on PrimeFlex classes. Here is how
                    to create a class called <i>mybutton</i>
                    with the built-in features.
                </p>
            </DocSectionText>
            <DocSectionCode code={code1} />
            <DocSectionText>
                <p>
                    If the import does not work, update your build configuration to import from node_modules or explicitly use the relative path e.g. <i>../node_modules/primeflex/primeflex.scss</i>.
                </p>
            </DocSectionText>
            <DocSectionCode code={code2} />
        </>
    );
}
