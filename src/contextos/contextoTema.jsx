import React, { useState } from "react";

//creamos contexto = estado globla
const ContextoTema = React.createContext();

const ProveedorTema = ({ children }) => {
  const [tema, cambiarTema] = useState({
    alineado: "left",
    fuente: 20,
  });

  const aumentarFuente = () => {
    cambiarTema({ ...tema, fuente: tema.fuente + 1 });
  };
  const disminuirFuente = () => {
    cambiarTema({ ...tema, fuente: tema.fuente - 1 });
  };

  const alinearIzquierda = () => {
    cambiarTema({ ...tema, alineado: "left" });
  };
  const alinearDerecha = () => {
    cambiarTema({ ...tema, alineado: "right" });
  };
  const alinearCentro = () => {
    cambiarTema({ ...tema, alineado: "center" });
  };

  return (
    <ContextoTema.Provider
      value={{
        tema,
        aumentarFuente,
        disminuirFuente,
        alinearIzquierda,
        alinearDerecha,
        alinearCentro,
      }}
    >
      {/* en el value siempre se debe pasar un objeto */}

      {children}
    </ContextoTema.Provider>
  );
};
export { ContextoTema, ProveedorTema };

//cuando usamos context API no se exporta por default
// se exporta los componentes que queremos que sean globales
