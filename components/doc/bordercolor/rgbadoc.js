import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RgbaDoc(props) {
    const code = `<div class="flex flex-wrap md:justify-content-between justify-content-center">
    <div class="border-primary-500/40 surface-overlay border-3 border-round font-bold m-2 flex align-items-center justify-content-center px-3" style={{ minWidth: '200px', minHeight: '100px' }}>
        border-primary-500/40
    </div>
    <div class="border-orange-500/60 surface-overlay border-3 border-round font-bold m-2 flex align-items-center justify-content-center px-3" style={{ minWidth: '200px', minHeight: '100px' }}>
        border-orange-500/60
    </div>
    <div class="border-black-alpha-50 surface-overlay border-3 border-round font-bold m-2 flex align-items-center justify-content-center px-3" style={{ minWidth: '200px', minHeight: '100px' }}>
        border-black-alpha-50
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center">
                    <div className="border-primary-500/40 surface-overlay border-3 border-round font-bold m-2 flex align-items-center justify-content-center px-3" style={{ minWidth: '200px', minHeight: '100px' }}>
                        border-primary-500/40
                    </div>
                    <div className="border-orange-500/60 surface-overlay border-3 border-round font-bold m-2 flex align-items-center justify-content-center px-3" style={{ minWidth: '200px', minHeight: '100px' }}>
                        border-orange-500/60
                    </div>
                    <div className="border-black-alpha-50 surface-overlay border-3 border-round font-bold m-2 flex align-items-center justify-content-center px-3" style={{ minWidth: '200px', minHeight: '100px' }}>
                        border-black-alpha-50
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
