import ContactForm from "./ContactForm"

const FormSection = () =>
{
  return (

    <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-richblack-5">
        Got a Vision? We&apos;ve got the Moves. Let&apos;s Dance Together!
      </h1>
      <p className="">
        Tell us more about yourself and the dance dreams you have in mind!
      </p>

      <div className="mt-7">
        <ContactForm />
      </div>
    </div>

  )
}

export default FormSection