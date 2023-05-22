import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FadeoutleftDoc(props) {
    const code = {
        basic: `<div>
    <div class="fadeoutleft animation-duration-1000 animation-iteration-infinite">
        fadeoutleft
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container yellow-container">
        <div class="fadeoutleft animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
            font-bold bg-yellow-500 text-gray-900 border-round m-2 px-5 py-3">
            fadeoutleft
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center card-container yellow-container">
                    <div
                        className="fadeoutleft animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-yellow-500 text-gray-900 border-round m-2 px-5 py-3"
                    >
                        fadeoutleft
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
