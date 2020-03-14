function getMove(name) {
     
    return window
        .fetch(name)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

module.exports = { getMove };