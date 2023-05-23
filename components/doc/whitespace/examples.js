import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="flex surface-overlay border-round border-1 w-full my-3 p-3">
        <p class="white-space-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
            rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
        </p>
    </div>
    <div class="flex surface-overlay border-round border-1 w-full my-3 p-3 overflow-auto">
        <p class="white-space-nowrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
            rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
        </p>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="flex surface-overlay border-round border-1 w-full my-3 p-3">
                        <p className="white-space-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
                            rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
                        </p>
                    </div>
                    <div className="flex surface-overlay border-round border-1 w-full my-3 p-3 overflow-auto">
                        <p className="white-space-nowrap">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
                            rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
                        </p>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
