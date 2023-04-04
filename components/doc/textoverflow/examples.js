import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = {
        basic: `<div class="white-space-nowrap overflow-hidden text-overflow-clip" style="width:200px">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>

<div class="white-space-nowrap overflow-hidden text-overflow-ellipsis" style="width:200px">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
    `,
        expanded: `<div class="card">
    <div class="flex align-items-center justify-content-center card-container flex-column">
        <div class="surface-overlay border-round border-1 p-3 white-space-nowrap overflow-hidden text-overflow-clip" style="width:200px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <div class="surface-overlay border-round border-1 p-3 mt-3 white-space-nowrap overflow-hidden text-overflow-ellipsis" style="width:200px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex align-items-center justify-content-center card-container flex-column">
                    <div className="surface-overlay border-round border-1 p-3 white-space-nowrap overflow-hidden text-overflow-clip" style={{ width: '200px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>

                    <div className="surface-overlay border-round border-1 p-3 mt-3 white-space-nowrap overflow-hidden text-overflow-ellipsis" style={{ width: '200px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
