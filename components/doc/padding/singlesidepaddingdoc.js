import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SingleSidePaddingDoc(props) {
    const code = {
        basic: `<div>
    <div class="pt-5">
        <div class="p-3">pt-5</div>
    </div>
    <div class="pr-8">
        <div class="p-3">pr-8</div>
    </div>
    <div class="pb-3">
        <div class="p-3">pb-3</div>
    </div>
    <div class="pl-6 bg-blue-100 w-12rem m-3 border-round">
        <div class="p-3">pl-6</div>
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container blue-container">
        <div class="pt-5 bg-blue-100 w-12rem m-3 border-round">
            <div class="border-round-bottom bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">pt-5</div>
        </div>
        <div class="pr-8 bg-blue-100 w-12rem m-3 border-round">
            <div class="border-round-left bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">pr-8</div>
        </div>
        <div class="pb-3 bg-blue-100 w-12rem m-3 border-round">
            <div class="border-round-top bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">pb-3</div>
        </div>
        <div class="pl-6 bg-blue-100 w-12rem m-3 border-round">
            <div class="border-round-right bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">pl-6</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Padding can be specified on a specific edge.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center card-container blue-container">
                    <div className="pt-5 bg-blue-100 w-12rem m-3 border-round">
                        <div className="border-round-bottom bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">pt-5</div>
                    </div>
                    <div className="pr-8 bg-blue-100 w-12rem m-3 border-round">
                        <div className="border-round-left bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">pr-8</div>
                    </div>
                    <div className="pb-3 bg-blue-100 w-12rem m-3 border-round">
                        <div className="border-round-top bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">pb-3</div>
                    </div>
                    <div className="pl-6 bg-blue-100 w-12rem m-3 border-round">
                        <div className="border-round-right bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">pl-6</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
