import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code1 = {
        basic: `<div class="flex flex-wrap gap-3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap justify-content-center card-container blue-container gap-3">
        <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">1</div>
        <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">2</div>
        <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">3</div>
        <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">4</div>
    </div>
</div>
`
    };
    const code2 = {
        basic: `<div class="flex flex-wrap column-gap-4 row-gap-6">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap card-container blue-container column-gap-4 row-gap-6">
        <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">1</div>
        <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">2</div>
        <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">3</div>
        <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">4</div>
        <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">5</div>
        <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">6</div>
        <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">7</div>
        <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">8</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap justify-content-center card-container blue-container gap-3">
                    <div className="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">1</div>
                    <div className="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">2</div>
                    <div className="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">3</div>
                    <div className="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">4</div>
                </div>
            </div>
            <DocSectionCode code={code1} />
            <div className="card">
                <div className="flex flex-wrap card-container blue-container column-gap-4 row-gap-6">
                    <div className="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">1</div>
                    <div className="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">2</div>
                    <div className="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">3</div>
                    <div className="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">4</div>
                    <div className="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">5</div>
                    <div className="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">6</div>
                    <div className="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">7</div>
                    <div className="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">8</div>
                </div>
            </div>
            <DocSectionCode code={code2} />
        </>
    );
}
