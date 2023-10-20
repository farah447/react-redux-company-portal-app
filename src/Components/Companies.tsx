import React, { useEffect, ChangeEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, searchCompany, sortCompanies } from './CompaniesSlice';
import { RootState, companiesDispatch } from '../types';
import SortCompany from "./SortCompany";
import { Link } from "react-router-dom";


const Companies = () => {
    const { companies, isLoading, error, searchTerm } = useSelector((state: RootState) => state.companiesR);
    const dispatch: companiesDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (isLoading) {
        return <p>Loading the data...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    const handleSearch = (event: ChangeEvent<HTMLInputElement>)=>{
        dispatch(searchCompany(Number(event.target.value)));
    };

    const filteredCompanies = searchTerm? 
    //search by id:
        companies.filter((company) => company.id === searchTerm): companies;
    //search by login:
    //? companies.filter((company)=>
       // company.login.toLowerCase().includes(searchTerm.toLowerCase())
    //) : companies;


    return (
        <div>
            <div className='actions'>
                <h2>Companies App</h2>
                <input type='text' placeholder='search by company id' value={searchTerm} onChange={handleSearch}/>
                <SortCompany/>
            </div>
            <section className='companies'>
                {filteredCompanies.length > 0 &&
                    filteredCompanies.map((company) => {
                        const { id, avatar_url, login, description } = company;
                        return (
                            <article key={id} className='company'>
                                <img src={avatar_url} alt={login} />
                                <h2>{id}</h2>
                                <p>{login}</p>
                                <p>{description}</p>
                                <Link to={`/Companies/${id}`}>
                                    <button>show more</button> 
                                </Link> 
                            </article>
                        );
                    })}
            </section>
        </div>
    );
};

export default Companies;
