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
                            <td>border-primary</td>
                            <td>border-color: var(--primary-color);</td>
                            <td>
                                <div className="border-primary border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-white</td>
                            <td>border-color: #ffffff;</td>
                            <td>
                                <div className="border-white border-2 bg-primary shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-transparent</td>
                            <td>border-color: transparent;</td>
                            <td>
                                <div className="border-transparent border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>surface-border</td>
                            <td>border-color: var(--surface-border);</td>
                            <td>
                                <div className="surface-border border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-0</td>
                            <td>border-color: var(--surface-0);</td>
                            <td>
                                <div className="border-0 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-50</td>
                            <td>border-color: var(--surface-50);</td>
                            <td>
                                <div className="border-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-100</td>
                            <td>border-color: var(--surface-100);</td>
                            <td>
                                <div className="border-100 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-200</td>
                            <td>border-color: var(--surface-200);</td>
                            <td>
                                <div className="border-200 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-300</td>
                            <td>border-color: var(--surface-300);</td>
                            <td>
                                <div className="border-300 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-400</td>
                            <td>border-color: var(--surface-400);</td>
                            <td>
                                <div className="border-400 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-500</td>
                            <td>border-color: var(--surface-500);</td>
                            <td>
                                <div className="border-500 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-600</td>
                            <td>border-color: var(--surface-600);</td>
                            <td>
                                <div className="border-600 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-700</td>
                            <td>border-color: var(--surface-700);</td>
                            <td>
                                <div className="border-700 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-800</td>
                            <td>border-color: var(--surface-800);</td>
                            <td>
                                <div className="border-800 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-900</td>
                            <td>border-color: var(--surface-900);</td>
                            <td>
                                <div className="border-900 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-blue-50</td>
                            <td>border-color: var(--blue-50);</td>
                            <td>
                                <div className="border-blue-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-blue-100</td>
                            <td>border-color: var(--blue-100);</td>
                            <td>
                                <div className="border-blue-100 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-blue-200</td>
                            <td>border-color: var(--blue-200);</td>
                            <td>
                                <div className="border-blue-200 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-blue-300</td>
                            <td>border-color: var(--blue-300);</td>
                            <td>
                                <div className="border-blue-300 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-blue-400</td>
                            <td>border-color: var(--blue-400);</td>
                            <td>
                                <div className="border-blue-400 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-blue-500</td>
                            <td>border-color: var(--blue-500);</td>
                            <td>
                                <div className="border-blue-500 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-blue-600</td>
                            <td>border-color: var(--blue-600);</td>
                            <td>
                                <div className="border-blue-600 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-blue-700</td>
                            <td>border-color: var(--blue-700);</td>
                            <td>
                                <div className="border-blue-700 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-blue-800</td>
                            <td>border-color: var(--blue-800);</td>
                            <td>
                                <div className="border-blue-800 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-blue-900</td>
                            <td>border-color: var(--blue-900);</td>
                            <td>
                                <div className="border-blue-900 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-green-50</td>
                            <td>border-color: var(--green-50);</td>
                            <td>
                                <div className="border-green-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-green-100</td>
                            <td>border-color: var(--green-100);</td>
                            <td>
                                <div className="border-green-100 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-green-200</td>
                            <td>border-color: var(--green-200);</td>
                            <td>
                                <div className="border-green-200 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-green-300</td>
                            <td>border-color: var(--green-300);</td>
                            <td>
                                <div className="border-green-300 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-green-400</td>
                            <td>border-color: var(--green-400);</td>
                            <td>
                                <div className="border-green-400 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-green-500</td>
                            <td>border-color: var(--green-500);</td>
                            <td>
                                <div className="border-green-500 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-green-600</td>
                            <td>border-color: var(--green-600);</td>
                            <td>
                                <div className="border-green-600 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-green-700</td>
                            <td>border-color: var(--green-700);</td>
                            <td>
                                <div className="border-green-700 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-green-800</td>
                            <td>border-color: var(--green-800);</td>
                            <td>
                                <div className="border-green-800 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-green-900</td>
                            <td>border-color: var(--green-900);</td>
                            <td>
                                <div className="border-green-900 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-yellow-50</td>
                            <td>border-color: var(--yellow-50);</td>
                            <td>
                                <div className="border-yellow-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-yellow-100</td>
                            <td>border-color: var(--yellow-100);</td>
                            <td>
                                <div className="border-yellow-100 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-yellow-200</td>
                            <td>border-color: var(--yellow-200);</td>
                            <td>
                                <div className="border-yellow-200 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-yellow-300</td>
                            <td>border-color: var(--yellow-300);</td>
                            <td>
                                <div className="border-yellow-300 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-yellow-400</td>
                            <td>border-color: var(--yellow-400);</td>
                            <td>
                                <div className="border-yellow-400 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-yellow-500</td>
                            <td>border-color: var(--yellow-500);</td>
                            <td>
                                <div className="border-yellow-500 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-yellow-600</td>
                            <td>border-color: var(--yellow-600);</td>
                            <td>
                                <div className="border-yellow-600 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-yellow-700</td>
                            <td>border-color: var(--yellow-700);</td>
                            <td>
                                <div className="border-yellow-700 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-yellow-800</td>
                            <td>border-color: var(--yellow-800);</td>
                            <td>
                                <div className="border-yellow-800 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-yellow-900</td>
                            <td>border-color: var(--yellow-900);</td>
                            <td>
                                <div className="border-yellow-900 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-cyan-50</td>
                            <td>border-color: var(--cyan-50);</td>
                            <td>
                                <div className="border-cyan-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-cyan-100</td>
                            <td>border-color: var(--cyan-100);</td>
                            <td>
                                <div className="border-cyan-100 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-cyan-200</td>
                            <td>border-color: var(--cyan-200);</td>
                            <td>
                                <div className="border-cyan-200 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-cyan-300</td>
                            <td>border-color: var(--cyan-300);</td>
                            <td>
                                <div className="border-cyan-300 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-cyan-400</td>
                            <td>border-color: var(--cyan-400);</td>
                            <td>
                                <div className="border-cyan-400 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-cyan-500</td>
                            <td>border-color: var(--cyan-500);</td>
                            <td>
                                <div className="border-cyan-500 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-cyan-600</td>
                            <td>border-color: var(--cyan-600);</td>
                            <td>
                                <div className="border-cyan-600 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-cyan-700</td>
                            <td>border-color: var(--cyan-700);</td>
                            <td>
                                <div className="border-cyan-700 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-cyan-800</td>
                            <td>border-color: var(--cyan-800);</td>
                            <td>
                                <div className="border-cyan-800 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-cyan-900</td>
                            <td>border-color: var(--cyan-900);</td>
                            <td>
                                <div className="border-cyan-900 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-pink-50</td>
                            <td>border-color: var(--pink-50);</td>
                            <td>
                                <div className="border-pink-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-pink-100</td>
                            <td>border-color: var(--pink-100);</td>
                            <td>
                                <div className="border-pink-100 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-pink-200</td>
                            <td>border-color: var(--pink-200);</td>
                            <td>
                                <div className="border-pink-200 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-pink-300</td>
                            <td>border-color: var(--pink-300);</td>
                            <td>
                                <div className="border-pink-300 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-pink-400</td>
                            <td>border-color: var(--pink-400);</td>
                            <td>
                                <div className="border-pink-400 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-pink-500</td>
                            <td>border-color: var(--pink-500);</td>
                            <td>
                                <div className="border-pink-500 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-pink-600</td>
                            <td>border-color: var(--pink-600);</td>
                            <td>
                                <div className="border-pink-600 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-pink-700</td>
                            <td>border-color: var(--pink-700);</td>
                            <td>
                                <div className="border-pink-700 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-pink-800</td>
                            <td>border-color: var(--pink-800);</td>
                            <td>
                                <div className="border-pink-800 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-pink-900</td>
                            <td>border-color: var(--pink-900);</td>
                            <td>
                                <div className="border-pink-900 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-indigo-50</td>
                            <td>border-color: var(--indigo-50);</td>
                            <td>
                                <div className="border-indigo-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-indigo-100</td>
                            <td>border-color: var(--indigo-100);</td>
                            <td>
                                <div className="border-indigo-100 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-indigo-200</td>
                            <td>border-color: var(--indigo-200);</td>
                            <td>
                                <div className="border-indigo-200 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-indigo-300</td>
                            <td>border-color: var(--indigo-300);</td>
                            <td>
                                <div className="border-indigo-300 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-indigo-400</td>
                            <td>border-color: var(--indigo-400);</td>
                            <td>
                                <div className="border-indigo-400 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-indigo-500</td>
                            <td>border-color: var(--indigo-500);</td>
                            <td>
                                <div className="border-indigo-500 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-indigo-600</td>
                            <td>border-color: var(--indigo-600);</td>
                            <td>
                                <div className="border-indigo-600 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-indigo-700</td>
                            <td>border-color: var(--indigo-700);</td>
                            <td>
                                <div className="border-indigo-700 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-indigo-800</td>
                            <td>border-color: var(--indigo-800);</td>
                            <td>
                                <div className="border-indigo-800 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-indigo-900</td>
                            <td>border-color: var(--indigo-900);</td>
                            <td>
                                <div className="border-indigo-900 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-teal-50</td>
                            <td>border-color: var(--teal-50);</td>
                            <td>
                                <div className="border-teal-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-teal-100</td>
                            <td>border-color: var(--teal-100);</td>
                            <td>
                                <div className="border-teal-100 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-teal-200</td>
                            <td>border-color: var(--teal-200);</td>
                            <td>
                                <div className="border-teal-200 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-teal-300</td>
                            <td>border-color: var(--teal-300);</td>
                            <td>
                                <div className="border-teal-300 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-teal-400</td>
                            <td>border-color: var(--teal-400);</td>
                            <td>
                                <div className="border-teal-400 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-teal-500</td>
                            <td>border-color: var(--teal-500);</td>
                            <td>
                                <div className="border-teal-500 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-teal-600</td>
                            <td>border-color: var(--teal-600);</td>
                            <td>
                                <div className="border-teal-600 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-teal-700</td>
                            <td>border-color: var(--teal-700);</td>
                            <td>
                                <div className="border-teal-700 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-teal-800</td>
                            <td>border-color: var(--teal-800);</td>
                            <td>
                                <div className="border-teal-800 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-teal-900</td>
                            <td>border-color: var(--teal-900);</td>
                            <td>
                                <div className="border-teal-900 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-orange-50</td>
                            <td>border-color: var(--orange-50);</td>
                            <td>
                                <div className="border-orange-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-orange-100</td>
                            <td>border-color: var(--orange-100);</td>
                            <td>
                                <div className="border-orange-100 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-orange-200</td>
                            <td>border-color: var(--orange-200);</td>
                            <td>
                                <div className="border-orange-200 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-orange-300</td>
                            <td>border-color: var(--orange-300);</td>
                            <td>
                                <div className="border-orange-300 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-orange-400</td>
                            <td>border-color: var(--orange-400);</td>
                            <td>
                                <div className="border-orange-400 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-orange-500</td>
                            <td>border-color: var(--orange-500);</td>
                            <td>
                                <div className="border-orange-500 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-orange-600</td>
                            <td>border-color: var(--orange-600);</td>
                            <td>
                                <div className="border-orange-600 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-orange-700</td>
                            <td>border-color: var(--orange-700);</td>
                            <td>
                                <div className="border-orange-700 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-orange-800</td>
                            <td>border-color: var(--orange-800);</td>
                            <td>
                                <div className="border-orange-800 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-orange-900</td>
                            <td>border-color: var(--orange-900);</td>
                            <td>
                                <div className="border-orange-900 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-bluegray-50</td>
                            <td>border-color: var(--bluegray-50);</td>
                            <td>
                                <div className="border-bluegray-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-bluegray-100</td>
                            <td>border-color: var(--bluegray-100);</td>
                            <td>
                                <div className="border-bluegray-100 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-bluegray-200</td>
                            <td>border-color: var(--bluegray-200);</td>
                            <td>
                                <div className="border-bluegray-200 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-bluegray-300</td>
                            <td>border-color: var(--bluegray-300);</td>
                            <td>
                                <div className="border-bluegray-300 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-bluegray-400</td>
                            <td>border-color: var(--bluegray-400);</td>
                            <td>
                                <div className="border-bluegray-400 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-bluegray-500</td>
                            <td>border-color: var(--bluegray-500);</td>
                            <td>
                                <div className="border-bluegray-500 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-bluegray-600</td>
                            <td>border-color: var(--bluegray-600);</td>
                            <td>
                                <div className="border-bluegray-600 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-bluegray-700</td>
                            <td>border-color: var(--bluegray-700);</td>
                            <td>
                                <div className="border-bluegray-700 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-bluegray-800</td>
                            <td>border-color: var(--bluegray-800);</td>
                            <td>
                                <div className="border-bluegray-800 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-bluegray-900</td>
                            <td>border-color: var(--bluegray-900);</td>
                            <td>
                                <div className="border-bluegray-900 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-purple-50</td>
                            <td>border-color: var(--purple-50);</td>
                            <td>
                                <div className="border-purple-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-purple-100</td>
                            <td>border-color: var(--purple-100);</td>
                            <td>
                                <div className="border-purple-100 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-purple-200</td>
                            <td>border-color: var(--purple-200);</td>
                            <td>
                                <div className="border-purple-200 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-purple-300</td>
                            <td>border-color: var(--purple-300);</td>
                            <td>
                                <div className="border-purple-300 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-purple-400</td>
                            <td>border-color: var(--purple-400);</td>
                            <td>
                                <div className="border-purple-400 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-purple-500</td>
                            <td>border-color: var(--purple-500);</td>
                            <td>
                                <div className="border-purple-500 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-purple-600</td>
                            <td>border-color: var(--purple-600);</td>
                            <td>
                                <div className="border-purple-600 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-purple-700</td>
                            <td>border-color: var(--purple-700);</td>
                            <td>
                                <div className="border-purple-700 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-purple-800</td>
                            <td>border-color: var(--purple-800);</td>
                            <td>
                                <div className="border-purple-800 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-purple-900</td>
                            <td>border-color: var(--purple-900);</td>
                            <td>
                                <div className="border-purple-900 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-gray-50</td>
                            <td>border-color: var(--gray-50);</td>
                            <td>
                                <div className="border-gray-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-gray-100</td>
                            <td>border-color: var(--gray-100);</td>
                            <td>
                                <div className="border-gray-100 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-gray-200</td>
                            <td>border-color: var(--gray-200);</td>
                            <td>
                                <div className="border-gray-200 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-gray-300</td>
                            <td>border-color: var(--gray-300);</td>
                            <td>
                                <div className="border-gray-300 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-gray-400</td>
                            <td>border-color: var(--gray-400);</td>
                            <td>
                                <div className="border-gray-400 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-gray-500</td>
                            <td>border-color: var(--gray-500);</td>
                            <td>
                                <div className="border-gray-500 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-gray-600</td>
                            <td>border-color: var(--gray-600);</td>
                            <td>
                                <div className="border-gray-600 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-gray-700</td>
                            <td>border-color: var(--gray-700);</td>
                            <td>
                                <div className="border-gray-700 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-gray-800</td>
                            <td>border-color: var(--gray-800);</td>
                            <td>
                                <div className="border-gray-800 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-gray-900</td>
                            <td>border-color: var(--gray-900);</td>
                            <td>
                                <div className="border-gray-900 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-red-50</td>
                            <td>border-color: var(--red-50);</td>
                            <td>
                                <div className="border-red-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-red-100</td>
                            <td>border-color: var(--red-100);</td>
                            <td>
                                <div className="border-red-100 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-red-200</td>
                            <td>border-color: var(--red-200);</td>
                            <td>
                                <div className="border-red-200 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-red-300</td>
                            <td>border-color: var(--red-300);</td>
                            <td>
                                <div className="border-red-300 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-red-400</td>
                            <td>border-color: var(--red-400);</td>
                            <td>
                                <div className="border-red-400 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-red-500</td>
                            <td>border-color: var(--red-500);</td>
                            <td>
                                <div className="border-red-500 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-red-600</td>
                            <td>border-color: var(--red-600);</td>
                            <td>
                                <div className="border-red-600 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-red-700</td>
                            <td>border-color: var(--red-700);</td>
                            <td>
                                <div className="border-red-700 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-red-800</td>
                            <td>border-color: var(--red-800);</td>
                            <td>
                                <div className="border-red-800 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-red-900</td>
                            <td>border-color: var(--red-900);</td>
                            <td>
                                <div className="border-red-900 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-primary-50</td>
                            <td>border-color: var(--primary-50);</td>
                            <td>
                                <div className="border-primary-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-primary-100</td>
                            <td>border-color: var(--primary-100);</td>
                            <td>
                                <div className="border-primary-100 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-primary-200</td>
                            <td>border-color: var(--primary-200);</td>
                            <td>
                                <div className="border-primary-200 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-primary-300</td>
                            <td>border-color: var(--primary-300);</td>
                            <td>
                                <div className="border-primary-300 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-primary-400</td>
                            <td>border-color: var(--primary-400);</td>
                            <td>
                                <div className="border-primary-400 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-primary-500</td>
                            <td>border-color: var(--primary-500);</td>
                            <td>
                                <div className="border-primary-500 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-primary-600</td>
                            <td>border-color: var(--primary-600);</td>
                            <td>
                                <div className="border-primary-600 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-primary-700</td>
                            <td>border-color: var(--primary-700);</td>
                            <td>
                                <div className="border-primary-700 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-primary-800</td>
                            <td>border-color: var(--primary-800);</td>
                            <td>
                                <div className="border-primary-800 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-primary-900</td>
                            <td>border-color: var(--primary-900);</td>
                            <td>
                                <div className="border-primary-900 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-white-alpha-10</td>
                            <td>border-color: rgba(255,255,255,0.1);</td>
                            <td>
                                <div className="border-white-alpha-10 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-white-alpha-20</td>
                            <td>border-color: rgba(255,255,255,0.2);</td>
                            <td>
                                <div className="border-white-alpha-20 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-white-alpha-30</td>
                            <td>border-color: rgba(255,255,255,0.3);</td>
                            <td>
                                <div className="border-white-alpha-30 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-white-alpha-40</td>
                            <td>border-color: rgba(255,255,255,0.4);</td>
                            <td>
                                <div className="border-white-alpha-40 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-white-alpha-50</td>
                            <td>border-color: rgba(255,255,255,0.5);</td>
                            <td>
                                <div className="border-white-alpha-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-white-alpha-60</td>
                            <td>border-color: rgba(255,255,255,0.6);</td>
                            <td>
                                <div className="border-white-alpha-60 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-white-alpha-70</td>
                            <td>border-color: rgba(255,255,255,0.7);</td>
                            <td>
                                <div className="border-white-alpha-70 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-white-alpha-80</td>
                            <td>border-color: rgba(255,255,255,0.8);</td>
                            <td>
                                <div className="border-white-alpha-80 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-white-alpha-90</td>
                            <td>border-color: rgba(255,255,255,0.9);</td>
                            <td>
                                <div className="border-white-alpha-90 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-black-alpha-10</td>
                            <td>border-color: rgba(0,0,0,0.1);</td>
                            <td>
                                <div className="border-black-alpha-10 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-black-alpha-20</td>
                            <td>border-color: rgba(0,0,0,0.2);</td>
                            <td>
                                <div className="border-black-alpha-20 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-black-alpha-30</td>
                            <td>border-color: rgba(0,0,0,0.3);</td>
                            <td>
                                <div className="border-black-alpha-30 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-black-alpha-40</td>
                            <td>border-color: rgba(0,0,0,0.4);</td>
                            <td>
                                <div className="border-black-alpha-40 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-black-alpha-50</td>
                            <td>border-color: rgba(0,0,0,0.5);</td>
                            <td>
                                <div className="border-black-alpha-50 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-black-alpha-60</td>
                            <td>border-color: rgba(0,0,0,0.6);</td>
                            <td>
                                <div className="border-black-alpha-60 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-black-alpha-70</td>
                            <td>border-color: rgba(0,0,0,0.7);</td>
                            <td>
                                <div className="border-black-alpha-70 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-black-alpha-80</td>
                            <td>border-color: rgba(0,0,0,0.8);</td>
                            <td>
                                <div className="border-black-alpha-80 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>border-black-alpha-90</td>
                            <td>border-color: rgba(0,0,0,0.9);</td>
                            <td>
                                <div className="border-black-alpha-90 border-2 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
