import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExampleDoc(props) {
    const code = `
    
<div class="card">
    <div class="flex gap-5">
        <div class="relative h-8rem w-8rem bg-cover" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')">
            <div class="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-saturate-0"></div>
        </div>
        <div class="relative h-8rem w-8rem bg-cover" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')">
            <div class="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-saturate-50"></div>
        </div>
        <div class="relative h-8rem w-8rem bg-cover" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')">
            <div class="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-saturate-100"></div>
        </div>
        <div class="relative h-8rem w-8rem bg-cover" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')">
            <div class="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-saturate-150"></div>
        </div>
        <div class="relative h-8rem w-8rem bg-cover" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')">
            <div class="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-saturate-200"></div>
        </div>
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
                    <div className="relative h-8rem w-8rem bg-cover saturate-0" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}>
                        <div className="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-saturate-0"></div>
                    </div>
                    <div className="relative h-8rem w-8rem bg-cover saturate-50" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}>
                        <div className="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-saturate-50"></div>
                    </div>
                    <div className="relative h-8rem w-8rem bg-cover saturate-100" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}>
                        <div className="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-saturate-100"></div>
                    </div>
                    <div className="relative h-8rem w-8rem bg-cover saturate-150" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}>
                        <div className="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-saturate-150"></div>
                    </div>
                    <div className="relative h-8rem w-8rem bg-cover saturate-200" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}>
                        <div className="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-saturate-200"></div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
