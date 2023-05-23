import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RelativeDoc(props) {
    const code = `<div class="relative">
    <div class="relative bg-green-100 p-4 border-round font-bold text-gray-900" style="min-width: 300px; min-height: 160px;">Relative
        <div class="absolute bottom-0 left-0 bg-green-500 p-4 text-white font-bold border-round" style="min-width: 120px; min-height: 70px">
            Absolute
        </div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>A relative positioned element is displayed relative to its original position. Setting the top, left, right and bottom properties can be used to adjust the position of the element.</p>
            </DocSectionText>
            <div className="card">
                <div className="relative">
                    <div className="relative bg-green-100 p-4 border-round font-bold text-gray-900" style={{ minWidth: '300px', minHeight: '160px' }}>
                        Relative
                        <div className="absolute bottom-0 left-0 bg-green-500 p-4 text-white font-bold border-round" style={{ minWidth: '120px', minHeight: '70px' }}>
                            Absolute
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
