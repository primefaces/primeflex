import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ContainDoc(props) {
    const code = {
        basic: `<div>
    <div class="bg-contain bg-center bg-no-repeat" style="background-image: url('images/product-placeholder-green.svg');"></div>
</div>
    `,
        expanded: `<div class="card">
    <div class="card-container green-container overflow-hidden">
        <div class="bg-contain bg-center bg-no-repeat bg-green-500 border-round h-20rem w-full" style="background-image: url('images/product-placeholder-green.svg');"></div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
            <p>Image is resized to fill the container</p>
            </DocSectionText>
            <div className="card">
                <div className="card-container green-container overflow-hidden">
                    <div className="bg-contain bg-center bg-no-repeat bg-green-500 border-round h-20rem w-full" style={{ backgroundImage: "url('/images/product-placeholder-green.svg')" }}></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
