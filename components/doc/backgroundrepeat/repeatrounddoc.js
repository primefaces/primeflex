import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RepeatRoundDoc(props) {
    const code = `<div class="overflow-hidden">
    <div class="bg-repeat-round bg-indigo-100 border-primary-500 border-round border-2 h-20rem w-full" style="background-image: url('/images/product-placeholder-indigo.svg');background-size: 10rem"></div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Background image is repeated or stretched to fill space</p>
            </DocSectionText>
            <div className="card">
                <div className="overflow-hidden">
                    <div
                        className="bg-repeat-round bg-indigo-100 border-primary-500 border-round border-2 h-20rem w-full"
                        style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-indigo.svg')", backgroundSize: '10rem' }}
                    ></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
