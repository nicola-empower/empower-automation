import React, { useState } from 'react';
import { X, ArrowRight, CircleCheck } from 'lucide-react';

const automationExamples = [
    { title: 'Lead Capture to Follow-Up', category: 'internal', steps: ['Web Form Submission', 'Data Added to Google Sheet', 'New Lead Tagged in CRM', 'Personalized Follow-up Email Sent', 'Lead Status Updated'], benefit: 'Saves hours of manual data entry each week and prevents costly errors that lose valuable leads, ensuring rapid and consistent communication.' },
    { title: 'Project Task Management', category: 'internal', steps: ['Task Created in Google Sheet', 'Calendar Event Scheduled', 'Automated Email Reminders Sent', 'Status Synced with Project Dashboard'], benefit: 'Keeps your team perfectly aligned with instant updates to a central dashboard and eliminates the risk of missed deadlines.' },
    { title: 'Employee Onboarding', category: 'internal', steps: ['New Hire Form Submitted', 'Personalized Onboarding Checklist Created', 'Induction Meetings Scheduled', 'Welcome Email with Resources Sent', 'Training Progress Tracked'], benefit: 'Ensures a flawless, consistent, and professional onboarding experience for every new hire, freeing up significant HR time.' },
    { title: 'Event Registration & Feedback', category: 'internal', steps: ['Participant Registers via Form', 'Confirmation Email & Invite Sent', 'Calendar Event Created', 'Post-Event Feedback Form Emailed', 'Results Summarized in Sheet'], benefit: 'Automates the entire event lifecycle from registration to feedback analysis, providing a seamless experience for attendees and organisers.' },
    { title: 'Content Publishing Workflow', category: 'internal', steps: ['Content Ideas Collected in Sheet', 'Writing Deadlines Scheduled in Calendar', 'Drafts Stored & Linked in Drive', 'Automated Review Reminders Sent', 'Final Status Updated on Tracker'], benefit: 'Streamlines content creation from ideation to publication, ensuring deadlines are met and all stakeholders are kept in the loop.' },
    { title: 'Invoice & Payment Tracking', category: 'internal', steps: ['Invoice Details Entered in Sheet', 'Professional Invoice Generated in Docs', 'PDF Invoice Emailed to Client', 'Payment Status Updated via API', 'Automated Late Payment Reminders Sent'], benefit: 'Dramatically speeds up cash flow with prompt, professional invoicing and consistent follow-ups, while significantly reducing billing errors.' },
    { title: 'Customer Support Ticketing', category: 'internal', steps: ['Support Request Submitted via Form', 'Ticket Created & Assigned in Sheet', 'Automated Notification Sent to Team', 'Status Updates Emailed to Customer', 'Closure Triggers Feedback Request'], benefit: 'Creates a robust and simple customer support ticketing system directly within Google Workspace, eliminating the need for extra software costs.' },
    { title: 'Team Leave Management', category: 'internal', steps: ['Leave Request Submitted via Form', 'Approval Tracked in Sheet', 'Shared Team Calendar Updated', 'Confirmation Email Sent', 'Leave Balances Updated Automatically'], benefit: 'Simplifies and streamlines the entire leave request and approval process, ensuring accurate tracking and complete team visibility.' },
    { title: 'HubSpot Lead Enrichment', category: 'external', steps: ['New Lead Added in HubSpot', 'Script Pulls Company Data from LinkedIn API', 'Lead Record Updated in HubSpot', 'Automated Follow-up Sent via Gmail', 'Interaction Logged in Google Sheet'], benefit: 'Automatically enriches new lead data in real-time, enabling highly personalized and timely sales outreach that converts.' },
    { title: 'Shopify Order Fulfillment', category: 'external', steps: ['New Shopify Order Placed', 'Order Info Pulled into Google Sheet', 'Shipping Label Generated via Shippo API', 'Tracking Info Emailed to Customer', 'Order Status Updated in Shopify'], benefit: 'Creates a completely hands-free and error-proof fulfillment process, from order placement to shipping notification, delighting customers.' },
    { title: 'Stripe Payment Reconciliation', category: 'external', steps: ['Payment Received via Stripe', 'Transaction Pulled into Sheet', 'Invoice Status Updated in Xero/QuickBooks', 'Confirmation Sent to Customer', 'Monthly Revenue Report Generated'], benefit: 'Keeps your accounting software perfectly in sync with your payment processor, saving countless hours of manual reconciliation.' },
    { title: 'Trello Project Update Digest', category: 'external', steps: ['Team Updates Trello Cards', 'Script Fetches Recent Changes', 'Updates Summarized in Google Doc', 'Weekly Digest Emailed to Stakeholders'], benefit: 'Keeps all stakeholders informed with automated weekly summaries, eliminating the need for manual report creation and meetings.' },
    { title: 'Asana Task Sync', category: 'external', steps: ['New Task Created in Asana', 'Details Captured in Central Sheet', 'Due Dates Scheduled in Google Calendar', 'Status Synced Back from Asana', 'Completion Triggers Notification'], benefit: 'Seamlessly integrates your project management tool with your calendar and central reporting sheets for unparalleled oversight.' },
    { title: 'Mailchimp Newsletter Reporting', category: 'external', steps: ['Campaign Sent from Mailchimp', 'Script Retrieves Open/Click Data via API', 'Analytics Dashboard in Sheets Updated', 'Marketing Team Notified of Performance'], benefit: 'Automates campaign performance tracking and delivers key insights directly to your team, enabling faster, data-driven decisions.' },
    { title: 'Zendesk Ticket Escalation', category: 'external', steps: ['New Zendesk Ticket Received', 'Ticket Details Logged to Sheet', 'If "Urgent", Triggers Slack Message', 'Escalation Status Tracked', 'Follow-up Survey Sent to Customer'], benefit: 'Ensures that urgent customer support tickets are actioned immediately via real-time Slack notifications, protecting customer satisfaction.' },
    { title: 'WooCommerce Stock Reorder', category: 'external', steps: ['Low Stock Detected via WooCommerce API', 'Automated Restock Order Sent via Gmail', 'Purchase Order Saved in Drive', 'Confirmation Received and Logged'], benefit: 'Prevents costly stockouts by automating the entire reordering process based on real-time inventory levels in your e-commerce store.' },
    { title: 'DocuSign Integration', category: 'external', steps: ['Contract Ready in Google Drive', 'Script Sends Document via DocuSign API', 'Signature Status Fetched Hourly', 'Signed PDF Archived in Drive', 'Status Updated in Tracking Sheet'], benefit: 'Streamlines your entire contract workflow from sending to secure archiving, reducing turnaround time and manual follow-ups.' },
    { title: 'Typeform Feedback Hub', category: 'external', steps: ['Customer Fills Out Typeform Survey', 'Results Imported to Google Sheet', 'Negative Ratings Automatically Flagged', 'Alert Sent to Support (Slack/Teams)', 'Summary Dashboard Auto-Generated'], benefit: 'Turns customer feedback into instant, actionable insights by automatically flagging critical responses for immediate attention.' },
    { title: 'Facebook Lead Ads Integration', category: 'external', steps: ['New Lead from Facebook Ad Form', 'Data Fetched by Apps Script', 'Stored in Sheet & Updated in CRM', 'Automated Thank-You Message Sent'], benefit: 'Instantly captures and nurtures new leads from your social media campaigns, ensuring no opportunity is ever missed.' },
    { title: 'Twitter Brand Monitoring', category: 'external', steps: ['Script Monitors Twitter for Keywords', 'Mentions Logged in Sheet', 'Negative Sentiment Flagged for Review', 'Alerts Sent to Team', 'Weekly Engagement Report Generated'], benefit: 'Automates your social listening to protect your brand reputation, track engagement, and gather valuable customer insights.' },
];

export default function AutomationExamples() {
    const [filter, setFilter] = useState('all');
    const [selectedExample, setSelectedExample] = useState(null);

    const filteredExamples = filter === 'all'
        ? automationExamples
        : automationExamples.filter(ex => ex.category === filter);

    return (
        <div>
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                    onClick={() => setFilter('all')}
                    className={`px-6 py-2 rounded-full text-sm font-mono transition-all ${filter === 'all' ? 'bg-brand-orange text-white shadow-[0_0_15px_rgba(242,111,33,0.4)]' : 'bg-brand-dark border border-gray-700 text-gray-400 hover:border-brand-orange hover:text-white'}`}
                >
                    All Examples
                </button>
                <button
                    onClick={() => setFilter('internal')}
                    className={`px-6 py-2 rounded-full text-sm font-mono transition-all ${filter === 'internal' ? 'bg-brand-orange text-white shadow-[0_0_15px_rgba(242,111,33,0.4)]' : 'bg-brand-dark border border-gray-700 text-gray-400 hover:border-brand-orange hover:text-white'}`}
                >
                    Internal Workflows
                </button>
                <button
                    onClick={() => setFilter('external')}
                    className={`px-6 py-2 rounded-full text-sm font-mono transition-all ${filter === 'external' ? 'bg-brand-orange text-white shadow-[0_0_15px_rgba(242,111,33,0.4)]' : 'bg-brand-dark border border-gray-700 text-gray-400 hover:border-brand-orange hover:text-white'}`}
                >
                    External API Integrations
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredExamples.map((example, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedExample(example)}
                        className="bg-brand-dark border border-gray-800 rounded-lg p-6 hover:border-brand-orange transition-all cursor-pointer group flex flex-col h-full"
                    >
                        <div className="mb-4">
                            <span className={`text-xs font-mono px-3 py-1 rounded-full ${example.category === 'internal' ? 'bg-blue-900/30 text-blue-400 border border-blue-800' : 'bg-purple-900/30 text-purple-400 border border-purple-800'}`}>
                                {example.category === 'internal' ? 'Internal Workflow' : 'External API'}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">{example.title}</h3>
                        <p className="text-gray-400 text-sm mb-6 grow">{example.benefit.substring(0, 100)}...</p>
                        <div className="flex items-center text-brand-orange text-sm font-bold mt-auto">
                            See Workflow <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedExample && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedExample(null)}>
                    <div className="bg-[#0f1219] border border-gray-700 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
                        <div className="sticky top-0 bg-[#0f1219]/95 backdrop-blur border-b border-gray-800 p-6 flex justify-between items-center z-10">
                            <h3 className="text-2xl font-bold text-white">{selectedExample.title}</h3>
                            <button onClick={() => setSelectedExample(null)} className="text-gray-400 hover:text-white transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="p-8">
                            <div className="space-y-6 relative pl-4 border-l border-gray-800 ml-4">
                                {selectedExample.steps.map((step, idx) => (
                                    <div key={idx} className="relative pl-8">
                                        <div className="absolute -left-[2.35rem] top-0 w-8 h-8 rounded-full bg-brand-dark border border-brand-orange text-brand-orange flex items-center justify-center font-mono text-sm font-bold">
                                            {idx + 1}
                                        </div>
                                        <p className="text-gray-200 text-lg">{step}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
                                <h4 className="text-green-400 font-bold mb-2 flex items-center">
                                    <CircleCheck className="w-5 h-5 mr-2" /> The Business Impact
                                </h4>
                                <p className="text-green-100/80">{selectedExample.benefit}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
