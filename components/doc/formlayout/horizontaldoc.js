import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function HorizontalDoc(props) {
    const code = `<div class="field grid">
    <label for="firstname4" class="col-12 mb-2 md:col-2 md:mb-0">Firstname</label>
    <div class="col-12 md:col-10">
        <input id="firstname4" type="text">
    </div>
</div>
<div class="field grid">
    <label for="lastname4" class="col-12 mb-2 md:col-2 md:mb-0">Lastname</label>
    <div class="col-12 md:col-10">
        <input id="lastname4" type="text">
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="field grid">
                    <label htmlFor="firstname4" className="col-12 mb-2 md:col-2 md:mb-0">
                        Firstname
                    </label>
                    <div className="col-12 md:col-10">
                        <input id="firstname4" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                    </div>
                </div>
                <div className="field grid">
                    <label htmlFor="lastname4" className="col-12 mb-2 md:col-2 md:mb-0">
                        Lastname
                    </label>
                    <div className="col-12 md:col-10">
                        <input id="lastname4" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
