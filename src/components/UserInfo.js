export default class UserInfo{
    constructor(name, profession){
        this.name = name;
        this.profession = profession;
    };

    getUserInfor(){
        return{
            profession: this.profession,
            name: this.name
        }

    }

    setUserInfo(name, profession){

       this.name = name;
       this. profession = profession;

    }
}