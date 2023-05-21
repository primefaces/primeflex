import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = {
        basic: `<div>
    <div class="border-solid border-blue-500">border-solid</div>
    <div class="border-dashed border-blue-500">border-dashed</div>
    <div class="border-dotted border-blue-500">border-dotted</div>
    <div class="border-double border-blue-500">border-double</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap md:justify-content-between justify-content-center card-container blue-container">
        <div class="border-solid border-blue-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-solid</div>
        <div class="border-dashed border-blue-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-dashed</div>
        <div class="border-dotted border-blue-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-dotted</div>
        <div class="border-double border-blue-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-double</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center card-container blue-container">
                    <div className="border-solid border-blue-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-solid</div>
                    <div className="border-dashed border-blue-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-dashed</div>
                    <div className="border-dotted border-blue-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-dotted</div>
                    <div className="border-double border-blue-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-double</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
