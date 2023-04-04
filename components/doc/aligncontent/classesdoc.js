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
                            <td>align-content-start</td>
                            <td>align-content: flex-start;</td>
                        </tr>
                        <tr>
                            <td>align-content-end</td>
                            <td>align-content: flex-end;</td>
                        </tr>
                        <tr>
                            <td>align-content-center</td>
                            <td>align-content: center;</td>
                        </tr>
                        <tr>
                            <td>align-content-between</td>
                            <td>align-content: space-between;</td>
                        </tr>
                        <tr>
                            <td>align-content-around</td>
                            <td>align-content: space-around;</td>
                        </tr>
                        <tr>
                            <td>align-content-evenly</td>
                            <td>align-content: space-evenly;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
