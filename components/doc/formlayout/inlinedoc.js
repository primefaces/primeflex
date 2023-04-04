import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InlineDoc(props) {
    const code = {
        basic: `<div>
    <div class="formgroup-inline">
        <div class="field">
            <label for="firstname5" class="p-sr-only">Firstname</label>
            <input id="firstname5" type="text" placeholder="Firstname">
        </div>
        <div class="field">
            <label for="lastname5" class="p-sr-only">Lastname</label>
            <input id="lastname5" type="text" placeholder="Lastname">
        </div>
        <button type="button">Submit</button>
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="formgroup-inline">
        <div class="field">
            <label for="firstname5" class="p-sr-only">Firstname</label>
            <input id="firstname5" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" placeholder="Firstname">
        </div>
        <div class="field">
            <label for="lastname5" class="p-sr-only">Lastname</label>
            <input id="lastname5" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" placeholder="Lastname">
        </div>
        <button type="button" class="text-white bg-primary-500 border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Submit</button>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="formgroup-inline">
                    <div className="field">
                        <label htmlFor="firstname5" className="p-sr-only">
                            Firstname
                        </label>
                        <input id="firstname5" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" placeholder="Firstname"></input>
                    </div>
                    <div className="field">
                        <label htmlFor="lastname5" className="p-sr-only">
                            Lastname
                        </label>
                        <input id="lastname5" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" placeholder="Lastname"></input>
                    </div>
                    <button
                        type="button"
                        className="text-white bg-primary-500 border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
                    >
                        Submit
                    </button>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
