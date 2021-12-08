package keeper

import (
	"context"

	"github.com/charlenenicer/tictactoe/x/tictactoe/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateGame(goCtx context.Context, msg *types.MsgCreateGame) (*types.MsgCreateGameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var post = types.Game{
		Creator:    msg.Creator,
		Challenger: "",
		Turn:       "",
		Board:      []string{},
		Status:     "CREATED",
	}
	// Add a post to the store and get back the ID
	id := k.AppendGame(ctx, post)

	return &types.MsgCreateGameResponse{Id: id}, nil
}
