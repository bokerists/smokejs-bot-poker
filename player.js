
exports = module.exports = {

  VERSION: 'Superstar poker js-player',

  bet: function (gamestate) {

    'use strict';

    const gs = gamestate;
    const p = gs.players;
    const me = p[gs.me];
    
    console.log(gs);

    if (me.cards.find(card => parseInt(card.rank) !== parseInt(card.rank))) {
      console.log(`bidirindrip wip raise ${gs.callAmount}`);
      return gs.minimumRaiseAmount * 2;
    }
    else if (me.chipsBet > 0){
      console.log(`bid drip call ${gs.callAmount}`);
      return gs.callAmount;
    }

    console.log(`bid drip 0`);
    return 0;

  }

};
