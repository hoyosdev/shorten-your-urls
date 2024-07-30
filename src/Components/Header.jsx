import illustration from './../images/illustration-working.svg';


function Header() {
    return <>
            <header className='header'>
                <div className='container'>
                <div className='header-content'>
                    <h1 className='header-title'>More than just shorter links </h1>
                    <p className='header-subtitle'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <div className="m-mid"></div>
                    <button className='btn-primary'>Get started</button>
                </div>
                </div>
                <img src={illustration} className='header-img' alt='A person working in a computer' />
            </header>
        </>
}

export default Header;