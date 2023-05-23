import { DocSectionText } from '../common/docsectiontext';

export function TextDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>Text classes have been renamed.</p>
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
                                <td>p-text-left</td>
                                <td>text-left</td>
                            </tr>
                            <tr>
                                <td>p-text-right</td>
                                <td>text-right</td>
                            </tr>
                            <tr>
                                <td>p-text-center</td>
                                <td>text-center</td>
                            </tr>
                            <tr>
                                <td>p-text-justify</td>
                                <td>text-justify</td>
                            </tr>
                            <tr>
                                <td>p-text-lowercase</td>
                                <td>lowercase</td>
                            </tr>
                            <tr>
                                <td>p-text-uppercase</td>
                                <td>uppercase</td>
                            </tr>
                            <tr>
                                <td>p-text-capitalize</td>
                                <td>capitalize</td>
                            </tr>
                            <tr>
                                <td>p-text-bold</td>
                                <td>font-bold</td>
                            </tr>
                            <tr>
                                <td>p-text-normal</td>
                                <td>font-normal</td>
                            </tr>
                            <tr>
                                <td>p-text-light</td>
                                <td>font-light</td>
                            </tr>
                            <tr>
                                <td>p-text-italic</td>
                                <td>font-italic</td>
                            </tr>
                            <tr>
                                <td>p-text-truncate</td>
                                <td>Removed. Use (overflow-hidden white-space-nowrap text-overflow-ellipsis) instead.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
        </>
    );
}
