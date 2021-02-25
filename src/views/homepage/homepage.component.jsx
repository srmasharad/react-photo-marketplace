import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PhotoGridCard from "../../components/common/photoGridCard";
import MainBanner from "../../components/MainBanner";
// import photoGalleryData from "../../data/photoGallery.data";
import { selectPhotoCollections } from '../../redux/shop/shop.selectors';

const HomePage = ({ collections }) => {
    return (
        <>
            <MainBanner />
            <div className="container-fluid">
                <div className="row">
                    {collections.map(item => 
                        <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                            <PhotoGridCard item={item} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectPhotoCollections
})
 
export default connect(mapStateToProps)(HomePage);