import axios from "axios";

const apiClinet = axios.create({
    baseURL: 'https://swiftcart-g6dwdmajg0f2g2bd.southindia-01.azurewebsites.net/swift-cart',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchApi = async (method, endPoint, data = null, config = {}) => {
    try {
        const response = await apiClinet({
            method,
            url: endPoint,
            data,
            ...config
        });
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
};
