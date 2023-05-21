import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InlineFlexDoc(props) {
    const code = {
        basic: `<div class="inline-flex">
    <div class="flex-1">1</div>
    <div class="flex-1">2</div>
    <div class="flex-1">3</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="inline-flex card-container orange-container">
        <div class="flex-1 h-4rem bg-orange-500 text-white font-bold text-center p-4 border-round">1</div>
        <div class="flex-1 h-4rem bg-orange-500 text-white font-bold text-center p-4 border-round mx-4">2</div>
        <div class="flex-1 h-4rem bg-orange-500 text-white font-bold text-center p-4 border-round">3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Displays the element as an inline level flex container.</p>
            </DocSectionText>
            <div className="card">
                <div className="inline-flex card-container orange-container">
                    <div className="flex-1 h-4rem bg-orange-500 text-white font-bold text-center p-4 border-round">1</div>
                    <div className="flex-1 h-4rem bg-orange-500 text-white font-bold text-center p-4 border-round mx-4">2</div>
                    <div className="flex-1 h-4rem bg-orange-500 text-white font-bold text-center p-4 border-round">3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
