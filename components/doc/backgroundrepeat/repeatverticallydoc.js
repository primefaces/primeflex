import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RepeatVerticallyDoc(props) {
    const code = `<div class="flex justify-content-center overflow-hidden">
    <div class="bg-repeat-y bg-primary-100 bg-center h-20rem w-10rem border-primary-500 border-2 border-round" style="background-image: url('/images/product-placeholder-purple.svg');background-size: 10rem"></div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Background image is repeated vertically only.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex justify-content-center overflow-hidden">
                    <div
                        className="bg-repeat-y bg-primary-100 bg-center h-20rem w-10rem border-primary-500 border-2 border-round"
                        style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-purple.svg')", backgroundSize: '10rem' }}
                    ></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
