import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex align-items-center justify-content-center">
    <div class="cursor-auto flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">auto</div>
    <div class="cursor-pointer flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">pointer</div>
    <div class="cursor-wait flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">wait</div>
    <div class="cursor-move flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">move</div>
    <div className="cursor-help flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">help</div>
    <div className="cursor-zoom-out flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">zoom out</div>
    <div className="cursor-not-allowed flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">not allowed</div>

</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex align-items-center justify-content-center">
                    <div className="cursor-auto flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">auto</div>
                    <div className="cursor-pointer flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">pointer</div>
                    <div className="cursor-wait flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">wait</div>
                    <div className="cursor-move flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">move</div>
                    <div className="cursor-help flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">help</div>
                    <div className="cursor-zoom-out flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">zoom out</div>
                    <div className="cursor-not-allowed flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">not allowed</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
