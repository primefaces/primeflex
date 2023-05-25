import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SlideupDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center" style="min-height:100px">
    <div class="slideup animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-primary border-round m-2 px-5 py-3">
        slideup
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center" style={{ minHeight: '100px' }}>
                    <div
                        className="slideup animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-primary border-round m-2 px-5 py-3"
                    >
                        slideup
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
