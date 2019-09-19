export const getChartData = async(url) => {
    try {
        const response = await fetch(url)
        if (Response.status >= 400) {
            throw( new Error('Network Request Failed'))
        } else {
            return await response.json()
        }
    } catch (error){
        console.log(error)
    }
};

export const postChartConfig = async(url,data) => {
    try {
        // console.log(data)
        const body = JSON.stringify(data);
        await fetch(url, {
            method: 'post', body: body, headers: { 'Content-Type': 'application/json' },
        });
} catch (error) {
    console.log(error);
}
};

export const getChartConfig = async(url,chart) => {
    try{
        const response = await fetch(url+'?chart='+chart)
        if (Response.status >= 400) {
            throw( new Error('Network Request Failed'))
        } else {
            // console.log(await response.body);
            return await response.json();
        }
    } catch(error){
        console.log(error)
    }
}

