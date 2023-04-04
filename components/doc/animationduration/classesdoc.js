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
                            <td>animation-duration-100</td>
                            <td>animation-duration: 100ms;</td>
                        </tr>
                        <tr>
                            <td>animation-duration-150</td>
                            <td>animation-duration: 150ms;</td>
                        </tr>
                        <tr>
                            <td>animation-duration-200</td>
                            <td>animation-duration: 200ms;</td>
                        </tr>
                        <tr>
                            <td>animation-duration-300</td>
                            <td>animation-duration: 300ms;</td>
                        </tr>
                        <tr>
                            <td>animation-duration-400</td>
                            <td>animation-duration: 400ms;</td>
                        </tr>
                        <tr>
                            <td>animation-duration-500</td>
                            <td>animation-duration: 500ms;</td>
                        </tr>
                        <tr>
                            <td>animation-duration-1000</td>
                            <td>animation-duration: 1000ms;</td>
                        </tr>
                        <tr>
                            <td>animation-duration-2000</td>
                            <td>animation-duration: 2000ms;</td>
                        </tr>
                        <tr>
                            <td>animation-duration-3000</td>
                            <td>animation-duration: 3000ms;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
