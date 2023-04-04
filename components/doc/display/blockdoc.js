import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BlockDoc(props) {
    const code = {
        basic: `<div>
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="card-container yellow-container">
        <div class="block bg-yellow-500 font-bold text-center p-4 border-round mb-3">1</div>
        <div class="block bg-yellow-500 font-bold text-center p-4 border-round mb-3">2</div>
        <div class="block bg-yellow-500 font-bold text-center p-4 border-round mb-3">3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A block element starts on a new line.</p>
            </DocSectionText>
            <div className="card">
                <div className="card-container yellow-container">
                    <div className="block bg-yellow-500 font-bold text-center p-4 border-round mb-3">1</div>
                    <div className="block bg-yellow-500 font-bold text-center p-4 border-round mb-3">2</div>
                    <div className="block bg-yellow-500 font-bold text-center p-4 border-round mb-3">3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
