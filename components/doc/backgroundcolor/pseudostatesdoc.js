import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PseudoStatesDoc(props) {
    const code = `<div class="flex flex-wrap md:justify-content-between justify-content-center">
    <div class="surface-500 hover:surface-700 border-round font-bold m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
        hover:surface-700
    </div>
    <div class="bg-primary hover:bg-cyan-700 border-round font-bold m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
        hover:bg-cyan-700
    </div>
    <div class="bg-primary hover:bg-orange-700 border-round font-bold m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
        hover:bg-orange-700
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Focus, Hover and Active states are available with the <i>focus:</i>, <i>hover:</i>, <i>active:</i> prefixes respectively.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center">
                    <div className="surface-500 hover:surface-700 border-round font-bold m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        hover:surface-700
                    </div>
                    <div className="bg-cyan-500 hover:bg-cyan-700 border-round font-bold m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        hover:bg-cyan-700
                    </div>
                    <div className="bg-orange-500 hover:bg-orange-700 border-round font-bold m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        hover:bg-orange-700
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
