import { DocSectionText } from '../common/docsectiontext';

export function ClassesDoc(props) {
    return (
        <>
            bordercolor
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
                            <td>border-solid</td>
                            <td>border-style: solid;</td>
                        </tr>
                        <tr>
                            <td>border-dashed</td>
                            <td>border-style: dashed</td>
                        </tr>
                        <tr>
                            <td>border-dotted</td>
                            <td>border-style: dotted;</td>
                        </tr>
                        <tr>
                            <td>border-double</td>
                            <td>border-style: double;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
