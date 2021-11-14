
import  {useState} from 'react'
import "../styles/Menu.css"
import {toast} from 'react-toastify'

export default function Links(props) {

    const [values, setValues] = useState({
        url:'',
        name:'',
        desc:'',
    })    

    const handleSubmit = e => {
        e.preventDefault();
        props.addOrEditLink(values);
    }

    const prueba = e => {
      
      const {name,value,id} = e.target;
  
      setValues({...values, url:value, name:name, desc:id,})
      toast('Se agrego a la lista',{
        type:'success',
        autoClose: 2000,
     
      })
    }
    


    return (
        <form onSubmit={handleSubmit} className="cont">
          <div className="menu">
          <div id="header">
			<ul className="nav">
				<li> 
            <div className="comidaTipo" >
                <i className="fas fa-hamburger"></i>
                <h1>Sopas</h1>
            </div>
					<ul className="children">
						<li><button
            onClick={prueba} 
            name="Caldo" 
            value="soyunvalue" 
            id="10" 
            >
              <i className="far fa-times-circle"></i>
              Caldo</button></li>
						<li><button
            className="ultimo"
            onClick={prueba} 
            name="Sopa" 
            value="soyunvalue" 
            id="6"
            >
              <i className="far fa-times-circle"></i>
              Sopa</button></li>
						
					</ul>
				</li>

        <li> <div className="comidaTipo" >
        <i className="fas fa-glass-cheers"></i>
          <h1>Bebida</h1>
        </div>
					<ul className="children">
						<li ><button
            onClick={prueba} 
            name="Cerveza Negra" 
            value="soyunvalue" 
            id="15"
            >
              <i className="far fa-times-circle"></i>
              Negra</button></li>

						<li><button
            onClick={prueba} 
            name="Huari" 
            value="soyunvalue" 
            id="17"
            >
              <i className="far fa-times-circle"></i>
              Huari</button></li>

              <li><button
            onClick={prueba} 
            name="Huari" 
            value="soyunvalue" 
            id="16"
            >
              <i className="far fa-times-circle"></i>
              Paceña</button></li>

            <li><button
            onClick={prueba} 
            name="Taquiña" 
            value="soyunvalue" 
            id="12"
            >
              <i className="far fa-times-circle"></i>
              Taquiña</button></li>

            <li><button
            onClick={prueba} 
            name="CocaCola 3lts" 
            value="soyunvalue" 
            id="15"
            >
              <i className="far fa-times-circle"></i>
              Cocacola 3</button></li>

            <li><button
            onClick={prueba} 
            name="CocaCola 2lts" 
            value="soyunvalue" 
            id="12"
            >
              <i className="far fa-times-circle"></i>
              Cocacola 2</button></li>
						
            <li><button
            onClick={prueba} 
            name="Simba" 
            value="soyunvalue" 
            id="10"
            >
              <i className="far fa-times-circle"></i>
              Simba</button></li>

            <li><button
            onClick={prueba} 
            name="Agua" 
            value="soyunvalue" 
            id="8"
            >
              <i className="far fa-times-circle"></i>
              Agua</button></li>

            <li><button
            onClick={prueba} 
            name="Popular" 
            value="soyunvalue" 
            id="5"
            >
              <i className="far fa-times-circle"></i>
              Popular</button></li>

            <li>
              <button   
            onClick={prueba} 
            name="Mini" 
            value="soyunvalue" 
            id="2"
            >
              <i className="far fa-times-circle"></i>
              Mini</button></li>

            <li><button   
            onClick={prueba} 
            name="Chicha Mani" 
            value="soyunvalue" 
            id="7"
            >
              <i className="far fa-times-circle"></i>
              Chicha Mani</button></li>
            
            <li><button   
            onClick={prueba} 
            name="Chica Normal" 
            value="soyunvalue" 
            id="6"
            >
              <i className="far fa-times-circle"></i>
              Chicha Normal</button></li>

            <li><button
            className="ultimo"
            onClick={prueba} 
            name="Del Valle" 
            value="soyunvalue" 
            id="10"
            >
              <i className="far fa-times-circle"></i>
              Del Valle</button></li>

            

					</ul>
				</li>
        <li> <div className="comidaTipo" >
        <i className="fas fa-utensils"></i>
          <h1>Segundos</h1>
          
        </div>
					<ul className="children">
						<li><button
            onClick={prueba} 
            name="Silpancho" 
            value="soyunvalue" 
            id="10" 
            >
              <i className="far fa-times-circle"></i>
              Silpancho</button></li>

            <li><button
            onClick={prueba} 
            name="Asado" 
            value="soyunvalue" 
            id="15" 
            >
              <i className="far fa-times-circle"></i>
              Asado</button></li>

            <li><button
            onClick={prueba} 
            name="Pique" 
            value="soyunvalue" 
            id="25" 
            >
              <i className="far fa-times-circle"></i>
              Pique</button></li>

            <li><button
            className="ultimo"
            onClick={prueba} 
            name="Pollo Dorado" 
            value="soyunvalue" 
            id="10" 
            >
              <i className="far fa-times-circle"></i>
              Pollo Dorado</button></li>

						
						
					</ul>
				</li>
				
				
			</ul>
		</div>
          </div>
          
        </form>
    )
}
