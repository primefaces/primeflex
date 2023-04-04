import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function StaticDoc(props) {
    const code = {
        basic: `<div class="relative">
    <div class="static" style="min-width: 300px; min-height: 150px;">
        <p>Static</p>
        <div class="absolute bottom-0 left-0" style="min-width: 120px; min-height: 70px">
            Absolute
        </div>
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="relative card-container blue-container">
        <div class="static bg-blue-100 p-4 border-round" style="min-width: 300px; min-height: 150px;">
            <p class="font-bold text-gray-900">Static</p>
            <div class="absolute bottom-0 left-0 bg-blue-500 border-round p-4 font-bold text-white" style="min-width: 120px; min-height: 70px">
                Absolute
            </div>
        </div>
    </div>
</div>
    
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A static positioned element is displayed according to the flow of the page and does not get affected by the top, left, right and bottom properties.</p>
            </DocSectionText>
            <div className="card">
                <div className="relative card-container blue-container">
                    <div className="static bg-blue-100 p-4 border-round" style={{ minWidth: '300px',minHeight:'150px' }}>
                        <p className="font-bold text-gray-900">Static</p>
                        <div className="absolute bottom-0 left-0 bg-blue-500 border-round p-4 font-bold text-white" style={{ minWidth: '120px',minHeight:'70px' }}>
                            Absolute
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
