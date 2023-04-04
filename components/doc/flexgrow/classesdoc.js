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
                            <td>flex-grow-0</td>
                            <td>flex-grow: 0;</td>
                        </tr>
                        <tr>
                            <td>flex-grow-1</td>
                            <td>flex-grow: 1;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
