import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AutoDoc(props) {
    const code = {
        basic: `<div>
    <div class="bg-auto bg-no-repeat bg-center" style="background-image: url('images/product-placeholder-blue.svg');"></div>
</div>
    `,
        expanded: `<div class="card">
    <div class="card-container blue-container overflow-hidden">
        <div class="bg-auto bg-no-repeat bg-center bg-blue-500 border-round h-20rem w-full" style="background-image: url('images/product-placeholder-blue.svg');"></div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Image is displayed in its original size.</p>
            </DocSectionText>
            <div className="card">
                <div className="card-container blue-container overflow-hidden">
                    <div className="bg-auto bg-no-repeat bg-center bg-blue-500 border-round h-20rem w-full" style={{ backgroundImage: "url('/images/product-placeholder-blue.svg')" }}></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
