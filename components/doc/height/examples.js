import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = {
        basic: `<div>
    <div class="w-12rem h-6rem">
        <div class="h-full">h-full</div>
    </div>
    <div class="w-12rem h-6rem">
        <div class="h-auto">h-auto</div>
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container blue-container">
        <div class="border-round bg-blue-100 w-12rem h-6rem p-3 m-3">
            <div class="h-full border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">h-full</div>
        </div>
        <div class="border-round bg-blue-100 w-12rem h-6rem p-3 m-3">
            <div class="h-auto border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">h-auto</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center card-container blue-container">
                    <div className="border-round bg-blue-100 w-12rem h-6rem p-3 m-3">
                        <div className="h-full border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">h-full</div>
                    </div>
                    <div className="border-round bg-blue-100 w-12rem h-6rem p-3 m-3">
                        <div className="h-auto border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">h-auto</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
