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
                            <td>rotate-90</td>
                            <td>transform: rotate(90deg);</td>
                        </tr>
                        <tr>
                            <td>-rotate-90</td>
                            <td>transform: rotate(-90deg);</td>
                        </tr>
                        <tr>
                            <td>rotate-180</td>
                            <td>transform: rotate(180deg);</td>
                        </tr>
                        <tr>
                            <td>-rotate-180</td>
                            <td>transform: rotate(-180deg);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
