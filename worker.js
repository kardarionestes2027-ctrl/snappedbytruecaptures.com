export default {
async fetch(request) {
return new Response("SnappedBy True Capture is live!", {
headers: {
"content-type": "text/plain;charset=UTF-8",
},
});
},
};
