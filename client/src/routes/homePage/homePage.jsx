import { useContext } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss'
import { AuthContext } from '../../context/AuthContext';
function HomePage() {


    const {currentUser} = useContext(AuthContext)
    console.log(currentUser);
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>
                        Your Home Away from Home – Find the Best Mess & Lodging Near You!
                    </h1>
                    <p>
                        Say goodbye to the hassle of finding the perfect student stay! Our 
                        app connects you to the best budget-friendly mess and lodging 
                        options, making student life easier and stress-free. Browse, 
                        compare, and book your ideal place in just a few taps—because 
                        you deserve comfort without the extra cost!
                    </p>
                    <SearchBar/>
                    <div className='boxes'>
                        <div className='box'>
                            <h1>2+</h1>
                            <h2>years of experince</h2>
                        </div>
                        <div className='box'>
                            <h1>200</h1>
                            <h2>award gains</h2>
                        </div> 
                        <div className='box'>
                            <h1>1200+</h1>
                            <h2>Mess Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default HomePage;