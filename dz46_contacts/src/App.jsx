import { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Modal from './components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const handleTogleModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="App">
      <ContactsList />
      <button onClick={handleTogleModal}>Add Contact</button>
      {
        isOpen
          ? <Modal onCloseModal={handleTogleModal}><ContactForm onCancel={handleTogleModal} /></Modal>
          : null
      }
    </div>
  );
}


export default App;
