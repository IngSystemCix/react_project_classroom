import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./components";
import { About, Contact, Home } from "./public";

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path="*" element={<Navigate to={"/home"} />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </RoutesWithNotFound>
        </BrowserRouter>
    );
}