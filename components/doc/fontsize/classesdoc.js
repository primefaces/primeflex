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
                            <td>text-xs</td>
                            <td>font-size: .75rem;</td>
                        </tr>
                        <tr>
                            <td>text-sm</td>
                            <td>font-size: .875rem;</td>
                        </tr>
                        <tr>
                            <td>text-base</td>
                            <td>font-size: 1rem;</td>
                        </tr>
                        <tr>
                            <td>text-lg</td>
                            <td>font-size: 1.125rem;</td>
                        </tr>
                        <tr>
                            <td>text-xl</td>
                            <td>font-size: 1.25rem;</td>
                        </tr>
                        <tr>
                            <td>text-2xl</td>
                            <td>font-size: 1.5rem;</td>
                        </tr>
                        <tr>
                            <td>text-3xl</td>
                            <td>font-size: 1.75rem;</td>
                        </tr>
                        <tr>
                            <td>text-4xl</td>
                            <td>font-size: 2rem;</td>
                        </tr>
                        <tr>
                            <td>text-5xl</td>
                            <td>font-size: 2.5rem;</td>
                        </tr>
                        <tr>
                            <td>text-6xl</td>
                            <td>font-size: 3rem;</td>
                        </tr>
                        <tr>
                            <td>text-7xl</td>
                            <td>font-size: 4rem;</td>
                        </tr>
                        <tr>
                            <td>text-8xl</td>
                            <td>font-size: 6rem;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
