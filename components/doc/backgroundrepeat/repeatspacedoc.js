import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RepeatSpaceDoc(props) {
    const code = {
        basic: ` <div>
    <div class="bg-repeat-space bg-center" style="background-image: url('/images/product-placeholder-orange.svg')"></div>
</div>
    `,
        expanded: `<div class="card">
    <div class="card-container orange-container overflow-hidden">
        <div class="bg-repeat-space bg-orange-100 bg-center border-orange-500 border-2 border-round h-12rem w-full" style="background-image: url('/images/product-placeholder-orange.svg');background-size: 10rem"></div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Background image is repeated without clipping.</p>
            </DocSectionText>
            <div className="card">
                <div className="card-container orange-container overflow-hidden">
                    <div className="bg-repeat-space bg-orange-100 bg-center border-orange-500 border-2 border-round h-12rem w-full" style={{ backgroundImage: "url('/images/product-placeholder-orange.svg')", backgroundSize: '10rem' }}></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
