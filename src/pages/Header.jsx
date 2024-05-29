import logo from '@/assets/react.svg'

const Header = () => {
    return (
        <header>
            <a href=''
               className='flex items-center gap-3'
            >
                <img src={logo}
                     width={75}
                     alt='logo'
                />
                <span className='text-white text-2xl font-semibold'>Homework 3 by React</span>
            </a>
        </header>
    );
};
export default Header