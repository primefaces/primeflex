import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function GrowDoc(props) {
    const code = {
        basic: `<div class="flex">
    <div class="flex-none flex">PrimeFlex</div>
    <div class="flex-grow-1 flex">PrimeFlex</div>
    <div class="flex-none flex">PrimeFlex</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex card-container blue-container overflow-hidden">
        <div class="flex-none flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">PrimeFlex</div>
        <div class="flex-grow-1 flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">PrimeFlex</div>
        <div class="flex-none flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">PrimeFlex</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Second item grows while others do not.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex card-container blue-container overflow-hidden">
                    <div className="flex-none flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">PrimeFlex</div>
                    <div className="flex-grow-1 flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">PrimeFlex</div>
                    <div className="flex-none flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">PrimeFlex</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
