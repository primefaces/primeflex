import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SpecificSidesDoc(props) {
    const code1 = {
        basic: `<div>
    <div class="border-top-2 border-yellow-500">border-top-2</div>
    <div class="border-right-2 border-yellow-500">border-right-2</div>
    <div class="border-bottom-2 border-yellow-500">border-bottom-22</div>
    <div class="border-left-2 border-yellow-500">border-left-2</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap md:justify-content-between justify-content-center card-container yellow-container">
        <div class="border-top-2 border-yellow-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-top-2</div>
        <div class="border-right-2 border-yellow-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-right-2</div>
        <div class="border-bottom-2 border-yellow-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-bottom-2</div>
        <div class="border-left-2 border-yellow-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-left-2</div>
    </div>
</div>
`
    };
    const code2 = {
        basic: `<div>
    <div class="border-x-2 border-green-500">border-x-2</div>
    <div class="border-y-2 border-green-500">border-y-2</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap md:justify-content-start justify-content-center card-container green-container">
        <div class="border-x-2 border-green-500 w-12rem h-6rem surface-overlay font-bold m-2 flex align-items-center justify-content-center">border-x-2</div>
        <div class="border-y-2 border-green-500 w-12rem h-6rem surface-overlay font-bold m-2 flex align-items-center justify-content-center">border-y-2</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Widths of a border can be defined per edge as well.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center card-container yellow-container">
                    <div className="border-top-2 border-yellow-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-top-2</div>
                    <div className="border-right-2 border-yellow-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-right-2</div>
                    <div className="border-bottom-2 border-yellow-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-bottom-2</div>
                    <div className="border-left-2 border-yellow-500 w-12rem h-6rem m-2 surface-overlay font-bold flex align-items-center justify-content-center">border-left-2</div>
                </div>
            </div>
            <DocSectionCode code={code1} />
            <div className="card">
                <div className="flex flex-wrap md:justify-content-start justify-content-center card-container green-container">
                    <div className="border-x-2 border-green-500 w-12rem h-6rem surface-overlay font-bold m-2 flex align-items-center justify-content-center">border-x-2</div>
                    <div className="border-y-2 border-green-500 w-12rem h-6rem surface-overlay font-bold m-2 flex align-items-center justify-content-center">border-y-2</div>
                </div>
            </div>
            <DocSectionCode code={code2} />
        </>
    );
}
