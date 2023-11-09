import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RgbaDoc(props) {
    const code = `<div class="flex flex-wrap md:justify-content-between justify-content-center">
    <div class="bg-primary-500/40 font-bold border-round m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
        bg-primary-500/40
    </div>
    <div class="bg-cyan-500/70 font-bold border-round m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
        bg-cyan-500/70
    </div>
    <div class="bg-black-alpha-50 font-bold border-round m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
        bg-black-alpha-50
    </div>
    <div class="bg-black/30 font-bold border-round m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
        bg-black/30
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center">
                    <div className="bg-primary-500/40 font-bold border-round m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        bg-primary-500/40
                    </div>
                    <div className="bg-cyan-500/70 font-bold border-round m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        bg-cyan-500/70
                    </div>
                    <div className="bg-black-alpha-50 font-bold border-round m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        bg-black-alpha-50
                    </div>
                    <div className="bg-black/30 font-bold border-round m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        bg-black/30
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
