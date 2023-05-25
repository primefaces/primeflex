import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FixedHeightDoc(props) {
    const code = `<div class="flex flex-row flex-wrap align-items-center justify-content-center">
    <div class="h-6rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">h-6rem</div>
    <div class="h-11rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">h-11rem</div>
    <div class="h-20rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">h-20rem</div>
    <div class="h-24rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">h-24rem</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Various fixed height options are built-in based on rem units.</p>
            </DocSectionText>

            <div class="card">
                <div class="flex flex-row flex-wrap align-items-center justify-content-center">
                    <div class="h-6rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">h-6rem</div>
                    <div class="h-11rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">h-11rem</div>
                    <div class="h-20rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">h-20rem</div>
                    <div class="h-24rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">h-24rem</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
