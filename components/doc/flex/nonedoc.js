import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NoneDoc(props) {
    const code = `<div class="overflow-hidden">
    <div class="flex">
        <div class="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
        <div class="flex-none flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
        <div class="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Same as "0 0 auto" meaning the element does not grow or shrink.</p>
            </DocSectionText>
            <div className="card">
                <div className="overflow-hidden">
                    <div className="flex">
                        <div className="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
                        <div className="flex-none flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
                        <div className="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
