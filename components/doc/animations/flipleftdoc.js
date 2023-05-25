import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FlipleftDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="flipleft animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-primary border-round m-2 px-5 py-3">
        flipleft
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div
                        className="flipleft animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-primary border-round m-2 px-5 py-3"
                    >
                        flipleft
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
