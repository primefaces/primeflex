import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InlineDoc(props) {
    const code = {
        basic: ` <div>
    <div class="inline">1</div>
    <div class="inline">2</div>
    <div class="inline">3</div>
</div>
    `,
        expanded: `<div class="card py-6">
    <div class="card-container green-container p-0">
        <div class="inline w-4rem h-4rem bg-green-500 text-white font-bold text-center p-4 border-round mx-4">1</div>
        <div class="inline w-4rem h-4rem bg-green-500 text-white font-bold text-center p-4 border-round">2</div>
        <div class="inline w-4rem h-4rem bg-green-500 text-white font-bold text-center p-4 border-round mx-4">3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>An inline element does not start on a new line and allocates width as necessary.</p>
            </DocSectionText>
            <div className="card py-6">
                <div className="card-container green-container p-0">
                    <div className="inline bg-green-500 text-white font-bold text-center p-4 border-round mx-4">1</div>
                    <div className="inline bg-green-500 text-white font-bold text-center p-4 border-round">2</div>
                    <div className="inline bg-green-500 text-white font-bold text-center p-4 border-round mx-4">3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
