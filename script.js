document.onload;

let mercurio="Mercurio es el planeta del sistema solar más cercano al Sol y el más pequeño. Forma parte de los denominados planetas interiores y carece de satélites naturales al igual que Venus. Se conocía muy poco sobre su superficie hasta que fue enviada la sonda planetaria Mariner 10 y se hicieron observaciones con radar y radiotelescopios. Posteriormente fue estudiado por la sonda MESSENGER de la NASA y actualmente la astronave de la Agencia Europea del Espacio (ESA) denominada BepiColombo, lanzada en octubre de 2018, se halla en vuelo rumbo a Mercurio a donde llegará en 2025 y se espera que aporte nuevos conocimientos sobre el origen y composición del planeta, así como de su geología y campo magnético.";
let venus="Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte. Al igual que Mercurio, carece de satélites naturales. Recibe su nombre en honor a Venus, la diosa romana del amor (gr. Afrodita). Al ser el segundo objeto natural más brillante después de la Luna, puede ser visto en un cielo nocturno despejado a simple vista. Se trata de un planeta interior de tipo rocoso y terrestre, llamado con frecuencia el planeta hermano de la Tierra, ya que ambos son similares en cuanto a tamaño, masa y composición, aunque totalmente diferentes en cuestiones térmicas y atmosféricas (la temperatura media de Venus es de 463,85 ºC). Su órbita es una elipse con una excentricidad de menos del 1%, formando la órbita más circular de todos los planetas; apenas supera la de Neptuno. Su presión atmosférica es 90 veces superior a la terrestre; es, por lo tanto, la mayor presión atmosférica de todos los planetas rocosos del sistema solar. Es de color blanco/amarillento por su atmósfera compuesta mayoritariamente por dióxido de carbono (CO2), ácido sulfhídrico (H2S)]y nitrógeno(N2).";
let tierra="La Tierra es el tercer planeta del Sistema Solar (contando en orden de distancia de los ocho planetas al Sol), y el cuarto de ellos de menor a mayor. Está situada a unos 150 millones de kilómetros del Sol. Es el único planeta en el que hasta ahora se conoce la existencia de vida. La Tierra se formó al mismo tiempo que el Sol y el resto del Sistema Solar, hace unos 4570 millones de años. El volumen de la Tierra es más de un millón de veces menor que el Sol y la masa de la Tierra es nueve veces mayor que la de su satélite, la Luna. La temperatura media de la superficie terrestre es de unos 15 °C.";
let marte="Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio. Recibió su nombre en homenaje al dios de la guerra de la mitología romana (Ares en la mitología griega), y también es conocido como «el planeta rojo»3​4​ debido a la apariencia rojiza5​ que le confiere el óxido de hierro predominante en su superficie. Marte es el planeta interior más alejado del Sol. Es un planeta telúrico con una atmósfera delgada de dióxido de carbono, y tiene dos satélites pequeños y de forma irregular, Fobos y Deimos (hijos del dios griego), que podrían ser asteroides capturados6​7​ similares al asteroide troyano (5261) Eureka. Sus características superficiales recuerdan tanto a los cráteres de la Luna como a los valles, desiertos y casquetes polares de la Tierra.";
let jupiter="Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol.3​ Es un gigante gaseoso que forma parte de los denominados planetas exteriores. Recibe su nombre del dios romano Júpiter (Zeus en la mitología griega). Es uno de los objetos naturales más brillantes en un cielo nocturno despejado, superado solo por la Luna, Venus y algunas veces Marte.";
/*
let textos=document.getElementsByClassName("textos");
textos[0].innerHTML=mercurio;
textos[1].innerHTML=venus;
textos[2].innerHTML=tierra;
textos[3].innerHTML=marte;
textos[4].innerHTML=jupiter;
*/

let botones =document.getElementsByClassName("boton");
let planetas=document.getElementsByClassName("planetas");
let body=document.getElementsByTagName("body");
console.log(botones);
console.log(planetas);
console.log(body);

let x=0;
let y=0;
console.clear();
console.log(x);
console.log(y);
botones[0].onclick=()=>{	x++;
console.clear();
console.log('X: ',x);
console.log('Y: ',y);
if(x==3){x=1;}
if(x==1)	{	planetas[0].style.transform="translateX(12em)translateY(12em)";
				planetas[0].style.zIndex="7";}
else if(x==2){	planetas[0].style.transform="translateX(0em)translateY(0em)";
				planetas[0].style.zIndex="1";}console.log(x);
}



botones[1].onclick=()=>{	x++;
if(x==3){x=1;}
if(x==1)	{	planetas[1].style.transform="translateX(10em)translateY(10em)";
				planetas[1].style.borderRadius="2em";
				planetas[1].style.zIndex="7";}
else if(x==2){	planetas[1].style.transform="translateX(0em)translateY(0em)";
				planetas[1].style.borderRadius="0em";
				planetas[1].style.zIndex="2";}
}




botones[2].onclick=()=>{	x++;
if(x==3){x=1;}
if(x==1)	{	planetas[2].style.transform="translateX( 8em)translateY( 8em)";
				planetas[2].style.backgroundColor="blue";
				planetas[2].style.zIndex="7";}
else if(x==2){	planetas[2].style.transform="translateX(0em)translateY(0em)";
				planetas[2].style.backgroundColor="red";
				planetas[2].style.zIndex="3";}
}


botones[3].onclick=()=>{	x++;
if(x==3){x=1;}
if(x==1)	{	planetas[3].style.transform="translateX( 6em)translateY( 6em)rotate(360deg)";
				planetas[3].style.zIndex="7";}
else if(x==2){	planetas[3].style.transform="translateX(0em)translateY(0em)rotate(0deg)";
				planetas[3].style.zIndex="4";}
}


botones[4].onclick=()=>{	x++;
if(x==3){x=1;}
if(x==1)	{	planetas[4].style.transform="translateX( 4em)translateY( 4em)rotateX(180deg)rotateY(180deg)";
				planetas[4].style.zIndex="7";}
else if(x==2){	planetas[4].style.transform="translateX(0em)translateY(0em)";
				planetas[4].style.zIndex="5";}
}


botones[5].onclick=()=>{	x++;
//planetas[5].style.transitionDuration="0.5s";
if(x==3){x=1;}
if(x==1)	{	planetas[5].style.transform="translateX( 2em)translateY( 2em)";
//				planetas[5].style.transitionDuration="2s";
				planetas[5].style.backgroundImage="url(mercurio.jpg)";
				planetas[5].style.zIndex="7";}
else if(x==2){	planetas[5].style.transform="translateX(0em)translateY(0em)";
//				planetas[5].style.transitionDuration="2s";
				planetas[5].style.backgroundImage="url('venus.jpg')";
				planetas[5].style.zIndex="6";}
}


botones[6].onclick=()=>{	y++;
if(y==3){y=1;}
console.clear();
console.log('X: ',x);
console.log('Y: ',y);
if(y==1)	{//	body[0].style.transform="translateX( 2em)translateY( 2em)";
//				body[0].style.transitionDuration="2s";
				body[0].style.backgroundImage="url(mercurio.jpg)";
				body[0].style.zIndex="7";}
else if(y==2){//body[0].style.transform="translateX(0em)translateY(0em)";
//				body[0].style.transitionDuration="2s";
				body[0].style.backgroundImage="url('tierra.jpg')";
				body[0].style.zIndex="6";}
}
