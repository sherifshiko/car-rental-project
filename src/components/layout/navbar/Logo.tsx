import logoImage from './../../../assets/logo.png'

const Logo:React.FC=()=>{
    return<>
    <div>
        <img src={logoImage} alt="the logo" className='w-24  rounded-xl bg-gray-400 dark:bg-black' />
    </div>
    
    </>
}

export default Logo;