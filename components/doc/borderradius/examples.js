import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code1 = {
        basic: `<div>
    <div class="flex">
        <div class="border-round">border-round</div>
        <div class="border-round-left">border-round-left</div>
    </div>
    <div class="flex">
        <div class="border-round-top">border-round-top</div>
        <div class="border-round-bottom">border-round-bottom</div>
        <div class="border-round-right">border-round-right</div>
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="card-container blue-container">
        <div class="flex flex-wrap justify-content-center">
            <div class="border-round w-12rem h-6rem m-2 bg-blue-500 text-white font-bold flex align-items-center justify-content-center">border-round</div>
            <div class="border-round-left w-12rem h-6rem m-2 bg-blue-500 text-white font-bold flex align-items-center justify-content-center">border-round-left</div>
        </div>
        <div class="flex flex-wrap justify-content-center">
            <div class="border-round-top w-12rem h-6rem m-2 bg-blue-500 text-white font-bold flex align-items-center justify-content-center">border-round-top</div>
            <div class="border-round-bottom w-12rem h-6rem m-2 bg-blue-500 text-white font-bold flex align-items-center justify-content-center">border-round-bottom</div>
            <div class="border-round-right w-12rem h-6rem m-2 bg-blue-500 text-white font-bold flex align-items-center justify-content-center">border-round-right</div>
        </div>
    </div>
</div>
`
    };
    const code2 = {
        basic: `<div>
    <div class="flex">
        <div class="border-circle w-12rem h-6rem">oval</div>
        <div class="border-circle w-6rem h-6rem">circle</div>
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="card-container yellow-container">
        <div class="flex flex-wrap justify-content-center">
            <div class="border-circle w-12rem h-6rem m-2 bg-yellow-500 text-gray-900 font-bold flex align-items-center justify-content-center">oval</div>
            <div class="border-circle w-6rem h-6rem m-2 bg-yellow-500 text-gray-900 font-bold flex align-items-center justify-content-center">circle</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="card-container blue-container">
                    <div className="flex flex-wrap justify-content-center">
                        <div className="border-round w-12rem h-6rem m-2 bg-blue-500 text-white font-bold flex align-items-center justify-content-center">border-round</div>
                        <div className="border-round-left w-12rem h-6rem m-2 bg-blue-500 text-white font-bold flex align-items-center justify-content-center">border-round-left</div>
                    </div>
                    <div className="flex flex-wrap justify-content-center">
                        <div className="border-round-top w-12rem h-6rem m-2 bg-blue-500 text-white font-bold flex align-items-center justify-content-center">border-round-top</div>
                        <div className="border-round-bottom w-12rem h-6rem m-2 bg-blue-500 text-white font-bold flex align-items-center justify-content-center">border-round-bottom</div>
                        <div className="border-round-right w-12rem h-6rem m-2 bg-blue-500 text-white font-bold flex align-items-center justify-content-center">border-round-right</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code1} />
            <div className="card">
                <div className="card-container yellow-container">
                    <div className="flex flex-wrap justify-content-center">
                        <div className="border-circle w-12rem h-6rem m-2 bg-yellow-500 text-gray-900 font-bold flex align-items-center justify-content-center">oval</div>
                        <div className="border-circle w-6rem h-6rem m-2 bg-yellow-500 text-gray-900 font-bold flex align-items-center justify-content-center">circle</div>
                    </div>
                </div>
            </div>

            <DocSectionCode code={code2} />
        </>
    );
}
