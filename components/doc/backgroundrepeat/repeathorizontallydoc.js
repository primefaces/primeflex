import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RepeatHorizontallyDoc(props) {
    const code = {
        basic: ` <div>
    <div class="bg-repeat-x bg-center" style="background-image: url('/images/product-placeholder-green.svg')"></div>
</div>
    `,
        expanded: `<div class="card">
    <div class="card-container green-container overflow-hidden">
        <div class="bg-repeat-x bg-green-100 bg-center border-green-500 border-2 border-round h-10rem w-full" style="background-image: url('/images/product-placeholder-green.svg');background-size: 10rem"></div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Background image is repeated horizontally only.</p>
            </DocSectionText>
            <div className="card">
                <div className="card-container green-container overflow-hidden">
                    <div className="bg-repeat-x bg-green-100 bg-center border-green-500 border-2 border-round h-10rem w-full" style={{ backgroundImage: "url('/images/product-placeholder-green.svg')", backgroundSize: '10rem' }}></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
