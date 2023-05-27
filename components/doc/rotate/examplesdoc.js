import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center md:justify-content-between">
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
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center md:justify-content-between">
                    <div className="h-6rem w-6rem m-5">
                        <img src="https://www.primefaces.org/cdn/primeflex/images/rotate-placeholder-blue.svg" className="rotate-90 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                    <div className="h-6rem w-6rem m-5">
                        <img src="https://www.primefaces.org/cdn/primeflex/images/rotate-placeholder-blue.svg" className="-rotate-90 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                    <div className="h-6rem w-6rem m-5">
                        <img src="https://www.primefaces.org/cdn/primeflex/images/rotate-placeholder-blue.svg" className="rotate-180 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                    <div className="h-6rem w-6rem m-5">
                        <img src="https://www.primefaces.org/cdn/primeflex/images/rotate-placeholder-blue.svg" className="-rotate-180 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
