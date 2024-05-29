import {FaPhoneAlt, FaRegUser} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {deleteContact} from "@/store/contactSlice.js";

const Contact = ({
                     name,
                     number,
                     id,
                 }) => {
    const dispatch = useDispatch();
    return (
        <li className='p-10 bg-white w-80 rounded-xl flex items-center justify-between relative ml-5'>
            <div>
                <div className='flex gap-3'>
                    <FaRegUser size={32}
                               className='text-orange-500'
                    />
                    <p className='text-2xl'>{name}</p>

                </div>
                <div className='flex gap-3 mt-5'>
                    <FaPhoneAlt size={32}
                                className='text-orange-500'
                    />
                    <p className='text-2xl'>{number}</p>
                </div>
            </div>
            <button className='px-5 py-2 rounded-2xl text-white ml-5 top-16  mt-5 font-semibold self-center bg-orange-500'
                    onClick={() => dispatch(deleteContact(id))}
            >Delete
            </button>
        </li>
    );
};
export default Contact