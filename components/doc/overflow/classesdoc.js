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
                            <td>overflow-auto</td>
                            <td>overflow: auto;</td>
                        </tr>
                        <tr>
                            <td>overflow-hidden</td>
                            <td>overflow: hidden;</td>
                        </tr>
                        <tr>
                            <td>overflow-visible</td>
                            <td>overflow: visible;</td>
                        </tr>
                        <tr>
                            <td>overflow-scroll</td>
                            <td>overflow: scroll;</td>
                        </tr>
                        <tr>
                            <td>overflow-x-auto</td>
                            <td>overflow-x: auto;</td>
                        </tr>
                        <tr>
                            <td>overflow-x-hidden</td>
                            <td>overflow-x: hidden;</td>
                        </tr>
                        <tr>
                            <td>overflow-x-visible</td>
                            <td>overflow-x: visible;</td>
                        </tr>
                        <tr>
                            <td>overflow-x-scroll</td>
                            <td>overflow-x: scroll;</td>
                        </tr>
                        <tr>
                            <td>overflow-y-auto</td>
                            <td>overflow-y: auto;</td>
                        </tr>
                        <tr>
                            <td>overflow-y-hidden</td>
                            <td>overflow-y: hidden;</td>
                        </tr>
                        <tr>
                            <td>overflow-y-visible</td>
                            <td>overflow-y: visible;</td>
                        </tr>
                        <tr>
                            <td>overflow-y-scroll</td>
                            <td>overflow-y: scroll;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
