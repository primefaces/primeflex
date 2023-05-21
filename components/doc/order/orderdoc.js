import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function OrderDoc(props) {
    const code = {
        basic: `<div class="flex flex-wrap">
    <div class="flex-order-2 flex">1</div>
    <div class="flex-order-1 flex">2</div>
    <div class="flex-order-0 flex">3</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap card-container blue-container">
        <div class="flex-order-2 flex align-items-center justify-content-center w-4rem h-4rem bg-blue-500 font-bold text-white border-round m-2">1</div>
        <div class="flex-order-1 flex align-items-center justify-content-center w-4rem h-4rem bg-blue-500 font-bold text-white border-round m-2">2</div>
        <div class="flex-order-0 flex align-items-center justify-content-center w-4rem h-4rem bg-blue-500 font-bold text-white border-round m-2">3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Items can be given specific order regardless of their order at the document.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap card-container blue-container">
                    <div className="flex-order-2 flex align-items-center justify-content-center w-4rem h-4rem bg-blue-500 font-bold text-white border-round m-2">1</div>
                    <div className="flex-order-1 flex align-items-center justify-content-center w-4rem h-4rem bg-blue-500 font-bold text-white border-round m-2">2</div>
                    <div className="flex-order-0 flex align-items-center justify-content-center w-4rem h-4rem bg-blue-500 font-bold text-white border-round m-2">3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
