import path from 'path';
import dotenv from 'dotenv';
import { expect } from 'chai';
import { BridgeImpl } from 'bridge';

dotenv.config({ path: path.resolve(__dirname, '../test.env') });

const Bridge = new BridgeImpl();

describe('Web3', async function() {
  it('should execute "web3_clientVersion"', async function() {
    const clientVersion = await Bridge.web3().clientVersion();

    expect(clientVersion).to.be.equal('hashio/' + process.env.npm_package_version);
  });
});