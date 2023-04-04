import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NoneDoc(props) {
    const code = {
        basic: `<div class="flex">
    <div class="flex-1">Lorem ipsum dolor sit amet</div>
    <div class="flex-none">Lorem ipsum dolor sit amet</div>
    <div class="flex-1">Lorem ipsum dolor sit amet</div>
</div>
        `,
        expanded: `<div class="card">
    <div class="card-container purple-container overflow-hidden">
        <div class="flex">
            <div class="flex-1 flex align-items-center justify-content-center bg-purple-500 font-bold text-white m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
            <div class="flex-none flex align-items-center justify-content-center bg-purple-500 font-bold text-white m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
            <div class="flex-1 flex align-items-center justify-content-center bg-purple-500 font-bold text-white m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Same as "0 0 auto" meaning the element does not grow or shrink.</p>
            </DocSectionText>
            <div className="card">
                <div className="card-container purple-container overflow-hidden">
                    <div className="flex">
                        <div className="flex-1 flex align-items-center justify-content-center bg-purple-500 font-bold text-white m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
                        <div className="flex-none flex align-items-center justify-content-center bg-purple-500 font-bold text-white m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
                        <div className="flex-1 flex align-items-center justify-content-center bg-purple-500 font-bold text-white m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
