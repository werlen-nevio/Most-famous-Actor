function getMostFamousActor() {
    const inputVal = $('#ActorInput').val();

    if (!inputVal || inputVal.length === 0) {
        return;
    }    

    const actors = inputVal.split(',');
    let actorScores = [];

    const promises = [];

    for (let i = 0; i < actors.length; i++) {
        actors[i] = actors[i].trim();
        const actor = actors[i];
    
        const promise = fetch('https://api.themoviedb.org/3/search/person?query=' + actor, options)
            .then(res => res.json())
            .then(res => {
                const score = getScoreFromApi(res, actor);
                if (score !== undefined) {
                    actorScores.push(score);
                }
            })
            .catch(err => console.error("Actor not found: '" + actor + "'"));
    
        promises.push(promise);
    }
    
    Promise.all(promises).then(() => {
        actorScores.sort((a, b) => b.popularity - a.popularity);
        actorScores = actorScores.slice(0, 3);

        saveTopActors(actorScores);
    });    
}

function getScoreFromApi(apiResult, actor) {
    const result = apiResult.results.filter(entry => entry.known_for_department === "Acting")[0];

    if (result === undefined) {
        console.error("Actor not found: '" + actor + "'");
        return;
    }

    const actorScore = { 
        "name": result.name, 
        "popularity": parseFloat(result.popularity)
    };
    
    return actorScore;
}

function saveTopActors(topActors) {
    // Temp Set Data Into Table
    $('#actor-table-body').empty();
    for (let i = 0; i < topActors.length; i++) {
        const actor = topActors[i];
        $('#actor-table-body').append('<tr><td>' + actor.name + '</td><td>' + actor.popularity + '</td></tr>');
    }
}

module.exports = {
    getMostFamousActor,
    getScoreFromApi,
    saveTopActors,
};