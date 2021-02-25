import photoGalleryData from "../../data/photoGallery.data"

const INITIAL_STATE = {
    collections: photoGalleryData
}
const shopReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default shopReducer