import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function CenterDoc(props) {
    const code = `<div class="flex align-content-center flex-wrap" style="min-height: 200px">
    <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">1</div>
    <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">2</div>
    <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">3</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Flex lines are distributed at the center of the container.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex align-content-center flex-wrap" style={{ minHeight: '200px' }}>
                    <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">1</div>
                    <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">2</div>
                    <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
