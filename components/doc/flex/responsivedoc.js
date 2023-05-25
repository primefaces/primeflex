import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = `<div class="overflow-hidden">
    <div class="flex">
        <div class="flex-1 md:flex-none flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">flex-1 on small devices and none on bigger.</div>
        <div class="flex-1 md:flex-none flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">flex-1 on small devices and none on bigger.</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:flex-auto</i> to use a responsive class.
                </p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>sm:</td>
                                <td>small screens e.g. phones</td>
                            </tr>
                            <tr>
                                <td>md:</td>
                                <td>medium screens e.g. tablets</td>
                            </tr>
                            <tr>
                                <td>lg:</td>
                                <td>large screens e.g. notebooks</td>
                            </tr>
                            <tr>
                                <td>xl:</td>
                                <td>larger screens e.g monitors</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
            <div className="card">
                <div className="overflow-hidden">
                    <div className="flex">
                        <div className="flex-1 md:flex-none flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">flex-1 on small devices and none on bigger.</div>
                        <div className="flex-1 md:flex-auto flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">flex-1 on small devices and auto on bigger.</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
