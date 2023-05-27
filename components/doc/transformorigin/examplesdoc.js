import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center md:justify-content-between" style="min-height: 250px">
    <div class="h-6rem w-6rem bg-primary m-5 border-round">
        <img src="/images/product-placeholder-blue.svg" class="origin-center rotate-45 h-6rem w-6rem" alt="primeflex">
    </div>
    <div class="h-6rem w-6rem bg-primary m-5 border-round">
        <img src="/images/product-placeholder-blue.svg" class="origin-top-right rotate-45 h-6rem w-6rem" alt="primeflex">
    </div>
    <div class="h-6rem w-6rem bg-primary m-5 border-round">
        <img src="/images/product-placeholder-blue.svg" class="origin-bottom-left rotate-45 h-6rem w-6rem" alt="primeflex">
    </div>
    <div class="h-6rem w-6rem bg-primary m-5 border-round">
        <img src="/images/product-placeholder-blue.svg" class=" origin-left rotate-45 h-6rem w-6rem" alt="primeflex">
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center md:justify-content-between" style={{ minHeight: '250px' }}>
                    <div className="h-6rem w-6rem bg-primary m-5 border-round">
                        <img src="https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg" className="origin-center rotate-45 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                    <div className="h-6rem w-6rem bg-primary m-5 border-round">
                        <img src="https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg" className="origin-top-right rotate-45 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                    <div className="h-6rem w-6rem bg-primary m-5 border-round">
                        <img src="https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg" className="origin-bottom-left rotate-45 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                    <div className="h-6rem w-6rem bg-primary m-5 border-round">
                        <img src="https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg" className=" origin-left rotate-45 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
