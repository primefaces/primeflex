import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveClassesDoc(props) {
    const code1 = {
        basic: `<div class="p-grid">
    <div class="p-col-12 p-md-6 p-lg-3 p-flex-sm-nowrap">A</div>
    <div class="p-col-12 p-md-6 p-lg-3">B</div>
    <div class="p-col-12 p-md-6 p-lg-3">C</div>
    <div class="p-col-12 p-md-6 p-lg-3">D</div>
</div>
    `
    };
    const code2 = {
        basic: `<div class="grid">
    <div class="col-12 md:col-6 lg:col-3 sm:flex-nowrap">A</div>
    <div class="col-12 md:col-6 lg:col-3">B</div>
    <div class="col-12 md:col-6 lg:col-3">C</div>
    <div class="col-12 md:col-6 lg:col-3">D</div>
</div>
    `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <i>:</i> is now used to define responsive breakpoints.
                </p>
            </DocSectionText>
            <h3>Before</h3>
            <DocSectionCode code={code1} />
            <h3>After</h3>
            <DocSectionCode code={code2} />
        </>
    );
}
