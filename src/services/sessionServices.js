
const sessionService = {
    // Function to set token in sessionStorage
    setToken(token) {
        sessionStorage.setItem("swiftCart", token);
    },

    // Function to get token from sessionStorage
    getToken() {
        return sessionStorage.getItem("swiftCart") ?? "";
    },

    // Function to clear token from sessionStorage
    clearToken() {
        sessionStorage.removeItem("swiftCart");
    }
};

export default sessionService;
