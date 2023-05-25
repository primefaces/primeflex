import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function HorizontalPaddingDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="px-6 bg-primary-100 w-12rem m-3 border-round">
        <div class="border-round bg-primary font-bold p-3 flex align-items-center justify-content-center">px-6</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Same padding value can be defined at the left and right sides with shorthand classes.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="px-6 bg-primary-100 w-12rem m-3 border-round">
                        <div className="border-round bg-primary font-bold p-3 flex align-items-center justify-content-center">px-6</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
