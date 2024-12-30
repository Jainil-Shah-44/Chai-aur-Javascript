function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data Fetched ")
        }, 2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment Data Fetched")            

        }, 3000);
    })
}


async function getBlogData() {
    try {
        console.log("Fetching Blog Data...")
        // const blogData = await fetchPostData()
        // const commentData = await fetchCommentData()

        const [postData,commentData] = await Promise.all([fetchPostData(),fetchCommentData()])

        console.log(postData)
        console.log(commentData)

        console.log("Fetch Complete")
        
    } catch (error) {
        console.log("Error fetching Blog Data")
        
    }
    
}

getBlogData()