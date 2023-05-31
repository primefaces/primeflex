import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="overflow-hidden">
    <div class="flex flex-wrap align-items-center justify-content-center">
        <div class="bg-left-top bg-no-repeat w-10rem h-10rem bg-primary border-round m-3" style="background-image: url('/images/product-placeholder-blue.svg'); background-size: 5rem;"></div>
        <div class="bg-top bg-no-repeat w-10rem h-10rem bg-primary border-round m-3" style="background-image: url('/images/product-placeholder-blue.svg'); background-size: 5rem;"></div>
        <div class="bg-right-top bg-no-repeat w-10rem h-10rem bg-primary border-round m-3" style="background-image: url('/images/product-placeholder-blue.svg'); background-size: 5rem;"></div>
    </div>
    <div class="flex flex-wrap align-items-center justify-content-center">
        <div class="bg-left bg-no-repeat w-10rem h-10rem bg-primary border-round m-3" style="background-image: url('/images/product-placeholder-blue.svg'); background-size: 5rem;"></div>
        <div class="bg-center bg-no-repeat w-10rem h-10rem bg-primary border-round m-3" style="background-image: url('/images/product-placeholder-blue.svg'); background-size: 5rem;"></div>
        <div class="bg-right bg-no-repeat w-10rem h-10rem bg-primary border-round m-3" style="background-image: url('/images/product-placeholder-blue.svg'); background-size: 5rem;"></div>
    </div>
    <div class="flex flex-wrap align-items-center justify-content-center">
        <div class="bg-bottom bg-no-repeat w-10rem h-10rem bg-primary border-round m-3" style="background-image: url('/images/product-placeholder-blue.svg'); background-size: 5rem;"></div>
        <div class="bg-left-bottom bg-no-repeat w-10rem h-10rem bg-primary border-round m-3" style="background-image: url('/images/product-placeholder-blue.svg'); background-size: 5rem;"></div>
        <div class="bg-right-bottom bg-no-repeat w-10rem h-10rem bg-primary border-round m-3" style="background-image: url('/images/product-placeholder-blue.svg'); background-size: 5rem;"></div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="overflow-hidden">
                    <div className="flex flex-wrap align-items-center justify-content-center">
                        <div
                            className="bg-left-top bg-no-repeat w-10rem h-10rem bg-primary border-round m-3"
                            style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')", backgroundSize: '5rem' }}
                        ></div>
                        <div className="bg-top bg-no-repeat w-10rem h-10rem bg-primary border-round m-3" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')", backgroundSize: '5rem' }}></div>
                        <div
                            className="bg-right-top bg-no-repeat w-10rem h-10rem bg-primary border-round m-3"
                            style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')", backgroundSize: '5rem' }}
                        ></div>
                    </div>
                    <div className="flex flex-wrap align-items-center justify-content-center">
                        <div
                            className="bg-left bg-no-repeat w-10rem h-10rem bg-primary border-round m-3"
                            style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')", backgroundSize: '5rem' }}
                        ></div>
                        <div
                            className="bg-center bg-no-repeat w-10rem h-10rem bg-primary border-round m-3"
                            style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')", backgroundSize: '5rem' }}
                        ></div>
                        <div
                            className="bg-right bg-no-repeat w-10rem h-10rem bg-primary border-round m-3"
                            style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')", backgroundSize: '5rem' }}
                        ></div>
                    </div>
                    <div className="flex flex-wrap align-items-center justify-content-center">
                        <div
                            className="bg-bottom bg-no-repeat w-10rem h-10rem bg-primary border-round m-3"
                            style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')", backgroundSize: '5rem' }}
                        ></div>
                        <div
                            className="bg-left-bottom bg-no-repeat w-10rem h-10rem bg-primary border-round m-3"
                            style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')", backgroundSize: '5rem' }}
                        ></div>
                        <div
                            className="bg-right-bottom bg-no-repeat w-10rem h-10rem bg-primary border-round m-3"
                            style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')", backgroundSize: '5rem' }}
                        ></div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
