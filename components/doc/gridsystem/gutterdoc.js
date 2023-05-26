import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function GutterDoc(props) {
    const code = `<div class="grid grid-nogutter">
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">1</div>
    </div>
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">1</div>
    </div>
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">1</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A .5rem padding is applied to each column along with negative margins on the container element, in case you'd like to remove these gutters, apply
                    <i>.grid-nogutter</i> class to the container. Gutters can also be removed on an individual columns with the same class name.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="grid grid-nogutter">
                    <div className="col">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold">1</div>
                    </div>
                    <div className="col">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold">1</div>
                    </div>
                    <div className="col">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold">1</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
