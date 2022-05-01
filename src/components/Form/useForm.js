import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const useForm = (callback, validate) => {
  const form = useRef();
  const [values, setValues] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    // IMPLEMENT TYSON EMAIL HERE
    if (isSubmitting) {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID').then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
    e.target.reset();
  };

  // display errors if there are any. Submit otherwise
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors, form };
};

export default useForm;
