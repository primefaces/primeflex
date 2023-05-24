import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SpecificSidesDoc(props) {
    const code1 = `<div class="flex flex-wrap md:justify-content-between justify-content-center">
    <div class="border-top-2 border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-top-2</div>
    <div class="border-right-2 border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-right-2</div>
    <div class="border-bottom-2 border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-bottom-2</div>
    <div class="border-left-2 border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-left-2</div>
</div>
`;
    const code2 = `<div class="flex flex-wrap md:justify-content-start justify-content-center">
    <div class="border-x-2 border-primary-500 w-12rem h-6rem surface-overlay font-bold m-2 flex align-items-center justify-content-center">border-x-2</div>
    <div class="border-y-2 border-primary-500 w-12rem h-6rem surface-overlay font-bold m-2 flex align-items-center justify-content-center">border-y-2</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Widths of a border can be defined per edge as well.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center">
                    <div className="border-top-2 border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-top-2</div>
                    <div className="border-right-2 border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-right-2</div>
                    <div className="border-bottom-2 border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-bottom-2</div>
                    <div className="border-left-2 border-primary-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-left-2</div>
                </div>
            </div>
            <DocSectionCode code={code1} />
            <div className="card">
                <div className="flex flex-wrap md:justify-content-start justify-content-center">
                    <div className="border-x-2 border-primary-500 w-12rem h-6rem surface-overlay font-bold m-2 flex align-items-center justify-content-center">border-x-2</div>
                    <div className="border-y-2 border-primary-500 w-12rem h-6rem surface-overlay font-bold m-2 flex align-items-center justify-content-center">border-y-2</div>
                </div>
            </div>
            <DocSectionCode code={code2} />
        </>
    );
}
