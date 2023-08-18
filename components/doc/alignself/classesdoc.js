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
                            <td>align-self-auto</td>
                            <td>align-self: auto;</td>
                        </tr>
                        <tr>
                            <td>align-self-start</td>
                            <td>align-self: flex-start;</td>
                        </tr>
                        <tr>
                            <td>align-self-center</td>
                            <td>align-self: center;</td>
                        </tr>
                        <tr>
                            <td>align-self-end</td>
                            <td>align-self: flex-end;</td>
                        </tr>
                        <tr>
                            <td>align-self-stretch</td>
                            <td>align-self: stretch;</td>
                        </tr>
                        <tr>
                            <td>align-self-baseline</td>
                            <td>align-self: baseline;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
