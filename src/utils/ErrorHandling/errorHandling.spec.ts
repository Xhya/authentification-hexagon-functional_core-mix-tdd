import 'mocha';
import { expect } from 'chai';
import ErrorHandling from './errorHandling.utils';

describe('ErrorHandling', () => {
    describe('validateInput()', () => {
        it('it should ', () => {
            const obj = { matchId: 1, pointsTeam1: 84, pointsTeam2: undefined, team1: "Raptors", team2: "Lakers"};
            expect(() => ErrorHandling.checkNotUndefinedParameters(obj)).to.throw("Missing parameter [ pointsTeam2 ]")
        });
        it('it should ', () => {
            const obj = { matchId: 1, pointsTeam1: 84, pointsTeam2: 87, team1: "Raptors", team2: "Lakers"};
            const array = [1, 2, 3];
            expect(() => ErrorHandling.checkNotUndefinedParameters(obj, array)).to.not.throw()
        });
        it('it should ', () => {
            const obj = { matchId: 1, pointsTeam1: 84, pointsTeam2: 87, team1: "Raptors", team2: "Lakers"};
            const array = undefined;
            expect(() => ErrorHandling.checkNotUndefinedParameters(obj, array)).to.throw("Missing parameter [ at position 1 ]")
        });
    });

});
