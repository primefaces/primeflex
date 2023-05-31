import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NoRepeatDoc(props) {
    const code = `<div class="flex align-items-center justify-content-center overflow-hidden">
    <div class="bg-no-repeat bg-primary-100 bg-center w-19rem h-19rem bg-primary border-2 border-primary-500 border-round" style="background-image: url('/images/product-placeholder-yellow.svg')"></div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Background image is not repeated.</p>
            </DocSectionText>
            <div className="card">
                <div className="overflow-hidden flex align-items-center justify-content-center">
                    <div
                        className="bg-no-repeat bg-primary-100 bg-center w-19rem h-19rem bg-primary border-2 border-primary-500 border-round"
                        style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-yellow.svg')" }}
                    ></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
