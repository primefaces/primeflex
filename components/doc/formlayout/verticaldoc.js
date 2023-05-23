import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function VerticalDoc(props) {
    const code = `<div class="field">
    <label for="firstname1">Firstname</label>
    <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
</div>
<div class="field">
    <label for="lastname1">Lastname</label>
    <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="field">
                    <label htmlFor="firstname1">Firstname</label>
                    <input id="firstname1" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                </div>
                <div className="field">
                    <label htmlFor="lastname1">Lastname</label>
                    <input id="lastname1" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
