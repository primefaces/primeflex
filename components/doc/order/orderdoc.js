import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function OrderDoc(props) {
    const code = `<div class="flex flex-wrap">
    <div class="flex-order-2 flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">1</div>
    <div class="flex-order-1 flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">2</div>
    <div class="flex-order-0 flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">3</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Items can be given specific order regardless of their order at the document.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap">
                    <div className="flex-order-2 flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">1</div>
                    <div className="flex-order-1 flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">2</div>
                    <div className="flex-order-0 flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
