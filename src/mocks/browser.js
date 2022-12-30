import { setupWorker, rest } from 'msw'
import fakeResponse from './processo-seletivo-front.json'

const dummyToken = "123dummytoken321"

const dummyAuth = (user, password) => {
    const users = ['Felipe'];
    const passwords = ['@n?i>c@e?p>lanet12'];

    console.log(user + " p " + password)
  
    const userIndex = users.findIndex((el) => el === user);
    if(userIndex !== -1) {
      if(passwords[userIndex] === password) return true;
    }
    return false;
}

const getAtributesById = (objProperty,searchProp,searchId) => {
    const atributeArray = []
    for (const keys in fakeResponse[objProperty]) {
        if(fakeResponse[objProperty][keys][searchProp] == searchId){
            atributeArray.push(fakeResponse[objProperty][keys])
        }
    }
    if(atributeArray.length > 0) return atributeArray
}

const getMonitoramentoById = (id) => {
    if(id) return getAtributesById("monitoramentos","idMonitoramento",id)
}

const getPropriedadeById = (id) => {
    if(id) return getAtributesById("propriedades","idPropriedade",id)[0]
}

const getProdutorById = (id) => {
    if(id) return getAtributesById("produtores","idprodutor",id)[0]
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
    rest.get("monitoramentos", (req,res,ctx) => {
        if("Bearer " + dummyToken !== req.headers.get('Authorization')) return res(ctx.status(401))
        return res(ctx.json(getAllMonitoramentos()))
    }),
    rest.get("monitoramento/:id", (req,res,ctx) => {
        if("Bearer " + dummyToken !== req.headers.get('Authorization')) return res(ctx.status(401))
        const { id } = req.params
        const monitoramento = getMonitoramentoById(id)
        if (monitoramento){
            return res(ctx.json(monitoramento))
        } 
            return res(ctx.status(404))
    }),
    rest.get("propriedades", (req,res,ctx) => {
        if("Bearer " + dummyToken !== req.headers.get('Authorization')) return res(ctx.status(401))
        return res(ctx.json(getAllPropriedades()))
    }),
    rest.get("propriedade", (req,res,ctx) => {
        if("Bearer " + dummyToken !== req.headers.get('Authorization')) return res(ctx.status(401))
        const propriedade = getPropriedadeById(req.url.searchParams.get("id"))
        if (propriedade){
            return res(ctx.json(propriedade))
        } else {
            return res(ctx.status(404))
        }
    }),
    rest.get("produtores", (req,res,ctx) => {
        if("Bearer " + dummyToken !== req.headers.get('Authorization')) return res(ctx.status(401))
        return res(ctx.json(getAllProdutores()))
    }),
    rest.get("produtor/:id", (req,res,ctx) => {
        if("Bearer " + dummyToken !== req.headers.get('Authorization')) return res(ctx.status(401))
        const { id } = req.params
        
        let produtor = getProdutorById(id)

        if (produtor){
            const vinculo = getAtributesById("vinculo","idProdutor",id)
            if(vinculo){
                produtor = {vinculos: vinculo, ...produtor}
                
                const propriedades = []
                
                vinculo.forEach(element => {
                    let entry = getPropriedadeById(element.idPropriedade)
                    if(entry){
                        const monitoramento = getAtributesById("monitoramentos","idVinculo",element.idVinculo)
                        if(monitoramento){
                            entry = {monitoramentos: monitoramento, ...entry}
                        }
                        propriedades.push(entry)
                    }
                })

                if(propriedades.length > 0){
                    produtor = {propriedades,...produtor}
                }
            }
            return res(ctx.json(produtor))
        } 
        return res(ctx.status(404))
    }),
    rest.post("login", (req,res,ctx) => {
        return (req.json().then((postData)=>{
            if(dummyAuth(postData.userName,postData.password)){
                return res(ctx.json({userName:postData.userName, token:dummyToken}))
            }else{
                return res(ctx.status(401))
            }
        }).catch(()=>res(ctx.status(500))))
    })
]

export const worker = setupWorker(...handlers)