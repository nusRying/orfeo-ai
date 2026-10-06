# Google Sheets Integration Setup

This guide connects the contact form to a Google Sheet in ~3 minutes, with **zero API keys**.

---

## Step 1 — Create the Google Sheet

1. Go to [sheets.new](https://sheets.new) to create a new Google Sheet.
2. Rename the first sheet tab to **`Submissions`** (double-click the tab at the bottom).
3. Add these headers in **Row 1**:

| A | B | C | D | E |
|---|---|---|---|---|
| Timestamp | First Name | Last Name | Email | Message |

---

## Step 2 — Create the Apps Script

1. In your Google Sheet, click **Extensions → Apps Script**.
2. Delete any existing code and paste the following:

```javascript
const SHEET_NAME = 'Submissions';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.firstName || '',
      data.lastName  || '',
      data.email     || '',
      data.message   || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (Ctrl+S). Give the project a name like `KutraaContactForm`.

---

## Step 3 — Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in:
   - **Execute as**: `Me`
   - **Who has access**: `Anyone` ← important, this allows the form to call it without login
4. Click **Deploy**.
5. Authorize access when prompted.
6. Copy the **Web App URL** — it looks like:
   `https://script.google.com/macros/s/AKfyc.../exec`

---

## Step 4 — Add the URL to your project

Open (or create) `.env.local` in the project root and add:

```
GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Restart the dev server (`npm run dev`) and test the form. A new row should appear in your sheet!

---

## Updating the script later

If you edit the Apps Script, always create a **New deployment** (not just save) to apply changes:
Deploy → Manage deployments → Edit → New version → Deploy.
