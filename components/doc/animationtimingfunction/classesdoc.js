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
                            <td>animation-linear</td>
                            <td>animation-timing-function: linear;</td>
                        </tr>
                        <tr>
                            <td>animation-ease-in</td>
                            <td>animation-timing-function: cubic-bezier(0.4, 0, 1, 1);</td>
                        </tr>
                        <tr>
                            <td>animation-ease-out</td>
                            <td>animation-timing-function: cubic-bezier(0, 0, 0.2, 1);</td>
                        </tr>
                        <tr>
                            <td>animation-ease-in-out</td>
                            <td>animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
