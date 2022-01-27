import styles from '../styles/Header.module.css'

const Header = () => {
    const x = 2
    return (
        <div>
            <h1 className='title'><span>Portfolio</span></h1>
            <style jsx>
                {`
                    .title {
                        color: ${x >= 2 ? 'red' : 'blue'}
                    }
                `}
            </style>
        </div>
    )
}

export default Header