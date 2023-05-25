import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ColumnReverseDoc(props) {
    const code = `<div class="flex flex-column-reverse">
    <div class="flex align-items-center justify-content-center h-4rem bg-primary font-bold border-round m-2">1</div>
    <div class="flex align-items-center justify-content-center h-4rem bg-primary font-bold border-round m-2">2</div>
    <div class="flex align-items-center justify-content-center h-4rem bg-primary font-bold border-round m-2">3</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Items are displayed vertically but in reverse order.</p>
            </DocSectionText>

            <div className="card">
                <div className="flex flex-column-reverse">
                    <div className="flex align-items-center justify-content-center h-4rem bg-primary font-bold border-round m-2">1</div>
                    <div className="flex align-items-center justify-content-center h-4rem bg-primary font-bold border-round m-2">2</div>
                    <div className="flex align-items-center justify-content-center h-4rem bg-primary font-bold border-round m-2">3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
