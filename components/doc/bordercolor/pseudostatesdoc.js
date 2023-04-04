import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PseudoStatesDoc(props) {
    const code = {
        basic: `<div>
    <div class="border-500 hover:border-700 border-3 border-round">
        hover:border-700
    </div>
    <div class="border-cyan-500 hover:border-cyan-700 border-round">
        hover:border-cyan-700
    </div>
    <div class="border-orange-500 hover:border-orange-700 border-round">
        hover:border-orange-700
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap md:justify-content-between justify-content-center card-container">
        <div class="border-500 hover:border-700 border-3 border-round surface-overlay font-bold m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
            hover:border-700
        </div>
        <div class="border-cyan-500 hover:border-cyan-700 border-round surface-overlay font-bold border-3 m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
            hover:border-cyan-700
        </div>
        <div class="border-orange-500 hover:border-orange-700 border-round surface-overlay font-bold border-3 m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
            hover:border-orange-700
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Focus, Hover and Active states are available with the <i>focus:</i>, <i>hover:</i>, <i>active:</i> prefixes respectively.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center card-container">
                    <div className="border-500 hover:border-700 border-3 border-round surface-overlay font-bold m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        hover:border-700
                    </div>
                    <div className="border-cyan-500 hover:border-cyan-700 border-round surface-overlay font-bold border-3 m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        hover:border-cyan-700
                    </div>
                    <div className="border-orange-500 hover:border-orange-700 border-round surface-overlay font-bold border-3 m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        hover:border-orange-700
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
