import { DocSectionCode } from '../common/docsectioncode';

const Guide = ({ framework }) => {
    return (
        <div className="guide">
            <div className="guide-steps">
                {framework.guide.map((step, index) => (
                    <div key={index} className="guide-step">
                        <div className="step-content-section  md:w-5">
                            <span className="step-number">{step.stepId}</span>
                            <div className="step-content">
                                <span className="step-content-title">{step.title}</span>
                                <p>{step.description}</p>
                            </div>
                        </div>
                        <div className="step-code-section w-full md:w-7">
                            <DocSectionCode code={step.code} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Guide;
