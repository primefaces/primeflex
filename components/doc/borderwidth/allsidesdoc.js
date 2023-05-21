import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AllSidesDoc(props) {
    const code = {
        basic: `<div>
    <div class="border-none">border-none</div>
    <div class="border-1 border-blue-500">border-1</div>
    <div class="border-2 border-blue-500">border-2</div>
    <div class="border-3 border-blue-500">border-3</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap md:justify-content-between justify-content-center card-container blue-container">
        <div class="border-none w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-none</div>
        <div class="border-1 border-blue-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-1</div>
        <div class="border-2 border-blue-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-2</div>
        <div class="border-3 border-blue-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Widths of a border can be defined for all edges at once.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center card-container blue-container">
                    <div className="border-none w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-none</div>
                    <div className="border-1 border-blue-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-1</div>
                    <div className="border-2 border-blue-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-2</div>
                    <div className="border-3 border-blue-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
