import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SingleSidePaddingDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="pt-5 bg-primary-100 w-12rem m-3 border-round">
        <div class="border-round-bottom bg-primary font-bold p-3 flex align-items-center justify-content-center">pt-5</div>
    </div>
    <div class="pr-8 bg-primary-100 w-12rem m-3 border-round">
        <div class="border-round-left bg-primary font-bold p-3 flex align-items-center justify-content-center">pr-8</div>
    </div>
    <div class="pb-3 bg-primary-100 w-12rem m-3 border-round">
        <div class="border-round-top bg-primary font-bold p-3 flex align-items-center justify-content-center">pb-3</div>
    </div>
    <div class="pl-6 bg-primary-100 w-12rem m-3 border-round">
        <div class="border-round-right bg-primary font-bold p-3 flex align-items-center justify-content-center">pl-6</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Padding can be specified on a specific edge.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="pt-5 bg-primary-100 w-12rem m-3 border-round">
                        <div className="border-round-bottom bg-primary font-bold p-3 flex align-items-center justify-content-center">pt-5</div>
                    </div>
                    <div className="pr-8 bg-primary-100 w-12rem m-3 border-round">
                        <div className="border-round-left bg-primary font-bold p-3 flex align-items-center justify-content-center">pr-8</div>
                    </div>
                    <div className="pb-3 bg-primary-100 w-12rem m-3 border-round">
                        <div className="border-round-top bg-primary font-bold p-3 flex align-items-center justify-content-center">pb-3</div>
                    </div>
                    <div className="pl-6 bg-primary-100 w-12rem m-3 border-round">
                        <div className="border-round-right bg-primary font-bold p-3 flex align-items-center justify-content-center">pl-6</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
