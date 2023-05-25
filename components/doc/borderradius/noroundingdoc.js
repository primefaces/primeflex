import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NoRoundingDoc(props) {
    const code = `<div class="flex flex-wrap md:justify-content-start justify-content-center">
    <div class="border-noround w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">border-noround</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-start justify-content-center">
                    <div className="border-noround w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">border-noround</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
