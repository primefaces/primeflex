import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FixedWidthDoc(props) {
    const code = {
        basic: `<div class="w-26rem">
    <div class="w-6rem">w-6rem</div>
    <div class="w-11rem">w-11rem</div>
    <div class="w-20rem">w-20rem</div>
    <div class="w-24rem">w-24rem</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-column flex-wrap align-items-center justify-content-center card-container yellow-container">
        <div class="w-26rem">
            <div class="w-6rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">w-6rem</div>
            <div class="w-11rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">w-11rem</div>
            <div class="w-20rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">w-20rem</div>
            <div class="w-24rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">w-24rem</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Various fixed width options are built-in based on rem units.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-column flex-wrap align-items-center justify-content-center card-container yellow-container">
                    <div className="w-26rem">
                        <div className="w-6rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">w-6rem</div>
                        <div className="w-11rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">w-11rem</div>
                        <div className="w-20rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">w-20rem</div>
                        <div className="w-24rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">w-24rem</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
