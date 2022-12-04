import { empty } from "check-more-types";
import { xor } from "lodash";

const registerLocators = {
    INPUT_FIST_NAME: 'input[type="text"][ng-model="FirstName"]',
    INPUT_LAST_NAME: 'input[type="text"][ng-model="LastName"]',
    TEXTAREA_ADRESS: 'textarea[ng-model="Adress"]',
    INPUT_EMAIL: 'input[type="email"][ng-model="EmailAdress"]',
    INPUT_PHONE: 'input[type="tel"][ng-model="Phone"]',
    _getGender(gender){
        if (gender != null && gender && empty && gender != " ")
            return gender == 'female' ? 'FeMale' : 'Male';
        return gender;
    },
    FUNC_INPUT_GENDER(gender){
        
        return `input[type="radio"][ng-model="radiovalue"][value="${this._getGender(gender)}"]`
        // document.querySelector(`input[type="radio"][ng-model="radiovalue"][value=${selectedGender}]`);
        // <input type="radio" name="radiooptions" ng-model="radiovalue" value="FeMale"></input>
    },
        
        INPUT_GENDER_FEMALE:'female', 
        INPUT_GENDER_MALE:'male'

}; 
 
export default registerLocators;
