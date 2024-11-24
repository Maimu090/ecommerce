import './Price.css'

function Price() {
    return <div className='ml'>
        <h2 className='sidebar-title price-title'>Price</h2>
        <label className='sidebar-label-container'>
            <input type="radio"  name="test" />All
            <span className='checkmark'></span>
            </label>
            <label className='sidebar-label-container'>
            <input  type="radio"  name="test" />$0-$50
            <span className='checkmark'></span>
            </label>
            <label className='sidebar-label-container'>
            <input  type="radio"  name="test" />$50-$100
            <span className='checkmark'></span>
            </label>
            <label className='sidebar-label-container'>
            <input type="radio"  name="test" />$100-$150
            <span className='checkmark'></span>
            </label>
            <label className='sidebar-label-container'>
            <input  type="radio"  name="test" />Over $150
            <span className='checkmark'></span>
            </label>
    </div>
}
export default Price;