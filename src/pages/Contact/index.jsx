import ContactDetails from "./ContactDetails";
import FormSection from "./FormSection";

const Contact = () => {
  return (
    <div>
      <section className="mx-auto m-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
          <div style={{ width: "100%", height: "400px" }} className="my-4">
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248775.15023335096!2d80.1865728!3d13.0285568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15229f06c617%3A0x350653e163fd181a!2sDWD%20Studio!5e0!3m2!1sen!2sin!4v1740256258856!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <FormSection />
        </div>
      </section>
    </div>
  );
};

export default Contact;
