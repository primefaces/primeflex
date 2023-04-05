import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function HiddenDoc(props) {
    const code = {
        basic:`<div class="flex ...">
    <div class="hidden">1</div>
    <div>2</div>
    <div>3</div>
</div>
    `,
    expanded:`<div class="card">
    <div class="card-container blue-container flex align-items-center justify-content-start">
        <div class="hidden w-4rem h-4rem bg-blue-500 text-white font-bold p-4 border-round mr-3">1</div>
        <div class="w-4rem h-4rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-4 border-round mr-3">2</div>
        <div class="w-4rem h-4rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-4 border-round">3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A hidden element is not visible and does not allocate space.</p>
            </DocSectionText>
                <div className="card">
                    <div className="card-container blue-container flex align-items-center justify-content-start">
                        <div className="hidden w-4rem h-4rem bg-blue-500 text-white font-bold p-4 border-round mr-3">1</div>
                        <div className="w-4rem h-4rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-4 border-round mr-3">2</div>
                        <div className="w-4rem h-4rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-4 border-round">3</div>
                    </div>
                </div>
            <DocSectionCode code={code} />
        </>
    );
}