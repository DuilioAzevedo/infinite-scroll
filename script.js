// Unsplash API
const count = 10;
const apiKey = 'lBzDhsTtC6Qqx0BxFAo3SKz_aA-LHl6_F--dpXWAJBs';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }catch{
        //Catch Errors here
    }
}

//On Load
getPhotos();