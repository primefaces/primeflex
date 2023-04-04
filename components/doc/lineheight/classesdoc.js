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
                            <td>line-height-1</td>
                            <td>line-height: 1;</td>
                        </tr>
                        <tr>
                            <td>line-height-2</td>
                            <td>line-height: 1.25;</td>
                        </tr>
                        <tr>
                            <td>line-height-3</td>
                            <td>line-height: 1.5;</td>
                        </tr>
                        <tr>
                            <td>line-height-4</td>
                            <td>line-height: 2;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
