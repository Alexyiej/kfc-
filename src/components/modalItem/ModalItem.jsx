import './ModalItem.scss';

function ModalItem(props){
    const { product, onButtonClick} = props;
    const { name, price, imageUrl } = product;

    function handleClick() {
        onButtonClick(product); 
    }
    
    return(
        <div className="modal-item">
            <img src={imageUrl} alt=""/>
            <button onClick={handleClick}>+</button>
            <div>
                <h4>{name}</h4>
                <h4>{price}</h4>
            </div>
           
        </div>
    )
}

export default ModalItem;