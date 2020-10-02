import React,{Component} from 'react'

class LogoutButton extends Component{
    render(){
        return<button>Iniciar Sesion</button>
    }
}

class LoginButton extends Component{
    render(){
        return(
            <div>
            <p>Bienvenido al sistema</p>
            <button>Cerrar Sesion</button>
        </div>
        )
      
    }
}




export default class ConditionalSection extends Component{

    constructor(){
        super( )
        this.state ={isUserLogget: false}
    }
   render(){
       const numeros =[1,2,3,4,5]
       
       return(
           <div>
               <h4>Trabajando Listas</h4>
            {numeros.map((numeros,index )=>{
                return<p key={index}>Soy el numero {numeros}</p>
            })}
          </div>
       )
   }
}