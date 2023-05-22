import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = {
        basic: `<div class="transition-colors transition-duration-100 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900">
    Hover me
</div>
<div class="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900">
    Hover me
</div>
<div class="transition-colors transition-duration-1000 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900">
    Hover me
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container blue-container">
        <div class="transition-colors transition-duration-100 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
            flex align-items-center justify-content-center font-bold border-round cursor-pointer m-2 px-5 py-3">
            Hover me
        </div>
        <div class="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
            flex align-items-center justify-content-center font-bold border-round cursor-pointer m-2 px-5 py-3">
            Hover me
        </div>
        <div class="transition-colors transition-duration-1000 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
            flex align-items-center justify-content-center font-bold border-round cursor-pointer m-2 px-5 py-3">
            Hover me
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div class="card">
                <div class="flex flex-wrap align-items-center justify-content-center card-container blue-container">
                    <div
                        class="transition-colors transition-duration-100 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
                        flex align-items-center justify-content-center font-bold border-round cursor-pointer m-2 px-5 py-3"
                    >
                        Hover me
                    </div>
                    <div
                        class="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
                        flex align-items-center justify-content-center font-bold border-round cursor-pointer m-2 px-5 py-3"
                    >
                        Hover me
                    </div>
                    <div
                        class="transition-colors transition-duration-1000 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
                        flex align-items-center justify-content-center font-bold border-round cursor-pointer m-2 px-5 py-3"
                    >
                        Hover me
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
