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
                            <td>transition-duration-100</td>
                            <td>transition-duration: 100ms;</td>
                        </tr>
                        <tr>
                            <td>transition-duration-150</td>
                            <td>transition-duration: 150ms;</td>
                        </tr>
                        <tr>
                            <td>transition-duration-200</td>
                            <td>transition-duration: 200ms;</td>
                        </tr>
                        <tr>
                            <td>transition-duration-300</td>
                            <td>transition-duration: 300ms;</td>
                        </tr>
                        <tr>
                            <td>transition-duration-400</td>
                            <td>transition-duration: 400ms;</td>
                        </tr>
                        <tr>
                            <td>transition-duration-500</td>
                            <td>transition-duration: 500ms;</td>
                        </tr>
                        <tr>
                            <td>transition-duration-1000</td>
                            <td>transition-duration: 1000ms;</td>
                        </tr>
                        <tr>
                            <td>transition-duration-2000</td>
                            <td>transition-duration: 2000ms;</td>
                        </tr>
                        <tr>
                            <td>transition-duration-3000</td>
                            <td>transition-duration: 3000ms;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
