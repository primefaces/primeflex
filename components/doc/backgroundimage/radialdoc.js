import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RadialDoc(props) {
    const code = `<div class="flex flex-column gap-5">
    <div class="bg-gradient-to-r from-primary-500 h-4rem w-full border-round"></div>
    <div class="bg-gradient-to-l from-blue-500 to-pink-500 h-4rem w-full border-round"></div>
    <div class="bg-gradient-to-t from-purple-500 to-cyan-500/60 h-4rem w-full border-round"></div>
    <div class="bg-gradient-to-b from-green-500/60 to-cyan-400 h-4rem w-full border-round"></div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Background image is repeated vertically only.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-column gap-5">
                    <div className="bg-radial-gradient-to-tr from-primary-500 h-6rem w-full border-round"></div>
                    <div className="bg-radial-gradient-to-l from-blue-500 to-pink-500 h-6rem w-full border-round"></div>
                    <div className="bg-radial-gradient-to-bl from-purple-500 to-cyan-500/60 h-6rem w-full border-round"></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
