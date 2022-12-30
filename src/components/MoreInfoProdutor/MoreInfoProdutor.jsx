import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import MoreInfoMonitoramento from '../MoreInfoMonitoramento/MoreInfoMonitoramento';

const MoreInfoProdutor = ({produtorObj}) => {
    const [produtor,setProdutor] = useState()
    
    useEffect(()=>{produtorObj.then(data=>setProdutor(data))},[])
    
    if(produtor){
        console.log(produtor)
    return (
        <>
        <div>
            Codigo: {produtor.idprodutor}
            Nome: {produtor.nomeProdutor}
            CPF: {produtor.cpfProdutor}
        </div>
        <div>
            <h3>Propriedades:</h3>
            {produtor.propriedades?.map(prop=>{
                let monitorMap
                if(prop?.monitoramentos?.length > 0){
                    monitorMap = prop.monitoramentos.map(mon=>{
                        return <div key={mon.idMonitoramento}><MoreInfoMonitoramento monitoramentoObj={mon} /></div>
                        
                    })
                }
                return (
                <div key={prop.idPropriedade}>
                    Codigo: {prop.idPropriedade}
                    Nome: {prop.nomePropriedade}
                    Cadastro Rural: {prop.numeroCadastroRural}
                    Tipo: {prop.tipoPropriedade}
                    {monitorMap && <h3>Monitoramento{monitorMap}</h3>} 
                </div>)
            })}
        </div>
        </>
    )}
  
    return <Spinner />
}

MoreInfoProdutor.propTypes = {
    produtorObj: PropTypes.object
}

export default MoreInfoProdutor