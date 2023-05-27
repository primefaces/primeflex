import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center md:justify-content-between">
    <div class="h-6rem w-6rem bg-primary border-round-left">
        <img src="/images/product-placeholder-blue.svg" class="translate-x-100 h-6rem w-6rem" alt="primeflex">
    </div>
    <div class="h-6rem w-6rem bg-primary">
        <img src="/images/product-placeholder-blue.svg" class="translate-x-0 h-6rem w-6rem" alt="primeflex">
    </div>
    <div class="h-6rem w-6rem bg-primary border-round-right">
        <img src="/images/product-placeholder-blue.svg" class="-translate-x-100 h-6rem w-6rem" alt="primeflex">
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center md:justify-content-between">
                    <div className="h-6rem w-6rem bg-primary border-round-left">
                        <img src="https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg" className="translate-x-100 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                    <div className="h-6rem w-6rem bg-primary">
                        <img src="https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg" className="translate-x-0 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                    <div className="h-6rem w-6rem bg-primary border-round-right">
                        <img src="https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg" className="-translate-x-100 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
