import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AnimateWidthDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center" style="min-height:120px">
    <div class="animate-width animation-duration-3000 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-primary border-round m-2 px-5 py-3">
        animate-width
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center" style={{ minHeight: '120px' }}>
                    <div
                        className="animate-width animation-duration-3000 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-primary border-round m-2 px-5 py-3"
                    >
                        animate-width
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
