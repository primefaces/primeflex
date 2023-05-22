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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>bg-primary</td>
                            <td>
                                background-color: var(--primary-color); <br />
                                color: var(--primary-color-text);
                            </td>
                            <td>
                                <div className="bg-primary shadow-1 text-center" style={{ width: '50px', height: '20px' }}>
                                    A
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-primary-reverse</td>
                            <td>
                                background-color: var(--primary-color-text); <br />
                                color: var(--primary-color);
                            </td>
                            <td>
                                <div className="bg-primary-reverse shadow-1 text-center" style={{ width: '50px', height: '20px' }}>
                                    A
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-white</td>
                            <td>background-color: #ffffff;</td>
                            <td>
                                <div className="bg-white shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-ground</td>
                            <td>background-color: var(--surface-ground);</td>
                            <td>
                                <div className="surface-ground shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-section</td>
                            <td>background-color: var(--surface-section);</td>
                            <td>
                                <div className="surface-ground shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-card</td>
                            <td>background-color: var(--surface-card);</td>
                            <td>
                                <div className="surface-ground shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-overlay</td>
                            <td>background-color: var(--surface-overlay);</td>
                            <td>
                                <div className="surface-ground shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-hover</td>
                            <td>background-color: var(--surface-hover);</td>
                            <td>
                                <div className="surface-ground shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-0</td>
                            <td>background-color: var(--surface-0);</td>
                            <td>
                                <div className="surface-0 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-50</td>
                            <td>background-color: var(--surface-50);</td>
                            <td>
                                <div className="surface-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-100</td>
                            <td>background-color: var(--surface-100);</td>
                            <td>
                                <div className="surface-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-200</td>
                            <td>background-color: var(--surface-200);</td>
                            <td>
                                <div className="surface-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-300</td>
                            <td>background-color: var(--surface-300);</td>
                            <td>
                                <div className="surface-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-400</td>
                            <td>background-color: var(--surface-400);</td>
                            <td>
                                <div className="surface-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-500</td>
                            <td>background-color: var(--surface-500);</td>
                            <td>
                                <div className="surface-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-600</td>
                            <td>background-color: var(--surface-600);</td>
                            <td>
                                <div className="surface-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-700</td>
                            <td>background-color: var(--surface-700);</td>
                            <td>
                                <div className="surface-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-800</td>
                            <td>background-color: var(--surface-800);</td>
                            <td>
                                <div className="surface-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-900</td>
                            <td>background-color: var(--surface-900);</td>
                            <td>
                                <div className="surface-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-blue-50</td>
                            <td>background-color: var(--blue-50);</td>
                            <td>
                                <div className="bg-blue-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-blue-100</td>
                            <td>background-color: var(--blue-100);</td>
                            <td>
                                <div className="bg-blue-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-blue-200</td>
                            <td>background-color: var(--blue-200);</td>
                            <td>
                                <div className="bg-blue-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-blue-300</td>
                            <td>background-color: var(--blue-300);</td>
                            <td>
                                <div className="bg-blue-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-blue-400</td>
                            <td>background-color: var(--blue-400);</td>
                            <td>
                                <div className="bg-blue-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-blue-500</td>
                            <td>background-color: var(--blue-500);</td>
                            <td>
                                <div className="bg-blue-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-blue-600</td>
                            <td>background-color: var(--blue-600);</td>
                            <td>
                                <div className="bg-blue-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-blue-700</td>
                            <td>background-color: var(--blue-700);</td>
                            <td>
                                <div className="bg-blue-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-blue-800</td>
                            <td>background-color: var(--blue-800);</td>
                            <td>
                                <div className="bg-blue-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-blue-900</td>
                            <td>background-color: var(--blue-900);</td>
                            <td>
                                <div className="bg-blue-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-green-50</td>
                            <td>background-color: var(--green-50);</td>
                            <td>
                                <div className="bg-green-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-green-100</td>
                            <td>background-color: var(--green-100);</td>
                            <td>
                                <div className="bg-green-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-green-200</td>
                            <td>background-color: var(--green-200);</td>
                            <td>
                                <div className="bg-green-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-green-300</td>
                            <td>background-color: var(--green-300);</td>
                            <td>
                                <div className="bg-green-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-green-400</td>
                            <td>background-color: var(--green-400);</td>
                            <td>
                                <div className="bg-green-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-green-500</td>
                            <td>background-color: var(--green-500);</td>
                            <td>
                                <div className="bg-green-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-green-600</td>
                            <td>background-color: var(--green-600);</td>
                            <td>
                                <div className="bg-green-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-green-700</td>
                            <td>background-color: var(--green-700);</td>
                            <td>
                                <div className="bg-green-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-green-800</td>
                            <td>background-color: var(--green-800);</td>
                            <td>
                                <div className="bg-green-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-green-900</td>
                            <td>background-color: var(--green-900);</td>
                            <td>
                                <div className="bg-green-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-yellow-50</td>
                            <td>background-color: var(--yellow-50);</td>
                            <td>
                                <div className="bg-yellow-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-yellow-100</td>
                            <td>background-color: var(--yellow-100);</td>
                            <td>
                                <div className="bg-yellow-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-yellow-200</td>
                            <td>background-color: var(--yellow-200);</td>
                            <td>
                                <div className="bg-yellow-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-yellow-300</td>
                            <td>background-color: var(--yellow-300);</td>
                            <td>
                                <div className="bg-yellow-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-yellow-400</td>
                            <td>background-color: var(--yellow-400);</td>
                            <td>
                                <div className="bg-yellow-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-yellow-500</td>
                            <td>background-color: var(--yellow-500);</td>
                            <td>
                                <div className="bg-yellow-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-yellow-600</td>
                            <td>background-color: var(--yellow-600);</td>
                            <td>
                                <div className="bg-yellow-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-yellow-700</td>
                            <td>background-color: var(--yellow-700);</td>
                            <td>
                                <div className="bg-yellow-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-yellow-800</td>
                            <td>background-color: var(--yellow-800);</td>
                            <td>
                                <div className="bg-yellow-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-yellow-900</td>
                            <td>background-color: var(--yellow-900);</td>
                            <td>
                                <div className="bg-yellow-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-cyan-50</td>
                            <td>background-color: var(--cyan-50);</td>
                            <td>
                                <div className="bg-cyan-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-cyan-100</td>
                            <td>background-color: var(--cyan-100);</td>
                            <td>
                                <div className="bg-cyan-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-cyan-200</td>
                            <td>background-color: var(--cyan-200);</td>
                            <td>
                                <div className="bg-cyan-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-cyan-300</td>
                            <td>background-color: var(--cyan-300);</td>
                            <td>
                                <div className="bg-cyan-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-cyan-400</td>
                            <td>background-color: var(--cyan-400);</td>
                            <td>
                                <div className="bg-cyan-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-cyan-500</td>
                            <td>background-color: var(--cyan-500);</td>
                            <td>
                                <div className="bg-cyan-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-cyan-600</td>
                            <td>background-color: var(--cyan-600);</td>
                            <td>
                                <div className="bg-cyan-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-cyan-700</td>
                            <td>background-color: var(--cyan-700);</td>
                            <td>
                                <div className="bg-cyan-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-cyan-800</td>
                            <td>background-color: var(--cyan-800);</td>
                            <td>
                                <div className="bg-cyan-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-cyan-900</td>
                            <td>background-color: var(--cyan-900);</td>
                            <td>
                                <div className="bg-cyan-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-pink-50</td>
                            <td>background-color: var(--pink-50);</td>
                            <td>
                                <div className="bg-pink-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-pink-100</td>
                            <td>background-color: var(--pink-100);</td>
                            <td>
                                <div className="bg-pink-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-pink-200</td>
                            <td>background-color: var(--pink-200);</td>
                            <td>
                                <div className="bg-pink-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-pink-300</td>
                            <td>background-color: var(--pink-300);</td>
                            <td>
                                <div className="bg-pink-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-pink-400</td>
                            <td>background-color: var(--pink-400);</td>
                            <td>
                                <div className="bg-pink-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-pink-500</td>
                            <td>background-color: var(--pink-500);</td>
                            <td>
                                <div className="bg-pink-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-pink-600</td>
                            <td>background-color: var(--pink-600);</td>
                            <td>
                                <div className="bg-pink-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-pink-700</td>
                            <td>background-color: var(--pink-700);</td>
                            <td>
                                <div className="bg-pink-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-pink-800</td>
                            <td>background-color: var(--pink-800);</td>
                            <td>
                                <div className="bg-pink-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-pink-900</td>
                            <td>background-color: var(--pink-900);</td>
                            <td>
                                <div className="bg-pink-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-indigo-50</td>
                            <td>background-color: var(--indigo-50);</td>
                            <td>
                                <div className="bg-indigo-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-indigo-100</td>
                            <td>background-color: var(--indigo-100);</td>
                            <td>
                                <div className="bg-indigo-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-indigo-200</td>
                            <td>background-color: var(--indigo-200);</td>
                            <td>
                                <div className="bg-indigo-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-indigo-300</td>
                            <td>background-color: var(--indigo-300);</td>
                            <td>
                                <div className="bg-indigo-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-indigo-400</td>
                            <td>background-color: var(--indigo-400);</td>
                            <td>
                                <div className="bg-indigo-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-indigo-500</td>
                            <td>background-color: var(--indigo-500);</td>
                            <td>
                                <div className="bg-indigo-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-indigo-600</td>
                            <td>background-color: var(--indigo-600);</td>
                            <td>
                                <div className="bg-indigo-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-indigo-700</td>
                            <td>background-color: var(--indigo-700);</td>
                            <td>
                                <div className="bg-indigo-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-indigo-800</td>
                            <td>background-color: var(--indigo-800);</td>
                            <td>
                                <div className="bg-indigo-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-indigo-900</td>
                            <td>background-color: var(--indigo-900);</td>
                            <td>
                                <div className="bg-indigo-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-teal-50</td>
                            <td>background-color: var(--teal-50);</td>
                            <td>
                                <div className="bg-teal-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-teal-100</td>
                            <td>background-color: var(--teal-100);</td>
                            <td>
                                <div className="bg-teal-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-teal-200</td>
                            <td>background-color: var(--teal-200);</td>
                            <td>
                                <div className="bg-teal-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-teal-300</td>
                            <td>background-color: var(--teal-300);</td>
                            <td>
                                <div className="bg-teal-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-teal-400</td>
                            <td>background-color: var(--teal-400);</td>
                            <td>
                                <div className="bg-teal-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-teal-500</td>
                            <td>background-color: var(--teal-500);</td>
                            <td>
                                <div className="bg-teal-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-teal-600</td>
                            <td>background-color: var(--teal-600);</td>
                            <td>
                                <div className="bg-teal-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-teal-700</td>
                            <td>background-color: var(--teal-700);</td>
                            <td>
                                <div className="bg-teal-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-teal-800</td>
                            <td>background-color: var(--teal-800);</td>
                            <td>
                                <div className="bg-teal-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-teal-900</td>
                            <td>background-color: var(--teal-900);</td>
                            <td>
                                <div className="bg-teal-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-orange-50</td>
                            <td>background-color: var(--orange-50);</td>
                            <td>
                                <div className="bg-orange-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-orange-100</td>
                            <td>background-color: var(--orange-100);</td>
                            <td>
                                <div className="bg-orange-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-orange-200</td>
                            <td>background-color: var(--orange-200);</td>
                            <td>
                                <div className="bg-orange-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-orange-300</td>
                            <td>background-color: var(--orange-300);</td>
                            <td>
                                <div className="bg-orange-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-orange-400</td>
                            <td>background-color: var(--orange-400);</td>
                            <td>
                                <div className="bg-orange-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-orange-500</td>
                            <td>background-color: var(--orange-500);</td>
                            <td>
                                <div className="bg-orange-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-orange-600</td>
                            <td>background-color: var(--orange-600);</td>
                            <td>
                                <div className="bg-orange-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-orange-700</td>
                            <td>background-color: var(--orange-700);</td>
                            <td>
                                <div className="bg-orange-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-orange-800</td>
                            <td>background-color: var(--orange-800);</td>
                            <td>
                                <div className="bg-orange-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-orange-900</td>
                            <td>background-color: var(--orange-900);</td>
                            <td>
                                <div className="bg-orange-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-bluegray-50</td>
                            <td>background-color: var(--bluegray-50);</td>
                            <td>
                                <div className="bg-bluegray-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-bluegray-100</td>
                            <td>background-color: var(--bluegray-100);</td>
                            <td>
                                <div className="bg-bluegray-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-bluegray-200</td>
                            <td>background-color: var(--bluegray-200);</td>
                            <td>
                                <div className="bg-bluegray-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-bluegray-300</td>
                            <td>background-color: var(--bluegray-300);</td>
                            <td>
                                <div className="bg-bluegray-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-bluegray-400</td>
                            <td>background-color: var(--bluegray-400);</td>
                            <td>
                                <div className="bg-bluegray-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-bluegray-500</td>
                            <td>background-color: var(--bluegray-500);</td>
                            <td>
                                <div className="bg-bluegray-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-bluegray-600</td>
                            <td>background-color: var(--bluegray-600);</td>
                            <td>
                                <div className="bg-bluegray-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-bluegray-700</td>
                            <td>background-color: var(--bluegray-700);</td>
                            <td>
                                <div className="bg-bluegray-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-bluegray-800</td>
                            <td>background-color: var(--bluegray-800);</td>
                            <td>
                                <div className="bg-bluegray-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-bluegray-900</td>
                            <td>background-color: var(--bluegray-900);</td>
                            <td>
                                <div className="bg-bluegray-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-purple-50</td>
                            <td>background-color: var(--purple-50);</td>
                            <td>
                                <div className="bg-purple-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-purple-100</td>
                            <td>background-color: var(--purple-100);</td>
                            <td>
                                <div className="bg-purple-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-purple-200</td>
                            <td>background-color: var(--purple-200);</td>
                            <td>
                                <div className="bg-purple-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-purple-300</td>
                            <td>background-color: var(--purple-300);</td>
                            <td>
                                <div className="bg-purple-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-purple-400</td>
                            <td>background-color: var(--purple-400);</td>
                            <td>
                                <div className="bg-purple-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-purple-500</td>
                            <td>background-color: var(--purple-500);</td>
                            <td>
                                <div className="bg-purple-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-purple-600</td>
                            <td>background-color: var(--purple-600);</td>
                            <td>
                                <div className="bg-purple-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-purple-700</td>
                            <td>background-color: var(--purple-700);</td>
                            <td>
                                <div className="bg-purple-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-purple-800</td>
                            <td>background-color: var(--purple-800);</td>
                            <td>
                                <div className="bg-purple-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-purple-900</td>
                            <td>background-color: var(--purple-900);</td>
                            <td>
                                <div className="bg-purple-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-gray-50</td>
                            <td>background-color: var(--gray-50);</td>
                            <td>
                                <div className="bg-gray-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-gray-100</td>
                            <td>background-color: var(--gray-100);</td>
                            <td>
                                <div className="bg-gray-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-gray-200</td>
                            <td>background-color: var(--gray-200);</td>
                            <td>
                                <div className="bg-gray-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-gray-300</td>
                            <td>background-color: var(--gray-300);</td>
                            <td>
                                <div className="bg-gray-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-gray-400</td>
                            <td>background-color: var(--gray-400);</td>
                            <td>
                                <div className="bg-gray-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-gray-500</td>
                            <td>background-color: var(--gray-500);</td>
                            <td>
                                <div className="bg-gray-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-gray-600</td>
                            <td>background-color: var(--gray-600);</td>
                            <td>
                                <div className="bg-gray-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-gray-700</td>
                            <td>background-color: var(--gray-700);</td>
                            <td>
                                <div className="bg-gray-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-gray-800</td>
                            <td>background-color: var(--gray-800);</td>
                            <td>
                                <div className="bg-gray-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-gray-900</td>
                            <td>background-color: var(--gray-900);</td>
                            <td>
                                <div className="bg-gray-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-red-50</td>
                            <td>background-color: var(--red-50);</td>
                            <td>
                                <div className="bg-red-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-red-100</td>
                            <td>background-color: var(--red-100);</td>
                            <td>
                                <div className="bg-red-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-red-200</td>
                            <td>background-color: var(--red-200);</td>
                            <td>
                                <div className="bg-red-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-red-300</td>
                            <td>background-color: var(--red-300);</td>
                            <td>
                                <div className="bg-red-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-red-400</td>
                            <td>background-color: var(--red-400);</td>
                            <td>
                                <div className="bg-red-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-red-500</td>
                            <td>background-color: var(--red-500);</td>
                            <td>
                                <div className="bg-red-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-red-600</td>
                            <td>background-color: var(--red-600);</td>
                            <td>
                                <div className="bg-red-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-red-700</td>
                            <td>background-color: var(--red-700);</td>
                            <td>
                                <div className="bg-red-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-red-800</td>
                            <td>background-color: var(--red-800);</td>
                            <td>
                                <div className="bg-red-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-red-900</td>
                            <td>background-color: var(--red-900);</td>
                            <td>
                                <div className="bg-red-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-primary-50</td>
                            <td>background-color: var(--primary-50);</td>
                            <td>
                                <div className="bg-primary-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-primary-100</td>
                            <td>background-color: var(--primary-100);</td>
                            <td>
                                <div className="bg-primary-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-primary-200</td>
                            <td>background-color: var(--primary-200);</td>
                            <td>
                                <div className="bg-primary-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-primary-300</td>
                            <td>background-color: var(--primary-300);</td>
                            <td>
                                <div className="bg-primary-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-primary-400</td>
                            <td>background-color: var(--primary-400);</td>
                            <td>
                                <div className="bg-primary-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-primary-500</td>
                            <td>background-color: var(--primary-500);</td>
                            <td>
                                <div className="bg-primary-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-primary-600</td>
                            <td>background-color: var(--primary-600);</td>
                            <td>
                                <div className="bg-primary-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-primary-700</td>
                            <td>background-color: var(--primary-700);</td>
                            <td>
                                <div className="bg-primary-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-primary-800</td>
                            <td>background-color: var(--primary-800);</td>
                            <td>
                                <div className="bg-primary-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-primary-900</td>
                            <td>background-color: var(--primary-900);</td>
                            <td>
                                <div className="bg-primary-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-white-alpha-10</td>
                            <td>background-color: rgba(255,255,255,0.1);</td>
                            <td>
                                <div className="bg-white-alpha-10 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-white-alpha-20</td>
                            <td>background-color: rgba(255,255,255,0.2);</td>
                            <td>
                                <div className="bg-white-alpha-20 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-white-alpha-30</td>
                            <td>background-color: rgba(255,255,255,0.3);</td>
                            <td>
                                <div className="bg-white-alpha-30 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-white-alpha-40</td>
                            <td>background-color: rgba(255,255,255,0.4);</td>
                            <td>
                                <div className="bg-white-alpha-40 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-white-alpha-50</td>
                            <td>background-color: rgba(255,255,255,0.5);</td>
                            <td>
                                <div className="bg-white-alpha-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-white-alpha-60</td>
                            <td>background-color: rgba(255,255,255,0.6);</td>
                            <td>
                                <div className="bg-white-alpha-60 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-white-alpha-70</td>
                            <td>background-color: rgba(255,255,255,0.7);</td>
                            <td>
                                <div className="bg-white-alpha-70 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-white-alpha-80</td>
                            <td>background-color: rgba(255,255,255,0.8);</td>
                            <td>
                                <div className="bg-white-alpha-80 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-white-alpha-90</td>
                            <td>background-color: rgba(255,255,255,0.9);</td>
                            <td>
                                <div className="bg-white-alpha-90 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-black-alpha-10</td>
                            <td>background-color: rgba(0,0,0,0.1);</td>
                            <td>
                                <div className="bg-black-alpha-10 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-black-alpha-20</td>
                            <td>background-color: rgba(0,0,0,0.2);</td>
                            <td>
                                <div className="bg-black-alpha-20 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-black-alpha-30</td>
                            <td>background-color: rgba(0,0,0,0.3);</td>
                            <td>
                                <div className="bg-black-alpha-30 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-black-alpha-40</td>
                            <td>background-color: rgba(0,0,0,0.4);</td>
                            <td>
                                <div className="bg-black-alpha-40 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-black-alpha-50</td>
                            <td>background-color: rgba(0,0,0,0.5);</td>
                            <td>
                                <div className="bg-black-alpha-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-black-alpha-60</td>
                            <td>background-color: rgba(0,0,0,0.6);</td>
                            <td>
                                <div className="bg-black-alpha-60 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-black-alpha-70</td>
                            <td>background-color: rgba(0,0,0,0.7);</td>
                            <td>
                                <div className="bg-black-alpha-70 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-black-alpha-80</td>
                            <td>background-color: rgba(0,0,0,0.8);</td>
                            <td>
                                <div className="bg-black-alpha-80 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>bg-black-alpha-90</td>
                            <td>background-color: rgba(0,0,0,0.9);</td>
                            <td>
                                <div className="bg-black-alpha-90 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
