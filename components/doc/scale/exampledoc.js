import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExampleDoc(props) {
    const code = `
    
<div class="card">
    <div class="flex justify-content-between mt-8">
        <div class="relative h-8rem w-8rem bg-cover scale-75" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')"></div>
        <div class="relative h-8rem w-8rem bg-cover scale-100" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')"></div>
        <div class="relative h-8rem w-8rem bg-cover scale-125" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')"></div>
        <div class="relative h-8rem w-8rem bg-cover scale-150" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')"></div>
    </div>
    <div class="flex justify-content-between">
        <div class="relative h-8rem w-8rem bg-cover scale-x-75" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')"></div>
        <div class="relative h-8rem w-8rem bg-cover scale-x-125" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')"></div>
        <div class="relative h-8rem w-8rem bg-cover scale-y-75" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')"></div>
        <div class="relative h-8rem w-8rem bg-cover scale-y-125" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')"></div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Use blur classes to blur an element.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex justify-content-between mt-8">
                    <div className="relative h-8rem w-8rem bg-cover scale-75" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                    <div className="relative h-8rem w-8rem bg-cover scale-100" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                    <div className="relative h-8rem w-8rem bg-cover scale-125" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                    <div className="relative h-8rem w-8rem bg-cover scale-150" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                </div>
                <div className="flex justify-content-between">
                    <div className="relative h-8rem w-8rem bg-cover scale-x-75" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                    <div className="relative h-8rem w-8rem bg-cover scale-x-125" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                    <div className="relative h-8rem w-8rem bg-cover scale-y-75" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                    <div className="relative h-8rem w-8rem bg-cover scale-y-125" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
