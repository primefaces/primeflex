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
                            <td>outline-offset-0</td>
                            <td>outline-offset: 0px;</td>
                        </tr>
                        <tr>
                            <td>outline-offset-1</td>
                            <td>outline-offset: 1px;</td>
                        </tr>
                        <tr>
                            <td>outline-offset-2</td>
                            <td>outline-offset: 2px;</td>
                        </tr>
                        <tr>
                            <td>outline-offset-4</td>
                            <td>outline-offset: 4px;</td>
                        </tr>
                        <tr>
                            <td>outline-offset-8</td>
                            <td>outline-offset: 8px;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
