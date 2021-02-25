import Checkout from "../../views/checkout/checkout.component"
import HomePage from "../../views/homepage/homepage.component"

const dashboardRoutes = [
    {
        path: '/customer',
        component: HomePage,
    },
    {
        path: '/customer/checkout',
        component: Checkout,
    },
]
export default dashboardRoutes