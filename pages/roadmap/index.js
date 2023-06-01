import Head from 'next/head';
import React from 'react';

const Roadmap = () => {
    return (
        <div>
            <Head>
                <title>PrimeFlex Roadmap</title>
                <meta
                    name="description"
                    content="These are planned to be implemented in parallel to the regular
                        maintenance work of the PrimeReact library"
                />
            </Head>
            <div className="doc-intro">
                <h1>Roadmap</h1>
                <p>
                    At{' '}
                    <a href="https://www.primetek.com.tr/" className="font-semibold hover:underline text-primary">
                        PrimeTek
                    </a>
                    , we are passionate about improving PrimeFlex and would like to share our ideas for 2023 with the community. These are planned to be implemented in parallel to the regular maintenance work of the library involving review of issue
                    tickets, PRs and support. This page is updated periodically so please revisit to monitor the progress.
                </p>
            </div>

            <div className="overflow-auto">
                <div style={{ minWidth: '1200px' }}>
                    <div className="flex gap-3 mb-3">
                        <div className="flex-shrink-0 w-14rem"></div>
                        <div className="flex-1 bg-bluegray-500 text-white font-bold text-center p-3 text-xl border-round">Q1</div>
                        <div className="flex-1 bg-bluegray-500 text-white font-bold text-center p-3 text-xl border-round">Q2</div>
                        <div className="flex-1 bg-bluegray-500 text-white font-bold text-center p-3 text-xl border-round">Q3</div>
                        <div className="flex-1 bg-bluegray-500 text-white font-bold text-center p-3 text-xl border-round">Q4</div>
                    </div>
                    <div className="flex flex-column gap-3">
                        <div className="flex gap-3 border-bottom-1 surface-border pb-3">
                            <div className="flex-shrink-0 p-3 bg-purple-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">CORE</div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-purple-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">PostCSS</h2>
                                    <p className="mt-0 mb-3 line-height-3">Implement usage as a PostCSS plugin.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-purple-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round border-purple-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">VSCode</h2>
                                    <p className="mt-0 mb-3 line-height-3">Update VSCode plugin.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-purple-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-purple-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Configuration</h2>
                                    <p className="mt-0 mb-3 line-height-3">Create a primeflex.config.json to handle purge and configuration.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-purple-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round border-purple-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Integrations</h2>
                                    <p className="mt-0 mb-3 line-height-3">Add samples to document integration with popular technologies like angular, react, vue.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-purple-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                        </div>
                        <div className="flex gap-3 border-bottom-1 surface-border pb-3">
                            <div className="flex-shrink-0 p-3 bg-blue-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">UTILITIES</div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">New Grid</h2>
                                    <p className="mt-0 mb-3 line-height-3">Reimplement using CSS Grid instead of Flexbox.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">More Dimensions</h2>
                                    <p className="mt-0 mb-3 line-height-3">New classes for width and height.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Gradients</h2>
                                    <p className="mt-0 mb-3 line-height-3">Built-in gradient palette for texts and backgrounds.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">RGBA Colors</h2>
                                    <p className="mt-0 mb-3 line-height-3">RGBA modes of all the built-in colors with varying alpha.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                        </div>
                        <div className="flex gap-3 border-bottom-1 surface-border pb-3">
                            <div className="flex-shrink-0 p-3 bg-teal-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">SHOWCASE</div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-teal-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Demos</h2>
                                    <p className="mt-0 mb-3 line-height-3">Brand new website and documentation.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-teal-500 border-round" style={{ width: '100%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-teal-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Playground</h2>
                                    <p className="mt-0 mb-3 line-height-3">Create a new playground app to test PrimeFlex utilities.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-teal-500 border-round" style={{ width: '100%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
