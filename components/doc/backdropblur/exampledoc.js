import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExampleDoc(props) {
    const code = `
    
<div class="card">
    <div class="flex gap-5">
        <div class="relative h-8rem w-8rem bg-cover" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')">
            <div class="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-blur-none"></div>
        </div>
        <div class="relative h-8rem w-8rem bg-cover" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')">
            <div class="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-blur-sm"></div>
        </div>
        <div class="relative h-8rem w-8rem bg-cover" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')">
            <div class="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-blur"></div>
        </div>
        <div class="relative h-8rem w-8rem bg-cover" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')">
            <div class="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-blur-lg"></div>
        </div>
        <div class="relative h-8rem w-8rem bg-cover" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" >
            <div class="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-blur-3xl"></div>
        </div>
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
                    <div className="relative h-8rem w-8rem bg-cover" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}>
                        <div className="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-blur-none"></div>
                    </div>
                    <div className="relative h-8rem w-8rem bg-cover" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}>
                        <div className="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-blur-sm"></div>
                    </div>
                    <div className="relative h-8rem w-8rem bg-cover" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}>
                        <div className="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-blur"></div>
                    </div>
                    <div className="relative h-8rem w-8rem bg-cover" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}>
                        <div className="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-blur-lg"></div>
                    </div>
                    <div className="relative h-8rem w-8rem bg-cover" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}>
                        <div className="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-blur-3xl"></div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
