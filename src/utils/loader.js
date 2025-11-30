import mariaImg from "../../fotos/maria micaela/Maria Micaela.png";
import abejaImg from "../../fotos/Abeja/abeja.png";
import mamaImg from "../../fotos/Mama/Mama.png";
import papaImg from "../../fotos/Papa/papa.png";
import hermanaImg from "../../fotos/Hermana/Hermana.png";

export function loadAssets(k) {
    k.loadSprite("maria", mariaImg);
    k.loadSprite("abeja", abejaImg);
    k.loadSprite("mama", mamaImg);
    k.loadSprite("papa", papaImg);
    k.loadSprite("hermana", hermanaImg);
}
