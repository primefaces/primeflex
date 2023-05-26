import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FixedWidthColumnDoc(props) {
    const code = `<div class="grid">
    <div class="col-fixed" style="width:100px">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">100px</div>
    </div>
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">auto</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A column can have a fixed width while siblings having auto width. Apply <i>col-fixed</i> class to fix a column width
                </p>
            </DocSectionText>
            <div className="card">
                <div className="grid">
                    <div className="col-fixed" style={{ width: '100px' }}>
                        <div className="text-center p-3 border-round-sm bg-primary font-bold">100px</div>
                    </div>
                    <div className="col">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold">auto</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
