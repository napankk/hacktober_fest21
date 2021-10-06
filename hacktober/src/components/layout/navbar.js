import '../../css/navbar.css'

function Navbar(props){
    return <>
    <ul class="nav">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/gryffindor">Gryffindor</a></li>
    <li><a href="/slytherin">Slytherin</a></li>
    <li><a href="#">Hufflepuff</a></li>
    <li><a href="#">Ravenclaw</a></li>
  </ul>
    </>
}

export default Navbar;