package tictactoe_test

import (
	"testing"

	keepertest "github.com/charlenenicer/tictactoe/testutil/keeper"
	"github.com/charlenenicer/tictactoe/x/tictactoe"
	"github.com/charlenenicer/tictactoe/x/tictactoe/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TictactoeKeeper(t)
	tictactoe.InitGenesis(ctx, *k, genesisState)
	got := tictactoe.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	// this line is used by starport scaffolding # genesis/test/assert
}
