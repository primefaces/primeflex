import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NoRoundingDoc(props) {
    const code = {
        basic: `<div class="border-noround w-12rem h-6rem">border-noround</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap md:justify-content-start justify-content-center card-container green-container">
        <div class="border-noround w-12rem h-6rem m-2 bg-green-500 text-white font-bold flex align-items-center justify-content-center">border-noround</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-start justify-content-center card-container green-container">
                    <div className="border-noround w-12rem h-6rem m-2 bg-green-500 text-white font-bold flex align-items-center justify-content-center">border-noround</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
