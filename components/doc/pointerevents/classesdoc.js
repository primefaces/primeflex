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
                            <td>pointer-events-none</td>
                            <td>pointer-events: none;</td>
                        </tr>
                        <tr>
                            <td>pointer-events-auto</td>
                            <td>pointer-events: auto;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
