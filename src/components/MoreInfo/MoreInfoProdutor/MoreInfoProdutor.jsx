import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Spinner from "../../Spinner/Spinner";
import styles from "./more-info-produtor.module.css";
import MoreInfoPropriedade from "../MoreInfoPropriedade/MoreInfoPropriedade";
import ProdutorHeader from "./ProdutorHeader";

const MoreInfoProdutor = ({ produtorObj }) => {
    const [produtor, setProdutor] = useState();

    useEffect(() => {
        produtorObj.then((data) => setProdutor(data));
    }, []);

    if (produtor) {
        return (
            <>
                <ProdutorHeader produtor={produtor} />
                <div className={produtor.propriedades ?
                    styles.propriedadesContainer :
                    styles.hidden }>
                    <h4>Propriedades:</h4>
                    {produtor.propriedades?.map((propriedade) => (
                        <div
                            key={propriedade.idPropriedade}
                            className={styles.propriedadesContainer}
                        >
                            <MoreInfoPropriedade propriedadeObj={propriedade} />
                        </div>
                    ))}
                </div>
            </>
        )
    }

    return <Spinner />;
};

MoreInfoProdutor.propTypes = {
    produtorObj: PropTypes.object,
};

export default MoreInfoProdutor;
