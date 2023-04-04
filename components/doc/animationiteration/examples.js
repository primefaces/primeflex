import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = {
        basic: `<div>
    <div class="scalein animation-duration-500 animation-iteration-1">
        iteration-1
    </div>
    <div class="scalein animation-duration-500 animation-iteration-2">
        iteration-2
    </div>
    <div class="scalein animation-duration-500 animation-iteration-infinite">
        iteration-infinite
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container blue-container">
        <div class="scalein animation-duration-500 animation-iteration-1 flex align-items-center justify-content-center
            font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">
            iteration-1
        </div>
        <div class="scalein animation-duration-500 animation-iteration-2 flex align-items-center justify-content-center
            font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">
            iteration-2
        </div>
        <div class="scalein animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
            font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">
            iteration-infinite
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
                    <div className="scalein animation-duration-500 animation-iteration-1 flex align-items-center justify-content-center
                        font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">
                        iteration-1
                    </div>
                    <div className="scalein animation-duration-500 animation-iteration-2 flex align-items-center justify-content-center
                        font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">
                        iteration-2
                    </div>
                    <div className="scalein animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">
                        iteration-infinite
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
