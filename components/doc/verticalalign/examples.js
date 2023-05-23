import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="surface-overlay border-round border-1 shadow-1 p-5 py-0 m-3">
        <span class="vertical-align-baseline">baseline</span>
        <span class="vertical-align-top">top</span>
        <span class="vertical-align-middle">middle</span>
        <span class="vertical-align-bottom">bottom</span>
        <span class="vertical-align-text-top">text-top</span>
        <span class="vertical-align-text-bottom">text-bottom</span>
        <span class="vertical-align-sub">sub</span>
        <span class="vertical-align-super">super</span>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="surface-overlay border-round border-1 shadow-1 p-5 py-0 m-3">
                        <span className="vertical-align-baseline">baseline</span>
                        <span className="vertical-align-top">top</span>
                        <span className="vertical-align-middle">middle</span>
                        <span className="vertical-align-bottom">bottom</span>
                        <span className="vertical-align-text-top">text-top</span>
                        <span className="vertical-align-text-bottom">text-bottom</span>
                        <span className="vertical-align-sub">sub</span>
                        <span className="vertical-align-super">super</span>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
