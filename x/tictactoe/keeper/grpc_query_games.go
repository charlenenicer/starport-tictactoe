package keeper

import (
	"context"

	"github.com/charlenenicer/tictactoe/x/tictactoe/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Games(goCtx context.Context, req *types.QueryGamesRequest) (*types.QueryGamesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	var games []*types.Game

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	return &types.QueryGamesResponse{}, nil
}
