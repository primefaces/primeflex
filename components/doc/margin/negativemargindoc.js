import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NegativeMarginDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="bg-primary-100 w-12rem m-3 border-round">
        <div class="-mt-5 border-round-bottom bg-primary font-bold p-3 flex align-items-center justify-content-center">-mt-5</div>
    </div>
    <div class="bg-primary-100 w-12rem m-3 border-round">
        <div class="-mr-8 border-round-left bg-primary font-bold p-3 flex align-items-center justify-content-center">-mr-8</div>
    </div>
    <div class="bg-primary-100 w-12rem m-3 border-round">
        <div class="-mb-3 border-round-top bg-primary font-bold p-3 flex align-items-center justify-content-center">-mb-3</div>
    </div>
    <div class="bg-primary-100 w-12rem m-3 border-round">
        <div class="-ml-6 border-round-right bg-primary font-bold p-3 flex align-items-center justify-content-center">-ml-6</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Adding <i>-</i> in front of a margin class converts the value to negative.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="bg-primary-100 w-12rem m-3 border-round">
                        <div className="-mt-5 border-round-bottom bg-primary font-bold p-3 flex align-items-center justify-content-center">-mt-5</div>
                    </div>
                    <div className="bg-primary-100 w-12rem m-3 border-round">
                        <div className="-mr-8 border-round-left bg-primary font-bold p-3 flex align-items-center justify-content-center">-mr-8</div>
                    </div>
                    <div className="bg-primary-100 w-12rem m-3 border-round">
                        <div className="-mb-3 border-round-top bg-primary font-bold p-3 flex align-items-center justify-content-center">-mb-3</div>
                    </div>
                    <div className="bg-primary-100 w-12rem m-3 border-round">
                        <div className="-ml-6 border-round-right bg-primary font-bold p-3 flex align-items-center justify-content-center">-ml-6</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
