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
                            <td>text-overflow-clip</td>
                            <td>text-overflow: clip;</td>
                        </tr>
                        <tr>
                            <td>text-overflow-ellipsis</td>
                            <td>text-overflow: ellipsis;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
