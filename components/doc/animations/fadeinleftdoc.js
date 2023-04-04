import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FadeinleftDoc(props) {
    const code = {
        basic: `<div>
    <div class="fadeinleft animation-duration-1000 animation-iteration-infinite">
        fadeinleft
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container blue-container">
        <div class="fadeinleft animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
            font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">
            fadeinleft
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center card-container blue-container">
                    <div className="fadeinleft animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">
                        fadeinleft
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
