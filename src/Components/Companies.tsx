import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './CompaniesSlice';
import { RootState } from '../store';
import { AppDispatch } from '../store'; 

const Companies = () => {
    const { data, isLoading, error } = useSelector((state: RootState) => state.companiesR);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (isLoading) {
        return <p>Loading the data...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    console.log(data);
    return (
        <div>
            <h2>companies</h2>
            {data.length > 0 &&
                data.map((company: any) => {
                    return (
                        <div key={company.id}>
                            <h2>{company.id}</h2>
                        </div>
                    );
                })}
        </div>
    );
};

export default Companies;
