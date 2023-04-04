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
                            <td>align-items-stretch</td>
                            <td>align-items: stretch;</td>
                        </tr>
                        <tr>
                            <td>align-items-start</td>
                            <td>align-items: flex-start;</td>
                        </tr>
                        <tr>
                            <td>align-items-center</td>
                            <td>align-items: center;</td>
                        </tr>
                        <tr>
                            <td>align-items-end</td>
                            <td>align-items: flex-end;</td>
                        </tr>
                        <tr>
                            <td>align-items-baseline</td>
                            <td>align-items: baseline;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
