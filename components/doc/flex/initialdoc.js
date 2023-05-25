import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InitialDoc(props) {
    const code = `<div class="flex">
    <div class="flex-initial flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime</div>
    <div class="flex-initial flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
</div>
<div class="flex">
    <div class="flex-initial flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime</div>
    <div class="flex-initial flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
    <div class="flex-initial flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    flex-initial sets <i>flex-grow</i> to 0, <i>flex-shrink</i> to 1 and <i>flex-basis</i> to auto which is the default setting of browsers.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex">
                    <div className="flex-initial flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime</div>
                    <div className="flex-initial flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
                </div>
                <div className="flex">
                    <div className="flex-initial flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime</div>
                    <div className="flex-initial flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
                    <div className="flex-initial flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
