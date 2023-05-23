import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-column justify-content-center">
    <div class="m-3 flex">
        <select>
            <option>Yes</option>
            <option>No</option>
            <option>Maybe</option>
        </select>
        <input class="mx-3">
        <div class="mx-3">Default browser styles applied</div>
    </div>
    <div class="m-3 flex">
        <select class="appearance-none">
            <option>Yes</option>
            <option>No</option>
            <option>Maybe</option>
        </select>
        <input class="appearance-none mx-3">
        <div class="mx-3">Default styles removed</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-column justify-content-center">
                    <div className="m-3 flex">
                        <select>
                            <option>Yes</option>
                            <option>No</option>
                            <option>Maybe</option>
                        </select>
                        <input className="mx-3"></input>
                        <div className="mx-3">Default browser styles applied</div>
                    </div>
                    <div className="m-3 flex">
                        <select className="appearance-none">
                            <option>Yes</option>
                            <option>No</option>
                            <option>Maybe</option>
                        </select>
                        <input className="appearance-none mx-3"></input>
                        <div className="mx-3">Default styles removed</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
