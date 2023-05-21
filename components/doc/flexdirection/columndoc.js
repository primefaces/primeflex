import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ColumnDoc(props) {
    const code = {
        basic: `<div class="flex flex-column">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-column card-container green-container">
        <div class="flex align-items-center justify-content-center h-4rem bg-green-500 font-bold text-white border-round m-2">1</div>
        <div class="flex align-items-center justify-content-center h-4rem bg-green-500 font-bold text-white border-round m-2">2</div>
        <div class="flex align-items-center justify-content-center h-4rem bg-green-500 font-bold text-white border-round m-2">3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Items are displayed vertically.</p>
            </DocSectionText>

            <div className="card">
                <div className="flex flex-column card-container green-container">
                    <div className="flex align-items-center justify-content-center h-4rem bg-green-500 font-bold text-white border-round m-2">1</div>
                    <div className="flex align-items-center justify-content-center h-4rem bg-green-500 font-bold text-white border-round m-2">2</div>
                    <div className="flex align-items-center justify-content-center h-4rem bg-green-500 font-bold text-white border-round m-2">3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
