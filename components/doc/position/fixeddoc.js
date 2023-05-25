import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FixedDoc(props) {
    const code = `<div class="overflow-hidden" style="height: 250px">
    <div class="relative bg-primary border-round border-1 border-primary-500" style="height: 200px">
        <div class="absolute top-0 left-0 px-4 py-3 w-full font-bold">
            Fixed
        </div>
        <div class="absolute overflow-auto surface-overlay mt-6 p-4 line-height-3" style="height: 150px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
        </div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>A fixed element is positioned relative to the viewport and always located in the same position even when the page is scrolled.</p>
            </DocSectionText>
            <div className="card">
                <div className="overflow-hidden" style={{ height: '250px' }}>
                    <div className="relative bg-primary border-round border-1 border-primary-500" style={{ height: '200px' }}>
                        <div className="absolute top-0 left-0 px-4 py-3 w-full font-bold ">Fixed</div>
                        <div className="absolute overflow-auto surface-overlay mt-6 p-4 line-height-3 text-color" style={{ height: '150px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
                            rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac
                            ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis
                            nisl rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere
                            ac ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis
                            nisl rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere
                            ac ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis
                            nisl rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere
                            ac ut.
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
