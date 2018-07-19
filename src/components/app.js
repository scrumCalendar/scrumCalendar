import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Calendar from './calendar.js';
// import addEvent from './addEvent.js';

import Popup from "reactjs-popup"; //Add Event Popup
import { withFormik } from 'formik'; // React forms easily accessible
import Yup from 'yup'; // form validation
import Select from 'react-select'; // Form input text placeholder thing to throw errors
import { EditorState } from 'draft-js'; // editor text for description of Event
import { RichEditorExample } from './RichEditor.js'; // options to give people to edit the description text box from draft-js

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.postEvent = this.postEvent.bind(this);
    }

    // const formikEnhancer = withFormik ({
    //     mapPropsToValues: props => ({
    //         editorState: new EditorState.createEmpty(),
    //         eventName: '',
    //     }),
    //     validationSchema: Yup.object().shape({
    //         eventName: Yup.string()
    //             .min(5, "Minimum 5 characters required for event name")
    //             .required("Event name is required")
    //     }),
    //     handleSubmit: (values, { setSubmitting }) => {
    //         setTimeout(() => {
    //             alert(JSON.stringify(values, null, 2));
    //             setSubmitting(false);
    //         }, 1000)
    //     },
    //     displayName: 'MyForm',
    // });
    
    // const MyForm = ({
    //     values,
    //     touched,
    //     dirty,
    //     errors,
    //     handleChange,
    //     handleBlur,
    //     handleSubmit,
    //     handleReset,
    //     setFieldValue,
    //     isSubmitting,
    //   }) => (
    //      <form onSubmit={handleSubmit}>
    //       <label htmlFor="eventName" style={{ display: 'block' }}>
    //         Event Name
    //       </label>
    //       <input
    //         id="eventName"
    //         placeholder="Add Event Name"
    //         type="text"
    //         value={values.eventName}
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //       />
    //       {errors.eventName &&
    //       touched.eventName && (
    //         <div style={{ color: 'red', marginTop: '.5rem' }}>
    //           {errors.eventName}
    //         </div>
    //       )}
    //       <label
    //         htmlFor="eventDescription"
    //         style={{ display: 'block', marginTop: '.5rem' }}
    //       >
    //         Event Description
    //       </label>
    //       <RichEditorExample
    //         editorState={values.editorState}
    //         onChange={setFieldValue}
    //         onBlur={handleBlur}
    //       />
    //       <button
    //         type="button"
    //         className="outline"
    //         onClick={handleReset}
    //         disabled={!dirty || isSubmitting}
    //       >
    //         Reset
    //       </button>
    //       <button type="submit" disabled={isSubmitting}>
    //         Submit
    //       </button>
    //     </form>
    //   );
      
    //   const MyEnhancedForm = formikEnhancer(MyForm);    
    //   console.log('what is my formik function', formikEnhancer(MyForm));

    toggleModal = () => {
        this.setState = {
            isOpen: !this.state.isOpen
        }
    }

    postEvent(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log('submitted data', event)
        console.log('event target', event.target);

        fetch('/event', {
            method: 'POST',
            data: data,
        });
    }
    render() 
    
    {
        return (
            <div>
                <div class="App">
                    <header>
                    <div id="logo">
                        <span class="icon">date_range</span>
                        <span>
                        Event <b>Calendar</b>
                        </span>
                    </div>
                    </header>
                    <main>
                        <Calendar />
                    </main>

                    <div class="buttonCenter">
                        <Popup
                            trigger={<button class="buttonModal"> Add Tasks </button>}
                            modal
                            closeOnDocumentClick
                        >
                            <span> 
                                <h1>Add Event</h1>
                                <br />
                                {/* <MyEnhancedForm /> */}
                            </span>
                        </Popup>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("content"));