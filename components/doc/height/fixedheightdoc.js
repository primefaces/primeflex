import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FixedHeightDoc(props) {
    const code = {
        basic: `<div>
    <div class="h-6rem">h-6rem</div>
    <div class="h-11rem">h-11rem</div>
    <div class="h-20rem">h-20rem</div>
    <div class="h-24rem">h-24rem</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-row flex-wrap align-items-center justify-content-center card-container yellow-container">
        <div class="h-6rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">h-6rem</div>
        <div class="h-11rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">h-11rem</div>
        <div class="h-20rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">h-20rem</div>
        <div class="h-24rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">h-24rem</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Various fixed height options are built-in based on rem units.</p>
            </DocSectionText>

            <div class="card">
                <div class="flex flex-row flex-wrap align-items-center justify-content-center card-container yellow-container">
                    <div class="h-6rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">h-6rem</div>
                    <div class="h-11rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">h-11rem</div>
                    <div class="h-20rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">h-20rem</div>
                    <div class="h-24rem border-round bg-yellow-500 text-gray-900 font-bold p-3 m-3 flex align-items-center justify-content-center">h-24rem</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
