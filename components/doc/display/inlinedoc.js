import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InlineDoc(props) {
    const code = `<div className="inline bg-primary font-bold text-center p-4 border-round mx-4">1</div>
<div className="inline bg-primary font-bold text-center p-4 border-round">2</div>
<div className="inline bg-primary font-bold text-center p-4 border-round mx-4">3</div>
    `;

    return (
        <>
            <DocSectionText {...props}>
                <p>An inline element does not start on a new line and allocates width as necessary.</p>
            </DocSectionText>
            <div className="card py-6">
                <div className="inline bg-primary font-bold text-center p-4 border-round mx-4">1</div>
                <div className="inline bg-primary font-bold text-center p-4 border-round">2</div>
                <div className="inline bg-primary font-bold text-center p-4 border-round mx-4">3</div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
