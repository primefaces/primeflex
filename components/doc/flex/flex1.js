import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function Flex1Doc(props) {
    const code = `<div class="flex">
    <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime</div>
    <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
    <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
</div>
<div class="flex">
    <div class="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime</div>
    <div class="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
    <div class="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Sets grow and shrink to 1 to auto grow and shrink while keeping flex-basis to 0.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex">
                    <div className="flex flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime</div>
                    <div className="flex flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
                    <div className="flex flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
                </div>
                <div className="flex">
                    <div className="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime</div>
                    <div className="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
                    <div className="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
