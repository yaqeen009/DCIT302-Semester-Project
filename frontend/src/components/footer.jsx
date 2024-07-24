import grass from "../assets/Grass.svg"

const Footer = () => {
    return ( 
        <div className="fixed -bottom-8 left-0 w-full">
            <img className="rotate-180 w-full" src={grass} />
        </div>
     );
}
 
export default Footer;