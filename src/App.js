import React from 'react';
import { useState, useEffect } from 'react';
import shortid from 'shortid';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageContacts) {
      setContacts(localStorageContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const onSubmitHandler = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    const normilizedContactName = contact.name.toLowerCase().trim();
    const sameContactName = contacts.find(
      cont => cont.name.toLowerCase().trim() === normilizedContactName,
    );
    if (sameContactName) {
      alert(`${contact.name} is already in contact`);
      return;
    }
    setContacts([contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const getFilter = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toString().toLowerCase().includes(normalizedFilter),
    );
  };

  const completedFilter = getFilter();

  return (
    <div>
      <h1 className="Title">Phonebook</h1>
      <ContactForm onSubmit={onSubmitHandler} />
      <h2 className="Title">Contacts</h2>
      <div className="Contacts">
        {completedFilter.length > 1 && (
          <Filter value={filter} onChange={changeFilter} />
        )}
        <ContactList
          contacts={completedFilter}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
}
