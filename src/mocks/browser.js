import { setupWorker, rest } from 'msw'
import fakeResponse from './processo-seletivo-front.json'

const dummyAuth = (user, password) => {
    const users = ['Felipe'];
    const passwords = ['|nqi{cezpnlya|net12'];
  
    const userIndex = users.findIndex((el) => el === user);
    if(userIndex !== -1) {
      if(passwords[userIndex] === password) return true;
    }
    return false;
}

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
    
const getAllMonitoramentos = () => {
    return fakeResponse.monitoramentos
}

const getAllPropriedades = () => {
    return fakeResponse.propriedades
}

const getAllProdutores = () => {
    return fakeResponse.produtores
}
    
                    
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
    rest.post("login", (req,res,ctx) => {
        return (req.json().then((postData)=>{
            if(dummyAuth(postData.userName,postData.password)){
                return res(ctx.json({userName:postData.userName, token:"123dummytoken321"}))
            }else{
                return res(ctx.status(401))
            }
        }).catch(()=>res(ctx.status(500))))
    })
]

export const worker = setupWorker(...handlers)