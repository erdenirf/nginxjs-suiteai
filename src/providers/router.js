async function handleCompletion(r) {
    try {
        // Читаем тело запроса
        let requestBody = await r.requestBody;
        let data = JSON.parse(requestBody);
        
        // Проверяем model в теле запроса
        if (!data.model || !data.model.startsWith('gigachat:')) {
            r.headersOut['Content-Type'] = 'application/json';
            r.return(403, JSON.stringify({
                error: {
                    message: "Only gigachat models are supported",
                    type: "invalid_request_error"
                }
            }));
            return;
        }
        
        // Ваша логика обработки запроса
        r.headersOut['Content-Type'] = 'application/json';
        r.return(200, JSON.stringify({
            success: true,
            // Add your completion response data here
        }));
        
    } catch (e) {
        r.headersOut['Content-Type'] = 'application/json';
        r.return(400, JSON.stringify({
            error: {
                message: "Invalid request body",
                type: "invalid_request_error"
            }
        }));
    }
}

export default {handleCompletion};