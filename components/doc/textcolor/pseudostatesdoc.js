import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PseudoStatesDoc(props) {
    const code = `<div class="flex flex-wrap md:justify-content-between justify-content-center">
    <div class="text-500 hover:text-700 w-12rem h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center">hover:text-700</div>
    <div class="text-cyan-500 hover:text-cyan-700 w-12rem h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center">hover:text-cyan-700</div>
    <div class="text-orange-500 hover:text-orange-700 w-12rem h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center">hover:text-orange-700</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Focus, Hover and Active states are available with the <i>focus:</i>, <i>hover:</i>, <i>active:</i> prefixes respectively.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center">
                    <div className="text-500 hover:text-700 w-12rem h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center">hover:text-700</div>
                    <div className="text-cyan-500 hover:text-cyan-700 w-12rem h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center">hover:text-cyan-700</div>
                    <div className="text-orange-500 hover:text-orange-700 w-12rem h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center">hover:text-orange-700</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
