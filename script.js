const samsFriends = [];
const newFriends= samsFriends.push("morgan", "riley", "jessie", "skyler", "frankie");
const ashersFriends = [];
const newFriends2 = ashersFriends.push("morgan", "aiden", "angel", "ariel", "skyler");
const friendsRecommendationAsher = [];
let currentFriend = "";
let isCommonFriend = false;
for(let i = 0; i < samsFriends.length; i++){
    currentFriend = samsFriends[i];
    if(!isCommonFriend){
        friendsRecommendationAsher.push(currentFriend);
    }
}
console.log("Friends Recommended for Asher: ");
console.log(friendsRecommendationAsher);

