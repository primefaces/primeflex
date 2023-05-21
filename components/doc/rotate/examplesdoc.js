import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = {
        basic: `<div>
    <img src="/images/rotate-placeholder-blue.svg" class="rotate-90" alt="primeflex">
</div>
<div>
    <img src="/images/rotate-placeholder-blue.svg" class="-rotate-90" alt="primeflex">
</div>
<div>
    <img src="/images/rotate-placeholder-blue.svg" class="rotate-180" alt="primeflex">
</div>
<div>
    <img src="/images/rotate-placeholder-blue.svg" class="-rotate-180" alt="primeflex">
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center md:justify-content-between card-container blue-container">
        <div class="h-6rem w-6rem m-5">
            <img src="/images/rotate-placeholder-blue.svg" class="rotate-90 h-6rem w-6rem" alt="primeflex">
        </div>
        <div class="h-6rem w-6rem m-5">
            <img src="/images/rotate-placeholder-blue.svg" class="-rotate-90 h-6rem w-6rem" alt="primeflex">
        </div>
        <div class="h-6rem w-6rem m-5">
            <img src="/images/rotate-placeholder-blue.svg" class="rotate-180 h-6rem w-6rem" alt="primeflex">
        </div>
        <div class="h-6rem w-6rem m-5">
            <img src="/images/rotate-placeholder-blue.svg" class="-rotate-180 h-6rem w-6rem" alt="primeflex">
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center md:justify-content-between card-container blue-container">
                    <div className="h-6rem w-6rem m-5">
                        <img src="/images/rotate-placeholder-blue.svg" className="rotate-90 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                    <div className="h-6rem w-6rem m-5">
                        <img src="/images/rotate-placeholder-blue.svg" className="-rotate-90 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                    <div className="h-6rem w-6rem m-5">
                        <img src="/images/rotate-placeholder-blue.svg" className="rotate-180 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                    <div className="h-6rem w-6rem m-5">
                        <img src="/images/rotate-placeholder-blue.svg" className="-rotate-180 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
