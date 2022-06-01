import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EtherService } from '../../services/ether.service';

@Component({
  selector: 'app-poll-header',
  templateUrl: './poll-header.component.html',
  styleUrls: ['./poll-header.component.scss']
})
export class PollHeaderComponent implements OnInit {
  constructor(public route: Router, private etherService: EtherService) { }
   currentAccount: any;
   isAdmin = false;
   ngOnInit(): void {
     this.etherService.isAdmin().then( isAdmin => this.isAdmin = isAdmin);
     console.log('isAdmin', this.isAdmin);
       this.checkForWalletConnect();
  }

  setActive(value: string): boolean {
    return  this.route.url === value;
  }

   async  connectYourWallet() {
     try {
      const ethereum = window['ethereum'];
      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected', accounts[0]);
      this.currentAccount = accounts[0];
    } catch (error) {
      console.log(error);
    }
  }
  async checkForWalletConnect() {
    try {
      const ethereum = window['ethereum'];
      if (!ethereum) {
        console.log('Make sure you have metamask!');
        return;
      } else {
        console.log('We have the ethereum object', ethereum);
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log('Found an authorized account:', account);
        this.currentAccount = account;
      } else {
        console.log('No authorized account found');
      }
    } catch (error) {
      console.log(error);
    }
  }

  goToPoll() {
    this.route.navigate(['/new-poll']);
  }
}
