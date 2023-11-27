import './ModalItem.scss';

function ModalItem(props){
    let { name, price, imageUrl } = props.product;
    return(
        <div className="modal-item">
            <img src={imageUrl} alt=""/>
            <div>
                <h4>{name}</h4>
                <h4>{price}</h4>
            </div>
        </div>
    )
}

export default ModalItem;