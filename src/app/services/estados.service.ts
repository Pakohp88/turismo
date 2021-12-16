import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  private estados: Estado[] = [
    {
      nombre: "Aguascalientes",
      descripcion: "Aguascalientes es una ciudad de la zona central de México, conocida por los edificios coloniales españoles de su centro histórico. En la Plaza Patria se ubica la Catedral de Nuestra Señora de la Asunción, con pinturas del siglo XVIII de Miguel Cabrera. El Palacio de Gobierno del siglo XVII es conocido por sus numerosos arcos interiores tallados. El Museo Nacional de la Muerte exhibe arte funerario y artefactos desde la época precolombina hasta la actualidad",
      img: "assets/img/aguascalientes.jpg"
    },
    {
      nombre: "Baja California",
      descripcion: "Baja California es un estado Mexicano en la Península de Baja California que limita con el estado de California de Estados Unidos. El paisaje se extiende por montañas y playas en el océano Pacífico y el golfo de California. Las ciudades cerca de la frontera con Estados Unidos incluyen Tijuana, conocida como un destino comercial y de bohemia, como también la ciudad de Rosarito, con sus amplias playas en el Pacífico",
      img: "assets/img/bajacalifornia.jpg"    
    },
    {
      nombre: "Baja California Sur",
      descripcion: "Baja California Sur, oficialmente llamado Estado Libre y Soberano de Baja California Sur, es uno de los treinta y un estados que junto con la Ciudad de México conforman México.​​ Su capital y ciudad más poblada es La Paz. Está dividido en cinco municipios",
      img: "assets/img/bajacaliforniasur.jpg"
    },    
    {
      nombre: "Campeche",
      descripcion: "Campeche es una ciudad puerto de México, ubicada en el golfo de México. Es conocida por sus edificios coloniales barrocos conservados, la arquitectura militar y el distrito histórico amurallado. En respuesta a los ataques piratas, la ciudad se fortificó en el siglo XVII y 2 fortalezas sobre cerros son museos en la actualidad. El Fuerte de San Miguel alberga el Museo Arqueológico de Campeche, con artefactos de sitios mayas locales, como Edzná, Isla Jaina y Calakmul",
      img: "assets/img/campeche.jpg"
    },
    {
      nombre: "Chiapas",
      descripcion: "Chiapas es un estado del sur de México que limita con Guatemala. Sus zonas montañosas altas y el denso bosque tropical tienen varios sitios arqueológicos mayas y pueblos coloniales españoles. En la ciudad colonial de San Cristóbal de las Casas, el Templo y Ex-Convento Santo Domingo alberga una iglesia barroca y un museo que muestra artefactos regionales. En torno a él, hay un mercado donde se venden artículos, como tejidos coloridos.",
      img: "assets/img/chiapas.jpg"
    },
    {
      nombre: "Chihuahua",
      descripcion: "La ciudad de Chihuahua es la capital del estado de Chihuahua en el noroeste de México. Es conocida por la Catedral de Chihuahua española de estilo barroco y el Palacio de Gobierno del siglo XVIII, un nuevo edificio de gobierno con enormes murales que ilustran eventos históricos importantes de México. La ciudad también alberga el extremo este del ferrocarril Chepe, que recorre los desfiladeros teñidos de verde del área del Cañón del Cobre.",
      img: "assets/img/chihuahua.jpg"
    },
    {
      nombre: "Coahuila de Zaragoza",
      descripcion: "Coahuila, oficialmente llamado Estado Libre y Soberano de Coahuila de Zaragoza, ​ es uno de los treinta y un estados que, junto con la Ciudad de México, forman México.​​ Su capital y ciudad más poblada es Saltillo",
      img: "assets/img/coahuila.jpg"
    },
    {
      nombre: "Ciudad de México",
      descripcion: "Ciudad de México es la densamente poblada capital de México que se encuentra a gran altura. Es famosa por su Templo Mayor (un templo azteca del siglo XIII), la Catedral Metropolitana de México, de estilo barroco, de los conquistadores españoles y el Palacio Nacional, que alberga murales históricos de Diego Rivera. Todos estos hitos se ubican en torno a la Plaza de la Constitución, la enorme plaza principal conocida también como el Zócalo.",
      img: "assets/img/ciudadMexico.jpg"
    },
    {
      nombre: "Colima",
      descripcion: "Colima es la capital del estado mexicano del mismo nombre. Se ubica cerca de la costa del Pacífico central, en un valle al sur del volcán Colima. El Jardín Libertad es su plaza principal y cuenta con un quiosco belga del siglo XIX y el Portal Medellín, un gran edificio con filas de arcos. La Catedral Basílica Menor de Colima tiene una fachada neoclásica. Junto a la catedral está el Palacio de Gobierno.",
      img: "assets/img/colima.jpg"
    },
    {
      nombre: "Durango",
      descripcion: "Durango es la ciudad capital del estado de Durango, en México. Es conocida por su centro histórico, con importantes edificios barrocos mexicanos y coloniales. En 1695 se comenzó a construir la Catedral Basílica adornada, que tiene arte sacro y tallados en madera en su interior. El Museo de la Ciudad 450, en un palacio convertido, tiene exhibiciones que recorren la historia de la ciudad. Bebeleche es un museo moderno con exhibiciones interactivas sobre ciencia y cultura.",
      img: "assets/img/durango.jpg"
    },
    {
      nombre: "Guanajuato",
      descripcion: "Guanajuato es una ciudad central de México. Es conocida por su historia minera de la plata y su arquitectura colonial. Su red de túneles, pasajes y calles estrechas se representa en el Callejón del Beso, llamado así porque los balcones están tan cerca entre ellos que una pareja alcanza a besarse. En un antiguo granero, se encuentra el museo de historia local y arte Alhóndiga de Granaditas, con exhibiciones precolombinas.",
      img: "assets/img/guanajuato.jpg"
    },
    {
      nombre: "Guerrero",
      descripcion: "Guerrero es un estado de México, en la costa del Pacífico. La ciudad-balneario de Acapulco, ubicada en una gran bahía con rascacielos y las montañas de la Sierra Madre del Sur como telón de fondo, es conocida por su energética vida nocturna y las playas a lo largo de la bahía de Acapulco y el área de Acapulco Diamante. En el lugar icónico de La Quebrada, se practican clavados todos los días en una pequeña caleta. El Fuerte de San Diego, sobre un cerro, tiene un museo de historia y mira desde lo alto a la ciudad antigua. ",
      img: "assets/img/guerrero.jpg"
    },
    {
      nombre: "Hidalgo",
      descripcion: "Hidalgo es un estado del centro de México que se extiende al norte de Ciudad de México. La ventosa capital del estado, Pachuca tiene una torre del reloj, edificios coloniales, como la Iglesia barroca de San Francisco, y el Museo de Minería, que explora la historia minera de la región. Al oeste está Tula, un sitio arqueológico con pirámides y grandes columnas de piedra con forma de guerreros que datan del Imperio Tolteca.",
      img: "assets/img/hidalgo.jpg"
    },
    {
      nombre: "Jalisco",
      descripcion: "Jalisco es un estado del oeste de México que bordea el océano Pacífico. El estado es conocido por la música mariachi y el tequila que, según se dice, nacieron aquí. La capital, Guadalajara, tiene plazas coloniales y sitios icónicos, como el Teatro Degollado, de estilo neoclásico, y la majestuosa Catedral de Guadalajara, con sus agujas doradas gemelas. Cerca está el Palacio de Gobierno, que tiene murales del artista mexicano José Clemente Orozco.",
      img: "assets/img/jalisco.jpg"
    },
    {
      nombre: "Estado de México",
      descripcion: "El Estado de México, ​ oficialmente llamado Estado Libre y Soberano de México, es uno de los treinta y un estados que, junto con la Ciudad de México, conforman México.​​ Su capital es la ciudad de Toluca de Lerdo y su ciudad más poblada es Ecatepec de Morelos.",
      img: "assets/img/estadoMexico.jpg"
    },
    {
      nombre: "Michoacán de Ocampo",
      descripcion: "Michoacán de Ocampo oficialmente llamado Estado Libre y Soberano de Michoacán de Ocampo es uno de los treinta y un estados, que junto con la Ciudad de México, forman México.",      
      img: "assets/img/michoacan.jpg"
    },
    {
      nombre: "Morelos",
      descripcion: "Morelos, oficialmente llamado Estado Libre y Soberano de Morelos, es uno de los treinta y un estados que, junto con la Ciudad de México, conforman México.​​ Su capital y ciudad más poblada es Cuernavaca. ",
      img: "assets/img/morelos.jpg"
    },
    {
      nombre: "Nayarit",
      descripcion: "Nayarit es un pequeño estado en el oeste de México, entre las montañas arboladas de la Sierra Madre Occidental y el océano Pacífico. En el norte de la costa de la Riviera Nayarit, se encuentra la ciudad colonial de San Blas, cuyo fuerte San Basilio del siglo XVI protegió alguna vez el área de piratas. Justo al sur están las playas de la bahía de Matanchén aptas para el surf, mientras que en el norte está la isla Mexcaltitlán, considerada la cuna de la civilización Azteca.",
      img: "assets/img/nayarit.jpg"
    },
    {
      nombre: "Nuevo León",
      descripcion: "Nuevo León, oficialmente el Estado Libre y Soberano de Nuevo León, es uno de los treinta y un estados que, junto con la Ciudad de México, conforman México.​​ Su capital y ciudad más poblada es Monterrey, y está conformado por 51 municipios.",
      img: "assets/img/nuevoLeon.jpg"
    },
    {
      nombre: "Oaxaca",
      descripcion: "Oaxaca es una ciudad del centro de México. Es conocida por sus edificios coloniales, muchos de los cuales están hechos de piedra volcánica verde. En la plaza central del Zócalo, se encuentra el Palacio de Gobierno, con coloridos murales que representan la historia regional. La plaza Alameda de León está frente a la fachada adornada de la Catedral de Oaxaca. La iglesia Templo de Santo Domingo del siglo XVI tiene un lujoso interior barroco y un convento antiguo a su lado. ",
      img: "assets/img/oaxaca.jpg"
    },
    {
      nombre: "Puebla",
      descripcion: "Puebla es una ciudad del área este central de México, al sureste de Ciudad de México. Es conocida por su historia culinaria, la arquitectura colonial y las cerámicas. La cerámica pintada de Talavera que adorna varios edificios es elaborada localmente. La Catedral de Puebla, de la época renacentista, tiene campanarios altos y se yergue frente a la plaza central, el Zócalo. El Museo Amparo ofrece grandes exhibiciones de arte prehispánico, como cerámicas y fragmentos de murales. ",
      img: "assets/img/puebla.jpg"
    },    
    {
      nombre: "Quintana Roo",
      descripcion: "Quintana Roo es un estado mexicano de la península de Yucatán. En su costa del Caribe, la ciudad de Tulum tiene ruinas mayas junto al mar, playas de arena y cavernas submarinas. Al noreste, la ciudad balneario de Cancún es conocida por su vida nocturna, la reserva de la naturaleza de la laguna Nichupté y las playas largas con arrecifes de coral. Frente a las costas de Cancún, la pequeña Isla Mujeres, bordeada de arrecifes, tiene senderos naturales y restaurantes frente a la playa.",
      img: "assets/img/quintanaRoo.jpg"
    },
    {
      nombre: "San Luis Potosí",
      descripcion: "San Luis Potosí es una ciudad del centro de México. Fue un importante centro minero del oro y la plata en el Camino Real de Tierra Adentro, una ruta comercial de mediados del siglo XVI al siglo XIX. Es conocida por los edificios coloniales, como el imponente Templo de San Francisco de la época barroca, que domina el frondoso Jardín de San Francisco. Cerca, se encuentra el Templo del Carmen, que data del siglo XVIII y tiene una fachada con adornos tallados.",
      img: "assets/img/sanLuisPotosi.jpg"
    },
    {
      nombre: "Santiago de Querétaro",
      descripcion: "Santiago de Querétaro es una ciudad del centro de México. Es conocida por su arquitectura colonial española bien conservada, con un sorprendente acueducto de piedra rosa. Entre los edificios barrocos destacados se incluyen la iglesia Santa Rosa de Viterbo. Cerca está el Templo de San Francisco de color ocre, en el Jardín Zenea, la plaza principal de la ciudad. En el antiguo convento de la iglesia, el Museo Regional de Querétaro exhibe artefactos prehispánicos, coloniales y republicanos",
      img: "assets/img/queretaro.jpg"
    },
    {
      nombre: "Sinaloa",
      descripcion: "Sinaloa. Oficialmente llamado Estado Libre y Soberano de Sinaloa, es uno de los treinta y un estados que, junto con la Ciudad de México, conforman México.",
      img: "assets/img/sinaloa.jpg"
    },
    {
      nombre: "Sonora",
      descripcion: "Sonora, oficialmente llamado Estado Libre y Soberano de Sonora, es uno de los treinta y un estados que, junto con la Ciudad de México, conforman México.​​ Su capital y ciudad más poblada es Hermosillo.",
      img: "assets/img/sonora.jpg"
    },
    {
      nombre: "Tabasco",
      descripcion: "Tabasco es un estado mexicano con una costa en el norte que bordea el golfo de México. En su capital, Villahermosa, está el Parque Museo La Venta, conocido por su zoológico y las colosales esculturas de piedra que datan de la civilización olmeca. El gran Museo de Historia de Tabasco documenta el área desde la época prehistórica, mientras que el Museo Regional de Antropología tiene exhibiciones sobre las civilizaciones nativas mayas y olmecas.",
      img: "assets/img/tabasco.jpg"
    },
    {
      nombre: "Tamaulipas",
      descripcion: "Tamaulipas, oficialmente Estado Libre y Soberano de Tamaulipas, es uno de los treinta y un estados que, junto con la Ciudad de México, forman México.​​ Su capital es Ciudad Victoria y su ciudad más poblada es Reynosa.​ Fue fundado el 7 de febrero de 1824.",
      img: "assets/img/tamaulipas.jpg"
    },
    {
      nombre: "Tlaxcala",
      descripcion: "Tlaxcala es un pequeño estado en el centro de México, al este de Ciudad de México. En el sur, el sitio arqueológico de Cacaxtla exhibe coloridos frescos mayas, mientras que las ruinas cercanas de Xochitecatl incluyen antiguas pirámides. Al noreste de aquí, la capital del estado de Tlaxcala tiene una arquitectura notable, como el Palacio de Gobierno de Tlaxcala, con una fachada de baldosas naranjas y murales que representan la historia local.",
      img: "assets/img/tlaxcala.jpg"
    },
    {
      nombre: "Veracruz",
      descripcion: "Veracruz, un alargado estado mexicano que bordea el golfo de México, tiene varias playas y la cima más alta del país, Pico de Orizaba, un volcán inactivo. La moderna ciudad puerto de Veracruz fue fundada por Hernán Cortés en 1519 como una base para la conquista española sobre el Imperio Azteca. Actualmente, la ciudad es famosa por el exuberante festival anual del Carnaval.",
      img: "assets/img/veracruz.jpg"
    },
    {
      nombre: "Yucatán",
      descripcion: "Yucatán es un estado mexicano famoso por sus playas en el golfo de México y las ruinas mayas. El famoso Chichén Itzá abarca una enorme pirámide, un campo de pelota y templos de piedra. Otros sitios mayas son Ek Balam, famoso por las esculturas bien conservadas, y Uxmal, con sus complejas fachadas talladas. La capital y la ciudad más grande de Yucatán, Mérida, tiene una historia colonial que se refleja en edificios como la catedral de Mérida del siglo XVI. ",
      img: "assets/img/yucatan.jpg"
    },
    {
      nombre: "Zacatecas",
      descripcion: "Zacatecas es un estado del centronorte de México, al noroeste de Ciudad de México. En él se encuentra el sitio arqueológico La Quemada, un gran asentamiento precolombino con un museo, una pirámide sobre un cerro y columnas. La capital del estado, también llamada Zacatecas, se encuentra a gran altura y alberga la antigua mina de plata El Edén, con un tren subterráneo que pasa por formaciones rocosas únicas, exhibiciones de depósitos de minerales y antiguas máquinas mineras. ",
      img: "assets/img/zacatecas.jpg"
    }
    
  ];  
  
  
  constructor(private httpClient: HttpClient) { }

  getEstados(): Estado[]{
    return this.estados;
  }


getEstado(id: number): Estado{
  return this.estados[id];
}

searchEstado(e:string): Estado[]{
  let estadosArr: Estado[] = [];
  e = e.toLowerCase();

  for(let i = 0; i < this.estados.length; i++){
    let estado = this.estados[i]
    let name = estado.nombre.toLowerCase();

    if( name.indexOf( e ) >= 0){
      estado.Id = i;
      estadosArr.push(estado);
    }
  }
  return estadosArr;
}

}

export interface Estado{
  nombre: string;
  descripcion: string;
  img: string;
  Id?: number;
}
