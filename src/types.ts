import { ThunkDispatch } from "@reduxjs/toolkit";
import companiesReducer, { fetchCompany, fetchData } from "./Components/CompaniesSlice";

export interface Company {
    login: string;
    id: number;
    node_id: string;
    url: string;
    repos_url: string;
    events_url: string;
    hooks_url: string;
    issues_url: string;
    members_url: string;
    public_members_url: string;
    avatar_url: string;
    description: string | null; 
}

export type companiesState = {
    companies: Company[];
    isLoading: boolean;
    error: string | null;
    searchTerm: number;
    SingleCompany: Company | null
};


export type RootState = {
    companiesR: ReturnType<typeof companiesReducer>;
};

type fetchCompaniesPendingAction = ReturnType <typeof fetchData.pending>;

type fetchCompaniesFulfilledgAction = ReturnType <typeof fetchData.fulfilled>;

type fetchCompaniesRejectedgAction = ReturnType <typeof fetchData.rejected>;

type fetchCompanyPendingAction = ReturnType <typeof fetchCompany.pending>;

type fetchCompanyFulfilledgAction = ReturnType <typeof fetchCompany.fulfilled>;

type fetchCompanyRejectedgAction = ReturnType <typeof fetchCompany.rejected>;


type searchCompanyAction ={
    type: 'companies/searchCompany';
    payload: number
}

type sortCompanyAction ={
    type: 'companies/sortCompanies';
    payload: String
}

export type companiesAction =
    | fetchCompaniesPendingAction 
    | fetchCompaniesFulfilledgAction
    | fetchCompaniesRejectedgAction
    | fetchCompanyPendingAction 
    | fetchCompanyFulfilledgAction
    | fetchCompanyRejectedgAction
    | searchCompanyAction
    | sortCompanyAction;


export type companiesDispatch = ThunkDispatch<RootState, void, companiesAction>;