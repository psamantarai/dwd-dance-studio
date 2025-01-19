import ContactDetails from "./ContactDetails";
import FormSection from "./FormSection";

const Contact = () =>
{
  return <div>
    <section className="mx-auto m-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
      {/* Contact Details */}
      <div className="lg:w-[40%]">
        <ContactDetails />
      </div>

      {/* Contact Form */}
      <div className="lg:w-[60%]">
        <FormSection />
      </div>
    </section>
  </div>;
};

export default Contact;
