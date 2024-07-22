
# FontSelector

## Overview
This project is a React + TypeScript application that allows users to select a font family, font weight, and italic style for a text editor. The application supports Google Fonts and provides a user-friendly interface to change the font style instantly. It also features an auto-save functionality that retains the user's selections even after refreshing the page.

## Features
- Select from a list of Google Fonts.
- Choose the appropriate font weights for the selected font family.
- Toggle italic style if supported by the selected font.
- Auto-save functionality to retain text and font selections.
- Responsive and functional UI.

## Technologies Used
- React
- TypeScript
- CSS (for styling)
- Local Storage (for auto-saving)

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/font-selector-app.git
   cd font-selector-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Using the Application
1. **Select a Font Family:** Click on the font family dropdown to view and select from the available Google Fonts.
2. **Choose Font Weight:** After selecting a font family, the corresponding font weights will be displayed. Choose the desired weight.
3. **Toggle Italic Style:** If the selected font supports italic, you can toggle the italic option.
4. **Text Input:** Type your text in the provided text area. The font style will change instantly based on your selections.
5. **Auto-Save:** Your text and font selections will be saved in the browser's local storage. When you refresh the page, the previous selections will be restored.

## Assumptions
- The font data is provided in a JSON format that maps font names to their respective variants.
- The application handles cases where the selected font does not support the chosen weight or italic style by providing the closest available options.

## Future Improvements
- Implement unit tests for critical components.
- Enhance error handling for unsupported font selections.
- Improve UI/UX design for better user experience.

