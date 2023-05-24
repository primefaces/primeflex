import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap md:justify-content-between justify-content-center">
    <div class="border-solid border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-solid</div>
    <div class="border-dashed border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-dashed</div>
    <div class="border-dotted border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-dotted</div>
    <div class="border-double border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-double</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center">
                    <div className="border-solid border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-solid</div>
                    <div className="border-dashed border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-dashed</div>
                    <div className="border-dotted border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-dotted</div>
                    <div className="border-double border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-double</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
