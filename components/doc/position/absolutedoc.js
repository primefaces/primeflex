import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AbsoluteDoc(props) {
    const code = `<div class="mb-4">
    <div class="relative bg-primary-100 border-round p-4 font-bold text-gray-800">
        <p class="mt-0">Relative</p>
        <div class="static bg-primary-200 border-round p-4 font-bold text-gray-800" style="min-width: 300px; min-height: 150px;">
            <p class="mt-0">Static</p>
            <div class="static bottom-0 left-0 bg-primary border-round p-4 font-bold " style="min-width: 120px; min-height: 70px">
                Static
            </div>
        </div>
    </div>
</div>


<div class="relative bg-primary-100 border-round p-4 font-bold text-gray-800">
    <p class="mt-0">Relative</p>
    <div class="static bg-primary-200 border-round p-4 font-bold text-gray-800" style="min-width: 300px; min-height: 150px;">
        <p class="mt-0">Static</p>
        <div class="absolute bottom-0 left-0 bg-primary border-round p-4 font-bold " style="min-width: 120px; min-height: 70px">
            Dynamic
        </div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>A fixed element is positioned relative to the viewport and always located in the same position even when the page is scrolled.</p>
            </DocSectionText>
            <div className="card">
                <div className="mb-4">
                    <div className="relative bg-primary-100 border-round p-4 font-bold text-gray-800">
                        <p className="mt-0">Relative</p>
                        <div className="static bg-primary-200 border-round p-4 font-bold text-gray-800" style={{ minWidth: '300px', minHeight: '150px' }}>
                            <p className="mt-0">Static</p>
                            <div className="static bottom-0 left-0 bg-primary border-round p-4 font-bold " style={{ minWidth: '120px', minHeight: '70px' }}>
                                Static
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative bg-primary-100 border-round p-4 font-bold text-gray-800">
                    <p className="mt-0">Relative</p>
                    <div className="static bg-primary-200 border-round p-4 font-bold text-gray-800" style={{ minWidth: '300px', minHeight: '150px' }}>
                        <p className="mt-0">Static</p>
                        <div className="absolute bottom-0 left-0 bg-primary border-round p-4 font-bold " style={{ minWidth: '120px', minHeight: '70px' }}>
                            Dynamic
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
