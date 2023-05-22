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
                            <td>z-auto</td>
                            <td>z-index: auto;</td>
                        </tr>
                        <tr>
                            <td>z-0</td>
                            <td>z-index: 0;</td>
                        </tr>
                        <tr>
                            <td>z-1</td>
                            <td>z-index: 1;</td>
                        </tr>
                        <tr>
                            <td>z-2</td>
                            <td>z-index: 2;</td>
                        </tr>
                        <tr>
                            <td>z-3</td>
                            <td>z-index: 3;</td>
                        </tr>
                        <tr>
                            <td>z-4</td>
                            <td>z-index: 4;</td>
                        </tr>
                        <tr>
                            <td>z-5</td>
                            <td>z-index: 5;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
