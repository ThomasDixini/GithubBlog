import blogLogo from '../../assets/Logo.svg'

export function Header(){
    return(
        <header>
            <img src={blogLogo} alt="Logo" />
        </header>
    );
}