import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SpaceAroundDoc(props) {
    const code = {
        basic: `<div class="flex justify-content-around flex-wrap">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex justify-content-around flex-wrap card-container indigo-container">
        <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2">1</div>
        <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2">2</div>
        <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2">3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Items are positioned with spaces between and around them.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex justify-content-around flex-wrap card-container indigo-container">
                    <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2">1</div>
                    <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2">2</div>
                    <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold text-white border-round m-2">3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
