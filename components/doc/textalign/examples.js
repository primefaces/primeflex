import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="surface-overlay border-round border-1 w-16rem min-h-full shadow-1 p-5 py-0 m-3">
        <p class="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
            rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
        </p>
    </div>
    <div class="surface-overlay border-round border-1 w-16rem min-h-full shadow-1 p-5 py-0 m-3">
        <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
            rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
        </p>
    </div>
    <div class="surface-overlay border-round border-1 w-16rem min-h-full shadow-1 p-5 py-0 m-3">
        <p class="text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
            rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
        </p>
    </div>
    <div class="surface-overlay border-round border-1 w-16rem min-h-full shadow-1 p-5 py-0 m-3">
        <p class="text-right">
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
                    <div className="surface-overlay border-round border-1 w-16rem min-h-full shadow-1 p-5 py-0 m-3">
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
                            rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
                        </p>
                    </div>
                    <div className="surface-overlay border-round border-1 w-16rem min-h-full shadow-1 p-5 py-0 m-3">
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
                            rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
                        </p>
                    </div>
                    <div className="surface-overlay border-round border-1 w-16rem min-h-full shadow-1 p-5 py-0 m-3">
                        <p className="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
                            rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
                        </p>
                    </div>
                    <div className="surface-overlay border-round border-1 w-16rem min-h-full shadow-1 p-5 py-0 m-3">
                        <p className="text-right">
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
