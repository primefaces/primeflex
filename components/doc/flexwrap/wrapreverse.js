import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function WrapReverseDoc(props) {
    const code = {
        basic: `<div class="flex flex-wrap-reverse" style="max-width: 500px">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap-reverse card-container yellow-container" style="max-width: 500px">
        <div class="flex align-items-center justify-content-center bg-yellow-500 font-bold text-gray-900 m-2 border-round" style="min-width: 200px; min-height: 100px">1</div>
        <div class="flex align-items-center justify-content-center bg-yellow-500 font-bold text-gray-900 m-2 border-round" style="min-width: 200px; min-height: 100px">2</div>
        <div class="flex align-items-center justify-content-center bg-yellow-500 font-bold text-gray-900 m-2 border-round" style="min-width: 200px; min-height: 100px">3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Flexible items wrap if necessary but in reverse order..</p>
            </DocSectionText>

            <div class="card">
                <div class="flex flex-wrap-reverse card-container yellow-container" style={{ maxWidth: '500px' }}>
                    <div class="flex align-items-center justify-content-center bg-yellow-500 font-bold text-gray-900 m-2 border-round" style={{ minWidth: '200px', minHeight: '100px' }}>
                        1
                    </div>
                    <div class="flex align-items-center justify-content-center bg-yellow-500 font-bold text-gray-900 m-2 border-round" style={{ minWidth: '200px', minHeight: '100px' }}>
                        2
                    </div>
                    <div class="flex align-items-center justify-content-center bg-yellow-500 font-bold text-gray-900 m-2 border-round" style={{ minWidth: '200px', minHeight: '100px' }}>
                        3
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
