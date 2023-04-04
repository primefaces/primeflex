import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RepeatRoundDoc(props) {
    const code = {
        basic: ` <div>
    <div class="bg-repeat-round" style="background-image: url('/images/product-placeholder-green.svg')"></div>
</div>
    `,
        expanded: `<div class="card">
    <div class="card-container indigo-container overflow-hidden">
        <div class="bg-repeat-round bg-indigo-100 border-indigo-500 border-round border-2 h-20rem w-full" style="background-image: url('/images/product-placeholder-indigo.svg');background-size: 10rem"></div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
            <p>Background image is repeated or stretched to fill space</p>
            </DocSectionText>
            <div className="card">
                <div className="card-container indigo-container overflow-hidden">
                    <div className="bg-repeat-round bg-indigo-100 border-indigo-500 border-round border-2 h-20rem w-full" 
                    style={{ backgroundImage: "url('/images/product-placeholder-indigo.svg')",backgroundSize:'10rem' }}></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
