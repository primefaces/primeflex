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
                            <td>stroke-0</td>
                            <td>stroke-width: 0</td>
                        </tr>
                        <tr>
                            <td>stroke-1</td>
                            <td>stroke-width: 1</td>
                        </tr>
                        <tr>
                            <td>stroke-2</td>
                            <td>stroke-width: 2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
