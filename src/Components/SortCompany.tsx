import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { sortCompanies } from './CompaniesSlice';

const SortCompany = () => {
    const dispatch = useDispatch();

    const handleOptiononChange = (event: ChangeEvent<HTMLSelectElement>) =>{
        dispatch(sortCompanies(event.target.value)); 
    };

    return (
        <div>
            <label htmlFor="sort">Sort by:</label>
            <select name="sort" id="sort" onChange={handleOptiononChange}>
                <option value='id' defaultValue='id' >id</option>
                <option value='login'>login</option>
            </select>
        </div>
    );
};

export default SortCompany