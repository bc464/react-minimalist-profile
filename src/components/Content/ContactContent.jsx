import React, {useState, useEffect} from 'react'

const ContactContent = () => {
    const [inputFields, setInputFields] = useState({
      user: "",
      email: "",
      message: ""
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateValues = (inputValues) => {
      let errors = {};
      let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
      if(!inputValues.user) {
        errors.user = "This field is required"
      }
      if (!isValidEmail(inputValues.email)) {
         errors.email = "Please recheck your email address"
      }
      if (!inputValues.message) {
        errors.message = "This field is required"
      }
      return errors;
    };
    const handleChange = (e) => {
      setInputFields({...inputFields, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validateValues(inputFields));
      setSubmitting(true)
    };

    const finishSubmit = (e) => {
      console.log(inputFields);
      inputFields.user = ""
      inputFields.email = ""
      inputFields.message = ""
    }

    useEffect(() => {
      if (Object.keys(errors).length === 0 && submitting) {
        finishSubmit()
      }
    }, [errors]);
    
  return (
    <>
    <section className='getInTouch'>
        <h6>Get in Touch</h6>
        <div className='getInTouch-text'>
            <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
            <div className="social">
                <img src='./images/icons/github.svg' alt='github'></img>
                <img src='./images/icons/linkedin.svg' alt='linkedin'></img>
                <img src='./images/icons/twitter.svg' alt='twitter'></img>
            </div>
        </div>
    </section>
    <section className='contactMe'>
        <h6>Contact Me</h6>
        <div  className='contactMe-form'>
            <form onSubmit={handleSubmit}>
                <div className='form-box'>
                <label htmlFor="user">Name</label>
                <input 
                  type='text'
                  name='user'
                  placeholder='Jane Appleseed'  
                  value={inputFields.user}
                  onChange={handleChange} />
                {errors.user ? (
                  <p className='errorMsg'>This field is required</p>) : null}
                </div>
                <div className='form-box'>
                <label htmlFor="email">Email Address</label>
                <input 
                type='email' 
                name="email" 
                value={inputFields.email}
                placeholder='email@example.com' 
                onChange={handleChange} />
                {errors.email ? (
                  <p className="errorMsg">Please check your email address</p> ) : null}
                </div>
                <div className='form-box'>
                <label htmlFor="message">Message</label>
                <textarea 
                type='textarea' 
                name='message' 
                value={inputFields.message}
                placeholder='How can I help?' 
                onChange={handleChange} />
               {errors.message ? (
                <p className='errorMsg'>This field is required</p>) : null}
                </div>
                <button type='submit'  className='btn btnContact'>Send Message</button>
            </form>
        </div>
    </section>
    </>
  )
}

export default ContactContent