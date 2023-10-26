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
                            <td>stroke-none</td>
                            <td>stroke: none;</td>
                        </tr>
                        <tr>
                            <td>stroke-inherit</td>
                            <td>stroke: inherit;</td>
                        </tr>
                        <tr>
                            <td>stroke-current</td>
                            <td>stroke: currentColor;</td>
                        </tr>
                        <tr>
                            <td>stroke-transparent</td>
                            <td>stroke: transparent;</td>
                            <td>
                                <div className="bg-transparent shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-white</td>
                            <td>stroke: #ffffff;</td>
                            <td>
                                <div className="bg-white shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-black</td>
                            <td>stroke: #000000;</td>
                            <td>
                                <div className="bg-black shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-blue-50</td>
                            <td>stroke: var(--blue-50);</td>
                            <td>
                                <div className="bg-blue-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-blue-100</td>
                            <td>stroke: var(--blue-100);</td>
                            <td>
                                <div className="bg-blue-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-blue-200</td>
                            <td>stroke: var(--blue-200);</td>
                            <td>
                                <div className="bg-blue-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-blue-300</td>
                            <td>stroke: var(--blue-300);</td>
                            <td>
                                <div className="bg-blue-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-blue-400</td>
                            <td>stroke: var(--blue-400);</td>
                            <td>
                                <div className="bg-blue-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-blue-500</td>
                            <td>stroke: var(--blue-500);</td>
                            <td>
                                <div className="bg-blue-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-blue-600</td>
                            <td>stroke: var(--blue-600);</td>
                            <td>
                                <div className="bg-blue-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-blue-700</td>
                            <td>stroke: var(--blue-700);</td>
                            <td>
                                <div className="bg-blue-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-blue-800</td>
                            <td>stroke: var(--blue-800);</td>
                            <td>
                                <div className="bg-blue-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-blue-900</td>
                            <td>stroke: var(--blue-900);</td>
                            <td>
                                <div className="bg-blue-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-green-50</td>
                            <td>stroke: var(--green-50);</td>
                            <td>
                                <div className="bg-green-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-green-100</td>
                            <td>stroke: var(--green-100);</td>
                            <td>
                                <div className="bg-green-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-green-200</td>
                            <td>stroke: var(--green-200);</td>
                            <td>
                                <div className="bg-green-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-green-300</td>
                            <td>stroke: var(--green-300);</td>
                            <td>
                                <div className="bg-green-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-green-400</td>
                            <td>stroke: var(--green-400);</td>
                            <td>
                                <div className="bg-green-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-green-500</td>
                            <td>stroke: var(--green-500);</td>
                            <td>
                                <div className="bg-green-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-green-600</td>
                            <td>stroke: var(--green-600);</td>
                            <td>
                                <div className="bg-green-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-green-700</td>
                            <td>stroke: var(--green-700);</td>
                            <td>
                                <div className="bg-green-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-green-800</td>
                            <td>stroke: var(--green-800);</td>
                            <td>
                                <div className="bg-green-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-green-900</td>
                            <td>stroke: var(--green-900);</td>
                            <td>
                                <div className="bg-green-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-yellow-50</td>
                            <td>stroke: var(--yellow-50);</td>
                            <td>
                                <div className="bg-yellow-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-yellow-100</td>
                            <td>stroke: var(--yellow-100);</td>
                            <td>
                                <div className="bg-yellow-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-yellow-200</td>
                            <td>stroke: var(--yellow-200);</td>
                            <td>
                                <div className="bg-yellow-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-yellow-300</td>
                            <td>stroke: var(--yellow-300);</td>
                            <td>
                                <div className="bg-yellow-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-yellow-400</td>
                            <td>stroke: var(--yellow-400);</td>
                            <td>
                                <div className="bg-yellow-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-yellow-500</td>
                            <td>stroke: var(--yellow-500);</td>
                            <td>
                                <div className="bg-yellow-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-yellow-600</td>
                            <td>stroke: var(--yellow-600);</td>
                            <td>
                                <div className="bg-yellow-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-yellow-700</td>
                            <td>stroke: var(--yellow-700);</td>
                            <td>
                                <div className="bg-yellow-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-yellow-800</td>
                            <td>stroke: var(--yellow-800);</td>
                            <td>
                                <div className="bg-yellow-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-yellow-900</td>
                            <td>stroke: var(--yellow-900);</td>
                            <td>
                                <div className="bg-yellow-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-cyan-50</td>
                            <td>stroke: var(--cyan-50);</td>
                            <td>
                                <div className="bg-cyan-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-cyan-100</td>
                            <td>stroke: var(--cyan-100);</td>
                            <td>
                                <div className="bg-cyan-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-cyan-200</td>
                            <td>stroke: var(--cyan-200);</td>
                            <td>
                                <div className="bg-cyan-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-cyan-300</td>
                            <td>stroke: var(--cyan-300);</td>
                            <td>
                                <div className="bg-cyan-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-cyan-400</td>
                            <td>stroke: var(--cyan-400);</td>
                            <td>
                                <div className="bg-cyan-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-cyan-500</td>
                            <td>stroke: var(--cyan-500);</td>
                            <td>
                                <div className="bg-cyan-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-cyan-600</td>
                            <td>stroke: var(--cyan-600);</td>
                            <td>
                                <div className="bg-cyan-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-cyan-700</td>
                            <td>stroke: var(--cyan-700);</td>
                            <td>
                                <div className="bg-cyan-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-cyan-800</td>
                            <td>stroke: var(--cyan-800);</td>
                            <td>
                                <div className="bg-cyan-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-cyan-900</td>
                            <td>stroke: var(--cyan-900);</td>
                            <td>
                                <div className="bg-cyan-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-pink-50</td>
                            <td>stroke: var(--pink-50);</td>
                            <td>
                                <div className="bg-pink-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-pink-100</td>
                            <td>stroke: var(--pink-100);</td>
                            <td>
                                <div className="bg-pink-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-pink-200</td>
                            <td>stroke: var(--pink-200);</td>
                            <td>
                                <div className="bg-pink-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-pink-300</td>
                            <td>stroke: var(--pink-300);</td>
                            <td>
                                <div className="bg-pink-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-pink-400</td>
                            <td>stroke: var(--pink-400);</td>
                            <td>
                                <div className="bg-pink-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-pink-500</td>
                            <td>stroke: var(--pink-500);</td>
                            <td>
                                <div className="bg-pink-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-pink-600</td>
                            <td>stroke: var(--pink-600);</td>
                            <td>
                                <div className="bg-pink-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-pink-700</td>
                            <td>stroke: var(--pink-700);</td>
                            <td>
                                <div className="bg-pink-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-pink-800</td>
                            <td>stroke: var(--pink-800);</td>
                            <td>
                                <div className="bg-pink-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-pink-900</td>
                            <td>stroke: var(--pink-900);</td>
                            <td>
                                <div className="bg-pink-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-indigo-50</td>
                            <td>stroke: var(--indigo-50);</td>
                            <td>
                                <div className="bg-indigo-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-indigo-100</td>
                            <td>stroke: var(--indigo-100);</td>
                            <td>
                                <div className="bg-indigo-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-indigo-200</td>
                            <td>stroke: var(--indigo-200);</td>
                            <td>
                                <div className="bg-indigo-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-indigo-300</td>
                            <td>stroke: var(--indigo-300);</td>
                            <td>
                                <div className="bg-indigo-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-indigo-400</td>
                            <td>stroke: var(--indigo-400);</td>
                            <td>
                                <div className="bg-indigo-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-indigo-500</td>
                            <td>stroke: var(--indigo-500);</td>
                            <td>
                                <div className="bg-indigo-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-indigo-600</td>
                            <td>stroke: var(--indigo-600);</td>
                            <td>
                                <div className="bg-indigo-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-indigo-700</td>
                            <td>stroke: var(--indigo-700);</td>
                            <td>
                                <div className="bg-indigo-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-indigo-800</td>
                            <td>stroke: var(--indigo-800);</td>
                            <td>
                                <div className="bg-indigo-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-indigo-900</td>
                            <td>stroke: var(--indigo-900);</td>
                            <td>
                                <div className="bg-indigo-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-teal-50</td>
                            <td>stroke: var(--teal-50);</td>
                            <td>
                                <div className="bg-teal-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-teal-100</td>
                            <td>stroke: var(--teal-100);</td>
                            <td>
                                <div className="bg-teal-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-teal-200</td>
                            <td>stroke: var(--teal-200);</td>
                            <td>
                                <div className="bg-teal-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-teal-300</td>
                            <td>stroke: var(--teal-300);</td>
                            <td>
                                <div className="bg-teal-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-teal-400</td>
                            <td>stroke: var(--teal-400);</td>
                            <td>
                                <div className="bg-teal-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-teal-500</td>
                            <td>stroke: var(--teal-500);</td>
                            <td>
                                <div className="bg-teal-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-teal-600</td>
                            <td>stroke: var(--teal-600);</td>
                            <td>
                                <div className="bg-teal-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-teal-700</td>
                            <td>stroke: var(--teal-700);</td>
                            <td>
                                <div className="bg-teal-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-teal-800</td>
                            <td>stroke: var(--teal-800);</td>
                            <td>
                                <div className="bg-teal-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-teal-900</td>
                            <td>stroke: var(--teal-900);</td>
                            <td>
                                <div className="bg-teal-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-orange-50</td>
                            <td>stroke: var(--orange-50);</td>
                            <td>
                                <div className="bg-orange-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-orange-100</td>
                            <td>stroke: var(--orange-100);</td>
                            <td>
                                <div className="bg-orange-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-orange-200</td>
                            <td>stroke: var(--orange-200);</td>
                            <td>
                                <div className="bg-orange-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-orange-300</td>
                            <td>stroke: var(--orange-300);</td>
                            <td>
                                <div className="bg-orange-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-orange-400</td>
                            <td>stroke: var(--orange-400);</td>
                            <td>
                                <div className="bg-orange-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-orange-500</td>
                            <td>stroke: var(--orange-500);</td>
                            <td>
                                <div className="bg-orange-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-orange-600</td>
                            <td>stroke: var(--orange-600);</td>
                            <td>
                                <div className="bg-orange-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-orange-700</td>
                            <td>stroke: var(--orange-700);</td>
                            <td>
                                <div className="bg-orange-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-orange-800</td>
                            <td>stroke: var(--orange-800);</td>
                            <td>
                                <div className="bg-orange-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-orange-900</td>
                            <td>stroke: var(--orange-900);</td>
                            <td>
                                <div className="bg-orange-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-bluegray-50</td>
                            <td>stroke: var(--bluegray-50);</td>
                            <td>
                                <div className="bg-bluegray-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-bluegray-100</td>
                            <td>stroke: var(--bluegray-100);</td>
                            <td>
                                <div className="bg-bluegray-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-bluegray-200</td>
                            <td>stroke: var(--bluegray-200);</td>
                            <td>
                                <div className="bg-bluegray-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-bluegray-300</td>
                            <td>stroke: var(--bluegray-300);</td>
                            <td>
                                <div className="bg-bluegray-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-bluegray-400</td>
                            <td>stroke: var(--bluegray-400);</td>
                            <td>
                                <div className="bg-bluegray-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-bluegray-500</td>
                            <td>stroke: var(--bluegray-500);</td>
                            <td>
                                <div className="bg-bluegray-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-bluegray-600</td>
                            <td>stroke: var(--bluegray-600);</td>
                            <td>
                                <div className="bg-bluegray-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-bluegray-700</td>
                            <td>stroke: var(--bluegray-700);</td>
                            <td>
                                <div className="bg-bluegray-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-bluegray-800</td>
                            <td>stroke: var(--bluegray-800);</td>
                            <td>
                                <div className="bg-bluegray-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-bluegray-900</td>
                            <td>stroke: var(--bluegray-900);</td>
                            <td>
                                <div className="bg-bluegray-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-purple-50</td>
                            <td>stroke: var(--purple-50);</td>
                            <td>
                                <div className="bg-purple-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-purple-100</td>
                            <td>stroke: var(--purple-100);</td>
                            <td>
                                <div className="bg-purple-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-purple-200</td>
                            <td>stroke: var(--purple-200);</td>
                            <td>
                                <div className="bg-purple-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-purple-300</td>
                            <td>stroke: var(--purple-300);</td>
                            <td>
                                <div className="bg-purple-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-purple-400</td>
                            <td>stroke: var(--purple-400);</td>
                            <td>
                                <div className="bg-purple-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-purple-500</td>
                            <td>stroke: var(--purple-500);</td>
                            <td>
                                <div className="bg-purple-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-purple-600</td>
                            <td>stroke: var(--purple-600);</td>
                            <td>
                                <div className="bg-purple-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-purple-700</td>
                            <td>stroke: var(--purple-700);</td>
                            <td>
                                <div className="bg-purple-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-purple-800</td>
                            <td>stroke: var(--purple-800);</td>
                            <td>
                                <div className="bg-purple-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-purple-900</td>
                            <td>stroke: var(--purple-900);</td>
                            <td>
                                <div className="bg-purple-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-gray-50</td>
                            <td>stroke: var(--gray-50);</td>
                            <td>
                                <div className="bg-gray-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-gray-100</td>
                            <td>stroke: var(--gray-100);</td>
                            <td>
                                <div className="bg-gray-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-gray-200</td>
                            <td>stroke: var(--gray-200);</td>
                            <td>
                                <div className="bg-gray-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-gray-300</td>
                            <td>stroke: var(--gray-300);</td>
                            <td>
                                <div className="bg-gray-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-gray-400</td>
                            <td>stroke: var(--gray-400);</td>
                            <td>
                                <div className="bg-gray-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-gray-500</td>
                            <td>stroke: var(--gray-500);</td>
                            <td>
                                <div className="bg-gray-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-gray-600</td>
                            <td>stroke: var(--gray-600);</td>
                            <td>
                                <div className="bg-gray-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-gray-700</td>
                            <td>stroke: var(--gray-700);</td>
                            <td>
                                <div className="bg-gray-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-gray-800</td>
                            <td>stroke: var(--gray-800);</td>
                            <td>
                                <div className="bg-gray-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-gray-900</td>
                            <td>stroke: var(--gray-900);</td>
                            <td>
                                <div className="bg-gray-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-red-50</td>
                            <td>stroke: var(--red-50);</td>
                            <td>
                                <div className="bg-red-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-red-100</td>
                            <td>stroke: var(--red-100);</td>
                            <td>
                                <div className="bg-red-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-red-200</td>
                            <td>stroke: var(--red-200);</td>
                            <td>
                                <div className="bg-red-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-red-300</td>
                            <td>stroke: var(--red-300);</td>
                            <td>
                                <div className="bg-red-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-red-400</td>
                            <td>stroke: var(--red-400);</td>
                            <td>
                                <div className="bg-red-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-red-500</td>
                            <td>stroke: var(--red-500);</td>
                            <td>
                                <div className="bg-red-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-red-600</td>
                            <td>stroke: var(--red-600);</td>
                            <td>
                                <div className="bg-red-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-red-700</td>
                            <td>stroke: var(--red-700);</td>
                            <td>
                                <div className="bg-red-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-red-800</td>
                            <td>stroke: var(--red-800);</td>
                            <td>
                                <div className="bg-red-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-red-900</td>
                            <td>stroke: var(--red-900);</td>
                            <td>
                                <div className="bg-red-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-primary-50</td>
                            <td>stroke: var(--primary-50);</td>
                            <td>
                                <div className="bg-primary-50 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-primary-100</td>
                            <td>stroke: var(--primary-100);</td>
                            <td>
                                <div className="bg-primary-100 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-primary-200</td>
                            <td>stroke: var(--primary-200);</td>
                            <td>
                                <div className="bg-primary-200 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-primary-300</td>
                            <td>stroke: var(--primary-300);</td>
                            <td>
                                <div className="bg-primary-300 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-primary-400</td>
                            <td>stroke: var(--primary-400);</td>
                            <td>
                                <div className="bg-primary-400 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-primary-500</td>
                            <td>stroke: var(--primary-500);</td>
                            <td>
                                <div className="bg-primary-500 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-primary-600</td>
                            <td>stroke: var(--primary-600);</td>
                            <td>
                                <div className="bg-primary-600 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-primary-700</td>
                            <td>stroke: var(--primary-700);</td>
                            <td>
                                <div className="bg-primary-700 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-primary-800</td>
                            <td>stroke: var(--primary-800);</td>
                            <td>
                                <div className="bg-primary-800 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                        <tr>
                            <td>stroke-primary-900</td>
                            <td>stroke: var(--primary-900);</td>
                            <td>
                                <div className="bg-primary-900 shadow-1" style={{ width: '50px', height: '20px' }}></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
