import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function VerticalAndGridDoc(props) {
    const code = `<div class="formgrid grid">
    <div class="field col">
        <label for="firstname2">Firstname</label>
        <input id="firstname2" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
    </div>
    <div class="field col">
        <label for="lastname2">Lastname</label>
        <input id="lastname2" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="formgrid grid">
                    <div className="field col">
                        <label htmlFor="firstname2">Firstname</label>
                        <input id="firstname2" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                    </div>
                    <div className="field col">
                        <label htmlFor="lastname2">Lastname</label>
                        <input id="lastname2" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
