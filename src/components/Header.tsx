import { Bheader } from "../styles/style_01";
import Baimg from "../assets/Ba_img.png";


export function Header(){
    return(
        <Bheader>
            
            <h3>Bahia</h3>
            <img src={ Baimg } alt="" />

        </Bheader>
    );
}