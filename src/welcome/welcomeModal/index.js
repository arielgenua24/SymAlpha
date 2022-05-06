import React from "react";
import '../index.css'

let localStorageSesion;

let welcomeModal = document.getElementById('welcome')
let divWelcomeContainer = document.getElementsByClassName('div__welcome--container')

function WelcomeModal() {

      localStorageSesion = localStorage.getItem('USER_SESION.VR0.2');
    let parsedSesion;


    const onSubmit = (event) => {
        event.preventDefault();
       //Quizas al namevalue le falta el stringify! USER_SESION.VR0.0
        localStorage.setItem('USER_SESION.VR0.2','x');
        console.log('modal')

        //const welcomeParent = document.getElementById("body")
        //const welcomeDiv = document.getElementById('welcome');
        //welcomeParent.removeChild(welcomeDiv)

        welcomeModal.style.position = "inherit"
        divWelcomeContainer.style.backgroundColor = '#ffffff00'
        divWelcomeContainer.style.background = '#ffffff00'

    }

    const  onSecondSubmit = (event) => {
        event.preventDefault();
        welcomeModal.style.position = "inherit"
       } 



    if(!localStorageSesion){
         //Ventana para que el usaurio se registre
        parsedSesion = []

        return(
            <>
            <div className="div__welcome--container">
                <h3 class="div__h3">
                    Bienvenido!
                </h3>
                <p className="div__p">
                    Aqui podras guardar tus app diarias para abrir todas con <b>1 solo click.</b>
                </p>

                {/*<figure className="Warning-figure"><p>IMPORTANTE</p> 
                    <img alt="Warning-img"></img>
                </figure> */}

                <form
                className="form"
                onSubmit={onSubmit}
                >

                {/*<p className="form__p--input">Antes de comenzar por favor, rellene este campo.</p> 

                    <textarea
                        className="form__p--textarea"
                        value={nameValue}
                        onChange={onChange}
                        placeholder="Nombre"
                    />

                <h3>Elije sobre que te gustaria reaccionar.</h3> */}

                <button
                className="form__button"
                type='submit'
                >
                    Siguiente
                </button>

               </form>


            </div>
                

            </>
        )



    } else {
         //Ariel

        return(
            <>
             <div className="div__welcome--container">
                <h3 class="div__h3">
                    Bienvenido de nuevo!
                </h3>
                <p className="div__p">
                   No hay actualizaciones por ahora!
                </p>

                <form
                className="form"
                onSubmit={onSecondSubmit}>

                <button
                className="form__button"
                type='submit'

                >
                    Siguiente
                </button>

               </form>


             </div>
               

            </>
        )


    }






}

export {WelcomeModal,localStorageSesion}