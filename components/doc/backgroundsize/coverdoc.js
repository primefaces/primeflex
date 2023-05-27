import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function CoverDoc(props) {
    const code = `<div class="overflow-hidden">
    <div class="bg-cover bg-center border-primary-500 border-2 border-round h-20rem w-full" style="background-image: url('images/product-placeholder-yellow.svg');"></div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Image is resized to cover the container fully by stretching of clipping if necessary.</p>
            </DocSectionText>
            <div className="card">
                <div className="overflow-hidden">
                    <div className="bg-cover bg-center border-primary-500 border-2 border-round h-20rem w-full" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-yellow.svg')" }}></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
