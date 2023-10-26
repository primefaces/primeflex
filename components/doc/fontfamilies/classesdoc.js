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
                            <td>font-sans</td>
                            <td>
                                font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color
                                Emoji";
                            </td>
                        </tr>
                        <tr>
                            <td>font-serif</td>
                            <td>font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;</td>
                        </tr>
                        <tr>
                            <td>font-mono</td>
                            <td>font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
