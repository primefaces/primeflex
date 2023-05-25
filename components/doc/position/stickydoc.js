import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function StickyDoc(props) {
    const code = `<div class="overflow-hidden">
    <div class="overflow-auto border-round border-1 border-primary-500" style="height: 300px">
        <div>
            <div class="sticky top-0 font-bold bg-primary p-4">
                Sticky Title 1
            </div>
            <p class="surface-overlay p-4 m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
            </p>
        </div>
        <div>
            <div class="sticky top-0 font-bold bg-primary p-4">
                Sticky Title 2
            </div>
            <p class="surface-overlay p-4 m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
            </p>
        </div>
        <div>
            <div class="sticky top-0 font-bold bg-primary p-4">
                Sticky Title 3
            </div>
            <p class="surface-overlay p-4 m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
            </p>
        </div>
        <div>
            <div class="sticky top-0 font-bold bg-primary p-4">
                Sticky Title 4
            </div>
            <p class="surface-overlay p-4 m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
            </p>
        </div>
        <div>
            <div class="sticky top-0 font-bold bg-primary p-4">
                Sticky Title 5
            </div>
            <p class="surface-overlay p-4 m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
            </p>
        </div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>A sticky element is dynamically positioned based on the scroll position and toggles between the relative and fixed behavior.</p>
            </DocSectionText>
            <div className="card">
                <div className="overflow-hidden">
                    <div className="overflow-auto border-round border-1 border-primary-500" style={{ height: '300px' }}>
                        <div>
                            <div className="sticky top-0 font-bold  bg-primary p-4">Sticky Title 1</div>
                            <p className="surface-overlay p-4 m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis
                                nisl rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor
                                posuere ac ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae
                                proin sagittis nisl rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus
                                accumsan tortor posuere ac ut.
                            </p>
                        </div>
                        <div>
                            <div className="sticky top-0 font-bold bg-primary p-4">Sticky Title 2</div>
                            <p className="surface-overlay p-4 m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis
                                nisl rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor
                                posuere ac ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae
                                proin sagittis nisl rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus
                                accumsan tortor posuere ac ut.
                            </p>
                        </div>
                        <div>
                            <div className="sticky top-0 font-bold bg-primary p-4">Sticky Title 3</div>
                            <p className="surface-overlay p-4 m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis
                                nisl rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor
                                posuere ac ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae
                                proin sagittis nisl rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus
                                accumsan tortor posuere ac ut.
                            </p>
                        </div>
                        <div>
                            <div className="sticky top-0 font-bold bg-primary p-4">Sticky Title 4</div>
                            <p className="surface-overlay p-4 m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis
                                nisl rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor
                                posuere ac ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae
                                proin sagittis nisl rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus
                                accumsan tortor posuere ac ut.
                            </p>
                        </div>
                        <div>
                            <div className="sticky top-0 font-bold bg-primary p-4">Sticky Title 5</div>
                            <p className="surface-overlay p-4 m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis
                                nisl rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor
                                posuere ac ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae
                                proin sagittis nisl rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus
                                accumsan tortor posuere ac ut.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
