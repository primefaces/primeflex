import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExampleDoc(props) {
    const code = `
    
<div class="card">
    <div class="flex gap-5">
        <div class="relative h-8rem w-8rem bg-cover invert-0" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')"></div>
        <div class="relative h-8rem w-8rem bg-cover invert" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')"></div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Use hue-rotate classes to change hue of the element.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex gap-5">
                    <div className="relative h-8rem w-8rem bg-cover invert-0" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                    <div className="relative h-8rem w-8rem bg-cover invert" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
