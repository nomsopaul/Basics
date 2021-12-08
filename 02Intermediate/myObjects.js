let myYoutubeVideoOne = {
    title: 'Loops in Javascript',
    videoLength: 15,
    videoDescription: 'this is a beginner course',
    yer: '2021',
    author: 'Chukwunomso'
}

let myYoutubeVideoTwo = {
  title: "Functions in Javascript",
  videoLength: 20,
  videoDescription: "this is a beginner course",
  yer: "2021",
  author: "Chukwunomso",
};


// console.log(myYoutubeVideo);

// console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.author}`)




let changeVideoLength = function(myObject) {
    return {
        formatOne: `Time of this video is: ${myObject.videoLength + 2}`,
        formatTwo: `Time of this video is: ${myObject.videoLength + 2}` }
    
    }

    let adOne = changeVideoLength(myYoutubeVideoTwo);
    console.log(adOne.formatOne);


