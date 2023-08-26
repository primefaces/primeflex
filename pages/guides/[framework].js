import Head from 'next/head';
import { useRouter } from 'next/router';
import Guide from '../../components/doc/guides';
import { frameworks } from '../../data/frameworks';

const GuidePage = (props) => {
    const router = useRouter();
    const { framework } = router.query;
    const currentFramework = frameworks.find((frm) => frm.id === framework);

    if (!currentFramework) return null;

    return (
        <div>
            <Head>
                <title>Guide for {currentFramework.name} - PrimeFlex</title>
                <meta name="description" content={`PrimeFlex guide for ${currentFramework.name}`} />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <span>Guide for {currentFramework.name}</span>
                        <h1>Step by step guide for {currentFramework.name}</h1>
                        <p>Setting up Primeflex in a {currentFramework.name} project.</p>
                    </div>
                    <Guide framework={currentFramework}></Guide>
                </div>
            </div>
        </div>
    );
};

export default GuidePage;
