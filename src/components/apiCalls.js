
export const getChartData = async(url) => {
    const response = await fetch(url)
    if (Response.status >= 400) {
        throw( new Error('Network Request Failed'))
    } else {
        return await response.json()
    }
};