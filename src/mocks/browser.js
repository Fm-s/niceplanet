import { setupWorker, rest } from 'msw'
import fakeResponse from './processo-seletivo-front.json'

const getAtributeById = (objProperty,searchProp,searchId) => {
    for (const keys in fakeResponse[objProperty]) {
        if(fakeResponse[keys][searchProp] == searchId){
            return {key: keys, ... fakeResponse[keys]}
        }
    }
    return null
}

const getMonitoramentoById = (id) => {
    return getAtributeById("monitoramentos","idMonitoramento",id)
}

const getPropriedadeById = (id) => {
    return getAtributeById("propriedades","idPropriedade",id)
}

const getProdutorById = (id) => {
    return getAtributeById("produtores","idprodutor",id)
}

// const getVinculoById = (id) => {
    //     return getAtributeById("vinculo","idVinculo",id)
    // }
    
    const getAllMonitoramentos = () => {
        return fakeResponse.monitoramentos
    }
    
    const getAllPropriedades = () => {
        return fakeResponse.propriedades
    }
    
    const getAllProdutores = () => {
        return fakeResponse.produtores
    }
    
    // const getProdutorByIdVinculo = (id) => {
        //     for (const keys in fakeResponse.vinculo){
            //         if (fakeResponse[keys].idVinculo == id){
                //             return { idPropiedade: keys,
                //                 tipoVinculoProdutor:fakeResponse[keys].tipoVinculoProdutor,
                //                 ...getProdutorById(fakeResponse[keys].idProdutor)}
                //         }
                //     }
                // }
                
                
                
                
                
                // const main = () => {
                    //     //monitoramentos - idMonitoramento | idVinculo
                    //     //propriedades - idPropriedade
                    //     //produtores - idprodutor
                    //     //vinculo - vinculo - idProdutor - chave
                    //     console.log(getAtributeById("monitoramentos","idMonitoramento",1))
                    // }
                    
                    
const handlers = [
    rest.get("monitoramentos", (_,res,ctx) => {
        return res(ctx.json(getAllMonitoramentos()))
    }),
    rest.get("monitoramento/:id", (req,res,ctx) => {
        const { id } = req.params
        const monitoramento = getMonitoramentoById(id)
        if (monitoramento){
            return res(ctx.json(monitoramento))
        } else {
            return res(ctx.status(404))
        }
    }),
    rest.get("propriedades", (_,res,ctx) => {
        return res(ctx.json(getAllPropriedades()))
    }),
    rest.get("propriedade", (req,res,ctx) => {
        const propriedade = getPropriedadeById(req.url.searchParams.get("id"))
        if (propriedade){
            return res(ctx.json(propriedade))
        } else {
            return res(ctx.status(404))
        }
    }),
    rest.get("produtores", (_,res,ctx) => {
        return res(ctx.json(getAllProdutores()))
    }),
    rest.get("produtor", (req,res,ctx) => {
        const produtor = getProdutorById(req.url.searchParams.get("id"))
        if (produtor){
            return res(ctx.json(produtor))
        } else {
            return res(ctx.status(404))
        }
    }),
]

export const worker = setupWorker(...handlers)