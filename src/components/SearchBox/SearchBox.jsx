import {useDispatch, useSelector} from "react-redux";
import {changeFilter} from "@/store/filterSlice.js";
import {
    filteredContacts,
    selectFilter
} from "@/store/actions.js";

const SearchBox = () => {
    const filter = useSelector(selectFilter)
    const dispatch = useDispatch();
    const handleChangeInput = (e) => {
        dispatch(changeFilter(e.target.value));

    }
    return (
        <div className='__container mx-auto w-1/2'>
            <p className='mt-20 text-white text-xl font-semibold'>Filter</p>
            <input type='text'
                   value={filter.name}
                   onChange={handleChangeInput}
                   className='bg-transparent border-b text-white mt-5 border-solid border-white focus:outline-none text-xl pl-2 pb-2'
            />
        </div>
    );
};
export default SearchBox