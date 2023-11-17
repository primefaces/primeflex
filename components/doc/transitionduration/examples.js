import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="transition-colors transition-duration-100 bg-primary hover:bg-primary-700
        flex align-items-center justify-content-center font-bold border-round cursor-pointer m-2 px-5 py-3">
        Hover me
    </div>
    <div class="transition-colors transition-duration-500 bg-primary hover:bg-primary-700
        flex align-items-center justify-content-center font-bold border-round cursor-pointer m-2 px-5 py-3">
        Hover me
    </div>
    <div class="transition-colors transition-duration-1000 bg-primary hover:bg-primary-700
        flex align-items-center justify-content-center font-bold border-round cursor-pointer m-2 px-5 py-3">
        Hover me
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div
                        className="transition-colors transition-duration-100 bg-primary hover:bg-primary-700
                        flex align-items-center justify-content-center font-bold border-round cursor-pointer m-2 px-5 py-3"
                    >
                        Hover me
                    </div>
                    <div
                        className="transition-colors transition-duration-500 bg-primary hover:bg-primary-700
                        flex align-items-center justify-content-center font-bold border-round cursor-pointer m-2 px-5 py-3"
                    >
                        Hover me
                    </div>
                    <div
                        className="transition-colors transition-duration-1000 bg-primary hover:bg-primary-700
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
