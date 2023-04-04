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
                            <td>text-center</td>
                            <td>text-align: center;</td>
                        </tr>
                        <tr>
                            <td>text-justify</td>
                            <td>text-align: justify;</td>
                        </tr>
                        <tr>
                            <td>text-left</td>
                            <td>text-align: left;</td>
                        </tr>
                        <tr>
                            <td>text-right</td>
                            <td>text-align: right;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
