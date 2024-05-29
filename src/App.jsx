import ContactForm from "@/components/ContactForm/ContactForm.jsx";
import SearchBox from "@/components/SearchBox/SearchBox.jsx";
import ContactList from "@/components/ContactList/ContactList.jsx";
import Description from "@/components/Description/Description.jsx";

import Footer from "@/pages/Footer.jsx";
import Header from "@/pages/Header.jsx";

const App = () => {

    return (
        <>
            <Header />
            <div className='form__container mt-20 mx-auto flex'>
                <ContactForm />
                <Description />
            </div>
            <SearchBox />
            <ContactList
            />
            <Footer />
        </>
    );
};
export default App;
