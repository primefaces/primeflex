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
                            <td>outline-none</td>
                            <td>outline: 2px solid transparent;</td>
                        </tr>
                        <tr>
                            <td>outline</td>
                            <td>outline-style: solid;</td>
                        </tr>
                        <tr>
                            <td>outline-dashed</td>
                            <td>outline-style: dashed;</td>
                        </tr>
                        <tr>
                            <td>outline-dotted</td>
                            <td>outline-style: dotted;</td>
                        </tr>
                        <tr>
                            <td>outline-double</td>
                            <td>outline-style: double;</td>
                        </tr>
                        <tr>
                            <td>outline-inset</td>
                            <td>outline-style: inset;</td>
                        </tr>
                        <tr>
                            <td>outline-outset</td>
                            <td>outline-style: outset;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
