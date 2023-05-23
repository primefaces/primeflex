import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InlineFlexDoc(props) {
    const code = `<div class="inline-flex">
    <div class="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round">1</div>
    <div class="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round mx-4">2</div>
    <div class="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round">3</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Displays the element as an inline level flex container.</p>
            </DocSectionText>
            <div className="card">
                <div className="inline-flex">
                    <div className="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round">1</div>
                    <div className="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round mx-4">2</div>
                    <div className="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round">3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
