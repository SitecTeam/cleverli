export const getContactHtmlStringToSitec = (data: {
  name: string;
  email: string;
  message?: string;
}) => {
  return `
    <div style="font-family: sans-serif; padding: 20px;">
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.message ? `<p><strong>Message:</strong><br>${data.message.replace(/\n/g, "<br>")}</p>` : ""}
    </div>
  `;
};

export const getContactHtmlStringToUserWithAnswers = (data: {
  name: string;
  email: string;
  message?: string;
}) => {
  return `
    <div style="font-family: sans-serif; padding: 20px;">
      <h2>We received your message</h2>
      <p>Hi ${data.name},</p>
      <p>Thanks for getting in touch. We've received your message and will get back to you shortly.</p>
      <hr />
      <h3>Your message:</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.message ? `<p><strong>Message:</strong><br>${data.message.replace(/\n/g, "<br>")}</p>` : ""}
    </div>
  `;
};

export const getBookingHtmlStringToSitec = (data: {
  name: string;
  email: string;
  date: string;
  time: string;
  message?: string;
}) => {
  return `
    <div style="font-family: sans-serif; padding: 20px;">
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Time:</strong> ${data.time}</p>
      ${data.message ? `<p><strong>Message:</strong><br>${data.message.replace(/\n/g, "<br>")}</p>` : ""}
    </div>
  `;
};

export const getBookingHtmlStringToUserWithAnswers = (data: {
  name: string;
  email: string;
  date: string;
  time: string;
  message?: string;
}) => {
  return `
    <div style="font-family: sans-serif; padding: 20px;">
      <h2>Consultation Request Received</h2>
      <p>Hi ${data.name},</p>
      <p>We have received your request for a free consultation.</p>
      <p><strong>Requested Date:</strong> ${data.date}</p>
      <p><strong>Requested Time:</strong> ${data.time}</p>
      <p>We will confirm this shortly.</p>
      <hr />
      ${data.message ? `<p><strong>Your Message:</strong><br>${data.message.replace(/\n/g, "<br>")}</p>` : ""}
    </div>
  `;
};
