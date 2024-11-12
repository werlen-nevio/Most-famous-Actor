const { getMostFamousActor, getScoreFromApi, saveTopActors } = require('../src/main.js');
const { options } = require('../env.js');

global.fetch = jest.fn();
global.$ = require('jquery');

describe('getScoreFromApi', () => {
    test('returns correct score from API result', () => {
        const apiResult = {
            results: [
                { name: 'Actor1', popularity: 80, known_for_department: 'Acting' },
            ],
        };
        const score = getScoreFromApi(apiResult, 'Actor1');
        expect(score).toEqual({ name: 'Actor1', popularity: 80 });
    });

    test('returns undefined if no matching actor', () => {
        const apiResult = { results: [] };
        const score = getScoreFromApi(apiResult, 'UnknownActor');
        expect(score).toBeUndefined();
    });
});

describe('saveTopActors', () => {
    test('updates the table with top actors', () => {
        // Mock table body
        document.body.innerHTML = '<table><tbody id="actor-table-body"></tbody></table>';

        const topActors = [
            { name: 'Actor1', popularity: 80 },
            { name: 'Actor2', popularity: 60 },
            { name: 'Actor3', popularity: 40 },
        ];

        saveTopActors(topActors);

        const rows = $('#actor-table-body tr');
        expect(rows.length).toBe(3);
        expect(rows.eq(0).find('td').eq(0).text()).toBe('Actor1');
        expect(rows.eq(0).find('td').eq(1).text()).toBe('80');
    });
});

describe('getMostFamousActor', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input id="ActorInput" />
            <table>
                <tbody id="actor-table-body"></tbody>
            </table>
        `;
        global.fetch.mockClear();
    });

    test('handles empty input gracefully', () => {
        $('#ActorInput').val('');
        getMostFamousActor();
        expect(global.fetch).not.toHaveBeenCalled();
    });

    test('handles fetch errors gracefully', async () => {
        $('#ActorInput').val('Scarlett Johansson');

        global.fetch.mockRejectedValueOnce(new Error('API error'));

        await getMostFamousActor();

        const rows = $('#actor-table-body tr');
        expect(rows.length).toBe(0);
    });
});
