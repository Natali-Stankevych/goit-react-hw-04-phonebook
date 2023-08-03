import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import { Container, Wrapper, Title, SubTitle } from './App.styled';

import  ContactList  from './ConactList/ConactList';
import  ContactForm  from './ContactForm/ContactForm';
import Filter from './Filter/Filter';


const phoneContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? phoneContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const addContact = contact => {
    const isInContacts = contacts.some(
      ({ name }) =>
        name.toLowerCase() === contact.name.toLowerCase().trim()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [...prevContacts,
    { id: nanoid(), ...contact },
    ]);
  };

  const changeFilter = event => {
    setFilter(event.target.value.trim());
  };

  const   getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const removeContact = contactId => {
    setContacts(prevContacts => 
     prevContacts.filter(contact => contact.id !== contactId)
     
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
        <Container>
        <Title>Phonebook</Title>

        <ContactForm onSubmit={addContact} />

        <SubTitle>Contacts</SubTitle>
        {contacts.length > 0 ? (
        
          <Filter value={filter} onChangeFilter={changeFilter} />
        ) : (
          <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
        )}
        {contacts.length > 0 && (
          
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={removeContact}
          />
        )}
      </Container>
  )
}

//  class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//    componentDidMount() {
//      const contacts = localStorage.getItem('contacts');
//      const parsedContacts = JSON.parse(contacts);

//      if (parsedContacts) {
//        this.setState({ contacts: parsedContacts });
//      }
//    }

//    componentDidUpdate(_, prevState) {
//      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//    }
   
//   addContact = contact => {
//     const isInContacts = this.state.contacts.some(
//       ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
//     );

//     if (isInContacts) {
//       alert(`${contact.name} is already in contacts`);
//       return;
//     }
//     this.setState(prevState => ({
//       contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
//     }));
//   };
 
//   changeFilter = event => {
//     this.setState({ filter: event.target.value });
//   };


  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // removeContact = contactId => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
  //     };
  //   });
  // };

//   render() {
//     const visibleContacts = this.getVisibleContacts();
//     const { filter } = this.state;

//     return (
      // <Container>
      //   <Title>Phonebook</Title>

      //   <ContactForm onSubmit={this.addContact} />

      //   <SubTitle>Contacts</SubTitle>
      //   {this.state.contacts.length > 0 ? (
      //     // Фильтр для отображения контактов
      //     <Filter value={filter} onChangeFilter={this.changeFilter} />
      //   ) : (
      //     <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
      //   )}
      //   {this.state.contacts.length > 0 && (
      //     // Список контактов
      //     <ContactList
      //       contacts={visibleContacts}
      //       onRemoveContact={this.removeContact}
      //     />
      //   )}
      // </Container>
//     );
//   }
// };

export default App;