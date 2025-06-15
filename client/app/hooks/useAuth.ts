import { useContext } from "react";
import AuthContext from "~/context/authProvider";
import type { AuthContextType } from "~/context/authProvider";

export default function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}