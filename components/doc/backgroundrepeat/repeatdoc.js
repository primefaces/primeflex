import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RepeatDoc(props) {
    const code = `<div class="overflow-hidden">
    <div class="bg-repeat bg-primary-100 border-primary-500 border-2 border-round w-full" style="background-image: url('/images/product-placeholder-blue.svg'); background-size: 10rem; height: 30rem"></div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Background image is repeated both vertically and horizontally.</p>
            </DocSectionText>
            <div className="card">
                <div className="overflow-hidden">
                    <div
                        className="bg-repeat bg-primary-100 border-primary-500 border-2 border-round w-full"
                        style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')", backgroundSize: '10rem', height: '30rem' }}
                    ></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
