import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RowDoc(props) {
    const code = {
        basic: `<div class="flex flex-wrap flex-row">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-row flex-wrap card-container blue-container">
        <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-blue-500 font-bold text-white border-round m-2">1</div>
        <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-blue-500 font-bold text-white border-round m-2">2</div>
        <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-blue-500 font-bold text-white border-round m-2">3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Items are displayed horizontally.</p>
            </DocSectionText>

            <div className="card">
                <div className="flex flex-row flex-wrap card-container blue-container">
                    <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-blue-500 font-bold text-white border-round m-2">1</div>
                    <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-blue-500 font-bold text-white border-round m-2">2</div>
                    <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-blue-500 font-bold text-white border-round m-2">3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
