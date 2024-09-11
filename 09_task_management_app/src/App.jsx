import { Header, BodyContainer } from "./components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <div className="w-screen h-screen">
                <Header />
                <BodyContainer />
            </div>
            <ToastContainer />
        </>
    );
};

export default App;
