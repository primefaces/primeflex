import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function HelpDoc(props) {
    const code = `<div class="field">
    <label for="username">Username</label>
    <input id="username" type="username" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" aria-describedby="username-help">
    <small id="username-help">Enter your username to reset your password.</small>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="field">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="username"
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                        aria-describedby="username-help"
                    ></input>
                    <small id="username-help">Enter your username to reset your password.</small>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
