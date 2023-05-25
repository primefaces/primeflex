import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SpaceEvenlyDoc(props) {
    const code = `<div class="flex align-content-evenly flex-wrap"  style="min-height: 320px; max-width: 700px">
    <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" style="min-width: 200px; min-height: 50px">1</div>
    <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" style="min-width: 200px; min-height: 50px">2</div>
    <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" style="min-width: 200px; min-height: 50px">3</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Flex lines are distributed evenly with equal space around them.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex align-content-evenly flex-wrap" style={{ minHeight: '320px', maxHeight: '700px' }}>
                    <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" style={{ minWidth: '200px', minHeight: '50px' }}>
                        1
                    </div>
                    <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" style={{ minWidth: '200px', minHeight: '50px' }}>
                        2
                    </div>
                    <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" style={{ minWidth: '200px', minHeight: '50px' }}>
                        3
                    </div>
                    <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" style={{ minWidth: '200px', minHeight: '50px' }}>
                        4
                    </div>
                    <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2" style={{ minWidth: '200px', minHeight: '50px' }}>
                        5
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
