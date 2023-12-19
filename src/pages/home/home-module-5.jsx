import { useState,useEffect } from 'react';


const HomeModule5 = () => {
    const [number1,setNumber1] = useState(34);
    const [number2,setNumber2] = useState(999);
    
    // Form Validation script for one or more inputs.
    const initialValues = {email:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState('');
    const [isSubmit,setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const{name,value} = e.target;
        setFormValues({...formValues, [name]: value});
    }
  
    const handleSubmit = (e) =>{
       e.preventDefault(); 
       setFormErrors(validate(formValues));
       setIsSubmit(true);
    }
    useEffect(() => {
      
        if(Object.keys(formErrors).length === 0 & isSubmit){
            setFormValues({email:""});
            // Code to execute after proper validation

        }
      }, [formErrors]);


    const validate = (values) => {
        const errors = {}
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if(!values.email){
            errors.email = "Whoops, please enter your email";
        }else if (!regex.test(values.email)){
            errors.email = "Whoops, make sure it's an email";
        }
        return errors
    };


    
    // Count down script (wasn't sure about the concept so i created it my way kinda fake but looks real :)  ) 
    useEffect(() => {
        const interval1 = setInterval(() => {
            if(number1 != 0){
                setNumber1(number1 => number1 - 1);
                setNumber2(Math.round(Math.random() * (999 - 100) + 100));
            }
            else{
                setNumber2('000');
            }
        }, 571);
    return () => clearInterval(interval1);
    }, [number1,number2]);
        

    return ( 
        <div className="HomeModule5">
            {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='succes'>Form validated successfully</div>) : (<></>) }
            <div className="span-container">
                <span>{number1},{number2}</span>
                <span>+ ALREADY JOINED</span>
            </div>
            <h5>Stay up-to-date with what we're doing</h5>
            <form onSubmit={handleSubmit} className="contact-form" autoComplete="off">
                <div className={Object.keys(formErrors).length > 0 ? 'wrapper' : '' }>
                    <input  name="email" placeholder="Enter your email adress" value={formValues.email} onChange={handleChange}/>
                    {Object.keys(formErrors).length > 0 ? (<p className='error'>{formErrors.email}</p>) : (<></>) }
                </div>
                <button type="submit">Contact us</button>
            </form>
        </div>
     );
}
 
export default HomeModule5;