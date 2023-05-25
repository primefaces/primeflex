import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ShrinkDoc(props) {
    const code = `<div class="flex overflow-hidden">
    <div class="flex-grow-1 flex-shrink-1 flex align-items-center justify-content-center bg-primary font-bold p-4 m-3 border-round">1</div>
    <div class="flex-shrink-0 flex align-items-center justify-content-center bg-primary font-bold p-4 m-3 border-round">shrink item</div>
    <div class="flex-grow-1 flex-shrink-1 flex align-items-center justify-content-center bg-primary font-bold p-4 m-3 border-round">3</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Second item does not shrink while others do.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex overflow-hidden">
                    <div className="flex-grow-1 flex-shrink-1 align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">1</div>
                    <div className="flex-shrink-0 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">shrink item</div>
                    <div className="flex-grow-1 flex-shrink-1 align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
