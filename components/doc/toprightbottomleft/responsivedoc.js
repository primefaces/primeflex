import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="relative bg-primary-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
        <div class="absolute md:top-0 md:left-0 top-50 left-50 bg-primary font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">1</div>
    </div>
    <div class="relative bg-primary-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
        <div class="absolute md:bottom-0 md:right-0 bottom-50 right-50 bg-primary font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">2</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:top-0</i> to use a responsive class.
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
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="relative bg-primary-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
                        <div className="absolute md:top-0 md:left-0 top-50 left-50 bg-primary font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">1</div>
                    </div>
                    <div className="relative bg-primary-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
                        <div className="absolute md:bottom-0 md:right-0 bottom-50 right-50 bg-primary font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">2</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
