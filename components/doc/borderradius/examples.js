import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code1 = `<div class="flex flex-wrap justify-content-center">
    <div class="border-round w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">border-round</div>
    <div class="border-round-left w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">border-round-left</div>
</div>
<div class="flex flex-wrap justify-content-center">
    <div class="border-round-top w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">border-round-top</div>
    <div class="border-round-bottom w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">border-round-bottom</div>
    <div class="border-round-right w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">border-round-right</div>
</div>
`;
    const code2 = `<div class="flex flex-wrap justify-content-center">
    <div class="border-circle w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">oval</div>
    <div class="border-circle w-6rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">circle</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap justify-content-center">
                    <div className="border-round w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">border-round</div>
                    <div className="border-round-left w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">border-round-left</div>
                </div>
                <div className="flex flex-wrap justify-content-center">
                    <div className="border-round-top w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">border-round-top</div>
                    <div className="border-round-bottom w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">border-round-bottom</div>
                    <div className="border-round-right w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">border-round-right</div>
                </div>
            </div>
            <DocSectionCode code={code1} />
            <div className="card">
                <div className="flex flex-wrap justify-content-center">
                    <div className="border-circle w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">oval</div>
                    <div className="border-circle w-6rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">circle</div>
                </div>
            </div>

            <DocSectionCode code={code2} />
        </>
    );
}
