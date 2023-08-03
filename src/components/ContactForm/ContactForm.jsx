// import React from "react";
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from "./ContactForm.styled";


const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();

   
    onSubmit({ name, number });
    setName('');
    setNumber('');

  };
const handleChange = event => {
   const { name, value } = event.target;
  switch (name) {
    case 'name':
      setName(value);
      break;
    case 'number':
      setNumber(value);
      break;
    default:
      return;
  };
 };
  return (
       <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label htmlFor={numberInputId}>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact </Button>
      </Form>
)
}

// class ContactForm extends React.Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

  
//   handleSubmit = event => {
//     event.preventDefault();

   
//     this.props.onSubmit({ name: this.state.name, number: this.state.number });


//     this.reset();
//   };

  
//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   // Сброс состояния формы
//   reset = () => {
//     this.setState({ number: '', name: '' });
//   };

//   render() {
//     return (
      // <Form onSubmit={this.handleSubmit}>
      //   <Label htmlFor={this.nameInputId}>
      //     Name
      //     <Input
      //       type="text"
      //       name="name"
      //       value={this.state.name}
      //       onChange={this.handleChange}
      //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      //       required
      //     />
      //   </Label>

      //   <Label htmlFor={this.numberInputId}>
      //     Number
      //     <Input
      //       type="tel"
      //       name="number"
      //       value={this.state.number}
      //       onChange={this.handleChange}
      //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      //       required
      //     />
      //   </Label>

      //   <Button type="submit">Add contact </Button>
      // </Form>
//     );
//   }
// }

export default ContactForm;