/**
 * ==========================================
 * GOOGLE APPS SCRIPT BACKEND (V3 - Email Notifications)
 * ==========================================
 * 
 * INSTRUCTIONS:
 * 1. Ensure your SPREADSHEET_ID is correct below.
 * 2. If you want email alerts, put your email in NOTIFICATION_EMAIL.
 * 3. Save the script (Disk icon).
 * 4. Deploy -> Manage Deployments -> Edit (Pencil) -> New Version -> Deploy.
 */

// 👇👇👇 PASTE YOUR SPREADSHEET ID HERE 👇👇👇
const SPREADSHEET_ID = "1gM5Xne-u-3w4l8OQnuMytGvXG_2EQ7JDYjOuvJtC2aM";
// 👆 Please ensure this matches your actual sheet ID from Step 2

// 👇👇👇 WANT EMAIL ALERTS? TYPE YOUR EMAIL HERE 👇👇👇
const NOTIFICATION_EMAIL = "nicola@empowerautomation.co.uk";
// 👆 Example: "nicola@empowerautomation.co.uk" (Leave empty "" to disable)


const SHEET_NAME_ROI = "ROI_Inquiries";
const SHEET_NAME_CONTACT = "Contact_Form";

/**
 * Helper to get the spreadsheet
 */
function getSpreadsheet() {
    try {
        const ss = SpreadsheetApp.getActiveSpreadsheet();
        if (ss) return ss;
    } catch (e) { }

    if (SPREADSHEET_ID && SPREADSHEET_ID.length > 20) {
        return SpreadsheetApp.openById(SPREADSHEET_ID);
    }
    throw new Error("Missing or Invalid SPREADSHEET_ID");
}

/**
 * Handle POST requests from the website
 */
function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        const jsonString = e.postData.contents;
        const payload = JSON.parse(jsonString);
        const { type, email, data } = payload;
        const timestamp = new Date();

        if (type === 'ROI_CALCULATOR') {
            saveRoiData(email, data, timestamp);
        } else if (type === 'CONTACT') {
            saveContactData(email, data, timestamp);
        }

        return createResponse({ status: 'success', message: 'Data saved' });

    } catch (error) {
        return createResponse({ status: 'error', message: error.toString() });
    } finally {
        lock.releaseLock();
    }
}

/**
 * Helper to save ROI Calculator Data
 */
function saveRoiData(email, data, timestamp) {
    const ss = getSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME_ROI);

    if (!sheet) {
        sheet = ss.insertSheet(SHEET_NAME_ROI);
        sheet.appendRow(["Timestamp", "Email", "Frequency", "Time/Task", "Rate", "SaaS Cost", "Drain", "BreakEven", "Savings"]);
    }

    const inputs = data.inputs || {};
    const results = data.results || {};

    sheet.appendRow([
        timestamp,
        email,
        inputs.frequency,
        inputs.minutes,
        inputs.rate,
        inputs.saasCost,
        results.annualDrain,
        results.breakEven,
        results.threeYearSavings
    ]);

    // SEND EMAIL NOTIFICATION
    if (NOTIFICATION_EMAIL && NOTIFICATION_EMAIL.includes("@")) {
        const subject = `🚀 New Lead: £${results.threeYearSavings} Opportunity`;
        const body = `
      New ROI Calculator Lead!
      
      Email: ${email}
      Potential 3-Year Savings: £${results.threeYearSavings}
      Annual Drain: £${results.annualDrain}
      
      View Spreadsheet: ${ss.getUrl()}
    `;
        MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
    }
}

/**
 * Helper to save Contact Form Data
 */
function saveContactData(email, data, timestamp) {
    const ss = getSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME_CONTACT);

    if (!sheet) {
        sheet = ss.insertSheet(SHEET_NAME_CONTACT);
        sheet.appendRow(["Timestamp", "Email", "Name", "Message"]);
    }

    sheet.appendRow([timestamp, email, data.name, data.message]);

    // SEND EMAIL NOTIFICATION
    if (NOTIFICATION_EMAIL && NOTIFICATION_EMAIL.includes("@")) {
        const subject = `📬 New Contact Form Message`;
        const body = `
      New Message from ${data.name} (${email})
      
      Message:
      ${data.message}
      
      View Spreadsheet: ${ss.getUrl()}
    `;
        MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
    }
}

function setup() {
    const ss = getSpreadsheet();
    if (!ss.getSheetByName(SHEET_NAME_ROI)) ss.insertSheet(SHEET_NAME_ROI);
    Logger.log("Setup complete for: " + ss.getName());
}

function createResponse(body) {
    return ContentService.createTextOutput(JSON.stringify(body))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeader("Access-Control-Allow-Origin", "*");
}

function doOptions(e) {
    return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.TEXT)
        .setHeader("Access-Control-Allow-Origin", "*")
        .setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
