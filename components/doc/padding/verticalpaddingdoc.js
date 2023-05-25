import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function VerticalPaddingDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="py-5 bg-primary-100 w-12rem m-3 border-round">
        <div class="border-round bg-primary font-bold p-3 flex align-items-center justify-content-center">py-5</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Same padding value can also be defined at the top and bottom sides with shorthand classes.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="py-5 bg-primary-100 w-12rem m-3 border-round">
                        <div className="border-round bg-primary font-bold p-3 flex align-items-center justify-content-center">py-5</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
