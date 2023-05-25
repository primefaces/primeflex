import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FixedWidthDoc(props) {
    const code = `<div class="flex flex-column flex-wrap align-items-center justify-content-center">
    <div class="w-26rem">
        <div class="w-6rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">w-6rem</div>
        <div class="w-11rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">w-11rem</div>
        <div class="w-20rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">w-20rem</div>
        <div class="w-24rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">w-24rem</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Various fixed width options are built-in based on rem units.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-column flex-wrap align-items-center justify-content-center">
                    <div className="w-26rem">
                        <div className="w-6rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">w-6rem</div>
                        <div className="w-11rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">w-11rem</div>
                        <div className="w-20rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">w-20rem</div>
                        <div className="w-24rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">w-24rem</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
