import { useParams } from "react-router-dom"
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchCompany } from "./CompaniesSlice";
import { RootState, companiesDispatch } from "../types";

const SingleCompany = () => {

    const {id} = useParams();
    const dispatch: companiesDispatch = useDispatch();

    const { SingleCompany, isLoading, error } = useSelector(
        (state: RootState) => state.companiesR);

    useEffect(()=>{
       if(id) dispatch(fetchCompany(Number(id)));
    },[dispatch, id]);

    if (isLoading) {
        return <p>Loading the data...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

     return (
        <div>{SingleCompany && (
            <article>
                <img src={SingleCompany.avatar_url} alt={SingleCompany.login}/>
                <p>{SingleCompany.login}</p>
                <p>{SingleCompany.description}</p>
                <p>{SingleCompany.issues_url}</p>
                <p>{SingleCompany.repos_url}</p>
            </article>
            )}
        </div>
  )
}

export default SingleCompany