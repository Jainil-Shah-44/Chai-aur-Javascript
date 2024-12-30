function fetchUserData(){
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            resolve({name:"Jainil", url:"http://jainilshah.com"})
            
        },3000);

    })
}

// fetchUserData
// .then()
// .catch()

async function getUserData() {
    try {
        console.log('Fetching User Data...');
        const userData = await fetchUserData();
        console.log("User Data Fetched Successfully")
        console.log("User Data : ",userData);
    } catch (error) {
        console.log("Error Fetching Data",error)
        
    }
}

getUserData()