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
                            <td>outline-0</td>
                            <td>outline-width: 0px;</td>
                        </tr>
                        <tr>
                            <td>outline-1</td>
                            <td>outline-width: 1px;</td>
                        </tr>
                        <tr>
                            <td>outline-2</td>
                            <td>outline-width: 2px;</td>
                        </tr>
                        <tr>
                            <td>outline-4</td>
                            <td>outline-width: 4px;</td>
                        </tr>
                        <tr>
                            <td>outline-8</td>
                            <td>outline-width: 8px;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
