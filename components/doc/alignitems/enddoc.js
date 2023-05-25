import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function EndDoc(props) {
    const code = `<div class="flex align-items-end flex-wrap" style="min-height: 200px">
    <div class="flex align-items-center justify-content-center bg-primary font-bold border-round m-2" style="min-width: 200px; min-height: 50px">1</div>
    <div class="flex align-items-center justify-content-center bg-primary font-bold border-round m-2" style="min-width: 200px; min-height: 150px">2</div>
    <div class="flex align-items-center justify-content-center bg-primary font-bold border-round m-2" style="min-width: 200px; min-height: 100px">3</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Items are located at the end of the container.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex align-items-end flex-wrap" style={{ minHeight: '200px' }}>
                    <div className="flex align-items-center justify-content-center bg-primary font-bold border-round m-2" style={{ minWidth: '200px', minHeight: '50px' }}>
                        1
                    </div>
                    <div className="flex align-items-center justify-content-center bg-primary font-bold border-round m-2" style={{ minWidth: '200px', minHeight: '150px' }}>
                        2
                    </div>
                    <div className="flex align-items-center justify-content-center bg-primary font-bold border-round m-2" style={{ minWidth: '200px', minHeight: '100px' }}>
                        3
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
