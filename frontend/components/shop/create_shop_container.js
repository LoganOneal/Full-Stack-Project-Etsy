import { connect } from 'react-redux';
import { createShop } from '../../actions/shops_actions';
import ShopForm from './shop_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    const ownerId = state.session.id;
    const shop = { name: '', ownerId: ownerId, imageFile: null, imageUrl: null};
    const errors = state.errors.shop;
    return {
        shop,
        errors
    }
};

const mapDispatchToProps = dispatch => ({
    action: shop => dispatch(createShop(shop))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopForm));