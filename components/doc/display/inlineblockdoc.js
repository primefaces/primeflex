import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InlineBlockDoc(props) {
    const code = {
        basic: `<div>
    <div class="inline-block">1</div>
    <div class="inline-block">2</div>
    <div class="inline-block">3</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="card-container purple-container">
        <div class="inline-block w-4rem h-4rem bg-purple-500 text-white font-bold text-center p-4 border-round">1</div>
        <div class="inline-block w-4rem h-4rem bg-purple-500 text-white font-bold text-center p-4 border-round mx-4">2</div>
        <div class="inline-block w-4rem h-4rem bg-purple-500 text-white font-bold text-center p-4 border-round">3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Inline block is similar to an inline element but properties like width, height and top bottom paddings/margins are respected.</p>
            </DocSectionText>
            <div className="card">
                <div className="card-container purple-container">
                    <div className="inline-block w-4rem h-4rem bg-purple-500 text-white font-bold text-center p-4 border-round">1</div>
                    <div className="inline-block w-4rem h-4rem bg-purple-500 text-white font-bold text-center p-4 border-round mx-4">2</div>
                    <div className="inline-block w-4rem h-4rem bg-purple-500 text-white font-bold text-center p-4 border-round">3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
