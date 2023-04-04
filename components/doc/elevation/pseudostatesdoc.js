import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PseudoStatesDoc(props) {
    const code = {
        basic: `<div class="shadow-2 hover:shadow-8">shadow-8 on hover</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container">
        <div class="shadow-2 hover:shadow-8 text-center border-round-sm h-6rem surface-overlay p-3 m-3 flex align-items-center justify-content-center font-bold">shadow-8 on hover</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Focus, Hover and Active states are available with the <i>focus:</i>, <i>hover:</i>, <i>active:</i> prefixes respectively.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center card-container">
                    <div className="shadow-2 hover:shadow-8 text-center border-round-sm h-6rem surface-overlay p-3 m-3 flex align-items-center justify-content-center font-bold">shadow-8 on hover</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
