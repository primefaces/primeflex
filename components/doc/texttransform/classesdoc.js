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
                            <td>lowercase</td>
                            <td>text-transform: lowercase;</td>
                        </tr>
                        <tr>
                            <td>uppercase</td>
                            <td>text-transform: uppercase;</td>
                        </tr>
                        <tr>
                            <td>capitalize</td>
                            <td>text-transform: capitalize;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
