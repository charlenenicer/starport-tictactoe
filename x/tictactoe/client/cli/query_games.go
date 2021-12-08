package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/charlenenicer/tictactoe/x/tictactoe/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
)

var _ = strconv.Itoa(0)

func CmdGames() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "games",
		Short: "Query games",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGamesRequest{}

			res, err := queryClient.Games(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
