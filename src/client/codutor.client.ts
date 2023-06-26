import axios, { AxiosInstance } from "axios";
import { Condutor } from "@/model/condutor";

export class CondutorClient{

    private axiosCondutor : AxiosInstance;

    constructor(){
        this.axiosCondutor =axios.create({
            baseURL:"http://localhost:8080/api/condutor",
            headers:{"Content-Type" : "application/JSON"}
        })
    }
    public async findById(id:number) : Promise<Condutor>{
        try{
            return(await this.axiosCondutor.get<Condutor>(`/$(id)`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listarAll():Promise<Condutor[]>{
        try{
            return(await this.axiosCondutor.get<Condutor[]>(`/lista`)).data
        }catch(error:any){
            return Promise.reject(error.response); 
        }
    }
    public async findByAtivo() : Promise<Condutor[]> {
        try {
            return (await this.axiosCondutor.get<Condutor[]>(`/ativo`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }
    public async cadastrar(): Promise<void>{
        try{
            return(await this.axiosCondutor.post(`/`, Condutor)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }
    public async editar(): Promise<void>{
        try{
            return (await this.axiosCondutor.put(`/`, Condutor)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }
    public async deletar(condutor:Condutor): Promise<string>{
        try{
            return(await this.axiosCondutor.delete(`/$(id)`)).data
        }catch(error:any) {
            return Promise.reject(error.response);
        }
    }
}

