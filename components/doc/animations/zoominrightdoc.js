import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ZoominrightDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="zoominright animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-primary border-round m-2 px-5 py-3">
        zoominright
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div
                        className="zoominright animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-primary border-round m-2 px-5 py-3"
                    >
                        zoominright
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
