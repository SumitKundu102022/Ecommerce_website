import { Route, Routes } from "react-router-dom"
import "./App.css"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminProducts from "./pages/admin-view/products"
import AdminOrders from "./pages/admin-view/orders"
import AdminFeatures from "./pages/admin-view/features"
import ShoppingLayout from "./components/shopping-view/layout"
import NotFound from "./pages/not-found"
import ShoppingHome from "./pages/shopping-view/home"
import ShoppingListing from "./pages/shopping-view/listing"
import ShoppingCheckout from "./pages/shopping-view/checkout"
import ShoppingAccount from "./pages/shopping-view/account"
import CheckAuth from "./components/common/check-auth"
import UnauthPage from "./pages/unauth-page"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { checkAuth } from "./store/auth-slice"
import { Skeleton } from "@/components/ui/skeleton";
import PaypalReturnPage from "./pages/shopping-view/paypal-return"
import PaymentSuccessPage from "./pages/shopping-view/payment-success"
import SearchProducts from "./pages/shopping-view/search"
import Spinner from "./components/common/Spinner"
import Footer from "./components/common/Footer"


function LoadingWrapper({ children, isLoading, delay = 300 }) {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setTimeout(() => setShowSpinner(true), delay);
    } else {
      setShowSpinner(false);
    }
    return () => clearTimeout(timer);
  }, [isLoading, delay]);

  return showSpinner ? <Spinner /> : children;
  // return isLoading ? <Spinner /> : children;
}


function App() {
  // const isAuthenticated = false;
  // const user = null;

  const { user, isAuthenticated,isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  


  useEffect(() => {
    const token=JSON.parse(sessionStorage.getItem("token"));
    dispatch(checkAuth(token));
  }, [dispatch]);
  
  // if(isLoading){
  //   return <Skeleton className="w-full bg-black h-[900px]" />;
  // }

  if (isLoading) {
    console.log("Rendering Spinner...");
    return <Spinner/>;
  }

  //console.log("Loading.............................................>",isLoading,user);

  return (
    <>
      <div className="flex flex-col overflow-hidden bg-gray-100">
        {/* common Components */}
        <Routes>
          <Route
            path="/"
            element={
              <CheckAuth
                isAuthenticated={isAuthenticated}
                user={user}
              ></CheckAuth>
            }
          />
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AuthLayout />
              </CheckAuth>
            }
          >
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>
          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AdminLayout />
                <Footer />
              </CheckAuth>
            }
          >
            <Route
              path="dashboard"
              element={
                <LoadingWrapper isLoading={isLoading}>
                  <AdminDashboard />
                </LoadingWrapper>
              }
            />
            <Route
              path="products"
              element={
                <LoadingWrapper isLoading={isLoading}>
                  <AdminProducts />
                </LoadingWrapper>
              }
            />
            <Route
              path="orders"
              element={
                <LoadingWrapper isLoading={isLoading}>
                  <AdminOrders />
                </LoadingWrapper>
              }
            />
            <Route
              path="features"
              element={
                <LoadingWrapper isLoading={isLoading}>
                  <AdminFeatures />
                </LoadingWrapper>
              }
            />
          </Route>
          <Route
            path="/shopping"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShoppingLayout />
                <Footer />
              </CheckAuth>
            }
          >
            <Route
              path="home"
              element={
                <LoadingWrapper isLoading={isLoading} delay={500}>
                  <ShoppingHome />
                </LoadingWrapper>
              }
            />
            <Route
              path="listing"
              element={
                <LoadingWrapper isLoading={isLoading} delay={500}>
                  <ShoppingListing />
                </LoadingWrapper>
              }
            />
            <Route
              path="checkout"
              element={
                <LoadingWrapper isLoading={isLoading}>
                  <ShoppingCheckout />
                </LoadingWrapper>
              }
            />
            <Route
              path="account"
              element={
                <LoadingWrapper isLoading={isLoading}>
                  <ShoppingAccount />
                </LoadingWrapper>
              }
            />
            <Route
              path="paypal-return"
              element={
                <LoadingWrapper isLoading={isLoading}>
                  <PaypalReturnPage />
                </LoadingWrapper>
              }
            />
            <Route
              path="payment-success"
              element={
                <LoadingWrapper isLoading={isLoading}>
                  <PaymentSuccessPage />
                </LoadingWrapper>
              }
            />
            <Route
              path="search"
              element={
                <LoadingWrapper isLoading={isLoading}>
                  <SearchProducts />
                </LoadingWrapper>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <LoadingWrapper isLoading={isLoading}>
                <NotFound />
                <Footer/>
              </LoadingWrapper>
            }
          />
          <Route
            path="/unauth-page"
            element={
              <LoadingWrapper isLoading={isLoading}>
                <UnauthPage />
                <Footer />
              </LoadingWrapper>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App
