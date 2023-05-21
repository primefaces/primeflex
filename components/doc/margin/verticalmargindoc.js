import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function VerticalMarginDoc(props) {
    const code = {
        basic: `<div class="m-3">
    <div class="my-5">my-5</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container green-container">
        <div class="bg-green-100 w-12rem m-3 border-round">
            <div class="my-5 border-round bg-green-500 text-white font-bold p-3 flex align-items-center justify-content-center">my-5</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Same margin value can also be defined at the top and bottom sides with shorthand classes.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center card-container green-container">
                    <div className="bg-green-100 w-12rem m-3 border-round">
                        <div className="my-5 border-round bg-green-500 text-white font-bold p-3 flex align-items-center justify-content-center">my-5</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
