import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = {
        basic: `<div>
    <div class="scalein animation-delay-200 animation-duration-500 animation-iteration-infinite">
        scalein
    </div>
    <div class="scalein animation-delay-300 animation-duration-500 animation-iteration-infinite">
        scalein
    </div>
    <div class="scalein animation-delay-500 animation-duration-500 animation-iteration-infinite">
        scalein
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container blue-container">
        <div class="scalein animation-delay-200 animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
            font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">
            scalein
        </div>
        <div class="scalein animation-delay-300 animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
            font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">
            scalein
        </div>
        <div class="scalein animation-delay-500 animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
            font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">
            scalein
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
                    <div className="scalein animation-delay-200 animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">
                        scalein
                    </div>
                    <div className="scalein animation-delay-300 animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">
                        scalein
                    </div>
                    <div className="scalein animation-delay-500 animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">
                        scalein
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
