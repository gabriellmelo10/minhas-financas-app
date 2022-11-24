import ApiService from "../apiservice";

export default class LancamentoService extends ApiService {
    
    constructor(){
        super('/api/lancamentos')
    }

    obterListaMeses(){
        return [
            { label: 'Selecione...', value: ''},
            { label: 'Janeiro', value: 1 },
            { label: 'Fevereiro', value: 2 },
            { label: 'Março', value: 3 },
            { label: 'Abril', value: 4 },
            { label: 'Maio', value: 5 },
            { label: 'Junho', value: 6 },
            { label: 'Julho', value: 7 },
            { label: 'Agosto', value: 8 },
            { label: 'Setembro', value: 9 },
            { label: 'Outubro', value: 10 },
            { label: 'Novembro', value: 11 },
            { label: 'Dezembro', value: 12 },
        ]
    }

    obterListaTipo(){
        return [
            { label: 'Selecione...', value: '' },
            { label: 'Despesa', value: 'DESPESA' },
            { label: 'Receita', value: 'RECEITA' }
        ]
    }

    salvar(Lancamento){
        return this.post('/', Lancamento);
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

        if(lancamnetoFiltro.descricao){
            params = `${params}&descricao=${lancamnetoFiltro.descricao}`
        }
        
        return this.get(params)
    }

    deletar(id){
        return this.delete(`/${id}`)
    }
}