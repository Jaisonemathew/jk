import { useForm, ValidationError } from '@formspree/react';
function Form() {
  const [state, handleSubmit] = useForm("mgvwvbwq");
  if (state.succeeded) {
      return <div className='m-16'>
      <p className='text-center jost-400'>Thank you for contacting, We will contact soon</p>
      </div>
  }
  return (
    <>
    <br></br>
    <br></br>
    <p className="text-4xl poppins-bold gradient text-center" id="contact">LETS GET IN TOUCH !</p><br></br>
      <p className='text-center dm-sans-300'>I WOULD LOVE TO HEAR FROM YOU.</p><br></br>
 
    <form onSubmit={handleSubmit} className='m-4 jost-300'>
  
    <div className='md:flex'>
      <div className='m-2 flex flex-col md:w-1/2'>
  <label className='' htmlFor="name">
    Name* 
  </label>
  <input
    id="name"
    type="text" 
    name="name"
    required className=' border border-gray-200 bg-newblack text-white p-2 rounded-md'
  />
  <ValidationError 
    prefix="Name" 
    field="name"
    errors={state.errors}
  />
  </div>
  <div className="m-2 flex flex-col md:w-1/2">
<label htmlFor="email">
    Email*
  </label>
  <input
    id="email"
    type="email" 
    name="email" required className=' border border-gray-200 bg-newblack text-white p-2 rounded-md'
  />

  <ValidationError 
    prefix="Email" 
    field="email"
    errors={state.errors}
  />
  </div>
</div>


<div className='md:flex'>
  <div className='m-2 flex flex-col md:w-1/2'>
  <label htmlFor="mobile">
    Mobile Number
  </label>
  <input
    id="mobile"
    type="tel" 
    name="mobile" className=' border border-gray-200 bg-newblack text-white p-2 rounded-md'
  />
  <ValidationError 
    prefix="Mobile" 
    field="mobile"
    errors={state.errors}
  />
</div>
<div className='m-2 flex flex-col md:w-1/2'>
  <label htmlFor="linkedin">
    LinkedIn Profile
  </label>
  <input
    id="linkedin"
    type="text" 
    name="linkedin" className=' border border-gray-200 bg-newblack text-white rounded-md p-2'
  />
  <ValidationError 
    prefix="LinkedIn" 
    field="linkedin"
    errors={state.errors}
  />
</div>
</div>
<div className='flex flex-col m-2'>
  <label htmlFor="message">
    Message
  </label>
  <textarea className='p-2 w-full bg-newblack text-white border border-gray-200 '
    id="message"
    name="message" required placeholder=' Type here...' rows={5}
  ></textarea>
  <ValidationError 
    prefix="Message" 
    field="message"
    errors={state.errors} 
  />
</div>
<div className='m-4 flex justify-center'>
<button className="m-3 p-2 w-32 rounded-lg font-normal bg-nwhite text-nblack flex justify-center items-center" type="submit" disabled={state.submitting}>
  {state.submitting ? (
    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-nblack"></div> // CSS spinner
  ) : (
    "Send"
  )}
</button>
  </div>
</form>

    </>
  );
}

export default Form;