import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function OffsetDoc(props) {
    const code = `<div class="grid">
    <div class="col-6 col-offset-3">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">6</div>
    </div>
</div>

<div class="grid">
    <div class="col-4">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">4</div>
    </div>
    <div class="col-4 col-offset-4">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">4</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Offset classes allow defining a left margin on a column to avoid adding empty columns for spacing.</p>
            </DocSectionText>
            <div className="card">
                <div className="grid">
                    <div className="col-6 col-offset-3">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold">6</div>
                    </div>
                </div>

                <div className="grid">
                    <div className="col-4">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold">4</div>
                    </div>
                    <div className="col-4 col-offset-4">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold">4</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
