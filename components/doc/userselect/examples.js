import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = {
        basic: `<div class="select-none">select-none</div>
<div class="select-text">select-text</div>
<div class="select-all">select-all</div>
<div class="select-auto">select-auto</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container blue-container">
        <div class="select-none bg-blue-500 text-white border-round p-3 m-3 flex align-items-center justify-content-center">select-none</div>
        <div class="select-text bg-blue-500 text-white border-round p-3 m-3 flex align-items-center justify-content-center">select-text</div>
        <div class="select-all bg-blue-500 text-white border-round p-3 m-3 flex align-items-center justify-content-center">select-all</div>
        <div class="select-auto bg-blue-500 text-white border-round p-3 m-3 flex align-items-center justify-content-center">select-auto</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center card-container blue-container">
                    <div className="select-none bg-blue-500 text-white border-round p-3 m-3 flex align-items-center justify-content-center">select-none</div>
                    <div className="select-text bg-blue-500 text-white border-round p-3 m-3 flex align-items-center justify-content-center">select-text</div>
                    <div className="select-all bg-blue-500 text-white border-round p-3 m-3 flex align-items-center justify-content-center">select-all</div>
                    <div className="select-auto bg-blue-500 text-white border-round p-3 m-3 flex align-items-center justify-content-center">select-auto</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
