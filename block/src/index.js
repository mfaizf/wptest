import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

registerBlockType('testing-block/feature-card', {
    edit({ attributes, setAttributes }) {
        const { title, content, buttonText, buttonUrl } = attributes;
        const blockProps = useBlockProps();

        return (
            <div>
                <InspectorControls>
                    <panelBody title="Settings">
                        <TextControl
                            label="Title"
                            value={title}
                            onChange={(value) => setAttributes({ title: value })}
                        />
                        <TextControl
                            label="Content"
                            value={content}
                            onChange={(value) => setAttributes({ content: value })}
                        />
                        <TextControl
                            label="Button Text"
                            value={buttonText}
                            onChange={(value) => setAttributes({ buttonText: value })}
                        />
                        <TextControl
                            label="Button URL"
                            value={buttonUrl}
                            onChange={(value) => setAttributes({ buttonUrl: value })}
                        />
                    </panelBody>
                </InspectorControls>

                <div {...blockProps}>
                    <div class="feature-card">
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <a href={buttonUrl}>{buttonText}</a>
                    </div>
                </div>
            </div>
        );
    },

    save() {
        return null; // 👈 dynamic block
    },
});
