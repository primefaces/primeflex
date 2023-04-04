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
                            <td>justify-content-start</td>
                            <td>justify-content: flex-start;</td>
                        </tr>
                        <tr>
                            <td>justify-content-end</td>
                            <td>justify-content: flex-end;</td>
                        </tr>
                        <tr>
                            <td>justify-content-center</td>
                            <td>justify-content: center;</td>
                        </tr>
                        <tr>
                            <td>justify-content-between</td>
                            <td>justify-content: space-between;</td>
                        </tr>
                        <tr>
                            <td>justify-content-around</td>
                            <td>justify-content: space-around;</td>
                        </tr>
                        <tr>
                            <td>justify-content-evenly</td>
                            <td>justify-content: space-evenly;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
