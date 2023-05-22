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
                            <td>flex-row</td>
                            <td>flex-direction: row;</td>
                        </tr>
                        <tr>
                            <td>flex-row-reverse</td>
                            <td>flex-direction: row-reverse;</td>
                        </tr>
                        <tr>
                            <td>flex-column</td>
                            <td>flex-direction: column;</td>
                        </tr>
                        <tr>
                            <td>flex-column-reverse</td>
                            <td>flex-direction: column-reverse;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
