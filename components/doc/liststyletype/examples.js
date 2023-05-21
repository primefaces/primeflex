import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = {
        basic: `<div>
    <p>.list-none</p>
    <ul class="list-none">
        <li>Lorem ipsum dolor sit amet...</li>
        <li>Vitae sapien pellentesque habitant...</li>
        <li>Maecenas pharetra convallis posuere morbi leo urna molestie.</li>
    </ul>
</div>
<div>
    <p>.list-disc</p>
    <ul class="list-disc">
        <li>Lorem ipsum dolor sit amet...</li>
        <li>Vitae sapien pellentesque habitant...</li>
        <li>Maecenas pharetra convallis posuere morbi leo urna molestie.</li>
    </ul>
</div>
<div>
    <p>.list-decimal</p>
    <ul class="list-decimal">
        <li>Lorem ipsum dolor sit amet...</li>
        <li>Vitae sapien pellentesque habitant...</li>
        <li>Maecenas pharetra convallis posuere morbi leo urna molestie.</li>
    </ul>
</div>
    `,
        expanded: `<div class="card">
    <div class="card-container">
        <div>
            <p>.list-none</p>
            <ul class="list-none">
                <li>Lorem ipsum dolor sit amet...</li>
                <li>Vitae sapien pellentesque habitant...</li>
                <li>Maecenas pharetra convallis posuere morbi leo urna molestie.</li>
            </ul>
        </div>
        <div>
            <p>.list-disc</p>
            <ul class="list-disc">
                <li>Lorem ipsum dolor sit amet...</li>
                <li>Vitae sapien pellentesque habitant...</li>
                <li>Maecenas pharetra convallis posuere morbi leo urna molestie.</li>
            </ul>
        </div>
        <div>
            <p>.list-decimal</p>
            <ul class="list-decimal">
                <li>Lorem ipsum dolor sit amet...</li>
                <li>Vitae sapien pellentesque habitant...</li>
                <li>Maecenas pharetra convallis posuere morbi leo urna molestie.</li>
            </ul>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="card-container">
                    <div className="surface-overlay border-round border-1 my-3 p-3">
                        <p>.list-none</p>
                        <ul className="list-none">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.</li>
                            <li>Maecenas pharetra convallis posuere morbi leo urna molestie.</li>
                        </ul>
                    </div>
                    <div className="surface-overlay border-round border-1 my-3 p-3">
                        <p>.list-disc</p>
                        <ul className="list-disc">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.</li>
                            <li>Maecenas pharetra convallis posuere morbi leo urna molestie.</li>
                        </ul>
                    </div>
                    <div className="surface-overlay border-round border-1 my-3 p-3">
                        <p>.list-decimal</p>
                        <ul className="list-decimal">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.</li>
                            <li>Maecenas pharetra convallis posuere morbi leo urna molestie.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
