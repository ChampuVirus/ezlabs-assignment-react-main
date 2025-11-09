# EZ Labs – Front-End Intern Assignment (React + Vite + Tailwind)

Production-ready single-page app that matches the brief:

- Home page sections (Hero, Features, Contact)
- Accessible & responsive (mobile/tablet/desktop)
- Contact form with front-end validation
- POST to the given API endpoint with success message

## Requirements matched
- Empty submissions blocked ✅
- Email validation on client ✅
- Success message “Form Submitted” on 200 ✅
- Loading + reset on success ✅

## Stack
- React 18 + Vite 5
- Tailwind CSS
- @vitejs/plugin-react

## Node version
Require Node **18+**. Check with:
```bash
node -v
```

## Run locally
```bash
npm install
npm run dev
```

## Build & preview
```bash
npm run build
npm run preview
```

## API details
- **POST** `https://vernanbackend.ezlab.in/api/contact-us/`
- Body example:
```json
{
  "name": "Test user",
  "email": "testuser@gmail.com",
  "phone": "908765498",
  "message": "This is a message"
}
```

## Postman collection
Included as `EZ_Labs_Contact_Form.postman_collection.json` (import into Postman and hit Send).
