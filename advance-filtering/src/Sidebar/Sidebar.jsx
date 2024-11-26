import Category from './Category/Category';
import Colors from './Colors/Colors';
import Price from './Price/Price';
import './Sidebar.css';

function Sidebar({handleChange}) {


    return <>
       <section className="sidebar">
        <div className="logo-container">
            <h1>🛒</h1>

            </div>
            <Category handleChange={handleChange}/>
            <Colors handleChange={handleChange}/>
            <Price handleChange={handleChange}/>

        </section>
    </>
}
export default Sidebar;