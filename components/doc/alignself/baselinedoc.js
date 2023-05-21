import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BaselineDoc(props) {
    const code = {
        basic: `<div class="flex align-items-stretch flex-wrap" style="min-height: 200px">
    <div style="min-width: 200px; min-height: 50px">1</div>
    <div class="align-self-baseline" style="min-width: 200px; min-height: 50px">2</div>
    <div style="min-width: 200px; min-height: 50px">3</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex align-items-stretch flex-wrap card-container indigo-container" style="min-height: 200px">
        <div class="flex align-items-center justify-content-center bg-indigo-500 font-bold text-white border-round m-2" style="min-width: 200px; min-height: 50px">1</div>
        <div class="align-self-baseline flex align-items-center justify-content-center bg-indigo-500 font-bold text-white border-round m-2" style="min-width: 200px; min-height: 50px">2</div>
        <div class="flex align-items-center justify-content-center bg-indigo-500 font-bold text-white border-round m-2" style="min-width: 200px; min-height: 50px">3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Item is located at the baseline of the container.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex align-items-stretch flex-wrap card-container indigo-container" style={{minHeight:'200px'}}>
                    <div className="flex align-items-center justify-content-center bg-indigo-500 font-bold text-white border-round m-2"  style={{ minWidth: '200px', minHeight: '50px' }}>1</div>
                    <div className="align-self-baseline flex align-items-center justify-content-center bg-indigo-500 font-bold text-white border-round m-2"  style={{ minWidth: '200px', minHeight: '50px' }}>2</div>
                    <div className="flex align-items-center justify-content-center bg-indigo-500 font-bold text-white border-round m-2"  style={{ minWidth: '200px', minHeight: '50px' }}>3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
