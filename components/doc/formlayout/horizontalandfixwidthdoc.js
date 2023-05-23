import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function HorizontalAndFixedWidthDoc(props) {
    const code = `<div class="field grid">
    <label for="firstname3" class="col-fixed" style="width:100px">Firstname</label>
    <div class="col">
        <input id="firstname3" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary">
    </div>
</div>
<div class="field grid">
    <label for="lastname3" class="col-fixed" style="width:100px">Lastname</label>
    <div class="col">
        <input id="lastname3" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary">
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="field grid">
                    <label htmlFor="firstname3" className="col-fixed" style={{ width: '100px' }}>
                        Firstname
                    </label>
                    <div className="col">
                        <input id="firstname3" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"></input>
                    </div>
                </div>
                <div className="field grid">
                    <label htmlFor="lastname3" className="col-fixed" style={{ width: '100px' }}>
                        Lastname
                    </label>
                    <div className="col">
                        <input id="lastname3" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"></input>
                    </div>
                </div>
            </div>

            <DocSectionCode code={code} />
        </>
    );
}
