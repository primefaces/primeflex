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
                            <td>border-noround</td>
                            <td>border-radius: 0;</td>
                        </tr>
                        <tr>
                            <td>border-round</td>
                            <td>border-radius: var(--border-radius);</td>
                        </tr>
                        <tr>
                            <td>border-round-xs</td>
                            <td>border-radius: 0.125rem;</td>
                        </tr>
                        <tr>
                            <td>border-round-sm</td>
                            <td>border-radius: 0.25rem;</td>
                        </tr>
                        <tr>
                            <td>border-round-md</td>
                            <td>border-radius: 0.375rem;</td>
                        </tr>
                        <tr>
                            <td>border-round-lg</td>
                            <td>border-radius: 0.5rem;</td>
                        </tr>
                        <tr>
                            <td>border-round-xl</td>
                            <td>border-radius: 0.75rem;</td>
                        </tr>
                        <tr>
                            <td>border-round-2xl</td>
                            <td>border-radius: 1rem;</td>
                        </tr>
                        <tr>
                            <td>border-round-3xl</td>
                            <td>border-radius: 1.5rem;</td>
                        </tr>
                        <tr>
                            <td>border-circle</td>
                            <td>border-radius: 50%;</td>
                        </tr>
                        <tr>
                            <td>border-noround-left</td>
                            <td>
                                border-top-left-radius: 0;
                                <br />
                                border-bottom-left-radius: 0;
                            </td>
                        </tr>
                        <tr>
                            <td>border-noround-top</td>
                            <td>
                                border-top-left-radius: 0;
                                <br />
                                border-top-right-radius: 0;
                            </td>
                        </tr>
                        <tr>
                            <td>border-noround-right</td>
                            <td>
                                border-top-right-radius: 0;
                                <br />
                                border-bottom-right-radius: 0;
                            </td>
                        </tr>
                        <tr>
                            <td>border-noround-bottom</td>
                            <td>
                                border-bottom-left-radius: 0;
                                <br />
                                border-bottom-right-radius: 0;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-left</td>
                            <td>
                                border-top-left-radius: var(--border-radius);
                                <br />
                                border-bottom-left-radius: var(--border-radius);
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-top</td>
                            <td>
                                border-top-left-radius: var(--border-radius);
                                <br />
                                border-top-right-radius: var(--border-radius);
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-bottom</td>
                            <td>
                                border-bottom-left-radius: var(--border-radius);
                                <br />
                                border-bottom-right-radius: var(--border-radius);
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-right</td>
                            <td>
                                border-top-right-radius: var(--border-radius);
                                <br />
                                border-bottom-right-radius: var(--border-radius);
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-left-xs</td>
                            <td>
                                border-top-left-radius: 0.125rem;
                                <br />
                                border-bottom-left-radius: 0.125rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-top-xs</td>
                            <td>
                                border-top-left-radius: 0.125rem;
                                <br />
                                border-top-right-radius: 0.125rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-bottom-xs</td>
                            <td>
                                border-bottom-left-radius: 0.125rem;
                                <br />
                                border-bottom-right-radius: 0.125rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-right-xs</td>
                            <td>
                                border-top-right-radius: 0.125rem;
                                <br />
                                border-bottom-right-radius: 0.125rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-left-sm</td>
                            <td>
                                border-top-left-radius: 0.25rem;
                                <br />
                                border-bottom-left-radius: 0.25rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-top-sm</td>
                            <td>
                                border-top-left-radius: 0.25rem;
                                <br />
                                border-top-right-radius: 0.25rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-bottom-sm</td>
                            <td>
                                border-bottom-left-radius: 0.25rem;
                                <br />
                                border-bottom-right-radius: 0.25rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-right-sm</td>
                            <td>
                                border-top-right-radius: 0.25rem;
                                <br />
                                border-bottom-right-radius: 0.25rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-left-md</td>
                            <td>
                                border-top-left-radius: 0.375rem;
                                <br />
                                border-bottom-left-radius: 0.375rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-top-md</td>
                            <td>
                                border-top-left-radius: 0.375rem;
                                <br />
                                border-top-right-radius: 0.375rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-bottom-md</td>
                            <td>
                                border-bottom-left-radius: 0.375rem;
                                <br />
                                border-bottom-right-radius: 0.375rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-right-md</td>
                            <td>
                                border-top-right-radius: 0.375rem;
                                <br />
                                border-bottom-right-radius: 0.375rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-left-lg</td>
                            <td>
                                border-top-left-radius: 0.5rem;
                                <br />
                                border-bottom-left-radius: 0.5rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-top-lg</td>
                            <td>
                                border-top-left-radius: 0.5rem;
                                <br />
                                border-top-right-radius: 0.5rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-bottom-lg</td>
                            <td>
                                border-bottom-left-radius: 0.5rem;
                                <br />
                                border-bottom-right-radius: 0.5rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-right-lg</td>
                            <td>
                                border-top-right-radius: 0.5rem;
                                <br />
                                border-bottom-right-radius: 0.5rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-left-xl</td>
                            <td>
                                border-top-left-radius: 0.75rem;
                                <br />
                                border-bottom-left-radius: 0.75rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-top-xl</td>
                            <td>
                                border-top-left-radius: 0.75rem;
                                <br />
                                border-top-right-radius: 0.75rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-bottom-xl</td>
                            <td>
                                border-bottom-left-radius: 0.75rem;
                                <br />
                                border-bottom-right-radius: 0.75rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-right-xl</td>
                            <td>
                                border-top-right-radius: 0.75rem;
                                <br />
                                border-bottom-right-radius: 0.75rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-left-2xl</td>
                            <td>
                                border-top-left-radius: 1rem;
                                <br />
                                border-bottom-left-radius: 1rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-top-2xl</td>
                            <td>
                                border-top-left-radius: 1rem;
                                <br />
                                border-top-right-radius: 1rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-bottom-2xl</td>
                            <td>
                                border-bottom-left-radius: 1rem;
                                <br />
                                border-bottom-right-radius: 1rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-right-2xl</td>
                            <td>
                                border-top-right-radius: 1rem;
                                <br />
                                border-bottom-right-radius: 1rem;
                            </td>
                        </tr>

                        <tr>
                            <td>border-round-left-3xl</td>
                            <td>
                                border-top-left-radius: 1.5rem;
                                <br />
                                border-bottom-left-radius: 1.5rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-top-3xl</td>
                            <td>
                                border-top-left-radius: 1.5rem;
                                <br />
                                border-top-right-radius: 1.5rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-bottom-3xl</td>
                            <td>
                                border-bottom-left-radius: 1.5rem;
                                <br />
                                border-bottom-right-radius: 1.5rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-round-right-3xl</td>
                            <td>
                                border-top-right-radius: 1.5rem;
                                <br />
                                border-bottom-right-radius: 1.5rem;
                            </td>
                        </tr>
                        <tr>
                            <td>border-circle-left</td>
                            <td>
                                border-top-left-radius: 50%;
                                <br />
                                border-bottom-left-radius: 50%;
                            </td>
                        </tr>
                        <tr>
                            <td>border-circle-top</td>
                            <td>
                                border-top-left-radius: 50%;
                                <br />
                                border-top-right-radius: 50%;
                            </td>
                        </tr>
                        <tr>
                            <td>border-circle-bottom</td>
                            <td>
                                border-bottom-left-radius: 50%;
                                <br />
                                border-bottom-right-radius: 50%;
                            </td>
                        </tr>
                        <tr>
                            <td>border-circle-right</td>
                            <td>
                                border-top-right-radius: 50%;
                                <br />
                                border-bottom-right-radius: 50%;
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
