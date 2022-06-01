import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import polling from '../../utils/NewPolling.json';

@Injectable({
  providedIn: 'root'
})
export class EtherService {
 contractAddress = '0x9951948611F433440eab29D58757B35189ad8D7F';
  contractABI = polling.abi;
  signer: any;
  MoodContract: any;
  constructor() {
      try {
      const ethereum = (window as any).ethereum;
      if (ethereum) {
       const provider = new ethers.providers.Web3Provider(ethereum, "rinkeby");
       provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
     this.signer = provider.getSigner(accounts[0]);
     this.MoodContract = new ethers.Contract(
      this.contractAddress,
      this.contractABI,
      this.signer
    );
  });
});
      } else {
        console.log('Ethereum object doesnt exist');
      }
    } catch (error) {
      alert(error);
    }
  }

   async vote(name: string) {
      try {
      const ethereum = (window as any).ethereum;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(this.contractAddress, this.contractABI, signer);
        const count1 = await wavePortalContract['vote'](name);
        alert('Thank you for your vote')
      } else {
        console.log('Ethereum object doesnt exist');
      }
    } catch (error) {
      alert('Sorry! Unexpected issue');
    }
  }

    async addCandidates(fullName: string) {
      try {
       const ethereum = (window as any).ethereum;
      if (ethereum) {
       const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(this.contractAddress, this.contractABI, signer);
        const count1 = await wavePortalContract['addCandidate'](fullName);
        // const accounts = await ethereum.request({ method: 'eth_accounts' });
        alert('Candidates added');
      } else {
        console.log('Ethereum object doesnt exist');
      }

    } catch (error) {
      alert(error);
    }
    }

 async getCandidate() {
      try {
       const ethereum = (window as any).ethereum;
      if (ethereum) {
       const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(this.contractAddress, this.contractABI, signer);
        const count1 = await wavePortalContract['getProposalLists']();
        // const accounts = await ethereum.request({ method: 'eth_accounts' });
        console.log('candidates', count1);
        debugger
      } else {
        console.log('Ethereum object doesnt exist');
      }

    } catch (error) {
      alert(error);
    }
    }

    async isAdmin(){
       try {
       const ethereum = (window as any).ethereum;
      if (ethereum) {
       const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(this.contractAddress, this.contractABI, signer);
        const count1 = await wavePortalContract['chairperson']();
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        return count1.toString() == accounts[0].toString();
      } else {
        console.log('Ethereum object doesnt exist');
        return false;
      }

    } catch (error) {
      alert(error);
      return false;
    }
    }
}
