package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/charlenenicer/tictactoe/testutil/keeper"
	"github.com/charlenenicer/tictactoe/x/tictactoe/keeper"
	"github.com/charlenenicer/tictactoe/x/tictactoe/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.TictactoeKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
