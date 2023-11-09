import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function LinearDoc(props) {
    const code = `<div class="flex flex-column gap-5">
    <div class="bg-gradient-to-r from-primary-500 h-4rem w-full border-round"></div>
    <div class="bg-gradient-to-l from-blue-500 to-pink-500 h-4rem w-full border-round"></div>
    <div class="bg-gradient-to-tr from-purple-500 to-cyan-500/60 h-4rem w-full border-round"></div>
    <div class="bg-gradient-to-bl from-green-500/60 to-cyan-400 h-4rem w-full border-round"></div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Background image is repeated vertically only.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-column gap-5">
                    <div className="bg-gradient-to-r from-primary-500 h-5rem w-full border-round"></div>
                    <div className="bg-gradient-to-l from-blue-500 to-pink-500 h-5rem w-full border-round"></div>
                    <div className="bg-gradient-to-tr from-purple-500 to-cyan-500/60 h-5rem w-full border-round"></div>
                    <div className="bg-gradient-to-bl from-green-500/60 to-cyan-400 h-5rem w-full border-round"></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
