import {ILoginRequest, ILoginResponce} from "./types";
import {axiosInstance} from "../instance";
import Endpoints from "../endpoints";
import {AxiosPromise} from "axios";


export const login=(params:ILoginRequest):AxiosPromise<ILoginResponce>=>
        axiosInstance.post(Endpoints.AUTH.LOGIN,params)

export const logout=():AxiosPromise=>{
    return axiosInstance.get(Endpoints.AUTH.LOGOUT)
}

export const getProfile = (): AxiosPromise<string> => axiosInstance.get(Endpoints.AUTH.PROFILE)