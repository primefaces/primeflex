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
                            <td>flex-wrap</td>
                            <td>flex-wrap: wrap;</td>
                        </tr>
                        <tr>
                            <td>flex-wrap-reverse</td>
                            <td>flex-wrap: wrap-reverse;</td>
                        </tr>
                        <tr>
                            <td>flex-nowrap</td>
                            <td>flex-wrap: nowrap;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
