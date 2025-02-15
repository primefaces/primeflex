import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function CompatibilityDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>PrimeFlex is a companion CSS library for the Prime UI libraries. Review the compatibility matrix to choose the correct combination.</p>
            </DocSectionText>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Prime UI Library</th>
                            <th>PrimeFlex Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>PrimeNG v18 and newer</td>
                            <td>PrimeFlex 4.x.x</td>
                        </tr>
                        <tr>
                            <td>PrimeNG v17 and older</td>
                            <td>PrimeFlex 3.x.x</td>
                        </tr>
                        <tr>
                            <td>PrimeVue v4 and newer</td>
                            <td>PrimeFlex 4.x.x</td>
                        </tr>
                        <tr>
                            <td>PrimeVue v3 and older</td>
                            <td>PrimeFlex 3.x.x</td>
                        </tr>
                        <tr>
                            <td>PrimeReact v10 and older</td>
                            <td>PrimeFlex 3.x.x</td>
                        </tr>
                        <tr>
                            <td>PrimeFaces all versions</td>
                            <td>PrimeFlex 3.x.x</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
