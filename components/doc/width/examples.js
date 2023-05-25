import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="border-round bg-primary-100 w-12rem p-3 m-3">
        <div class="w-full border-round bg-primary font-bold p-3 flex align-items-center justify-content-center">w-full</div>
    </div>
    <div class="border-round bg-primary-100 w-12rem p-3 m-3">
        <div class="w-auto border-round bg-primary font-bold p-3 flex align-items-center justify-content-center">w-auto</div>
    </div>
    <div class="border-round bg-primary-100 w-12rem p-3 m-3">
        <div class="w-min border-round bg-primary font-bold p-3 flex align-items-center justify-content-center">w-min</div>
    </div>
    <div class="border-round bg-primary-100 w-12rem p-3 m-3">
        <div class="w-max border-round bg-primary font-bold p-3 flex align-items-center justify-content-center">w-max</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="border-round bg-primary-100 w-12rem p-3 m-3">
                        <div className="w-full border-round bg-primary font-bold p-3 flex align-items-center justify-content-center">w-full</div>
                    </div>
                    <div className="border-round bg-primary-100 w-12rem p-3 m-3">
                        <div className="w-auto border-round bg-primary font-bold p-3 flex align-items-center justify-content-center">w-auto</div>
                    </div>
                    <div className="border-round bg-primary-100 w-12rem p-3 m-3">
                        <div className="w-min border-round bg-primary font-bold p-3 flex align-items-center justify-content-center">w-min</div>
                    </div>
                    <div className="border-round bg-primary-100 w-12rem p-3 m-3">
                        <div className="w-max border-round bg-primary font-bold p-3 flex align-items-center justify-content-center">w-max</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
