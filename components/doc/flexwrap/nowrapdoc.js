import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NoWrapDoc(props) {
    const code = {
        basic: `<div class="flex flex-nowrap" style="max-width: 500px">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap card-container green-container" style="max-width: 500px">
        <div class="flex align-items-center justify-content-center bg-green-500 font-bold text-white m-2 border-round" style="min-width: 150px; min-height: 100px">1</div>
        <div class="flex align-items-center justify-content-center bg-green-500 font-bold text-white m-2 border-round" style="min-width: 150px; min-height: 100px">2</div>
        <div class="flex align-items-center justify-content-center bg-green-500 font-bold text-white m-2 border-round" style="min-width: 150px; min-height: 100px">3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Flexible items do not wrap and keep their position.</p>
            </DocSectionText>

            <div className="card">
                <div className="flex flex-wrap card-container green-container" style={{ maxWidth: '500px' }}>
                    <div className="flex align-items-center justify-content-center bg-green-500 font-bold text-white m-2 border-round" style={{ minWidth: '150px', minHeight: '100px' }}>
                        1
                    </div>
                    <div className="flex align-items-center justify-content-center bg-green-500 font-bold text-white m-2 border-round" style={{ minWidth: '150px', minHeight: '100px' }}>
                        2
                    </div>
                    <div className="flex align-items-center justify-content-center bg-green-500 font-bold text-white m-2 border-round" style={{ minWidth: '150px', minHeight: '100px' }}>
                        3
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
