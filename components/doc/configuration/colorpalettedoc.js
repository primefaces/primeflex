import { DocSectionText } from '../common/docsectiontext';
import Head from 'next/head';

export function ColorPaletteDoc(props) {
    return (
        <>
            <Head>
                <style>
                    {`
           .theming-colors .color-box {
            display: flex;
            align-items: center;
            padding: 1rem;
            width: 250px;
            font-weight: bold;
        }
          `}
                </style>
            </Head>
            <DocSectionText {...props}>
                <p>Colors palette consists of 13 main colors where each color provides tints/shades from 50 to 900.</p>
            </DocSectionText>
            <div className="card theming-colors">
                <div className="flex flex-wrap">
                    <div className="color-stack mr-6 mb-6">
                        <div className="color-box" style={{ backgroundColor: 'var(--blue-50)', color: '#000000' }}>
                            blue-50
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--blue-100)', color: '#000000' }}>
                            blue-100
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--blue-200)', color: '#000000' }}>
                            blue-200
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--blue-300)', color: '#000000' }}>
                            blue-300
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--blue-400)', color: '#000000' }}>
                            blue-400
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--blue-500)', color: '#000000' }}>
                            blue-500
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--blue-600)', color: '#ffffff' }}>
                            blue-600
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--blue-700)', color: '#ffffff' }}>
                            blue-700
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--blue-800)', color: '#ffffff' }}>
                            blue-800
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--blue-900)', color: '#ffffff' }}>
                            blue-900
                        </div>
                    </div>

                    <div className="color-stack mr-6 mb-6">
                        <div className="color-box" style={{ backgroundColor: 'var(--green-50)', color: '#000000' }}>
                            green-50
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--green-100)', color: '#000000' }}>
                            green-100
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--green-200)', color: '#000000' }}>
                            green-200
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--green-300)', color: '#000000' }}>
                            green-300
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--green-400)', color: '#000000' }}>
                            green-400
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--green-500)', color: '#000000' }}>
                            green-500
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--green-600)', color: '#ffffff' }}>
                            green-600
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--green-700)', color: '#ffffff' }}>
                            green-700
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--green-800)', color: '#ffffff' }}>
                            green-800
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--green-900)', color: '#ffffff' }}>
                            green-900
                        </div>
                    </div>

                    <div className="color-stack mr-6 mb-6">
                        <div className="color-box" style={{ backgroundColor: 'var(--yellow-50)', color: '#000000' }}>
                            yellow-50
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--yellow-100)', color: '#000000' }}>
                            yellow-100
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--yellow-200)', color: '#000000' }}>
                            yellow-200
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--yellow-300)', color: '#000000' }}>
                            yellow-300
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--yellow-400)', color: '#000000' }}>
                            yellow-400
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--yellow-500)', color: '#000000' }}>
                            yellow-500
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--yellow-600)', color: '#ffffff' }}>
                            yellow-600
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--yellow-700)', color: '#ffffff' }}>
                            yellow-700
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--yellow-800)', color: '#ffffff' }}>
                            yellow-800
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--yellow-900)', color: '#ffffff' }}>
                            yellow-900
                        </div>
                    </div>

                    <div className="color-stack mr-6 mb-6">
                        <div className="color-box" style={{ backgroundColor: 'var(--cyan-50)', color: '#000000' }}>
                            cyan-50
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--cyan-100)', color: '#000000' }}>
                            cyan-100
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--cyan-200)', color: '#000000' }}>
                            cyan-200
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--cyan-300)', color: '#000000' }}>
                            cyan-300
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--cyan-400)', color: '#000000' }}>
                            cyan-400
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--cyan-500)', color: '#000000' }}>
                            cyan-500
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--cyan-600)', color: '#ffffff' }}>
                            cyan-600
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--cyan-700)', color: '#ffffff' }}>
                            cyan-700
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--cyan-800)', color: '#ffffff' }}>
                            cyan-800
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--cyan-900)', color: '#ffffff' }}>
                            cyan-900
                        </div>
                    </div>

                    <div className="color-stack mr-6 mb-6">
                        <div className="color-box" style={{ backgroundColor: 'var(--pink-50)', color: '#000000' }}>
                            pink-50
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--pink-100)', color: '#000000' }}>
                            pink-100
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--pink-200)', color: '#000000' }}>
                            pink-200
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--pink-300)', color: '#000000' }}>
                            pink-300
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--pink-400)', color: '#000000' }}>
                            pink-400
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--pink-500)', color: '#000000' }}>
                            pink-500
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--pink-600)', color: '#ffffff' }}>
                            pink-600
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--pink-700)', color: '#ffffff' }}>
                            pink-700
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--pink-800)', color: '#ffffff' }}>
                            pink-800
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--pink-900)', color: '#ffffff' }}>
                            pink-900
                        </div>
                    </div>

                    <div className="color-stack mr-6 mb-6">
                        <div className="color-box" style={{ backgroundColor: 'var(--indigo-50)', color: '#000000' }}>
                            indigo-50
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--indigo-100)', color: '#000000' }}>
                            indigo-100
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--indigo-200)', color: '#000000' }}>
                            indigo-200
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--indigo-300)', color: '#000000' }}>
                            indigo-300
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--indigo-400)', color: '#000000' }}>
                            indigo-400
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--indigo-500)', color: '#000000' }}>
                            indigo-500
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--indigo-600)', color: '#ffffff' }}>
                            indigo-600
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--indigo-700)', color: '#ffffff' }}>
                            indigo-700
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--indigo-800)', color: '#ffffff' }}>
                            indigo-800
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--indigo-900)', color: '#ffffff' }}>
                            indigo-900
                        </div>
                    </div>

                    <div className="color-stack mr-6 mb-6">
                        <div className="color-box" style={{ backgroundColor: 'var(--teal-50)', color: '#000000' }}>
                            teal-50
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--teal-100)', color: '#000000' }}>
                            teal-100
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--teal-200)', color: '#000000' }}>
                            teal-200
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--teal-300)', color: '#000000' }}>
                            teal-300
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--teal-400)', color: '#000000' }}>
                            teal-400
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--teal-500)', color: '#000000' }}>
                            teal-500
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--teal-600)', color: '#ffffff' }}>
                            teal-600
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--teal-700)', color: '#ffffff' }}>
                            teal-700
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--teal-800)', color: '#ffffff' }}>
                            teal-800
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--teal-900)', color: '#ffffff' }}>
                            teal-900
                        </div>
                    </div>

                    <div className="color-stack mr-6 mb-6">
                        <div className="color-box" style={{ backgroundColor: 'var(--orange-50)', color: '#000000' }}>
                            orange-50
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--orange-100)', color: '#000000' }}>
                            orange-100
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--orange-200)', color: '#000000' }}>
                            orange-200
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--orange-300)', color: '#000000' }}>
                            orange-300
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--orange-400)', color: '#000000' }}>
                            orange-400
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--orange-500)', color: '#000000' }}>
                            orange-500
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--orange-600)', color: '#ffffff' }}>
                            orange-600
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--orange-700)', color: '#ffffff' }}>
                            orange-700
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--orange-800)', color: '#ffffff' }}>
                            orange-800
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--orange-900)', color: '#ffffff' }}>
                            orange-900
                        </div>
                    </div>

                    <div className="color-stack mr-6 mb-6">
                        <div className="color-box" style={{ backgroundColor: 'var(--bluegray-50)', color: '#000000' }}>
                            bluegray-50
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--bluegray-100)', color: '#000000' }}>
                            bluegray-100
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--bluegray-200)', color: '#000000' }}>
                            bluegray-200
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--bluegray-300)', color: '#000000' }}>
                            bluegray-300
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--bluegray-400)', color: '#000000' }}>
                            bluegray-400
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--bluegray-500)', color: '#000000' }}>
                            bluegray-500
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--bluegray-600)', color: '#ffffff' }}>
                            bluegray-600
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--bluegray-700)', color: '#ffffff' }}>
                            bluegray-700
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--bluegray-800)', color: '#ffffff' }}>
                            bluegray-800
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--bluegray-900)', color: '#ffffff' }}>
                            bluegray-900
                        </div>
                    </div>

                    <div className="color-stack mr-6 mb-6">
                        <div className="color-box" style={{ backgroundColor: 'var(--purple-50)', color: '#000000' }}>
                            purple-50
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--purple-100)', color: '#000000' }}>
                            purple-100
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--purple-200)', color: '#000000' }}>
                            purple-200
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--purple-300)', color: '#000000' }}>
                            purple-300
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--purple-400)', color: '#000000' }}>
                            purple-400
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--purple-500)', color: '#000000' }}>
                            purple-500
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--purple-600)', color: '#ffffff' }}>
                            purple-600
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--purple-700)', color: '#ffffff' }}>
                            purple-700
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--purple-800)', color: '#ffffff' }}>
                            purple-800
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--purple-900)', color: '#ffffff' }}>
                            purple-900
                        </div>
                    </div>

                    <div className="color-stack mr-6 mb-6">
                        <div className="color-box" style={{ backgroundColor: 'var(--red-50)', color: '#000000' }}>
                            red-50
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--red-100)', color: '#000000' }}>
                            red-100
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--red-200)', color: '#000000' }}>
                            red-200
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--red-300)', color: '#000000' }}>
                            red-300
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--red-400)', color: '#000000' }}>
                            red-400
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--red-500)', color: '#000000' }}>
                            red-500
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--red-600)', color: '#ffffff' }}>
                            red-600
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--red-700)', color: '#ffffff' }}>
                            red-700
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--red-800)', color: '#ffffff' }}>
                            red-800
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--red-900)', color: '#ffffff' }}>
                            red-900
                        </div>
                    </div>

                    <div className="color-stack mr-6 mb-6">
                        <div className="color-box" style={{ backgroundColor: 'var(--gray-50)', color: '#000000' }}>
                            gray-50
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--gray-100)', color: '#000000' }}>
                            gray-100
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--gray-200)', color: '#000000' }}>
                            gray-200
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--gray-300)', color: '#000000' }}>
                            gray-300
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--gray-400)', color: '#000000' }}>
                            gray-400
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--gray-500)', color: '#000000' }}>
                            gray-500
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--gray-600)', color: '#ffffff' }}>
                            gray-600
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--gray-700)', color: '#ffffff' }}>
                            gray-700
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--gray-800)', color: '#ffffff' }}>
                            gray-800
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--gray-900)', color: '#ffffff' }}>
                            gray-900
                        </div>
                    </div>

                    <div className="color-stack mr-6 mb-6">
                        <div className="color-box" style={{ backgroundColor: 'var(--primary-50)', color: '#000000' }}>
                            primary-50
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--primary-100)', color: '#000000' }}>
                            primary-100
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--primary-200)', color: '#000000' }}>
                            primary-200
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--primary-300)', color: '#000000' }}>
                            primary-300
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--primary-400)', color: '#000000' }}>
                            primary-400
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--primary-500)', color: '#000000' }}>
                            primary-500
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--primary-600)', color: '#ffffff' }}>
                            primary-600
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--primary-700)', color: '#ffffff' }}>
                            primary-700
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--primary-800)', color: '#ffffff' }}>
                            primary-800
                        </div>
                        <div className="color-box" style={{ backgroundColor: 'var(--primary-900)', color: '#ffffff' }}>
                            primary-900
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
