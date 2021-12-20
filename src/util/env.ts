type EnvironmentalVariables = {
    API_ENDPOINT: string | boolean;
}

const env: EnvironmentalVariables = {
	API_ENDPOINT: import.meta.env.VITE_API_ENDPOINT
};

export default env;