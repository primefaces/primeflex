import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function WrapReverseDoc(props) {
    const code = `<div class="flex flex-wrap-reverse" style="max-width: 500px">
    <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style="min-width: 200px; min-height: 100px">1</div>
    <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style="min-width: 200px; min-height: 100px">2</div>
    <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style="min-width: 200px; min-height: 100px">3</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Flexible items wrap if necessary but in reverse order..</p>
            </DocSectionText>

            <div className="card">
                <div className="flex flex-wrap-reverse" style={{ maxWidth: '500px' }}>
                    <div className="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={{ minWidth: '200px', minHeight: '100px' }}>
                        1
                    </div>
                    <div className="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={{ minWidth: '200px', minHeight: '100px' }}>
                        2
                    </div>
                    <div className="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={{ minWidth: '200px', minHeight: '100px' }}>
                        3
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
