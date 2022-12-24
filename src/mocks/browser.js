import { setupWorker, rest } from 'msw'
import jsonResponse from './processo-seletivo-front.json'
export const worker = setupWorker(...handlers)

const fakeResponse = JSON.parse(jsonResponse)


const handlers = [
    rest.get("/api/v1/monitoramentos", (_,res,ctx) => {
        res(ctx.json(getAllMonitoramentos()))
    }),
    rest.get("/api/v1/monitoramento", (req,res,ctx) => {
        const monitoramento = getMonitoramentoById(req.url.searchParams.get("id"))
        if (monitoramento){
            res(ctx.json(monitoramento))
        } else {
            res(ctx.status(404))
        }
    }),
    rest.get("/api/v1/propriedades", (_,res,ctx) => {
        res(ctx.json(getAllPropriedades()))
    }),
    rest.get("/api/v1/propriedade", (req,res,ctx) => {
        const propriedade = getPropriedadeById(req.url.searchParams.get("id"))
        if (propriedade){
            res(ctx.json(propriedade))
        } else {
            res(ctx.status(404))
        }
    }),
    rest.get("/api/v1/produtores", (_,res,ctx) => {
        res(ctx.json(getAllProdutores()))
    }),
    rest.get("/api/v1/produtor", (req,res,ctx) => {
        const produtor = getProdutorById(req.url.searchParams.get("id"))
        if (produtor){
            res(ctx.json(produtor))
        } else {
            res(ctx.status(404))
        }
    }),
]

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

