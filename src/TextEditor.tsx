import React, { useState } from 'react';

// Sample font data (replace this with your actual data source)
const fontData = [
    {
        family: 'Roboto',
        variants: [
            { weight: 400, italic: false },
            { weight: 400, italic: true },
            { weight: 700, italic: false },
            { weight: 700, italic: true },
        ],
    },
    {
        family: 'Open Sans',
        variants: [
            { weight: 400, italic: false },
            { weight: 400, italic: true },
            { weight: 600, italic: false },
            { weight: 600, italic: true },
        ],
    },
    // Add more font families and variants as needed
];

const TextEditor: React.FC = () => {
    const [selectedFont, setSelectedFont] = useState<string>('');
    const [selectedVariant, setSelectedVariant] = useState<any>(null);
    const [text, setText] = useState<string>('Type here...');

    const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFont(e.target.value);
        setSelectedVariant(null); // Reset variant when font changes
    };

    const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const weight = Number(e.target.value);
        const isItalic = e.target.selectedOptions[0].getAttribute('data-italic') === 'true';
        const variant = fontData.find(font => font.family === selectedFont)?.variants.find(v => v.weight === weight && v.italic === isItalic) || null;
        setSelectedVariant(variant);
    };

    const handleReset = () => {
        setSelectedFont('');
        setSelectedVariant(null);
        setText('Type here...');
    };

    const handleSave = () => {
        // Implement save logic (e.g., save to local storage)
        localStorage.setItem('textEditorContent', JSON.stringify({ text, selectedFont, selectedVariant }));
        alert('Content saved!');
    };

    return (
        <div>
            <h1>Text Editor</h1>
            <div>
                <label>Font Family:</label>
                <select value={selectedFont} onChange={handleFontChange}>
                    <option value="">Select a font</option>
                    {fontData.map((font, index) => (
                        <option key={index} value={font.family}>{font.family}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Font Variant:</label>
                <select onChange={handleVariantChange} disabled={!selectedFont}>
                    <option value="">Select a variant</option>
                    {selectedFont && fontData.find(font => font.family === selectedFont)?.variants.map((variant, index) => (
                        <option key={index} value={variant.weight} data-italic={variant.italic}>
                            {variant.weight} {variant.italic ? 'Italic' : 'Regular'}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{
                        fontFamily: selectedFont,
                        fontWeight: selectedVariant?.weight,
                        fontStyle: selectedVariant?.italic ? 'italic' : 'normal',
                    }}
                />
            </div>
            <div>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default TextEditor;