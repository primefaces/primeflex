import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function HorizontalMarginDoc(props) {
    const code = {
        basic: `<div class="m-3">
    <div class="mx-6">mx-6</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container yellow-container">
        <div class="bg-yellow-100 w-12rem m-3 border-round">
            <div class="mx-6 border-round bg-yellow-500 text-gray-900 font-bold p-3 flex align-items-center justify-content-center">mx-6</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Same margin value can be defined at the left and right sides with shorthand classes.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center card-container yellow-container">
                    <div className="bg-yellow-100 w-12rem m-3 border-round">
                        <div className="mx-6 border-round bg-yellow-500 text-gray-900 font-bold p-3 flex align-items-center justify-content-center">mx-6</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
