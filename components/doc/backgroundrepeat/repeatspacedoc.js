import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RepeatSpaceDoc(props) {
    const code = `<div class="overflow-hidden">
    <div class="bg-repeat-space bg-primary-100 bg-center border-primary-500 border-2 border-round h-12rem w-full" style="background-image: url('/images/product-placeholder-orange.svg');background-size: 10rem"></div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Background image is repeated without clipping.</p>
            </DocSectionText>
            <div className="card">
                <div className="overflow-hidden">
                    <div
                        className="bg-repeat-space bg-primary-100 bg-center border-primary-500 border-2 border-round h-12rem w-full"
                        style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-orange.svg')", backgroundSize: '10rem' }}
                    ></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
