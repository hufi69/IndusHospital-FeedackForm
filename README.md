# Indus Hospital Issue Resolver

A modern, bilingual (English/Urdu) web application for managing patient reports and doctor helpdesk requests at Indus Hospital.

## Features

- **Bilingual Support**: Switch between English and Urdu with RTL support
- **Patient Flow**: Submit reports using token ID with optional file uploads
- **Doctor Flow**: Report system issues with AI-powered troubleshooting suggestions
- **AI Integration**: Simulated AI responses for common IT issues
- **Daily Reports**: Generate comprehensive reports of all submissions
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Local Storage**: Data persists between sessions for demo purposes

## How to Run

1. **Simple Method**: Double-click `index.html` to open in your default browser
2. **Local Server** (recommended for development):
   - Open terminal/command prompt in this folder
   - Run: `python -m http.server 8000` (Python 3)
   - Or: `npx serve .` (if you have Node.js)
   - Open: `http://localhost:8000` in your browser

## Usage Guide

### For Patients
1. Click "Patient" on the landing page
2. Enter your Token ID and Name (required)
3. Optionally add contact info and upload reports
4. Submit your report

### For Doctors
1. Click "Doctor" on the landing page
2. Enter your Employee Code
3. Select the type of issue from the dropdown
4. Describe the problem briefly
5. Submit to get AI-powered troubleshooting steps
6. If issue persists, click "Mark Unresolved" to assign to IT

### Language Switching
- Use the language selector in the top-right corner
- Urdu mode automatically switches to RTL layout
- All text and interface elements are translated

### Daily Reports
- Click "Generate Daily Report" in the top bar
- View statistics and recent entries
- Use "Clear Stored Data" to reset demo data

## File Structure

```
indus-web/
├── index.html          # Main HTML structure
├── styles.css          # Modern CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Technical Details

- **Frontend Only**: Pure HTML/CSS/JavaScript (no backend required)
- **Local Storage**: Data stored in browser's localStorage
- **Responsive**: CSS Grid and Flexbox for modern layouts
- **Accessibility**: ARIA labels and semantic HTML
- **Cross-browser**: Works in all modern browsers

## Next Steps for Production

1. **Backend Integration**: Replace localStorage with API calls
2. **Real AI**: Integrate with actual AI service for troubleshooting
3. **Authentication**: Add user login and session management
4. **Notifications**: Email/SMS alerts for IT assignments
5. **Database**: Store data in proper database
6. **Security**: Add input validation and CSRF protection

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Support

For technical issues or questions about the application, please refer to the code comments or contact the development team.
