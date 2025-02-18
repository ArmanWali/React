import ChefLogo from '../assets/chef-logo.png';

export default function Header(){
    return(
        <header className="header">
            <img className='chef-logo' src={ChefLogo} alt="Chef Claude Logo" />
            <h1 className='header-text'>Chef Claude</h1>
        </header>
    )
}