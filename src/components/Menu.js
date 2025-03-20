import React from "react";
import recipes from "../recipes";
import Swal from "sweetalert2";

const Menu = () => {
  //   console.log(recipes[0]);
  const handleOrder = (id) => {
    console.log(id);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¿Quieres confirmar el pedido?",
        text: "¡No podrás revertir esta acción!",
        icon: "warning",
        showCancelButton: false,
        confirmButtonText: "Sí, pedir ahora",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "¡Pedido confirmado!",
            "Tu pedido ha sido registrado con éxito.",
            "success"
          );
        }
      });
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>¡Especiales de esta semana!</h2>
        <button>Ver menú en línea</button>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>${recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>
                Pedir ahora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
