export default function generatePassword(passwordLength, includeSpecialCharacters, includeNumbers) {
    let applicableIndices = [...Array(26).keys()].map(c => String.fromCharCode(c + 65))
        .concat([...Array(26).keys()].map(c => String.fromCharCode(c + 97)));

    if (includeNumbers) {
       applicableIndices = applicableIndices.concat([...Array(10).keys()].map(c => String.fromCharCode(c + 48)));
    }

    if (includeSpecialCharacters) {
        applicableIndices = applicableIndices.concat([...Array(15).keys()].map(c => String.fromCharCode(c + 33)));
        applicableIndices = applicableIndices.concat([...Array(7).keys()].map(c => String.fromCharCode(c + 58)));
        applicableIndices = applicableIndices.concat([...Array(6).keys()].map(c => String.fromCharCode(c + 91)));
        applicableIndices = applicableIndices.concat([...Array(4).keys()].map(c => String.fromCharCode(c + 123)));
    }

    //console.log(applicableIndices);

    const maxRandomValue = applicableIndices.length;

    const passwordCharArray = [];

    for (let i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * (maxRandomValue + 1));

        passwordCharArray.push(applicableIndices[randomNum]);
    }

    return passwordCharArray.join('');
}