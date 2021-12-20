export const generateAuthenticationTokensFromCode = async (code: string): Promise<Response> => {
	return fetch('http://localhost:8080/auth/generate-code', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ code: code })
	});
};

export const generateAuthenticationTokensFromID = async (id: string): Promise<Response> => {
	return fetch('http://localhost:8080/auth/generate-id', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ id: id })
	});
};