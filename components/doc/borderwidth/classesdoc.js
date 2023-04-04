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
                            <td>border-none</td>
                            <td>border-width: 0px;</td>
                        </tr>
                        <tr>
                            <td>border-1</td>
                            <td>border-width: 1px;</td>
                        </tr>
                        <tr>
                            <td>border-2</td>
                            <td>border-width: 2px;</td>
                        </tr>
                        <tr>
                            <td>border-3</td>
                            <td>border-width: 3px;</td>
                        </tr>
                        <tr>
                            <td>border-x-none</td>
                            <td>
                                border-right-width: 0px;
                                <br />
                                border-left-width: 0px;
                            </td>
                        </tr>
                        <tr>
                            <td>border-x-1</td>
                            <td>
                                border-right-width: 1px;
                                <br />
                                border-left-width: 1px;
                            </td>
                        </tr>
                        <tr>
                            <td>border-x-2</td>
                            <td>
                                border-right-width: 2px;
                                <br />
                                border-left-width: 2px;
                            </td>
                        </tr>
                        <tr>
                            <td>border-x-3</td>
                            <td>
                                border-right-width: 3px;
                                <br />
                                border-left-width: 3px;
                            </td>
                        </tr>
                        <tr>
                            <td>border-y-none</td>
                            <td>
                                border-top-width: 0px;
                                <br />
                                border-bottom-width: 0px;
                            </td>
                        </tr>
                        <tr>
                            <td>border-y-1</td>
                            <td>
                                border-top-width: 1px;
                                <br />
                                border-bottom-width: 1px;
                            </td>
                        </tr>
                        <tr>
                            <td>border-y-2</td>
                            <td>
                                border-top-width: 2px;
                                <br />
                                border-bottom-width: 2px;
                            </td>
                        </tr>
                        <tr>
                            <td>border-y-3</td>
                            <td>
                                border-top-width: 3px;
                                <br />
                                border-bottom-width: 3px;
                            </td>
                        </tr>
                        <tr>
                            <td>border-top-none</td>
                            <td>border-top-width: 0px;</td>
                        </tr>
                        <tr>
                            <td>border-top-1</td>
                            <td>border-top-width: 1px;</td>
                        </tr>
                        <tr>
                            <td>border-top-2</td>
                            <td>border-top-width: 2px;</td>
                        </tr>
                        <tr>
                            <td>border-top-3</td>
                            <td>border-top-width: 3px;</td>
                        </tr>
                        <tr>
                            <td>border-left-none</td>
                            <td>border-left-width: 0px;</td>
                        </tr>
                        <tr>
                            <td>border-left-1</td>
                            <td>border-left-width: 1px;</td>
                        </tr>
                        <tr>
                            <td>border-left-2</td>
                            <td>border-left-width: 2px;</td>
                        </tr>
                        <tr>
                            <td>border-left-3</td>
                            <td>border-left-width: 3px;</td>
                        </tr>
                        <tr>
                            <td>border-bottom-none</td>
                            <td>border-bottom-width: 0px;</td>
                        </tr>
                        <tr>
                            <td>border-bottom-1</td>
                            <td>border-bottom-width: 1px;</td>
                        </tr>
                        <tr>
                            <td>border-bottom-2</td>
                            <td>border-bottom-width: 2px;</td>
                        </tr>
                        <tr>
                            <td>border-bottom-3</td>
                            <td>border-bottom-width: 3px;</td>
                        </tr>
                        <tr>
                            <td>border-right-none</td>
                            <td>border-right-width: 0px;</td>
                        </tr>
                        <tr>
                            <td>border-right-1</td>
                            <td>border-right-width: 1px;</td>
                        </tr>
                        <tr>
                            <td>border-right-2</td>
                            <td>border-right-width: 2px;</td>
                        </tr>
                        <tr>
                            <td>border-right-3</td>
                            <td>border-right-width: 3px;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
