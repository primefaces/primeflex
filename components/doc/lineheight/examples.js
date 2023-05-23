import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex align-items-center border-bottom-1 surface-border w-full">
    <p class="w-2 text-left font-bold text-blue-500 mr-3">line-height-1</p>
    <p class="line-height-1 w-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
        rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
    </p>
</div>
<div class="flex align-items-center border-bottom-1 surface-border w-full">
    <p class="w-2 text-left font-bold text-blue-500 mr-3">line-height-2</p>
    <p class="line-height-2 w-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
        rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
    </p>
</div>
<div class="flex align-items-center border-bottom-1 surface-border w-full">
    <p class="w-2 text-left font-bold text-blue-500 mr-3">line-height-3</p>
    <p class="line-height-3 w-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
        rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
    </p>
</div>
<div class="flex align-items-center border-bottom-1 surface-border w-full">
    <p class="w-2 text-left font-bold text-blue-500 mr-3">line-height-4</p>
    <p class="line-height-4 w-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
        rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
    </p>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex flex-wrap align-items-center justify-content-center">
                <div className="flex align-items-center border-bottom-1 surface-border w-full">
                    <p className="w-2 text-left font-bold text-blue-500 mr-3">line-height-1</p>
                    <p className="line-height-1 w-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
                        rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
                    </p>
                </div>
                <div className="flex align-items-center border-bottom-1 surface-border w-full">
                    <p className="w-2 text-left font-bold text-blue-500 mr-3">line-height-2</p>
                    <p className="line-height-2 w-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
                        rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
                    </p>
                </div>
                <div className="flex align-items-center border-bottom-1 surface-border w-full">
                    <p className="w-2 text-left font-bold text-blue-500 mr-3">line-height-3</p>
                    <p className="line-height-3 w-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
                        rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
                    </p>
                </div>
                <div className="flex align-items-center border-bottom-1 surface-border w-full">
                    <p className="w-2 text-left font-bold text-blue-500 mr-3">line-height-4</p>
                    <p className="line-height-4 w-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
                        rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.{' '}
                    </p>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
