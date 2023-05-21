import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function Flex1Doc(props) {
    const code = {
        basic: `<div>
    <div class="flex">
        <div>Prime</div>
        <div>Prime and PrimeFlex</div>
        <div>Lorem ipsum dolor sit amet</div>
    </div>
    <div class="flex">
        <div class="flex-1">Prime</div>
        <div class="flex-1">Prime and PrimeFlex</div>
        <div class="flex-1">Lorem ipsum dolor sit amet</div>
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="card-container yellow-container overflow-hidden">
        <div class="flex">
            <div class="flex align-items-center justify-content-center bg-yellow-500 font-bold text-gray-900 m-2 px-5 py-3 border-round">Prime</div>
            <div class="flex align-items-center justify-content-center bg-yellow-500 font-bold text-gray-900 m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
            <div class="flex align-items-center justify-content-center bg-yellow-500 font-bold text-gray-900 m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
        </div>
        <div class="flex">
            <div class="flex-1 flex align-items-center justify-content-center bg-yellow-500 font-bold text-gray-900 m-2 px-5 py-3 border-round">Prime</div>
            <div class="flex-1 flex align-items-center justify-content-center bg-yellow-500 font-bold text-gray-900 m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
            <div class="flex-1 flex align-items-center justify-content-center bg-yellow-500 font-bold text-gray-900 m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                Sets grow and shrink to 1 to auto grow and shrink while keeping flex-basis to 0.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="card-container yellow-container overflow-hidden">
                    <div className="flex">
                        <div className="flex flex align-items-center justify-content-center bg-yellow-500 font-bold text-white m-2 px-5 py-3 border-round">Prime</div>
                        <div className="flex flex align-items-center justify-content-center bg-yellow-500 font-bold text-white m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
                        <div className="flex flex align-items-center justify-content-center bg-yellow-500 font-bold text-white m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className="flex">
                        <div className="flex-1 flex align-items-center justify-content-center bg-yellow-500 font-bold text-white m-2 px-5 py-3 border-round">Prime</div>
                        <div className="flex-1 flex align-items-center justify-content-center bg-yellow-500 font-bold text-white m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
                        <div className="flex-1 flex align-items-center justify-content-center bg-yellow-500 font-bold text-white m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
