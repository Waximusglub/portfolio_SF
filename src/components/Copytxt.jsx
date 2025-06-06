import React from 'react';

export default function Copytxt({ textcopyed = '', txtbnt = '', stylesbtn = '', alert = 'Texto copiado al portapapeles', children = null }) {
    const copiar = () => {
        navigator.clipboard.writeText(textcopyed);
        alert(alert);
    };

    return (
        <button className={stylesbtn} onClick={copiar}>
            {txtbnt || children}
        </button>
    );
}
