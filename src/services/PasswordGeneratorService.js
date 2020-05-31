export default function generatePassword(passwordLength, includeSpecialCharacters, includeNumbers) {
    let applicableCharacters = [...Array(26).keys()].map(c => String.fromCharCode(c + 65))
        .concat([...Array(26).keys()].map(c => String.fromCharCode(c + 97)));

    if (includeNumbers) {
       applicableCharacters = applicableCharacters.concat([...Array(10).keys()].map(c => String.fromCharCode(c + 48)));
    }

    if (includeSpecialCharacters) {
        applicableCharacters = applicableCharacters.concat([...Array(15).keys()].map(c => String.fromCharCode(c + 33)));
        applicableCharacters = applicableCharacters.concat([...Array(7).keys()].map(c => String.fromCharCode(c + 58)));
        applicableCharacters = applicableCharacters.concat([...Array(6).keys()].map(c => String.fromCharCode(c + 91)));
        applicableCharacters = applicableCharacters.concat([...Array(4).keys()].map(c => String.fromCharCode(c + 123)));
    }

    const maxRandomValue = applicableCharacters.length;

    const passwordCharArray = [];

    for (let i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * (maxRandomValue + 1));

        passwordCharArray.push(applicableCharacters[randomNum]);
    }

    return passwordCharArray.join('');
}