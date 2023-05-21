import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = {
        basic: `<div>
    <div class="text-500">text-500</div>
    <div class="text-cyan-500">text-cyan-500</div>
    <div class="text-orange-500">text-orange-500</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap md:justify-content-between justify-content-center card-container">
        <div class="text-500 w-12rem h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center">text-500</div>
        <div class="text-cyan-500 w-12rem h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center">text-cyan-500</div>
        <div class="text-orange-500 w-12rem h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center">text-orange-500</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center card-container">
                    <div className="text-500 w-12rem h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center">text-500</div>
                    <div className="text-cyan-500 w-12rem h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center">text-cyan-500</div>
                    <div className="text-orange-500 w-12rem h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center">text-orange-500</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
