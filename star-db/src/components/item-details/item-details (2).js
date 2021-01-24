import React, {Component} from 'react';
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import photo from './photo.svg'
const Record = ({item, field, label}) => {
    // console.log('field: ' + field, 'item: '+ item, 'item[field] ' );
    return (
        <li><span className='trem'>{label}</span> {item.item[field]}</li>
    )
};

export {
    Record
};

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updateItem();
        }
    }

    onPersonLoaded = (item) => {
        this.setState({
            item,
            loading: false,
            error: false
        });
    };

    onError = (err) => {
        this.setState({
            loading: false,
            error: true
        })
    };

    updateItem() {

        this.setState({
            loading: true,
        });

        const {itemId, getData, getImageUrl} = this.props;

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false,
                    error: false
                });
            })
    }

    render() {

        const { item, loading, error, image } = this.state;

        if(!item) {
            return <span>Select a element from a list</span>
        }

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null ;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ?  <ItemView item={this.state} props={this.props}/> : null;

        return(
            <div className="item-details">
                {spinner}
                {content}
                {errorMessage}
            </div>
        )
    }
}

const ItemView = ({ item, props }) => {

    const { item :{name}, image } = item;

    const {TestURL} = props;

    let url = image;
    let classNameImage =' ';

    // if(!TestURL(url)){
    //     url = photo;
    //     classNameImage = 'contain';
    // }

    return(
        <React.Fragment>
            <div className={`item-details__image ${classNameImage}`}>
                <img src={url} alt=""/>
            </div>
            <div className="item-details__info">
                <h2 className='item-details__header'>{name}</h2>
                <ul className="item-details__list">
                    {
                        React.Children.map(props.children, (child, idx) => {
                            return React.cloneElement(child, {item});
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}
