import style from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={style.home_logo}>
            <img
                src="https://st3.depositphotos.com/18564198/37729/v/600/depositphotos_377295696-stock-illustration-hand-sketched-welcome-home-quote.jpg"
                alt="home logo"/>
        </div>
    );
};

export {HomePage};
