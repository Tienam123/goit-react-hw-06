import Contact from "@/components/Contact/Contact.jsx";
import {useSelector} from "react-redux";
import {filteredContacts} from "@/store/actions.js";


const ContactList = () => {
    const contacts = useSelector(filteredContacts)

    return <>{contacts.length > 0
        ? (<ul className='flex flex-wrap gap-5 mt-10 w-10/12 mx-auto'>
            {contacts.map((contact) => <Contact key={contact.id}
                                                id={contact.id}
                                                name={contact.name}
                                                number={contact.number}
            />)}
        </ul>)
        : (
            <h1 className='font-semibold text-white text-3xl text-center mt-5'>Список
                контактов
                пуст...</h1>)}</>
};
export default ContactList