import { DocSectionText } from '../common/docsectiontext';

export function ClassesDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Properties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>hidden</td>
                            <td>display: none;</td>
                        </tr>
                        <tr>
                            <td>block</td>
                            <td>display: block;</td>
                        </tr>
                        <tr>
                            <td>inline</td>
                            <td>display: inline;</td>
                        </tr>
                        <tr>
                            <td>inline-block</td>
                            <td>display: inline-block;</td>
                        </tr>
                        <tr>
                            <td>flex</td>
                            <td>display: flex;</td>
                        </tr>
                        <tr>
                            <td>inline-flex</td>
                            <td>display: inline-flex;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
