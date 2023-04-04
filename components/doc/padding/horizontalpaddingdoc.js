import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function HorizontalPaddingDoc(props) {
    const code = {
        basic: `<div class="px-6">
    <div class="p-3">px-6</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container yellow-container">
        <div class="px-6 bg-yellow-100 w-12rem m-3 border-round">
            <div class="border-round bg-yellow-500 text-gray-900 font-bold p-3 flex align-items-center justify-content-center">px-6</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Same padding value can be defined at the left and right sides with shorthand classes.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center card-container yellow-container">
                    <div className="px-6 bg-yellow-100 w-12rem m-3 border-round">
                        <div className="border-round bg-yellow-500 text-gray-900 font-bold p-3 flex align-items-center justify-content-center">px-6</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
