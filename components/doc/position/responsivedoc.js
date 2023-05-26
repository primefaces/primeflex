import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = `<div class="relative md:p-5">
    <div class="static bg-primary-100 font-bold border-round p-4 text-gray-800" style="min-width: 300px; min-height: 200px;">
        <p class="mt-0">Static</p>
        <div class="static md:absolute bottom-0 left-0 bg-primary border-round font-bold p-4" style="min-width: 120px; min-height: 70px">
            Absolute on medium screens / Static on small screens
        </div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:absolute</i> to use a responsive class.
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
                <div className="relative md:p-5">
                    <div className="static bg-primary-100 font-bold border-round p-4 text-gray-800" style={{ minWidth: '300px', minHeight: '200px' }}>
                        <p className="mt-0">Static</p>
                        <div className="static md:absolute bottom-0 left-0 bg-primary border-round font-bold p-4" style={{ minWidth: '120px', minHeight: '70px' }}>
                            Absolute on medium screens / Static on small screens
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
