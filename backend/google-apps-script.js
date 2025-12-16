/**
 * ==========================================
 * GOOGLE APPS SCRIPT BACKEND (V6 - Final Stable)
 * ==========================================
 * 
 * INSTRUCTIONS:
 * 1. Deploy -> Manage Deployments -> New Version -> Deploy.
 * 2. If it fails, check the "Executions" tab on the left!
 */

const SPREADSHEET_ID = "1gM5Xne-u-3w4l8OQnuMytGvXG_2EQ7JDYjOuvJtC2aM";
const NOTIFICATION_EMAIL = "nicola@empowerautomation.co.uk";

const SHEET_NAME_ROI = "ROI_Inquiries";
const SHEET_NAME_CONTACT = "Contact_Form";
const SHEET_NAME_LOGIC = "Logic_Gate_Results";

function getSpreadsheet() {
    if (SPREADSHEET_ID && SPREADSHEET_ID.length > 20) {
        return SpreadsheetApp.openById(SPREADSHEET_ID);
    }
    throw new Error("Missing SPREADSHEET_ID");
}

function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        const jsonString = e.postData.contents;
        Logger.log("Received Payload: " + jsonString); // Check 'Executions' tab to see this

        const payload = JSON.parse(jsonString);
        const { type, email, data } = payload;
        const timestamp = new Date();

        if (type === 'ROI_CALCULATOR') {
            saveRoiData(email, data, timestamp);
        } else if (type === 'CONTACT') {
            saveContactData(email, data, timestamp);
        } else if (type === 'LOGIC_GATE') {
            saveLogicGateData(email, data, timestamp);
        }

        return createResponse({ status: 'success', message: 'Data saved' });

    } catch (error) {
        Logger.log("ERROR: " + error.toString());
        return createResponse({ status: 'error', message: error.toString() });
    } finally {
        lock.releaseLock();
    }
}

function saveContactData(email, data, timestamp) {
    const ss = getSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME_CONTACT);
    if (!sheet) { sheet = ss.insertSheet(SHEET_NAME_CONTACT); sheet.appendRow(["Timestamp", "Email", "Name", "Message"]); }

    sheet.appendRow([timestamp, email, data.name, data.message]);

    // Construct simplified email
    const subject = "📬 New Contact Form Message";
    const body = `New Message from ${data.name} (${email})\n\n${data.message}`;

    Logger.log("Sending Email To: " + NOTIFICATION_EMAIL);
    Logger.log("Email Body: " + body);

    if (NOTIFICATION_EMAIL) {
        GmailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
    }
}

function saveRoiData(email, data, timestamp) {
    const ss = getSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME_ROI);
    if (!sheet) { sheet = ss.insertSheet(SHEET_NAME_ROI); sheet.appendRow(["Timestamp", "Email", "Frequency", "Time/Task", "Rate", "SaaS Cost", "Drain", "BreakEven", "Savings"]); }

    const inputs = data.inputs || {};
    const results = data.results || {};
    sheet.appendRow([timestamp, email, inputs.frequency, inputs.minutes, inputs.rate, inputs.saasCost, results.annualDrain, results.breakEven, results.threeYearSavings]);

    const subject = `🚀 New ROI Lead: £${results.threeYearSavings}`;
    const body = `New Lead: ${email}\nSavings: £${results.threeYearSavings}`;
    if (NOTIFICATION_EMAIL) GmailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
}

function saveLogicGateData(email, data, timestamp) {
    const ss = getSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME_LOGIC);
    if (!sheet) { sheet = ss.insertSheet(SHEET_NAME_LOGIC); sheet.appendRow(["Timestamp", "Email", "Result Title", "Result Desc", "Path Taken"]); }

    const pathString = data.path ? data.path.map(p => `${p.from}->${p.answer}`).join(" | ") : "";
    sheet.appendRow([timestamp, email, data.result.title, data.result.desc, pathString]);

    const subject = `🧠 New Logic Gate: ${data.result.title}`;
    const body = `New Logic Gate Assessment: ${email}\nResult: ${data.result.title}`;
    if (NOTIFICATION_EMAIL) GmailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
}

function testEmail() {
    if (NOTIFICATION_EMAIL) {
        GmailApp.sendEmail(NOTIFICATION_EMAIL, "Test Email", "If you see this, permissions are perfect.");
    }
}

function setup() {
    const ss = getSpreadsheet();
    if (!ss.getSheetByName(SHEET_NAME_ROI)) ss.insertSheet(SHEET_NAME_ROI);
    if (!ss.getSheetByName(SHEET_NAME_LOGIC)) ss.insertSheet(SHEET_NAME_LOGIC);
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
