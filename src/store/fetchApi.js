const BASE_URL = "http://127.0.0.1:5500/src/data/"

export async function getData(endPoint) {
    try{
        const res = await fetch(BASE_URL + endPoint + ".json", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json()
        return data;
    }catch(e){
        console.log(e)
    }
}