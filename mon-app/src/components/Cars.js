// eslint-disable-next-line no-unused-vars
import React from 'react';//j'importe le react en premier , on aura pas besoin de {component} car on aura pas besoin de extends car c une fonction et pas une class
const Car =({children, color}) => {//je crée une variable (const dans le nouveau langage ES6) et je retourne du jsx aveccma div parent et deux p children
const colorInfo = color ? (<p>Couleur:{color} </p>) : (<p>Néant</p>)//à l'intérrieur de ma const colorInfo j'ai placé une fonction térnaire si je n'ai pas de couleur elle affiche Neant et je place le nom de ma {const} à l'intérrieur de jsx

if(children){
    return(
        <div className="cars" style={{backgroundColor:"pink",
                                        width:"400px",
                                        padding:"10px",
                                        margin:"5px auto",
                                        }}>
            <p>Marque:{children} </p>
             {colorInfo}
        </div>
           )

}else{
    return(
            <div className="cars" style={{backgroundColor:"pink",
                                        width:"400px",
                                        padding:"10px",
                                        margin:"5px auto",
                                        }}>
            <p>pas de data !</p>
            
            </div>
        )
}//j'ai mis une autre condition if else si la marque n'existe pas elle affiche pas de data
//j'ai passé une propriété a ma fonction (props) qui m'aide a afficher ce que j'ai écrit dans les balises <Car/> dans le fichier Mycars.js,j'écrit du javascript à l'intérrieur du JSX en mettant le js à l'intérrieur de {}, j'ai chnagé le paramétre props dans la fonction au nom {children, color}
}//j'ai appliqué du style directement dans la div, de préférence l'utiliser dans le fichier css
export default Car//je dois exporter ma fonction
