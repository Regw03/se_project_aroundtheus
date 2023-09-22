export default class UserInfo {
  constructor(name, profession, avatar) {
    this.name = name;
    this.profession = profession;
    this.link = avatar;
  };

  getUserInfo() {
    return {
      profession: this.profession.textContent,
      name: this.name.textContent,
    };
  };

  setUserInfo(name, profession) {
    this.name.textContent = name;
    this.profession.textContent = profession;
  };


  setAvatarImgInfo(link) {
    this.link.src = link
  };



};


