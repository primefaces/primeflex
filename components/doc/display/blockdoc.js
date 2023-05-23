import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BlockDoc(props) {
    const code = `<div class="block bg-primary font-bold text-center p-4 border-round mb-3">1</div>
<div class="block bg-primary font-bold text-center p-4 border-round mb-3">2</div>
<div class="block bg-primary font-bold text-center p-4 border-round mb-3">3</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>A block element starts on a new line.</p>
            </DocSectionText>
            <div className="card">
                <div className="block bg-primary font-bold text-center p-4 border-round mb-3">1</div>
                <div className="block bg-primary font-bold text-center p-4 border-round mb-3">2</div>
                <div className="block bg-primary font-bold text-center p-4 border-round mb-3">3</div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
