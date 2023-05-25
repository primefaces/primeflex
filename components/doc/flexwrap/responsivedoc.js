import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = `<div class="flex flex-wrap-reverse md:flex-wrap" style="max-width: 500px">
    <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style="min-width: 200px; min-height: 100px">1</div>
    <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style="min-width: 200px; min-height: 100px">2</div>
    <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style="min-width: 200px; min-height: 100px">3</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:flex-wrap</i> to use a responsive class.
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
                <div className="flex flex-wrap-reverse md:flex-wrap" style={{ maxWidth: '500px' }}>
                    <div className="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={{ minWidth: '200px', minHeight: '100px' }}>
                        1
                    </div>
                    <div className="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={{ minWidth: '200px', minHeight: '100px' }}>
                        2
                    </div>
                    <div className="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={{ minWidth: '200px', minHeight: '100px' }}>
                        3
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
