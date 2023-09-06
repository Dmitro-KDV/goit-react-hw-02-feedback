import {Contacts} from 'components/Phonebook/Contacts'
import {Form, Label} from './Phonebook.stiled';

export const Phonebook = ({stats}) => {
    return ( 
        <div>
            <h2>Phonebook</h2>
            <Form>
                <Label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <button type="submit">Add contact</button>
            </Form>
            <h2>Contacts</h2>
            <Contacts/>
        </div>
    );
}