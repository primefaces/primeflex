import { DocSectionText } from '../common/docsectiontext';
<br />;

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
                            <td>grid</td>
                            <td>
                                display: flex;
                                <br />
                                flex-wrap: wrap;
                                <br />
                                margin-right: -0.5rem;
                                <br />
                                margin-left: -0.5rem;
                                <br />
                                margin-top: -0.5rem;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>grid-nogutter</td>
                            <td>
                                margin-right: 0;
                                <br />
                                margin-left: 0;
                                <br />
                                margin-top: 0;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col</td>
                            <td>
                                flex-grow: 1;
                                <br />
                                flex-basis: 0;
                                <br />
                                padding: $gutter;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-fixed</td>
                            <td>
                                flex: 0 0 auto;
                                <br />
                                padding: $gutter;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-1</td>
                            <td>
                                flex: 0 0 auto;
                                <br />
                                padding: $gutter;
                                <br />
                                width: 8.3333%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-2</td>
                            <td>
                                flex: 0 0 auto;
                                <br />
                                padding: $gutter;
                                <br />
                                width: 16.6667%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-3</td>
                            <td>
                                flex: 0 0 auto;
                                <br />
                                padding: $gutter;
                                <br />
                                width: 25%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-4</td>
                            <td>
                                flex: 0 0 auto;
                                <br />
                                padding: $gutter;
                                <br />
                                width: 33.3333%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-5</td>
                            <td>
                                flex: 0 0 auto;
                                <br />
                                padding: $gutter;
                                <br />
                                width: 41.6667%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-6</td>
                            <td>
                                flex: 0 0 auto;
                                <br />
                                padding: $gutter;
                                <br />
                                width: 50%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-7</td>
                            <td>
                                flex: 0 0 auto;
                                <br />
                                padding: $gutter;
                                <br />
                                width: 58.3333%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-8</td>
                            <td>
                                flex: 0 0 auto;
                                <br />
                                padding: $gutter;
                                <br />
                                width: 66.6667%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-9</td>
                            <td>
                                flex: 0 0 auto;
                                <br />
                                padding: $gutter;
                                <br />
                                width: 75%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-10</td>
                            <td>
                                flex: 0 0 auto;
                                <br />
                                padding: $gutter;
                                <br />
                                width: 83.3333%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-11</td>
                            <td>
                                flex: 0 0 auto;
                                <br />
                                padding: $gutter;
                                <br />
                                width: 91.6667%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-12</td>
                            <td>
                                flex: 0 0 auto;
                                <br />
                                padding: $gutter;
                                <br />
                                width: 100%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-offset-0</td>
                            <td>
                                margin-left: 0;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-offset-1</td>
                            <td>
                                margin-left: 8.3333%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-offset-2</td>
                            <td>
                                margin-left: 16.6667%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-offset-3</td>
                            <td>
                                margin-left: 25%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-offset-4</td>
                            <td>
                                margin-left: 33.3333%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-offset-5</td>
                            <td>
                                margin-left: 41.6667%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-offset-6</td>
                            <td>
                                margin-left: 50%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-offset-7</td>
                            <td>
                                margin-left: 58.3333%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-offset-8</td>
                            <td>
                                margin-left: 66.6667%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-offset-9</td>
                            <td>
                                margin-left: 75%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-offset-10</td>
                            <td>
                                margin-left: 83.3333%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-offset-11</td>
                            <td>
                                margin-left: 91.6667%;
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>col-offset-12</td>
                            <td>
                                margin-left: 100%;
                                <br />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
    <br />;
}
