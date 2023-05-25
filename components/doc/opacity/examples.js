import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex align-items-center justify-content-center">
    <div class="opacity-10 flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">opacity-10</div>
    <div class="opacity-40 flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">opacity-40</div>
    <div class="opacity-70 flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">opacity-70</div>
    <div class="opacity-100 flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">opacity-100</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex align-items-center justify-content-center">
                    <div className="opacity-10 flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">opacity-10</div>
                    <div className="opacity-40 flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">opacity-40</div>
                    <div className="opacity-70 flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">opacity-70</div>
                    <div className="opacity-100 flex align-items-center justify-content-center border-round bg-primary p-3 m-3 font-bold">opacity-100</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
