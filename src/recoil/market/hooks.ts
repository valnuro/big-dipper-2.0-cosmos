/* eslint-disable max-len */
import * as R from 'ramda';
import numeral from 'numeral';
import {
  useRecoilState,
  SetterOrUpdater,
} from 'recoil';
import Big from 'big.js';
import {
  useMarketDataQuery,
  MarketDataQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import {
  writeMarket,
} from '@recoil/market';
import { AtomState } from '@recoil/market/types';
import { getDenom } from '@utils/get_denom';
import { formatToken } from '@utils/format_token';

export const useMarketRecoil = () => {
  const [market, setMarket] = useRecoilState(writeMarket) as [AtomState, SetterOrUpdater<AtomState>];

  useMarketDataQuery(
    {
      variables: {
        denom: chainConfig?.tokenUnits[chainConfig.primaryTokenUnit]?.display,
      },
      onCompleted: (data) => {
        if (data) {
          setMarket(formatUseChainIdQuery(data));
        }
      },
    },
  );

  const formatUseChainIdQuery = (data: MarketDataQuery): AtomState => {
    let {
      communityPool, price, marketCap,
    } = market;

    if (data?.tokenPrice?.length) {
      price = numeral(numeral(data?.tokenPrice[0]?.price).format('0.[00]', Math.floor)).value();
      marketCap = data.tokenPrice[0]?.marketCap;
    }

    const [communityPoolCoin] = R.pathOr([], ['communityPool', 0, 'coins'], data).filter((x) => x.denom === chainConfig.primaryTokenUnit);
    const inflation = R.pathOr(0, ['inflation', 0, 'value'], data);

    const rawSupplyAmount = getDenom(
      R.pathOr([], ['supply', 0, 'coins'], data),
      chainConfig.primaryTokenUnit,
    ).amount;
    const supply = formatToken(
      rawSupplyAmount,
      chainConfig.primaryTokenUnit,
    );

    if (communityPoolCoin) {
      communityPool = formatToken(communityPoolCoin.amount, communityPoolCoin.denom);
    }

    const bondedTokens = R.pathOr(0, ['bondedTokens', 0, 'bonded_tokens'], data);

    const blocksPerYear = R.pathOr(0, ['mintParams', 0, 'params', 'blocks_per_year'], data);
    const averageBlockTime = R.pathOr(0, ['averageBlockTime', 0, 'average_time'], data);
    
    let blockAdjustment = 1;
    if(blocksPerYear) {
      let blocksTimePerYear = 365*24*60*60/blocksPerYear;
      blockAdjustment = blocksTimePerYear/averageBlockTime;
    }
    
    const CommunityTax = parseFloat(R.pathOr(0, ['distributionParams', 0, 'params', 'community_tax'], data));

    const apr = Big(rawSupplyAmount).times(1-CommunityTax).times(blockAdjustment).times(inflation).div(bondedTokens).toNumber();

    return ({
      price,
      supply,
      marketCap,
      inflation,
      communityPool,
      apr,
    });
  };
};
