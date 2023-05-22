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
                            <td>flex-1</td>
                            <td>flex: 1 1 0%;</td>
                        </tr>
                        <tr>
                            <td>flex-auto</td>
                            <td>flex: 1 1 auto;</td>
                        </tr>
                        <tr>
                            <td>flex-initial</td>
                            <td>flex: 0 1 auto;</td>
                        </tr>
                        <tr>
                            <td>flex-none</td>
                            <td>flex: none;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
