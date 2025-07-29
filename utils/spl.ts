import { Connection, GetProgramAccountsFilter } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

/**
 * @param pubkey 
 * @returns 
 */

export async function getAtaList(connection: Connection, pubkey: string) {
    
    const filters: GetProgramAccountsFilter[] = [
        {
            dataSize: 165,    
        },
        {
            memcmp: {
                offset: 32,     
                bytes: pubkey,  
            },
        }];

    const accounts = await connection.getParsedProgramAccounts(
        TOKEN_PROGRAM_ID, //new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
        { filters: filters }
    );
    const ataList = accounts.map((account: any, i: any) => account.pubkey.toBase58());

    return [pubkey, ...ataList]
}

