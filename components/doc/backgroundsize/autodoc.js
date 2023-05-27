import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AutoDoc(props) {
    const code = `<div class="overflow-hidden">
    <div class="bg-auto bg-no-repeat bg-center bg-primary border-round h-20rem w-full" style="background-image: url('images/product-placeholder-blue.svg');"></div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Image is displayed in its original size.</p>
            </DocSectionText>
            <div className="card">
                <div className="overflow-hidden">
                    <div className="bg-auto bg-no-repeat bg-center bg-primary border-round h-20rem w-full" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
