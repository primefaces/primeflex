import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SlidedownDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center" style="min-height:100px">
    <div class="slidedown animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-primary border-round m-2 px-5 py-3">
        slidedown
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center" style={{ minHeight: '100px' }}>
                    <div
                        className="slidedown animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-primary border-round m-2 px-5 py-3"
                    >
                        slidedown
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
