import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap justify-content-center" style="min-height: 200px">
    <div class="z-5 relative flex align-items-center justify-content-center p-4 bg-primary font-bold border-round shadow-1" style="width: 100px; height: 100px; left:125px">z-5</div>
    <div class="z-4 relative flex align-items-center justify-content-center p-4 bg-primary font-bold border-round shadow-1" style="width: 100px; height: 100px; left:100px; top:10px">z-4</div>
    <div class="z-3 relative flex align-items-center justify-content-center p-4 bg-primary font-bold border-round shadow-1" style="width: 100px; height: 100px; left:75px; top:20px">z-3</div>
    <div class="z-2 relative flex align-items-center justify-content-center p-4 bg-primary font-bold border-round shadow-1" style="width: 100px; height: 100px; left:50px; top:30px">z-2</div>
    <div class="z-1 relative flex align-items-center justify-content-center p-4 bg-primary font-bold border-round shadow-1" style="width: 100px; height: 100px; left:25px; top:40px">z-1</div>
    <div class="z-0 relative flex align-items-center justify-content-center p-4 bg-primary font-bold border-round shadow-1" style="width: 100px; height: 100px; top:50px">z-0</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>

            <div className="card">
                <div className="flex flex-wrap justify-content-center" style={{ minHeight: '200px' }}>
                    <div className="z-5 relative flex align-items-center justify-content-center p-4 bg-primary font-bold border-round shadow-1" style={{ width: '100px', height: '100px', left: '125px' }}>
                        z-5
                    </div>
                    <div className="z-4 relative flex align-items-center justify-content-center p-4 bg-primary font-bold border-round shadow-1" style={{ width: '100px', height: '100px', left: '100px', top: '10px' }}>
                        z-4
                    </div>
                    <div className="z-3 relative flex align-items-center justify-content-center p-4 bg-primary font-bold border-round shadow-1" style={{ width: '100px', height: '100px', left: '75px', top: '20px' }}>
                        z-3
                    </div>
                    <div className="z-2 relative flex align-items-center justify-content-center p-4 bg-primary font-bold border-round shadow-1" style={{ width: '100px', height: '100px', left: '50px', top: '30px' }}>
                        z-2
                    </div>
                    <div className="z-1 relative flex align-items-center justify-content-center p-4 bg-primary font-bold border-round shadow-1" style={{ width: '100px', height: '100px', left: '25px', top: '40px' }}>
                        z-1
                    </div>
                    <div className="z-0 relative flex align-items-center justify-content-center p-4 bg-primary font-bold border-round shadow-1" style={{ width: '100px', height: '100px', top: '50px' }}>
                        z-0
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
