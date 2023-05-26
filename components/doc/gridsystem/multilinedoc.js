import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function MultilineDoc(props) {
    const code = `<div class="grid">
    <div class="col-6">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">6</div>
    </div>
    <div class="col-6">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">6</div>
    </div>
    <div class="col-6">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">6</div>
    </div>
    <div class="col-6">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">6</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>When the number of columns exceed 12, columns wrap to a new line.</p>
            </DocSectionText>
            <div className="card">
                <div className="grid">
                    <div className="col-6">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold">6</div>
                    </div>
                    <div className="col-6">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold">6</div>
                    </div>
                    <div className="col-6">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold">6</div>
                    </div>
                    <div className="col-6">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold">6</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
