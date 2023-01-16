/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category ThawDelegatedAccount
 * @category generated
 */
export const ThawDelegatedAccountStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number;
}>([['instructionDiscriminator', beet.u8]], 'ThawDelegatedAccountInstructionArgs');
/**
 * Accounts required by the _ThawDelegatedAccount_ instruction
 *
 * @property [_writable_, **signer**] delegate Delegate
 * @property [_writable_] tokenAccount Token account to thaw
 * @property [] edition Edition
 * @property [] mint Token mint
 * @category Instructions
 * @category ThawDelegatedAccount
 * @category generated
 */
export type ThawDelegatedAccountInstructionAccounts = {
  delegate: web3.PublicKey;
  tokenAccount: web3.PublicKey;
  edition: web3.PublicKey;
  mint: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
};

export const thawDelegatedAccountInstructionDiscriminator = 27;

/**
 * Creates a _ThawDelegatedAccount_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category ThawDelegatedAccount
 * @category generated
 */
export function createThawDelegatedAccountInstruction(
  accounts: ThawDelegatedAccountInstructionAccounts,
  programId = new web3.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'),
) {
  const [data] = ThawDelegatedAccountStruct.serialize({
    instructionDiscriminator: thawDelegatedAccountInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.delegate,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.tokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.edition,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
