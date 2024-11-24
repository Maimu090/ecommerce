import './Colors.css'

function Colors() {
    return <div>
    
    <label className='sidebar-label-container color-title'>
        <input type="radio"  name="test" />All
        <span className='checkmark'></span>
        </label>
        <label className='sidebar-label-container'>
        <input  type="radio"  name="test" />Black
        <span className='checkmark'></span>
        </label>
        <label className='sidebar-label-container'>
        <input  type="radio"  name="test" />Blue
        <span className='checkmark'></span>
        </label>
        <label className='sidebar-label-container'>
        <input type="radio"  name="test" />Red
        <span className='checkmark'></span>
        </label>
        <label className='sidebar-label-container'>
        <input  type="radio"  name="test" />Green
        <span className='checkmark'></span>
        </label>
        <label className='sidebar-label-container'>
        <input  type="radio"  name="test" />White
        <span className='checkmark'></span>
        </label>
</div>
}
export default Colors;