import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code1 = `<div class="flex flex-wrap justify-content-center gap-3">
    <div class="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">1</div>
    <div class="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">2</div>
    <div class="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">3</div>
    <div class="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">4</div>
</div>
`;
    const code2 = `<div class="flex flex-wrap column-gap-4 row-gap-6">
    <div class="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">1</div>
    <div class="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">2</div>
    <div class="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">3</div>
    <div class="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">4</div>
    <div class="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">5</div>
    <div class="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">6</div>
    <div class="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">7</div>
    <div class="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">8</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap justify-content-center gap-3">
                    <div className="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">1</div>
                    <div className="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">2</div>
                    <div className="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">3</div>
                    <div className="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">4</div>
                </div>
            </div>
            <DocSectionCode code={code1} />
            <div className="card">
                <div className="flex flex-wrap column-gap-4 row-gap-6">
                    <div className="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">1</div>
                    <div className="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">2</div>
                    <div className="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">3</div>
                    <div className="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">4</div>
                    <div className="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">5</div>
                    <div className="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">6</div>
                    <div className="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">7</div>
                    <div className="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">8</div>
                </div>
            </div>
            <DocSectionCode code={code2} />
        </>
    );
}
