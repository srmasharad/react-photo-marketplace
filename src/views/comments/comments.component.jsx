import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { createStructuredSelector } from 'reselect';
import TextAreaField from "../../components/common/TextAreaField";
import { addItem } from "../../redux/cart/cart.actions";
import { selectPhotoCollections } from '../../redux/shop/shop.selectors'
import * as Yup from 'yup'
import commentsData from "../../data/comments.data";

const Comments = ({ collection, addItem }) => {
    const { comments } = useParams()
    const[pgCollection, setPgCollection] = useState({})
    const[showBtn, setShowBtn] = useState(false)
    const[commentsList, setCommentsList] = useState(commentsData)

    useEffect(() => {
            const filterCollectionData = collection.find(item => parseInt(item.id) === parseInt(comments))
            setPgCollection(filterCollectionData)
    },[collection, comments, pgCollection])
    
    const handleShowBtn = () => setShowBtn(true)


    const { url, photographer, price, profile_url } = pgCollection

    const ProflePlaceholder =  "https://www.gravatar.com/avatar/fe46248d505e3fb149e06a34916d253c?s=60&d=mm"

    return (
        <main className="site-main py-5">
            <div className="container">
                {/* <h1 className="h4 mb-5">Comments</h1> */}
                <div className="row">
                    <div className="col-md-3 order-md-1">
                        <div className="profile-sidebar">
                            <div className="photoGrapher_profile mb-3">
                                <div className="profile_info_wrap">
                                    <div className="profile_photo">
                                        <img src={profile_url} alt="profile_image"/>
                                    </div>
                                    <div className="profile_info">
                                        <h6>{photographer}</h6>
                                        <Link to="" className="btn btn-light btn-sm mr-2"><i className="fi fi-rr-envelope"></i></Link>
                                    </div>
                                </div>
                                <span className="price">${price}</span>
                            </div>
                            <button type="button" className="btn btn-primary btn-block mb-2" onClick={() => {
                                addItem(pgCollection)
                                toast.success("Item Added To Cart. Go To Checkout")
                            }}><i className="fi fi-rr-shopping-cart-add"></i> Add To Cart</button>
                            <a href={url} className="btn btn-success btn-block" target="_blank" download rel="noopener noreferrer"><i className="fi  fi-rr-download"></i> Download</a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="comments-container">
                            <div className="card">
                                <img src={url} className="card-img-top" alt="card-img" />
                            </div>
                            <div className="comments-area">
                                <div className="comment-form">
                                    <img src={ProflePlaceholder} alt="profile-placeholder" className="profile_photo" />
                                    <Formik
                                        initialValues={{ comment: ''}}
                                        validationSchema={
                                            Yup.object().shape({
                                                comment: Yup.string().required("Comment Required")
                                            })
                                        }
                                        onSubmit={async(values, actions) => {
                                            setTimeout(() => {
                                                setCommentsList([
                                                    ...commentsList, 
                                                    {
                                                        profile: ProflePlaceholder,
                                                        name:"Photo Marketplace", 
                                                        comments: values.comment
                                                    }
                                                ])
                                                actions.resetForm()
                                            }, 500);
                                        }}
                                    >
                                    {({ isSubmitting, errors }) => (
                                        <Form>
                                            <TextAreaField name="comment" error={errors.comment}  onClick={handleShowBtn} placeHolder="Add your comment..."/>
                                            {showBtn && <button
                                                type="submit"
                                                className={
                                                    isSubmitting
                                                        ? 'btn btn-primary cf-spinner cf-spinner--center cf-spinner--sm'
                                                        : 'btn btn-primary'
                                                }
                                                disabled={isSubmitting}
                                            >
                                                {!isSubmitting  ? 'Submit' : <Spinner animation="border" variant="light" size="sm" />}
                                            </button>}
                                        </Form>
                                    )}
                                    </Formik>
                                </div>
                                <ul className="comment-list pt-4">
                                    {commentsList.map((value, index) =>  
                                        <li key={index}>
                                            <img src={value.profile} alt="profile-placeholder" className="profile_photo"/>
                                            <div className="comment-detail">
                                                <span className="name">{value.name}</span>
                                                <p>{value.comments}</p>
                                            </div>
                                        </li>
                                    ).reverse()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

const mapStateToProps = createStructuredSelector({
    collection: selectPhotoCollections
})

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Comments);