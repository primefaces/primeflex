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
                            <td>blur-none</td>
                            <td>filter: blur(0);</td>
                        </tr>
                        <tr>
                            <td>blur-sm</td>
                            <td>filter: blur(4px);</td>
                        </tr>
                        <tr>
                            <td>blur</td>
                            <td>filter: blur(8px);</td>
                        </tr>
                        <tr>
                            <td>blur-md</td>
                            <td>filter: blur(12px);</td>
                        </tr>
                        <tr>
                            <td>blur-lg</td>
                            <td>filter: blur(16px);</td>
                        </tr>
                        <tr>
                            <td>blur-xl</td>
                            <td>filter: blur(24px);</td>
                        </tr>
                        <tr>
                            <td>blur-2xl</td>
                            <td>filter: blur(40px);</td>
                        </tr>
                        <tr>
                            <td>blur-3xl</td>
                            <td>filter: blur(64px);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
