//count vovels 
let msg = "red and white"
let count=0
for (let i = 0; i < msg.length; i++) {
    if (msg[i] == 'a' || msg[i] == 'e' || msg[i] == 'i' || msg[i] == '0' || msg[i] == 'u') {
        count ++ ;
    }
}
console.log(count)