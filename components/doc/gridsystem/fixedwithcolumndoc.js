import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FixedWidthColumnDoc(props) {
    const code = {
        basic: `<div class="grid">
    <div class="col-fixed" style="width:100px">
        <div>100px</div>
    </div>
    <div class="col">
        <div>auto</div>
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="grid">
        <div class="col-fixed" style="width:100px">
            <div class="text-center p-3 border-round-sm bg-purple-500 font-bold text-white">100px</div>
        </div>
        <div class="col">
            <div class="text-center p-3 border-round-sm bg-purple-500 font-bold text-white">auto</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A column can have a fixed width while siblings having auto width. Apply <i>col-fixed</i> class to fix a column width
                </p>
            </DocSectionText>
            <div className="card">
                <div class="grid">
                    <div class="col-fixed" style={{ width: '100px' }}>
                        <div class="text-center p-3 border-round-sm bg-purple-500 font-bold text-white">100px</div>
                    </div>
                    <div class="col">
                        <div class="text-center p-3 border-round-sm bg-purple-500 font-bold text-white">auto</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
