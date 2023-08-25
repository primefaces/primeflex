import Link from 'next/link';
import { frameworks } from '../../../data/frameworks';
import { DocSectionText } from '../common/docsectiontext';

export function FrameworkGuidesDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>Explore our detailed guides, specifically crafted for various frameworks, to learn the best practices for integrating PrimeFlex into a wide range of popular development environments.</p>
            </DocSectionText>
            <div className="frameworks">
                {frameworks.map((framework, index) => (
                    <Link key={index} href={`/guides/${framework.name.toLowerCase()}`}>
                        <div className="framework">
                            <div className="logo">
                                <img alt={`${framework.name}`} src={framework.logo}></img>
                            </div>
                            <div className="content">
                                <div className="title">
                                    <h5>{framework.name}</h5>
                                    <i className="pi pi-arrow-up-right"></i>
                                </div>
                                <span> {framework.guideDesc}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
