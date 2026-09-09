import LegalPage from "@/pages/LegalPage";
import { clinic } from "@/lib/site-data";

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      metaTitle="Terms of Use - Hawthorne Village Dental Care, Milton, ON"
      metaDescription="The terms that govern your use of the Hawthorne Village Dental Care website."
      slug="terms-of-use"
      updated="July 9, 2026"
    >
      <p>
        Welcome to the Hawthorne Village Dental Care website. By accessing or using this website, you
        agree to these Terms of Use. If you do not agree with any part of these terms, please do not
        use the site.
      </p>

      <div>
        <h2>Informational purposes only</h2>
        <p className="mt-3">
          The content on this website is provided for general information about our practice and
          dental health. It is not dental or medical advice and is not a substitute for a
          consultation, examination or diagnosis by a qualified dentist. Always seek the advice of a
          dental professional about your specific situation.
        </p>
      </div>

      <div>
        <h2>No dentist–patient relationship</h2>
        <p className="mt-3">
          Using this website, submitting a form or sending us a message does not create a
          dentist–patient relationship. A relationship is established only after you attend our
          clinic and are accepted as a patient.
        </p>
      </div>

      <div>
        <h2>Appointments and communication</h2>
        <p className="mt-3">
          Online booking requests are handled through a third-party provider and are confirmed by
          our front desk. If you have a dental emergency, do not rely on website forms; call us
          directly at {clinic.phone}.
        </p>
      </div>

      <div>
        <h2>Intellectual property</h2>
        <p className="mt-3">
          All content on this site, including text, images, logos and graphics, belongs to Hawthorne
          Village Dental Care or its licensors and is protected by copyright and trademark law. You
          may not reproduce, distribute or use it for commercial purposes without our written
          permission.
        </p>
      </div>

      <div>
        <h2>Third-party links</h2>
        <p className="mt-3">
          This site may contain links to third-party websites, such as our online booking system and
          social media pages. We are not responsible for the content or privacy practices of those
          sites.
        </p>
      </div>

      <div>
        <h2>Limitation of liability</h2>
        <p className="mt-3">
          This website is provided "as is" without warranties of any kind. To the fullest extent
          permitted by law, Hawthorne Village Dental Care is not liable for any damages arising from
          your use of, or inability to use, this website or its content.
        </p>
      </div>

      <div>
        <h2>Changes to these terms</h2>
        <p className="mt-3">
          We may update these Terms of Use from time to time. The date at the top of this page shows
          when they were last revised. Continued use of the site after changes are posted means you
          accept the updated terms.
        </p>
      </div>

      <div>
        <h2>Contact us</h2>
        <p className="mt-3">
          Questions about these terms? Contact Hawthorne Village Dental Care,{" "}
          {clinic.address.street}, {clinic.address.city}, {clinic.address.region}{" "}
          {clinic.address.postal} · {clinic.phone} · {clinic.email}.
        </p>
      </div>
    </LegalPage>
  );
}
