import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = {
        basic: `<div class="flex">
    <div class="surface-500 text-white" style="min-width: 200px; min-height: 100px">
        surface-500
    </div>
    <div class="bg-cyan-500 text-white" style="min-width: 200px; min-height: 100px">
        bg-cyan-500
    </div>
    <div class="bg-orange-500 text-white" style="min-width: 200px; min-height: 100px">
        bg-orange-500
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap md:justify-content-between justify-content-center card-container">
        <div class="surface-500 text-white font-bold border-round m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
            surface-500
        </div>
        <div class="bg-cyan-500 text-white font-bold border-round m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
            bg-cyan-500
        </div>
        <div class="bg-orange-500 text-white font-bold border-round m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
            bg-orange-500
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center card-container">
                    <div className="surface-500 text-white font-bold border-round m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        surface-500
                    </div>
                    <div className="bg-cyan-500 text-white font-bold border-round m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        bg-cyan-500
                    </div>
                    <div className="bg-orange-500 text-white font-bold border-round m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        bg-orange-500
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
