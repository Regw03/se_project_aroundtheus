class UserInfo{
    constructor(nameInputValue, proffesionInputValue){
        this.name = nameInputValue;
        this.proffesion = proffesionInputValue;
    };

    getUserInfor(){
        profileEditButton.addEventListener('click', function() {
            nameInputValue.value = profileTitle.textContent;
            professionInputValue.value = profileProfession.textContent;
            openPopup(profileEditPopup);
        });
    }

    setUserInfo(){
        //profile save event
        popupEditForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const nameInputValue = event.target.name.value;
            const professionInputValue = event.target.profession.value;
            profileTitle.textContent = nameInputValue;
            profileProfession.textContent = professionInputValue;
            closePopup(profileEditPopup);
        });
    }
}