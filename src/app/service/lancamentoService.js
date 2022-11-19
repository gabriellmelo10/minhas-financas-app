import ApiService from "../apiservice";

export default class LancamentoService extends ApiService {
    
    constructor(){
        super('/api/lancamentos')
    }

    consultar(lancamnetoFiltro){
        let params = `?ano=${lancamnetoFiltro.ano}`

        if(lancamnetoFiltro.mes){
            params = `${params}&mes=${lancamnetoFiltro.mes}`
        }

        if(lancamnetoFiltro.tipo){
            params = `${params}&tipo=${lancamnetoFiltro.tipo}`
        }
        
        if(lancamnetoFiltro.status){
            params = `${params}&status=${lancamnetoFiltro.status}`
        }

        if(lancamnetoFiltro.usuario){
            params = `${params}&usuario=${lancamnetoFiltro.usuario}`
        }
        
        return this.get(params)
    }
}