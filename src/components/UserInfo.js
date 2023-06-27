export default class UserInfo{
    constructor(name, profession){
        this.name = name;
        this.profession = profession;
    };

    getUserInfo(){
        return{
            profession: this.profession.textContent,
            name: this.name.textContent
        }

    }

    setUserInfo(name, profession){

       this.name = name.textContent;
       this.profession = profession.textContent;
    }
}