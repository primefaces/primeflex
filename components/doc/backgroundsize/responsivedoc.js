import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = `<div class="overflow-hidden">
    <div class="bg-cover md:bg-contain bg-center bg-no-repeat bg-primary border-round h-20rem w-full" style="background-image: url('images/product-placeholder-purple.svg');"></div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:bg-contain</i> to use a responsive class.
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
                    <div className="bg-cover md:bg-contain bg-center bg-no-repeat bg-primary border-round h-20rem w-full" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-purple.svg')" }}></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
