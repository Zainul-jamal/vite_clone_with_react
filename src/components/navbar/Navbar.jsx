import Anchor from "../Anchor_link/Anchor";
import viteLogo from '/vite.svg'
function Navbar(){
    return(
        <nav>
        <img src={viteLogo} style={{paddingLeft:'20px'}} alt="" />
        <input type="text"
        placeholder="Search"
        style={{
            paddingLeft:'10px',
            width:'100px',
            height:'30px',
            margin:'10px',
            background:'#8e8e913d',
            border:'none'
        }}
        />
        <Anchor
        text='Guide'
        />
        <Anchor
        text='COnfig'
        /><Anchor
        text='Plugins'
        /><Anchor
        text='Resources'
        /><Anchor
        text='Version'
        />
        </nav>
    )
}
export default Navbar;