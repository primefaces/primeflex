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
                            <td>origin-center</td>
                            <td>transform-origin: center;</td>
                        </tr>
                        <tr>
                            <td>origin-top</td>
                            <td>transform-origin: top;</td>
                        </tr>
                        <tr>
                            <td>origin-top-right</td>
                            <td>transform-origin: top right;</td>
                        </tr>
                        <tr>
                            <td>origin-right</td>
                            <td>transform-origin: right;</td>
                        </tr>
                        <tr>
                            <td>origin-bottom-right</td>
                            <td>transform-origin: bottom right;</td>
                        </tr>
                        <tr>
                            <td>origin-bottom</td>
                            <td>transform-origin: bottom;</td>
                        </tr>
                        <tr>
                            <td>origin-bottom-left</td>
                            <td>transform-origin: bottom left;</td>
                        </tr>
                        <tr>
                            <td>origin-left</td>
                            <td>transform-origin: left;</td>
                        </tr>
                        <tr>
                            <td>origin-top-left</td>
                            <td>transform-origin: top left;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
