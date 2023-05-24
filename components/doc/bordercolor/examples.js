import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap md:justify-content-between justify-content-center">
    <div class="border-500 surface-overlay border-3 border-round font-bold m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
        border-500
    </div>
    <div class="border-orange-500 surface-overlay border-3 border-round font-bold m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
        border-orange-500
    </div>
    <div class="border-primary-500 surface-overlay border-3 border-round font-bold m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
        border-primary-500
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center">
                    <div className="border-500 surface-overlay border-3 border-round font-bold m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        border-500
                    </div>
                    <div className="border-orange-500 surface-overlay border-3 border-round font-bold m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        border-orange-500
                    </div>
                    <div className="border-primary-500 surface-overlay border-3 border-round font-bold m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        border-primary-500
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
