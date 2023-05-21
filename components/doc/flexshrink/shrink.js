import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ShrinkDoc(props) {
    const code = {
        basic: `<div class="flex">
    <div class="flex-grow-1 flex-shrink-1">1</div>
    <div class="flex-shrink-0 flex">shrink item</div>
    <div class="flex-grow-1 flex-shrink-1">3</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex card-container blue-container overflow-hidden">
    <div class="flex-grow-1 flex-shrink-1 flex align-items-center justify-content-center bg-blue-500 font-bold text-white p-4 m-3 border-round">1</div>
    <div class="flex-shrink-0 flex align-items-center justify-content-center bg-blue-500 font-bold text-white p-4 m-3 border-round">shrink item</div>
    <div class="flex-grow-1 flex-shrink-1 flex align-items-center justify-content-center bg-blue-500 font-bold text-white p-4 m-3 border-round">3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Second item does not shrink while others do.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex card-container blue-container overflow-hidden">
                    <div className="flex-grow-1 flex-shrink-1 align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">1</div>
                    <div className="flex-shrink-0 flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">shrink item</div>
                    <div className="flex-grow-1 flex-shrink-1 align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
