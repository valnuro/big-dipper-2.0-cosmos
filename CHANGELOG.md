# Unreleased

## Changes
- Optimized initial loading by setting basic details first then profiles after ([\#629](https://github.com/forbole/big-dipper-2.0-cosmos/issues/629))
- Add vp token unit in config ([\#645](https://github.com/forbole/big-dipper-2.0-cosmos/issues/645))

## Bug fixes
- Fix home page validator image url not displaying correctly ([\#632](https://github.com/forbole/big-dipper-2.0-cosmos/issues/632))

## Migration

- [v1.7.0 to v1.10.0](https://docs.bigdipper.live/cosmos-based/frontend/migrations/v1.7.0-to-v1.10.0)

# base-v1.9.0 - 2021-01-10

## Changes
- Add logs in tx details ([\#515](https://github.com/forbole/big-dipper-2.0-cosmos/issues/515))
- Add tombstoned status ([\#600](https://github.com/forbole/big-dipper-2.0-cosmos/issues/600))
- Add manual versioning in ui ([\#605](https://github.com/forbole/big-dipper-2.0-cosmos/issues/605))
- Optimized tx list for chains with heavy traffic ([\#602](https://github.com/forbole/big-dipper-2.0-cosmos/issues/602))
- Setup case insensitive search in dtags ([\#592](https://github.com/forbole/big-dipper-2.0-cosmos/issues/592))
- Fix profiles logic ([\#591](https://github.com/forbole/big-dipper-2.0-cosmos/issues/591))
- Add AvatarNameListMsg for handling msgs with multiple users ([\#619](https://github.com/forbole/big-dipper-2.0-cosmos/issues/619))


# base-v1.8.4 - 2021-12-08
## Bug fixes
- Fix `feegrant` and `authz` messages ([\#588](https://github.com/forbole/big-dipper-2.0-cosmos/issues/588))

# base-v1.8.3 - 2021-12-07
## Bug fixes
- Fix validators list not displaying inactive validators ([\#583](https://github.com/forbole/big-dipper-2.0-cosmos/issues/583))

# base-v1.8.2 - 2021-12-06
## Bug fixes
- Fix APR to handle multiple supply coins

# base-v1.8.1 - 2021-12-06
## Bug fixes
- Fix `formatNumber` display after cleaning up ending 0s
# base-v1.8.0 - 2021-12-06

## Changes
- Display `APR` on title bar ([\#483](https://github.com/forbole/big-dipper-2.0-cosmos/issues/483))
- Add `@dtag` to search bar ([\#554](https://github.com/forbole/big-dipper-2.0-cosmos/issues/554))
- Add `/@dtag` feature ([\#428](https://github.com/forbole/big-dipper-2.0-cosmos/issues/428))
- Add `feegrant` and `authz` messages ([\#481](https://github.com/forbole/big-dipper-2.0-cosmos/issues/481))
- Add `vesting` messages ([\#538](https://github.com/forbole/big-dipper-2.0-cosmos/issues/538))
- Add status row in `/validators` ([\#556](https://github.com/forbole/big-dipper-2.0-cosmos/issues/556))
- Show who the top 34% validators are ([\#506](https://github.com/forbole/big-dipper-2.0-cosmos/issues/506))
## Bug fixes
- Fix validator searchbar ([\#540](https://github.com/forbole/big-dipper-2.0-cosmos/issues/540))

# base-v1.7.0 - 2021-11-23

## Changes

- Fix account details denom display ([\#478](https://github.com/forbole/big-dipper-2.0-cosmos/issues/478))
- Replace average block time with average since last hour ([\#480](https://github.com/forbole/big-dipper-2.0-cosmos/issues/480))
- Renamed `PROFILE_DETAILS` to `ADDRESS_DETAILS` ([\#503](https://github.com/forbole/big-dipper-2.0-cosmos/issues/503))
- Update handling of block height in searchbar ([\#501](https://github.com/forbole/big-dipper-2.0-cosmos/issues/501))
- Fix community pool spend proposal display ([\#520](https://github.com/forbole/big-dipper-2.0-cosmos/issues/520))
- Update how tokens are formatted and display up to 18 decimal places ([\#524](https://github.com/forbole/big-dipper-2.0-cosmos/issues/524))
- Auto display 0% if validator is not active ([\#541](https://github.com/forbole/big-dipper-2.0-cosmos/issues/541))

## Migration

- [v1.6.0 to v1.7.0](https://docs.bigdipper.live/cosmos-based/frontend/migrations/v1.6.0-to-v1.7.0)

# base-v1.6.0 - 2021-11-01

## Changes

- Converted all react context in to recoil ([\#455](https://github.com/forbole/big-dipper-2.0-cosmos/issues/455))
- Enabled desmos profile for delegators ([\#277](https://github.com/forbole/big-dipper-2.0-cosmos/issues/277))
- Add license comment ([\#474](https://github.com/forbole/big-dipper-2.0-cosmos/issues/474))
- Add redirect for old big dipper urls ([\#427](https://github.com/forbole/big-dipper-2.0-cosmos/issues/427))
- Fix desmos profile alignment ([\#435](https://github.com/forbole/big-dipper-2.0-cosmos/issues/435))

## Migration

- [v1.x.x to v1.6.0](https://docs.bigdipper.live/cosmos-based/frontend/migrations/v1.x.x-to-v1.6.0)

# base-v1.5.1 - 2021-10-11

## Changes

- Fixed `detailed` transaction list not showing correct msg count

# base-v1.5.0 - 2021-10-11

## Changes

- Displayed desmos profile native address in connections ([\#420](https://github.com/forbole/big-dipper-2.0-cosmos/issues/420))
- Create `compact` and `detailed` transaction list views for users with different needs ([\#391](https://github.com/forbole/big-dipper-2.0-cosmos/issues/391))
- Updated `chain_config`

# base-v1.4.0 - 2021-10-04

## Changes

- Updated markdown to handle `\n`
- Changed validator list tab orders ([\#411](https://github.com/forbole/big-dipper-2.0-cosmos/issues/411))
- Update numeral formats based on denom exponent ([\#409](https://github.com/forbole/big-dipper-2.0-cosmos/issues/409))

## Bug fixes

- Fixed rewards dict inside account details ([\#412](https://github.com/forbole/big-dipper-2.0-cosmos/issues/412))

# base-v1.3.0 - 2021-09-27

## Changes

- Hides delegators in account details if amount is 0 ([\#369](https://github.com/forbole/big-dipper-2.0-cosmos/issues/369))
- Add MsgCoin global delclaration ([\#367](https://github.com/forbole/big-dipper-2.0-cosmos/issues/367))

## Bug fixes

- Fixed tx msg label padding typo ([\#382](https://github.com/forbole/big-dipper-2.0-cosmos/issues/382))
- Added default config value for online voting power ([\#378](https://github.com/forbole/big-dipper-2.0-cosmos/issues/378))
- Fixes how queries are called so data matches on ui ([\#371](https://github.com/forbole/big-dipper-2.0-cosmos/issues/371))

# base-v1.2.0 - 2021-09-20

## Changes

- Update price and market cap display ([\#322](https://github.com/forbole/big-dipper-2.0-cosmos/issues/322))

## Bug fixes

- Fix account and validator details redelegation linking consensus address ([\#323](https://github.com/forbole/big-dipper-2.0-cosmos/issues/323))

# base-v1.1.1 - 2021-09-17

## Hotfix

- Fixed display error with previous delegation rewards also adding to total rewards balance

# base-v1.1.0 - 2021-09-13

## Changes

- Centered desmos profile cover photo ([\#285](https://github.com/forbole/big-dipper-2.0-cosmos/issues/285))
- Add License to footer ([\#287](https://github.com/forbole/big-dipper-2.0-cosmos/issues/287))
- Changed position of desmos profile
- Fix avatar images not loading correctly ([\#296](https://github.com/forbole/big-dipper-2.0-cosmos/issues/296))
- Fix rendering issue on account and validtor details page ([\#297](https://github.com/forbole/big-dipper-2.0-cosmos/issues/297))
- Add validator status to account delegation component ([\#307](https://github.com/forbole/big-dipper-2.0-cosmos/issues/307))

# base-v1.0.9 - 2021-09-03

## Bug fixes

- Fixed desmos profile edge case display

# base-v1.0.8 - 2021-09-03

## Changes

- Change how markdown is displayed ([\#274](https://github.com/forbole/big-dipper-2.0-cosmos/issues/274))
- Update desmos profile component ([\#273](https://github.com/forbole/big-dipper-2.0-cosmos/issues/273)) ([\#140](https://github.com/forbole/big-dipper-2.0-cosmos/issues/140))
- Fixed account detail balance ([\#271](https://github.com/forbole/big-dipper-2.0-cosmos/issues/271))
- Update account/ validator details staking component sorting order ([\#266](https://github.com/forbole/big-dipper-2.0-cosmos/issues/266))

## Bug fixes

- Fix withdraw rewards display error if not enough gas

# base-v1.0.7 - 2021-08-31

## Changes

- Added testnet and mainnet configs for easier deployment of the same chain in different stages
- Update akash webhook CICD

# base-v1.0.6 - 2021-08-25

## Changes

- Updated SEO structure

# base-v1.0.5 - 2021-08-23

## Changes

- Updated models msg types ([\#225](https://github.com/forbole/big-dipper-2.0-cosmos/issues/225))
- Update github actions CI/CD

## Bug fixes

- Fix staking param details displaying incorrect `Max Validators`

# base-v1.0.4 - 2021-08-19

## Changes

- Change logo placement in nav mobile ([\#202](https://github.com/forbole/big-dipper-2.0-cosmos/issues/202))
- Increased tag colors ([\#207](https://github.com/forbole/big-dipper-2.0-cosmos/issues/207))
- Add IBC messages ([\#192](https://github.com/forbole/big-dipper-2.0-cosmos/issues/192))

# base-v1.0.3

## Changes

- Bump next 10 to next 11
- Bump react v16.x.x to v17.x.x
- Update logo to have max height of 55px

# base-v1.0.2

## Changes

- Update the structure layout of themes
- Update footer light and dark theme
- Add maintainer section in footer

# base-v1.0.1

## Bug fixes

- Fixed tokenomics legend to use the correct colors

# base-v1.0.0

## Changes

- Created initial boilerplate base
- Updated proposal details to display results using snapshots instead of realtime data ([\#116](https://github.com/forbole/big-dipper-2.0-cosmos/issues/116))
- Added desmos profile feature
- Update chain status notifications ([\#141](https://github.com/forbole/big-dipper-2.0-cosmos/issues/141))
- Add custom 500 page ([\#149](https://github.com/forbole/big-dipper-2.0-cosmos/issues/149))
- Fix twitter crawler preview ([\#144](https://github.com/forbole/big-dipper-2.0-cosmos/issues/144))
- Update params visualisation ([\#152](https://github.com/forbole/big-dipper-2.0-cosmos/issues/152))
- Make mui tabs scrollable ([\#152](https://github.com/forbole/big-dipper-2.0-cosmos/issues/153))
- Moved documentation to own repo ([\#162](https://github.com/forbole/big-dipper-2.0-cosmos/issues/162))
- Add validator last seen active feature ([\#160](https://github.com/forbole/big-dipper-2.0-cosmos/issues/160))
- Updated params to be JSONB with models typed
- Add logos by different theme ([\#168](https://github.com/forbole/big-dipper-2.0-cosmos/issues/160))
