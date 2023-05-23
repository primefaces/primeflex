import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PseudoStatesDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center card-container">
    <div class="surface-overlay border-round border-1 p-3 m-3 w-16rem min-h-full">
        <a href="#" class="no-underline hover:underline">
            Link with no underline
        </a>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Focus, Hover and Active states are available with the <i>focus:</i>, <i>hover:</i>, <i>active:</i> prefixes respectively.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="surface-overlay border-round border-1 p-3 m-3 w-16rem min-h-full">
                        <a href="#" className="no-underline hover:underline">
                            Link with no underline
                        </a>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
