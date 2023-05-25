import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function HorizontalMarginDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="bg-primary-100 w-12rem m-3 border-round">
        <div class="mx-6 border-round bg-primary font-bold p-3 flex align-items-center justify-content-center">mx-6</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Same margin value can be defined at the left and right sides with shorthand classes.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="bg-primary-100 w-12rem m-3 border-round">
                        <div className="mx-6 border-round bg-primary font-bold p-3 flex align-items-center justify-content-center">mx-6</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
