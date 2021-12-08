package keeper

import (
	"github.com/charlenenicer/tictactoe/x/tictactoe/types"
)

var _ types.QueryServer = Keeper{}
