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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>underline</td>
                            <td>text-decoration: underline;</td>
                        </tr>
                        <tr>
                            <td>line-through</td>
                            <td>text-decoration: line-through;</td>
                        </tr>
                        <tr>
                            <td>no-underline</td>
                            <td>text-decoration: no-underline;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
