import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="select-none bg-primary border-round p-3 m-3 flex align-items-center justify-content-center">select-none</div>
    <div class="select-text bg-primary border-round p-3 m-3 flex align-items-center justify-content-center">select-text</div>
    <div class="select-all bg-primary border-round p-3 m-3 flex align-items-center justify-content-center">select-all</div>
    <div class="select-auto bg-primary border-round p-3 m-3 flex align-items-center justify-content-center">select-auto</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="select-none bg-primary border-round p-3 m-3 flex align-items-center justify-content-center">select-none</div>
                    <div className="select-text bg-primary border-round p-3 m-3 flex align-items-center justify-content-center">select-text</div>
                    <div className="select-all bg-primary border-round p-3 m-3 flex align-items-center justify-content-center">select-all</div>
                    <div className="select-auto bg-primary border-round p-3 m-3 flex align-items-center justify-content-center">select-auto</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
