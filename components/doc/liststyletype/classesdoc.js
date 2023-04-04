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
                            <td>list-none</td>
                            <td>list-style: none;</td>
                        </tr>
                        <tr>
                            <td>list-disc</td>
                            <td>list-style: disc;</td>
                        </tr>
                        <tr>
                            <td>list-decimal</td>
                            <td>list-style: decimal;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
