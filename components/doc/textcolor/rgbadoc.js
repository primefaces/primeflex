import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RgbaDoc(props) {
    const code = `<div class="flex flex-wrap md:justify-content-between justify-content-center">
    <div class="text-primary-500/40 h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center px-3">text-primary-500/40</div>
    <div class="text-cyan-300/70 h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center px-3">text-cyan-500/60</div>
    <div class="text-pink-400/80 h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center px-3">text-black-alpha-40</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center">
                    <div className="text-primary-500/40 h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center px-3">text-primary-500/40</div>
                    <div className="text-cyan-300/70 h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center px-3">text-cyan-300/70</div>
                    <div className="text-pink-400/80 h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center px-3">text-pink-400/80</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
