import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = {
        basic: `<div class="flex...">
    <div class="relative">
        <div class="absolute top-0 left-0">1</div>
    </div>
    <div class="relative">
        <div class="absolute top-0 right-0">2</div>
    </div>
    <div class="relative">
        <div class="absolute bottom-0 right-0">3</div>
    </div>
    <div class="relative">
        <div class="absolute bottom-0 left-0">4</div>
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap gap-3 align-items-center justify-content-center card-container blue-container">
        <div class="relative bg-blue-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
            <div class="absolute top-0 left-0 bg-blue-500 text-white font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">1</div>
        </div>
        <div class="relative bg-blue-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
            <div class="absolute top-0 right-0 bg-blue-500 text-white font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">2</div>
        </div>
        <div class="relative bg-blue-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
            <div class="absolute bottom-0 right-0 bg-blue-500 text-white font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">3</div>
        </div>
        <div class="relative bg-blue-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
            <div class="absolute bottom-0 left-0 bg-blue-500 text-white font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">4</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap gap-3 align-items-center justify-content-center card-container blue-container">
                    <div className="relative bg-blue-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
                        <div className="absolute top-0 left-0 bg-blue-500 text-white font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">1</div>
                    </div>
                    <div className="relative bg-blue-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
                        <div className="absolute top-0 right-0 bg-blue-500 text-white font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">2</div>
                    </div>
                    <div className="relative bg-blue-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
                        <div className="absolute bottom-0 right-0 bg-blue-500 text-white font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">3</div>
                    </div>
                    <div className="relative bg-blue-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
                        <div className="absolute bottom-0 left-0 bg-blue-500 text-white font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">4</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
