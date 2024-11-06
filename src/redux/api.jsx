import axios from "axios";

const baseURL = "http://localhost:3001/api/v1";

const fetchInfo = {
    getToken: {
        url: "/user/login",
        method: "post",
        auth: false,
    },
    getProfile: {
        url: "/user/profile",
        method: "post",
        auth: true,
    },
    putUserName: {
        url: "/user/profile",
        method: "put",
        auth: true,
    },
};

export const callAPI = async (infos, data = {}) => {
    console.log("Infos key:", infos);
    const callAPIData = fetchInfo[infos];
    if (!callAPIData) {
        console.error("Erreur à l'appel de connexion à l'API");
        return;
    }

    const headers = { "Content-Type": "application/json" };
    
    if (callAPIData.auth) {
        const token = localStorage.getItem("token");
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        } else {
            console.error("Aucun token trouvé dans localStorage.");
            return;
        }
    }

    console.log("Appel de l'API:", {
        url: `${baseURL}${callAPIData.url}`,
        method: callAPIData.method,
        headers: headers,
        data: data,
    });


    try {
        const response = await axios({
            method: callAPIData.method,
            url: `${baseURL}${callAPIData.url}`,
            headers,
            data: data 
        });
        
        console.log("Réponse de l'API:", response.data);
        return response.data; 
    } catch (error) {
        console.error("Erreur lors de la connexion à l'API :", error.response ? error.response.data : error.message);
        throw error; 
    }
};

export default callAPI;
