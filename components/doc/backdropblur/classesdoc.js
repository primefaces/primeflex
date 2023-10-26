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
                            <td>backdrop-blur-none</td>
                            <td>backdrop-filter: blur(0);</td>
                        </tr>
                        <tr>
                            <td>backdrop-blur-sm</td>
                            <td>backdrop-filter: blur(4px);</td>
                        </tr>
                        <tr>
                            <td>backdrop-blur</td>
                            <td>backdrop-filter: blur(8px);</td>
                        </tr>
                        <tr>
                            <td>backdrop-blur-md</td>
                            <td>backdrop-filter: blur(12px);</td>
                        </tr>
                        <tr>
                            <td>backdrop-blur-lg</td>
                            <td>backdrop-filter: blur(16px);</td>
                        </tr>
                        <tr>
                            <td>backdrop-blur-xl</td>
                            <td>backdrop-filter: blur(24px);</td>
                        </tr>
                        <tr>
                            <td>backdrop-blur-2xl</td>
                            <td>backdrop-filter: blur(40px);</td>
                        </tr>
                        <tr>
                            <td>backdrop-blur-3xl</td>
                            <td>backdrop-filter: blur(64px);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
