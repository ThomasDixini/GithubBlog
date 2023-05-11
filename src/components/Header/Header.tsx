import blogLogo from '../../assets/Logo.svg'
import effectOne from '../../assets/effect1.svg'
import { HeaderContainer } from './styles';

export function Header(){
    return(
        <HeaderContainer>
            <img src={blogLogo} alt="Logo" />
            <div className="rect"></div>
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className='effects'>
                <img src={effectOne} alt="" className='effect1'/>
                <img src={effectOne} alt="" className='effect2'/>
            </div>
        </HeaderContainer>
    );
}