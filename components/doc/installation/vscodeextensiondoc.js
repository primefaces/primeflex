import { DocSectionText } from '../common/docsectiontext';

export function VSCodeExtensionDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The official PrimeFlex extension for{' '}
                    <a href="https://marketplace.visualstudio.com/items?itemName=yigitfindikli.primeflexsnippets" target="_blank">
                        VSCode
                    </a>{' '}
                    provides code completion and snippets support for the classes. Search for "PrimeFlex" at VSCode marketplace to download and install the extension.
                </p>
            </DocSectionText>
        </>
    );
}
