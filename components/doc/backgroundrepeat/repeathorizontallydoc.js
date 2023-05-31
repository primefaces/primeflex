import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RepeatHorizontallyDoc(props) {
    const code = `<div class="overflow-hidden">
    <div class="bg-repeat-x bg-primary-100 bg-center border-primary-500 border-2 border-round h-10rem w-full" style="background-image: url('/images/product-placeholder-green.svg');background-size: 10rem"></div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Background image is repeated horizontally only.</p>
            </DocSectionText>
            <div className="card">
                <div className="overflow-hidden">
                    <div
                        className="bg-repeat-x bg-primary-100 bg-center border-primary-500 border-2 border-round h-10rem w-full"
                        style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-green.svg')", backgroundSize: '10rem' }}
                    ></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
