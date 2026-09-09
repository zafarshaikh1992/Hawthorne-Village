import LegalPage from "@/pages/LegalPage";
import { clinic } from "@/lib/site-data";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      metaTitle="Privacy Policy - Hawthorne Village Dental Care, Milton, ON"
      metaDescription="How Hawthorne Village Dental Care in Milton, Ontario collects, uses and protects your personal and health information."
      slug="privacy-policy"
      updated="July 9, 2026"
    >
      <p>
        Hawthorne Village Dental Care ("we", "us" or "our") is committed to protecting the privacy of
        our patients and website visitors. This policy explains what information we collect, how we
        use it, and the choices you have. We handle personal information in accordance with the
        Personal Information Protection and Electronic Documents Act (PIPEDA) and Ontario's Personal
        Health Information Protection Act (PHIPA).
      </p>

      <div>
        <h2>Information we collect</h2>
        <p className="mt-3">Depending on how you interact with us, we may collect:</p>
        <ul className="mt-3">
          <li>Contact details such as your name, phone number, email and mailing address.</li>
          <li>Health information needed to provide dental care, including your dental and medical history.</li>
          <li>Insurance and billing details used to process claims and payments.</li>
          <li>Appointment requests and messages you send through our website forms.</li>
          <li>Basic technical information about your visit to our website, such as pages viewed.</li>
        </ul>
      </div>

      <div>
        <h2>How we use your information</h2>
        <ul className="mt-3">
          <li>To provide, plan and coordinate your dental care.</li>
          <li>To book and confirm appointments and send appointment reminders.</li>
          <li>To bill your dental insurer directly and process payments, including CDCP claims.</li>
          <li>To communicate with other health professionals involved in your care, with your consent.</li>
          <li>To meet our legal and regulatory obligations as a dental practice in Ontario.</li>
        </ul>
      </div>

      <div>
        <h2>Consent</h2>
        <p className="mt-3">
          We collect, use and disclose your personal health information with your knowledge and
          consent, except where permitted or required by law. You may withdraw your consent at any
          time, subject to legal and professional restrictions, by contacting our office.
        </p>
      </div>

      <div>
        <h2>How we protect your information</h2>
        <p className="mt-3">
          Patient records are stored securely and access is limited to team members who need the
          information to provide your care or administer our practice. We retain records for the
          periods required by the Royal College of Dental Surgeons of Ontario and applicable law.
        </p>
      </div>

      <div>
        <h2>Third-party services</h2>
        <p className="mt-3">
          Our website may link to third-party services, such as our online booking provider and
          Google Maps. Those services operate under their own privacy policies, and we encourage you
          to review them. We do not sell your personal information to anyone.
        </p>
      </div>

      <div>
        <h2>Access and correction</h2>
        <p className="mt-3">
          You have the right to access the personal health information we hold about you and to
          request a correction if you believe it is inaccurate or incomplete. To make a request,
          contact our Privacy Officer using the details below.
        </p>
      </div>

      <div>
        <h2>Contact us</h2>
        <p className="mt-3">
          If you have questions about this policy or how your information is handled, please contact
          us: Hawthorne Village Dental Care, {clinic.address.street}, {clinic.address.city},{" "}
          {clinic.address.region} {clinic.address.postal} · {clinic.phone} · {clinic.email}.
        </p>
      </div>
    </LegalPage>
  );
}
