import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ScaleinDoc(props) {
    const code = {
        basic: `<div>
    <div class="scalein animation-duration-1000 animation-iteration-infinite">
        scalein
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container green-container">
        <div class="scalein animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
            font-bold bg-green-500 text-white border-round m-2 px-5 py-3">
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
                <div className="flex flex-wrap align-items-center justify-content-center card-container green-container">
                    <div className="scalein animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-green-500 text-white border-round m-2 px-5 py-3">
                        scalein
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
