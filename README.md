# Contact Me Form

A clean, minimal, and animated **"Contact Me"** form built with plain HTML, CSS, and JavaScript — no frameworks or dependencies required (except Google Fonts for typography).

---

## 📁 Project Structure

```
contact-form/
├── contact.html   ← Main HTML page (structure + styles)
├── script.js      ← Form logic (validation, submission, UI feedback)
└── README.md      ← You're reading this
```

---

## 🚀 Getting Started

1. **Download** all three files into the same folder.
2. **Open** `contact.html` in any modern browser — no server needed.

```bash
# Or serve locally with Python
python -m http.server 8000
# Then visit http://localhost:8000/contact.html
```

---

## ✨ Features

| Feature | Details |
|---|---|
| Responsive layout | Works on mobile, tablet, and desktop |
| Inline validation | Highlights missing or invalid fields instantly |
| Animated UI | Staggered entrance animations + hover effects |
| Success state | Replaces the form with a confirmation message after submission |
| Zero dependencies | No jQuery, no React, no build tools |

---

## 🧩 How It Works

### `contact.html`
- Defines the page structure: header, form fields, and a hidden success message.
- All styles are written in a `<style>` block using CSS variables for easy theming.
- Loads `script.js` at the bottom via `<script src="script.js"></script>`.

### `script.js`

#### Validation (`showError`)
```js
function showError(id, show) {
  document.getElementById(id).style.display = show ? 'block' : 'none';
}
```
Shows or hides an error message element by its ID. Called for each required field on submit.

#### Submit Handler
```js
form.addEventListener('submit', function (e) { ... });
```
- Prevents the default browser form submission with `e.preventDefault()`.
- Validates **First Name** (non-empty), **Email** (regex check), and **Message** (non-empty).
- If validation fails, errors are shown and the function returns early.
- If valid, the button is disabled and shows `"Sending..."` for 900ms, then reveals the success message.

#### Live Error Clearing
```js
['fname', 'email', 'message'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => { ... });
});
```
As the user types into a field, its error message is hidden automatically for a better UX.

---

## 🔌 Connecting to a Real Backend

The current submit handler uses a `setTimeout` to simulate a network request. To send real emails, replace it with a `fetch()` call to your preferred service:

### Option A — Formspree (no backend needed)
```js
// 1. Sign up at https://formspree.io and create a form to get YOUR_FORM_ID
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ fname, email, message })
})
.then(res => {
  if (res.ok) {
    form.style.display = 'none';
    success.style.display = 'block';
  }
});
```

### Option B — Your own API endpoint
```js
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ fname, email, message })
})
.then(res => res.json())
.then(data => {
  form.style.display = 'none';
  success.style.display = 'block';
})
.catch(err => console.error('Send failed:', err));
```

---

## 🎨 Customisation

All colours are defined as CSS variables at the top of `contact.html`:

```css
:root {
  --ink:    #1a1209;   /* Text colour */
  --paper:  #f5f0e8;   /* Background */
  --accent: #c84b11;   /* Highlight / errors / CTA */
  --light:  #e8e0d0;   /* Input underline colour */
  --muted:  #7a7060;   /* Labels and secondary text */
}
```

Change these values to instantly restyle the entire form.

---

## 🌐 Browser Support

Works in all modern browsers: Chrome, Firefox, Safari, Edge. Does not require IE11.

---

## 📄 License

Free to use for personal and commercial projects.
