import { useState, useEffect } from 'react';

const useFiltro = (items, campo) => {
    const [busqueda, setBusqueda] = useState("");
    const [itemsFiltrados, setItemsFiltrados] = useState(items);

    useEffect(() => {
        const filtrados = items.filter((item) =>
            item[campo].toLowerCase().includes(busqueda.toLowerCase())
        );
        setItemsFiltrados(filtrados);
    }, [busqueda, items]);

    return {
        busqueda,
        setBusqueda,
        itemsFiltrados
    };
};

export default useFiltro;
