import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExampleDoc(props) {
    const code = `
    
<div class="card">
    <div class="flex gap-5">
        <div class="relative h-8rem w-8rem bg-cover blur-none" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')"></div>
        <div class="relative h-8rem w-8rem bg-cover blur-sm" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')"></div>
        <div class="relative h-8rem w-8rem bg-cover blur-md" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')"></div>
        <div class="relative h-8rem w-8rem bg-cover blur-lg" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')"></div>
        <div class="relative h-8rem w-8rem bg-cover blur-xl" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" ></div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Use blur classes to blur an element.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex gap-5">
                    <div className="relative h-8rem w-8rem bg-cover blur-none" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                    <div className="relative h-8rem w-8rem bg-cover blur-sm" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                    <div className="relative h-8rem w-8rem bg-cover blur-md" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                    <div className="relative h-8rem w-8rem bg-cover blur-lg" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                    <div className="relative h-8rem w-8rem bg-cover blur-xl" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
