const getUserName = (firstName,lastName) => {
    console.log("asdasdas");
    try {
        
        let userName = firstName.slice(0,firstName.length/2) + lastName.slice(0,lastName.length/2) + Math.floor(Math.random() * 100)
        console.log(userName,"asdasdas");
        return userName
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = { getUserName: getUserName };