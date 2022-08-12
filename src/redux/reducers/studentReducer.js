const INITIAL_STATE = [];

//BURADAKİ OLAY deneme DEĞİŞKENİNİ DÖNDÜRÜYOR FAKAT DENEME BİR YANİ APİDEN GELEN VERİYİ BAŞINA FARKLI SEMBOLLER
//EKLEYEREK DÖNDÜRÜYOR BU YÜZDEN JSON FORMATINDAN ÇIKIYOR SEMBOLLER = {"_U": 0, "_V": 0, "_W": null, SONRA DATAYI LİSTELİYOR

const studentsURL = "https://jsonplaceholder.typicode.com/users"; 
async function getAllStudent(){
    const result = await fetch(studentsURL);
    const json = await result.json();
    return json;
}
const deneme1 = getAllStudent();
const deneme = [
    {
      "id": 1,
      "name": "Leanne Gsraham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }];

const studentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_ALL_STUDENTS":
            return deneme1;
            break;
        default:
            return state;
            break;
    }
}
export default studentReducer;