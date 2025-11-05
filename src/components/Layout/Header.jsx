import Navigation from "./Navigation"

function Header() {
const headerStyle = {
    backgroundColor: '#5c4e4e',
    padding: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

return (
    <header style={headerStyle}>
        <h1>Pamela's Portfolio</h1>
        <Navigation />
    </header>)
};
export default Header
